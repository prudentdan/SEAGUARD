import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services1 from './pages/Services1';
import Services2 from './pages/Services2';
import Services3 from './pages/Services3';
import Services4 from './pages/Services4';
import Portfolio from './pages/Portfolio';
import ProjectGallery from './pages/ProjectGallery';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [theme, ] = useState(false)
  const darkTheme = createTheme({
    spacing: 1,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 992,
        lg: 1200,
        xl: 1536,
      }
    },
    palette: {
      mode: theme ? 'dark' : 'light', 
      primary: {
        main: '#074AC7'
      },
      secondary: {
        main: '#F46036',
      },
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route index element= {<Home />}></Route>
            <Route path="About" element= {<About />}></Route>
            <Route path="Contact" element= {<Contact />}></Route>
            <Route path="Services1" element= {<Services1 />}></Route>
            <Route path="Services2" element= {<Services2 />}></Route>
            <Route path="Services3" element= {<Services3 />}></Route>
            <Route path="Services4" element= {<Services4 />}></Route>
            <Route path="Portfolio" element= {<Portfolio />}></Route>
            <Route path="ProjectGallery" element= {<ProjectGallery />}></Route>
          </Routes>
        </BrowserRouter>
      
    </ThemeProvider>
  )
}

export default App
