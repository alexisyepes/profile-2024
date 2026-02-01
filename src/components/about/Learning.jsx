import React from "react";
import { FaCheck } from "react-icons/fa";

const learningContent = [
	{ skillName: "JAVA" },
	{ skillName: "SPRING BOOT" },
	{ skillName: "PYTHON" },
	{ skillName: "DJANGO" },
];

const Learning = () => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
			{learningContent.map((val, i) => (
				<div key={i} className="flex flex-col items-center">
					{/* Círculo - Mismo diseño que Skills */}
					<div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto">
						<div className="absolute inset-0 rounded-full border-[6px] md:border-8 border-gray-200"></div>
						<div className="absolute inset-0 rounded-full border-[6px] md:border-8 border-cyan-600"></div>
						<div className="absolute inset-0 flex items-center justify-center">
							<FaCheck className="text-green-600 text-2xl md:text-3xl" />
						</div>
					</div>

					{/* Texto - Mismo estilo que Skills */}
					<h6 className="pb-4 pb-sm-5 my-3 mb-sm-0 text-start text-sm-center ft-wt-600">
						{val.skillName}
					</h6>
				</div>
			))}
		</div>
	);
};

export default Learning;
