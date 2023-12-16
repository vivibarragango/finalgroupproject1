"use client";
import { Button } from '@nextui-org/react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


export const About = () => {
	
	return (

		<>
            <section className="community-title-container">
                <h1 className="community-title font-head">Contribute to Your Community</h1>
            </section>
            <section className="community">


                <div className="about-content">
                    <p className="about-description font-column">
                    Cafe Casero ViBi is focused on bettering all communities it partners with and is actively looking for every possible opportunity to branch out and create new sections of our national community. Cafe Casero ViBi is a NYC based company and focuses on delivering fostering environments that anyone can partake in. Cafe Casero ViBi has many products such as simple drip coffee ready-made for your consumption, specialty drinks made for your exact preferences, or bulk-brew products that allows us to bring the warmth from our roasters to your personal home/office/community. We look forward to servicing your community for you.
                    </p>
                    <Button className="cta-button font-column">
                        Our Active Partnerships
                    </Button>
                </div>
                <div className="relative col-span-6 md:col-span-4">

                    <Image
                        src="/about-image.png"
                        width={388}
                        height={466}
                        alt="about picture"
                        className='object-cover'

                    />
                </div>

            </section>
		</>
	);
};
