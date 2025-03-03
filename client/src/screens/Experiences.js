import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Footer from '../components/Footer';

const Facilities = () => {

  const facilities = [
    { 
      id: 1,
      name: 'ATV Ride',
      image: 'https://i.postimg.cc/9FBzChXp/6.png',
      description: 'Gear up for an exhilarating off-road ride through rugged trails and breathtaking landscapes.'
    },
    { 
      id: 2,
      name: 'Flying Ravana Mega Zip Line',
      image: 'https://i.postimg.cc/ZqWq8v87/7.png',
      description: 'Soar like a bird over the breathtaking landscapes of Ella on Sri Lanka’s first-ever mega zipline!'
    },
    { 
      id: 3,
      name: 'Ravans Cave Blue Water Pond ',
      image: 'https://i.postimg.cc/5NJjh0Jy/12.png',
      description: 'Step into the legendary Ravana’s Cave, steeped in myth and history.'
    },

    { 
      id: 4,
      name: 'Ella Swing',
      image: 'https://i.postimg.cc/Gp6mq3zc/8.png',
      description: 'Feel the ultimate rush as you soar over breathtaking landscapes on the famous Ella Swing.'
    },
    { 
      id: 5,
      name: '9 Arches Bridge',
      image: 'https://i.postimg.cc/DZsyDVY1/9.png',
      description: 'Admire the iconic 9 Arches Bridge, a stunning colonial-era masterpiece set amidst lush greenery.'
    },
    { 
      id: 6,
      name: 'Chasing Waterfall Wonders',
      image: 'https://i.postimg.cc/6qX5xHDg/10.png',
      description: 'Discover the mesmerizing beauty of cascading waterfalls, where nature’s power meets tranquility.'
    },
    { 
      id: 7,
      name: 'Luxurious Accommodations',
      image: 'https://i.postimg.cc/jjVrjHrK/4.png',
      description: 'Provide an exquisite blend of comfort, style, and top-notch amenities.'
    },
    { 
      id: 8,
      name: 'Tea Plantation Tour',
      image: 'https://i.postimg.cc/P53xvQwv/11.png',
      description: 'A tea plantation tour offers a glimpse into the tea production process, from leaf picking to processing.'
    },
    { 
      id: 9,
      name: 'Nature Dining Experience',
      image: 'https://i.postimg.cc/QdxCMyHr/13.png',
      description: 'Offers a unique culinary experience set in natural surroundings, such as gardens, forests, or by the water.'
    }
    
  ];

  const handleFacilityClick = (facility) => {
    console.log(`Clicked facility: ${facility.name}`);
  };

  return (
    <div><br></br><br></br>
      <Grid container spacing={3} marginTop={'1px'} sx={{ paddingLeft: '80px', paddingRight: '80px' }}>
        {facilities.map((facility) => (
          <Grid item xs={12} sm={4} key={facility.id}>
            <Card sx={{ 
              '&:hover': {
                transform: 'scale(1.05)', 
                transition: 'transform 0.3s ease-in-out',
                boxShadow: 6,  
              }, 
              marginBottom: '16px', // Space between rows
            }}>
              <CardActionArea onClick={() => handleFacilityClick(facility)}>
                <CardMedia
                  component="img"
                  height="200"  
                  image={facility.image}
                  alt={facility.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" color= "#0A369D" align='center'>
                    {facility.name}
                  </Typography>
                  <Typography variant="body2" color="black" align='center'>
                    {facility.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid><br></br><br></br>

      <Footer />
    </div>
  );
};

export default Facilities;
