import React from "react"

const skillsContent = [
	{ skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
	{ skillClass: "p75", skillPercent: "75", skillName: "JQUERY" },
	{ skillClass: "p92", skillPercent: "92", skillName: "NEXT JS" },
	{ skillClass: "p92", skillPercent: "92", skillName: "REACT JS" },
	{ skillClass: "p75", skillPercent: "75", skillName: "REACT NATIVE" },
	{ skillClass: "p70", skillPercent: "70", skillName: "TYPESCRIPT" },
	{ skillClass: "p80", skillPercent: "80", skillName: "CYPRESS TESTING" },
	{ skillClass: "p85", skillPercent: "85", skillName: "NODE JS" },
	{ skillClass: "p85", skillPercent: "85", skillName: "EXPRESS JS" },
	{ skillClass: "p75", skillPercent: "75", skillName: "GRAPHQL" },
	{ skillClass: "p85", skillPercent: "85", skillName: "MYSQL" },
	{ skillClass: "p85", skillPercent: "85", skillName: "POSTGRESS" },
	{ skillClass: "p90", skillPercent: "90", skillName: "MONGODB" },
	{ skillClass: "p80", skillPercent: "80", skillName: "SANITY" },
	{ skillClass: "p80", skillPercent: "80", skillName: "CSS/SASS" },
	{ skillClass: "p80", skillPercent: "80", skillName: "CSS MODULES" },
	{ skillClass: "p90", skillPercent: "90", skillName: "HTML" },
	{ skillClass: "p85", skillPercent: "85", skillName: "SHOPIFY / LIQUID" },
	{ skillClass: "p90", skillPercent: "90", skillName: "GOOGLE PLATFORM" },
	{ skillClass: "p50", skillPercent: "50", skillName: "WORDPRESS" },
	{ skillClass: "p10", skillPercent: "10", skillName: "PHP / LARAVEL" },
]

const Skills = () => {
	return (
		<>
			{skillsContent.map((val, i) => (
				<div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
					<div className={`c100 ${val.skillClass}`}>
						<span>{val.skillPercent}%</span>
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
