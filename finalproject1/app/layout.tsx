import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import UserTable from "@/components/UserTable";
import NewsLetter from "@/components/NewsLetter";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],	
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<GoogleAnalytics GA_MEASUREMENT_ID='G-HZXPDQQ44G'/>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<hr className="border-black border-2" />

						<main className="light text-foreground bg-background container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}							
						</main>
						<footer className="dark text-foreground bg-background w-full flex items-center justify-center py-3">
							<UserTable />
							<NewsLetter />
						</footer>
					</div>
					<CookieBanner/>
				</Providers>
				
			</body>
		</html>
	);
}
