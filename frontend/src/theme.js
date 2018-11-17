import {
  createMuiTheme
} from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#bbdefb',
    },
    secondary: {
      main: '#69f0ae',
    },
    customLight: {
      main: '#ff0077'
    }
  },
});