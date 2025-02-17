import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Header } from 'c/Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '98vh',
      }}
    >
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <ReactQueryDevtools />
      <TanStackRouterDevtools position='bottom-left' />
      <Footer />
    </div>
  )
}
