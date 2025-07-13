import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';
import { RouterComponent } from './core/router/router.component';
import { ThemeProviderWrapper } from './core/theme/theme.context';
import { Header } from './common/components/header.component';


 function App() {

  return (
     <ThemeProviderWrapper>
      <BrowserRouter>
        <Header />
        <Container sx={{ py: 4 }}>
          <RouterComponent />
        </Container>
      </BrowserRouter>
    </ThemeProviderWrapper>
  );
}

export default App;