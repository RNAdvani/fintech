import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useExpenses } from "../store/ExpensesContext";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import axios from "axios";

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamList,
  "ManageExpense"
>;

function ManageExpense({ route, navigation }: ManageExpenseProps) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const { addExpense, updateExpense, deleteExpense, expenses } = useExpenses();

  // State to hold form inputs
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useLayoutEffect(() => {
    if (isEditing) {
      const selectedExpense = expenses.find(
        (exp) => exp.id === editedExpenseId
      );
      if (selectedExpense) {
        setAmount(selectedExpense.amount.toString());
        setDescription(selectedExpense.description);
        setDate(selectedExpense.date.toISOString().slice(0, 10));
      }
    }

    const options: NativeStackNavigationOptions = {
      title: isEditing ? "Edit Expense" : "Add Expense",
    };
    navigation.setOptions(options);
  }, [navigation, isEditing, editedExpenseId, expenses]);

  function deleteExpenseHandler() {
    if (editedExpenseId) {
      const res = axios.post(`http://localhost:4000/api/v1/expenses/delete-expense/${editedExpenseId}`)

      deleteExpense(editedExpenseId);
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (!validateInputs()) {
      return;
    }

    

    if (isEditing) {
      const expenseData = {
        amount: +amount, // Convert string to number
        description,
        date: new Date(date), // Convert string to Date object
      };

      const res = axios.post(`http://localhost:4000/api/v1/expenses/update-expense/${editedExpenseId}`, expenseData)

      updateExpense(editedExpenseId, expenseData);
    } else {
      const expenseData = {
        amount: +amount, // Convert string to number
        description,
        date: new Date(date), // Convert string to Date object
      };
  
      const res = axios.post("http://localhost:4000/api/v1/expenses/add-expense", expenseData)
  
      console.log(res)

      addExpense(expenseData);
    }
    navigation.goBack();
  }

  function validateInputs() {
    if (!amount || isNaN(+amount) || +amount <= 0) {
      Alert.alert("Invalid input", "Please enter a valid amount.");
      return false;
    }
    if (!description.trim()) {
      Alert.alert("Invalid input", "Please enter a valid description.");
      return false;
    }
    if (!date || isNaN(Date.parse(date))) {
      Alert.alert("Invalid input", "Please enter a valid date (YYYY-MM-DD).");
      return false;
    }
    return true;
  }

  return (
    <View style={styles.container}>
      <View>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: setAmount,
            value: amount,
          }}
        />
        <Input
          label="Description"
          textInputConfig={{
            onChangeText: setDescription,
            value: description,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: setDate,
            value: date,
          }}
        />
      </View>

      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button mode="not-flat" onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
