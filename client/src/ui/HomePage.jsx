import Button from "./Button"
import Featured from "../features/products/Featured"

function HomePage() {
  return (
    <>
      <main className="h-[60vh] bg-[url('/images/main_picture.jpg')] bg-center bg-cover bg-no-repeat text-white flex flex-col justify-center ">
        <h1 className="logo font-semibold text-4xl italic py-3 px-5 md:text-5xl  md:py-4 md:px-28">
          All Comfy, all the time
        </h1>
        <p className="py-3 px-5 text-base md:py-4 md:px-28 md:text-lg drop-shadow-2xl">
          Embrace your choice - we do
        </p>
        <div className="py-3 px-5 md:my-6 md:mx-24">
          <Button type="secondary" to="/products">
            Show now
          </Button>
        </div>
      </main>

      <Featured />
    </>
  )
}

export default HomePage
