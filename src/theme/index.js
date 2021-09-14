import {extendTheme, theme} from 'native-base';

export const customTheme = extendTheme({
  colors: {
    primary: theme.colors.red,
  },
});

export default customTheme;
