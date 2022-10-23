import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-100 hover:bg-slate-400 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
