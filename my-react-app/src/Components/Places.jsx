import { Link } from "react-router-dom";
import PlacesList from "../PlacesList";

function Places() {
  return (
    <div>
      <div className="w-screen flex justify-center text-2xl px-6 sm:px-10 md:px-20 lg:px-36 font-medium font-serif">
        <h1 className="text-center">
          ATTRACTIONS & PLACES TO VISIT AND EXPLORE IN MYSURU
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-10 px-6 md:px-20 py-20 bg-gray-50">
        {PlacesList.map((item) => (
          <div
            key={item.id}
       
            className="group"
         >
            <div className="relative w-[90%] sm:w-[320px] h-[420px] rounded-3xl overflow-hidden
              transform transition-all duration-500 hover:-translate-y-4 hover:scale-[1.04] hover:shadow-2xl">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white transition-all duration-500 group-hover:-translate-y-6">
                <h2 className="text-2xl font-serif font-semibold">
                  {item.name}
                </h2>
                <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition">
                  {item.shortDescription}
                </p>
                <Link to={`/places/${item.slug}`}>
  <span
    className="
      inline-block mt-4
      text-xl uppercase tracking-widest
      text-orange-400
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-500
      hover:text-orange-300
    "
  >
    Explore →
  </span>
</Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
