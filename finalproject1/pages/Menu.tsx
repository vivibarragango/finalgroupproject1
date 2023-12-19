// pages/Menu.tsx
import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMugHot, faCoffee, faCocktail, faLeaf, 
  faWineBottle, faGlassWhiskey, faBlender, faIceCream
} from '@fortawesome/free-solid-svg-icons';

const MenuPage = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3.00', icon: faCoffee },
    { name: 'Cappuccino', price: '$4.00', icon: faMugHot },
    { name: 'Latte', price: '$4.50', icon: faMugHot },
    { name: 'Mocha', price: '$4.75', icon: faGlassWhiskey },
    { name: 'Americano', price: '$3.50', icon: faCoffee },
    { name: 'Macchiato', price: '$3.75', icon: faCoffee },
    { name: 'Flat White', price: '$4.25', icon: faCoffee },
    { name: 'Iced Coffee', price: '$3.50', icon: faCocktail },
    { name: 'Iced Latte', price: '$4.50', icon: faCocktail },
    { name: 'Chai Latte', price: '$4.50', icon: faLeaf },
    { name: 'Hot Chocolate', price: '$4.00', icon: faMugHot },
    { name: 'Green Tea', price: '$3.00', icon: faLeaf },
    { name: 'Black Tea', price: '$3.00', icon: faLeaf },
    { name: 'Herbal Tea', price: '$3.00', icon: faLeaf },
    { name: 'Lemonade', price: '$3.50', icon: faWineBottle },
    { name: 'Iced Tea', price: '$3.50', icon: faIceCream },
    // Add more menu items here
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Our Coffee Menu</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {menuItems.map((item, index) => (
          <Card key={index} isHoverable isPressable style={{ margin: '10px', width: '300px' }}>
            <CardBody style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={item.icon} size="2x" />
              <div>
                <h4 style={{ margin: '0' }}>{item.name}</h4>
                <p style={{ margin: '0' }}>{item.price}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
