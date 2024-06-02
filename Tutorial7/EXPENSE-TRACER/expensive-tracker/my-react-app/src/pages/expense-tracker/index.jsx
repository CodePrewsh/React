import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransaction";
import "./styles.css";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";

export const ExpenseTracker = () => {

    const { addTransaction } = useAddTransaction();
    const { transactions, transactionsTotal } = useGetTransactions();
    const { name, profilePhoto } = useGetUserInfo();
    const navigate = useNavigate();
    const [description, setDescription] = useState("");
    const [transAmount, setTransAmount] = useState(0);
    const [transType, setTransType] = useState("expense");

    const { balance, income, expenses } = transactionsTotal;
    const onSubmit = async (e) => {
        e.preventDefault();
        addTransaction({
            description,
            transAmount,
            transType
        });
        setDescription("");
        setTransAmount("");
    };

    const signUserOut = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
            <div className="expense-tracker">
                <div className="container">
                    <h1>{name}'s Expense tracker</h1>
                    <div className="balance">
                        <h3>Your Balance</h3>
                        {balance >= 0 ? (
                            <h2>R{balance}</h2>
                        ) : (<h2>-R{balance * -1}</h2>)}
                    </div>
                    <div className="summary">
                        <div className="income">
                            <h4>Income</h4>
                            <p>R{income}</p>
                        </div>
                        <div className="expenses">
                            <h4>Expenses</h4>
                            <p>R{expenses}</p>
                        </div>
                    </div>
                    <form className="add-transaction" onSubmit={onSubmit}>
                        <input type="text"
                            placeholder="description"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="amount"
                            value={transAmount}
                            required
                            onChange={(e) => setTransAmount(e.target.value)}
                        />
                        <input type="radio"
                            id="expense"
                            value="expense"
                            checked={transType === "expense"}
                            onChange={(e) => setTransType(e.target.value)}
                        />
                        <label for="expense">Expense</label>
                        <input
                            type="radio"
                            id="income"
                            value="income"
                            checked={transType === "income"}
                            onChange={(e) => setTransType(e.target.value)}
                        />
                        <label for="income">Income</label>

                        <button type="submit">Add Transaction</button>
                    </form>
                </div>
                {profilePhoto && (
                    <div className="profile">
                        <img className="profile-photo" src={profilePhoto} alt="Profile Picture" />
                        <button className="sign-out-button" onClick={signUserOut}>
                            Sign Out
                        </button>
                    </div>
                )}

            </div>
            <div className="transactions">
                <h3>Transactions</h3>
                <ul>
                    {transactions.map((transaction) => {
                        const { description, transAmount, transType } = transaction;
                        return <li>
                            <h4>{description}</h4>
                            <p>R{transAmount} <label style={{ color: transType === "expense" ? "red" : "green" }}>{transType}</label></p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}