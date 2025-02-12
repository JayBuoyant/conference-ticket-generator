import React, { useState } from "react";


const UploadWidget = ({ setImageUrl }) => {
  const [image, setImage] = useState(null);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Uploaded Image URL:", data.secure_url);
    setImage(data.secure_url);
    setImageUrl(data.secure_url); // Pass the image URL to the parent component
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />
      {image && <img src={image} alt="Uploaded Preview" style={{ width: "200px", marginTop: "10px" }} />}
    </div>
  );
};

export default UploadWidget;
