'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleNewsletter = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Dashboard', href: '#dashboard' },
        { name: 'Analytics', href: '#analytics' },
        { name: 'Automation', href: '/automation' },
        { name: 'Workflows', href: '/workflows' },
        { name: 'API Access', href: '/api' },
        { name: 'Developer Tools', href: '/docs' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '#enterprise' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Success Stories', href: '/success' },
        { name: 'Implementation', href: '/implementation' },
        { name: 'Consulting', href: '/consulting' },
        { name: 'Training', href: '#training' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Knowledge Base', href: '/knowledge' },
        { name: 'Expert Community', href: '/community' },
        { name: 'Video Tutorials', href: '/tutorials' },
        { name: 'Live Workshops', href: '/workshops' },
        { name: 'Best Practices', href: '/best-practices' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Service Terms', href: '/terms' },
        { name: 'Data Protection', href: '/data-protection' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security Standards', href: '/security' },
        { name: 'Audit Reports', href: '/audits' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-background border-t border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="#home" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">T</span>
                </div>
                <span className="font-bold text-xl">Test Landing</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming business operations through intelligent automation and data-driven
                insights. Trusted by industry leaders to optimize workflows and accelerate growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">solutions@testlanding.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 847-2910</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">456 Innovation Drive, Tech Hub</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Industry Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="flex-1 px-3 py-2 text-sm border border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletter}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Weekly insights on automation trends and optimization strategies.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Test Landing. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-red-500 fill-current" /> for business
                success
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Site Map
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Technical Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
