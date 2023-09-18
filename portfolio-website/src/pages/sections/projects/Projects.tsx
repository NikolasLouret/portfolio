//* CSS
import styles from './Projects.module.css'

//* React
import { useEffect, useState } from 'react'

//* Components
import ProjectCard from '../../../components/projectCard/ProjectCard'

//* Interface
import { IProjectCardProps } from '../../../types/IProjectCardProps'
import { IRepoProps } from '../../../types/IRepoProps'
import FadeInSection from '../../../components/fadein-section/FadeInSection'

const data_mock: IProjectCardProps[] = [
	{
		id: 407210763,
		name: 'DIW-Trabalhos',
		year: 2021,
		description:
			'Repositório destinado à armazenar os projetos referentes ao trabalhos das disciplinas do curso de Eng. de Software da PUC Minas - Praça da Liberdade',
		topics: ['css3', 'html5', 'javascript'],
		img: '/imgs/placeholder.png',
		httpRepo: 'https://github.com/NikolasLouret/DIW-Trabalhos',
	},
	{
		id: 438043685,
		name: 'Klug',
		year: 2021,
		description:
			'Aplicação desenvolvida para a disciplina de "Trabalho Interdisciplinar: Aplicações Web", com propósito de estudo.',
		topics: [],
		img: '/imgs/capa_klug.jpg',
		httpRepo: 'https://github.com/NikolasLouret/Klug',
	},
	{
		id: 662229083,
		name: 'ProtOn-Odontologia',
		year: 2023,
		description:
			'Repositório de desenvolvimento do ProtOn Odontologia, um sistema de recomendações de protocolos odontológicos em ReactJs, NodeJs e MongoDB Atlas',
		topics: ['css3', 'html5', 'javascript', 'mongodb-atlas', 'nodejs', 'reactjs'],
		img: '/imgs/capa_proton.png',
		httpRepo: 'https://github.com/NikolasLouret/ProtOn-Odontologia',
	},
	{
		id: 617218185,
		name: 'todosimple-api',
		year: 2023,
		description:
			'Aplicação de Spring Boot desenvolvida para fins de aprendizado do curso de RESTful API com Spring Boot do Lucas Ângelo (Eng. de Software PUC Minas Praça da Liberdade)',
		topics: ['java'],
		img: '/imgs/placeholder.png',
		httpRepo: 'https://github.com/NikolasLouret/todosimple-api',
	},
	{
		id: 645022704,
		name: 'trabalho-caixeiro-viajente',
		year: 2023,
		description:
			'Resolução do problema do Caixeiro Viajante em um grafo utilizando algoritmo de Foça Bruta e o algortimo Guloso',
		topics: ['java'],
		img: '/imgs/placeholder.png',
		httpRepo: 'https://github.com/NikolasLouret/trabalho-caixeiro-viajente',
	},
]

const Projects = (prop: { id: string }) => {
	const url_repos = 'http://api.github.com/users/nikolaslouret/repos'
	const [projects, setProjects] = useState<IProjectCardProps[]>([])
	const [allProjects, setAllProjects] = useState<IProjectCardProps[]>([])
	const [page, setPage] = useState(0)

	useEffect(() => {
		// eslint-disable-next-line no-extra-semi
		;(async () => {
			try {
				const response = await fetch(url_repos)
				const data = await response.json()

				if (response.status === 200) {
					const repos = (await getProjects(data)).filter(i => {
						return i
					}) as IProjectCardProps[]

					setAllProjects(repos)
					setProjects(repos.slice(page * 6, page * 6 + 6))

					setPage(page + 1)
				} else {
					setAllProjects(data_mock)
					setProjects(data_mock.slice(page * 6, page * 6 + 6))
				}
			} catch (error) {
				console.error(error)
				setAllProjects(data_mock)
			}
		})()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getProjects = (data: []) => {
		return Promise.all(
			data.map(async (repo: IRepoProps) => {
				if (repo.id !== 622914655) {
					const { id, name, created_at, description, topics, contents_url, html_url } = repo
					let imgUrl: string

					try {
						const imgResp = await fetch(imgPath(contents_url, '/Divulgacao/Thumbnail'))
						const img = await imgResp.json()

						if (imgResp.status !== 200) imgUrl = '/imgs/placeholder.png'
						else imgUrl = img[0].download_url
					} catch (error) {
						console.error(error)
						imgUrl = '/imgs/placeholder.png'
					}

					const projectData: IProjectCardProps = {
						id: id,
						name: name,
						year: new Date(created_at).getFullYear(),
						description: description || 'Este projeto não possui descrição',
						topics: topics || [],
						img: imgUrl,
						httpRepo: html_url,
					}

					return projectData
				}
			}),
		)
	}

	const imgPath = (contents_url: string, path: string) => {
		return contents_url.replace('/{+path}', path)
	}

	const handleLoadMore = () => {
		projects.concat(allProjects.slice(page * 6, page * 6 + 6))
		console.log(allProjects.slice(page * 6, page * 6 + 6))
		setProjects(projects)
		setPage(page + 1)
	}

	return (
		<section id={prop.id} className={`flex flex-column ${styles.body}`}>
			<FadeInSection key={'12345'} direction='right'>
				<div className={styles.title}>
					<span className={styles.subtitle}>Meus</span>
					<h2 className={styles.about_me}>PROJETOS</h2>
				</div>
			</FadeInSection>

			<div className={styles.projects}>
				{projects.map((project, index) => (
					<FadeInSection key={'2345'} direction='up'>
						<ProjectCard
							key={index}
							id={project.id}
							name={project.name}
							year={project.year}
							description={project.description}
							topics={project.topics}
							img={project.img}
							httpRepo={project.httpRepo}
						/>
					</FadeInSection>
				))}
			</div>

			{allProjects.length > 6 && (
				<span className={styles.load_more} onClick={handleLoadMore}>
					Carregar mais projetos
				</span>
			)}
		</section>
	)
}

export default Projects
