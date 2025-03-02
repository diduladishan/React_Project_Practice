import { useState } from "react";

const ExpenseTracker = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  function selectOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function expenseData() {
    const newExpenses = {
      id: Date.now(),
      expenseTitle,
      expenseAmount,
      selectedOption,
    };

    const updatedData = [...expenses, newExpenses];
    setExpenses(updatedData);
    setExpenseTitle("");
    setExpenseAmount("");
    setSelectedOption("");
    console.log(expenses);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          className="border-2 border-[#303131] rounded-sm"
          placeholder="Enter Expense Title"
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
        />

        <input
          type="text"
          className="border-2 border-[#303131] rounded-sm"
          placeholder="Enter Expense Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />

        <select
          value={selectedOption}
          onChange={selectOptionChange}
          className="border-2 border-[#303131] "
        >
          <option value="">Choose</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="photography">Photography</option>
        </select>

        <button
          onClick={expenseData}
          className="w-[90px] bg-green-600 rounded-sm py-1"
        >
          Submit
        </button>

        <div className="flex items-center gap-3">
          <ul>
            {expenses.map((item, index) => (
              <li key={index}>{item.expenseTitle}</li>
            ))}
          </ul>
          <ul>
            {expenses.map((item, index) => (
              <li key={index}>{item.expenseAmount}</li>
            ))}
          </ul>

          <ul>
            {expenses.map((item, index) => (
              <li key={index}>{item.selectedOption}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
