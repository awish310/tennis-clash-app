import { Box, Grommet } from 'grommet';
import Navbar from '../components/Navbar/Navbar';
import { Router } from './Router';
import theme from './theme';

const App = () => {
  return (
    <Grommet theme={theme} full={true}>
      <Box
        direction="row"
        height={{ min: '100%' }}
        background="linear-gradient(180deg, rgba(13,30,94,1) 0%, rgba(29,131,221,1) 100%)"
      >
        <Navbar />
        <Router />
      </Box>
    </Grommet>
  );
};

export default App;
