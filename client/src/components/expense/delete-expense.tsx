"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import axios from "axios"; // Make sure to import axios
import { useState } from "react";

import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { buttonVariants } from "@/components/ui/button";

export const DeleteExpense = ({
  expenseId,
  expenseType,
}: {
  expenseId: string;
  expenseType: "want" | "need";
}) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false); // Local loading state

  const deleteEntry = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      // Send DELETE request to the backend
      await axios.post(`/api/v1/expenses/delete-expense/${expenseId}`, {
        data: { type: expenseType }, // Send expenseType in request body if needed
      });
      
      toast({
        title: "Deleted",
        description: "Expense has been successfully deleted.",
      });

    } catch (error) {
      console.error("Error deleting the expense:", error);
      toast({
        title: "Something went wrong.",
        description: "Unable to delete the expense. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false); // Reset loading state
      onClose(); // Close the modal after operation
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner color="default" size="sm" className="h-5 w-5" />
      ) : (
        <span
          className="cursor-pointer text-danger-text hover:opacity-90 transition"
          onClick={onOpen}
        >
          Delete
        </span>
      )}
      <Modal
        isOpen={isOpen}
        isDismissable={!isLoading}
        hideCloseButton={isLoading}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you absolutely sure?
              </ModalHeader>
              <ModalBody>
                <p className="text-muted-foreground">
                  This action cannot be undone. This will permanently delete
                  this entry from this month&rsquo;s expenses.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  disabled={isLoading}
                  className={cn(
                    buttonVariants({ size: "sm", variant: "ghost" }),
                    "rounded-lg"
                  )}
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  disabled={isLoading}
                  className={cn(buttonVariants({ size: "sm" }), "rounded-lg")}
                  onClick={deleteEntry} // Call deleteEntry on click
                >
                  {isLoading ? (
                    <Spinner color="default" size="sm" />
                  ) : (
                    "Delete"
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
