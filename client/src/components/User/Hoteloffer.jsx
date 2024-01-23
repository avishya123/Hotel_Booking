import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 3, cols = 3) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

  const itemData = [
    {
      img: 'https://www.easemytrip.com/images/hotel-img/emtbook-23apr-lp2.png',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://www.easemytrip.com/images/hotel-img/grab20-28apr-mob2.png',
      title: 'Burger',
    },
    {
      img: 'https://www.easemytrip.com/images/hotel-img/international-hotel-lp6.png',
      title: 'Camera',
    },
    {
      img: 'https://gos3.ibcdn.com/480x400-1444644591.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://gos3.ibcdn.com/top-1549373953.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://gos3.ibcdn.com/top-1594655547.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://www.easemytrip.com/images/hotel-img/hotel-new-31may-sm2.png',
      title: 'Fern',
    },
    {
      img: 'https://i.pinimg.com/736x/84/a1/bc/84a1bcc7094769b6a31c86e39fe3d6e2.jpg',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/99744/mid_cheapest-hotel-booking-sites-book-8-best-hotel-sites-up-to-50-off2png.png',
      title: 'Tomato basil',
    },
    {
      img: 'https://www.hotelbookingoffer.com/wp-content/uploads/2022/05/Online-Hotel-Booking.png',
      title: 'Sea star',
    },
    {
      img: 'https://www.cleartrip.com/offers/sites/default/files/styles/destination-top/public/hotels_1.png?itok=AjeAPMnm',
      title: 'Bike',
      cols: 2,
    },
  ];
  export default function Hoteloffer() {
    return (
      <div>
        <ImageList
          sx={{ width: '100vw', height: 450, padding: '50px' }} // Adjust padding
          variant="quilted"
          cols={4}
          rowHeight={251}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%', height: '100%' }} // Adjust image width and height
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }