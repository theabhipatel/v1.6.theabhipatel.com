import { contactInfo } from "@/constants/contact";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { SectionHeading } from "@/components/shared/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TheAbhiPatel",
  description:
    "Get in touch with Abhi Patel. Send a message or connect through social media for collaboration opportunities, project inquiries, or just to say hello.",
  openGraph: {
    title: "Contact | TheAbhiPatel",
    description:
      "Get in touch with Abhi Patel. Send a message or connect through social media for collaboration opportunities, project inquiries, or just to say hello.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen py-20">
      <AnimatedBackground variant="page" theme="gradient" />

      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect and build something amazing together"
          align="center"
          gradient
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-orbitron mb-2">
                Send a Message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
            <ContactForm />
          </section>

          {/* Contact Information Section */}
          <section className="space-y-8">
            {/* Email Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-orbitron">
                Contact Information
              </h3>
              <div className="p-6 bg-gray-800/30 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg font-medium text-brand-blue-400 hover:text-brand-blue-300 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-orbitron">
                Connect With Me
              </h3>
              <div className="space-y-3">
                {contactInfo.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg backdrop-blur-sm
                      hover:bg-gray-800/50 hover:border-brand-blue-500/50 
                      transition-all duration-200 group"
                  >
                    <span className="text-3xl">{link.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-foreground group-hover:text-brand-blue-400 transition-colors">
                        {link.platform}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {link.url.replace(/^https?:\/\//, "")}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-brand-blue-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
