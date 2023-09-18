//* CSS
import styles from './AboutMe.module.css'

const AboutMe = (prop: { id: string }) => {
	return (
		<section id={prop.id} className={`flex flex-column ${styles.body}`}>
			<div className={styles.title}>
				<span className={styles.subtitle}>Algumas palavras</span>
				<h2 className={styles.about_me}>SOBRE MIM</h2>
			</div>

			<p className={styles.description}>
				Sou estudante de Engenharia de Software pela PUC Minas e moro em Contagem/MG. Possuo habilidade em
				desenvolvimento Full Stack e bom raciocínio lógico. Portanto, meu objetivo é atuar em projetos de
				desenvolvimento Full Stack a fim de contribuir com o meu crescimento profissional e agregar valor para a
				empresa.
			</p>
		</section>
	)
}

export default AboutMe
