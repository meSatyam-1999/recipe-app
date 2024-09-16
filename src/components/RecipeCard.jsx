import { Heart, HeartPulse, Soup } from "lucide-react"


const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden relative p-3">
        <a href="#" className="relative h-32">
            <img className="rounded-md w-full h-full object-cover cursor-pointer" src="/first.jpg" alt="first card" />
            <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
                <Soup size={16} />4 servings
            </div>

            <div className="absolute top-1 right-2 bg-white rounded-full cursor-pointer p-1">
                <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
            </div>
        </a>

        <div className="flex mt-1">
            <p className="font-bold tracking-wide">Chicken Kabab</p>
        </div>
        <p className="my-2">Hyderabadi Kabab</p>
        <div className="flex mt-auto gap-2">
            <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                <HeartPulse size={16} />
                <span className="text-sm tracking-tighter font-semibold">Oil free</span>
            </div>
           
            <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                <HeartPulse size={16} />
                <span className="text-sm tracking-tighter font-semibold">Best Kabab</span>
            </div>

        </div>

    </div>
  )
}

export default RecipeCard