import Nav from "./Nav";

function Navbar() {
    return (
        <div className=" text-white h-screen w-screen bg-cover bg-no-repeat bg-center sm:bg-center md:bg-[center_top] lg:bg-center"
            style={{
                backgroundImage: "url('/MysorePalace.jpg')",
            }}>
            
            <div className=" flex flex-col items-center pt-20">
               <h1 className="text-white  text-2xl sm:text-4xl md:text-5xl lg:text-6xl pb-8 font-semibold font-serif uppercase tracking-wide  "> Welcome To Mysore </h1> 
               <p className="text-gray-400 text-xl sm:text-2xl font-serif"> The City of Palaces</p>
            </div>

            


        </div>
    )
}
export default Navbar;