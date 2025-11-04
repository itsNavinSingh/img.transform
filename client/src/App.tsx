import { useState } from "react";
import ImageDrop from "./components/imgdrop";
import NavBar from "./components/navbar";

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [transformedImg, setTransformedImg] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTransform = async () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("rotation", rotation.toString());
    formData.append("scale", scale.toString());
    formData.append("translate_x", translateX.toString());
    formData.append("translate_y", translateY.toString());

    setLoading(true);
    try {
      const response = await fetch("/transform", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error processing image");
      }

      // ✅ Correct way to handle binary image response
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setTransformedImg(imageUrl);
    } catch (error) {
      console.error(error);
      alert("Failed to transform image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <NavBar />

      {/* Image Upload and Output */}
      <div className="flex flex-wrap justify-center gap-8 pt-6">
        {/* Original Image */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-2">Original</h3>
          <ImageDrop onFileSelect={(f) => setFile(f)} />
        </div>

        {/* Transformed Image */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-2">Transformed</h3>

          {loading ? (
            <div className="border-2 border-dashed border-gray-300 rounded-xl px-8 py-20 flex items-center justify-center">
              <p className="text-gray-500 animate-pulse">Processing...</p>
            </div>
          ) : transformedImg ? (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-2">
              <img
                src={transformedImg}
                alt="Transformed"
                className="rounded-lg shadow-md max-w-full h-auto object-contain"
              />
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-xl px-8 py-20 text-gray-500 flex items-center justify-center">
              Transformed image will appear here
            </div>
          )}
        </div>
      </div>

      {/* Transformation Parameters */}
      <h3 className="text-center text-2xl font-semibold mt-8">
        Transformation Parameters
      </h3>

      <div className="w-full flex flex-wrap justify-center gap-6 text-xl font-semibold mt-4">
        {[
          {
            label: "Rotation",
            value: rotation,
            set: setRotation,
            step: "1",
          },
          {
            label: "Scaling",
            value: scale,
            set: setScale,
            step: "0.1",
          },
          {
            label: "X-Translation",
            value: translateX,
            set: setTranslateX,
            step: "1",
          },
          {
            label: "Y-Translation",
            value: translateY,
            set: setTranslateY,
            step: "1",
          },
        ].map((param) => (
          <div className="flex flex-col items-center" key={param.label}>
            <h3>{param.label}</h3>
            <input
              type="number"
              step={param.step}
              value={param.value}
              onChange={(e) => param.set(parseFloat(e.target.value))}
              className="border-2 bg-gray-100 rounded border-gray-300 w-24 text-center"
            />
          </div>
        ))}

        <div className="flex items-end pb-2">
          <button
            onClick={handleTransform}
            disabled={loading}
            className="rounded bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Transforming..." : "Transform"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
