import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products] = useState([
    {
        id: 1,
        name: 'Hawaii',
        description: 'This is product 1',
        image:'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/8b/hawaii.jpg'
      },
      {
        id: 2,
        name: 'Las Vegas',
        description: 'This is product 2',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/06/73/ad/61/bigphotoforlas-vegas.jpg',
      },
      {
        id: 3,
        name: 'Cancun, Mexico',
        description: 'This is product 3',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/bd/cancun.jpg',
      },
      {
        id: 4,
        name: 'New York City',
        description: 'This is product 4',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
      },
      {
        id: 5,
        name: 'Caribbean',
        description: 'This is product 5',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/eb/07/3a/pitons.jpg',
      },
      {
        id: 6,
        name: 'Bali, Indonesia',
        description: 'This is product 6',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/8f/ubud.jpg',
      },
      {
        id: 7,
        name: 'Puerto Rico',
        description: 'This is product 7',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/24/5b/9d/la-guancha-ponce-pr.jpg',
      },
      {
        id: 8,
        name: 'Maldives',
        description: 'This is product 8',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/ce/maldives.jpg',
      },
      {
        id: 9,
        name: 'Costa Rica',
        description: 'This is product 9',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/28/3b/a6/costa-rica.jpg',
      },
      {
        id: 10,
        name: 'Paris, France',
        description: 'This is product 10',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/00/14/67/cb/the-louvre-inside-and.jpg',
      },
      {
        id: 11,
        name: 'Jamaica',
        description: 'This is product 11',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/a5/jamaica.jpg',
      },
      {
        id: 12,
        name: 'Greece',
        description: 'This is product 12',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/27/23/24/santorini-playa-roja.jpg',
      },
  ]);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
