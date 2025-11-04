function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-blue-600">img.transform</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>img.transform</strong> is a lightweight web-based image transformation
          tool built using <strong>FastAPI</strong> and <strong>React + TypeScript</strong>.
          It allows users to upload an image and apply real-time transformations such as
          rotation, scaling, and translation — all directly in the browser.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The backend leverages <strong>OpenCV</strong> for powerful image processing,
          while the frontend provides an intuitive and interactive interface for visual
          experimentation. This project demonstrates how modern web frameworks and
          computer vision can combine to create practical and visually engaging tools.
        </p>

        <div className="border-t border-gray-300 my-6"></div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Developed By</h2>
        <ul className="text-lg text-gray-700 space-y-1">
          <li>• Manish Kumar</li>
          <li>• Navin Kumar Singh</li>
          <li>• Nikhil Kumar</li>
        </ul>

        <div className="border-t border-gray-300 my-6"></div>

        <p className="text-gray-600 italic">
          “Transforming images, one pixel at a time.”
        </p>
      </div>
    </div>
  );
}

export default About;
