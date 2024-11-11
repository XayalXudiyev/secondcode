import { Button, Dropdown, Menu, Row, Typography } from "antd";
import React from "react";
import { LANGUAGE_VERSIONS } from "./constans";
const { Text } = Typography;

const LanguageSelector = ({ language, onSelect }) => {
	const languages = Object.entries(LANGUAGE_VERSIONS);

	const menu = (
		<Menu>
			{languages.map(([lang, version]) => (
				<Menu.Item key={lang} onClick={() => onSelect(lang)}>
					<div className="flex justify-between">
						<Text>{lang}</Text>
						&nbsp;
						<Text type="secondary">{version}</Text>
					</div>
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<Row>
			<Dropdown overlay={menu} trigger={["click"]}>
				<Button className="bg-cyan-950 p-4 m-4">
					<Text className="my-3">{language}</Text>
				</Button>
			</Dropdown>
		</Row>
	);
};

export default LanguageSelector;
