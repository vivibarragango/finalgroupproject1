import React from 'react';
import { Card, Spacer, Link } from '@nextui-org/react';

const Partnerships = () => {
  return (
    <div style={{ padding: '20px' }}>
        <Link href="/" color="primary">Return to the main page</Link>
      <h1>Our Valued Partnerships</h1>

      <Card>
        <h3>1. Green Earth Café</h3>
        <p><strong>Contact:</strong> <a href="mailto:j.smith@greenearthcafe.com">j.smith@greenearthcafe.com</a></p>
        <p><strong>Partnership Details:</strong> Collaborating on eco-friendly coffee sourcing and promoting sustainable farming practices. Together, we&apos;re working towards a greener coffee future.</p>
      </Card>
      <Spacer y={1} />

      <Card>
        <h3>2. Artisan Roasters</h3>
        <p><strong>Contact:</strong> <a href="mailto:l.johnson@artisanroasters.com">l.johnson@artisanroasters.com</a></p>
        <p><strong>Partnership Details:</strong> Jointly creating unique, small-batch coffee blends exclusive to our community, emphasizing quality and craftsmanship in coffee roasting.</p>
      </Card>
      <Spacer y={1} />

      <Card>
        <h3>3. Community Bridge</h3>
        <p><strong>Contact:</strong> <a href="mailto:m.brown@communitybridge.org">m.brown@communitybridge.org</a></p>
        <p><strong>Partnership Details:</strong> Working together to organize local community events and workshops, fostering stronger neighborhood bonds through shared coffee experiences.</p>
      </Card>
      <Spacer y={1} />

      <Card>
        <h3>4. TechBeans</h3>
        <p><strong>Contact:</strong> <a href="mailto:s.davis@techbeans.com">s.davis@techbeans.com</a></p>
        <p><strong>Partnership Details:</strong> Integrating innovative technology in coffee brewing and serving, bringing modern solutions to enhance our customer&apos;s coffee experience.</p>
      </Card>
      <Spacer y={1} />

      <Card>
        <h3>5. Caring Cup</h3>
        <p><strong>Contact:</strong> <a href="mailto:d.wilson@caringcup.com">d.wilson@caringcup.com</a></p>
        <p><strong>Partnership Details:</strong> For every pound of coffee purchased, Caring Cup donates 1/4lb of food to a local food bank, helping fight hunger in our community.</p>
      </Card>
      <Spacer y={1} />

      <Card>
        <h3>6. BrewBright Academy</h3>
        <p><strong>Contact:</strong> <a href="mailto:k.anderson@brewbrightacademy.com">k.anderson@brewbrightacademy.com</a></p>
        <p><strong>Partnership Details:</strong> Providing educational workshops and barista training sessions, focusing on skill development and coffee education within the community.</p>
      </Card>
      <Spacer y={1} />

      <Card>
        <h3>7. Harmony Health</h3>
        <p><strong>Contact:</strong> <a href="mailto:t.martinez@harmonyhealth.com">t.martinez@harmonyhealth.com</a></p>
        <p><strong>Partnership Details:</strong> Collaborating on health-conscious coffee options, including organic and alternative beverages, aligning coffee enjoyment with a healthy lifestyle.</p>
      </Card>
      <Spacer y={1} />
      <Link href="/" color="primary">Return to the main page</Link>
    </div>
  );
};

export default Partnerships;
