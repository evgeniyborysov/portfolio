import React from "react";
import { Container } from "../UI/Container";
import style from "./Header.module.css";
import { Nav } from "./Nav/Nav";

export const Header = () => {
	return (
		<div className={style.header}>
			<Container className={style.headerContainer}>
				<Nav />
			</Container>
		</div>
	);
};
