import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import { ITItems } from "./data.jsx";
const { Header, Content, Footer, Sider } = Layout;

const items1 = ["Müsahibə sualları", "Haqqımızda", "Əlaqə"].map((key) => ({
	key,
	label: ` ${key}`,
}));

const App = () => {
	const {token: { colorBgContainer }} = theme.useToken();
	return (
		<Layout>
			<Header
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["2"]}
					items={items1}
					style={{
						flex: 1,
						minWidth: 0,
					}}
				/>
			</Header>

			<Content
				style={{
					minHeight: "100vh",
				}}
			>
				<Breadcrumb
					style={{
						margin: "16px 0",
					}}
				>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Layout
					style={{
						padding: "24px 0",
						background: colorBgContainer,
					}}
				>
					<Sider
						style={{
							background: colorBgContainer,
						}}
						width={240}
					>
						<Menu
							items={ITItems}
						/>
					</Sider>

					<Content
						style={{
							padding: "0 24px",
							minHeight: 280,
						}}
					>
						Content
					</Content>
				</Layout>
			</Content>

			<Footer
				style={{
					textAlign: "center",
				}}
			>
				Ant Design ©{new Date().getFullYear()} Created by Ant UED
			</Footer>
		</Layout>
	);
};
export default App;
