//* CSS
import FadeInSection from '../../../components/fadein-section/FadeInSection'
import styles from './AboutMe.module.css'

const AboutMe = (prop: { id: string }) => {
	return (
		<section id={prop.id} className={`flex flex-column ${styles.body}`}>
			<FadeInSection direction='left'>
				<div className={styles.title}>
					<span className={styles.subtitle}>Um pouco</span>
					<h2 className={styles.about_me}>SOBRE MIM</h2>
				</div>
			</FadeInSection>

			<div className={`flex flex-column ${styles.description}`}>
				<FadeInSection direction='up'>
					<p>
						Sou estudante de Engenharia de Software na PUC Minas, atualmente residindo em Contagem, MG.
						Minha paixão pela programação me levou a desenvolver habilidades sólidas em desenvolvimento Full
						Stack e a cultivar pensamento lógico. Meu objetivo profissional é mergulhar em projetos de
						desenvolvimento Full Stack/Front End, onde posso continuar aprimorando minhas capacidades e, ao
						mesmo tempo, fazer uma contribuição valiosa para a equipe e a empresa.
					</p>
				</FadeInSection>
				<FadeInSection direction='up'>
					<p>
						Minha jornada até aqui tem sido repleta de experiências enriquecedoras. Tenho experiência
						prática com várias tecnologias, incluindo as linguagens Java e JavaScript. Participei do
						desenvolvimento de projetos Full Stack, utilizando ferramentas como ReactJs, NodeJs, Express,
						Sequelize, Mongoose, CSS e HTML. Além disso, trabalhei com modelagem de bancos de dados tanto
						relacionais, usando MySQL e MS SQLServer, quanto não-relacionais, na nuvem, com MongoDB Atlas.
					</p>
				</FadeInSection>
				<FadeInSection direction='up'>
					<p>
						Tenho grandes aspirações para o futuro e desejo expandir meus conhecimentos para o campo das
						aplicações móveis. Estou ansioso para explorar o desenvolvimento mobile com ReactJs Native e
						Flutter, a fim de ampliar ainda mais meu conjunto de habilidades.
					</p>
				</FadeInSection>
			</div>
		</section>
	)
}

export default AboutMe
