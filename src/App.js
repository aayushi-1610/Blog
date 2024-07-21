import GlobalStyle from "./globalStyles";
import {ThemeProvider} from "styled-components";
import { LightTheme } from "./components/Themes";
import { DarkTheme } from "./components/Themes";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";

import {Switch} from "react-router-dom"; 
function App() {
  return <>
  
  <GlobalStyle/>
  <ThemeProvider theme={LightTheme}>
  <switch>
   <Routes>
    <Route path="/" element={<BlogPage/>}/>


   </Routes>
  </switch>
  </ThemeProvider>
  </>
    
}

export default App

