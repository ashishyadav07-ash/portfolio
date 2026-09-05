export interface SocialLink {
  id: string;
  name: string;
  url: string;
  label: string;
  icon: string;
  isPrimary?: boolean;
}

export const socialsData: {
  email: string;
  location: string;
  resumeDownloadUrl?: string;
  links: SocialLink[];
} = {
  email: "ashishyadav71998@gmail.com",
  location: "Nashik, Maharashtra, India",
  links: [
    {
      id: "email",
      name: "Direct Email",
      url: "mailto:ashishyadav71998@gmail.com",
      label: "ashishyadav71998@gmail.com",
      icon: "Mail",
      isPrimary: true,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/ashishyadav71998",
      label: "linkedin.com/in/ashishyadav71998",
      icon: "Linkedin",
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/ashishyadav71998",
      label: "github.com/ashishyadav71998",
      icon: "Github",
    },
  ],
};
