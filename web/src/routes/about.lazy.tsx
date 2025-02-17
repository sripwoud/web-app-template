import { createLazyFileRoute } from '@tanstack/react-router'
import { BarLoader as pendingComponent } from 'react-spinners'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
  pendingComponent,
})

function RouteComponent() {
  return <div>Hello "/about"!</div>
}
