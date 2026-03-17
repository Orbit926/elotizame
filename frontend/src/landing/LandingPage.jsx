import { Box } from '@mui/material';
import landingContent from './data/landingContent';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import MenuSection from './components/MenuSection';
import FeaturedSection from './components/FeaturedSection';
import AboutBusiness from './components/AboutBusiness';
import LocationSection from './components/LocationSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function LandingPage() {
  const {
    business,
    navbar,
    hero,
    quickInfo,
    menuItems,
    menuCategories,
    featured,
    about,
    location,
    contactCTA,
    footer,
  } = landingContent;

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Navbar data={navbar} business={business} />
      <Hero data={hero} business={business} />
      <QuickInfo data={quickInfo} />
      <MenuSection items={menuItems} categories={menuCategories} />
      <FeaturedSection data={featured} business={business} />
      <AboutBusiness data={about} />
      <LocationSection data={location} />
      <ContactCTA data={contactCTA} business={business} />
      <Footer data={footer} business={business} />
      <FloatingWhatsApp business={business} />
    </Box>
  );
}
