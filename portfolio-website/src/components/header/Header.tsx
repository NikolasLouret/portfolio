//* CSS
import styles from './Header.module.css'

//* Media Query
import { useMediaQuery } from 'react-responsive'

//* React
import { useEffect, useRef, useState, FC, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

//* Icons
import { IoMenuOutline } from 'react-icons/io5'

const Header: FC = () => {
	const { theme, setTheme } = useContext(ThemeContext)
	const isDesktop = useMediaQuery({ minWidth: 1200 })
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const menuRef = useRef<HTMLHtmlElement | null>(null)

	const handleThemeChange = () => {
		const isCurrentDark = theme === 'dark'
		setTheme(isCurrentDark ? 'light' : 'dark')
		localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark')
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const handleOutsideClick = (e: Event) => {
		if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
			setIsMenuOpen(false)
		}
	}

	useEffect(() => {
		if (isMenuOpen) {
			document.addEventListener('click', handleOutsideClick)
		} else {
			document.removeEventListener('click', handleOutsideClick)
		}

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [isMenuOpen])

	const handleLinkClick = () => {
		setIsMenuOpen(false)
	}

	function useScrollDirection() {
		const [scrollDirection, setScrollDirection] = useState('up')

		useEffect(() => {
			let lastScrollY: number = window.scrollY

			const updateScrollDirection = () => {
				const scrollY: number = window.scrollY
				const direction: string = scrollY > lastScrollY ? 'down' : 'up'

				if (direction !== scrollDirection) {
					setScrollDirection(direction)
					setIsMenuOpen(false)
				}

				lastScrollY = scrollY > 0 ? scrollY : 0
			}

			window.addEventListener('scroll', updateScrollDirection)

			return () => {
				window.removeEventListener('scroll', updateScrollDirection)
			}
		}, [scrollDirection])

		return scrollDirection
	}

	const scrollDirection = useScrollDirection()

	return (
		<div
			className={`flex justify-between align-center ${styles.header} ${styles[scrollDirection]} ${styles[theme]}`}>
			<div className={`flex justify-between align-center ${styles.gap_login}`}>
				<img
					className={styles.logo_icon}
					src={theme === 'dark' ? '/icons/logo_darkmode.svg' : '/icons/my-logo.svg'}
					alt='logo'
				/>

				<div className='flex flex-column align-center'>
					<span className={styles.name}>Nikolas Louret</span>
					<span className={styles.cargo}>ENGENHEIRO DE SOFTWARE</span>
				</div>
			</div>

			{isDesktop ? (
				<nav className={`flex justify-between align-center ${styles.menu}`}>
					<ul className={`flex justify-between align-center column-gap-3rem ${styles.items}`}>
						<li>
							<a href='#projects' aria-label='Projetos'>
								Projetos
							</a>
						</li>
						<li>
							<a href='#about-me' aria-label='Sobre Mim'>
								Sobre mim
							</a>
						</li>
						<li>
							<div className={`toggle-checkbox`}>
								<input
									type='checkbox'
									name='checkbox'
									onChange={handleThemeChange}
									checked={theme === 'light'}
									id='checkbox'
									className={styles.toggle_checkbox}
								/>
								<label htmlFor='checkbox' className={styles.switch}>
									<span className={styles.slider}></span>
								</label>
							</div>
						</li>
					</ul>
				</nav>
			) : (
				<nav ref={menuRef} className={`flex justify-between align-center ${styles.menu}`}>
					<button type='button' className={styles.menu_btn} onClick={toggleMenu} aria-label='Menu'>
						<IoMenuOutline size='1.7rem' />
					</button>

					{isMenuOpen && (
						<ul className={`flex flex-column ${styles.menu_list}`}>
							<li>
								<div className={`flex ${styles.div_checkbox}`}>
									<input
										type='checkbox'
										name='checkbox'
										onChange={handleThemeChange}
										checked={theme === 'light'}
										id='checkbox'
										className={styles.toggle_checkbox}
									/>
									<label htmlFor='checkbox' className={styles.switch}>
										<span className={styles.slider}></span>
									</label>
								</div>
							</li>
							<li onClick={handleLinkClick}>
								<a href='#projects' aria-label='Projetos'>
									Projetos
								</a>
							</li>
							<li onClick={handleLinkClick}>
								<a href='#about-me' aria-label='Sobre Mim'>
									Sobre mim
								</a>
							</li>
						</ul>
					)}
				</nav>
			)}
		</div>
	)
}

export default Header
