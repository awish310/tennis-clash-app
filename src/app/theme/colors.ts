const grayscale = {
  'gray-01-bg': '#F8F8F8',
  'gray-02': '#F5F5F5',
  'gray-03': '#EEEEEE',
  'gray-04': '#E0E0E0',
  'gray-05': '#BDBDBD',
  'gray-06': '#9E9E9E',
  'gray-07': '#757575',
  'gray-08': '#424242',
  'gray-09': '#2D2D2D',
  'gray-09-25%': '#2D2D2D40',
  'gray-10': '#f6f6f6',
  'gray-11': '#323639',
  'gray-12': '#535659',
  'gray-13': '#E9E9E9',
  'gray-14': '#414447',
  'gray-15': '#C4C4C4',
};

const errorColors = {
  'error-light': '#FDEEEC',
  'error-dark': '#E8503D',
};

const colors = {
  brand: '#3A3845', // primary
  border: grayscale['gray-04'], // global.colors.border from grommet overrides for input fields.
  icon: grayscale['gray-08'], // global.colors.icon from grommet overrides for icons.
  placeholder: grayscale['gray-07'], // global.colors.placeholder from grommet overrides for input.
  'side-bar': '#2D2D2D', // primary
  'accent-1': '#6377E0', // support-01
  'accent-2': '#f7f9fa;', // support-02
  'accent-3': '#F7F8FF', // support-03
  'neutral-1': '#6F888E', // secondary-00
  'neutral-2': '#A2C1C9', // secondary-01
  'neutral-3': '#C8DEE4', // secondary-02
  'neutral-4': '#E2EEF1', // secondary-03
  'neutral-5': '#F9FDFE', // secondary-04
  'dark-1': '#2E4056', // dark
  'bright-1': '#FFFFFF', // bright
  'gray-4': '#E0E0E0', // gray-4
  'gray-7': '#757575', // gray-7
  'gray-8': '#424242', // gray-8
  'secondary-3': '#E2EEF1', // secondary-3

  ...grayscale,
  ...errorColors,
};

export default colors;
