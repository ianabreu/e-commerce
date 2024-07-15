"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImagesProps {
  name: string;
  imageURLs: string[];
}
const ProductImages = ({ imageURLs, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageURLs[0]);
  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-72 w-full items-center justify-center bg-background lg:h-auto">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-full max-h-80 w-full"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        {imageURLs.map((imageURL) => (
          <button
            key={imageURL}
            className={`flex h-24 items-center justify-center rounded-lg border-2 border-background bg-background
            ${
              imageURL === currentImage &&
              "border-2 border-solid border-primary"
            }`}
            onClick={() => handleImageClick(imageURL)}
          >
            <Image
              src={imageURL}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-full max-w-[80%]"
              style={{ objectFit: "contain" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
