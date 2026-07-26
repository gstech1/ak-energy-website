import Image from "next/image";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Image */}

      <Image
        src="/images/hero/hero-bg.png"
        alt="AK Energy Hero Background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/55" />

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/65 to-transparent" />

      {/* Bottom Gradient */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center justify-between px-8">

        {/* Left */}

        <div className="max-w-3xl">
          <HeroContent />
        </div>

        {/* Right */}

        

      </div>
    </section>
  );
}