import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Campos', href: '#campos' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Familia', href: '#familia' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <section
        className="relative flex min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85')",
        }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
        >
          <source src="/videos/campo-argentino.mp4.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,10,5,0.84)_0%,rgba(15,10,5,0.58)_42%,rgba(15,10,5,0.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

        <header className="absolute inset-x-0 top-0 z-20">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
            <Link to="/" className="group flex items-center gap-3">
              <span className="grid size-11 place-items-center border border-white/35 bg-white/10 text-sm font-semibold tracking-[0.22em] backdrop-blur-md">
                HEF
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold uppercase tracking-[0.28em]">
                  Hunting
                </span>
                <span className="mt-1 text-lg font-serif text-stone-100">
                  El Farid
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-8 rounded-full border border-white/15 bg-black/15 px-6 py-3 text-sm text-stone-100 shadow-2xl shadow-black/10 backdrop-blur-md md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-amber-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contacto"
              className="rounded-full border border-amber-200/60 bg-amber-200 px-5 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-black/20 transition hover:bg-white"
            >
              Reservar
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-3xl pb-12 sm:pb-16">
            <p className="mb-5 inline-flex border-l-2 border-amber-300 pl-4 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100">
              Entre Rios y Buenos Aires
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-stone-50 sm:text-7xl lg:text-8xl">
              Hunting El Farid
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-100/88 sm:text-xl">
              Caza, campo y hospitalidad familiar en dos estancias argentinas
              preparadas para vivir jornadas cuidadas, autenticas y memorables.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#campos"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-stone-950 transition hover:bg-amber-100"
              >
                Conocer los campos
              </a>
              <a
                href="#experiencias"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Ver experiencias
              </a>
            </div>
          </div>

          <div
            id="campos"
            className="grid overflow-hidden border border-white/15 bg-stone-950/35 backdrop-blur-md md:grid-cols-3"
          >
            <article className="border-b border-white/15 p-5 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-[0.26em] text-amber-100">
                Campo
              </p>
              <h2 className="mt-3 font-serif text-2xl">Entre Rios</h2>
              <p className="mt-3 text-sm leading-6 text-stone-200/82">
                Monte, pastizales y baqueanos locales para una experiencia de
                caza con raiz litoraleña.
              </p>
            </article>
            <article className="border-b border-white/15 p-5 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-[0.26em] text-amber-100">
                Campo
              </p>
              <h2 className="mt-3 font-serif text-2xl">Buenos Aires</h2>
              <p className="mt-3 text-sm leading-6 text-stone-200/82">
                Territorio amplio, accesible y pensado para combinar jornadas
                intensas con descanso.
              </p>
            </article>
            <article className="p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-amber-100">
                Desde la casa
              </p>
              <h2 className="mt-3 font-serif text-2xl">Empresa familiar</h2>
              <p className="mt-3 text-sm leading-6 text-stone-200/82">
                Atencion cercana, cocina de campo y acompanamiento en cada
                salida.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
