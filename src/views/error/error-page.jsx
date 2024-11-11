import { Row, Space } from "antd";
import { Typography } from "antd";
import { useRouteError } from "react-router-dom";
const { Title, Text } = Typography;
export default function ErrorPage() {
	const error = useRouteError();

	return (
		<Space
			id="error-page"
			style={{
				height: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<Row style={{ display: "flex", flexDirection: "column" }}>
				<Title style={{ fontSize: "70px" }}>Oops!</Title>
				<Text level={2}>Sorry, an unexpected error has occurred.</Text>
				<Text level={5}>
					<i>{error.statusText || error.message} this page</i>
				</Text>
			</Row>
		</Space>
	);
}
