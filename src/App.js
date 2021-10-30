import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { AuthProvider } from './AuthService';

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider >
  );
}

export default App;
