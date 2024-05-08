import { createContext, useContext } from 'react';
//! Here we are making context for using the values and NOTE- we always write method of function not declare the logic of functionn
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {}, //! like this only method defination and this method will be define in where we use this method
  lightTheme: () => {},
});

//! make context logic a Provider to use the context logic in any component NOTE- we have to just wrap the whole component with provider
export const ThemeProvider = ThemeContext.Provider;

//! we can generally make a custom hook of context logic to use this efficiently
export default function useTheme() {
  return useContext(ThemeContext);
}
