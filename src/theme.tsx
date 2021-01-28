import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Box: {
      baseStyle: {
        w: '100%',
        h: '100vh',
        bgGradient: 'linear(to-l, #7928CA, #FF0080)',
      },
    },
  },
});

export default theme;
