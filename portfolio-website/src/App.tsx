//* CSS
import styles from './App.module.css'

//* Page
import Portfolio from './pages/portfolio/Portfolio'

//* Context
import { ThemeContext } from './context/ThemeContext'
import { CookieProvider } from './context/CookieContext'

//* React
import { useEffect, useState } from 'react'

function App() {
	const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

	const getDefaultTheme = (): string => {
		const localStorageTheme = localStorage.getItem('theme')
		const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light'
		return localStorageTheme || browserDefault
	}
	const [theme, setTheme] = useState(getDefaultTheme())

	useEffect(() => {
		// Check for support.
		if (!('indexedDB' in window)) {
			console.log("This browser doesn't support IndexedDB.")
			return
		}
	})

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={styles[theme]}>
				<CookieProvider>
					<Portfolio />
				</CookieProvider>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
