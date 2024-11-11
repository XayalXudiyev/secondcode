// CodeEditor.jsx
import Editor from "@monaco-editor/react";
import { Badge, Button, Dropdown, Menu, Row } from "antd";
import React, { useRef, useState } from "react";
import { VscRunAll } from "react-icons/vsc";

const CodeEditor = ({ onRunCode, language, setLanguage, output }) => {
	const editorRef = useRef(null);
	const [value, setValue] = useState();

	const onMount = (editor) => {
		editorRef.current = editor;
		editor.focus();
	};

	const handleLanguageChange = (e) => {
		setLanguage(e.key);
	};

	const languageMenu = (
		<Menu onClick={handleLanguageChange}>
			<Menu.Item key="javascript">JavaScript</Menu.Item>
			<Menu.Item key="python">Python</Menu.Item>
			<Menu.Item key="ruby">Ruby</Menu.Item>
		</Menu>
	);

	const handleRunClick = () => {
		if (onRunCode && editorRef.current) {
			const code = editorRef.current.getValue();
			onRunCode(code);
		}
	};

	return (
		<Row style={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}>
			<Row
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					backgroundColor: "#1f1f1f",
					padding: "0.8rem",
					alignItems: "center",
				}}
			>
				<Dropdown overlay={languageMenu} trigger={["click"]}>
					<Button
						style={{
							textTransform: "capitalize",
							color: "#fff",
							backgroundColor: "#1f1f1f",
							borderRadius: "6px",
						}}
						variant="dashed"
					>
						{language}
					</Button>
				</Dropdown>
				<Button
					style={{
						backgroundColor: "#4caf50",
						color: "#fff",
						border: "none",
						fontWeight: "bold",
						display: "flex",
						alignItems: "center",
					}}
					onClick={handleRunClick}
				>
					Run
					<VscRunAll style={{ marginLeft: "0.5rem" }} />
				</Button>
			</Row>
			<Editor
				height="70vh"
				width="100%"
				language={language.toLowerCase()}
				value={value}
				onMount={onMount}
				theme="vs-dark"
				onChange={(newValue) => setValue(newValue)}
				options={{
					fontSize: 14,
					minimap: { enabled: false },
					scrollBeyondLastLine: false,
				}}
				style={{ borderRadius: "0 0 8px 8px" }}
			/>
			<pre
				style={{
					width: "100%",
					backgroundColor: "#1f1f1f",
					color: "#fff",
					paddingLeft: "2rem",
					paddingTop: "0.5rem",
					paddingBottom: "0.5rem",
					borderRadius: "0 0 8px 8px",
				}}
			>
				{output || "Output will be shown here..."}
			</pre>
		</Row>
	);
};

export default CodeEditor;
