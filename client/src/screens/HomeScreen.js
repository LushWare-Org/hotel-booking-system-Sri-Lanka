import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import ImageGallery from '../components/Home/ImageGallery';
import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQAccordion from './FAQAccordion';
import ImageGal from '../components/Home/ImageGal';
import LiveChat from '../components/Home/LiveChat';
import Experience from '../components/Home/Experience';
import HomeExperience from '../components/Home/HomeExperience';
import OffersSection from '../components/Home/OffersSection';
import { useInView } from 'react-intersection-observer';

const styles = `
  .image-hover {
    transition: transform 0.5s ease, z-index 0s ease;
    overflow: hidden;
  }
  .image-hover::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: top 0.3s ease;
  }
  .image-hover:hover {
    transform: scale(1.1);
  }
  .image-hover:hover::after {
    top: 0;
  }

  .slide-left {
    transition: transform 1s ease-out, opacity 1s ease-out;
    transform: translateX(-100%);
    opacity: 0;
  }
  .slide-left.in-view {
    transform: translateX(0);
    opacity: 1;
  }

  .slide-up {
    transition: opacity 1s ease-out, transform 1s ease-out;
    opacity: 0;
    transform: translateY(20px);
  }
  .slide-up.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  .home-experience-container {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
  .home-experience-container.in-view {
    opacity: 1;
  }

  .banner {
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    transform: translateY(50px);
    opacity: 0;
  }
  .banner.in-view {
    transform: translateY(0);
    opacity: 1;
  }

  .image-1 {
    transition: transform 0.8s ease-out 0.1s, opacity 0.8s ease-out 0.1s;
    transform: translateX(-50px);
    opacity: 0;
  }
  .image-1.in-view {
    transform: translateX(0);
    opacity: 1;
  }

  .image-2 {
    transition: transform 0.8s ease-out 0.2s, opacity 0.8s ease-out 0.2s;
    transform: translateX(-50px);
    opacity: 0;
  }
  .image-2.in-view {
    transform: translateX(0);
    opacity: 1;
  }

  .image-3 {
    transition: transform 0.8s ease-out 0.3s, opacity 0.8s ease-out 0.3s;
    transform: translateX(-50px);
    opacity: 0;
  }
  .image-3.in-view {
    transform: translateX(0);
    opacity: 1;
  }

  .image-4 {
    transition: transform 0.8s ease-out 0.4s, opacity 0.8s ease-out 0.4s;
    transform: translateX(-50px);
    opacity: 0;
  }
  .image-4.in-view {
    transform: translateX(0);
    opacity: 1;
  }

  .faq-image {
    transition: transform 1s ease-out, opacity 1s ease-out;
    transform: translateX(-100px);
    opacity: 0;
  }
  .faq-image.in-view {
    transform: translateX(0);
    opacity: 1;
  }

  .learn-more-item {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .learn-more-item.in-view {
    opacity: 1;
    transform: translateY(0);
  }
  .learn-more-item:nth-child(1) {
    transition-delay: 0.1s;
  }
  .learn-more-item:nth-child(2) {
    transition-delay: 0.2s;
  }
  .learn-more-item:nth-child(3) {
    transition-delay: 0.3s;
  }
  .learn-more-item:nth-child(4) {
    transition-delay: 0.4s;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const HomeScreen = () => {
  const { ref: bannerRef, inView: bannerInView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { ref: imageGroupRef, inView: imageGroupInView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { ref: homeExperienceRef, inView: homeExperienceInView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { ref: faqImageRef, inView: faqImageInView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { ref: luxuriousEscapeRef, inView: luxuriousEscapeInView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { ref: galleryTitleRef, inView: galleryTitleInView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { ref: essenceRef, inView: essenceInView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { ref: learnMoreRef, inView: learnMoreInView } = useInView({ threshold: 0.2, triggerOnce: false }); 

  return (
    <div style={{ backgroundColor: '#FFF3E6' }}>
      <LiveChat />

      <Box bgcolor="#FFF3E6" padding="35px" minWidth="100vw" marginTop="1px">
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ position: 'relative', width: '45%', marginRight: '10px', marginLeft: '150px', marginTop: '20px' }}>
            <div
              ref={bannerRef}
              className={`banner ${bannerInView ? 'in-view' : ''}`}
              style={{
                position: 'absolute',
                top: '90px',
                left: '80px',
                width: '250px',
                height: '400px',
                backgroundColor: '#ff8c00',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px',
                zIndex: 1,
                border: '8px solid white',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
              onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
            >
              <h2
                style={{
                  fontFamily: 'Arial, sans-serif',
                  color: '#ffffff',
                  fontSize: '30px',
                  textAlign: 'left',
                  fontWeight: 'bold',
                  margin: '0 10px 20px 30px',
                }}
              >
                Welcome To The LushGlow Haven Resort
              </h2>
              <br />
              <a
                href="#"
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  color: '#ffffff',
                  backgroundColor: '#000000',
                  textDecoration: 'none',
                  borderRadius: '5px',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#a63c06')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#000000')}
              >
                EXPLORE US
              </a>
            </div>

            <div
              ref={imageGroupRef}
              style={{ position: 'relative', marginLeft: '170px', visibility: 'visible' }}
            >
              <div
                className={`image-hover image-1 ${imageGroupInView ? 'in-view' : ''}`}
                style={{
                  backgroundImage: "url('https://i.postimg.cc/QdSwqYNm/1489549275Ella_Jungle_Resort_14.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '240px',
                  height: '230px',
                  borderRadius: '5px',
                  border: '1.6px solid orange',
                  position: 'absolute',
                  top: '60px',
                  left: '-260px',
                }}
              />
              <div
                className={`image-hover image-2 ${imageGroupInView ? 'in-view' : ''}`}
                style={{
                  backgroundImage: "url('https://i.postimg.cc/tCJxTYZg/pexels-harsha-samaranayake-303340503-13391116.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '350px',
                  height: '400px',
                  borderRadius: '5px',
                  border: '1.6px solid orange',
                  position: 'absolute',
                  top: '0',
                  left: '80px',
                }}
              />
              <div
                className={`image-hover image-3 ${imageGroupInView ? 'in-view' : ''}`}
                style={{
                  backgroundImage: "url('https://i.postimg.cc/2ycLGfJm/pexels-freestockpro-322470.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '400px',
                  height: '220px',
                  borderRadius: '5px',
                  border: '1.6px solid orange',
                  position: 'absolute',
                  top: '410px',
                  left: '70px',
                }}
              />
              <div
                className={`image-hover image-4 ${imageGroupInView ? 'in-view' : ''}`}
                style={{
                  backgroundImage: "url('https://i.postimg.cc/6QXqd33n/pexels-senuscape-728360-1658967.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '290px',
                  height: '380px',
                  borderRadius: '5px',
                  border: '1.6px solid orange',
                  position: 'absolute',
                  top: '300px',
                  left: '-230px',
                }}
              />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ alignItems: 'center', marginLeft: '10px', marginRight: '80px' }}>
              <h2
                ref={luxuriousEscapeRef}
                className={`slide-up ${luxuriousEscapeInView ? 'in-view' : ''}`}
                style={{
                  marginTop: '40px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '43px',
                  color: '#000000',
                  textAlign: 'justify',
                  marginBottom: '10px',
                  fontWeight: 'bold',
                }}
              >
                LushGlow Haven Resort – <br /> Your Luxurious Escape.
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
                <p
                  style={{
                    marginTop: '20px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    lineHeight: '2.2',
                    color: 'rgb(58, 57, 62)',
                    textAlign: 'left',
                    margin: '0',
                  }}
                >
                  Nestled amidst enchanting, verdant landscapes, LushGlow Haven Resort invites you to immerse yourself in a sanctuary of unparalleled luxury and natural beauty. Our resort, bathed in the warm, golden glow of the sunlit hills and framed by the rich, earthy tones of brown and the deep shadows of black, offers a haven unlike any other. Located at a cool, comfortable elevation above sea level, LushGlow Haven Resort provides a refreshing escape, where diverse flora and fauna flourish under an average temperature of 21°C and a gentle breeze of 2 km/h, maintaining a soothing 67% humidity.
                  <br /><br />
                  Experience the perfect blend of elegance and wilderness as you unwind in our luxurious villas, each designed to capture the radiant essence of lush greenery and vibrant landscapes. From breathtaking hilltop views to tranquil spa treatments, our resort serves as your ideal launching pad for exploring the region’s wonders - embark on thrilling hikes, discover cascading waterfalls, and create memories that will last a lifetime.
                </p>
                <div
                  style={{
                    width: '2.2px',
                    minHeight: '520px',
                    background: 'linear-gradient(to top, #ca6702, #000000, #ff8c00)',
                    borderRadius: '1px',
                    flexShrink: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Box>

      <Box bgcolor="#FCECD8" padding="35px" minWidth="100vw" marginTop="1px">
        <Container>
          <Typography
            ref={essenceRef}
            className={`slide-up ${essenceInView ? 'in-view' : ''}`}
            variant="h3"
            component="div"
            fontFamily={'Arial, sans-serif'}
            fontSize={43}
            fontWeight={'bold'}
            textAlign={'center'}
            color={'#000000'}
            marginBottom={3}
          >
            <br />
            Experience the Essence of The LushGlow Haven Resort
          </Typography>
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="rgb(58, 57, 62)" marginBottom={3} align="justify" fontFamily='Arial, sans-serif' fontSize={16} lineHeight={2} marginLeft={-6}>
                "The LushGlow Haven Resort" is not just a hotel; it's an experience of refined elegance, unparalleled comfort, and exceptional service. Nestled in the heart of Colombo, The LushGlow Haven Resort stands as a beacon of sophistication, offering guests a haven of tranquility amidst the bustling cityscape. At The LushGlow Haven Resort, we pride ourselves on curating unforgettable experiences for our guests.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginRight: '-80px' }}>
                <Typography variant="body1" color="rgb(58, 57, 62)" marginBottom={3} align="justify" fontFamily='Arial, sans-serif' fontSize={16} lineHeight={2}>
                  For those in search of relaxation and rejuvenation, our spa and wellness facilities provide a sanctuary for restorative treatments and holistic therapies. Unwind with a blissful massage, take a dip in our sparkling pool, or invigorate your senses with a yoga session overlooking panoramic vistas. In addition to our exceptional accommodations and amenities, The LushGlow Haven Resort offers personalized concierge services to cater to your every need.
                </Typography>
                <div
                  style={{
                    width: '2.2px',
                    minHeight: '180px',
                    background: 'linear-gradient(to top, #ca6702, #000000, #ff8c00)',
                    borderRadius: '1px',
                    flexShrink: 0,
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <br />
        </Container>
      </Box>

      <Box
        ref={homeExperienceRef}
        className={`home-experience-container ${homeExperienceInView ? 'in-view' : ''}`}
        sx={{ minWidth: '100vw' }}
      >
        <HomeExperience inView={homeExperienceInView} />
      </Box>
      <br />

      <Box bgcolor="#ffffff" padding="30px" mt="30px" sx={{ width: '90%', position: 'relative', left: '80px', boxSizing: 'border-box' }}>
        <Typography variant="h3" component="div" textAlign={'center'} fontFamily={'Arial, sans-serif'} fontSize={43} fontWeight={'bold'}>
          Our Rooms
        </Typography>
        <br />
        <Typography variant="body1" color='rgb(58, 57, 62)' marginBottom={3} textAlign="justify" fontFamily="Arial, sans-serif" fontSize={16} lineHeight={2.2}>
          Experience unmatched comfort and luxury during your stay at The LushGlow Haven, where our range of rooms caters to every traveler's needs. From cozy retreats ideal for romantic getaways to spacious suites perfect for family vacations, each room is meticulously designed to offer a haven of tranquility amidst the bustling cityscape. Indulge in plush furnishings, state-of-the-art amenities, and breathtaking views of the surrounding landscape, ensuring a restful and rejuvenating stay. Whether you're seeking a serene escape or an adventure-filled retreat, our variety of rooms provide the perfect backdrop for an unforgettable experience, where every moment is crafted with care to ensure your utmost satisfaction.
        </Typography>
        <br />
        <ImageGallery />
      </Box>

      <br /><br />

      <OffersSection />

      <Box
        ref={learnMoreRef}
        bgcolor="#FCECD8"
        padding="40px"
        minWidth="100vw"
      >
        <Container>
          <Typography
            className={`learn-more-item ${learnMoreInView ? 'in-view' : ''}`}
            variant="h3"
            component="div"
            fontFamily={'Arial, sans-serif'}
            fontSize={43}
            fontWeight={'bold'}
            textAlign={'center'}
            color={'#000000'}
            marginBottom={3}
          >
            Learn More About The LushGlow Haven Resort
          </Typography>
          <Typography
            className={`learn-more-item ${learnMoreInView ? 'in-view' : ''}`}
            variant="body1"
            color="rgb(58, 57, 62)"
            marginBottom={3}
            align="justify"
            fontFamily='Arial, sans-serif'
            fontSize={16}
            lineHeight={2}
          >
            Experience unmatched comfort and luxury during your stay at The LushGlow Haven resort, where our range of rooms caters to every traveler's needs. From cozy retreats ideal for romantic getaways to spacious suites perfect for family vacations, each room is meticulously designed to offer a haven of tranquility amidst the bustling cityscape. Indulge in plush furnishings, state-of-the-art amenities, and breathtaking views of the surrounding landscape, ensuring a restful and rejuvenating stay. Whether you're seeking a serene escape or an adventure-filled retreat, our variety of rooms provide the perfect backdrop for an unforgettable experience, where every moment is crafted with care to ensure your utmost satisfaction.
          </Typography>
          <Button className={`learn-more-item ${learnMoreInView ? 'in-view' : ''}`}>
            Learn More
          </Button>
          <ImageGal />
          <br /><br />
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: '#FFF3E6',
          padding: '35px',
          minWidth: '100vw',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '10px',
        }}
      >
        <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '40%' }, height: 'auto' }}>
          <div
            ref={faqImageRef}
            className={`faq-image ${faqImageInView ? 'in-view' : ''}`}
            style={{
              backgroundImage: "url('https://i.postimg.cc/mgF1YJSf/pexels-freestockpro-321525.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '550px',
              borderRadius: '5px',
              border: '2px solid white',
            }}
          />
        </Box>

        <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '60%' } }}>
          <FAQAccordion />
        </Box>
      </Box>

      <Box bgcolor="#FFF3E6" padding="40px" minWidth='100vw'>
        <Container>
          <Typography
            ref={galleryTitleRef}
            className={`slide-up ${galleryTitleInView ? 'in-view' : ''}`}
            variant="h3"
            component="div"
            fontFamily={'Arial, sans-serif'}
            fontSize={46}
            fontWeight={'bold'}
            textAlign={'center'}
            color={'#000000'}
          >
            LushGlow Haven Resort Gallery
          </Typography>
        </Container>
      </Box>

      <Box style={{ alignItems: 'center', marginLeft: '15px', marginRight: '15px' }}>
        <Experience />
      </Box>
      <br /><br />
      <Footer />
    </div>
  );
};

export default HomeScreen;