//* CSS
import styles from './FloatingButton.module.css'

//* Icons
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const FloatingButton = () => {
	return (
		<div className={`flex flex-column row-gap-1rem ${styles.body}`}>
			<span className={`flex justify-center align-center ${styles.email}`}>
				<a href='mailto:nikolasalouret@gmail.com' target='_blank' aria-label='Email'>
					<AiOutlineMail size='1.7rem' fill='#fff' />
				</a>
			</span>
			<span className={`flex justify-center align-center ${styles.whatsapp}`}>
				<a href='https://wa.me//5531999532003' target='_blank' aria-label='WhatsApp'>
					<BsWhatsapp size='1.7rem' fill='#fff' />
				</a>
			</span>
		</div>
	)
}

export default FloatingButton
