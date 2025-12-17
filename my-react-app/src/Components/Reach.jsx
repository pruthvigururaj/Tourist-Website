function Reach()
{
    return(
        <section className="w-full bg-white py-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
    
    {/* LEFT: DESCRIPTION */}
    <div className="lg:w-1/2 space-y-6">
      <h2 className="text-4xl font-serif font-semibold">
        How to Visit Mysore
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Mysore is well connected by road, rail, and air. The city lies about
        140 km from Bengaluru and can be easily reached via multiple transport
        options. Known for its royal heritage, Mysore offers a smooth and
        pleasant travel experience for tourists.
      </p>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-lg">✈️ By Air</h4>
          <p className="text-gray-600">
            The nearest airport is Mysore Airport with limited connectivity.
            Bengaluru International Airport is the major hub, located about
            170 km away.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">🚆 By Train</h4>
          <p className="text-gray-600">
            Mysore Junction is well connected with major Indian cities
            including Bengaluru, Chennai, and Hyderabad.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">🚌 By Road</h4>
          <p className="text-gray-600">
            Frequent KSRTC buses, taxis, and self-drive options are available
            from Bengaluru and nearby cities.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT: MAP */}
    <div className="lg:w-1/2 w-full h-[420px] rounded-3xl overflow-hidden shadow-lg">
      <iframe
        title="Mysore Map"
        src="https://www.google.com/maps?q=Mysore,Karnataka&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>
</section>

    )
}
export default Reach;