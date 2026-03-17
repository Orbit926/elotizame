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
        border: '2px solid',
        borderColor: 'secondary.light',
        background: 'linear-gradient(145deg, #FFFFFF 0%, #FFF8E1 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 12px 40px rgba(255,143,0,0.15)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.name}
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
              bgcolor: 'secondary.main',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.8rem',
              px: 0.5,
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, fontSize: '1.15rem' }}>
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.5, flexGrow: 1 }}
        >
          {item.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, color: 'primary.main' }}
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
