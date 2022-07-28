import React from "react";
import styles from "./Nav.module.css";

export const Nav = () => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<div className={styles.navLink}>Главная</div>
				</li>
				<li className={styles.navItem}>
					<div className={styles.navLink}>Скилы</div>
				</li>
				<li className={styles.navItem}>
					<div className={styles.navLink}>Работы</div>
				</li>
				<li className={styles.navItem}>
					<div className={styles.navLink}>Контакты</div>
				</li>
			</ul>
		</div>
	);
};
