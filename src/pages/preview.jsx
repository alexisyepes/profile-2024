import Image from "next/image";
import Link from "next/link";
import dark from "../../public/assets/img/intro/dark.jpg";
import rtl from "../../public/assets/img/intro/rtl.jpg";
import SEO from "../components/Seo";
import HomeDark from "./home-dark";

const preview = () => {
	const previewDemo = [
		{
			img: dark,
			title: "Dark & Light (Professional)",
			routerPath: "/home-dark",
			delayAnimation: "50",
		},
		{
			img: rtl,
			title: "Dark & Light (RTL Version)",
			routerPath: "/home-rtl",
			delayAnimation: "",
		},
	];

	return (
		<>
			<SEO pageTitle={"Preview"} />
			<HomeDark />
		</>
	);
};

export default preview;
