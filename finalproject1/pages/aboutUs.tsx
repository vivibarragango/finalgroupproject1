import React from 'react';
import { Link } from '@nextui-org/react';

const aboutUs = () => {
  return (
    <div className="container flex flex-col items-center justify-center p-20">
      <h1>Our Mission, Values, and Commitment</h1>

      <section className="text-left">
        <h2>Mission Statement</h2>
        <p>
          At Cafe Casero ViBi, our mission is to enrich communities by fostering environments where everyone feels welcome. As a New York City-based company, we are dedicated to extending the warmth of our coffee culture to every corner of the nation. We believe in creating spaces and products that resonate with the heart of community life – from our carefully crafted specialty drinks to our bulk-brew options designed for homes, offices, and community gatherings. Our vision is to be a beacon of community and warmth in every place we touch.
        </p>
      </section>

      <section className="text-left">
        <h2>Corporate Values</h2>
        <h3>The Essence of Home-Brewed Tradition</h3>
        <p>
          Cafe Casero ViBi is more than just a coffee company; it's a story of culture, tradition, and familial warmth. Co-founders Viviana and Bianco grew up in Hispanic households where coffee wasn't just a beverage; it was a ritual that brought families together and symbolized hospitality. This deep-rooted love for home-brewed coffee, passed down through generations, is the foundation of our corporate values.
        </p>

        <h3>Sharing Our Warmth with the World</h3>
        <p>
          Our aim is to share the love and warmth of our cultural heritage with the rest of the world. We believe in the power of coffee to connect people, transcend barriers, and create a sense of belonging. At Cafe Casero ViBi, every cup of coffee is an invitation to experience the comfort and joy of our shared human experience.
        </p>

        <h3>Building a Global Community</h3>
        <p>
          Viviana and Bianco are passionate about transcending their cultural heritage into a global culture, envisioning a world where we all form one shared community. This vision is at the core of our values, driving us to create coffee experiences that unite people across diverse backgrounds, fostering a sense of global unity and shared understanding.
        </p>
      </section>

      <section className="text-left">
        <h2>Sourcing Commitments</h2>
        <p>
          Cafe Casero ViBi is committed to responsible and ethical sourcing. We understand that great coffee starts with great beans, and great beans come from farmers who are treated fairly and work under sustainable conditions. Our sourcing commitments include:
        </p>
        <ul>
          <li><strong>Supporting Sustainable Practices:</strong> Partnering with farmers who employ sustainable farming methods to protect the environment.</li>
          <li><strong>Fair Compensation:</strong> Ensuring that our coffee growers are compensated fairly, supporting their livelihood and the well-being of their communities.</li>
          <li><strong>Quality and Transparency:</strong> Selecting the finest beans while maintaining transparency about their origins, ensuring that our customers know the story behind every cup.</li>
        </ul>
        <p>
          We're dedicated to making a positive impact – not just in the communities we serve directly, but also in the communities that grow our coffee. It's our promise to uphold these values and commitments as we continue to grow and serve.
        </p>
      </section>
      <Link href="/" color="primary">Return to the main page</Link>
    </div>
    
  );
};

export default aboutUs;
