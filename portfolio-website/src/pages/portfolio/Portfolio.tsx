//* CSS
import styles from './Portfolio.module.css'

//* React
import { useEffect, useContext, lazy } from 'react'

//* Components
const FadeInSection = lazy(() => import('../../components/fadein-section/FadeInSection'))
const Presentation = lazy(() => import('../sections/presentation/Presentation'))
const AboutMe = lazy(() => import('../sections/about-me/AboutMe'))
const Header = lazy(() => import('../../components/header/Header'))
const Projects = lazy(() => import('../sections/projects/Projects'))
const Footer = lazy(() => import('../../components/footer/Footer'))
const FloatingButton = lazy(() => import('../../components/btn-floating/FloatingButton'))

//* Context
import { ThemeContext } from '../../context/ThemeContext'

const Portfolio = () => {
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0)
		}
	}, [])

	return (
		<div className={`${styles[theme]} ${styles.body}`}>
			<Header />
			<div className={`flex ${styles.mask_text}`}>
				<span className={styles.animated_text}>DESENVOLVEDOR DE SOFTWARE</span>
				<span className={styles.animated_text}>DESENVOLVEDOR DE SOFTWARE</span>
			</div>

			<div className={styles.divImg}>
				<img
					className={styles.me}
					src={theme == 'dark' ? '/imgs/photo_dark.webp' : '/imgs/photo_light.webp'}
					alt='Me'
				/>
			</div>

			<div className={`flex flex-column ${styles.container}`}>
				<FadeInSection key={'123'} direction='left'>
					<Presentation />
				</FadeInSection>

				<AboutMe id='about-me' />

				<Projects id='projects' />
				<Footer />
			</div>

			<FloatingButton />
		</div>
	)
}

export default Portfolio
