import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiBootstrap,
  SiDaisyui,
  SiShadcnui,
  SiHeroui,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiClaude,
  SiCursor,
  SiGoogle,
} from 'react-icons/si'
import { GiWatermelon } from 'react-icons/gi'
import { VscVscode } from 'react-icons/vsc'
import { TbBrandOpenai } from 'react-icons/tb'
import { HiOutlineMail, HiMenuAlt4, HiX } from 'react-icons/hi'
import { HiOutlineMapPin, HiOutlineArrowUpRight, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
import { FiExternalLink } from 'react-icons/fi'

const registry = {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiBootstrap,
  SiDaisyui,
  SiShadcnui,
  SiHeroui,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiClaude,
  SiCursor,
  SiGoogle,
  GiWatermelon,
  VscVscode,
  TbBrandOpenai,
  HiOutlineMail,
  HiMenuAlt4,
  HiX,
  HiOutlineArrowUpRight,
  HiOutlineMapPin,
  HiOutlineSun,
  HiOutlineMoon,
  FiExternalLink,
}

export default function Icon({ name, className = '', ...props }) {
  const Cmp = registry[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" {...props} />
}
