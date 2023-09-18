//* CSS
import styles from './Portfolio.module.css'

//* React
import { useEffect } from 'react'

//* Components
import Header from '../../components/header/Header'
import Presentation from '../sections/presentation/Presentation'
import AboutMe from '../sections/about-me/AboutMe'
import ParallaxText from '../../components/parallax/ParallaxText'
import Projects from '../sections/projects/Projects'
import Footer from '../../components/footer/Footer'
import FloatingButton from '../../components/btn-floating/FloatingButton'
import FadeInSection from '../../components/fadein-section/FadeInSection'

const Portfolio = () => {
	useEffect(() => {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0)
		}
	}, [])

	return (
		<>
			<Header />
			<div className={styles.mask_text}>
				<ParallaxText baseVelocity={-0.2}>
					<span className={styles.animated_text}>DESENVOLVIMENTO DE SOFTWARE</span>
				</ParallaxText>
			</div>

			<div className={`flex flex-column ${styles.container}`}>
				<FadeInSection key={'123'} direction='right'>
					<Presentation />
				</FadeInSection>

				<FadeInSection key={'1234'} direction='up'>
					<AboutMe id='about-me' />
				</FadeInSection>

				<Projects id='projects' />
				<Footer />
			</div>

			<FloatingButton />
		</>
	)
}

export default Portfolio
