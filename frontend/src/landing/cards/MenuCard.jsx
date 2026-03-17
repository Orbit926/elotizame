import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { staggerItem } from '../animations/variants';

const MotionCard = motion.create(Card);

export default function MenuCard({ item }) {
  return (
    <MotionCard
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'default',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          borderColor: 'rgba(244,197,66,0.3)',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="180"
          image={item.image}
          alt={item.name}
          loading="lazy"
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />
        {item.badge && (
          <Chip
            label={item.badge}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              bgcolor: '#F4C542',
              color: '#0D0D0D',
              fontWeight: 700,
              fontSize: '0.75rem',
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.3, flex: 1, mr: 1 }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: '#4CAF50',
              fontSize: '1.1rem',
              whiteSpace: 'nowrap',
            }}
          >
            {item.price}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}
        >
          {item.description}
        </Typography>
      </CardContent>
    </MotionCard>
  );
}
