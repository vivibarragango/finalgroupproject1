import React from 'react';
import { Link } from '@nextui-org/react';

const OutreachPrograms = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold my-4">Outreach Programs We Support</h1>

      <div className="my-4">
        <h2 className="text-xl font-semibold">1. City Youth Empowerment</h2>
        <p className="font-medium">Activity Title: &quot;Young Leaders Initiative&quot;</p>
        <p>Contact: <a href="mailto:a.thompson@cityyouth.org" className="text-blue-600">a.thompson@cityyouth.org</a></p>
        <p>Partnership Duration: Partnered since January 2020</p>
        <p>
          Description: This program focuses on empowering young individuals in urban areas through leadership training, educational workshops, and community service projects. Over the past three years, we&apos;ve seen remarkable growth in participants, with many going on to become positive change-makers in their communities. Our partnership has facilitated numerous workshops and mentorship programs, positively impacting hundreds of young lives.
        </p>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-semibold">2. Green Spaces Alliance</h2>
        <p className="font-medium">Activity Title: &quot;Urban Greening Movement&quot;</p>
        <p>Contact: <a href="mailto:c.rodriguez@greenspacesalliance.org" className="text-blue-600">c.rodriguez@greenspacesalliance.org</a></p>
        <p>Partnership Duration: Partnered since June 2018</p>
        <p>
          Description: Green Spaces Alliance works towards creating and maintaining green areas in urban neighborhoods, promoting environmental awareness, and providing community gardening opportunities. For five years, our collaboration has led to the development of over 30 community gardens, offering both a green refuge in the city and a space for educational environmental programs. These efforts have significantly enhanced local ecosystems and provided residents with a hands-on approach to environmental stewardship.
        </p>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-semibold">3. Health for All</h2>
        <p className="font-medium">Activity Title: &quot;Community Health Outreach&quot;</p>
        <p>Contact: <a href="mailto:b.kim@healthforall.org" className="text-blue-600">b.kim@healthforall.org</a></p>
        <p>Partnership Duration: Partnered since October 2019</p>
        <p>
          Description: Health for All aims to provide essential health education and services to underprivileged communities. Our partnership, now in its fourth year, has been instrumental in organizing health camps, vaccination drives, and educational seminars. We&apos;ve reached out to thousands of individuals, offering vital health resources and awareness, significantly improving community health standards. The program’s success is a testament to the power of collaborative effort in addressing critical health issues.
        </p>
      </div>
      <Link href="/" color="primary">Return to the main page</Link>
    </div>
  );
};

export default OutreachPrograms;
