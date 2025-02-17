import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Exzellente Kombination aus innovativer Technologie und hochwertiger Keramik aus Italien.",
    "100% bleifrei und vollständig recycelbar, mit einem hohen Anteil an recycelten Materialien.",
    "Langlebige und pflegeleichte Oberflächen für zeitlose Eleganz in jeder Umgebung.",
    "Ideal für Innenräume sowie Außenbereiche dank der hohen Beständigkeit gegenüber Witterungseinflüssen.",
    "Erfüllt höchste Qualitätsstandards und bietet außergewöhnliche ästhetische Lösungen für Architektur und Design.",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/_d55niujYEs"
              title="MATERIA | Workabilityo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="mb-6">
              Warum MATERIA Platten wählen?
            </h2>
            <p className=" mb-8">
              MATERIA-Platten bieten eine perfekte Symbiose aus innovativer Technologie und außergewöhnlichem Design, das in der Architektur und Innenraumgestaltung neue Maßstäbe setzt. Sie vereinen hohe Funktionalität mit einer ästhetischen Vielfalt, die sowohl in modernen als auch klassischen Umgebungen begeistert.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="" />
                  <span className="">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
