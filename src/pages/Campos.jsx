import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const navItems = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Campos', href: '/campos' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Nosotros', href: '/#nosotros' },
]

const sharedGallery = [
  '/img/axis.jpg',
  '/img/chancho.jpg',
  '/img/liebre.jpg',
  '/img/bufalo.webp',
  '/img/antilopenegro.webp',
  '/img/carnero.jpg',
  '/img/cabrasalvaje.jpeg',
  '/img/paloma.jpeg',
]

const fields = [
  {
    eyebrow: 'Campo en Entre Rios',
    title: 'Entre Rios',
    location: 'Entre Rios, Argentina',
    description:
      'Un campo de monte, pastizales y ambiente litoraleño, preparado para jornadas de caza mayor y menor con acompanamiento cercano desde la llegada hasta el cierre de cada salida.',
    background: '/img/axis.jpg',
    mapQuery: 'Entre Rios Argentina',
    gallery: sharedGallery,
    estanciaTitle: 'Estancia Entre Rios',
    estanciaText:
      'Espacios de descanso y reunion para cerrar cada jornada con la calidez de una casa de campo.',
    estanciaImages: [
      '/img/bufalo.webp',
      '/img/axis.jpg',
      '/img/paloma.jpeg',
      '/img/liebre.jpg',
      '/img/carnero.jpg',
    ],
  },
  {
    eyebrow: 'Campo en Buenos Aires',
    title: 'Buenos Aires',
    location: 'Buenos Aires, Argentina',
    description:
      'Un campo amplio y accesible, pensado para combinar caza, descanso y logistica eficiente. Ideal para armar programas a medida segun especie, grupo y objetivo del cazador.',
    background: '/img/chancho.jpg',
    mapQuery: 'Buenos Aires Argentina',
    gallery: [
      '/img/liebre.jpg',
      '/img/Perdiz.jpeg',
      '/img/paloma.jpeg',
      '/img/chancho.jpg',
      '/img/cuatro%20cuernos.jpeg',
      '/img/bufalo.webp',
      '/img/axis.jpg',
      '/img/cabrasalvaje.jpeg',
    ],
    estanciaTitle: 'Estancia Buenos Aires',
    estanciaText:
      'Un punto de encuentro comodo y funcional para grupos, con lugar para descansar, compartir comidas y preparar cada salida.',
    estanciaImages: [
      '/img/chancho.jpg',
      '/img/Perdiz.jpeg',
      '/img/cuatro%20cuernos.jpeg',
      '/img/cabrasalvaje.jpeg',
      '/img/antilopenegro.webp',
    ],
  },
]

function Header() {
  return (
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
            <Link
              key={item.href}
              to={item.href}
              className="transition hover:text-[#d3a06f]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/#contacto"
          className="rounded-full border border-[#b97947]/70 bg-[#8f5531] px-5 py-3 text-sm font-semibold text-stone-50 shadow-xl shadow-black/20 transition hover:bg-[#a9693d]"
        >
          Contacto
        </Link>
      </nav>
    </header>
  )
}

function ImageSlider({ images, title }) {
  const loopImages = [...images, ...images]

  return (
    <div className="mt-6 overflow-hidden border border-white/10 bg-stone-950/70">
      <div className="field-slider-track flex w-max gap-4 py-4">
        {loopImages.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`${title} ${index + 1}`}
            className="h-52 w-72 flex-none object-cover sm:h-60 sm:w-96"
          />
        ))}
      </div>
    </div>
  )
}

function EstanciaGallery({ field }) {
  const [mainImage, ...smallImages] = field.estanciaImages

  return (
    <div className="mt-12">
      <div className="mb-6 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e5c4a6]">
          Estancia
        </p>
        <h3 className="mt-3 font-serif text-4xl font-semibold text-white">
          {field.estanciaTitle}
        </h3>
        <p className="mt-4 text-base leading-7 text-stone-300">
          {field.estanciaText}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr]">
        <article className="relative min-h-[420px] overflow-hidden border border-white/10 bg-stone-900">
          <img
            src={mainImage}
            alt={field.estanciaTitle}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
        </article>

        <div className="grid gap-4 sm:grid-cols-2">
          {smallImages.map((image, index) => (
            <article
              key={image}
              className="relative min-h-[200px] overflow-hidden border border-white/10 bg-stone-900"
            >
              <img
                src={image}
                alt={`${field.estanciaTitle} detalle ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-950/10" />
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function FieldSection({ field }) {
  return (
    <section className="border-t border-white/10 bg-[#120d09] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden border border-white/10 bg-stone-950 lg:grid-cols-[1.15fr_0.85fr]">
          <article
            className="relative min-h-[520px] bg-cover bg-center"
            style={{ backgroundImage: `url('${field.background}')` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,13,9,0.92)_0%,rgba(18,13,9,0.66)_48%,rgba(18,13,9,0.22)_100%)]" />
            <div className="relative z-10 flex min-h-[520px] max-w-2xl flex-col justify-end p-6 sm:p-10">
              <p className="border-l-2 border-[#b97947] pl-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e5c4a6]">
                {field.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-none text-white sm:text-6xl">
                {field.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-200">
                {field.description}
              </p>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
                {field.location}
              </p>
            </div>
          </article>

          <aside className="min-h-[420px] bg-[#1a120c] p-5 sm:p-6">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e5c4a6]">
                Ubicacion aproximada
              </p>
              <h3 className="mt-2 font-serif text-3xl font-semibold text-white">
                Mapa del campo
              </h3>
            </div>
            <iframe
              title={`Mapa ${field.title}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                field.mapQuery,
              )}&output=embed`}
              className="h-[340px] w-full border-0 grayscale invert-[0.88] sepia-[0.18] saturate-[0.7]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>

        <ImageSlider images={field.gallery} title={field.title} />

        <EstanciaGallery field={field} />
      </div>
    </section>
  )
}

export default function Campos() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <section
        className="relative flex min-h-[78vh] items-end overflow-hidden bg-cover bg-center px-5 pb-16 pt-32 sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85')",
        }}
      >
        <Header />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,10,5,0.86)_0%,rgba(15,10,5,0.58)_48%,rgba(15,10,5,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-stone-950 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="border-l-2 border-[#b97947] pl-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e5c4a6]">
            Nuestros campos
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-none text-white sm:text-7xl">
            Dos territorios para vivir el campo argentino
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
            Entre Rios y Buenos Aires ofrecen escenarios distintos para armar
            experiencias de caza a medida, con logistica, guia y hospitalidad
            familiar.
          </p>
        </div>
      </section>

      {fields.map((field) => (
        <FieldSection key={field.title} field={field} />
      ))}

      <Footer />
    </main>
  )
}
