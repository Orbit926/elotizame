import { Box, Container, Typography, Button, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';

const MotionBox = motion.create(Box);
const MotionStack = motion.create(Stack);

export default function ContactCTA({ data, business }) {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <Box
      id="contact"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 12 },
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
          transform: 'scale(1.05)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(211,47,47,0.88) 0%, rgba(154,0,7,0.92) 100%)',
        }}
      />

      {/* Content */}
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <MotionStack
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          spacing={3}
          alignItems="center"
        >
          <MotionBox variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                mb: 1,
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              }}
            >
              {data.title}
            </Typography>
          </MotionBox>

          <MotionBox variants={fadeInUp}>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 400,
                maxWidth: 420,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {data.subtitle}
            </Typography>
          </MotionBox>

          <MotionStack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            variants={fadeInUp}
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={whatsappUrl}
              target="_blank"
              sx={{
                bgcolor: '#25D366',
                color: 'white',
                borderRadius: 50,
                fontWeight: 700,
                px: { xs: 4, md: 5 },
                py: 1.8,
                fontSize: '1.1rem',
                boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
                '&:hover': {
                  bgcolor: '#1DA851',
                  boxShadow: '0 6px 28px rgba(37,211,102,0.5)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              {data.whatsappLabel}
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              href={`tel:${business.phone}`}
              sx={{
                borderRadius: 50,
                fontWeight: 600,
                px: { xs: 4, md: 5 },
                py: 1.8,
                fontSize: '1.05rem',
                color: 'white',
                borderColor: 'rgba(255,255,255,0.6)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              {data.phoneLabel}
            </Button>
          </MotionStack>
        </MotionStack>
      </Container>
    </Box>
  );
}
