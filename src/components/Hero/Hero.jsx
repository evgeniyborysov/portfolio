import React from "react";
import { Container } from "../UI/Container";
import styles from "./Hero.module.css";

export const Hero = () => {
	return (
		<div className={styles.hero}>
			<Container className={styles.heroContainer}>
				<div className={styles.title}>
					<div>Привет!</div>
					<h2>Меня зовут Иван Иванов.</h2>
					<div>Я front-end разработчик.</div>
				</div>
				<div className={styles.photo}>
					<img
						className={styles.img}
						src="https://i.pinimg.com/originals/d4/c4/42/d4c442a8ceddb5a7b6fe793b6d3c3c41.jpg"
						alt=""
					/>
				</div>
			</Container>
		</div>
	);
};
