//* CSS
import styles from './App.module.css'

//* Page
import Portfolio from './pages/portfolio/Portfolio'

//* Context
import { ThemeContext } from './context/ThemeContext'

//* React
import { useState } from 'react'

function App() {
	const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

	const getDefaultTheme = (): string => {
		const localStorageTheme = localStorage.getItem('theme')
		const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light'
		return localStorageTheme || browserDefault
	}

	const [theme, setTheme] = useState(getDefaultTheme())

	return (
		<>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<div className={styles[theme]}>
					<Portfolio />
				</div>
			</ThemeContext.Provider>
		</>
	)
}

export default App
