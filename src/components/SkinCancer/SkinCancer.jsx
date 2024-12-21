import { useState } from "react";
import "./SkinCancer.css";
import { UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "react-bootstrap";

const SkinCancer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleSend = () => {
    alert("Image sent successfully!");
    setSelectedImage(null);
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="container skin-cancer">
      <div className="header-line line-depart">
        <span className="line" />
        <span className="text">Skin Cancer Detection</span>
      </div>
      <h1>
        Upload an image of your skin to check for potential signs of skin
        cancer.
      </h1>
      <div className="drag-drop-container">
        <div
          className={`drop-area ${dragActive ? "active" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={!selectedImage ? handleClick : null} // Only trigger file input if no image is selected
        >
          {!selectedImage ? (
            <div className="upload-image">
              <UploadCloudIcon className="icon" />
              <span className="">Drag & Drop or click to upload image</span>
            </div>
          ) : (
            <div className="selected-image-container">
              <img
                src={selectedImage}
                alt="Selected"
                className="selected-image"
              />
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                onClick={handleRemoveImage}
              >
                <XIcon className="w-4 h-4" />
              </Button>
            </div>
          )}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        {selectedImage && (
          <div className="button-container">
            <button className="send-btn" onClick={handleSend}>
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkinCancer;
