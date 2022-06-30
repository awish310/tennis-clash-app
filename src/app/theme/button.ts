import { ThemeType } from 'grommet';
import { css } from 'styled-components';
import colors from './colors';
import { normalizeColor } from 'grommet/utils';
import { ExtendType } from 'grommet/themes/base';

const sizing: any = {
  small: {
    font: 14,
    weight: 500,
    lineHeight: 14,
  },
  medium: {
    font: 20,
    weight: 700,
  },
  large: {
    font: 24,
    weight: 700,
  },
};

const extendedButtonStyles: ExtendType<Record<string, any>> = ({
  theme,
  primary,
  disabled,
  className,
  sizeProp,
}: Record<string, any>) => {
  const brightBorder = css({
    color: normalizeColor('bright-1', theme),
    borderColor: `#9c7208`,
    svg: {
      stroke: normalizeColor('bright-1', theme),
    },
  });
  const dark1Color = normalizeColor('dark-1', theme);
  const darkTheme = css`
    background-color: ${primary ? dark1Color : 'transparent'};
    border-color: ${dark1Color};
    color: ${primary ? normalizeColor('bright-1', theme) : dark1Color};
  `;
  const fontStyles = css({
    fontSize: `${sizing[sizeProp] ? sizing[sizeProp].font : 20}px`,
    fontWeight: sizing[sizeProp] ? sizing[sizeProp].weight : 700,
  });
  const shouldLoadDark = !disabled && className && className.includes('dark');
  return css`
    border-radius: 4px;
    border-width: 1px;
    font-weight: 700;
    ${primary && brightBorder}
    ${shouldLoadDark && darkTheme}
    ${sizeProp && fontStyles}
    &:hover {
      box-shadow: none;
    }
    &:focus {
      box-shadow: none;
    }
  `;
};

const disabledExtendedButtonStyles = css`
  background-color: ${colors['dark-1']};
  border-color: ${colors['gray-03']};
  opacity: 0.3;
  color: ${colors['bright-1']};
`;

const button: ThemeType['button'] = {
  size: {
    small: {
      pad: {
        vertical: '4px',
        horizontal: '8px',
      },
    },
    medium: {
      pad: {
        vertical: '16px',
        horizontal: '24px',
      },
    },
    large: {
      pad: {
        vertical: '24px',
        horizontal: '40px',
      },
    },
  },
  extend: extendedButtonStyles,
  disabled: {
    extend: disabledExtendedButtonStyles,
  },
};

export default button;
