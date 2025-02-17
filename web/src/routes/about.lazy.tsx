import { createLazyFileRoute } from '@tanstack/react-router'
import { About as component } from 'c/About'
import { BarLoader as pendingComponent } from 'react-spinners'

export const Route = createLazyFileRoute('/about')({
  component,
  pendingComponent,
})
