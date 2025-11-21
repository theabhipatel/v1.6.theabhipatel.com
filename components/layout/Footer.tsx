import Link from "next/link";
import { contactInfo } from "@/constants/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand Name */}
          <Link
            href="/"
            className="font-orbitron text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent hover:from-blue-400 hover:to-indigo-400 transition-all"
          >
            TheAbhiPatel
          </Link>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {contactInfo.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors text-2xl"
                aria-label={social.platform}
                title={social.platform}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-foreground/60">
            <p>© {currentYear} TheAbhiPatel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
