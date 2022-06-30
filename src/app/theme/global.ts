import { ThemeType } from 'grommet';
import colors from './colors';

const global: ThemeType['global'] = {
  colors,
  size: {
    medium: '296px',
  },
  breakpoints: {
    small: {
      value: 767,
    },
    medium: {
      value: 1023,
    },
    large: {
      value: 4000,
    },
  },
  font: {
    family: 'UbuntuCondensed',
  },
  focus: {
    border: {
      color: 'transparent',
    },
  },
  input: {
    font: {
      size: '20px',
      weight: '700',
      height: '21px',
    },
    padding: {
      vertical: '5px',
      horizontal: '5px',
    },
  },
  hover: { background: 'primary-03', color: 'gray-08' },
  selected: { background: 'primary-02', color: 'gray-09' },
  drop: {
    shadowSize: 'medium',
    border: {
      radius: '4px',
    },
  },
};

export default global;
