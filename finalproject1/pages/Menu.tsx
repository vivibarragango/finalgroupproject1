// pages/Menu.tsx
import React from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

const MenuPage = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3.00' },
    { name: 'Cappuccino', price: '$4.00' },
    { name: 'Latte', price: '$4.50' },
    { name: 'Mocha', price: '$4.75' },
    { name: 'Americano', price: '$3.50' },
    { name: 'Macchiato', price: '$3.75' },
    { name: 'Flat White', price: '$4.25' },
    { name: 'Iced Coffee', price: '$3.50' },
    { name: 'Iced Latte', price: '$4.50' },
    { name: 'Chai Latte', price: '$4.50' },
    // Add more menu items here
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Our Coffee Menu</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {menuItems.map((item, index) => (
          <Card key={index} isHoverable isPressable style={{ margin: '10px', width: '300px' }}>
            <CardBody style={{ padding: '20px' }}>
              <h4 style={{ margin: '0' }}>{item.name}</h4>
              <p style={{ margin: '5px 0 0 0' }}>{item.price}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
