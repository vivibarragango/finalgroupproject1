export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Cafe Casero ViBi – Coffee that cares for you.",
	description: "Come and join our active community and let us care for you with $10 off your next order.",
	navItems: [
		{
			label: "Menu",
			href: "/",
		},
    {
      label: "Rewards",
      href: "#reward",
    },
    {
      label: "Community",
      href: "/Community",
    },
    {
      label: "About us",
      href: "/about us",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
