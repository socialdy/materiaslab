import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Fischer",
      role: "Küchenliebhaber",
      quote: "Ich bin total begeistert von den MATERIA Platten! Die sehen in meiner neuen Küche einfach klasse aus und sind super pflegeleicht. Man merkt richtig die Qualität – perfekt für meinen Stil!",
    },
    {
      id: 2,
      name: "Carina Weber",
      role: "Architektin",
      quote: "Die MATERIA Oberflächen haben wirklich jedes Bad, das wir renoviert haben, aufgewertet. Sie sind nicht nur schön, sondern auch unglaublich widerstandsfähig. Unsere Kunden lieben sie!",
    },
    {
      id: 3,
      name: "Luca Schneider",
      role: "Bauleiter",
      quote: "Wir haben die M Platten für eine große Bauvorhaben genutzt, und sie haben sich als unglaublich robust und einfach zu pflegen herausgestellt. Ideal für den intensiven Einsatz in Baustellen und großen Projekten.",
    },
    {
      id: 4,
      name: "Katrin Hoffmann",
      role: "Innenausstatterin",
      quote: "Ich habe die MATERIA Platten in mehreren meiner Projekte verwendet. Die Qualität und die Vielfalt der Designs machen sie perfekt für jedes Raumkonzept. Besonders die großen Formate haben es mir angetan – sie wirken immer elegant und modern.",
    },
  ];

  return (
<section className="py-20 bg-[#dddddd] text-white" id="referenzen">
  <div className="container max-w-6xl mx-auto px-4">
  <h2 className="text-center mb-12">Referenzen</h2>
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto relative"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="bg-white p-8 h-full animate-fade-in">
              <div className="flex flex-col h-full justify-between">
                <p className="text-lg mb-8 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="uppercase ">{testimonial.name}</p>
                  <p className="">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Pfeile werden auf Mobile und Tablet ausgeblendet */}
      <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/60 text-black" />
      <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/60 text-black" />
    </Carousel>
  </div>
</section>


  );
};
