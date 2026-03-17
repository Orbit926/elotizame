import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StadiumIcon from '@mui/icons-material/Stadium';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../animations/variants';

const iconMap = {
  Stadium: StadiumIcon,
  Celebration: CelebrationIcon,
  Business: BusinessIcon,
  Groups: GroupsIcon,
};

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);

export default function Events({ data, business }) {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessageEvents
  )}`;

  return (
    <Box
      id="events"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: '#0D0D0D',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,197,66,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}
        >
          <Typography
            variant="overline"
            sx={{
              color: '#F4C542',
              fontWeight: 700,
              letterSpacing: '0.15em',
              fontSize: '0.85rem',
              mb: 1,
              display: 'block',
            }}
          >
            {data.subtitle}
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 650,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            {data.description}
          </Typography>
        </MotionBox>

        <Grid container spacing={4} alignItems="center">
          {/* Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}
            >
              {data.images.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(244,197,66,0.15)',
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Evento ${index + 1}`}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: { xs: 200, sm: 280 },
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                </Box>
              ))}
            </MotionBox>
          </Grid>

          {/* Features + CTA */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Stack
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                spacing={2}
                sx={{ mb: 4 }}
              >
                {data.features.map((feature, i) => {
                  const IconComp = iconMap[feature.icon] || StadiumIcon;
                  return (
                    <MotionPaper
                      key={i}
                      variants={staggerItem}
                      elevation={0}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        bgcolor: 'rgba(255,255,255,0.05)',
                        borderRadius: 3,
                        border: '1px solid rgba(255,255,255,0.08)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: 'rgba(244,197,66,0.08)',
                          borderColor: 'rgba(244,197,66,0.2)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          bgcolor: 'rgba(244,197,66,0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <IconComp sx={{ color: '#F4C542', fontSize: 24 }} />
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ color: 'white', fontWeight: 600 }}
                      >
                        {feature.label}
                      </Typography>
                    </MotionPaper>
                  );
                })}
              </Stack>

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
                  px: 5,
                  py: 1.8,
                  fontSize: '1.05rem',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                  '&:hover': {
                    bgcolor: '#1DA851',
                    boxShadow: '0 6px 28px rgba(37,211,102,0.45)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                {data.ctaLabel}
              </Button>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
