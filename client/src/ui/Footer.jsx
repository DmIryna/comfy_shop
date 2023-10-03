function Footer() {
  const todayYear = new Date().getFullYear()

  return (
    <footer className="bg-[#342931] text-white py-6 text-center ">
      <p>
        <span>&copy; </span>
        {todayYear} Comfy Corp.
      </p>
    </footer>
  )
}

export default Footer
