import React from 'react';
import './Experience.css';
import { useInView } from 'react-intersection-observer';

const experiences = [
  { id: 1, imageUrl: 'https://i.postimg.cc/gJ4xcWGR/pexels-whitekraw-3133929.jpg' },
  { id: 2, imageUrl: 'https://i.postimg.cc/Fs5MFJny/water-fall-4579771_1280.jpg' },
  { id: 3, imageUrl: 'https://i.postimg.cc/KY2S93tc/Screenshot_2025-03-02_134248.png' },
  { id: 4, imageUrl: 'https://i.postimg.cc/fbf41Wvc/woman-5526487_1280.jpg' },
  { id: 5, imageUrl: 'https://i.postimg.cc/cC8FyXNp/pexels-jonastogo-2907196.jpg' },
  { id: 6, imageUrl: 'https://i.postimg.cc/ncZX5xDn/woman-taking-photo-morning-mist-phu-lang-ka-phayao-thailand_335224-950.jpg' },
  { id: 7, imageUrl: 'https://i.postimg.cc/jSGNBtjS/pexels-srkportraits-10710561.jpg' },
  { id: 8, imageUrl: 'https://i.postimg.cc/pVYZ8hLY/pexels-freestockpro-321542.jpg' },
  { id: 9, imageUrl: 'https://i.postimg.cc/s2YB8W8T/pexels-elina-sazonova-4403903.jpg' },
  { id: 10, imageUrl: 'https://i.postimg.cc/XYc46gjB/pexels-iakub-arifulin-205356454-11675420.jpg' },
  { id: 11, imageUrl: 'https://i.postimg.cc/0jqVv72r/DJI_0456-1024x768.webp' },
  { id: 12, imageUrl: 'https://i.postimg.cc/xdcx304j/nature-3762842_1280.jpg' },
  { id: 13, imageUrl: 'https://i.postimg.cc/Pr788TYQ/pexels-esrageziyor-45760220-11495850.jpg' },
  { id: 14, imageUrl: 'https://i.postimg.cc/HWZrfdZ1/pexels-ariya-1318790-7331034.jpg' },
  { id: 15, imageUrl: 'https://i.postimg.cc/FRhfQRXN/pexels-chanaka-madushan-sugathadasa-271311-999068.jpg' },
  { id: 16, imageUrl: 'https://i.postimg.cc/02DVVWnm/Screenshot_2025-03-02_135625.png' },
  { id: 17, imageUrl: 'https://i.postimg.cc/66vQ1nvn/pexels-ashzathukorala-2378867.jpg' },
  { id: 18, imageUrl: 'https://i.postimg.cc/Fzcwg91k/anuradhapura-7475663_1280.jpg' },
  { id: 19, imageUrl: 'https://i.postimg.cc/J0Gz1H6V/pexels-kajanan-selvaranjan-9043042-6140761.jpg' },
  { id: 20, imageUrl: 'https://i.postimg.cc/c1gKyPVK/pexels-savindu-senevirathne-2100872112-30942047.jpg' },
  { id: 21, imageUrl: 'https://i.postimg.cc/cCXLWMMc/Screenshot_2025-03-02_135436.png' },
];

const Experience = () => {
  const { ref: galleryRef, inView: galleryInView } = useInView({
    threshold: 0.2, 
  });

  return (
    <div className="hm-experience bg-amber-50 p-4">
      <div className="home-section container mx-auto px-4">
        <div
          ref={galleryRef}
          className={`gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 auto-rows-[150px] ${
            galleryInView ? 'gallery-animate' : ''
          }`}
        >
          {experiences.map((experience, index) => {
            let rowSpan = 'row-span-1';
            let colSpan = 'col-span-1';

            if (index % 6 === 0) rowSpan = 'row-span-2';
            if (index % 5 === 0) colSpan = 'col-span-2';

            if (index === 18) {
              rowSpan = 'row-span-1';
              colSpan = 'col-span-1';
            }
            if (index === 19) {
              rowSpan = 'row-span-1';
              colSpan = 'col-span-1';
            }
            if (index === 20) {
              rowSpan = 'row-span-1';
              colSpan = 'col-span-2';
            }

            return (
              <div
                key={experience.id}
                className={`
                  gallery-item relative overflow-hidden rounded-lg shadow-md
                  ${rowSpan} ${colSpan}
                `}
              >
                <img
                  src={experience.imageUrl}
                  alt={`Experience ${experience.id}`}
                  className="w-full h-full object-cover min-w-full gallery-image"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;