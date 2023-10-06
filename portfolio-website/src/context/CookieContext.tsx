//* React
import { createContext, ReactNode } from 'react'

//* Type
import { CookiesContextProps } from '../types/CookiesContextProps'

export const CookieContext = createContext<CookiesContextProps>({
	setCookie: () => {},
	cookieExists: () => false,
})

type CookieProps = {
	children: ReactNode
}

export const CookieProvider = ({ children }: CookieProps) => {
	const setCookie = (key: string, value: string, exdays: number): void => {
		const dateExpire = new Date()
		dateExpire.setDate(dateExpire.getDate() + exdays)
		dateExpire.setHours(3, 0, 0)
		document.cookie = `${key}=${value};expires=${dateExpire.toUTCString()}`
	}

	const cookieExists = (name: string): boolean => {
		const regex = new RegExp(`(^| )${name}=([^;]+)`)
		const match = document.cookie.match(regex)

		return !!match
	}

	return (
		<CookieContext.Provider
			value={{
				setCookie,
				cookieExists,
			}}>
			{children}
		</CookieContext.Provider>
	)
}
