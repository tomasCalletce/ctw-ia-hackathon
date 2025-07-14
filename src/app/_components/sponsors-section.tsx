export function SponsorsSection() {
  return (
    <section className="py-20 px-8 lg:px-12">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className="text-lg lg:text-xl font-light tracking-wide"
            style={{ color: "#D9D9D9" }}
          >
            con el apoyo de
          </h2>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Placeholder sponsor boxes */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-24 h-16 bg-gray-600 opacity-40 rounded-md"
              style={{ backgroundColor: "#333333" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
