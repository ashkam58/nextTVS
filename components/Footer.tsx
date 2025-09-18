
import { Container, Stack, Typography, Link as MLink } from '@mui/material'

export default function Footer() {
  return (
    <footer style={{background:'#0d47a1', color:'#fff', marginTop: 48}}>
      <Container maxWidth="lg" style={{padding: '24px 0'}}>
        <Stack direction={{xs:'column', sm:'row'}} spacing={2} justifyContent="space-between" alignItems="center">
          <Typography variant="body2">© {new Date().getFullYear()} Tahalka TVS · NH-28, Teghra Chowk, Begusarai, Bihar-851133</Typography>
          <Typography variant="body2">
            Sales: <MLink href="https://wa.me/917319762328" color="inherit">+91 7319762328</MLink> ·
            Service: <MLink href="https://wa.me/917480012328" color="inherit">+91 7480012328</MLink>
          </Typography>
        </Stack>
      </Container>
    </footer>
  )
}
