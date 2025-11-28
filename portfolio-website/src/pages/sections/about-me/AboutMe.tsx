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
						Sou Engenheiro de Software formado pela PUC Minas, com experiência em desenvolvimento Full-Stack e forte capacidade de raciocínio lógico. Busco atuar em projetos desafiadores de desenvolvimento, contribuindo com soluções eficientes, código de qualidade e foco em resultados. Meu objetivo é crescer profissionalmente enquanto agrego valor para a empresa, colaborando ativamente com a equipe e participando da construção de produtos robustos e escaláveis.
					</p>
				</FadeInSection>
				<FadeInSection direction='up'>
					<p>
						Minha jornada até aqui tem sido repleta de experiências enriquecedoras. Tenho experiência
						prática com várias tecnologias, incluindo as linguagens Java e TypeScript. Participei do
						desenvolvimento de projetos Full Stack, utilizando ferramentas como ReactJs, NextJs, NestJs e AngularJs.
						Além disso, trabalhei com modelagem de bancos de dados tanto
						relacionais, usando PostgreSQL e MS SQLServer, quanto não-relacionais, na nuvem, com MongoDB Atlas.
					</p>
				</FadeInSection>
				<FadeInSection direction='up'>
					<p>
						Tenho grandes aspirações para o futuro e busco expandir meus conhecimentos em desenvolvimento de aplicações móveis, além de aprimorar minhas habilidades em aplicações web e segurança de software.
					</p>
				</FadeInSection>
			</div>
		</section>
	)
}

export default AboutMe
