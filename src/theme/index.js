import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette: palette,
  typography: typography
});

export default theme;