
'use client'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Chip, Stack } from '@mui/material'
import Link from 'next/link'

export default function BikeCard({ bike }: { bike: any }) {
  return (
    <Card sx={{ height: '100%', display:'flex', flexDirection:'column' }}>
      <CardMedia component="img" height="180" image={bike.image} alt={bike.name} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>{bike.name}</Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap:'wrap', mb:1 }}>
          <Chip size="small" label={bike.engine} />
          <Chip size="small" label={bike.mileage} />
          <Chip size="small" label={bike.brake} />
        </Stack>
        <Typography variant="subtitle1" color="primary" fontWeight={700}>{bike.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={`/bikes/${bike.slug}`}>View Details</Button>
        <Button size="small" href={`https://wa.me/917319762328?text=${encodeURIComponent('Namaste, ' + bike.name + ' ke baare mein jankari chahiye. Price/EMI details bataiye.')}`} target="_blank">WhatsApp</Button>
      </CardActions>
    </Card>
  )
}
