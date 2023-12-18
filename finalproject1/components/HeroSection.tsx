"use client";
import { Button } from '@nextui-org/react';
import Image from "next/legacy/image";
import {
	Modal, 
	ModalContent, 
	ModalHeader, 
	ModalBody, 
	ModalFooter
  } from "@nextui-org/react";

  import NewsLetter from "@/components/NewsLetter";

export const HeroSection = () => {
	
	return (
		<section className="hero">
			<div className="hero-content">
				<h1 className="hero-title font-head">Catered to Your Preference: <br />Savor Our Soulful Coffee</h1>
				<p className="hero-description font-column">
					We have cared for our coffee through its complete life-cycle, selecting and roasting
					the best coffee beans for your pleasure. Purchase a cup of coffee now and feel
					the warmth we have imbued into every cup. Join our community today!
				</p>
				<Button className="cta-button font-column">
					Foster your Community
				</Button>
			</div>
			<div className="hero-image-container">
				<Image src="/hero.png" alt="Coffee Shop" layout="fill" objectFit="cover" />
			</div>
		
		</section>
	);
};
