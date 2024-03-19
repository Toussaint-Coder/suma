import React from "react"

const Button = ({children, className}) => {
  return (
    <>
      <button
        className={`${className} px-4 bg-none border border-secondary py-2 text-xs rounded-full`}
      >
        {children}
      </button>
    </>
  )
}
export default Button
