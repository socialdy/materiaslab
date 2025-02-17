export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center">
      {/* Container for the video */}
        {/* Desktop Video */}
        <video
          className="w-full h-full object-cover ease-in-out hidden md:block"
          autoPlay
          muted
          loop
        >
          <source
            src="https://www.materiaslab.com/video/MATERIA_Slab_in_Evolution_2021(EN).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          className="w-full h-full object-cover ease-in-out md:hidden"
          autoPlay
          muted
          loop
        >
          <source
            src="https://www.materiaslab.com/video/MATERIA_Slab_in_Evolution_2021(EN).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
       

    </section>
  );
};
