import {useEffect} from 'react';
import {useLocalStorage} from '../hooks/UseLocalStorage.js'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkModeOn')
  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return [darkMode, setDarkMode];
}