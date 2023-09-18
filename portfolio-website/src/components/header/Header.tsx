//* CSS
import styles from './Header.module.css'

//* Media Query
import { useMediaQuery } from 'react-responsive'

//* React
import { useEffect, useRef, useState } from 'react'

//* Icons
import { IoMenuOutline } from 'react-icons/io5'

const Header = () => {
	const isDesktop = useMediaQuery({ minWidth: 1200 })
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const menuRef = useRef<HTMLHtmlElement | null>(null)

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
		<div className={`flex justify-between align-center ${styles.header} ${styles[scrollDirection]}`}>
			<div className={`flex justify-between align-center ${styles.gap_login}`}>
				<img className={styles.logo_icon} src='/icons/my-logo.svg' alt='logo' />

				<div className='flex flex-column align-center'>
					<span className={styles.name}>Nikolas Louret</span>
					<span className={styles.cargo}>ENGENHEIRO DE SOFTWARE</span>
				</div>
			</div>

			{isDesktop ? (
				<nav className={`flex justify-between align-center ${styles.menu}`}>
					<ul className={`flex justify-between align-center column-gap-3rem ${styles.items}`}>
						<li>
							<a href='#projects'>Projetos</a>
						</li>
						<li>
							<a href='#about-me'>Sobre mim</a>
						</li>
					</ul>
				</nav>
			) : (
				<nav ref={menuRef} className={`flex justify-between align-center ${styles.menu}`}>
					<button type='button' className={styles.menu_btn} onClick={toggleMenu}>
						<IoMenuOutline size='1.7rem' />
					</button>

					{isMenuOpen && (
						<ul className={styles.menu_list}>
							<li onClick={handleLinkClick}>
								<a href='#projects'>Projetos</a>
							</li>
							<li onClick={handleLinkClick}>
								<a href='#about-me'>Sobre mim</a>
							</li>
						</ul>
					)}
				</nav>
			)}
		</div>
	)
}

export default Header
