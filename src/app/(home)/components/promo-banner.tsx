import Image, { ImageProps } from "next/image";

const PromoBanner = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className="h-auto w-full"
      sizes="100vw"
    />
  );
};

export default PromoBanner;
