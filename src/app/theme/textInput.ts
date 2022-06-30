import { ThemeType } from 'grommet';
import { normalizeColor } from 'grommet/utils';

const textInput: ThemeType['textInput'] = {
  extend: (props) => `
    color: #ffffff;
    font-weight: 700;
    font-style: italic;
    font-size: 24px;
    
    &:focus {
      border-color: ${normalizeColor('primary-01', props.theme)};
    }
  `,
};

export default textInput;
