import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: false,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      },
    );
  }, []);

  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        El método <code>gsap.fromTo()</code> se utiliza para animar elementos
        desde un nuevo estado a otro nuevo estado.
      </p>

      <p className="mt-5 text-gray-500">
        El método <code>gsap.fromTo()</code> es similar a los métodos{" "}
        <code>gsap.from()</code> y <code>gsap.to()</code>, pero la diferencia es
        que el método <code>gsap.fromTo()</code> anima elementos desde un nuevo
        estado a otro nuevo estado, mientras que el método{" "}
        <code>gsap.from()</code> anima elementos desde un nuevo estado a su
        estado actual, y el método <code>gsap.to()</code> anima elementos desde
        su estado actual a un nuevo estado.
      </p>

      <p className="mt-5 text-gray-500">
        Lee más sobre el método{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>
        .
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
