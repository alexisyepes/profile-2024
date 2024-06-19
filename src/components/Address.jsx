import React from "react"

const Address = () => {
	return (
		<>
			<p className="open-sans-font custom-span-contact position-relative">
				<i className="fa fa-map position-absolute"></i>
				<span className="d-block">Location</span>Cambridge, ON, Canada.
			</p>
			{/* End .custom-span-contact */}

			<p className="open-sans-font custom-span-contact position-relative">
				<i className="fa fa-envelope-open position-absolute"></i>
				<span className="d-block">E-mail</span>{" "}
				<a href="mailto:steve@mail.com">alexisyep@gmail.com</a>
			</p>
			{/* End .custom-span-contact */}

			<p className="open-sans-font custom-span-contact position-relative">
				<i className="fa fa-phone-square position-absolute"></i>
				<span className="d-block">Phone</span>{" "}
				<a href="Tel: +216 21 184 010">(905) 299-2366</a>
			</p>
			{/* End .custom-span-contact */}
		</>
	)
}

export default Address
