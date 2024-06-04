export function AboutSection() {
    return (
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
              <img src="/placeholder.svg" alt="About Image" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  