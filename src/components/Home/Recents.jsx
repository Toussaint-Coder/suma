import data from "../data/Recents.json";
import Button from "../Reusables/Button";
import Color from "../Reusables/Colors";
const Recents = () => {
	console.log(data);
	return (
		<div>
			<div className="mb-4">
				<h1 className="font-bold text-lg">Recent Products</h1>
			</div>
			<div className="grid grid-cols-4 gap-8 items-baseline">
				{data.map((tShirt) => (
					<div className="flex flex-col gap-4  ">
						<div className="bg-[#EFEFEF] overflow-hidden rounded-lg max-h-48">
							<img src={tShirt.img} alt={tShirt.name} />
						</div>
						<div>
							<h1 className="font-bold text-base">{tShirt.name}</h1>
						</div>
						<div className="flex gap-8">
							<p className="text-black text-sm">${tShirt.soldPrice}.00</p>
							<p className="text-red-500 text-sm line-through">${tShirt.initialPrice}.00</p>
						</div>
                        <div>
                            <Color/>
                        </div>
                        <div>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Recents;
