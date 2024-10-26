import axios from "axios";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../store/ExpensesContext";

function AllExpenses() {
  const { expenses } = useExpenses();

  const res = axios.post("http://localhost:4000/api/v1/expenses/get-expenses");

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
