import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// color shades
const tokens = (mode) =>
	mode === 'dark'
		? {
				white: {
					100: '#fcfdff',
					200: '#f8fbff',
					300: '#f5f9ff',
					400: '#f1f7ff',
					500: '#eef5ff',
					600: '#bec4cc',
					700: '#8f9399',
					800: '#5f6266',
					900: '#303133',
				},
				indigo: {
					100: '#e2e3fa',
					200: '#c6c6f6',
					300: '#a9aaf1',
					400: '#8d8ded',
					500: '#7071e8',
					600: '#5a5aba',
					700: '#43448b',
					800: '#2d2d5d',
					900: '#16172e',
				},
				gray: {
					100: '#e7f0fd',
					200: '#cfe2fb',
					300: '#b6d3fa',
					400: '#9ec5f8',
					500: '#86b6f6',
					600: '#6b92c5',
					700: '#506d94',
					800: '#364962',
					900: '#1b2431',
				},
				green: {
					100: '#d1e1e7',
					200: '#a2c4cf',
					300: '#74a6b7',
					400: '#45899f',
					500: '#176b87',
					600: '#12566c',
					700: '#0e4051',
					800: '#092b36',
					900: '#05151b',
				},
				red: {
					100: '#ffd6d1',
					200: '#ffaca3',
					300: '#ff8375',
					400: '#ff5947',
					500: '#ff3019',
					600: '#cc2614',
					700: '#991d0f',
					800: '#66130a',
					900: '#330a05',
				},
		  }
		: {
				white: {
					100: '#303133',
					200: '#5f6266',
					300: '#8f9399',
					400: '#bec4cc',
					500: '#eef5ff',
					600: '#f1f7ff',
					700: '#f5f9ff',
					800: '#f8fbff',
					900: '#fcfdff',
				},
				indigo: {
					100: '#16172e',
					200: '#2d2d5d',
					300: '#43448b',
					400: '#5a5aba',
					500: '#7071e8',
					600: '#8d8ded',
					700: '#a9aaf1',
					800: '#c6c6f6',
					900: '#e2e3fa',
				},
				gray: {
					100: '#1b2431',
					200: '#364962',
					300: '#506d94',
					400: '#6b92c5',
					500: '#86b6f6',
					600: '#9ec5f8',
					700: '#b6d3fa',
					800: '#cfe2fb',
					900: '#e7f0fd',
				},
				green: {
					100: '#05151b',
					200: '#092b36',
					300: '#0e4051',
					400: '#12566c',
					500: '#176b87',
					600: '#45899f',
					700: '#74a6b7',
					800: '#a2c4cf',
					900: '#d1e1e7',
				},
				red: {
					100: '#330a05',
					200: '#66130a',
					300: '#991d0f',
					400: '#cc2614',
					500: '#ff3019',
					600: '#ff5947',
					700: '#ff8375',
					800: '#ffaca3',
					900: '#ffd6d1',
				},
		  };

// mui theme settings
export const themeSettings = (mode) => {
	const colors = tokens(mode);

	return {
		palette: {
			mode:
				mode === 'dark'
					? {
							primary: {
								main: colors.white[500],
							},
							secondary: {
								main: colors.indigo[700],
							},
							neutral: {
								dark: colors.grey[700],
								main: colors.grey[500],
								light: colors.grey[100],
							},
							background: {
								default: colors.white[500],
							},
					  }
					: {
							primary: {
								main: colors.white[100],
							},
							secondary: {
								main: colors.indigo[700],
							},
							neutral: {
								dark: colors.grey[700],
								main: colors.grey[500],
								light: colors.grey[100],
							},
							background: {
								default: colors.white[100],
							},
					  },
		},
		typography: {
			fontFamily: ['Rubik', 'Roboto', 'sans-serif'].join(),
			fontSize: 12,
			h1: {
				fontFamily: ['Rubik', 'Roboto', 'sans-serif'].join(),
				fontSize: 40,
			},
			h2: {
				fontFamily: ['Rubik', 'Roboto', 'sans-serif'].join(),
				fontSize: 36,
			},
			h3: {
				fontFamily: ['Rubik', 'Roboto', 'sans-serif'].join(),
				fontSize: 30,
			},
			h4: {
				fontFamily: ['Rubik', 'Roboto', 'sans-serif'].join(),
				fontSize: 24,
			},
			h5: {
				fontFamily: ['Rubik', 'Roboto', 'sans-serif'].join(),
				fontSize: 20,
			},
			h6: {
				fontFamily: ['Rubik', 'Roboto', 'sans-serif'].join(),
				fontSize: 16,
			},
		},
	};
};

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState('dark');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colorMode];
};
