import Link from 'next/link'

export default function SideBar() {
  return (
    <nav className="side-bar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/material">Material</Link>
        </li>
        <li>
          <Link href="/button">Button</Link>
        </li>
      </ul>
    </nav>
  )
}
