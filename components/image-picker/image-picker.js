"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const imageRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  const handleOnImageSelection = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>No picked images</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="super nice image" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          onChange={handleOnImageSelection}
          ref={imageRef}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={() => imageRef.current.click()}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
