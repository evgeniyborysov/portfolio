import React from "react";
import { Container } from "../UI/Container";
import styles from "./Footer.module.css";

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<Container className={styles.footerContainer}>
				<h2 className={styles.title}>Иванов Иван</h2>
				<div className={styles.wrapper}>
					<div className={styles.first}>
						<div className={styles.box}></div>
						<div className={styles.box}></div>
					</div>
					<div className={styles.second}>
						<div className={styles.box}></div>
						<div className={styles.box}></div>
					</div>
				</div>
				<span>&#169; Все права защищены</span>
			</Container>
		</div>
	);
};
