import React from "react";
import { Container } from "../UI/Container";
import { SkillItem } from "./SkillItem/SkillItem";
import styles from "./Skills.module.css";

export const Skills = () => {
	return (
		<div className={styles.skills}>
			<Container className={styles.skillsContainer}>
				<h3 className={styles.title}>Мои скилы</h3>
				<div className={styles.wrapper}>
					<SkillItem />
					<SkillItem />
					<SkillItem />
				</div>
			</Container>
		</div>
	);
};
