import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('ligh', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      {/*    //! Here we wrap the whole component with Provider */}
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className='flex flex-wrap min-h-screen items-center bg-gray-500 rounded-lg'>
          <div className='w-full'>
            <h3 className='text-3xl'>Context API Project Concept</h3>
            <div className='w-full max-w-sm mx-auto flex justify-end mb-4 p-4'>
              <ThemeBtn />
            </div>
            <div className='w-full max-w-sm mx-auto'>
              {' '}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
