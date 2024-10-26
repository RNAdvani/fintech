"use client";
import { useCallback, useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { ModalBody, ModalFooter } from "@nextui-org/modal";

import { cn } from "@/lib/utils";
import { ExpenseType } from "@/types";
import { toast } from "@/hooks/use-toast";
import { Button } from "@nextui-org/button";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/date-picker";
import { buttonVariants } from "@/components/ui/button";
import axios from "axios";

export const EditExpenseForm = ({
  expense,
  onClose,
  setDisabled,
}: {
  expense: ExpenseType;
  onClose: () => void;
  setDisabled: (disabled: boolean) => void;
}) => {
  const router = useRouter();

  const [amount, setAmount] = useState(expense.amount.toLocaleString());
  const [description, setDescription] = useState(expense.description);
  const [entryDate, setEntryDate] = useState<Date | undefined>(expense.createdAt);
  const [expenseTypeSelected, setExpenseTypeSelected] = useState(expense.type);
  const [inputValidationState, setInputValidationState] = useState<"valid" | "invalid">("valid");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async () => {
    setDisabled(true);
    setIsLoading(true); // Set loading state

    try {
      await axios.post(`/api/v1/expenses/update-expense/${expense.id}`, {
        amount: Number(amount.replace(/,/g, '')), // Ensure correct amount parsing
        description,
        type: expenseTypeSelected,
        createdAt: entryDate,
      });

      toast({
        title: "Updated",
        description: "Expense has been successfully updated.",
      });
      // Optionally, you can redirect or refresh the page here if needed.
    } catch (error) {
      console.error("Error updating the expense:", error);
      toast({
        title: "Something went wrong.",
        description: "Unable to update the expense. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDisabled(false);
      setIsLoading(false); // Reset loading state
      onClose();
    }
  };

  const updateInputValidationState = useCallback(() => {
    if (!amount) return setInputValidationState("valid");

    if (parseFloat(amount.replace(/,/g, '')) > 0) {
      setInputValidationState("valid");
    } else {
      setInputValidationState("invalid");
    }
  }, [amount]);

  useEffect(() => {
    updateInputValidationState();
  }, [amount, updateInputValidationState]);

  return (
    <>
      <ModalBody>
        <form className="grid w-full max-w-xl gap-5">
          <div className="flex flex-col gap-y-2">
            <Label>Amount</Label>
            <Input
              autoFocus
              placeholder="Eg: 20"
              disabled={isLoading}
              value={amount ?? ""}
              onChange={(e) => setAmount(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              validationState={inputValidationState}
              errorMessage={
                inputValidationState === "invalid" &&
                "Please enter a valid amount."
              }
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">₹</span>
                </div>
              }
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Expense Description</Label>
            <Input
              placeholder="Eg: Coffee"
              value={description}
              disabled={isLoading}
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Date</Label>
            <DatePicker
              value={entryDate}
              setValue={setEntryDate}
              disabled={[
                {
                  before: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                },
                { after: new Date() },
              ]}
            />
          </div>

          <div>
            <RadioGroup
              orientation="horizontal"
              value={expenseTypeSelected}
              onValueChange={(value) => setExpenseTypeSelected(value as "need" | "want")}
            >
              <Radio value="need" description="It's a necessity.">
                Needs
              </Radio>
              <Radio value="want" description="It's a luxury.">
                Wants
              </Radio>
            </RadioGroup>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          variant="light"
          disabled={isLoading}
          className={cn(buttonVariants({ size: "sm", variant: "ghost" }), "rounded-lg")}
          onPress={onClose}
        >
          Close
        </Button>
        <Button
          color="primary"
          className={cn(buttonVariants({ size: "sm" }), "rounded-lg")}
          disabled={isLoading || inputValidationState === "invalid"} // Disable if loading or invalid
          onClick={handleSubmit}
        >
          {isLoading ? (
            <Spinner color="default" size="sm" />
          ) : (
            "Update"
          )}
        </Button>
      </ModalFooter>
    </>
  );
};
