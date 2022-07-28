import React from "react";
import { Container } from "../UI/Container";
import { Project } from "./Project/Project";
import styles from "./Projects.module.css";

export const Projects = () => {
	return (
		<div className={styles.projects}>
			<Container className={styles.projectsContainer}>
				<h3 className={styles.title}>Мои работы</h3>
				<div className={styles.wrapper}>
					<Project />
					<Project />
				</div>
			</Container>
		</div>
	);
};
