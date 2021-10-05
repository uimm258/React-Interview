import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import useTheme from '../useTheme';
import { ProviderComposer, provider } from '../providerComposer';

const cache = createCache({
	key: 'css',
	prepend: true
});

export default function MyApp({ Component, pageProps }: AppProps) {
	const theme = useTheme();

	return <>
		<Head>
			<title>Invoiss Interview</title>
			<meta
				name='viewport'
				content='width=device-width,
					minimum-scale=1, maximum-scale=1, initial-scale=1,
					user-scalable=no, viewport-fit=cover'
			/>
		</Head>

		<ProviderComposer
			providers={[
				provider(StyledEngineProvider, { injectFirst: true }),
				provider(CacheProvider, { value: cache }),
				provider(ThemeProvider, { theme: theme })
			]}
		>
			<CssBaseline />
			<Component {...pageProps} />
		</ProviderComposer>
	</>
}
