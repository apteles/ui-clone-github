import React,{useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Repo from './pages/Repo'

import 'react-calendar-heatmap/dist/styles.css'
import { ThemeName, themes } from './styles/themes';

function App() {
  const [theme,setTheme] = useState<ThemeName>('light');
  const activeTheme = themes[theme]
  
  return (
    <ThemeProvider theme={activeTheme}>
       <BrowserRouter >
        <GlobalStyles />
        <Header themeName={theme} onChangeTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
   
  );
}

export default App;
