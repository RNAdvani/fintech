"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { DatePicker } from "@/components/date-picker"; // Import our custom DatePicker
import { CurrencyType } from "@/types";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

const formSchema = z.object({
   amount: z.string().min(1, {
      message: "Amount is required.",
   }),
   description: z.string().min(1, {
      message: "Description is required.",
   }),
   date: z.date({
      required_error: "A date is required.",
   }),
   category: z.string({
      required_error: "Please select a category.",
   }),
});

interface AddExpenseFormProps {
   onClose: () => void;
   currency: CurrencyType;
   setDisabled: (disabled: boolean) => void;
}

export function AddExpenseForm({
   onClose,
   currency,
   setDisabled,
}: AddExpenseFormProps) {
   const router = useRouter();
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         amount: "",
         description: "",
         category: "",
         date: new Date(),
      },
   });

   const { user } = useUser();

   async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
         const res = await axios.post(
            "http://localhost:4000/api/v1/users/get",
            {
               clerkId: user?.id,
            }
         );
         toast({
            title: "You submitted the following values:",
            description: (
               <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                  <code className="text-white">
                     {JSON.stringify(values, null, 2)}
                  </code>
               </pre>
            ),
         });

         const resp = await axios.post(
            "http://localhost:4000/api/v1/expenses/add-expense",
            { clerkId: user?.id, ...values }
         );

         // router.refresh();
      } catch (error) {
         console.error("Error submitting the form:", error);
         toast({
            title: "Something went wrong.",
            description: "Please try again.",
            variant: "destructive",
         });
      }
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
               control={form.control}
               name="amount"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Amount</FormLabel>
                     <FormControl>
                        <Input placeholder="0.00" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="description"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Description</FormLabel>
                     <FormControl>
                        <Input placeholder="Groceries" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="date"
               render={({ field }) => (
                  <FormItem className="flex flex-col">
                     <FormLabel>Date</FormLabel>
                     <FormControl>
                        <DatePicker
                           value={field.value}
                           setValue={(date) => field.onChange(date)}
                           disabled={[
                              { after: new Date() },
                              { before: new Date("1900-01-01") },
                           ]}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="category"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Category</FormLabel>
                     <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                     >
                        <FormControl>
                           <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                              <SelectContent>
                                 <SelectItem value="needs">Needs</SelectItem>
                                 <SelectItem value="wants">Wants</SelectItem>
                              </SelectContent>
                           </SelectTrigger>
                        </FormControl>
                     </Select>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button type="submit">Submit</Button>
         </form>
      </Form>
   );
}
