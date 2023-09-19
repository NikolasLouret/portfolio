//* CSS
import styles from './Portfolio.module.css'

//* React
import { useEffect, useContext } from 'react'

//* Components
import Header from '../../components/header/Header'
import Presentation from '../sections/presentation/Presentation'
import AboutMe from '../sections/about-me/AboutMe'
import Projects from '../sections/projects/Projects'
import Footer from '../../components/footer/Footer'
import FloatingButton from '../../components/btn-floating/FloatingButton'
import FadeInSection from '../../components/fadein-section/FadeInSection'

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
				<img className={styles.me} src='/imgs/photo.png' alt='Me' />
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
