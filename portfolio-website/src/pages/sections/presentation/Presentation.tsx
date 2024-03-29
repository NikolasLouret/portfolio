//* CSS
import styles from './Presentation.module.css'

//* Icons
import { BsLinkedin, BsGithub } from 'react-icons/bs'

//* Components
import Technologies from '../technologies/Technologies'

const Presentation = () => {
	return (
		<div className={`flex flex-column ${styles.body}`}>
			<div className={styles.presentation}>
				<div className={`flex flex-column ${styles.contact}`}>
					<a href='https://www.linkedin.com/in/nikolaslouret/' target='_blank' aria-label='LinkedIn'>
						<BsLinkedin size='1.2rem' fill='#939393' />
					</a>
					<a href='https://github.com/NikolasLouret' target='_blank' aria-label='Git Hub'>
						<BsGithub size='1.2rem' fill='#939393' />
					</a>
				</div>

				<div className={`flex flex-column ${styles.infos}`}>
					<div className={`flex flex-column ${styles.title}`}>
						<span>Nikolas Louret</span>
						<div className={styles.line} />
						<h1 className={styles.cargo}>
							DESENVOLVEDOR <span>FULL STACK</span>
						</h1>
					</div>

					<p className={styles.description}>
						Sou estudante de Engenharia de Software e, nos últimos 3 anos, desenvolvi projetos próprios e
						para clientes reais para contribuir com conhecimento profissional e pessoal, assim como atingir
						a satisfação do cliente.
					</p>

					<a href='#projects'>
						<button type='button' className={styles.button} aria-label='Ver Projetos'>
							Ver projetos
						</button>
					</a>
				</div>
			</div>

			<Technologies />
		</div>
	)
}

export default Presentation
