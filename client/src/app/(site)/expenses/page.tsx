"use client";

import Link from "next/link";
import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import { Divider } from "@nextui-org/divider";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import axios from "axios";

import { cn } from "@/lib/utils";
import { CurrencyType, ExpenseType } from "@/types";
import { Icons } from "@/components/icons";
import { AddExpense } from "@/components/expense/add-expense";
import { ExpenseCard } from "@/components/cards/expense-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react"; // Import useEffect and useState

const Expenses = () => {
   const { user } = useUser();
   const [currentUser, setCurrentUser] = useState<any>(null); // Create state for currentUser
   const [expenses, setExpenses] = useState<any[]>([]); // Initialize expenses

   const router = useRouter();

   const fetchData = async () => {
      try {
         const userRes = await axios.post(
            `http://localhost:4000/api/v1/users/get`,
            { clerkId: user?.id }
         );
         const expensesRes = await axios.post(
            `http://localhost:4000/api/v1/expenses/get-expenses`,
            { clerkId: user?.id }
         );

         setCurrentUser(userRes?.data); // Update state with user data
         setExpenses(expensesRes?.data); // Update state with expenses data

         console.log(expensesRes?.data); // Log fetched expenses data
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   };

   useEffect(() => {
      fetchData();
   }, []); 

   const currentDate = new Date();
   const currentMonth = currentDate.toLocaleString("en-US", { month: "long" });

   return (
      <div className="grid grid-cols-7 gap-8 tracking-tight">
         <div className="col-span-7 lg:col-span-5">
            <Card>
               <CardTitle>
                  <CardHeader className="flex flex-row items-center justify-between xl:block py-4">
                     <Link
                        href="/dashboard"
                        className="xl:hidden border rounded-xl relative h-9 w-9"
                     >
                        <Icons.left className="h-6 w-6 left-1 top-1.5" />
                        <span className="sr-only">Go Back</span>
                     </Link>
                     <h1 className="hidden sm:block text-center">{`${currentMonth} Entries`}</h1>
                     <h1 className="sm:hidden text-center">{`${currentMonth}`}</h1>
                  </CardHeader>
                  <Divider />
               </CardTitle>
               <CardContent className="space-y-2 text-sm tracking-tight pt-6 md:pt-3">
                  <div className="flex justify-center items-center xl:justify-end pb-6 md:pb-3">
                     <AddExpense
                        currency={currentUser?.currency as CurrencyType}
                        expenses={expenses}
                        calculations={{
                           needsTotal: 0,
                           wantsTotal: 0,
                           totalSaved: 0,
                           monthIncome: 0,
                        }}
                     />
                  </div>
                  {expenses.length === 0 ? (
                     <div className="h-[calc(80vh-200px)] lg:h-[calc(80vh-95px)] flex flex-col items-center gap-y-1 pt-4 text-muted-foreground tracking-tight font-mono">
                        <p>No entries added Yet!</p>
                        <p>Add your first entry of the month.</p>
                     </div>
                  ) : (
                     <div className="flex flex-col gap-y-2">
                        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 px-4 sm:px-6 font-semibold">
                           <span className="hidden lg:block">Date & Time</span>
                           <span className="col-span-2 sm:col-span-3">
                              Details
                           </span>
                           <span className="text-center">Needs</span>
                           <span className="text-center">Wants</span>
                        </div>
                        <ScrollShadow className="h-[calc(80vh-200px)] lg:h-[calc(80vh-120px)] pb-12 lg:pb-8 w-full no-scrollbar">
                           <div className="flex flex-col gap-y-8 lg:gap-y-2">
                              {expenses?.map((expense: any) => (
                                 <ExpenseCard
                                    key={expense.id}
                                    expense={expense}
                                    currency={
                                       currentUser?.currency as CurrencyType
                                    }
                                 />
                              ))}
                           </div>
                        </ScrollShadow>
                     </div>
                  )}
               </CardContent>
            </Card>
         </div>
         <div className="col-span-7 lg:col-span-2">
            <Card>
               <CardTitle>
                  <CardHeader className="text-center py-4 text-2xl">
                     Expense Insights
                  </CardHeader>
                  <Divider />
               </CardTitle>
               <ScrollShadow className="lg:h-[calc(90vh-80px)] w-full no-scrollbar">
                  <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-6 lg:pb-0 lg:pt-3">
                     {expenses.length === 0 ? (
                        <p className="py-4 text-muted-foreground tracking-tighter text-center font-mono">
                           Start adding entries to get more insights.
                        </p>
                     ) : (
                        <>
                           <div className="flex flex-col gap-y-1">
                              <span className="font-semibold underline underline-offset-4 mb-1 text-primary">
                                 Allotment
                              </span>
                              <div className="flex gap-x-4 font-mono">
                                 <div className="flex flex-col">
                                    <span>
                                       Needs: {`${currentUser.currency}${0}`}{" "}
                                       {/* Replace with actual values */}
                                    </span>
                                    <span>
                                       Wants: {`${currentUser.currency}${0}`}{" "}
                                       {/* Replace with actual values */}
                                    </span>
                                    <span>
                                       Investments:{" "}
                                       {`${currentUser.currency}${0}`}{" "}
                                       {/* Replace with actual values */}
                                    </span>
                                 </div>
                                 <div className="flex gap-x-2">
                                    <span className="text-6xl pt-px text-muted-foreground">{`}`}</span>
                                    <div className="flex items-center">
                                       <span>
                                          {`${currentUser.currency}${0}`}{" "}
                                          {/* Replace with actual values */}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="flex flex-col gap-y-1">
                              <span className="font-semibold underline underline-offset-4 mb-1 text-primary">
                                 Spendings
                              </span>
                              <div className="flex gap-x-4 font-mono">
                                 <div className="flex flex-col">
                                    <span>
                                       Needs: {`${currentUser.currency}${0}`}{" "}
                                       {/* Replace with actual values */}
                                    </span>
                                    <span>
                                       Wants: {`${currentUser.currency}${0}`}{" "}
                                       {/* Replace with actual values */}
                                    </span>
                                 </div>
                                 <div className="flex gap-x-2">
                                    <span className="text-6xl pt-px text-muted-foreground">{`}`}</span>
                                    <div className="flex items-center">
                                       <span>
                                          {`${currentUser.currency}${0}`}{" "}
                                          {/* Replace with actual values */}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </>
                     )}
                  </CardContent>
               </ScrollShadow>
            </Card>
         </div>
      </div>
   );
};

export default Expenses;
