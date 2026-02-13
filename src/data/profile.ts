export type SocialLink = {
  label: string;
  href: string;
  hint: string;
  icon: string;
};

export const profile = {
  name: "Enzo Bonomi",
  role: "Product Manager | Strategy, Tech & AI",
  tagline:
    "I build products with strategic clarity, document the process publicly, and mentor professionals who want sharper communication in global tech teams.",
  bio: "Product Manager focused on strategy, technology, and AI. I create honest content about product, career, and market dynamics for people who prefer practical thinking over formulas.",
  location: "Maringa, Brazil",
  focusAreas: [
    "Product strategy and experimentation",
    "AI-powered product discovery",
    "Content with practical product lessons",
    "Conversational English mentoring for tech"
  ],
  stats: [
    { value: "6+", label: "Years in digital products" },
    { value: "4", label: "Primary content channels" },
    { value: "100%", label: "Built around strategic execution" }
  ],
  socials: [
    {
      label: "Substack",
      href: "https://enzobonomi.substack.com/profile/posts",
      hint: "Long-form product writing",
      icon: "/assets/images/substacklogo.png"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/enzobonomi/",
      hint: "Building in public",
      icon: "/assets/images/linkedinlogo.png"
    },
    {
      label: "Twitter / X",
      href: "https://x.com/enzobonomi",
      hint: "Fast takes and experiments",
      icon: "/assets/images/xtwitterlogo.png"
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@enzo.bonomi",
      hint: "Closer conversations",
      icon: "/assets/images/youtubelogo.png"
    }
  ] as SocialLink[]
};
