'use client'
import * as React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Container, IconButton, Modal } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const pages = [
  { label: 'Home', href: '/' },
  { label: 'Bikes', href: '/bikes' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  const navContainerRef = React.useRef<HTMLDivElement | null>(null)
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0, opacity: 0 })

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // set active indicator on mount / pathname change
  React.useEffect(() => {
    if (!navContainerRef.current) return

    const normalize = (p: string) => p.replace(/\/+$/g, '') || '/'
    const np = normalize(pathname || '/')

    const computeForIndex = (idx: number) => {
      const candidates = Array.from(navContainerRef.current!.querySelectorAll<HTMLElement>('[data-href]'))
      const el = candidates[idx]
      if (!el) return false
      const containerRect = navContainerRef.current!.getBoundingClientRect()
      const rect = el.getBoundingClientRect()
      setIndicator({ left: rect.left - containerRect.left, width: rect.width, opacity: 1 })
      return true
    }

    const activeIndex = pages.findIndex(pg => normalize(pg.href) === np)
    if (activeIndex >= 0) {
      if (computeForIndex(activeIndex)) {
        // recompute shortly after mount to handle layout/font shifts
        const tid = window.setTimeout(() => computeForIndex(activeIndex), 80)
        const onResize = () => computeForIndex(activeIndex)
        window.addEventListener('resize', onResize)
        return () => {
          window.clearTimeout(tid)
          window.removeEventListener('resize', onResize)
        }
      }
    }

    setIndicator(i => ({ ...i, opacity: 0 }))
  }, [pathname])

  React.useEffect(() => {
    const prev = document.body.style.overflow
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        mb: 2,
        transition: 'padding 200ms ease, background 200ms ease',
        paddingY: scrolled ? 0.5 : 1.5,
        background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}cc, ${theme.palette.primary.dark}99)`,
  zIndex: 1500,
        backdropFilter: 'saturate(120%) blur(6px)'
      }}
      elevation={scrolled ? 6 : 2}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
          <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', flex: '0 0 auto' }}>
            <img src="/hero/tlogo.png" alt="Tahalka TVS" height={scrolled ? 34 : 40} style={{ transition: 'height 180ms ease' }} />
            <Typography variant="h6" sx={{ ml: 1, fontWeight: 700, '&:hover': { opacity: 0.9 }, display: { xs: 'none', sm: 'block' } }}>Tahalka TVS · Begusarai</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, position: 'relative', ml: { xs: 0, md: 'auto' }, zIndex: 1300, pointerEvents: 'auto' }} ref={navContainerRef}>
            {pages.map(p => (
              <Button
                key={p.href}
                component={Link}
                href={p.href}
                color="inherit"
                data-href={p.href}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  if (!navContainerRef.current) return
                  const containerRect = navContainerRef.current.getBoundingClientRect()
                  const rect = el.getBoundingClientRect()
                  setIndicator({ left: rect.left - containerRect.left, width: rect.width, opacity: 1 })
                }}
                onMouseLeave={() => {
                  // restore to active route
                  const activeBtn = Array.from(navContainerRef.current?.querySelectorAll<HTMLElement>('[data-href]') || []).find(el => el.getAttribute('data-href') === pathname)
                  if (activeBtn && navContainerRef.current) {
                    const containerRect = navContainerRef.current.getBoundingClientRect()
                    const rect = activeBtn.getBoundingClientRect()
                    setIndicator({ left: rect.left - containerRect.left, width: rect.width, opacity: 1 })
                  } else {
                    setIndicator(i => ({ ...i, opacity: 0 }))
                  }
                }}
                sx={{ textTransform: 'none', transition: 'transform 120ms' , '&:hover': { transform: 'translateY(-2px)' } }}
              >
                {p.label}
              </Button>
            ))}

            {/* sliding underline indicator */}
            <Box sx={{ position: 'absolute', bottom: 6, left: indicator.left, width: indicator.width, height: 3, bgcolor: 'secondary.main', borderRadius: 2, transition: 'left 160ms ease, width 160ms ease, opacity 160ms', opacity: indicator.opacity }} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: { xs: 'auto', md: 0 }, zIndex: 1500, pointerEvents: 'auto' }}>
            <IconButton color="inherit" onClick={() => setOpen(!open)} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {/* Full-screen glass overlay menu (ported using MUI Modal to escape AppBar containing block) */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          slotProps={{
            backdrop: {
              sx: {
                backdropFilter: 'blur(6px) saturate(120%)',
                backgroundColor: 'rgba(10,12,20,0.35)',
              }
            }
          }}
          sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
        >
          <Box sx={{ outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', p: 2 }}>
            <div className={styles.overlayInner} role="dialog" aria-modal="true" data-open={open ? 'true' : 'false'}>
              <div className={styles.overlayHeader}>
                <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }} onClick={() => setOpen(false)}>
                  <img src="/hero/tlogo.png" alt="Tahalka TVS" height={36} style={{ marginRight: 12 }} />
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Tahalka TVS</Typography>
                </Box>
              </div>
              <div className={styles.overlayMenu}>
                {pages.map(p => (
                  <Link key={p.href} href={p.href} className={styles.overlayItem} onClick={() => setOpen(false)}>{p.label}</Link>
                ))}
              </div>
              <div className={styles.overlayFooter}>
                <a href="https://wa.me/917480012328" className={styles.overlayCTA}>WhatsApp Sales</a>
              </div>
            </div>
          </Box>
        </Modal>
      </Container>
    </AppBar>
  )
}
