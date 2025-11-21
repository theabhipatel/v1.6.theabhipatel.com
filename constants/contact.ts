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
  email: "contact@theabhipatel.com",

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
      url: "https://twitter.com/theabhipatel",
      icon: "🐦",
    },
    {
      platform: "Dev.to",
      url: "https://dev.to/theabhipatel",
      icon: "📝",
    },
    {
      platform: "Stack Overflow",
      url: "https://stackoverflow.com/users/theabhipatel",
      icon: "📚",
    },
  ],
};
