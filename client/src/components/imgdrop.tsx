import { useState, useEffect, type DragEvent, type ChangeEvent } from "react";

interface ImageDropProps {
  image?: string | null;              // external image (for transformed or preset)
  onFileSelect?: (file: File) => void; // callback when user uploads an image
  readOnly?: boolean;                 // disables upload when true
}

const ImageDrop: React.FC<ImageDropProps> = ({ image, onFileSelect, readOnly = false }) => {
  const [preview, setPreview] = useState<string | null>(image || null);
  const [dragOver, setDragOver] = useState(false);
  const [inputId] = useState(() => `file-input-${Math.random().toString(36).slice(2)}`); 
  // unique id for multiple instances

  // ✅ update preview when external image changes (for transformed image)
  useEffect(() => {
    if (image) {
      setPreview(image);
    }
  }, [image]);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (readOnly) return;

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onFileSelect?.(file);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onFileSelect?.(file);
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onClick={() => {
        if (!readOnly) document.getElementById(inputId)?.click();
      }}
      className={`mx-auto border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition p-4 ${
        readOnly ? "cursor-default" : "cursor-pointer"
      } ${dragOver ? "bg-blue-100 border-blue-500" : "border-gray-300"}`}
      style={{
        minHeight: "200px",
        width: "fit-content",
        maxWidth: "90%",
      }}
    >
      {preview ? (
        <img
          src={preview}
          alt="preview"
          className="rounded-lg shadow-md"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
        />
      ) : (
        <p className="text-gray-500 text-center px-4 select-none">
          {readOnly ? "No image yet" : "Drop or click to upload"}
        </p>
      )}

      {!readOnly && (
        <input
          id={inputId}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default ImageDrop;
