import React from "react";
import { FaCheck } from "react-icons/fa";

const skillsContent = [
	{ skillName: "JAVASCRIPT" },
	{ skillName: "JQUERY" },
	{ skillName: "NEXT JS" },
	{ skillName: "REACT JS" },
	{ skillName: "REACT NATIVE" },
	{ skillName: "TYPESCRIPT" },
	{ skillName: "CYPRESS TESTING" },
	{ skillName: "NODE JS" },
	{ skillName: "EXPRESS JS" },
	{ skillName: "GRAPHQL" },
	{ skillName: "MYSQL" },
	{ skillName: "POSTGRESS" },
	{ skillName: "MONGODB" },
	{ skillName: "SANITY" },
	{ skillName: "CSS/SASS" },
	{ skillName: "CSS MODULES" },
	{ skillName: "HTML" },
	{ skillName: "SHOPIFY / LIQUID" },
	{ skillName: "GOOGLE PLATFORM" },
	{ skillName: "WORDPRESS" },
	{ skillName: "AWS" },
	{ skillName: "DOCKER" },
	{ skillName: "GOOGLE CLOUD" },
	{ skillName: "HEROKU" },
	{ skillName: "VERCEL" },
	{ skillName: "RENDER" },
	{ skillName: "RETOOL" },
	{ skillName: "APACHE SOLR" },
];

const Skills = () => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
			{skillsContent.map((val, i) => (
				<div key={i} className="flex flex-col items-center">
					{/* Círculo con Tailwind puro */}
					<div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto">
						{/* Círculo de fondo */}
						<div className="absolute inset-0 rounded-full border-[6px] md:border-8 border-gray-200"></div>

						{/* Círculo de progreso (completo) */}
						<div className="absolute inset-0 rounded-full border-[6px] md:border-8 border-cyan-600"></div>

						{/* Ícono centrado */}
						<div className="absolute inset-0 flex items-center justify-center">
							<FaCheck className="text-green-600 text-2xl md:text-3xl" />
						</div>
					</div>

					{/* Nombre de la habilidad */}
					<h6 className="pb-4 pb-sm-5 my-3 mb-sm-0 text-start text-sm-center ft-wt-600">
						{val.skillName}
					</h6>
				</div>
			))}
		</div>
	);
};

export default Skills;
