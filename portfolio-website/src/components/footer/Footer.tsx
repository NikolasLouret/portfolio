//* CSS
import styles from './Footer.module.css'

//* Icons
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

//* React
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Footer = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`flex flex-column row-gap-3rem ${styles.footer}`}>
			<div className={styles.line}></div>

			<div className={`flex row-gap-1rem column-gap-10rem ${styles.infos}`}>
				<div className={`flex flex-column row-gap-1rem ${styles.contact}`}>
					<h2 className={styles.title}>Informações de contato</h2>

					<p className={styles.description}>
						Sinta-se à vontade para entrar em contato comigo a qualquer momento. Prefiro conversar por
						whatsapp, principalmente porque a minha região não ter sinal de telefone, além do retorno ser
						mais rápido.
					</p>

					<div className={`flex flex-column ${styles.contact_infos}`}>
						<span className={styles.email}>
							<b>Email:</b>
							<a href='mailto:nikolasalouret@gmail.com' target='_blank'>
								nikolasalouret@gmail.com
							</a>
						</span>

						<span className={styles.whatsapp}>
							<b>Whatsapp:</b>{' '}
							<a href='https://wa.me//5531999532003' target='_blank'>
								(31) 9 9953-2003
							</a>
						</span>
					</div>
				</div>

				<div className={`flex flex-column row-gap-1rem ${styles.social}`}>
					<h2 className={styles.title}>Redes Sociais</h2>

					<ul className={`flex column-gap-1rem ${styles.social_icons}`}>
						<li className={styles.social_icon}>
							<a href='https://www.linkedin.com/in/nikolaslouret/' target='_blank' aria-label='LinkedIn'>
								<BsLinkedin size='1.2rem' fill='#939393' />
							</a>
						</li>

						<li className={styles.social_icon}>
							<a href='https://github.com/NikolasLouret' target='_blank' aria-label='Git Hub'>
								<BsGithub size='1.2rem' fill='#939393' />
							</a>
						</li>

						<li className={styles.social_icon}>
							<a href='https://www.instagram.com/nikolas_louret/' target='_blank' aria-label='Instagram'>
								<BsInstagram size='1.2rem' fill='#939393' />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className={`flex column-gap-1rem ${styles[theme]}`}>
				<img className={styles.footer_logo} src='/icons/my-logo_light-gray.svg' alt='Nikolas Louret' />

				<div className={`flex flex-column ${styles.text}`}>
					<span className={styles.text}>Copyright &copy; 2023 Nikolas Louret</span>

					<span className={styles.text}>
						Made with <span className={styles.heart}>❤</span> in Belo Horizonte
					</span>
				</div>
			</div>
		</div>
	)
}

export default Footer
