import React, { useState, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components'; 
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext'; 

const lightTheme = { 
  mainBackground: 'rgba(252, 246, 249, 0.78)',
  borderColor: '#FFFFFF',
  textColor: '#000000',
}; 


const App = () => {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <AppStyled bg={lightTheme.background} className="App">
        {orbMemo}
          <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            {displayData()}
          </main>
        </MainLayout>
      </AppStyled>
    </ThemeProvider>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;

  

  main {
  flex: 1;
  background: ${(props) => props.theme.mainBackground};
  border: 2px solid ${(props) => props.theme.borderColor}; 
  backdrop-filter: blur(8px);  
  border-radius: 24px;  
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);  
  padding: 1.5rem; 
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;  
  
  
  &::-webkit-scrollbar {
    width: 6px;  
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); 
    border-radius: 10px;  
  }
}

`;

export default App;
