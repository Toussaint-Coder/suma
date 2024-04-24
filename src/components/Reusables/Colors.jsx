const Color = ({ className }) => {
	return (
		<div className="flex justify-between">
			<div className="bg-[#D5BFC0] px-4 rounded-full text-xs mt-1">colors</div>
			<div className="flex gap-2">
				<div className="bg-[#ffffff] first:border first:border-black w-3 h-3 rounded-full" />
				<div className="bg-[#6B1D20] w-3 h-3 rounded-full" />
				<div className="bg-[#FFE713] w-3 h-3 rounded-full" />
				<div className="bg-[#A69F95] w-3 h-3 rounded-full" />
			</div>
		</div>
	);
};
export default Color;
