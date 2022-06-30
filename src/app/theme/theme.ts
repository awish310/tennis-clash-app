import { ThemeType } from 'grommet';
import global from './global';
import heading from './heading';
import text from './text';
import button from './button';
import { css } from 'styled-components';

const theme: ThemeType = {
  global,
  heading,
  text,
  button,
  layer: {
    overlay: {
      background: 'rgba(3, 6, 23, 0.9)',
    },
    border: {
      radius: '12px',
    },
  },
  tabs: {
    header: {
      extend: css`
        width: 100%;
      `,
    },
  },
  checkBox: {
    size: '16px',
  },
};

export default theme;
