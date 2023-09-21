//* CSS
import styles from './Technologies.module.css'

const Technologies = () => {
	return (
		<div className={styles.tech}>
			<h1 className={styles.tech_title}>Tecnologias</h1>

			<div className={`flex justify_between ${styles.technologies}`}>
				<ul className={`flex justify_between ${styles.list_tech}`}>
					<li>
						<img src='/icons/git.svg' alt='Git' />
					</li>
					<li>
						<img src='/icons/css3.svg' alt='CSS3' />
					</li>
					<li>
						<img src='/icons/javascript.svg' alt='JavaScript' />
					</li>
					<li>
						<img src='/icons/html.svg' alt='HTML5' />
					</li>
					<li>
						<img src='/icons/mongodb.svg' alt='MongoDB' />
					</li>
					<li>
						<img src='/icons/nodejs.svg' alt='NodeJs' />
					</li>
					<li>
						<img src='/icons/react-icon.svg' alt='ReactJs' />
					</li>
					<li>
						<img src='/icons/java.svg' alt='Java' />
					</li>
					<li>
						<img src='/icons/intellij.svg' alt='IntelliJ IDE' />
					</li>
				</ul>
				<ul className={`flex justify_between ${styles.list_tech}`}>
					<li>
						<img src='/icons/git.svg' alt='Git' />
					</li>
					<li>
						<img src='/icons/css3.svg' alt='CSS3' />
					</li>
					<li>
						<img src='/icons/javascript.svg' alt='JavaScript' />
					</li>
					<li>
						<img src='/icons/html.svg' alt='HTML5' />
					</li>
					<li>
						<img src='/icons/mongodb.svg' alt='MongoDB' />
					</li>
					<li>
						<img src='/icons/nodejs.svg' alt='NodeJs' />
					</li>
					<li>
						<img src='/icons/react-icon.svg' alt='ReactJs' />
					</li>
					<li>
						<img src='/icons/java.svg' alt='Java' />
					</li>
					<li>
						<img src='/icons/intellij.svg' alt='IntelliJ IDE' />
					</li>
				</ul>
				<ul className={`flex justify_between ${styles.list_tech}`}>
					<li>
						<img src='/icons/git.svg' alt='Git' />
					</li>
					<li>
						<img src='/icons/css3.svg' alt='CSS3' />
					</li>
					<li>
						<img src='/icons/javascript.svg' alt='JavaScript' />
					</li>
					<li>
						<img src='/icons/html.svg' alt='HTML5' />
					</li>
					<li>
						<img src='/icons/mongodb.svg' alt='MongoDB' />
					</li>
					<li>
						<img src='/icons/nodejs.svg' alt='NodeJs' />
					</li>
					<li>
						<img src='/icons/react-icon.svg' alt='ReactJs' />
					</li>
					<li>
						<img src='/icons/java.svg' alt='Java' />
					</li>
					<li>
						<img src='/icons/intellij.svg' alt='IntelliJ IDE' />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Technologies
