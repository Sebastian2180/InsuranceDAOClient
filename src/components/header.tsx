import { Link } from "react-router-dom";

export interface HeaderProps {
	title: string;
}
export default function Header({ title }: HeaderProps) {
	return (
		<div className={"flex flex-row justify-between align-bottom bg-green-200"}>
			<h1>{title}</h1>
			<nav className={"flex flex-row gap-2"}>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/feed">Sample Feed</Link>
			</nav>
		</div>
	);
}
