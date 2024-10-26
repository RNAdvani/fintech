'use client';
import React, { useCallback, useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { SimulateSchema } from '@/utils'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SEARCH_STOCKS, SIMULATE } from '@/apiUrl'
import axios from 'axios'
import StockChartModal from '../shared/StockChart'

interface SearchItem {
  symbol: string;
  name: string;
}

const SearchItem = ({ name, symbol, onSelect }: SearchItem & { onSelect: (symbol: string, name: string) => void }) => {
  return (
    <div onClick={() => onSelect(symbol, name)} className="flex cursor-pointer items-center space-x-2 p-4">
      <p className="text-lightgreen">{symbol}</p>
      <p className="text-darkgreen font-semibold">{name}</p>
    </div>
  )
}

const SimulateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);  // Store simulation result here
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [selectedStock, setSelectedStock] = useState({ symbol: "", name: "" });
  const [showModal, setShowModal] = useState(false);  // Control modal visibility

  const form = useForm<z.infer<typeof SimulateSchema>>({
    resolver: zodResolver(SimulateSchema),
    defaultValues: {
      amount: 0,
      fraction_of_amount: 0.1,
      profit_percentage: 10,
      loss_percentage: 5
    }
  });

  const onSubmit = async (values: z.infer<typeof SimulateSchema>) => {
    setIsLoading(true);
    const { amount, fraction_of_amount, profit_percentage, loss_percentage } = values;

    try {
      const payload = {
        symbol: selectedStock.symbol,
        initial_capital: Number(amount),
        investment_fraction: Number(fraction_of_amount),
        stop_loss_threshold: Number(loss_percentage),
        profit_target: Number(profit_percentage),
      };

      // Send data to the Python endpoint
      const res = await axios.post("http://localhost:8001/simulate", JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Store result and open modal to display the chart
      setResult(res.data);
      setShowModal(true);  // Show the modal with the data
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setSelectedStock({ symbol: "", name: "" });
  };

  const handleSearch = useCallback(async () => {
    if (!query) return;
    try {
      const res = await axios.get(SEARCH_STOCKS, {
        params: {
          q: query,
        },
      });
      setSearchResults(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query, handleSearch]);

  const setCompany = (symbol: string, name: string) => {
    setSelectedStock({ symbol, name });
    setQuery(symbol);
    setSearchResults([]);
  }

  return (
    <>
      {showModal && result && (
        <StockChartModal 
          data={result}  // Pass the simulation data to the modal
          onClose={() => setShowModal(false)}  // Close modal handler
        />
      )}
      <div className='bg-background p-4 rounded-lg'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search stock symbol..."
                  className="w-full placeholder:text-verylightgreen py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#000c08] text-white"
                />
                {selectedStock.name && (
                  <p className="text-sm text-gray-500 mt-1">{selectedStock.name}</p>
                )}
                {query && searchResults.length > 0 && (
                  <div className="absolute bg-background mt-1 rounded-lg w-full max-h-[10rem] overflow-y-scroll no-scrollbar z-10">
                    {searchResults.map((item, index) => (
                      <SearchItem key={index} name={item.name} symbol={item.symbol} onSelect={setCompany} />
                    ))}
                  </div>
                )}
              </div>
              <FormField
                control={form.control}
                name='amount'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='9999' type="number" onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='fraction_of_amount'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fraction of amount (0-1)</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        placeholder='0.1' 
                        type='number' 
                        step="0.01" 
                        min="0" 
                        max="1" 
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          field.onChange(isNaN(value) ? '' : Math.min(Math.max(value, 0), 1));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='profit_percentage'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profit percentage</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='10' type='number' min={5} max={100} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='loss_percentage'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loss Percentage</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='5' type='number' min={5} max={100} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='w-full'
                disabled={isLoading || !selectedStock.symbol}
              >
                {isLoading ? 'Simulating...' : 'Simulate'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default SimulateForm;
