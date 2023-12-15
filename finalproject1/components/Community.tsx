"use client";
import { Button } from '@nextui-org/react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


export const Community = () => {
	
	return (

		<>
            <section className="community-title-container">
                <h1 className="community-title font-head">Contribute to Your Community</h1>
            </section>
		<section className="community">
        
                   
                <div className="hero-content">
                <p className="hero-description font-column">
                        We have cared for our coffee through its complete life-cycle, selecting and roasting
                        the best coffee beans for your pleasure. Purchase a cup of coffee now and feel
                        the warmth we have imbued into every cup. Join our community today!
                    </p>
                    <Button className="cta-button font-column">
                        Foster your Community
                    </Button>
                </div>
			<div className="relative col-span-6 md:col-span-4">
				
				<Image
					src="/happy.png"
					width={617}
					height={358}
					alt="community picture"
						
				/>
			</div>

		</section>
		</>
	);
};
