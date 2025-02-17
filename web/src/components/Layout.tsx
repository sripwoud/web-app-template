import { Outlet } from '@tanstack/react-router'
import { ReactQueryDevtools, TanStackRouterDevtools } from 'c/DevTools'
import { Footer } from 'c/Footer'
import { Header } from 'c/Header'

export function Layout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
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
