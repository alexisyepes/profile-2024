import React from "react"

const personalInfoContent = [
	{ meta: "first name", metaInfo: "Alex", hasColor: "" },
	{ meta: "last name", metaInfo: "Sanabria", hasColor: "" },
	{ meta: "Age", metaInfo: "40 Years old", hasColor: "" },
	{ meta: "Location", metaInfo: "Cambridge, ON", hasColor: "" },
	{ meta: "phone", metaInfo: "(905) 299-2366", hasColor: "" },
	{ meta: "Email", metaInfo: "alexisyep@gmail.com", hasColor: "" },
	{ meta: "languages", metaInfo: "English / Spanish", hasColor: "" },
]

const PersonalInfo = () => {
	return (
		<ul className="about-list list-unstyled open-sans-font">
			{personalInfoContent.map((val, i) => (
				<li key={i}>
					<span className="title">{val.meta}: </span>
					<span
						className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
					>
						{val.metaInfo}
					</span>
				</li>
			))}
		</ul>
	)
}

export default PersonalInfo
