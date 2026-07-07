// Placeholder content — swap these values with your real details.

export const profile = {
  name: 'Love Basnet Chhatri',
  initials: 'LB',
  title: 'Front-End Developer (React)',
  tagline: 'I build responsive, accessible web applications with React and modern JavaScript.',
  location: 'India',
  availability: 'Available for freelance work',
  email: 'lovebasnetchhatri10@gmail.com',
  resumeUrl: '#',
  bio:
    'Front-End Developer specializing in React and modern JavaScript (ES6+), experienced in building responsive, accessible web applications including an e-commerce store and a live cryptocurrency dashboard.',
  bioSecondary:
    'Skilled in REST API integration, WCAG accessibility, and UI/UX design with Figma. MCA graduate with a Full Stack MERN certification.',
}

// Opens Gmail's web compose window with the "To" field pre-filled,
// instead of relying on the OS having a default mailto: handler configured.
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`

export const socials = [
  { name: 'GitHub', href: 'https://github.com/love7879', icon: 'FaGithub' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/love-basnet', icon: 'FaLinkedin' },
  { name: 'Email', href: gmailComposeUrl, icon: 'HiOutlineMail' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { label: 'Projects shipped', value: '4' },
  { label: 'Certification', value: 'MERN' },
  { label: 'Degree', value: 'MCA' },
]

export const skills = [
  { name: 'React', icon: 'FaReact' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'Next.js', icon: 'SiNextdotjs' },
  { name: 'Node.js', icon: 'FaNodeJs' },
  { name: 'Express.js', icon: 'SiExpress' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'Bootstrap', icon: 'SiBootstrap' },
  { name: 'Daisy UI', icon: 'SiDaisyui' },
  { name: 'shadcn/ui', icon: 'SiShadcnui' },
  { name: 'Hero UI', icon: 'SiHeroui' },
  { name: 'Watermelon UI', icon: 'GiWatermelon' },
  { name: 'Figma', icon: 'FaFigma' },
  { name: 'Framer Motion', icon: 'SiFramer' },
  { name: 'Git', icon: 'FaGitAlt' },
  { name: 'GitHub', icon: 'FaGithub' },
  { name: 'VS Code', icon: 'VscVscode' },
  { name: 'Cursor', icon: 'SiCursor' },
  { name: 'Vercel', icon: 'SiVercel' },
  { name: 'Netlify', icon: 'SiNetlify' },
  { name: 'Claude', icon: 'SiClaude' },
  { name: 'Codex', icon: 'TbBrandOpenai' },
  { name: 'Google Antigravity', icon: 'SiGoogle' },
]

export const projects = [
  {
    title: 'LUMI Apparel',
    description:
      "A full-stack men's and women's clothing store with filterable product browsing, a quick-view modal with size selection and add-to-cart, a slide-out cart drawer with live subtotals, and a flash-free dark/light theme toggle.",
    tags: ['React 18', 'Vite', 'Tailwind CSS v4', 'Watermelon UI', 'Radix UI', 'Lucide Icons'],
    image: '/images/Ecommerce.png',
    liveUrl: 'https://lumi-apparel-ecommerce-website.vercel.app/',
    codeUrl: 'https://github.com/love7879/LUMI-Apparel-Ecommerce-Website',
  },
  {
    title: 'Tripify',
    description:
      'A concept travel-booking landing page with a full-bleed hero and interactive trip search, a filterable destination/experience browser, testimonials, and a newsletter signup — verified end-to-end with automated browser testing.',
    tags: ['React 19', 'Vite', 'HeroUI', 'Tailwind CSS v4', 'JavaScript'],
    image: '/images/Travel.png',
    liveUrl: 'https://tripify-travelling-website.vercel.app/',
    codeUrl: 'https://github.com/love7879/Tripify-Travelling-Website',
  },
  {
    title: 'Crypto Tracker',
    description:
      'A live cryptocurrency dashboard tracking the top 100 coins via the CoinGecko REST API, with 60-second auto-refresh, color-coded price and market-cap indicators, and instant client-side search by name or symbol.',
    tags: ['React', 'Vite', 'Axios', 'Tailwind CSS v3'],
    image: '/images/Crypto-Tracker.png',
    liveUrl: 'https://cryptocurrency-tracker-woad.vercel.app/',
    codeUrl: 'https://github.com/love7879/Cryptocurrency-Tracker',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This very site — a responsive single-page portfolio with a glassmorphism UI and persistent dark/light theming, with all content centralized in one config file so updates never touch component code. Optimized with meta tags, Open Graph/Twitter cards, JSON-LD, and a sitemap.',
    tags: ['React 19', 'Vite', 'Tailwind CSS v4', 'HeroUI'],
    image: '/images/Portfolio.png',
    liveUrl: '#',
    codeUrl: 'https://github.com/love7879/Personal-Portfolio-Website',
  },
]
