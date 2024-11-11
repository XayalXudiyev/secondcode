import { Layout } from "antd";
import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar";

const { Sider, Content, Header } = Layout;

const MainLayout = () => {
	return (
		<Layout style={{ backgroundColor: "#edede" }}>
			<Header style={{ backgroundColor: "#edede" }}>
				<Navbar />
			</Header>
			<Content>
				<Outlet />
			</Content>
		</Layout>
	);
};

export default MainLayout;
