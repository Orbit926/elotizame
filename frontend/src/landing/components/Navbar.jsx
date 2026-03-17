import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

const MotionAppBar = motion.create(AppBar);

export default function Navbar({ data, business }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 80 });

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <>
      <MotionAppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        sx={{
          background: trigger
            ? 'rgba(26, 26, 26, 0.95)'
            : 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(12px)',
          transition: 'background 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
            {/* Logo / Name */}
            <Typography
              variant="h6"
              component="a"
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                letterSpacing: '-0.01em',
              }}
            >
              {business.name}
            </Typography>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {data.links.map((link) => (
                <Button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    px: 2,
                    borderRadius: 2,
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="success"
                startIcon={<WhatsAppIcon />}
                href={whatsappUrl}
                target="_blank"
                sx={{
                  ml: 1,
                  borderRadius: 50,
                  fontWeight: 700,
                  px: 3,
                  textTransform: 'none',
                  boxShadow: '0 2px 12px rgba(37,211,102,0.3)',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
                  },
                }}
              >
                {data.ctaLabel}
              </Button>
            </Box>

            {/* Mobile Hamburger */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: 'none' }, color: 'white' }}
              aria-label="Abrir menú"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </MotionAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: 320,
            bgcolor: '#1A1A1A',
            color: 'white',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {data.links.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link.href)}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ px: 3, mt: 2 }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            fullWidth
            href={whatsappUrl}
            target="_blank"
            sx={{
              borderRadius: 50,
              fontWeight: 700,
              py: 1.5,
              fontSize: '1rem',
            }}
          >
            {data.ctaLabel}
          </Button>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
}
