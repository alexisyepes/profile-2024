import React from "react"

const experienceContent = [
	{
		year: "Dec 2021 - June 2024",
		position: "Lead Full-Stack Developer",
		compnayName: "Elite Digital",
		details: `Successfully led and contributed to multiple projects, overseeing their creation and ongoing maintenance.
Developed project plans, allocated resources, and ensured timely completion.
Collaborated with cross-functional teams to enhance project functionality and user experience.
Implemented effective problem-solving strategies to address project challenges and issues.`,
	},
	{
		year: "Jan 2021 - Dec 2021",
		position: "Full-Stack Developer",
		compnayName: "Isara Corp. (Through Aerotek / AcTalent)",
		details: `Contributed to the development of a product called Advance, used to scan, find, and remediate security vulnerabilities in systems and networks.`,
	},
	{
		year: "2016 - 2020",
		position: "Web Developer / Graphic Designer",
		compnayName: "Amazing Pet Grooming",
		details: `Designed and developed compelling logos, flyers, and additional marketing
materials. Designed a Full-stack-app to improve the way of handling clients and
employees schedule. Solved customer issues / IT related issues on a daily basis.`,
	},
]

const Experience = () => {
	return (
		<ul>
			{experienceContent.map((val, i) => (
				<li key={i}>
					<div className="icon">
						<i className="fa fa-briefcase"></i>
					</div>
					<span className="time open-sans-font text-uppercase">{val.year}</span>
					<h5 className="poppins-font text-uppercase">
						{val.position}
						<span className="place open-sans-font">{val.compnayName}</span>
					</h5>
					<p className="open-sans-font">{val.details}</p>
				</li>
			))}
		</ul>
	)
}

export default Experience
