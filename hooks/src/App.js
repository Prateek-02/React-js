import { createContext } from 'react';
import './App.css';
import Counter from './Counter';
import Form from './Form';
import Useref from './Useref';
import Child from './Child';
import Reducer from './Reducer';

// Create Contexts
export const NameContext = createContext();
export const AgeContext = createContext();

function App() {
  const Name = "Xyz";
  const Age = 23;

  return (
    <div>
      {/* Use 'Provider' with a capital 'P' */}
      <NameContext.Provider value={Name}>
        <AgeContext.Provider value={Age}>
          <Child />
        </AgeContext.Provider>
      </NameContext.Provider>

      <Counter />
      <Form />
      <Useref />
      <Reducer />
    </div>
  );
}

export default App;


// import React, { useContext, useEffect, useState } from 'react';
// import { ThemeContext, ThemeProvider } from './ThemeContext';
// import './App.css'; 

// function App() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log(`Counter: ${counter}`);
//   }, [counter]);

//   const increment = () => setCounter(counter + 1);
//   const decrement = () => setCounter(counter - 1);

//   return (
//     <div className={`app ${theme}`}>
//       <h1>Counter: {counter}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <br />
//       <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//       </button>
//     </div>
//   );
// }

// const AppWrapper = () => (
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>
// );

// export default AppWrapper;
