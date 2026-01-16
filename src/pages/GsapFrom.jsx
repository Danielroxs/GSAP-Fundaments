import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        El método <code>gsap.from()</code> se utiliza para animar elementos
        desde un nuevo estado a su estado actual.
      </p>

      <p className="mt-5 text-gray-500">
        El método <code>gsap.from()</code> es similar al método{" "}
        <code>gsap.to()</code>, pero la diferencia es que el método{" "}
        <code>gsap.from()</code> anima elementos desde un nuevo estado a su
        estado actual, mientras que el método <code>gsap.to()</code> anima
        elementos desde su estado actual a un nuevo estado.
      </p>

      <p className="mt-5 text-gray-500">
        Lee más sobre el método{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>
        .
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
