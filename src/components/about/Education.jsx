import React from "react"

const educationContent = [
	{
		year: "2018 - 2019",
		degree: "Full-Stack Certificate",
		institute: "UNIVERSITY OF TORONTO",
		details: `An intensive coding bootcamp,
dedicated to designing and building
full stack web applications`,
	},
	{
		year: "2002 - 2003",
		degree: "COMPUTER PROGRAMMING CERTIFICATE",
		institute: "COMPU INGENIEROS, Bogota, Colombia",
		details: `2 year program dedicated to
computer programming
fundamentals using Visual Basic, as
well as computer maintenance, and
graphic design using
Photoshop / Illustrator`,
	},
]

const Education = () => {
	return (
		<ul>
			{educationContent.map((val, i) => (
				<li key={i}>
					<div className="icon">
						<i className="fa fa-briefcase"></i>
					</div>
					<span className="time open-sans-font text-uppercase">{val.year}</span>
					<h5 className="poppins-font text-uppercase">
						{val.degree}
						<span className="place open-sans-font">{val.institute}</span>
					</h5>
					<p className="open-sans-font">{val.details}</p>
				</li>
			))}
		</ul>
	)
}

export default Education
