import {Outlet} from "react-router-dom"

const Container = ({children}) => {
  return (
    <>
      <div className="max-w-container mx-auto mt-10">{children}</div>
    </>
  )
}
export default Container
