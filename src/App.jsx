import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Skills />
			<Projects />
			<Form />
			<Footer />
		</div>
	);
}

export default App;
