import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 opacity-30">
        <Image
          src="/box1.svg"
          alt=""
          width={150}
          height={150}
          className="transform"
        />
      </div>

      <div className="absolute top-0 right-0 opacity-30">
        <Image
          src="/box2.svg"
          alt=""
          width={150}
          height={150}
          className="transform"
        />
      </div>

      <div className="absolute bottom-0 left-0 opacity-30">
        <Image
          src="/box2.svg"
          alt=""
          width={150}
          height={150}
          className="transform rotate-180"
        />
      </div>

      <div className="absolute bottom-0 right-0 opacity-30">
        <Image
          src="/box1.svg"
          alt=""
          width={150}
          height={150}
          className="transform rotate-180"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.svg"
            alt="Colombia Tech Fest Logo"
            width={300}
            height={120}
            className="mx-auto"
          />
        </div>

        {/* Main Title */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ color: "#D9D9D9" }}
        >
          Colombia Tech Fest
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          style={{ color: "#444444" }}
        >
          El evento de tecnología más importante de Colombia. Conectando
          innovadores, desarrolladores y líderes tecnológicos.
        </p>

        {/* CTA Buttons */}
      </div>
    </section>
  );
}
