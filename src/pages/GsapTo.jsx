import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        El método <code>gsap.to()</code> se utiliza para animar elementos desde
        su estado actual a un nuevo estado.
      </p>
      <p className="mt-5 text-gray-500">
        El método <code>gsap.to()</code> es similar al método{" "}
        <code>gsap.from()</code>, pero la diferencia es que el método{" "}
        <code>gsap.to()</code> anima elementos desde su estado actual a un nuevo
        estado, mientras que el método <code>gsap.from()</code> anima elementos
        desde un nuevo estado a su estado actual.
      </p>

      <p className="mt-5 text-gray-500">
        Lee más sobre el método{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>
        .
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
