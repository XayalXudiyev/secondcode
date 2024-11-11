import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { GoDatabase } from "react-icons/go";
import { GrDatabase } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { RiCloudFill } from "react-icons/ri";
import { SiJenkins } from "react-icons/si";

export const ITItems = [
	// Data
	{
		key: "sub1",
		label: "Data",
		icon: <GoDatabase />,
		children: [
			{
				key: "sub1-1",
				label: "Data Analysis",
				children: [
					{
						key: "sub1-1-1",
						label: "Python",
					},
					{
						key: "sub1-1-2",
						label: "R",
					},
					{
						key: "sub1-1-3",
						label: "Julia",
					},
					{
						key: "sub1-1-4",
						label: "Scala",
					},
				],
			},

			{
				key: "sub1-2",
				label: "Data Visualization",
				children: [
					{
						key: "sub1-2-1",
						label: "Tableau",
					},
					{
						key: "sub1-2-2",
						label: "Power BI",
					},
					{
						key: "sub1-2-3",
						label: "QlikView",
					},
					{
						key: "sub1-2-4",
						label: "Looker",
					},
				],
			},
			{
				key: "sub1-3",
				label: "Big Data",
				children: [
					{
						key: "sub1-3-1",
						label: "Hadoop",
					},
					{
						key: "sub1-3-2",
						label: "Spark",
					},
					{
						key: "sub1-3-3",
						label: "Flink",
					},
					{
						key: "sub1-3-4",
						label: "Hive",
					},
				],
			},
			{
				key: "sub1-4",
				label: "Machine Learning",
				children: [
					{
						key: "sub1-4-1",
						label: "Scikit-learn",
					},
					{
						key: "sub1-4-2",
						label: "TensorFlow",
					},
					{
						key: "sub1-4-3",
						label: "Keras",
					},
					{
						key: "sub1-4-4",
						label: "PyTorch",
					},
				],
			},
			{
				key: "sub1-5",
				label: "Deep Learning",
				children: [
					{
						key: "sub1-5-1",
						label: "TensorFlow",
					},
					{
						key: "sub1-5-2",
						label: "Keras",
					},
					{
						key: "sub1-5-3",
						label: "PyTorch",
					},
					{
						key: "sub1-5-4",
						label: "Caffe",
					},
				],
			},
			{
				key: "sub1-6",
				label: "Artificial Intelligence",
				children: [
					{
						key: "sub1-6-1",
						label: "Machine Learning",
					},
					{
						key: "sub1-6-2",
						label: "Deep Learning",
					},
					{
						key: "sub1-6-3",
						label: "Natural Language Processing",
					},
					{
						key: "sub1-6-4",
						label: "Computer Vision",
					},
				],
			},
			{
				key: "sub1-7",
				label: "Business Intelligence",
				children: [
					{
						key: "sub1-7-1",
						label: "Tableau",
					},
					{
						key: "sub1-7-2",
						label: "Power BI",
					},
					{
						key: "sub1-7-3",
						label: "QlikView",
					},
					{
						key: "sub1-7-4",
						label: "Looker",
					},
				],
			},
			{
				key: "sub1-8",
				label: "Data Engineering",
				children: [
					{
						key: "sub1-8-1",
						label: "Apache Kafka",
					},
					{
						key: "sub1-8-2",
						label: "Apache NiFi",
					},
					{
						key: "sub1-8-3",
						label: "Apache Airflow",
					},
					{
						key: "sub1-8-4",
						label: "Talend",
					},
				],
			},

			{
				key: "sub1-9",
				label: "Data Governance",
				children: [
					{
						key: "sub1-9-1",
						label: "Collibra",
					},
					{
						key: "sub1-9-2",
						label: "Alation",
					},
					{
						key: "sub1-9-3",
						label: "Informatica",
					},
					{
						key: "sub1-9-4",
						label: "IBM InfoSphere",
					},
				],
			},
			{
				key: "sub1-10",
				label: "Data Science",
				children: [
					{
						key: "sub1-10-1",
						label: "Python",
					},
					{
						key: "sub1-10-2",
						label: "R",
					},
					{
						key: "sub1-10-3",
						label: "Julia",
					},
					{
						key: "sub1-10-4",
						label: "Scala",
					},
				],
			},
			{
				key: "sub1-11",
				label: "ETL",
				children: [
					{
						key: "sub1-11-1",
						label: "Talend",
					},
					{
						key: "sub1-11-2",
						label: "Informatica",
					},
					{
						key: "sub1-11-3",
						label: "IBM DataStage",
					},
					{
						key: "sub1-11-4",
						label: "SAP Data Services",
					},
				],
			},

			{
				key: "sub1-12",
				label: "Data Backup",
				children: [
					{
						key: "sub1-12-1",
						label: "AWS Backup",
					},
					{
						key: "sub1-12-2",
						label: "Veeam",
					},
					{
						key: "sub1-12-3",
						label: "Commvault",
					},
					{
						key: "sub1-12-4",
						label: "Veritas",
					},
				],
			},
		],
	},
	// Development
	{
		key: "sub2",
		icon: <RiCodeView />,
		label: "Development",
		children: [
			{ key: "sub-1", label: "JavaScript" },
			{ key: "sub-2", label: "TypeScript" },
			{ key: "sub-3", label: "Python" },
			{ key: "sub-4", label: "Java" },
			{ key: "sub-5", label: "PHP" },
			{ key: "sub-6", label: "C#" },
			{ key: "sub-7", label: "C++" },
			{ key: "sub-8", label: "Go" },
			{ key: "sub-9", label: "Kotlin" },
			{ key: "sub-10", label: "Swift" },
		],
	},
	// Cyber Security
	{
		key: "sub3",
		icon: <AiOutlineSafetyCertificate />,
		label: "Cyber Security",
		children: [
			{
				key: "sub3-1",
				label: "Ethical Hacking",
				children: [
					{
						key: "sub3-1-1",
						label: "Web Application",
					},
					{
						key: "sub3-1-2",
						label: "Network",
					},
					{
						key: "sub3-1-3",
						label: "Wireless",
					},
					{
						key: "sub3-1-4",
						label: "Social Engineering",
					},
				],
			},
			{
				key: "sub3-2",
				label: "Penetration Testing",
				children: [
					{
						key: "sub3-2-1",
						label: "Web Application",
					},
					{
						key: "sub3-2-2",
						label: "Network",
					},
					{
						key: "sub3-2-3",
						label: "Wireless",
					},
					{
						key: "sub3-2-4",
						label: "Social Engineering",
					},
				],
			},
			{
				key: "sub3-3",
				label: "Security Analysis",
				children: [
					{
						key: "sub3-3-1",
						label: "Web Application",
					},
					{
						key: "sub3-3-2",
						label: "Network",
					},
					{
						key: "sub3-3-3",
						label: "Wireless",
					},
					{
						key: "sub3-3-4",
						label: "Social Engineering",
					},
				],
			},
			{
				key: "sub3-4",
				label: "Incident Response",
				children: [
					{
						key: "sub3-4-1",
						label: "Web Application",
					},
					{
						key: "sub3-4-2",
						label: "Network",
					},
					{
						key: "sub3-4-3",
						label: "Wireless",
					},
					{
						key: "sub3-4-4",
						label: "Social Engineering",
					},
				],
			},
		],
	},
	// QA
	{
		key: "sub4",
		label: "QA",
		icon: <BiTestTube />,
		children: [
			{
				key: "sub4-1",
				label: "Manual Testing",
				children: [
					{
						key: "sub4-1-1",
						label: "Web Application",
					},
					{
						key: "sub4-1-2",
						label: "Mobile Application",
					},
					{
						key: "sub4-1-3",
						label: "Desktop Application",
					},
					{
						key: "sub4-1-4",
						label: "API Testing",
					},
				],
			},
			{
				key: "sub4-2",
				label: "Automation Testing",
				children: [
					{
						key: "sub4-2-1",
						label: "Web Application",
					},
					{
						key: "sub4-2-2",
						label: "Mobile Application",
					},
					{
						key: "sub4-2-3",
						label: "Desktop Application",
					},
					{
						key: "sub4-2-4",
						label: "API Testing",
					},
				],
			},
			{
				key: "sub4-3",
				label: "Performance Testing",
				children: [
					{
						key: "sub4-3-1",
						label: "Web Application",
					},
					{
						key: "sub4-3-2",
						label: "Mobile Application",
					},
					{
						key: "sub4-3-3",
						label: "Desktop Application",
					},
					{
						key: "sub4-3-4",
						label: "API Testing",
					},
				],
			},
			{
				key: "sub4-4",
				label: "Security Testing",
				children: [
					{
						key: "sub4-4-1",
						label: "Web Application",
					},
					{
						key: "sub4-4-2",
						label: "Mobile Application",
					},
					{
						key: "sub4-4-3",
						label: "Desktop Application",
					},
					{
						key: "sub4-4-4",
						label: "API Testing",
					},
				],
			},
		],
	},
	// Database
	{
		key: "sub5",
		label: "Database",
		icon: <GrDatabase />,
		children: [
			{
				key: "sub5-1",
				label: "SQL",
				children: [
					{
						key: "sub5-1-1",
						label: "MySQL",
					},
					{
						key: "sub5-1-2",
						label: "PostgreSQL",
					},
					{
						key: "sub5-1-3",
						label: "SQL Server",
					},
					{
						key: "sub5-1-4",
						label: "Oracle",
					},
				],
			},
			{
				key: "sub5-2",
				label: "NoSQL",
				children: [
					{
						key: "sub5-2-1",
						label: "MongoDB",
					},
					{
						key: "sub5-2-2",
						label: "Cassandra",
					},
					{
						key: "sub5-2-3",
						label: "Couchbase",
					},
					{
						key: "sub5-2-4",
						label: "DynamoDB",
					},
				],
			},
			{
				key: "sub5-3",
				label: "NewSQL",
				children: [
					{
						key: "sub5-3-1",
						label: "CockroachDB",
					},
					{
						key: "sub5-3-2",
						label: "Google Spanner",
					},
					{
						key: "sub5-3-3",
						label: "YugaByte DB",
					},
					{
						key: "sub5-3-4",
						label: "TiDB",
					},
				],
			},
		],
	},
	// Cloud
	{
		key: "sub6",
		label: "Cloud",
		icon: <RiCloudFill />,
		children: [
			{
				key: "sub6-1",
				label: "AWS",
				children: [
					{
						key: "sub6-1-1",
						label: "EC2",
					},
					{
						key: "sub6-1-2",
						label: "S3",
					},
					{
						key: "sub6-1-3",
						label: "RDS",
					},
					{
						key: "sub6-1-4",
						label: "Lambda",
					},
				],
			},
			{
				key: "sub6-2",
				label: "Azure",
				children: [
					{
						key: "sub6-2-1",
						label: "VM",
					},
					{
						key: "sub6-2-2",
						label: "Blob",
					},
					{
						key: "sub6-2-3",
						label: "SQL",
					},
					{
						key: "sub6-2-4",
						label: "Function",
					},
				],
			},
			{
				key: "sub6-3",
				label: "Google Cloud",
				children: [
					{
						key: "sub6-3-1",
						label: "Compute Engine",
					},
					{
						key: "sub6-3-2",
						label: "Storage",
					},
					{
						key: "sub6-3-3",
						label: "SQL",
					},
					{
						key: "sub6-3-4",
						label: "Cloud Function",
					},
				],
			},
		],
	},
	// DevOps
	{
		key: "sub7",
		label: "DevOps",
		icon: <SiJenkins />,
		children: [
			{
				key: "sub7-1",
				label: "CI/CD",
				children: [
					{
						key: "sub7-1-1",
						label: "Jenkins",
					},
					{
						key: "sub7-1-2",
						label: "GitLab",
					},
					{
						key: "sub7-1-3",
						label: "CircleCI",
					},
					{
						key: "sub7-1-4",
						label: "Travis CI",
					},
				],
			},
			{
				key: "sub7-2",
				label: "Containerization",
				children: [
					{
						key: "sub7-2-1",
						label: "Docker",
					},
					{
						key: "sub7-2-2",
						label: "Kubernetes",
					},
					{
						key: "sub7-2-3",
						label: "OpenShift",
					},
					{
						key: "sub7-2-4",
						label: "Rancher",
					},
				],
			},
			{
				key: "sub7-3",
				label: "Infrastructure as Code",
				children: [
					{
						key: "sub7-3-1",
						label: "Terraform",
					},
					{
						key: "sub7-3-2",
						label: "CloudFormation",
					},
					{
						key: "sub7-3-3",
						label: "Pulumi",
					},
					{
						key: "sub7-3-4",
						label: "Ansible",
					},
				],
			},
			{
				key: "sub7-4",
				label: "Monitoring",
				children: [
					{
						key: "sub7-4-1",
						label: "Prometheus",
					},
					{
						key: "sub7-4-2",
						label: "Grafana",
					},
					{
						key: "sub7-4-3",
						label: "Datadog",
					},
					{
						key: "sub7-4-4",
						label: "New Relic",
					},
				],
			},
		],
	},
	// UI/UX
	{
		key: "sub8",
		label: "UI/UX",
		icon: <MdDesignServices />,
		children: [
			{
				key: "sub8-1",
				label: "Design",
				children: [
					{
						key: "sub8-1-1",
						label: "Figma",
					},
					{
						key: "sub8-1-2",
						label: "Sketch",
					},
					{
						key: "sub8-1-3",
						label: "Adobe XD",
					},
					{
						key: "sub8-1-4",
						label: "InVision",
					},
				],
			},
			{
				key: "sub8-2",
				label: "Prototyping",
				children: [
					{
						key: "sub8-2-1",
						label: "Framer",
					},
					{
						key: "sub8-2-2",
						label: "ProtoPie",
					},
					{
						key: "sub8-2-3",
						label: "Marvel",
					},
					{
						key: "sub8-2-4",
						label: "Principle",
					},
				],
			},
			{
				key: "sub8-3",
				label: "User Testing",
				children: [
					{
						key: "sub8-3-1",
						label: "UserZoom",
					},
					{
						key: "sub8-3-2",
						label: "UserTesting",
					},
					{
						key: "sub8-3-3",
						label: "Lookback",
					},
					{
						key: "sub8-3-4",
						label: "Validately",
					},
				],
			},
			{
				key: "sub8-4",
				label: "Accessibility",
				children: [
					{
						key: "sub8-4-1",
						label: "WAVE",
					},
					{
						key: "sub8-4-2",
						label: "Axe",
					},
					{
						key: "sub8-4-3",
						label: "Siteimprove",
					},
					{
						key: "sub8-4-4",
						label: "Lighthouse",
					},
				],
			},
		],
	},
];
