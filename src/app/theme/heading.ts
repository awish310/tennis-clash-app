import { css } from 'styled-components';
import { ThemeType } from 'grommet';

const heading: ThemeType['heading'] = {
  weight: 700,
  responsiveBreakpoint: undefined,
  extend: (props: any) => {
    const fontFamily =
      !!props.className && props.className === 'playFair'
        ? 'playFair'
        : 'Assistant';

    return css`
      font-family: ${fontFamily};
      font-style: italic;
      color: #ffffff;
    `;
  },
  level: {
    1: {
      small: {
        size: '48px',
        height: '56px',
      },
      medium: {
        size: '80px',
        height: '90px',
      },
      large: {
        size: '80px',
        height: '90px',
      },
      xlarge: {
        size: '80px',
        height: '90px',
      },
    },
    2: {
      small: {
        size: '32px',
        height: '40px',
      },
      medium: {
        size: '56px',
        height: '64px',
      },
      large: {
        size: '56px',
        height: '64px',
      },
      xlarge: {
        size: '56px',
        height: '64px',
      },
    },
    3: {
      small: {
        size: '32px',
        height: '40px',
      },
      medium: {
        size: '32px',
        height: '40px',
      },
      large: {
        size: '32px',
        height: '40px',
      },
      xlarge: {
        size: '32px',
        height: '40px',
      },
    },
    4: {
      small: {
        size: '24px',
        height: '32px',
      },
      medium: {
        size: '24px',
        height: '32px',
      },
      large: {
        size: '24px',
        height: '32px',
      },
      xlarge: {
        size: '24px',
        height: '32px',
      },
    },
    5: {
      small: {
        size: '16px',
        height: '22px',
      },
      medium: {
        size: '16px',
        height: '22px',
      },
      large: {
        size: '16px',
        height: '22px',
      },
      xlarge: {
        size: '16px',
        height: '22px',
      },
    },
    6: {
      small: {
        size: '14px',
        height: '20px',
      },
      medium: {
        size: '14px',
        height: '20px',
      },
      large: {
        size: '14px',
        height: '20px',
      },
      xlarge: {
        size: '14px',
        height: '20px',
      },
    },
  },
};

export default heading;
