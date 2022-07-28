import React from "react";
import styles from "./Project.module.css";

export const Project = () => {
	return (
		<div className={styles.card}>
			<div className={styles.bgBox}>
				<button>Смотреть</button>
			</div>
			<div className={styles.wrapper}>
				<h3 className={styles.title}>Название проэкта</h3>
				<span className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quibusdam veritatis quia hic ea eum dolorem quidem
					similique.
				</span>
			</div>
		</div>
	);
};
