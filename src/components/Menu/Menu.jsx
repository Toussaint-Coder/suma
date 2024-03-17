import {Outlet} from "react-router-dom"
import Logo from "../../assets/logo.svg"
import CartIcon from "../../assets/cart.svg"
import ProfleIcon from "../../assets/profile.svg"
const Menu = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <img src={Logo} alt="logo-img" className="w-8" />
        </div>
        <div>
          <ul className="flex gap-14">
            <li className="text-xs">Home</li>
            <li className="text-xs">Categories</li>
            <li className="text-xs">Favorites</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="relative">
              <div className="rounded-full px-[5px]  text-[0.7rem] border border-secondary absolute top-0 right-0 bg-white">
                8
              </div>
              <img src={CartIcon} alt="CartIcon" className="Icons" />
            </li>
            <li>
              <img src={ProfleIcon} alt="CartIcon" className="Icons" />
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Menu
