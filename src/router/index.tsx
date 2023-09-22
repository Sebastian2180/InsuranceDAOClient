// Routes.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages";
import Login from "../pages/login";
import FeedPage from "../pages/feed";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/feed" element={<FeedPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
