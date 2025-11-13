import Image0 from "../../../public/assets/img/portfolio/project-00.png"
import Image0a from "../../../public/assets/img/portfolio/project-00_a.png"
import Image0b from "../../../public/assets/img/portfolio/project-00_b.png"
import Image1 from "../../../public/assets/img/portfolio/project-01.png"
import Image2 from "../../../public/assets/img/portfolio/project-02.png"
import Image2a from "../../../public/assets/img/portfolio/project-02_a.png"
import Image2b from "../../../public/assets/img/portfolio/project-02_b.png"
import Image2c from "../../../public/assets/img/portfolio/project-02_c.png"
import Image3 from "../../../public/assets/img/portfolio/project-03.png"
import Image4 from "../../../public/assets/img/portfolio/project-04.png"
import Image5 from "../../../public/assets/img/portfolio/project-05.png"
import Image6 from "../../../public/assets/img/portfolio/project-06.png"
import Image7 from "../../../public/assets/img/portfolio/project-07.png"
import Image8 from "../../../public/assets/img/portfolio/project-08.png"
import Image9 from "../../../public/assets/img/portfolio/project-09.png"

const PortfolioData = [
	{
		id: 0,
		type: "Saas Platform",
		image: Image0,
		image2: Image0a,
		image3: Image0b,
		tag: ["website"],
		delayAnimation: "100",
		modalDetails: [
			{
				project: "sass",
				client: "Personal Project",
				language: "Node, Express, MySql, NextJs, React, Tailwind-CSS",
				preview: "https://resume-builder-virid-xi.vercel.app/",
				link: "https://resume-builder-virid-xi.vercel.app/",
			},
		],
	},
	{
		id: 1,
		type: "Website project",
		image: Image1,
		tag: ["website"],
		delayAnimation: "100",
		modalDetails: [
			{
				project: "website",
				client: "Elite Digital",
				language: "NextJs, Tailwind-CSS, Wordpress",
				preview: "www.elitedigitalagency.com/",
				link: "https://elitedigitalagency.com/",
			},
		],
	},
	{
		id: 2,
		type: "full stack project",
		image: Image2,
		image2: Image2a,
		image3: Image2b,
		image4: Image2c,
		tag: ["full-stack", "e-commerce"],
		delayAnimation: "100",
		modalDetails: [
			{
				project: "Web Application",
				client: "Amazing Pet Groming",
				language: "NextJs, Tailwind-CSS, Html, Node, MySql, Stripe",
				preview: "www.amazingpetgrooming.ca",
				link: "https://www.amazingpetgrooming.ca",
			},
		],
	},
	{
		id: 3,
		type: "Full stack project",
		image: Image3,
		tag: [],
		delayAnimation: "200",
		modalDetails: [
			{
				project: "full-stack",
				client: "Isara Corporation",
				language: "React, Typescript, Css-Modules, Graphql, Postgress",
				preview: "www.isara.com",
				link: "https://www.isara.com/products/isara-advance-cryptographic-inventory-and-risk-assessment-tool.html",
			},
		],
	},
	{
		id: 4,
		type: "e-commerce",
		image: Image4,
		tag: ["e-commerce", "shopify"],
		delayAnimation: "0",
		modalDetails: [
			{
				project: "e-commerce",
				client: "Decorium (Elite Digital)",
				language: "Shopify, Liquid, Html, Css",
				preview: "www.decorium.com",
				link: "https://www.decorium.com",
			},
		],
	},
	{
		id: 5,
		type: "Npm Package",
		image: Image5,
		tag: ["npm pkg"],
		delayAnimation: "100",
		modalDetails: [
			{
				project: "Component Library",
				client: "Elite Digital",
				language: "HTML, CSS, ReactJS, Typescript",
				preview: "www.npmjs.com/package/component-lib-elite",
				link: "https://www.npmjs.com/package/component-lib-elite",
			},
		],
	},
	{
		id: 6,
		type: "cms website",
		image: Image6,
		tag: ["website", "full-stack"],
		delayAnimation: "200",
		modalDetails: [
			{
				project: "Website CMS",
				client: "Eastpenn (Elite Digital)",
				language: "NextJs, CSS, Javascript, Sanity",
				preview: "www.eastpenncanada.com/",
				link: "https://www.eastpenncanada.com/",
			},
		],
	},
	{
		id: 7,
		type: "website contest",
		image: Image7,
		tag: ["full-stack"],
		delayAnimation: "0",
		modalDetails: [
			{
				project: "Website Contest",
				client: "Campbells (Elite Digital)",
				language:
					"NextJs, HTML, Tailwind, Javascript, MongoDB, PassportJs, Google Auth",
				preview: "www.campbellsummersnacking.ca/",
				link: "https://campbellsummersnacking.ca/",
			},
		],
	},
	{
		id: 8,
		type: "website contest",
		image: Image8,
		tag: ["full-stack"],
		delayAnimation: "100",
		modalDetails: [
			{
				project: "Website Contest",
				client: "Excel (Elite Digital)",
				language:
					"NextJs, HTML, Tailwind, Javascript, MongoDB, PassportJs, Google Auth",
				preview: "www.excelcontest.ca",
				link: "https://excelcontest.ca",
			},
		],
	},
	{
		id: 9,
		type: "website contest",
		image: Image9,
		tag: ["full-stack"],
		delayAnimation: "200",
		modalDetails: [
			{
				project: "Website Contest",
				client: "IAMS (Elite Digital)",
				language:
					"NextJs, HTML, Tailwind, Javascript, MongoDB, PassportJs, Google Auth",
				preview: "www.iams.ca/en-ca/checkupchallenge",
				link: "https://www.iams.ca/en-ca/checkupchallenge",
			},
		],
	},
]

export default PortfolioData
