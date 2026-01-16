import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  // TODO: Implement gsap text animation
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      },
    );
  }, []);

  return (
    <main>
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        Podemos usar los mismos métodos como <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> y{" "}
        <code>gsap.timeline()</code> para animar texto.
      </p>

      <p className="mt-5 text-gray-500 para">
        Usando estos métodos podemos lograr varias animaciones y efectos de
        texto como aparecer gradualmente, desaparecer gradualmente, deslizar
        hacia dentro, deslizar hacia fuera y muchos más.
      </p>

      <p className="mt-5 text-gray-500 para">
        Para animaciones y efectos de texto más avanzados, puedes explorar el
        TextPlugin de GSAP u otras bibliotecas de terceros que se especializan
        en animaciones de texto.
      </p>

      <p className="mt-5 text-gray-500 para">
        Lee más sobre el plugin{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>
        .
      </p>
    </main>
  );
};

export default GsapText;
