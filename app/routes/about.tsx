export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-6 text-center text-4xl font-extrabold text-gray-900">
          About This Website
        </h1>
        <p className="mb-4 text-xl leading-relaxed text-gray-700">
          This website uses the{" "}
          <span className="font-semibold text-indigo-600">
            REST Countries API
          </span>{" "}
          to display comprehensive information about countries from around the
          world.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you’re curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
      </div>
    </div>
  );
}