import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Component() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <header className="sticky top-0 z-50 bg-white py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <ConstructionIcon className="h-8 w-8" />
            <span className="text-xl font-bold">S.W.P Construction</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="#" className="text-sm font-medium hover:text-blue-600" prefetch={false}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:text-blue-600" prefetch={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:text-blue-600" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-24 flex flex-col items-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="About Image"
                className="w-full h-[75vh] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold leading-tight mb-4 text-center">Professional Renovation Services</h1>
              <p className="text-lg mb-8 text-center">
                Transform your space with our expert renovation services. From flooring to painting, we've got you
                covered.
              </p>
              <Button>Get a Quote</Button>
            </div>
          </div>
        </section>
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
        <section id="about" className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  At S.W.P Construction, we pride ourselves on delivering high-quality renovation services to our
                  clients. Our team of experienced professionals is dedicated to ensuring your project is completed on
                  time and within budget.
                </p>
                <p className="text-gray-600">
                  With years of experience in the industry, we have the expertise to tackle any renovation project, big
                  or small. From flooring to framing, we have the skills and knowledge to bring your vision to life.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="About Image"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Have a question or ready to start your renovation project? Fill out the form below, and we'll get back
                to you as soon as possible.
              </p>
              <ContactInfo
                icon={<MapPinIcon className="h-6 w-6 text-blue-600 inline mr-2" />}
                text="123 Main Street, Toronto, ON M1A 2B3"
              />
              <ContactInfo
                icon={<MailIcon className="h-6 w-6 text-blue-600 inline mr-2" />}
                text={
                  <Link href="#" className="hover:text-blue-600" prefetch={false}>
                    info@swpconstruction.com
                  </Link>
                }
              />
              <ContactInfo
                icon={<InstagramIcon className="h-6 w-6 text-blue-600 inline mr-2" />}
                text={
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                    prefetch={false}>
                    @swpconstruction
                  </Link>
                }
              />
              <ContactInfo
                icon={<PhoneIcon className="h-6 w-6 text-blue-600 inline mr-2" />}
                text="(416) 555-0123"
              />
            </div>
            <div>
              <form>
                <FormField id="name" label="Name" type="text" required />
                <FormField id="email" label="Email" type="email" required />
                <FormField id="message" label="Message" as="textarea" rows="4" required />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 S.W.P Construction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ConstructionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14L2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  );
}

function FrameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LampFloorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2h6l3 7H6l3-7Z" />
      <path d="M12 9v13" />
      <path d="M9 22h6" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PaintbrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PlugIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}

function WallpaperIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="9" r="2" />
      <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

function ServiceCard({ imgSrc, altText, icon, title, description }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <img src={imgSrc} alt={altText} className="rounded-lg mb-4" />
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="mb-4">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function FormField({ id, label, type, as = "input", ...props }) {
  const Component = as === "input" ? Input : Textarea;
  return (
    <div className="mb-4">
      <Label htmlFor={id} className="block mb-2">
        {label}
      </Label>
      <Component id={id} type={type} {...props} />
    </div>
  );
}
