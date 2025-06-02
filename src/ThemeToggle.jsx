import { useEffect, useState } from "react";
import DarkIcon from "./assets/dark.svg";
import LightIcon from "./assets/light.svg";
import "./components/TaskForm.css";

const ThemeToggle = () => {
	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) return storedTheme;
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		return prefersDark ? "dark" : "light";
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<div className="light-dark-mode-btn">
			<button onClick={toggleTheme} className="toggle-btn">
				{theme === "dark" ? (
					<img src={LightIcon} alt="light-icon" className="light-icon" />
				) : (
					<img src={DarkIcon} alt="dark-icon" className="dark-icon" />
				)}
			</button>
		</div>
	);
};

export default ThemeToggle;
