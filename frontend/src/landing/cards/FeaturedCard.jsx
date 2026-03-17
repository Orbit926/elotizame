import { Card, CardMedia, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import { staggerItem } from '../animations/variants';

const MotionCard = motion.create(Card);

export default function FeaturedCard({ item, whatsappUrl }) {
  return (
    <MotionCard
      variants={staggerItem}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid rgba(244,197,66,0.25)',
        background: 'linear-gradient(145deg, #1A1A1A 0%, #141414 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 12px 40px rgba(244,197,66,0.15)',
          transform: 'translateY(-6px)',
          borderColor: 'rgba(244,197,66,0.5)',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="220"
          image={item.image}
          alt={item.name}
          loading="lazy"
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': { transform: 'scale(1.06)' },
          }}
        />
        {item.tag && (
          <Chip
            label={item.tag}
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              bgcolor: '#F4C542',
              color: '#0D0D0D',
              fontWeight: 700,
              fontSize: '0.8rem',
              px: 0.5,
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, fontSize: '1.15rem', color: 'white' }}>
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 2, lineHeight: 1.5, flexGrow: 1, color: 'rgba(255,255,255,0.6)' }}
        >
          {item.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, color: '#F4C542' }}
          >
            {item.price}
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="small"
            startIcon={<WhatsAppIcon />}
            href={whatsappUrl}
            target="_blank"
            sx={{
              borderRadius: 50,
              fontWeight: 600,
              textTransform: 'none',
              px: 2,
            }}
          >
            Pedir
          </Button>
        </Box>
      </CardContent>
    </MotionCard>
  );
}
