import { Box, Container, Typography, Stack, Button, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/variants';

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);

export default function LocationSection({ data }) {
  return (
    <Box id="location" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}
        >
          <Typography variant="h2" sx={{ mb: 1 }}>
            {data.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {data.reference}
          </Typography>
        </MotionBox>

        <Grid container spacing={4} alignItems="stretch">
          {/* Map */}
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                height: { xs: 280, md: '100%' },
                minHeight: { md: 380 },
              }}
            >
              <Box
                component="iframe"
                src={data.mapEmbedUrl}
                title="Ubicación del negocio"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                sx={{
                  width: '100%',
                  height: '100%',
                  border: 0,
                  display: 'block',
                }}
              />
            </MotionBox>
          </Grid>

          {/* Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionPaper
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              {/* Address */}
              <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 3 }}>
                <LocationOnIcon sx={{ color: '#F4C542', fontSize: 28, mt: 0.3 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1rem' }}>
                    Dirección
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {data.reference}
                  </Typography>
                </Box>
              </Stack>

              {/* Schedule */}
              <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 4 }}>
                <AccessTimeIcon sx={{ color: '#F4C542', fontSize: 28, mt: 0.3 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1rem' }}>
                    Horarios
                  </Typography>
                  {data.schedule.map((s, i) => (
                    <Typography key={i} variant="body2" color="text.secondary">
                      <strong>{s.days}:</strong> {s.hours}
                    </Typography>
                  ))}
                </Box>
              </Stack>

              {/* CTA */}
              <Button
                variant="contained"
                size="large"
                startIcon={<DirectionsIcon />}
                href={data.googleMapsLink}
                target="_blank"
                fullWidth
                sx={{
                  borderRadius: 50,
                  fontWeight: 700,
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  bgcolor: '#0D0D0D',
                  color: '#F4C542',
                  '&:hover': {
                    bgcolor: '#1A1A1A',
                  },
                }}
              >
                Abrir en Google Maps
              </Button>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
