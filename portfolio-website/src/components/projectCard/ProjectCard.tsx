//* CSS
import styles from './ProjectCard.module.css'

//* Interface
import { IProjectCardProps } from '../../types/IProjectCardProps'

//* Icons
import { BsChevronRight } from 'react-icons/bs'

const ProjectCard = ({ id, name, year, description, topics, img, httpRepo }: IProjectCardProps) => {
	const formatTitle = (name: string): string => {
		name = name.replace(/-(?!>)/g, ' ')
		return name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())
	}

	return (
		<div key={id} className={styles.body}>
			<a href={httpRepo} target='_blank' rel='noopener noreferrer'>
				<span className={styles.chevron_right}>
					<BsChevronRight size='1.4rem' fill='#fff' />
				</span>

				<img className={styles.img} src={img} alt={name} />

				<div className={`flex flex-column ${styles.content}`}>
					<div className={styles.title}>
						<span className={styles.year}>{year}</span>
						<h2 className={styles.name}>{formatTitle(name)}</h2>
					</div>

					<div className={`flex flex-column ${styles.infos}`}>
						<p className={styles.description}>{description}</p>

						<div className={`flex ${styles.technologies}`}>
							{topics.map((topic: string, index: number) => (
								<span key={index} className={styles.technology}>
									{topic}
								</span>
							))}
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}

export default ProjectCard
