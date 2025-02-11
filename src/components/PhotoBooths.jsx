export function PhotoBoothsSection() {
  const photoBooths = [
    "/photos/booth1.jpg",
    "/photos/booth2.jpg",
    "/photos/booth3.jpg",
    "/photos/booth4.jpg",
    "/photos/booth5.jpg",
  ];

  return (
    <section id="photo-booths" className="text-center py-12">
      {/* Heading with Image */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6">
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-darkOrange">Photo</span>{" "}
            <span className="text-lightOrange">Booths</span>
          </h2>
          <img
            src="/threadimg.png"
            alt="Thread Design"
            className="w-16 md:w-32 ml-4"
          />
        </div>
      </div>

      {/* Photo Booths Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photoBooths.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Booth ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
