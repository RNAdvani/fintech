"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { currencies } from "@/config";
import { CurrencyType } from "@/types";
import { toast } from "@/hooks/use-toast";
import axios from "axios"


interface IncomeCardProps {
  userId: string
  title: string
  income?: number
  initialNeedRatio?: number
  initialWantRatio?: number
  initialInvestmentRatio?: number
  initialSelectedRatio?: string
  initialCurrency?: CurrencyType
  href?: string
  actionLabel: string
}

export const IncomeCard: FC<IncomeCardProps> = ({
  userId,
  title,
  income,
  initialNeedRatio,
  initialWantRatio,
  initialInvestmentRatio,
  initialSelectedRatio,
  initialCurrency,
  href = "/dashboard",
  actionLabel,
}) => {
  const router = useRouter()

  const [monthlyIncome, setMonthlyIncome] = useState<string | undefined>(
    income?.toString() ?? undefined
  );

  const [ratioSelected, setRatioSelected] = useState<"default" | "custom">(
    (initialSelectedRatio as "default" | "custom") ?? "default"
  );
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>(
    initialCurrency ?? "₹"
  );

  const [inputValidationState, setInputValidationState] = useState<
    "valid" | "invalid"
  >("valid");

  const [needRatio, setNeedRatio] = useState(
    ratioSelected === "default" ? "50" : initialNeedRatio?.toString() ?? ""
  );
  const [wantRatio, setWantRatio] = useState(
    ratioSelected === "default" ? "30" : initialWantRatio?.toString() ?? ""
  );
  const [investmentRatio, setInvestmentRatio] = useState(
    ratioSelected === "default"
      ? "20"
      : initialInvestmentRatio?.toString() ?? ""
  );

  const updateInputValidationState = useCallback(() => {
    if (!monthlyIncome) return setInputValidationState("valid");

    if (parseFloat(monthlyIncome) > 0) {
      setInputValidationState("valid");
    } else {
      setInputValidationState("invalid");
    }
  }, [monthlyIncome]);

  const handleUpdateMonthlyIncome = () => {
    if (inputValidationState === "invalid") return;

    if (!monthlyIncome) {
      return toast({
        title: "Monthly Income is required",
        description: "Please enter a valid monthly income.",
        variant: "destructive",
      });
    }

    if (
      parseFloat(needRatio) +
        parseFloat(wantRatio) +
        parseFloat(investmentRatio) !==
      100
    ) {
      return toast({
        title: "Invalid ratio",
        description: "Ratio must add up to 100%.",
        variant: "destructive",
      });
    }

    const parsedAmount = parseFloat(monthlyIncome.replace(/,/g, ""));

    if (!parsedAmount) {
      return toast({
        title: "Invalid monthly income",
        description: "Please enter a valid monthly income.",
        variant: "destructive",
      });
    }

    // Handle the update logic here
    console.log("Updating monthly income:", parsedAmount);
    router.push(`/learning`);
  };

  const handleUpdate = async () => {
    try {
      const data = {
        clerkId: userId,
        monthlyIncome: Number(monthlyIncome),
        currency: selectedCurrency,
        needRatio: Number(needRatio),
        wantRatio: Number(wantRatio),
        investmentRatio: Number(investmentRatio),
      }
  
      const res = await axios.post(`http://localhost:4000/api/v1/users/update`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
  
      console.log(res.data);
      router.push("/learning")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    updateInputValidationState();
  }, [monthlyIncome, updateInputValidationState]);

  useEffect(() => {
    if (ratioSelected === "default") {
      setNeedRatio("50");
      setWantRatio("30");
      setInvestmentRatio("20");
    }
  }, [ratioSelected]);

  return (
    <Card className="bg-primary-300 text-primary-400">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex  flex-col gap-y-4  relative">
        <div className="flex gap-x-1.5 items-center">
          <Label>Monthly Income</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-3 w-3 mt-[2px] text-secondary-300" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  To allocate your budget between needs, wants and investments.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={selectedCurrency}
            onValueChange={(value) =>
              setSelectedCurrency(value as CurrencyType)
            }
          >
            <SelectTrigger className="w-full  bg-primary-300 text-primary-400">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent className="bg-primary-200 text-primary-400">
              {currencies.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Input
          placeholder="Enter your monthly income here."
          value={monthlyIncome ?? ""}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          className={cn("bg-primary-200 text-primary-400", inputValidationState === "invalid" && "border-red-500")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUpdateMonthlyIncome();
            }
          }}
        />
        {inputValidationState === "invalid" && (
          <p className="text-red-500 text-sm">Please enter a valid monthly income.</p>
        )}

        <div className="flex flex-col">
          <RadioGroup
            className="flex flex-wrap md:flex-nowrap gap-x-4"
            value={ratioSelected}
            onValueChange={(value) =>
              setRatioSelected(value as "default" | "custom")
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="default"
                id="default"
                className="border-primary-400 text-primary-400"
              />
              <Label htmlFor="default">
                <span className="font-medium">50-30-20</span>
                <p className="text-sm text-secondary-300">
                  Continue with the standard ratio.
                </p>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="custom"
                id="custom"
                className="border-primary-400 text-primary-400"
              />
              <Label htmlFor="custom">
                <span className="font-medium">Custom</span>
                <p className="text-sm text-secondary-300">
                  Customize my ratio.
                </p>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {ratioSelected === "custom" && (
          <Card className="bg-primary-200 text-primary-400">
            <CardContent className="pt-6">
              {parseFloat(needRatio) +
                parseFloat(wantRatio) +
                parseFloat(investmentRatio) !==
                100 && (
                <p className="text-red-500 text-xs tracking-tight mb-2">
                  Ratio must add up to 100%
                </p>
              )}
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <div className="w-full">
                  <Label htmlFor="need-ratio">Need ratio</Label>
                  <Input
                    id="need-ratio"
                    placeholder="0"
                    value={needRatio ?? ""}
                    onChange={(e) => setNeedRatio(e.target.value)}
                    className="bg-primary-300 text-primary-400"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="want-ratio">Want ratio</Label>
                  <Input
                    id="want-ratio"
                    placeholder="0"
                    value={wantRatio ?? ""}
                    onChange={(e) => setWantRatio(e.target.value)}
                    className="bg-primary-300 text-primary-400"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="investment-ratio">Investment ratio</Label>
                  <Input
                    id="investment-ratio"
                    placeholder="0"
                    value={investmentRatio?.toString() ?? ""}
                    onChange={(e) => setInvestmentRatio(e.target.value)}
                    className="bg-primary-300 text-primary-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-y-2 items-start w-full">
        <Card className="w-full bg-primary-200 text-primary-400">
          <CardContent className="py-2">
            <div className="flex justify-around gap-2 tracking-tight font-mono text-sm flex-wrap">
              <span>
                Needs: {selectedCurrency}
                <span className="font-semibold ml-1">
                  {monthlyIncome
                    ? (
                        parseFloat(monthlyIncome.replace(/,/g, "")) *
                        (parseFloat(needRatio) / 100)
                      ).toFixed(1)
                    : 0}
                </span>
              </span>
              <span>
                Wants: {selectedCurrency}
                <span className="font-semibold ml-1">
                  {monthlyIncome
                    ? (
                        parseFloat(monthlyIncome.replace(/,/g, "")) *
                        (parseFloat(wantRatio) / 100)
                      ).toFixed(1)
                    : 0}
                </span>
              </span>
              <span>
                Investments: {selectedCurrency}
                <span className="font-semibold ml-1">
                  {monthlyIncome
                    ? (
                        parseFloat(monthlyIncome.replace(/,/g, "")) *
                        (parseFloat(investmentRatio) / 100)
                      ).toFixed(1)
                    : 0}
                </span>
              </span>
            </div>
          </CardContent>
        </Card>

        <Button
          className="w-full mt-4 tracking-tight bg-ngenx-100 text-primary-200 hover:bg-ngenx-100/90"
          onClick={handleUpdate}
        >
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};
