export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  socialLinks: SocialLink[];
}

export const contactInfo: ContactInfo = {
  email: "theabhipatel.co@gmail.com",

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/theabhipatel",
      icon: "🐙",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/theabhipatel",
      icon: "💼",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/theabhipatelx",
      icon: "🐦",
    },
  ],
};
