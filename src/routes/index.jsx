import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
const Questions = lazy(() => import("../views/questions/index.jsx"));
const Login = lazy(() => import("../views/login/index.jsx"));
const About = lazy(() => import("../views/about/index.jsx"));
const Contact = lazy(() => import("../views/contact/index.jsx"));
const ErrorPage = lazy(() => import("../views/error/error-page.jsx"));
const MainLayout = lazy(() => import("../routes/layout.jsx"));

const withSuspense = (Component) => (
	<Suspense fallback={<Spin size="large" />}>
		<Component />
	</Suspense>
);

export const routes = [
	{
		path: "/",
		element: withSuspense(MainLayout),
		errorElement: withSuspense(ErrorPage),
		children: [
			{ index: true, element: <Navigate to="/questions" replace /> },
			{ path: "questions", element: withSuspense(Questions) },
			{ path: "about", element: withSuspense(About) },
			{ path: "contact", element: withSuspense(Contact) },
			{ path: "*", element: withSuspense(ErrorPage) },
			{ path: "login", element: withSuspense(Login) },
		],
	},
];
