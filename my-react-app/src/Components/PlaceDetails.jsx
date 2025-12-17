import { useParams } from "react-router-dom";
import PlacesList from "../PlacesList";

const PlaceDetails = () => {
  const { slug } = useParams();

  const place = PlacesList.find((item) => item.slug === slug);

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Place not found
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 md:px-20 py-16 bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-4xl font-serif font-bold mb-4">
            {place.name}
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">
            {place.longDescription}
          </p>

          {/* INFO */}
          <div className="space-y-3 text-lg">
            {place.location?.address && (
              <p><strong>📍 Location:</strong> {place.location.address}</p>
            )}

            {place.visitingInfo?.timings && (
              <p><strong>⏰ Timings:</strong> {place.visitingInfo.timings}</p>
            )}

            {place.visitingInfo?.entryFee && (
              <p><strong>🎟 Entry Fee:</strong> {JSON.stringify(place.visitingInfo.entryFee)}</p>
            )}

            {place.rating && (
              <p><strong>⭐ Rating:</strong> {place.rating}</p>
            )}
          </div>

          {/* HIGHLIGHTS */}
          {place.highlights && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside text-gray-700">
                {place.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PlaceDetails;
