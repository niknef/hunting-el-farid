import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Campos', href: '/campos' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Nosotros', href: '#nosotros' },
]

const services = [
  {
    title: 'Caza mayor y trofeos',
    description:
      'Salidas para cazadores que buscan ciervo axis, antilope negro, bufalo, carnero salvaje, cabra salvaje y cuatro cuernos.',
    image: '/img/axis.jpg',
  },
  {
    title: 'Caza de jabali',
    description:
      'Recorridas, esperas y estrategia de campo para una jornada intensa, segura y bien organizada.',
    image: '/img/chancho.jpg',
  },
  {
    title: 'Caza menor',
    description:
      'Jornadas dinamicas de paloma, perdiz y liebre para grupos, amigos y cazadores que disfrutan el ritmo del campo.',
    image: '/img/liebre.jpg',
  },
]

const species = [
  {
    name: 'Ciervo axis',
    type: 'Caza mayor',
    image: '/img/axis.jpg',
  },
  {
    name: 'Antilope negro',
    type: 'Caza mayor',
    image: '/img/antilopenegro.webp',
  },
  {
    name: 'Jabali',
    type: 'Caza mayor',
    image: '/img/chancho.jpg',
  },
  {
    name: 'Bufalo',
    type: 'Caza mayor',
    image: '/img/bufalo.webp',
  },
  {
    name: 'Carnero salvaje',
    type: 'Caza mayor',
    image: '/img/carnero.jpg',
  },
  {
    name: 'Cabra salvaje',
    type: 'Caza mayor',
    image: '/img/cabrasalvaje.jpeg',
  },
  {
    name: 'Cuatro cuernos',
    type: 'Caza mayor',
    image: '/img/cuatro%20cuernos.jpeg',
  },
  {
    name: 'Paloma',
    type: 'Caza menor',
    image: '/img/paloma.jpeg',
  },
  {
    name: 'Perdiz',
    type: 'Caza menor',
    image: '/img/Perdiz.jpeg',
  },
  {
    name: 'Liebre',
    type: 'Caza menor',
    image: '/img/liebre.jpg',
  },
]

const galleryMedia = [
  {
    type: 'video',
    src: '/videos/campo-argentino.mp4.mp4',
    title: 'Atardecer en el campo',
    featured: true,
  },
  {
    type: 'image',
    src: '/img/axis.jpg',
    title: 'Ciervo axis',
  },
  {
    type: 'image',
    src: '/img/chancho.jpg',
    title: 'Caza de jabali',
  },
  {
    type: 'image',
    src: '/img/bufalo.webp',
    title: 'Bufalo',
  },
  {
    type: 'image',
    src: '/img/liebre.jpg',
    title: 'Caza menor',
  },
  {
    type: 'image',
    src: '/img/antilopenegro.webp',
    title: 'Antilope negro',
  },
  {
    type: 'image',
    src: '/img/carnero.jpg',
    title: 'Carnero salvaje',
  },
  {
    type: 'image',
    src: '/img/paloma.jpeg',
    title: 'Paloma',
  },
]

const teamContacts = [
  {
    name: 'Gisela',
    phone: '+54 9 11 0000-0000',
    image: '/img/person-default.svg',
  },
  {
    name: 'Julian',
    phone: '+54 9 11 0000-0000',
    image: '/img/person-default.svg',
  },
  {
    name: 'Nicolas',
    phone: '+54 9 11 0000-0000',
    image: '/img/person-default.svg',
  },
]

const footerLinks = {
  instagram: 'https://instagram.com/huntingelfarid',
  facebook: 'https://facebook.com/huntingelfarid',
  email: 'mailto:info@huntingelfarid.com',
  argentinaPhone: '+54 9 11 0000-0000',
  spainPhone: '+34 600 000 000',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <section
        className="relative flex min-h-screen overflow-hidden bg-cover bg-center"
        
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          
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
              {navItems.map((item) =>
                item.href.startsWith('/') ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="transition hover:text-[#d3a06f]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[#d3a06f]"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </div>

            <a
              href="#contacto"
              className="rounded-full border border-[#b97947]/70 bg-[#8f5531] px-5 py-3 text-sm font-semibold text-stone-50 shadow-xl shadow-black/20 transition hover:bg-[#a9693d]"
            >
              Contacto
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-3xl pb-12 sm:pb-16">
            <p className="mb-5 inline-flex border-l-2 border-[#b97947] pl-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e5c4a6]">
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
              <Link
                to="/campos"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-stone-950 transition hover:bg-[#ead5c2]"
              >
                Conocer los campos
              </Link>
              <a
                href="#galeria"
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
              <p className="text-xs uppercase tracking-[0.26em] text-[#e5c4a6]">
                Campo
              </p>
              <h2 className="mt-3 font-serif text-2xl">Entre Rios</h2>
              <p className="mt-3 text-sm leading-6 text-stone-200/82">
                Monte, pastizales y baqueanos locales para una experiencia de
                caza con raiz litoraleña.
              </p>
            </article>
            <article className="border-b border-white/15 p-5 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-[0.26em] text-[#e5c4a6]">
                Campo
              </p>
              <h2 className="mt-3 font-serif text-2xl">Buenos Aires</h2>
              <p className="mt-3 text-sm leading-6 text-stone-200/82">
                Territorio amplio, accesible y pensado para combinar jornadas
                intensas con descanso.
              </p>
            </article>
            <article className="p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[#e5c4a6]">
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

      <section
        id="servicios"
        className="bg-[#120d09] px-5 py-24 text-stone-50 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="border-l-2 border-[#b97947] pl-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e5c4a6]">
                Servicios
              </p>
              <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
                Cacerias a medida en campos con gran variedad de especies
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-stone-300 lg:justify-self-end">
              En Hunting El Farid disenamos paquetes segun la necesidad, el
              nivel y el objetivo de cada cazador. Combinamos el campo indicado,
              guias, hospedaje, comidas y logistica para que cada salida se
              transforme en una experiencia de caza unica.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-stone-900"
              >
                <img
                  src={service.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,9,0.12)_0%,rgba(18,13,9,0.56)_46%,rgba(18,13,9,0.94)_100%)]" />
                <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-end p-6 sm:p-7">
                  <span className="mb-5 h-px w-14 bg-[#b97947]" />
                  <h3 className="font-serif text-3xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-stone-200/86">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 border border-white/10 bg-stone-950/55 p-6 text-center sm:p-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e5c4a6]">
                Paquetes personalizados
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold text-white">
                Vos nos decis que estas buscando. Nosotros armamos la salida.
              </h3>
            </div>
            <a
              href="#contacto"
              className="mx-auto mt-7 inline-flex items-center justify-center rounded-full bg-[#8f5531] px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#a9693d]"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-24 text-stone-50 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e5c4a6]">
              Especies en nuestros campos
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
              Variedad para planificar la salida correcta
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Cada especie pide una estrategia distinta. Por eso organizamos el
              paquete segun temporada, campo, modalidad y expectativa del
              cazador.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {species.map((item) => (
              <article
                key={item.name}
                className="group relative min-h-[300px] overflow-hidden border border-white/10 bg-[#18110d]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.08)_0%,rgba(12,10,9,0.34)_42%,rgba(12,10,9,0.92)_100%)]" />
                <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-end p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e5c4a6]">
                    {item.type}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                    {item.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="relative overflow-hidden bg-[#120d09] px-5 py-24 text-stone-50 sm:px-8 lg:px-10"
      >
        <div className="gallery-soft-pulse absolute left-1/2 top-16 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b97947] to-transparent opacity-70" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="border-l-2 border-[#b97947] pl-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e5c4a6]">
              Galeria
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Momentos del campo, la caza y la estancia
            </h2>
          </div>

          <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4 lg:auto-rows-[260px]">
            {galleryMedia.map((item, index) => (
              <article
                key={`${item.src}-${item.title}`}
                className={`group relative overflow-hidden border border-white/10 bg-stone-900 ${
                  item.featured
                    ? 'md:col-span-2 md:row-span-2'
                    : index === 5
                      ? 'md:col-span-2'
                      : ''
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
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.04)_0%,rgba(12,10,9,0.18)_45%,rgba(12,10,9,0.86)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-3 h-px w-10 bg-[#b97947] transition duration-500 group-hover:w-16" />
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e5c4a6]">
                    {item.type === 'video' ? 'Video' : 'Foto'}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="nosotros"
        className="relative overflow-hidden bg-cover bg-center px-5 py-24 text-stone-50 sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2200&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.94)_0%,rgba(18,13,9,0.82)_48%,rgba(18,13,9,0.42)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#120d09] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]  ">
            <div>
              <p className="border-l-2 border-[#b97947] pl-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e5c4a6]">
                Nosotros
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Una familia que vive la caza desde adentro
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-stone-200 lg:justify-self-end">
              Hunting El Farid nace de una forma simple de entender el campo:
              recibir bien, conocer cada rincon y compartir la pasion por la
              caza con quienes buscan algo mas que una salida. Somos una
              empresa familiar, apasionada por la naturaleza, la organizacion y
              los detalles que convierten una jornada en una experiencia que se
              recuerda. Cada cazador llega con una expectativa distinta; nuestro
              trabajo es escucharla, preparar el terreno y acompanarlo para que
              viva el campo argentino de una manera autentica, cuidada y unica.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {teamContacts.map((person) => (
              <article
                key={person.name}
                className="group overflow-hidden border border-white/10 bg-stone-950/60 backdrop-blur-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#1a120c]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e5c4a6]">
                    Contacto
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-white">
                    {person.name}
                  </h3>
                  <a
                    href={`tel:${person.phone.replaceAll(' ', '')}`}
                    className="mt-4 inline-flex text-sm font-semibold text-stone-200 transition hover:text-[#e5c4a6]"
                  >
                    {person.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="bg-[#120d09] px-5 py-24 text-stone-50 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="border-l-2 border-[#b97947] pl-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e5c4a6]">
              Contacto
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Contanos que experiencia queres vivir
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              Dejanos tus datos y un mensaje con la idea de caceria que estas
              buscando. Te contactamos para armar una propuesta a medida segun
              fechas, campo, especies y cantidad de cazadores.
            </p>
          </div>

          <form className="border border-white/10 bg-stone-950/55 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e5c4a6]">
                  Nombre
                </span>
                <input
                  type="text"
                  name="nombre"
                  autoComplete="given-name"
                  className="mt-3 w-full border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-stone-500 focus:border-[#b97947]"
                  placeholder="Tu nombre"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e5c4a6]">
                  Apellido
                </span>
                <input
                  type="text"
                  name="apellido"
                  autoComplete="family-name"
                  className="mt-3 w-full border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-stone-500 focus:border-[#b97947]"
                  placeholder="Tu apellido"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e5c4a6]">
                  Telefono
                </span>
                <input
                  type="tel"
                  name="telefono"
                  autoComplete="tel"
                  className="mt-3 w-full border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-stone-500 focus:border-[#b97947]"
                  placeholder="+54 9 ..."
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e5c4a6]">
                  Mail
                </span>
                <input
                  type="email"
                  name="mail"
                  autoComplete="email"
                  className="mt-3 w-full border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-stone-500 focus:border-[#b97947]"
                  placeholder="tu@email.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e5c4a6]">
                Mensaje de contacto
              </span>
              <textarea
                name="mensaje"
                rows="6"
                className="mt-3 w-full resize-none border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-stone-500 focus:border-[#b97947]"
                placeholder="Contanos fechas, cantidad de cazadores, especie de interes o cualquier detalle importante."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#8f5531] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#a9693d] sm:w-auto"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-stone-950 px-5 py-12 text-stone-300 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid size-12 place-items-center border border-white/25 bg-white/[0.04] text-sm font-semibold tracking-[0.22em]">
                HEF
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
                  Hunting
                </span>
                <span className="mt-1 text-xl font-serif text-stone-100">
                  El Farid
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-stone-400">
              Experiencias de caza a medida en campos de Entre Rios y Buenos
              Aires, con atencion familiar y logistica completa.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e5c4a6]">
                Redes
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href={footerLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#e5c4a6]"
                >
                  Instagram
                </a>
                <a
                  href={footerLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#e5c4a6]"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e5c4a6]">
                Mail
              </p>
              <a
                href={footerLinks.email}
                className="mt-4 inline-flex text-sm transition hover:text-[#e5c4a6]"
              >
                info@huntingelfarid.com
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e5c4a6]">
                Telefonos
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href={`tel:${footerLinks.argentinaPhone.replaceAll(' ', '')}`}
                  className="transition hover:text-[#e5c4a6]"
                >
                  Argentina: <br/>{footerLinks.argentinaPhone}
                </a>
                <a
                  href={`tel:${footerLinks.spainPhone.replaceAll(' ', '')}`}
                  className="transition hover:text-[#e5c4a6]"
                >
                  España: <br/>{footerLinks.spainPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Hunting El Farid</p>
          <p>Argentina y España</p>
        </div>
      </footer>
    </main>
  )
}
