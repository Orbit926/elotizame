import { useState } from 'react';
import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';
import MenuCard from '../cards/MenuCard';

const MotionBox = motion.create(Box);

export default function MenuSection({ items, categories }) {
  const [activeCategory, setActiveCategory] = useState('Todo');

  const filteredItems =
    activeCategory === 'Todo'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <Box id="menu" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}
        >
          <Typography
            variant="h2"
            sx={{ mb: 1, color: 'text.primary' }}
          >
            Nuestro Menú
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 500, mx: 'auto' }}
          >
            Elige tu favorito y pídelo directo por WhatsApp
          </Typography>
        </MotionBox>

        {/* Category Filters */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ mb: { xs: 4, md: 5 }, gap: 1 }}
        >
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              clickable
              onClick={() => setActiveCategory(cat)}
              sx={{
                fontWeight: 600,
                fontSize: '0.85rem',
                px: 1,
                bgcolor: activeCategory === cat ? '#0D0D0D' : 'transparent',
                color: activeCategory === cat ? '#F4C542' : 'text.secondary',
                border: '1.5px solid',
                borderColor: activeCategory === cat ? '#0D0D0D' : 'divider',
                '&:hover': {
                  bgcolor: activeCategory === cat ? '#1A1A1A' : 'rgba(0,0,0,0.04)',
                },
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </Stack>

        {/* Menu Grid */}
        <Grid
          container
          spacing={3}
        >
          {filteredItems.map((item) => (
            <Grid key={item.id} size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
              <MenuCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
