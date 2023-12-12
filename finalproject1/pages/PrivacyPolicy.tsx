import React from 'react';
import { Card, Spacer } from '@nextui-org/react';

const PrivacyPolicy: React.FC = () => {
  return (
    <Card className="m-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Privacy Policy for Cafe casero ViBi</h2>

      <h3 className="font-semibold">1. Introduction</h3>
      <p>
        This Privacy Policy outlines how Cafe casero ViBi collects, uses, and protects personal data when you use our website and the services provided. We are committed to respecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR).
      </p>
      <Spacer y={1} />

      <h3 className="font-semibold">2. Information We Collect</h3>
      <p>We may collect and process the following types of personal data:</p>
      <ul className="list-disc ml-6">
        <li>Usage Data: We collect information about how you interact with our website, including pages visited, time spent on the site, and other analytics data using Google Analytics.</li>
        <li>Device Information: We may collect information about your device, including the type of device, operating system, and browser used.</li>
        <li>IP Address: We may collect your IP address for security and monitoring purposes.</li>
      </ul>
      <Spacer y={1} />

      <h3 className="font-semibold">3. How We Use Your Data</h3>
      <p>We use the collected data for the following purposes:</p>
      <ul className="list-disc ml-6">
        <li>To improve and optimize our website's performance.</li>
        <li>To analyze user behavior and trends using Google Analytics.</li>
        <li>To prevent and address security issues.</li>
      </ul>
      <Spacer y={1} />

      <h3 className="font-semibold">4. Legal Basis for Processing</h3>
      <p>Our legal basis for processing personal data is based on your consent and our legitimate interest in improving our website and services.</p>
      <Spacer y={1} />

      <h3 className="font-semibold">5. Cookies</h3>
      <p>We use cookies to collect and store information. You can manage your cookie preferences through your browser settings.</p>
      <Spacer y={1} />

      <h3 className="font-semibold">6. Sharing Your Data</h3>
      <p>We do not sell or share your personal data with third parties for marketing purposes. We may share data with trusted service providers to help us improve our services.</p>
      <Spacer y={1} />

      <h3 className="font-semibold">7. Your Rights</h3>
      <p>You have the right to:</p>
      <ul className="list-disc ml-6">
        <li>Access your personal data.</li>
        <li>Correct inaccuracies in your personal data.</li>
        <li>Request the deletion of your personal data.</li>
        <li>Object to the processing of your personal data.</li>
      </ul>
      <Spacer y={1} />

      <h3 className="font-semibold">8. Security</h3>
      <p>We take appropriate measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
      <Spacer y={1} />

      <h3 className="font-semibold">9. Changes to the Privacy Policy</h3>
      <p>We may update this Privacy Policy to reflect changes in our practices or for legal reasons. Please review this page periodically.</p>
      <Spacer y={1} />

      <h3 className="font-semibold">10. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy or your personal data, please contact us at cafecaserovibi@gmail.com.</p>
    </Card>
  );
};

export default PrivacyPolicy;
