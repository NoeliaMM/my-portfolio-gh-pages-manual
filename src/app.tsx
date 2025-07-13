import { HashRouter } from 'react-router-dom';
import { Container } from '@mui/material';
import { RouterComponent } from './core/router/router.component';
import { ThemeProviderWrapper } from './core/theme/theme.context';
import { Header } from './common/components/header.component';


 function App() {

  return (
     <ThemeProviderWrapper>
      <HashRouter>
        <Header />
        <Container sx={{ py: 4 }}>
          <RouterComponent />
        </Container>
      </HashRouter>
    </ThemeProviderWrapper>
  );
}

export default App;