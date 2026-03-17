import { Box, Container, Typography, Stack, IconButton, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/variants';

const MotionBox = motion.create(Box);

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: MusicNoteIcon,
};

export default function Footer({ data, business }) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.dark',
        color: 'white',
        py: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{ textAlign: 'center' }}
        >
          {/* Business Name */}
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.01em' }}
          >
            {business.name}
          </Typography>

          {/* Tagline */}
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.6)', mb: 3 }}
          >
            {data.tagline}
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
            {Object.entries(business.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              if (!Icon || !url) return null;
              return (
                <IconButton
                  key={platform}
                  href={url}
                  target="_blank"
                  aria-label={platform}
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    '&:hover': {
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Icon />
                </IconButton>
              );
            })}
          </Stack>

          {/* Nav Links */}
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 3 }}
          >
            {data.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="none"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  '&:hover': { color: 'white' },
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          {/* Divider */}
          <Box
            sx={{
              width: 60,
              height: 2,
              bgcolor: 'rgba(255,255,255,0.1)',
              mx: 'auto',
              mb: 3,
              borderRadius: 1,
            }}
          />

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}
          >
            {data.copyright}
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
}
