
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterHandler = (filteredYear) => {
        setFilteredYear(filteredYear)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onSelected={filterHandler} selected={filteredYear} />

                <ExpenseItem
                    title={props.expenses[0].title}
                    date={props.expenses[0].date}
                    amount={props.expenses[0].amount}
                ></ExpenseItem>

                <ExpenseItem
                    title={props.expenses[1].title}
                    date={props.expenses[1].date}
                    amount={props.expenses[1].amount}
                ></ExpenseItem>

                <ExpenseItem
                    title={props.expenses[2].title}
                    date={props.expenses[2].date}
                    amount={props.expenses[2].amount}
                ></ExpenseItem>

                <ExpenseItem
                    title={props.expenses[3].title}
                    date={props.expenses[3].date}
                    amount={props.expenses[3].amount}
                ></ExpenseItem>
            </Card>

        </div>
    );

}

export default Expenses;