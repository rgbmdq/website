export default function Testimonials() {
  return (
    <section className="py-8 bg-gray-50 overflow-hidden md:py-8 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="md:flex md:items-center md:justify-center">
            <div className="text-2xl mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
              <div className="font-bold text-blue">
                Nicolas Kruk
              </div>
              <svg
                className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M11 0h3L9 20H6l5-20z" />
              </svg>

              <div className="font-medium text-gray-500">
                Back End Engineer
              </div>
            </div>
          </div>
          <blockquote className="mt-4">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 text-gray-900">
              <p>
                &ldquo;Rodrigo is a very enthusiastic person. Really eager to
                learn new things. He always is up for a challenge, and he won't
                stop until coming up with a solution.&rdquo;
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

// Agregar un json con un array de testimonios, y generar una interfaz para levantarlos 
// testimonials : [ {author: "Nicolas", content: "bla bla"}]
// Agregar slide con animación