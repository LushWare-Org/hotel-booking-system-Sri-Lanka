import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const styles = `
  .slide-in {
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }
  .slide-in.in-view {
    transform: translateX(0);
    opacity: 1;
  }
  .slide-in:nth-child(1) {
    transition-delay: 0.1s;
  }
  .slide-in:nth-child(2) {
    transition-delay: 0.3s;
  }
  .slide-in:nth-child(3) {
    transition-delay: 0.5s;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const ImageGal = () => {
  const { ref: galleryRef, inView: galleryInView } = useInView({
    threshold: 0.2, 
    triggerOnce: false, 
  });

  return (
    <Grid
      container
      justifyContent="flex-end"
      item
      xs={8}
      sx={{ marginLeft: 50 }}
      ref={galleryRef} 
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ overflow: 'hidden' }}>
            <CardMedia
              component="img"
              sx={{ height: 150 }}
              image="https://i.postimg.cc/cCp009tw/pexels-kosta-18826653.jpg"
              alt="Image 1"
              className={`w-full h-full object-cover slide-in ${galleryInView ? 'in-view' : ''}`} 
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ overflow: 'hidden' }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              image="https://i.postimg.cc/CKx1v2Gx/pexels-thilina-alagiyawanna-3266092-30935687.jpg"
              alt="Image 2"
              className={`w-full h-full object-cover slide-in ${galleryInView ? 'in-view' : ''}`}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ overflow: 'hidden' }}>
            <CardMedia
              component="img"
              sx={{ height: 230 }}
              image="https://i.postimg.cc/25swdnWT/pexels-tomfisk-2739666.jpg"
              alt="Image 3"
              className={`w-full h-full object-cover slide-in ${galleryInView ? 'in-view' : ''}`}
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageGal;