"use client";
import PromoBanner from "./promo-banner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface SliderProps {
  slides: Slide[];
  duration?: number;
}
interface Slide {
  source: string;
  title: string;
}
const Slider = ({ slides, duration = 5000 }: SliderProps) => {
  return (
    <Carousel
      plugins={[Autoplay({ playOnInit: true, delay: duration })]}
      opts={{ loop: true }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {slides.map((image, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4">
            <PromoBanner src={image.source} alt={image.title} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
