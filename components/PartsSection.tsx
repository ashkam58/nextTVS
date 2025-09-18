
'use client'
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import parts from '../data/parts.json'

export default function PartsSection() {
  return (
    <section>
      <Typography variant="h5" sx={{mb:2}}>Genuine Parts (Popular)</Typography>
      <Grid container spacing={2}>
        {parts.map((p, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={3} className="anime-item">
            <Card>
              <CardMedia component="img" height="120" image={p.image} alt={p.name} />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700}>{p.name}</Typography>
                <Typography variant="body2" color="text.secondary">{p.desc}</Typography>
                <Typography variant="subtitle2" color="primary" sx={{mt:1}}>{p.price}</Typography>
                <Button sx={{mt:1}} href={`https://wa.me/917480012328?text=${encodeURIComponent('Mujhe ' + p.name + ' (SKU: ' + p.sku + ') chahiye.')}`}>
                  Enquire on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}
