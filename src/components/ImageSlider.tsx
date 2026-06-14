"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((i) => (i + 1) % images.length);
      }
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div
      className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden group"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={src}
            alt={`${alt} screenshot ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          {/* Arrows: always visible on touch devices, hover-reveal on desktop */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 text-white text-xl leading-none flex items-center justify-center transition-opacity hover:bg-black/60 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 text-white text-xl leading-none flex items-center justify-center transition-opacity hover:bg-black/60 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
