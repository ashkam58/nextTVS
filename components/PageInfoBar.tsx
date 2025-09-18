'use client'

import { usePathname } from 'next/navigation'
import { Box, Chip, Typography } from '@mui/material'

const infoMap: Record<string, { title: string; desc: string }> = {
  '/': { title: 'Home', desc: 'Begusarai ka trusted TVS showroom — nayi bikes, offers, aur service booking yahan milega.' },
  '/bikes': { title: 'Bikes', desc: 'TVS ki popular bikes yahan dekho — test ride, price aur variants ki jaankari.' },
  '/contact': { title: 'Contact', desc: 'Contact details aur showroom timing. Call ya WhatsApp se appointment book karo.' },
  '/services': { title: 'Service', desc: 'TVS authorised service centre — service booking, genuine parts, aur service offers.' }
}

export default function PageInfoBar() {
  const pathname = usePathname() || '/'
  const info = infoMap[pathname] ?? { title: 'Page', desc: 'Yahan page ke baare mein choti jaankari milegi.' }

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 1, px: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Chip label={info.title} color="primary" />
      <Typography variant="body2" color="text.secondary">{info.desc}</Typography>
    </Box>
  )
}
