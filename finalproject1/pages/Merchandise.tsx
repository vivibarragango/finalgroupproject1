import React from 'react';
import { Card, CardBody, Link } from '@nextui-org/react';

const MerchandisePage = () => {
  const merchandiseItems = [
    { name: 'Branded T-Shirts', price: '$20.00', imageSrc: '/tshirt.png' },
    { name: 'Coffee Mugs', price: '$15.00', imageSrc: '/mug.png' },
    { name: 'Recipe Books', price: '$25.00', imageSrc: '/book.png' },
    { name: 'Specialty Hats', price: '$18.00', imageSrc: '/hat.png' }
    // Add more merchandise items as needed
  ];

  return (
    <div className="p-4" style={{ textAlign: 'center' }}>
      <h1 className="text-2xl font-bold text-center mb-4">Our Merchandise</h1>
      <div className="flex flex-wrap justify-center">
        {merchandiseItems.map((item, index) => (
          <Card key={index} isHoverable isPressable className="m-2 w-72">
            <CardBody className="flex items-center space-x-4 p-4">
              <img src={item.imageSrc} alt={item.name} className="h-16 w-16 object-cover" />
              <div>
                <h4 className="m-0 text-lg font-semibold">{item.name}</h4>
                <p className="m-0">{item.price}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Link href="/" color="primary">Return to the main page</Link>
    </div>
  );
};

export default MerchandisePage;
