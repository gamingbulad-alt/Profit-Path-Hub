import { 
  DollarSign, 
  TrendingUp, 
  Video, 
  Search, 
  Users, 
  Cpu, 
  BarChart,
  Globe
} from 'lucide-react';
import { BlogPost, Category, Stat } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Categories', href: '#categories' },
  { name: 'Blog', href: '#blog' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#footer' },
];

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: 'Passive Income',
    description: 'Build sustainable revenue streams that work for you 24/7.',
    icon: DollarSign,
  },
  {
    id: 2,
    title: 'Monetization Tools',
    description: 'The best software and platforms to maximize your earnings.',
    icon: Cpu,
  },
  {
    id: 3,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for content creators.',
    icon: Video,
  },
  {
    id: 4,
    title: 'SEO Mastery',
    description: 'Rank higher and drive organic traffic to your assets.',
    icon: Search,
  },
  {
    id: 5,
    title: 'Community Building',
    description: 'Grow a loyal audience and engage with your followers.',
    icon: Users,
  },
  {
    id: 6,
    title: 'Market Trends',
    description: 'Stay ahead of the curve with the latest industry analysis.',
    icon: TrendingUp,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '10 High-Paying Affiliate Programs for 2024',
    excerpt: 'Discover the top affiliate networks that offer the best commissions and recurring revenue models for digital marketers.',
    author: 'Alex Morgan',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: 'Monetization',
  },
  {
    id: 2,
    title: 'YouTube vs. TikTok: Which Pays Better?',
    excerpt: 'A deep dive into the creator funds, sponsorship opportunities, and long-term earning potential of both platforms.',
    author: 'Sarah Jenkins',
    date: 'Oct 15, 2023',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Video',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to SEO for Beginners',
    excerpt: 'Unlock the secrets of search engine optimization to drive free, high-quality traffic to your website or blog.',
    author: 'David Chen',
    date: 'Oct 18, 2023',
    readTime: '12 min read',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    category: 'SEO',
  },
  {
    id: 4,
    title: 'Building a Personal Brand from Scratch',
    excerpt: 'Learn how to establish authority in your niche and turn your reputation into a profitable business.',
    author: 'Jessica Lee',
    date: 'Oct 22, 2023',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    category: 'Branding',
  },
  {
    id: 5,
    title: 'Dropshipping in 2024: Is It Still Viable?',
    excerpt: 'An honest look at the state of e-commerce dropshipping and strategies to succeed in a saturated market.',
    author: 'Michael Ross',
    date: 'Oct 25, 2023',
    readTime: '7 min read',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    category: 'E-commerce',
  },
  {
    id: 6,
    title: 'Email Marketing Automations That Convert',
    excerpt: 'Set up these 5 essential email sequences to nurture leads and close sales while you sleep.',
    author: 'Emma Wilson',
    date: 'Oct 28, 2023',
    readTime: '9 min read',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    category: 'Marketing',
  },
];

export const STATS: Stat[] = [
  { label: 'Active Learners', value: '50K+', description: 'Joined our community' },
  { label: 'Success Stories', value: '1,200+', description: 'Profitable businesses launched' },
  { label: 'Resources', value: '500+', description: 'Guides, templates & videos' },
];