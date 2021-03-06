import type { AppProps } from 'next/app'
import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'themes/theme'

import PageLayout from 'components/PageLayout/PageLayout'

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles: any = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<PageLayout>
					<Component {...pageProps} />
				</PageLayout>
			</ThemeProvider>
		</>
	)
}
