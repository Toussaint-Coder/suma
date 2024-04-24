import freeTshirts from "../../assets/free.png";
import Button from "../Reusables/Button";
import GirlBonus from "../../assets/girl-bonus.png"
const AdCard = () => {
	return (
		<>
			<div className="w-full min-h-[400px] bg-main rounded-3xl p-10 relative overflow-hidden">
				<div className="min-w-[35rem] absolute min-h-[30rem] scale-150 transform bg-secondary top-0 -left-40 rotate-[70deg]" />
				<div className="grid grid-cols-2 justify-between relative z-10">
					<div className="flex flex-col gap-4">
						<div>
							<h1 className="text-5xl text-white font-bold">
								FREE BONUS <br /> T-SHIRTS
							</h1>
						</div>
						<div>
							<img src={freeTshirts} alt="free" />
						</div>
						<div>
							<Button className="px-8 py-4 bg-white text-[20px]">
								Learn More
							</Button>
						</div>
					</div>
                    <div>
                        <img src={GirlBonus} alt="girlBonus" className="transform scale-125 translate-y-8"/>
                    </div>
				</div>
			</div>
		</>
	);
};
export default AdCard;
