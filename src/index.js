import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 

const theme = createTheme({});

ReactDom.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App/> 
        </BrowserRouter>
    </ThemeProvider>, 
    document.getElementById('root'));