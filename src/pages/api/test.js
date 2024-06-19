import axios from "axios"

export default async function (req, res) {
	try {
		const data = "Message from backend call"
		res.json({ data })
	} catch (error) {
		console.log("Server Error: ", error)
		res.status(500).json({ error: "Server error" })
	}
}
