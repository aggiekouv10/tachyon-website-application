import Link from 'next/link'

export function NavLink({ href, children, className }) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg py-1 px-2 text-sm  hover:bg-blue-400 hover:text-white ${className}`}
    >
      {children}
    </Link>
  )
}
