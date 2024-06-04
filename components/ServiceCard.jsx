export function ServiceCard({ imgSrc, altText, icon, title, description }) {
    
    return (
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <img src={imgSrc} alt={altText} className="rounded-lg mb-4" />
        {icon}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  