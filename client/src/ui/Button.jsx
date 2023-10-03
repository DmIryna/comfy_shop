import { Link } from "react-router-dom"

function Button({ children, type, to, onClick }) {
  const styles = {
    primary:
      "bg-orange-400 p-2 uppercase border-[1px] border-solid border-orange-400 rounded text-white hover:text-orange-400 hover:bg-white duration-500 flex gap-2 text-xs sm:text-base",
    secondary:
      "bg-transparent rounded p-2 border-solid border-2 border-gray-300 hover:bg-[#3429316e] duration-500 text-xs sm:text-base",
    back: "px-6 py-6 border-none w-40 rounded hover:border-orange-400 duration-500 hover:text-orange-500 text-xs sm:text-base",
    cart: "flex items-center gap-3 text-white absolute bottom-[120px] right-0 bg-orange-400 p-2 border-solid border-2 border-orange-400 rounded hover:bg-white hover:text-orange-500 duration-500 text-xs sm:text-base",
  }

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    )

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    )

  return <button className={styles[type]}>{children}</button>
}

export default Button
