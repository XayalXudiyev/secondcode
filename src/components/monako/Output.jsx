import { Button, Row } from "antd";
import React, { useState } from "react";
import { executeCode } from "../../src/api";

const Output = ({ editorRef, language }) => {
	const [output, setOutput] = useState(null);
	const [error, setError] = useState(null); // Hata durumu için bir state ekleyin

	const runCode = async () => {
		console.log("run code");
		const code = editorRef.current.getValue();
		if (!code) return;
		try {
			const result = await executeCode(code, language); // await ile sonucu bekleyin
			setOutput(result.output); // Çıktıyı güncelleyin
			setError(null); // Hata varsa sıfırlayın
		} catch (error) {
			setError(error.message); // Hata mesajını kaydedin
			setOutput(null); // Hata durumunda çıktıyı sıfırlayın
		}
	};

	return (
		<div className="w-1/2 bg-slate-800" style={{ backgroundColor: "#000" }}>
			<Button onClick={runCode}>{output ? "Run Again" : "Run"}</Button>
			<Row
				style={{
					border: "1px solid #fff",
					borderRadius: "5px",
					color: "white",
					padding: "1rem",
					fontSize: "1.5rem",
					textAlign: "center",
					height: "75vh",
					width: "100%",
				}}
			>
				{error ? (
					<div style={{ color: "red" }}>{error}</div> // Hata varsa gösterin
				) : (
					<div>{output ? output : "Çıktı burada görünecek"}</div> // Çıktıyı gösterin
				)}
			</Row>
		</div>
	);
};

export default Output;
