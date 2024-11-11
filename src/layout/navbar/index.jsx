import { Space } from "antd";
import { Layout } from "antd";

import React from "react";
import { NavLink } from "react-router-dom";
const { Header } = Layout;

const links = [
	{
		name: "Suallar",
		path: "/questions",
	},
	{
		name: "Haqqımızda",
		path: "/about",
	},
	{
		name: "Əlaqə",
		path: "/contact",
	},
	{
		name: "Login",
		path: "/login",
	},
	{
		name: "QuestionAnswer",
		path: "/questionAnswer",
	},
	{
		name: "CodeRunner",
		path: "/codeRunner",
	},
];

const Navbar = () => {
	return (
		<Space
			style={{
				display: "flex",
				alignItems: "center",
				padding: "0",
				backgroundColor: "none",
			}}
		>
			{links.map((link) => (
				<NavLink
					to={link.path}
					key={link.name}
					style={{ color: "white", padding: "0 10px", textDecoration: "none" }}
				>
					{link.name}
				</NavLink>
			))}
		</Space>
	);
};

export default Navbar;
