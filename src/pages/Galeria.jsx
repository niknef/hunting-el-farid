import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const navItems = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Campos', href: '/campos' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Nosotros', href: '/#nosotros' },
]

const galleryItems = [
  {
    type: 'video',
    src: '/img/actualizadas/video1.mp4',
    poster: '/img/actualizadas/variado.jpeg',
    className: 'md:col-span-2 md:row-span-2',
  },
  { type: 'image', src: '/img/actualizadas/variado.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado1.jpeg' },
  {
    type: 'video',
    src: '/img/actualizadas/video2.mp4',
    poster: '/img/actualizadas/variado3.jpeg',
    className: 'md:row-span-2',
  },
  { type: 'image', src: '/img/actualizadas/variado2.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado3.jpeg' },
  {
    type: 'image',
    src: '/img/actualizadas/variado4.jpeg',
    className: 'md:col-span-2',
  },
  { type: 'image', src: '/img/actualizadas/variado5.jpeg' },
  {
    type: 'video',
    src: '/img/actualizadas/video3.mp4',
    poster: '/img/actualizadas/variado8.jpeg',
    className: 'md:col-span-2',
  },
  { type: 'image', src: '/img/actualizadas/variado6.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado7.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado8.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado9.jpeg' },
  {
    type: 'video',
    src: '/img/actualizadas/video4.mp4',
    poster: '/img/actualizadas/variado12.jpeg',
    className: 'md:col-span-2 md:row-span-2',
  },
  { type: 'image', src: '/img/actualizadas/variado10.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado11.jpeg' },
  {
    type: 'image',
    src: '/img/actualizadas/variado12.jpeg',
    className: 'md:col-span-2',
  },
  { type: 'image', src: '/img/actualizadas/variado13.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado14.jpeg' },
  {
    type: 'video',
    src: '/img/actualizadas/video5.mp4',
    poster: '/img/actualizadas/variado16.jpeg',
    className: 'md:row-span-2',
  },
  { type: 'image', src: '/img/actualizadas/variado15.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado16.jpeg' },
  {
    type: 'image',
    src: '/img/actualizadas/variado17.jpeg',
    className: 'md:col-span-2',
  },
  { type: 'image', src: '/img/actualizadas/variado18.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado19.jpeg' },
  { type: 'image', src: '/img/actualizadas/variado20.jpeg' },
  {
    type: 'image',
    src: '/img/actualizadas/entre-rios-slider1.jpeg',
    className: 'md:col-span-2',
  },
  { type: 'image', src: '/img/actualizadas/bs-as-slider-2.jpeg' },
  { type: 'image', src: '/img/actualizadas/entre-rios-slider4.jpeg' },
  {
    type: 'image',
    src: '/img/actualizadas/bs-as-slider-5.jpeg',
    className: 'md:row-span-2',
  },
  { type: 'image', src: '/img/actualizadas/entre-rios-slider7.jpeg' },
  { type: 'image', src: '/img/actualizadas/bs-as-slider-8.jpeg' },
  {
    type: 'image',
    src: '/img/actualizadas/entre-rios-slider9.jpeg',
    className: 'md:col-span-2',
  },
  { type: 'image', src: '/img/actualizadas/bs-as-slider-10.jpeg' },
  { type: 'image', src: '/img/actualizadas/estancia-entre-rios-3.jpeg' },
  {
    type: 'image',
    src: '/img/actualizadas/estancia-bs-as-4.jpeg',
    className: 'md:col-span-2',
  },
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
                  preload="metadata"
                  poster={item.poster}
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

      <Footer />
    </main>
  )
}
