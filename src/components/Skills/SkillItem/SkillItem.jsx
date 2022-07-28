import React from "react";
import styles from "./SkillItem.module.css";

export const SkillItem = () => {
	return (
		<div className={styles.card}>
			<div className={styles.logo}></div>
			<h3 className={styles.title}>React</h3>
			<span className={styles.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Quibusdam veritatis quia hic ea eum dolorem quidem similique,
				mollitia deleniti ipsa beatae sequi illo. Nostrum vitae magnam
				temporibus nam obcaecati iste.
			</span>
		</div>
	);
};
