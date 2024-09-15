import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { rupee } from '../../utils/Icons'; 
import Chart from '../Chart/Chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1 color='grey'>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {rupee}
                                    {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Minimum <span>All Income</span>Maximum</h2>
                        <div className="salary-item">
                            <p>
                                {rupee}{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                {rupee}{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Minimum <span>Expense</span>Maximum</h2>
                        <div className="salary-item">
                            <p>
                                {rupee}{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                {rupee}{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 2rem;
                    p{
                     color: var(--color-white);
                        font-size: 1.5rem;
                        font-weight: 600;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 1.5rem;
                    }
                }
            }
        }

       .history-con {
    grid-column: 4 / -1;

    h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .salary-title {
        font-size: 1.1rem;

        span {
            font-size: 1.5rem;
        }
    }

    .salary-item {
        background: #f9fafb;
        border: 2px solid #e0e6ed;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
        padding: 1rem;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-weight: 500;
            font-size: 1.5rem;
            color: rgba(34, 34, 96, 0.9);
        }
    }
}
  }
    }
`;

export default Dashboard;
