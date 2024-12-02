// import { useEffect } from "react"
import { useEffect, useState } from "react"
import { useCoffee } from "../hook/use_coffee"
import Filters from "./Filters"

export default function App() {
  const { coffees } = useCoffee()
  const [coffeeUsed, setCoffeUsed] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

  const handleFilter = () => {
    const filteredCoffees = coffeeUsed.filter(coffee => coffee.available === true)
    setCoffeUsed(filteredCoffees)
    setIsFiltered(true)
  }

  const handleUnfilter = () => {
    setCoffeUsed(coffees)
    setIsFiltered(false)
  }

  useEffect(() => {
    setCoffeUsed(coffees)
  }, [coffees])

  //  bg-graphiteGray  grid xl:w-[80%] xl:grid-cols-3 gap-8 p-[120px] mx-auto my-[140px]
  return (
    <>
      <main className="bg-graphiteGray font-dmsans rounded-xl mx-auto my-[140px] grid grid-cols-1 gap-12 py-[120px] px-[40px] w-[70%] xl:w-[85%] lg:grid-cols-2 xl:grid-cols-3 xl:p-[120px] xl:gap-12">
        <header className="col-start-1 col-span-1 lg:col-start-1 lg:col-span-2  xl:col-start-1 xl:col-span-3 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-creamyWhite pb-5">Our Collection</h1>
          <p className="w-[55%] font-medium text-slateGray text-center text-[16px]">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className="pt-6 flex gap-4">
            <button className={`text-creamyWhite rounded-md px-3 py-[6px] ${isFiltered ? '' : 'bg-slateGray'}`} onClick={handleUnfilter} >All Products</button>
            <button className={`text-creamyWhite rounded-md px-3 py-[6px] ${!isFiltered ? '' : 'bg-slateGray'}`} onClick={handleFilter}>Available Now</button>
          </div>
        </header>
        <Filters coffees={coffeeUsed} />
      </main>
    </>
  )
}
