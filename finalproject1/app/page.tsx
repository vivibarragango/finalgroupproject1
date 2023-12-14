import { HeroSection } from '@/components/HeroSection';
import { Reward } from '@/components/Reward';
import { Button } from '@nextui-org/react';
import Image from "next/legacy/image";

export default function Home() {
	return (
		<>
			<HeroSection />

			<Reward />
		</>
	);
}
