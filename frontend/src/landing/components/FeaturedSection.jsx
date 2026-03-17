import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';
import FeaturedCard from '../cards/FeaturedCard';

const MotionBox = motion.create(Box);

export default function FeaturedSection({ data, business }) {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}
        >
          <Typography variant="h2" sx={{ mb: 1, color: 'white' }}>
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 500, mx: 'auto', color: 'rgba(255,255,255,0.6)' }}
          >
            {data.subtitle}
          </Typography>
        </MotionBox>

        {/* Featured Grid */}
        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <FeaturedCard item={item} whatsappUrl={whatsappUrl} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
