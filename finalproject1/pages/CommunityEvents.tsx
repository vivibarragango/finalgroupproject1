import React from 'react';
import { Card, Link } from '@nextui-org/react';

const CommunityEvents = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">In-Person Community Events in NYC</h1>

      <Card className="mb-4 p-4">
        <h3 className="font-semibold">Soup Kitchen Volunteering Day</h3>
        <p><strong>Date:</strong> April 20, 2024</p>
        <p><strong>Meet-up Time:</strong> 9:00 AM</p>
        <p><strong>Location:</strong> The Bowery Mission, 227 Bowery, New York, NY 10002</p>
        <p><strong>Description:</strong> Join us in giving back to the community by helping to prepare and serve meals to those in need. A wonderful opportunity to make a difference together.</p>
      </Card>

      <Card className="mb-4 p-4">
        <h3 className="font-semibold">Neighborhood Clean-Up Initiative</h3>
        <p><strong>Date:</strong> May 15, 2024</p>
        <p><strong>Meet-up Time:</strong> 10:00 AM</p>
        <p><strong>Location:</strong> Riverside Park, New York, NY 10024</p>
        <p><strong>Description:</strong> Spend a day outdoors beautifying our beloved Riverside Park. This event is a great way to connect with nature and fellow community members.</p>
      </Card>

      <Card className="mb-4 p-4">
        <h3 className="font-semibold">Community Advocacy Workshop</h3>
        <p><strong>Date:</strong> June 10, 2024</p>
        <p><strong>Meet-up Time:</strong> 1:00 PM</p>
        <p><strong>Location:</strong> New York Public Library - Stephen A. Schwarzman Building, 476 5th Ave, New York, NY 10018</p>
        <p><strong>Description:</strong> Learn and discuss how to effectively advocate for community issues. This workshop is designed to empower and inspire active community involvement.</p>
      </Card>

      <Card className="mb-4 p-4">
        <h3 className="font-semibold">Local Artisan Coffee Fair</h3>
        <p><strong>Date:</strong> July 30, 2024</p>
        <p><strong>Meet-up Time:</strong> 11:00 AM</p>
        <p><strong>Location:</strong> Brooklyn Expo Center, 72 Noble St, Brooklyn, NY 11222</p>
        <p><strong>Description:</strong> Celebrate local coffee culture with us. Meet coffee artisans, enjoy tastings, and immerse yourself in the vibrant local coffee community.</p>
      </Card>

      <h1 className="text-2xl font-bold mb-4 mt-8">Online Events Hosted via Zoom</h1>

      <Card className="mb-4 p-4">
        <h3 className="font-semibold">Virtual Game Night</h3>
        <p><strong>Date:</strong> February 10, 2024</p>
        <p><strong>Description:</strong> Join us for a fun-filled evening of online games. A great way to unwind and connect with fellow coffee enthusiasts.</p>
        <p><strong>Zoom Details:</strong> TBD</p>
      </Card>

      <Card className="mb-4 p-4">
        <h3 className="font-semibold">Spoken Word Night</h3>
        <p><strong>Date:</strong> February 24, 2024</p>
        <p><strong>Description:</strong> Experience the power of words at our spoken word event. Share your poems or listen to others in this inspiring virtual gathering.</p>
        <p><strong>Zoom Details:</strong> TBD</p>
      </Card>

      <Card className="mb-4 p-4">
        <h3 className="font-semibold">Coffee Chat Night</h3>
        <p><strong>Date:</strong> March 15, 2024</p>
        <p><strong>Description:</strong> A casual evening of conversation and coffee talk. Share your favorite brews, coffee tips, or just enjoy the company.</p>
        <p><strong>Zoom Details:</strong> TBD</p>
      </Card>
      <Link href="/" color="primary">Return to the main page</Link>
    </div>
  );
};

export default CommunityEvents;
