export interface Theme {
  name: string;
  highlight: string;
  light: string;
  medium: string;
  dark: string;
}
export const themes: Theme[] = [
  {
    name: 'Funky',
    dark: '#b7e5eb',
    medium: '#FFC2C7',
    light: '#FBE5C8',
    highlight: '#FAFAFA',
  },
  {
    name: 'Teal',
    dark: '#167D7F',
    medium: '#29A0B1',
    light: '#98D7C2',
    highlight: '#DDFFE7',
  },
  // {
  //   name: 'Plain',
  //   dark: '#d9d9d9',
  //   medium: '#E0E0E0',
  //   light: '#EDEDED',
  //   highlight: '#FAFAFA',
  // },
];
