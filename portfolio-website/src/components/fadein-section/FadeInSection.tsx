//* CSS
import styles from './FadeInSection.module.css'

//* React
import { useState, useRef, useEffect } from 'react'

//* Interface
interface FadeInProps {
	children: string | JSX.Element
	direction: string
}

const FadeInSection = ({ children, direction }: FadeInProps) => {
	const [isVisible, setVisible] = useState(false)
	const divRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				setVisible(true)

				if (null !== divRef.current) {
					observer.unobserve(divRef.current)
				}
			}
		})

		if (null !== divRef.current) {
			observer.observe(divRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<div
			className={`${styles.fade_in_section} ${styles[direction]} ${isVisible && styles['is-visible']}`}
			ref={divRef}>
			{children}
		</div>
	)
}

export default FadeInSection
