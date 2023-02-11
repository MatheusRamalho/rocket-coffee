import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { usePersistedState } from './hooks/usePersistedState';

import { Routers } from './routes/Routes';

import { defaultTheme } from "./styles/default";
import GlobalStyle from './styles/global';

import { Layout } from './components/Layout';

export const App = () => {
	const [theme] = usePersistedState<DefaultTheme>('theme-rocket-coffee', defaultTheme);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<div className="App">
					<GlobalStyle />

					<Layout>
						<Routers />
					</Layout>
				</div>
			</BrowserRouter>
		</ThemeProvider>
  	);
}
