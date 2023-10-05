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
import mock from '../../../components/mock/projects_mock.json'

const data_mock: IProjectCardProps[] = mock
const repoIds: number[] = [622914655, 691717085]

const Projects = (prop: { id: string }) => {
	const url_repos = 'https://api.github.com/users/nikolaslouret/repos'
	const [projects, setProjects] = useState<IProjectCardProps[]>([])
	const [allProjects, setAllProjects] = useState<IProjectCardProps[]>([])
	const [page, setPage] = useState(0)

	useEffect(() => {
		//eslint-disable-next-line no-extra-semi
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
				} else {
					setAllProjects(data_mock)
					setProjects(data_mock.slice(page * 6, page * 6 + 6))
				}

				setPage(page + 1)
			} catch (error) {
				setAllProjects(data_mock)
				setProjects(data_mock.slice(page * 6, page * 6 + 6))

				setPage(page + 1)
			}
		})()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getProjects = (data: []) => {
		return Promise.all(
			data.map(async (repo: IRepoProps) => {
				if (!repoIds.includes(repo.id)) {
					const { id, name, created_at, description, topics, contents_url, html_url } = repo
					let imgUrl: string

					try {
						const imgResp = await fetch(imgPath(contents_url, '/Divulgacao/Thumbnail'))
						const img = await imgResp.json()

						if (imgResp.status !== 200) imgUrl = '/imgs/placeholder.webp'
						else imgUrl = img[0].download_url
					} catch (error) {
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
		const addMoreProjects = projects.concat(allProjects.slice(page * 6, page * 6 + 6))

		setProjects(addMoreProjects)
		setPage(page + 1)
	}

	return (
		<section id={prop.id} className={`flex flex-column ${styles.body}`}>
			<FadeInSection key='12345' direction='left'>
				<div className={styles.title}>
					<span className={styles.subtitle}>Meus</span>
					<h2 className={styles.about_me}>PROJETOS</h2>
				</div>
			</FadeInSection>

			<div className={styles.projects}>
				{projects.map((project, index) => (
					<FadeInSection key={index + '2345'} direction='up'>
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

			{allProjects.length > page * 6 && (
				<span className={styles.load_more} onClick={handleLoadMore}>
					<FadeInSection key='999' direction='right'>
						<span>Carregar mais projetos</span>
					</FadeInSection>
				</span>
			)}
		</section>
	)
}

export default Projects
