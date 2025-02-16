import Image, { ImageProps } from "next/image";

const PromoBanner = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className="h-auto max-h-[70vh] w-full"
      sizes="100vw"
      style={{
        objectFit: "contain",
      }}
    />
  );
};

export default PromoBanner;
