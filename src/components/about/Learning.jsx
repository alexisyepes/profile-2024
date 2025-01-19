import React from "react"
import { FaCheck } from "react-icons/fa6"

const learningContent = [
	{ skillClass: "p100", skillPercent: "100", skillName: "JAVA" },
	{ skillClass: "p100", skillPercent: "100", skillName: "SPRING BOOT" },
	{ skillClass: "p100", skillPercent: "100", skillName: "PYTHON" },
	{ skillClass: "p100", skillPercent: "100", skillName: "DJANGO" },
]

const Learning = () => {
	return (
		<>
			{learningContent.map((val, i) => (
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

export default Learning
