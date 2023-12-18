"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import type { CarouselImage } from "@/types";

interface ImageGalleryProps {
  images: CarouselImage[];
  className?: string;
}

const Carousel: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const delay = 3000;

  const defaultImage = {
    id: "0",
    src: "https://uploadthing.com/f/f6d7eff1-2bb0-475f-8117-41aa1c40ed2f_b3.jpg",
    alt: "null banner",
  };

  const [selectedImage, setSelectedImage] = useState<CarouselImage>(
    Array.isArray(images) && images.length > 0
      ? images[0] ?? defaultImage
      : defaultImage,
  );

  // Handle image changes
  const handleImageSelect = (image: CarouselImage) => {
    const newIndex = images.findIndex((img) => img.id === image.id);
    setCurrentIndex(newIndex);
    setSelectedImage(image);
  };

  const handlePreviousImage = () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    const previousImage = images[previousIndex];
    if (previousImage) {
      setCurrentIndex(previousIndex);
      setSelectedImage(previousImage);
      paginate(-1);
    }
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];
    if (nextImage) {
      setCurrentIndex(nextIndex);
      setSelectedImage(nextImage);
      paginate(1);
    }
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0.5,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction > 0 ? -1000 : 1000,
        opacity: 0.5,
      };
    },
  };

  // Code to automatically change the images every second

  useEffect(() => {
    if (autoPlay) {
      setTimeout(() => handleNextImage(), delay);
      return () => {
        null;
      };
    } else {
      return () => {
        null;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleMouseEnter = () => {
    setAutoPlay(false); // Pause auto-play on mouse enter
  };

  const handleMouseLeave = () => {
    setAutoPlay(true); // Resume auto-play on mouse leave
  };

  const swipeConfidenceThreshold = 500;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={cn("relative bg-white justify-center overflow-hidden", className)}>
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={selectedImage.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 450, damping: 35 },
            opacity: { duration: 0.1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div
            className="flex h-[60vh] items-center justify-center rounded-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AspectRatio ratio={16 / 9}>
            <Image
  fill
  src={selectedImage.src}
  alt={selectedImage.alt}
  className="rounded-md"
  style={{ objectFit: "cover", width: "100%", height: "100%" }}
/>

            </AspectRatio>
          </div>

        </motion.div>
      </AnimatePresence>


      <div className="absolute left-0 top-0 flex h-full items-center justify-center opacity-50">
        
        <button
          className="ml-2 inline-flex items-center justify-center rounded-full bg-white p-1 hover:bg-primary dark:hover:bg-muted md:p-2.5 group"
          onClick={handlePreviousImage}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-black group-hover:text-white" />
        </button>
      </div>
      <div className="absolute right-0 top-0 flex h-full items-center justify-center opacity-50">
        <button
          className="mr-2 inline-flex items-center justify-center rounded-full bg-white p-1 hover:bg-primary dark:hover:bg-muted md:p-2.5 group"
          onClick={handleNextImage}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-black group-hover:text-white" />
        </button>
      </div>
      <div className="absolute bottom-10 flex w-full items-center justify-center space-x-2 opacity-50">
        {images.map((image) => (
          <button key={image.id}>
            <Circle
              className={`flex h-4 w-4 items-center justify-center stroke-primary hover:fill-primary ${
                image.id === selectedImage.id ? "fill-primary" : ""
              }`}
              onClick={() => handleImageSelect(image)}
            />
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
