import React, { useContext, useState } from "react";
import axios from 'axios';

// Use the environment variable for the base URL
const BASE_URL = process.env.REACT_APP_BASE_URL || "https://backend-expense-tracker-app.onrender.com/api/v1";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    // Calculate incomes
    const addIncome = async (income) => {
        try {
            await axios.post(`${BASE_URL}/add-income`, income);
            getIncomes();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get-incomes`);
            setIncomes(response.data);
            console.log(response.data);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const deleteIncome = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/delete-income/${id}`);
            getIncomes();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const totalIncome = () => {
        return incomes.reduce((total, income) => total + income.amount, 0);
    };

    // Calculate expenses
    const addExpense = async (expense) => {
        try {
            await axios.post(`${BASE_URL}/add-expense`, expense);
            getExpenses();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get-expenses`);
            setExpenses(response.data);
            console.log(response.data);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/delete-expense/${id}`);
            getExpenses();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const totalExpenses = () => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0, 3);
    };

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
