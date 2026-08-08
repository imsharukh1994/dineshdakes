// Vite dynamic imports for images
const celebrityImagesRaw = import.meta.glob('../assets/celebrity/*.jpeg', { eager: true, query: '?url', import: 'default' });
const weddingImagesRaw = import.meta.glob('../assets/wedding/*.jpeg', { eager: true, query: '?url', import: 'default' });

const profileImageRaw = import.meta.glob('../assets/profile.jfif', { eager: true, query: '?url', import: 'default' });

export const profileImage = profileImageRaw?.default || Object.values(profileImageRaw)[0]?.default || Object.values(profileImageRaw)[0] || '';

export const celebrityImages = Object.values(celebrityImagesRaw).map(src => ({ src: src?.default || src, category: 'Celebrity' }));

export const weddingImages = Object.values(weddingImagesRaw).map(src => ({ src: src?.default || src, category: 'Wedding / On Set' }));

export const portfolioImages = [...celebrityImages, ...weddingImages];
export const siteContent = {
  artistName: "DINESH DAKE",
  artistTitle: "CELEBRITY MAKEUP & HAIR ARTIST",
  quote: "MAKEUP ISN’T ABOUT CHANGING WHO YOU ARE, IT’S ABOUT REVEALING THE BEST VERSION OF YOU.",
  bio: "",
  tagline: "Enhancing Beauty, Empowering Confidence.", 
  services: [
    { id: '01', title: "CELEBRITY", details: "" },
    { id: '02', title: "BRIDAL", details: "" },
    { id: '03', title: "FASHION", details: "" },
    { id: '04', title: "PARTY", details: "" }
  ],
  youtubeVideos: [
    { id: "SRppUOOVJV0", title: "7 August 2026" },
    { id: "cZJBwApqk2E", title: "9 March 2026" },
    { id: "y-ohtNHpmrA", title: "3 March 2026" },
    { id: "blGhf-fwuCE", title: "10 February 2026" }
  ],
  socialLinks: {
    instagram: "", // Provide URLs when available
    youtube: "https://www.youtube.com/@dineshdake1185",
    facebook: "",
    linkedin: ""
  },
  contactDetails: {
    email: "", // To be configured
    phone: "",
    whatsapp: ""
  }
};
