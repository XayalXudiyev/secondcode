import axios from "axios";
import { LANGUAGE_VERSIONS } from "../components/monako/constans";

const API = axios.create({ baseURL: "https://emkc.org/api/v2/piston" });

export const executeCode = async (code, language) => {
	try {
		const response = await API.post("/execute", {
			language: language.toLowerCase(),
			version: LANGUAGE_VERSIONS[language],
			files: [
				{
					content: code,
				},
			],
		});
		return response.data; // Çıktıyı döndür
	} catch (error) {
		console.error(
			"Error executing code:",
			error.response ? error.response.data : error.message,
		);
		throw error; // Hata mesajını üst katmana iletin
	}
};
