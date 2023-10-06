//* CSS
import styles from './Projects.module.css'

//* React
import { useEffect, useState, useContext } from 'react'

//* Components
import ProjectCard from '../../../components/projectCard/ProjectCard'

//* Interface
import { IProjectCardProps } from '../../../types/IProjectCardProps'
import { IRepoProps } from '../../../types/IRepoProps'
import FadeInSection from '../../../components/fadein-section/FadeInSection'
import mock from '../../../components/mock/projects_mock.json'

//* Context
import { CookieContext } from '../../../context/CookieContext'

//* Axios
import axios from 'axios'

const data_mock: IProjectCardProps[] = mock
const repoIds: number[] = [622914655, 691717085]

const Projects = (prop: { id: string }) => {
	const DB_NAME = 'projectsDB'
	const COOKIE_NAME = 'loadProjects'
	const EXPIRE_DAYS = 2
	const URL = 'https://api.github.com/users/nikolaslouret/repos'
	const OBJECT_NAMES = 'projects'

	const { setCookie, cookieExists } = useContext(CookieContext)

	const [projects, setProjects] = useState<IProjectCardProps[]>([])
	const [allProjects, setAllProjects] = useState<IProjectCardProps[]>([])
	const [page, setPage] = useState(0)

	useEffect(() => {
		const REQUEST = indexedDB.open(DB_NAME)

		REQUEST.onerror = () => {
			return
		}

		REQUEST.onupgradeneeded = () => {
			const DB = REQUEST.result

			console.log('Criando Tabela ' + OBJECT_NAMES)
			DB.createObjectStore(OBJECT_NAMES, { keyPath: 'id' })
		}

		REQUEST.onsuccess = () => {
			const DB = REQUEST.result

			const TRANSACTION = DB.transaction(OBJECT_NAMES, 'readonly')
			const DATA = TRANSACTION.objectStore(OBJECT_NAMES).getAll()

			DATA.onsuccess = () => {
				if (!cookieExists(COOKIE_NAME)) {
					setup(DB)
				} else {
					setData(DATA.result)
				}
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const setup = async (DB: IDBDatabase) => {
		try {
			const RESPONSE = await axios.get(URL)

			if (RESPONSE.status === 200) {
				const REPOS = (await getProjects(RESPONSE.data)).filter(i => {
					return i
				}) as IProjectCardProps[]

				const TRANSACTION = DB.transaction(OBJECT_NAMES, 'readwrite')
				const objectRepos = TRANSACTION.objectStore(OBJECT_NAMES)

				objectRepos.clear()

				REPOS.forEach(repo => {
					objectRepos.add(repo)
				})

				TRANSACTION.oncomplete = () => {
					setCookie(COOKIE_NAME, 'false', EXPIRE_DAYS)
					setData(REPOS)
				}
			} else {
				setMock()
			}
		} catch (error) {
			setMock()
		}
	}

	const getProjects = (data: []) => {
		return Promise.all(
			data.map(async (repo: IRepoProps) => {
				if (!repoIds.includes(repo.id)) {
					const { id, name, created_at, description, topics, contents_url, html_url } = repo
					let imgUrl: string

					try {
						const response = await axios.get(imgPath(contents_url, '/Divulgacao/Thumbnail'))

						if (response.status !== 200) imgUrl = '/imgs/placeholder.webp'
						else imgUrl = response.data[0].download_url
					} catch (error) {
						imgUrl = '/imgs/placeholder.webp'
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

	const setMock = () => {
		setAllProjects(data_mock)
		setProjects(data_mock.slice(page * 6, page * 6 + 6))

		setPage(page + 1)
	}

	const setData = (data: IProjectCardProps[]) => {
		setAllProjects(data)
		setProjects(data.slice(page * 6, page * 6 + 6))

		setPage(page + 1)
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
