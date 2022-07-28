import React from "react";
import { Container } from "../UI/Container";
import styles from "./Form.module.css";

export const Form = () => {
	return (
		<div className={styles.form}>
			<Container className={styles.formContainer}>
				<h3 className={styles.title}>Контакты</h3>
				<form className={styles.form}>
					<input type="text" />
					<input type="text" />
					<textarea />
				</form>
				<button>Отправить</button>
			</Container>
		</div>
	);
};
