import React, { useState } from 'react';
import styles from './upload_images.module.css';

const UploadImages = ({
  handleNextStep,
  handlePrevStep,
  uploadedImages,
  setFormData,
  formData,
}) => {
  const [previewImages, setPreviewImages] = useState([]);
  // Function to handle file input change and append selected images to uploadedImages array
  const handleFileUpload = (event) => {
    const selectedFiles = event.target.files; // Get selected files
    if (selectedFiles.length > 0) {
      // Update the formData with the selected image files
      const newUploadedImages = [...formData.uploadedImages];

      for (let i = 0; i < selectedFiles.length; i++) {
        newUploadedImages.push(selectedFiles[i]);
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        uploadedImages: newUploadedImages,
      }));

      // Display preview images (optional)
      const newPreviewImages = [...previewImages];
      for (let i = 0; i < selectedFiles.length; i++) {
        const imageURL = URL.createObjectURL(selectedFiles[i]);
        newPreviewImages.push(imageURL);
      }
      setPreviewImages(newPreviewImages);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.maincontainer}>
        <div className={styles.cc1}>
          <div className={styles.cc2}>
            <label htmlFor="uploadimages">Upload Images Or Drag And Drop File</label>
            <input
              type="file"
              encType="multipart/form-data"
              id= {styles.upload_image}

              name="uploadedImages"

              accept="image/*"
              multiple
              onChange={handleFileUpload}
            />
            </div>
            {/* <p>Click in the border to browse images</p> */}
         
          {previewImages.length > 0 && (
            <div className={styles.uploadedImages}>
              {previewImages.map((image, index) => (
                <img key={index} src={image} alt={`Uploaded Image ${index}`} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.previousbutton} onClick={handlePrevStep}>
          Previous
        </button>
        
        <button className={styles.nextbutton} onClick={handleNextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadImages;
