import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 opacity-20 animate-pulse">
        <Image
          src="/box2.svg"
          alt=""
          width={150}
          height={150}
          className="transform"
        />
      </div>

      <div className="absolute bottom-0 left-0 opacity-20 animate-pulse">
        <Image
          src="/box2.svg"
          alt=""
          width={150}
          height={150}
          className="transform rotate-180"
        />
      </div>

      <div className="absolute bottom-0 right-0 opacity-20 animate-pulse">
        <Image
          src="/box1.svg"
          alt=""
          width={150}
          height={150}
          className="transform rotate-180"
        />
      </div>

      <div className="container mx-auto px-8 lg:px-12 h-full flex items-center relative z-10">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 lg:pr-16 space-y-8">
          {/* Logo with subtle shadow */}
          <div className="group">
            <Image
              src="/logo.svg"
              alt="Colombia Tech Fest Logo"
              width={500}
              height={200}
              className="w-full max-w-lg"
              priority
            />
          </div>

          {/* Main description with premium typography */}
          <div className="space-y-6">
            <p
              className="text-xl lg:text-2xl xl:text-3xl leading-relaxed font-light tracking-wide"
              style={{ color: "#666666" }}
            >
              Únete a la plataforma de{" "}
              <span className="font-medium" style={{ color: "#D9D9D9" }}>
                innovación
              </span>{" "}
              de la región.
            </p>

            {/* Premium tagline with enhanced styling */}
            <div className="flex items-center space-x-4 group">
              <div
                className="w-16 h-1 rounded-full"
                style={{ backgroundColor: "#FFDA35" }}
              />
              <span
                className="text-lg lg:text-xl font-medium tracking-wider uppercase"
                style={{ color: "#D9D9D9" }}
              >
                2025 Edition
              </span>
            </div>
          </div>

          {/* Organizers section with premium styling */}
          <div className="pt-12 border-t" style={{ borderColor: "#333333" }}>
            <div className="flex flex-col space-y-4">
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium opacity-60"
                style={{ color: "#888888" }}
              >
                Organizado por
              </p>
              <div className="group">
                <Image
                  src="/col-makers.svg"
                  alt="Col Makers - Organizadores"
                  width={200}
                  height={70}
                  className="opacity-70"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Animation Space with subtle background */}
        <div className="hidden lg:flex w-1/2 h-full items-center justify-center">
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Subtle background pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #FFDA35 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Placeholder for animation with premium styling */}
            <div
              className="relative z-10 text-8xl opacity-20 animate-pulse"
              style={{ color: "#FFDA35" }}
            >
              ⚡
            </div>

            {/* Floating accent elements */}
            <div
              className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
            />
            <div
              className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full animate-pulse delay-700"
              style={{ backgroundColor: "#FFDA35", opacity: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
