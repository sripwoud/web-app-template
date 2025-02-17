import { Link } from '@tanstack/react-router'
import { config } from 'l/config'

export function Header() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to='/'>
        <h1 className='text-xl font-bold'>{config.appName}</h1>
      </Link>
      <Link to='/state'>State</Link>
      <Link to='/users'>Users</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}
