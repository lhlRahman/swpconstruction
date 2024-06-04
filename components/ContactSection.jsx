import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactInfo } from "@/components/ContactInfo";
import { FormField } from "@/components/FormField";
import { MapPinIcon, MailIcon, InstagramIcon, PhoneIcon } from "@/components/icons/index";

export function ContactSection() {
    
  return (
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
          <ContactInfo icon={<PhoneIcon className="h-6 w-6 text-blue-600 inline mr-2" />} text="(416) 555-0123" />
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
  );
}
