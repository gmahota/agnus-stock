import flags from '../../json/navbar-flags.json'
import Link from 'next/link'

const Countries = () => (
  <>
    <div className="dropdown-title">Selecione a Provincia</div>
    <div className="flex flex-wrap">
      {flags.map((item, i) => (
        <Link href="/" key={i}>
          <a className="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item">
            <span
              className={`text-base flag-icon flag-icon-${item.code}`}></span>
            <span>{item.name}</span>
          </a>
        </Link>
      ))}
    </div>
  </>
)

export default Countries
