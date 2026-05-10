import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Campos', href: '/campos' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Nosotros', href: '/#nosotros' },
]

const galleryItems = [
  {
    type: 'video',
    src: '/videos/campo-argentino.mp4.mp4',
    className: 'md:col-span-2 md:row-span-2',
  },
  { type: 'image', src: '/img/axis.jpg' },
  { type: 'image', src: '/img/chancho.jpg' },
  {
    type: 'video',
    src: '/videos/campo-argentino.mp4.mp4',
    className: 'md:row-span-2',
  },
  { type: 'image', src: '/img/bufalo.webp' },
  { type: 'image', src: '/img/liebre.jpg' },
  { type: 'image', src: '/img/antilopenegro.webp', className: 'md:col-span-2' },
  { type: 'image', src: '/img/carnero.jpg' },
  {
    type: 'video',
    src: '/videos/campo-argentino.mp4.mp4',
    className: 'md:col-span-2',
  },
  { type: 'image', src: '/img/cabrasalvaje.jpeg' },
  { type: 'image', src: '/img/cuatro%20cuernos.jpeg' },
  { type: 'image', src: '/img/paloma.jpeg' },
  { type: 'image', src: '/img/Perdiz.jpeg' },
  {
    type: 'video',
    src: '/videos/campo-argentino.mp4.mp4',
    className: 'md:col-span-2 md:row-span-2',
  },
  { type: 'image', src: '/img/axis.jpg' },
  { type: 'image', src: '/img/liebre.jpg' },
  { type: 'image', src: '/img/chancho.jpg', className: 'md:col-span-2' },
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
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

        <div className="hidden items-center gap-8 rounded-full border border-white/15 bg-black/30 px-6 py-3 text-sm text-stone-100 shadow-2xl shadow-black/10 backdrop-blur-md md:flex">
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

        <a
          href="#contacto"
          className="rounded-full border border-[#b97947]/70 bg-[#8f5531] px-5 py-3 text-sm font-semibold text-stone-50 shadow-xl shadow-black/20 transition hover:bg-[#a9693d]"
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default function Galeria() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <Header />

      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 lg:px-8">
        <div className="gallery-soft-pulse fixed left-1/2 top-24 h-px w-72 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b97947] to-transparent opacity-60" />

        <div className="gallery-page-grid mx-auto max-w-7xl">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.src}-${index}`}
              className={`gallery-page-item group relative overflow-hidden border border-white/10 bg-[#18110d] ${
                item.className ?? ''
              }`}
            >
              {item.type === 'video' ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-stone-950/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
