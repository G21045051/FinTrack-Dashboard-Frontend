// import React, { useState, useMemo } from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import bgLight from './img/bg-light.png';
// import bgDark from './img/bg-dark.jpg';
// import { MainLayout } from './styles/Layouts';
// import Orb from './Components/Orb/Orb';
// import Navigation from './Components/Navigation/Navigation';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Income from './Components/Income/Income';
// import Expenses from './Components/Expenses/Expenses';
// import { useGlobalContext } from './context/globalContext';
// import logoLight from './img/logo-light.png';
// import logoDark from './img/logo-dark.png';
// import ToggleSwitch from './Components/ToggleSwitch/ToggleSwitch';

// const lightTheme = {
//   background: bgLight,
//   mainBackground: 'rgba(252, 246, 249, 0.78)',
//   borderColor: '#FFFFFF',
//   textColor: '#000000',
// };

// const darkTheme = {
//   background: bgDark,
//   mainBackground: 'rgba(33, 33, 33, 0.78)',
//   borderColor: '#333333',
//   textColor: '#FFFFFF',
// };

// const App = () => {
//   const [active, setActive] = useState(1);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const global = useGlobalContext();
//   console.log(global);

//   const displayData = () => {
//     switch (active) {
//       case 1:
//         return <Dashboard />;
//       case 2:
//         return <Dashboard />;
//       case 3:
//         return <Income />;
//       case 4:
//         return <Expenses />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   const orbMemo = useMemo(() => {
//     return <Orb />;
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
//       <AppStyled bg={isDarkMode ? darkTheme.background : lightTheme.background} className="App">
//         {orbMemo}
//         <header>
//           <img src={isDarkMode ? logoDark : logoLight} alt="Logo" className="logo" />
//           <ToggleSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//         </header>
//         <MainLayout>
//           <Navigation active={active} setActive={setActive} />
//           <main>
//             {displayData()}
//           </main>
//         </MainLayout>
//       </AppStyled>
//     </ThemeProvider>
//   );
// };

// const AppStyled = styled.div`
//   height: 100vh;
//   background-image: url(${(props) => props.bg});
//   position: relative;

//   header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem;
//     background-color: ${(props) => props.theme.mainBackground};
//     border-bottom: 3px solid ${(props) => props.theme.borderColor};

//     .logo {
//       height: 40px;
//     }
//   }

//   main {
//     flex: 1;
//     background: ${(props) => props.theme.mainBackground};
//     border: 3px solid ${(props) => props.theme.borderColor};
//     backdrop-filter: blur(4.5px);
//     border-radius: 32px;
//     overflow-x: hidden;
//     &::-webkit-scrollbar {
//       width: 0;
//     }
//   }
// `;

// export default App;

 
import React, { useState, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import bgLight from './img/bg-light.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import logoLight from './img/logo-light.png';

const lightTheme = {
  background: bgLight,
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
        <header>
          <img src={logoLight} alt="Logo" className="logo" />
        </header>
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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${(props) => props.theme.mainBackground};
    border-bottom: 3px solid ${(props) => props.theme.borderColor};

    .logo {
      height: 40px;
    }
  }

  main {
    flex: 1;
    background: ${(props) => props.theme.mainBackground};
    border: 3px solid ${(props) => props.theme.borderColor};
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
