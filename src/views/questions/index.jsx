import { Col, Layout, Modal, Row, Typography } from "antd";
import axios from "axios";
import React, { useState } from "react";
import CodeEditor from "../../components/monako/CodeEditor";
import { useGetQuestionsQuery } from "../../redux/api/questionsApi.js";

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const Questions = () => {
	const [language, setLanguage] = useState("javascript");
	const [output, setOutput] = useState("");
	const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const { data: questions, isLoading, error } = useGetQuestionsQuery();

	const runCode = async (code) => {
		try {
			const response = await axios.post("/api/run-code", { language, code });
			setOutput(response.data.output);
		} catch (error) {
			setErrorMessage(
				error.response
					? error.response.data.error
					: "An unknown error occurred.",
			);
			setIsErrorModalVisible(true);
		}
	};

	const handleModalClose = () => {
		setIsErrorModalVisible(false);
	};

	return (
		<Layout style={{ backgroundColor: "#f0f2f5" }}>
			<Content style={{ padding: "2rem" }}>
				<Row gutter={[24, 24]}>
					<Col span={12}>
						{questions?.map((question) => (
							<div
								key={question.question_id}
								style={{
									backgroundColor: "#fff",
									padding: "1rem",
									borderRadius: "8px",
									marginBottom: "5rem",
									boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
								}}
							>
								<Title level={4}>{question.question_name}</Title>
								<Text type="secondary">{question.question}</Text>
								<p style={{ color: "#8c8c8c", fontStyle: "italic" }}>
									Difficulty: {question.difficulty}
								</p>
							</div>
						))}
					</Col>

					<Col span={12}>
						<CodeEditor
							onRunCode={runCode}
							language={language}
							setLanguage={setLanguage}
							output={output}
						/>
					</Col>
				</Row>
			</Content>

			<Footer
				style={{
					textAlign: "center",
					backgroundColor: "#001529",
					color: "#fff",
				}}
			>
				SeconCode ©{new Date().getFullYear()} Created by KHAYAL
			</Footer>

			<Modal
				title="Error"
				open={isErrorModalVisible}
				onOk={handleModalClose}
				onCancel={handleModalClose}
				okText="Close"
			>
				<p>{errorMessage}</p>
			</Modal>
		</Layout>
	);
};

export default Questions;
