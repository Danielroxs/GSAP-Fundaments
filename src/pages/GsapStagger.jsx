import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      //stagger: 0.5,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  }, []);

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger es una característica que te permite aplicar animaciones
        con un retraso escalonado a un grupo de elementos.
      </p>

      <p className="mt-5 text-gray-500">
        Al usar la característica stagger en GSAP, puedes especificar la
        cantidad de tiempo para escalonar las animaciones entre cada elemento,
        así como personalizar la aceleración y duración de cada animación
        individual. Esto te permite crear efectos dinámicos y visualmente
        atractivos, como desvanecimientos escalonados, rotaciones, movimientos y
        más.
      </p>

      <p className="mt-5 text-gray-500">
        Lee más sobre la característica{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>
        .
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
