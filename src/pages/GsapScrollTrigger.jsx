import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  // TODO: Implement the gsap scroll trigger

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        // Tienes 2 cajas:
        //
        // Caja 1 (la primera):
        // - Su número de orden es 0
        // - 0 + 5 = 5
        // - 5 × 150 = 750 pixeles hacia la derecha
        //
        // Caja 2 (la segunda):
        // - Su número de orden es 1
        // - 1 + 5 = 6
        // - 6 × 150 = 900 pixeles hacia la derecha
        //
        // Inicio:
        // [Caja1] [Caja2]
        //
        // Después del scroll:
        //                               [Caja1] ← se movió 750px
        //                                     [Caja2] ← se movió 900px (más lejos)

        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef },
  );

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger es un plugin que te permite crear animaciones que se
        activan según la posición del scroll de la página.
      </p>

      <p className="mt-5 text-gray-500">
        Con ScrollTrigger, puedes definir varias acciones que se activan en
        puntos específicos del scroll, como iniciar o finalizar una animación,
        vincular animaciones al movimiento del scroll del usuario, fijar
        elementos a la pantalla y más.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Lee más sobre el método{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>
        .
      </p>

      <div className="mt-10 p-5 bg-gray-800 rounded-lg">
        <h3 className="text-white font-bold mb-3">
          📦 Explicación del movimiento:
        </h3>
        <pre className="text-gray-300 text-sm">
          {`Tienes 2 cajas:

            Caja 1 (la primera):
            - Su número de orden es 0
            - 0 + 5 = 5
            - 5 × 150 = 750 pixeles hacia la derecha

            Caja 2 (la segunda):
            - Su número de orden es 1  
            - 1 + 5 = 6
            - 6 × 150 = 900 pixeles hacia la derecha

            Inicio:
            [Caja1] [Caja2]

            Después del scroll:
                                          [Caja1] ← se movió 750px
                                                [Caja2] ← se movió 900px (más lejos)`}
        </pre>
      </div>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Desplázate hacia abajo para ver la animación
        </p>

        <p className="text-center text-gray-500"></p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
