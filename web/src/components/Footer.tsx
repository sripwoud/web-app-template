import { ExternalLink } from 'c/ExternalLink'
import { config } from 'l/config'
import { Github } from 'lucide-react'

export const Footer = () => (
  <footer style={{ textAlign: 'center' }}>
    <ExternalLink href={`https://github.com/sripwoud/${config.appName}`}>
      <Github size={20} />
    </ExternalLink>
  </footer>
)
