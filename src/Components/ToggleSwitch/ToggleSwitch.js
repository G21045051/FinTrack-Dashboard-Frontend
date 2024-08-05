 
import React from 'react';
import styled from 'styled-components';

const ToggleSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Switch>
      <Input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      <Slider />
    </Switch>
  );
};

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #2196F3;
  }
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export default ToggleSwitch;