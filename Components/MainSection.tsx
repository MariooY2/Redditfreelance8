"use client";
import Image from "next/image";
import { useState } from "react";
import galleryImages from "@/utils/galleryImages";

const MainSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    console.log("Button clicked");
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <main className="container mx-auto py-16">
      <section className="text-center">
        {/* Main Image Section */}
        <div className="relative w-full h-[20rem] md:h-[22rem] lg:h-[25rem] mb-8">
          <Image
            src="/downloaded_images/a1bbd4_bb6934bbe15a4ba4bb3b26a1f599a2af~mv2.jpg"
            alt="Daniel Oliveira"
            className="object-cover"
            fill
            priority
          />
        </div>

        <h2 className="text-xl font-medium mb-4">
          This is but a distraction of a story in action.
        </h2>

        {/* Gallery Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.slice(0, visibleCount).map((image, index) => (
            <div
              key={index}
              className="relative w-full h- overflow-hidden rounded-lg group"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={500}
                className="object-center w-full h-full transition-transform duration-300 group-hover:brightness-125"
                unoptimized={true}
              />

              {/* Alt text overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < galleryImages.length && (
          <button
            onClick={handleShowMore}
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Show More
          </button>
        )}
      </section>
    </main>
  );
};

export default MainSection;
