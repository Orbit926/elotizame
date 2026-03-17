import { Fab, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useScrollTrigger } from '@mui/material';

export default function FloatingWhatsApp({ business }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <Zoom in={trigger}>
      <Fab
        href={whatsappUrl}
        target="_blank"
        aria-label="Contactar por WhatsApp"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 28 },
          right: { xs: 20, md: 28 },
          zIndex: 1200,
          bgcolor: '#25D366',
          color: 'white',
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          '&:hover': {
            bgcolor: '#1DA851',
            boxShadow: '0 6px 28px rgba(37,211,102,0.5)',
            transform: 'scale(1.08)',
          },
          transition: 'all 0.2s ease',
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    </Zoom>
  );
}
