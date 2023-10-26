import { useState } from "react";

import "./App.css";
import { motion } from "framer-motion";
function App() {
	const [rated, setrated] = useState(null);
	const [submit, setSubmit] = useState(false);

	var Ratingarray = Array.from(
		{
			length: 5,
		},
		(_, i) => i + 1
	);
	function Rate(item) {
		setrated(item);
	}

	return (
		<div className="relative flex min-h-screen flex-col place-items-center content-center items-center justify-center overflow-hidden bg-Very_Dark_Blue py-6 sm:py-12">
			<motion.div
				className="flex h-[400px] w-[400px] flex-col items-center justify-center gap-4 rounded-3xl bg-Dark_Blue p-8 "
				variants={container}
				initial="hidden"
				animate="visible">
				{rated !== null && submit ? (
					<RadingThanku
						rated={rated}
						item={Ratingarray}
					/>
				) : (
					<RatingAction
						item={Ratingarray}
						rated={rated}
						rate={Rate}
						submit={submit}
						setsubmit={setSubmit}
					/>
				)}
			</motion.div>
			<motion.div
				class="absolute bottom-10"
				variants={container}
				initial="hidden"
				animate="visible">
				
				<h1 class="font-mono from-neutral-300 text-center text-White">
					Challenge by
					<a
						href="https://www.frontendmentor.io"
						class="font-bold font-mono text-lg align-middle  text-transparent bg-clip-text bg-gradient-to-br text-primary  ">
						Frontend Mentor
					</a>{" "}
					Coded by{" "}
					<a
						href="https://imharsh.framer.website/"
						class="font-bold font-mono text-lg align-middle  bg-clip-text bg-gradient-to-br text-primary  ">
						Harsh Choudhary{" "}
					</a>
				</h1>
			</motion.div>
		</div>
	);
}
// const Rate = (item) => {
//   // setrated(item);
//   console.log("clicked");
// };

const RatingAction = ({
	item,
	index,
	rated,
	rate,
	setsubmit,
	submit,
}) => {
	return (
		<>
			<motion.div
				className="flex h-1/4 w-full items-center justify-start"
				key={"model1"}
				variants={item2}>
				<div className="flex p-3 h-12 w-12 overflow-hidden rounded-full bg-[#8A909936]">
					<img
						src="images/icon-star.svg"
						alt=""
					/>
				</div>
			</motion.div>
			<motion.div
				className="flex h-1/2 w-full flex-col gap-4 justify-center    "
				key={"model1"}
				variants={item2}>
				<h2 className="text-2xl font-bold text-White font-Overpass leading-none">
					How did we do ?
				</h2>
				<p className="text-sm font-normal text-Medium_Grey font-Overpass">
					Please let us know how we did with your
					support request. All feedback is
					appreciated to help us improve our
					offering!
				</p>
			</motion.div>
			<div className="flex h-1/2 w-full flex-col gap-6">
				<motion.div
					className="flex w-full justify-center gap-6 items-start container "
					variants={container}
					initial="hidden"
					animate="visible">
					{item.map((e, index) => {
						return (
							<RatingBtn
								key={index}
								item={e}
								rated={rated}
								rate={rate}
							/>
						);
					})}
				</motion.div>
				<motion.div
					key={"model1"}
					variants={item4}
					className="h-12 w-full rounded-full bg-primary cursor-pointer  transition duration-500 hover:bg-White "
					onClick={() => setsubmit(!submit)}>
					<h6 className="flex h-full w-full items-center justify-center text-center align-middle font-semibold uppercase tracking-widest text-White hover:text-primary cursor-pointer font-Overpass leading-none transition duration-500">
						submit
					</h6>
				</motion.div>
			</div>
		</>
	);
};
const RatingBtn = ({
	item,
	index,
	rated,
	rate,
}) => {
	// console.log(item,rated)
	return (
		<motion.div
			key={index}
			variants={item2}
			className={` item flex justify-center items-center h-12 w-12 overflow-hidden rounded-full cursor-pointer transition duration-500 hover:bg-primary ${
				rated === item
					? "bg-Light_Grey "
					: " bg-[#8A909936]"
			} `}
			onClick={() => rate(item)}>
			<h6 className=" font-Overpass align-middle mt-1 text-center hover:opacity-100 text-White opacity-60 leading-none transition-opacity duration-500 ">
				{item}
			</h6>
		</motion.div>
	);
};
const RadingThanku = ({ rated, item }) => {
	return (
		<>
			<motion.div
				key={5}
				variants={item3}
				className="flex h-1/2 w-full items-center justify-center">
				<div className="flex items-center justify-center p-3 h-full w-full overflow-hidden ">
					<img
						src="images/illustration-thank-you.svg"
						alt=""
					/>
				</div>
			</motion.div>
			<motion.div
				key={6}
				variants={item3}
				className="flex h-1/4 w-full items-center justify-center">
				<div className="flex justify-center items-center  h-8 w-2/3 p-3 overflow-hidden rounded-full bg-[#8A909946]">
					<h2 className="w-full flex justify-center items-center align-middle text-sm font-normal text-primary font-Overpass leading-none mt-1 tracking-wider">
						You selected {rated} out of{" "}
						{item.length}
					</h2>
				</div>
			</motion.div>
			<motion.div
				key={7}
				variants={item3}
				className="flex h-1/2 w-full flex-col gap-2">
				<h2 className="text-center text-2xl font-bold text-White font-Overpass leading-none">
					Thank you !
				</h2>
				<p className=" text-center text-sm font-normal text-Medium_Grey font-Overpass ">
					We appreciate you taking the time to
					give a rating. if you ever need more
					support, don't hesitate to get in touch!{" "}
				</p>
			</motion.div>
		</>
	);
};

const container = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};
const item2 = {
	hidden: { x: -50, scale: 0 },
	visible: {
		x: 0,
		scale: 1,
	},
};
const item3 = {
	hidden: { x: 50, scale: 0 },
	visible: {
		x: 0,
		scale: 1,
	},
};
const item4 = {
	hidden: { y: 50, scale: 0 },
	visible: {
		y: 0,
		scale: 1,
	},
};
export default App;
