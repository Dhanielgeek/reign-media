import ImageOne from '../assets/IMG_0755.jpeg'
import ImageTwo from '../assets/IMG_0812.png'
import ImageThree from '../assets/1.jpg'
import ImageFour from '../assets/IMG_0734.jpeg'
import ImageFive from '../assets/DSC00449.jpeg'
import ImageSix from '../assets/Massage service.jpg.jpeg'





export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Logos, colour systems, and visual languages built to make a brand instantly recognisable.",
      image: '/src/assets/DSC00671.JPG'
  },

  {
    number: "02",
    title: "Graphic Design",
    description:
      "Print and digital design that turns a message into something worth looking at twice.",
      image: '/src/assets/Massage service.jpg.jpeg'
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Consistent, on-brand presence across platforms, planned and managed end to end.",
      image: '/src/assets/IMG_0812.png'
  },
  {
    number: "04",
    title: "Content Creation",
    description:
      "Scroll-stopping content built around a brand's voice, audience, and goals.",
      image: '/public/IMG_0815.png'
  },
  {
    number: "05",
    title: "Photography",
    description:
      "Product, portrait, and lifestyle photography that gives a brand its own visual signature.",
      image: '/public/IMG_0816.png'
  },
  {
    number: "06",
    title: "Videography",
    description:
      "From concept to final cut — brand films, adverts, and social-first video.",
      image: '/public/IMG_0817.png'
  },
  {
    number: "07",
    title: "Digital Marketing",
    description:
      "Strategy-led campaigns focused on reach, engagement, and measurable growth.",
      image: '/public/IMG_0818.png'
  },
];

export const portfolioItems = [
  { id: 1, category: "Photography", title: "Professional Portraits", tone: "from-[#c9a24b] to-[#3a2f14]", image: ImageOne },
  { id: 2, category: "Videography", title: "Corporate Interview", tone: "from-[#8a6d2e] to-[#0b0b0c]", image: ImageTwo, link:"https://drive.google.com/file/d/1Ssu703fJVnnyALOQm3U1RQ0VP7lhSBB3/view?usp=share_link" },
  { id: 3, category: "Brand Identity", title: "Anna Maria Hospital", tone: "from-[#1c1b18] to-[#c9a24b]", image: ImageThree },
  { id: 4, category: "Social Media", title: "Modelling Agency", tone: "from-[#f1d488] to-[#141412]", image: ImageFour },
  { id: 5, category: "Digital Marketing", title: "Solace Real Estate", tone: "from-[#3a2f14] to-[#f1d488]", image: ImageFive },
  { id: 6, category: "Graphic Design", title: "U-GENE Aesthetics", tone: "from-[#0b0b0c] to-[#8a6d2e]", image: ImageSix },
];

export const stats = [
  { value: "120+", label: "Brands Built" },
  { value: "35+", label: "Industries Served" },
  { value: "6", label: "Core Services" },
  { value: "98%", label: "Client Retention" },
];
