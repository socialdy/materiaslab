import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    image: "/images/wandverkleidung_innenraum_1.jpg",
  },
  {
    id: 2,
    image: "/images/wandverkleidung_innenraum_2.jpg",
  },
  {
    id: 3,
    image: "/images/wandverkleidung_innenraum_3.jpg",
  },
  {
    id: 4,
    image: "/images/wandverkleidung_innenraum_4.jpg",
  },
  {
    id: 5,
    image: "/images/wandverkleidung_innenraum_5.jpg",
  },
  {
    id: 6,
    image: "/images/heavy_duty_1.jpg",
  },
  {
    id: 7,
    image: "/images/heavy_duty_2.jpg",
  },
  {
    id: 8,
    image: "/images/heavy_duty_3.jpg",
  },
  {
    id: 9,
    image: "/images/heavy_duty_4.jpg",
  },
  {
    id: 10,
    image: "/images/building_1.jpg",
  },
  {
    id: 11,
    image: "/images/building_2.jpg",
  },
  {
    id: 12,
    image: "/images/building_3.jpg",
  },
];



export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-white" id="produkte">
      <div className="container max-w-4xl mx-auto px-4">
    <h2 className="text-center">Produkte</h2>
    <p className="p-3 mb-7 text-center">MATERIA-Oberflächen sind vielseitig einsetzbar – von Innenräumen mit hoher Trittfestigkeit bis hin zu Anwendungen im Bauwesen und Badezimmern. Sie eignen sich perfekt für Küchenarbeitsplatten, Möbel und den Einsatz in feuchten Umgebungen sowie im Freien.</p>
    </div>
      <div className="container mx-auto px-4 md:px-8">

        
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.image}
                      className=""
                    />
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};