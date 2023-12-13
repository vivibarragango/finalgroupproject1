import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function Home() {
	return (

		<section className="hero">
			<div className="hero-content">
				<h1 className="hero-title">Catered to Your Preference: <br />Savor Our Soulful Coffee</h1>
				<p className="hero-description">
					We have cared for our coffee through its complete life-cycle, selecting and roasting
					the best coffee beans for your pleasure. Purchase a cup of coffee now and feel
					the warmth we have imbued into every cup. Join our community today!
				</p>
				<Button className="cta-button">
					Foster your Community
				</Button>
			</div>
			<div className="hero-image-container">
				<Image src="/hero.png" alt="Coffee Shop" layout="fill" objectFit="cover" />
			</div>
		
		</section>
	);
}
