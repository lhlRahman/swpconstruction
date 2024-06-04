import { Button } from "@/components/ui/button";

export function HeroSection() {

  return (
    <section className="relative w-screen h-screen top-0">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg"
          alt="About Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-24 flex flex-col items-center relative z-10">
        <h1 className="text-4xl font-bold leading-tight mb-4 text-center">
          Professional Renovation Services
        </h1>
        <p className="text-lg mb-8 text-center">
          Transform your space with our expert renovation services. From flooring to painting, we&apos;ve got you covered.
        </p>
        <Button>Get a Quote</Button>
      </div>
    </section>
  );
}