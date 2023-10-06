export type CookiesContextProps = {
	setCookie: (key: string, value: string, exdays: number) => void
	cookieExists: (name: string) => boolean
}
