import { Box, Container, Stack, Typography, Paper } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../animations/variants';

const iconMap = {
  Schedule: ScheduleIcon,
  LocationOn: LocationOnIcon,
  LocalDining: LocalDiningIcon,
  Phone: PhoneIcon,
};

const MotionPaper = motion.create(Paper);

export default function QuickInfo({ data }) {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        bgcolor: 'background.dark',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ gap: { xs: 2, md: 3 } }}
        >
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ScheduleIcon;
            return (
              <MotionPaper
                key={index}
                variants={staggerItem}
                elevation={0}
                sx={{
                  flex: { xs: '1 1 calc(50% - 16px)', md: '1 1 0' },
                  minWidth: { xs: 140, md: 180 },
                  maxWidth: { xs: 'calc(50% - 8px)', md: 280 },
                  bgcolor: 'rgba(255,255,255,0.06)',
                  borderRadius: 3,
                  p: { xs: 2.5, md: 3 },
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <IconComponent
                  sx={{
                    fontSize: 32,
                    color: 'secondary.main',
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '0.7rem',
                    mb: 0.5,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                  }}
                >
                  {item.value}
                </Typography>
              </MotionPaper>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
