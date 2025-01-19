import React from "react"
import { FaCheck } from "react-icons/fa6"

const skillsContent = [
	{ skillClass: "p100", skillPercent: "100", skillName: "JAVASCRIPT" },
	{ skillClass: "p100", skillPercent: "100", skillName: "JQUERY" },
	{ skillClass: "p100", skillPercent: "100", skillName: "NEXT JS" },
	{ skillClass: "p100", skillPercent: "100", skillName: "REACT JS" },
	{ skillClass: "p100", skillPercent: "100", skillName: "REACT NATIVE" },
	{ skillClass: "p100", skillPercent: "100", skillName: "TYPESCRIPT" },
	{ skillClass: "p100", skillPercent: "100", skillName: "CYPRESS TESTING" },
	{ skillClass: "p100", skillPercent: "100", skillName: "NODE JS" },
	{ skillClass: "p100", skillPercent: "100", skillName: "EXPRESS JS" },
	{ skillClass: "p100", skillPercent: "100", skillName: "GRAPHQL" },
	{ skillClass: "p100", skillPercent: "100", skillName: "MYSQL" },
	{ skillClass: "p100", skillPercent: "100", skillName: "POSTGRESS" },
	{ skillClass: "p100", skillPercent: "100", skillName: "MONGODB" },
	{ skillClass: "p100", skillPercent: "100", skillName: "SANITY" },
	{ skillClass: "p100", skillPercent: "100", skillName: "CSS/SASS" },
	{ skillClass: "p100", skillPercent: "100", skillName: "CSS MODULES" },
	{ skillClass: "p100", skillPercent: "100", skillName: "HTML" },
	{ skillClass: "p100", skillPercent: "100", skillName: "SHOPIFY / LIQUID" },
	{ skillClass: "p100", skillPercent: "100", skillName: "GOOGLE PLATFORM" },
	{ skillClass: "p100", skillPercent: "100", skillName: "WORDPRESS" },
	{ skillClass: "p100", skillPercent: "100", skillName: "AWS" },
	{ skillClass: "p100", skillPercent: "100", skillName: "DOCKER" },
	{ skillClass: "p100", skillPercent: "100", skillName: "GOOGLE CLOUD" },
	{ skillClass: "p100", skillPercent: "100", skillName: "HEROKU" },
	{ skillClass: "p100", skillPercent: "100", skillName: "VERCEL" },
	{ skillClass: "p100", skillPercent: "100", skillName: "RENDER" },
	{ skillClass: "p100", skillPercent: "100", skillName: "RETOOL" },
	{ skillClass: "p100", skillPercent: "100", skillName: "APACHE SOLR" },
	// { skillClass: "p10", skillPercent: "10", skillName: "PHP / LARAVEL" },
]

const Skills = () => {
	return (
		<>
			{skillsContent.map((val, i) => (
				<div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
					<div className={`c100 ${val.skillClass}`}>
						{/* <span>{val.skillPercent}%</span> */}
						<span>
							<FaCheck size={40} />
						</span>
						<div className="slice">
							<div className="bar"></div>
							<div className="fill"></div>
						</div>
					</div>
					<h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
						{val.skillName}
					</h6>
				</div>
			))}
		</>
	)
}

export default Skills
