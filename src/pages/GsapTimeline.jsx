import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  // TODO: Implement the gsap timeline
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      y: 50,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        El método <code>gsap.timeline()</code> se utiliza para crear una
        instancia de línea temporal que puede usarse para gestionar múltiples
        animaciones.
      </p>

      <p className="mt-5 text-gray-500">
        El método <code>gsap.timeline()</code> es similar a los métodos{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code> y{" "}
        <code>gsap.fromTo()</code>, pero la diferencia es que el método{" "}
        <code>gsap.timeline()</code> se utiliza para crear una instancia de
        línea temporal que puede usarse para gestionar múltiples animaciones,
        mientras que los métodos <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code> y <code>gsap.fromTo()</code> se usan para
        animar elementos desde su estado actual a un nuevo estado, desde un
        nuevo estado a su estado actual, y desde un nuevo estado a otro nuevo
        estado, respectivamente.
      </p>

      <p className="mt-5 text-gray-500">
        Lee más sobre el método{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>
        .
      </p>

      <div className="mt-20 space-y-10">
        <button
          onClick={() =>
            timeline.paused() ? timeline.play() : timeline.pause()
          }
        >
          Reproducir/Pausar
        </button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
