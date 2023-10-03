import { Outlet, useNavigation } from "react-router-dom"
import PageNav from "./PageNav"
import Footer from "./Footer"
import Spinner from "./Spinner"

function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <Spinner />}

      <header className="bg-[#342931] text-white sticky top-0 z-10">
        <PageNav />
      </header>
      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
