import React from 'react'
import styled from 'styled-components'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    background-color: var(--color-green);
    color: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);

    &:hover {
        background-color: #28a745;
        box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    }
`;



export default Button