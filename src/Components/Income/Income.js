import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>₹ {totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
     
    .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f0f4f8, #fcf6f9);
    border: 2px solid #e0e6ed;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 1.5rem 2rem;
    margin: 1.5rem 0;
    font-size: 1.8rem;
    gap: 1rem;

    span {
        font-size: 2rem;
        font-weight: 900;
        color: var(--color-green);
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    }

    transition: all 0.3s ease-in-out;
}

   .income-content {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;  

    .incomes {
        flex: 1;
        background: #fff;
        border: 2px solid #e0e6ed;
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .incomes:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
    }
}

    }
`;

export default Income