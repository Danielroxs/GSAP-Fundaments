import { Link } from "react-router-dom";

const animations = [
  {
    title: "GSAP To",
    description:
      "El método to() se usa para animar un elemento desde su estado inicial a un estado final.",
    path: "/gsapto",
  },
  {
    title: "GSAP From",
    description:
      "El método from() se usa para animar un elemento desde un estado final a su estado inicial.",
    path: "/gsapfrom",
  },
  {
    title: "GSAP FromTo",
    description:
      "El método fromTo() se usa para animar un elemento desde un estado inicial a un estado final y viceversa.",
    path: "/gsapfromto",
  },
  {
    title: "GSAP Timeline",
    description:
      "El método timeline() se usa para crear una línea temporal para gestionar múltiples animaciones.",
    path: "/gsaptimeline",
  },
  {
    title: "GSAP Stagger",
    description:
      "El método stagger() se usa para animar múltiples elementos con un efecto escalonado.",
    path: "/gsapstagger",
  },
  {
    title: "GSAP ScrollTrigger",
    description:
      "El plugin ScrollTrigger se usa para activar animaciones según la posición del scroll.",
    path: "/gsapscrolltrigger",
  },
  {
    title: "GSAP Text",
    description: "Aprende cómo animar texto con GSAP.",
    path: "/gsaptext",
  },
];

const Home = () => {
  return (
    <main className="container">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-zinc-50">Animaciones GSAP</h1>
        <ol className="flex flex-col mt-10">
          {animations.map((animation, index) => (
            <li
              key={index}
              className="flex flex-row gap-2 p-5 hover:bg-zinc-800/50 rounded-lg"
            >
              <p>
                <span className="text-sm font-bold text-zinc-50">
                  {index + 1}.
                </span>
              </p>
              <div className="flex flex-col gap-2 flex-1">
                <Link
                  to={animation.path}
                  className="text-md font-semibold text-blue-600"
                >
                  {animation.title}
                </Link>
                <p className="text-gray-400 text-xs">{animation.description}</p>
              </div>

              <svg
                className="size-6 text-gray-600 -rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
                />
              </svg>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Home;
