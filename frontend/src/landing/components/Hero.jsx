import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { motion } from 'framer-motion';
import { heroText, heroImage, staggerContainer } from '../animations/variants';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionStack = motion.create(Stack);

export default function Hero({ data, business }) {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: { xs: '100vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        mt: { xs: '-64px', md: '-72px' },
        pt: { xs: '64px', md: '72px' },
      }}
    >
      {/* Background Image */}
      <MotionBox
        variants={heroImage}
        initial="hidden"
        animate="visible"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.75) 60%, rgba(13,13,13,0.92) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="md"
        sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: { xs: 6, md: 8 } }}
      >
        <MotionStack
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          spacing={3}
          alignItems="center"
        >
          {/* Badge */}
          {data.badge && (
            <MotionBox variants={heroText}>
              <Chip
                label={data.badge}
                sx={{
                  bgcolor: 'rgba(244,197,66,0.2)',
                  color: '#F4C542',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(244,197,66,0.3)',
                  px: 1,
                  height: 38,
                }}
              />
            </MotionBox>
          )}

          {/* Headline */}
          <MotionTypography
            variant="h1"
            variants={heroText}
            sx={{
              color: 'white',
              maxWidth: 750,
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              '& span': { color: '#F4C542' },
            }}
          >
            {data.headline}
          </MotionTypography>

          {/* Subheadline */}
          <MotionTypography
            variant="h6"
            variants={heroText}
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 400,
              maxWidth: 580,
              lineHeight: 1.7,
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            {data.subheadline}
          </MotionTypography>

          {/* CTAs */}
          <MotionStack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            variants={heroText}
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button
              variant="contained"
              color="success"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={whatsappUrl}
              target="_blank"
              sx={{
                borderRadius: 50,
                fontWeight: 700,
                px: { xs: 4, md: 5 },
                py: 1.8,
                fontSize: '1.1rem',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                '&:hover': {
                  boxShadow: '0 6px 28px rgba(37,211,102,0.45)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              {data.ctaPrimary.label}
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<RestaurantMenuIcon />}
              onClick={() => {
                const el = document.querySelector(data.ctaSecondary.href);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{
                borderRadius: 50,
                fontWeight: 600,
                px: { xs: 4, md: 5 },
                py: 1.8,
                fontSize: '1.05rem',
                color: '#F4C542',
                borderColor: 'rgba(244,197,66,0.5)',
                '&:hover': {
                  borderColor: '#F4C542',
                  bgcolor: 'rgba(244,197,66,0.1)',
                },
              }}
            >
              {data.ctaSecondary.label}
            </Button>
          </MotionStack>
        </MotionStack>
      </Container>
    </Box>
  );
}
