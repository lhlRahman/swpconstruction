import { ServiceCard } from "@/components/ServiceCard";
import { LampFloorIcon, WallpaperIcon, FrameIcon, PaintbrushIcon, PlugIcon, CrossIcon } from "@/components/icons";

export function ServicesSection() {
    
  return (
    <section id="services" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          imgSrc="/placeholder.svg"
          altText="Flooring Image"
          icon={<LampFloorIcon className="h-8 w-8 mb-4 text-blue-600" />}
          title="Flooring"
          description="Install new flooring or refinish existing floors with our expert team."
        />
        <ServiceCard
          imgSrc="/placeholder.svg"
          altText="Drywall Image"
          icon={<WallpaperIcon className="h-8 w-8 mb-4 text-blue-600" />}
          title="Drywall"
          description="Drywall installation, repair, and finishing services for a seamless look."
        />
        <ServiceCard
          imgSrc="/placeholder.svg"
          altText="Framing Image"
          icon={<FrameIcon className="h-8 w-8 mb-4 text-blue-600" />}
          title="Framing"
          description="From new construction to additions, our framing services are top-notch."
        />
        <ServiceCard
          imgSrc="/placeholder.svg"
          altText="Painting Image"
          icon={<PaintbrushIcon className="h-8 w-8 mb-4 text-blue-600" />}
          title="Painting"
          description="Interior and exterior painting services to transform your space."
        />
        <ServiceCard
          imgSrc="/placeholder.svg"
          altText="Plaster Image"
          icon={<PlugIcon className="h-8 w-8 mb-4 text-blue-600" />}
          title="Plaster"
          description="Skilled plaster repair and installation for a smooth finish."
        />
        <ServiceCard
          imgSrc="/placeholder.svg"
          altText="Interlocking Image"
          icon={<CrossIcon className="h-8 w-8 mb-4 text-blue-600" />}
          title="Interlocking"
          description="Create beautiful outdoor spaces with our interlocking services."
        />
      </div>
    </section>
  );
}
