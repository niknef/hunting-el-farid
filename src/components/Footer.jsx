import { Link } from 'react-router-dom'

const footerLinks = {
  instagram: 'https://instagram.com/huntingelfarid',
  facebook: 'https://facebook.com/huntingelfarid',
  email: 'mailto:info@huntingelfarid.com',
  argentinaPhone: '+54 9 11 0000-0000',
  spainPhone: '+34 600 000 000',
}

export default function Footer() {
  return (
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
                Argentina: <br />
                {footerLinks.argentinaPhone}
              </a>
              <a
                href={`tel:${footerLinks.spainPhone.replaceAll(' ', '')}`}
                className="transition hover:text-[#e5c4a6]"
              >
                España: <br />
                {footerLinks.spainPhone}
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
  )
}
