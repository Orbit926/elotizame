import { Box, Container, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../animations/variants';

const iconMap = {
  EmojiEvents: EmojiEventsIcon,
  Favorite: FavoriteIcon,
  Restaurant: RestaurantIcon,
  Star: StarIcon,
};

const MotionBox = motion.create(Box);

export default function AboutBusiness({ data }) {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              }}
            >
              <Box
                component="img"
                src={data.image}
                alt={data.title}
                sx={{
                  width: '100%',
                  height: { xs: 280, md: 420 },
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </MotionBox>
          </Grid>

          {/* Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  mb: 1,
                  display: 'block',
                }}
              >
                {data.subtitle}
              </Typography>
              <Typography variant="h2" sx={{ mb: 2 }}>
                {data.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.8 }}
              >
                {data.description}
              </Typography>

              {/* Highlights */}
              <Stack
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                direction="row"
                flexWrap="wrap"
                sx={{ gap: 2 }}
              >
                {data.highlights.map((h, i) => {
                  const IconComp = iconMap[h.icon] || StarIcon;
                  return (
                    <MotionBox
                      key={i}
                      variants={staggerItem}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: 'background.warm',
                        px: 2,
                        py: 1,
                        borderRadius: 50,
                      }}
                    >
                      <IconComp sx={{ fontSize: 20, color: 'secondary.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                        {h.label}
                      </Typography>
                    </MotionBox>
                  );
                })}
              </Stack>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
