import React from "react";
import styles from "./Container.module.css";

export const Container = (props) => {
	const classes = `${styles.container} ${props.className}`;
	return <div className={classes}>{props.children}</div>;
};
