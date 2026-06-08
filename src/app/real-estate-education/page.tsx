"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import TimelineHorizontalCardStack from '@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack';
import FaqBase from '@/components/sections/faq/FaqBase';
import { CheckCircle, GraduationCap, Briefcase, Lightbulb } from "lucide-react"; // Import necessary icons

export default function RealEstateEducationPage() {
  const navItems = [
    {
      name: "Menu",      id: "menu"
    },
    {
      name: "About",      id: "about"
    },
    {
      name: "Education",      id: "/real-estate-education"
    },
    {
      name: "Visit",      id: "contact"
    },
  ];

  const footerColumns = [
    {
      title: "Slice and Ice",      items: [
        {
          label: "Menu",          href: "/#menu"
        },
        {
          label: "About Us",          href: "/#about"
        },
        {
          label: "Education",          href: "/real-estate-education"
        },
        {
          label: "Contact",          href: "/#contact"
        },
      ],
    },
    {
      title: "Support",      items: [
        {
          label: "Privacy Policy",          href: "#"
        },
        {
          label: "Terms of Service",          href: "#"
        },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="large"
      background="noise"
      cardStyle="gradient-radial"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={navItems}
            brandName="Slice and Ice"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardScroll
            background={{
              variant: "plain"
            }}
            title="Your Path to Real Estate Mastery"
            description="From foundational concepts to advanced strategies, this guide provides a step-by-step learning journey for aspiring and current real estate professionals."
            buttons={[
              {
                text: "Start Learning",                href: "#foundational-topics"
              },
            ]}
            imageSrc="https://images.unsplash.com/photo-1579621970795-87f59d1e605d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Real estate building"
          />
        </div>

        <div id="foundational-topics" data-section="foundational-topics">
          <TimelineHorizontalCardStack
            title="Foundational Knowledge"
            description="Master the core concepts before diving deep into specialized areas of real estate."
            useInvertedBackground={true}
          >
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Lightbulb className="text-accent" /> Understanding Real Estate Markets</h3>
              <p className="text-foreground/80">Learn about supply and demand, market cycles, and factors influencing property values.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><CheckCircle className="text-accent" /> Legal & Ethical Frameworks</h3>
              <p className="text-foreground/80">Delve into property law, contracts, fair housing, and professional ethics.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><GraduationCap className="text-accent" /> Finance & Investment Basics</h3>
              <p className="text-foreground/80">Explore mortgages, loans, investment strategies, and financial analysis for properties.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Briefcase className="text-accent" /> Property Types & Management</h3>
              <p className="text-foreground/80">Distinguish between residential, commercial, industrial properties, and the principles of property management.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Lightbulb className="text-accent" /> Agency & Client Relationships</h3>
              <p className="text-foreground/80">Understand different agency types, fiduciary duties, and effective client communication.</p>
            </div>
          </TimelineHorizontalCardStack>
        </div>

        <div id="learning-areas" data-section="learning-areas">
          <TimelineHorizontalCardStack
            title="Step-by-Step Learning Areas"
            description="A structured curriculum to guide you from beginner to seasoned professional, covering all aspects of the industry."
            useInvertedBackground={false}
          >
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><GraduationCap className="text-accent" /> Getting Your License</h3>
              <p className="text-foreground/80">Comprehensive guide on educational requirements, exam preparation, and licensing procedures.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Briefcase className="text-accent" /> Residential Real Estate</h3>
              <p className="text-foreground/80">Learn about buying, selling, and leasing homes, market analysis, and client representation.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Lightbulb className="text-accent" /> Commercial Real Estate</h3>
              <p className="text-foreground/80">Dive into office spaces, retail, industrial properties, leases, and investment analysis.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><CheckCircle className="text-accent" /> Investment & Development</h3>
              <p className="text-foreground/80">Strategies for property investment, understanding development cycles, and managing portfolios.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><GraduationCap className="text-accent" /> Advanced Strategies</h3>
              <p className="text-foreground/80">Explore niche markets, negotiation tactics, digital marketing, and sustainable real estate practices.</p>
            </div>
          </TimelineHorizontalCardStack>
        </div>

        <div id="resources" data-section="resources">
          <FaqBase
            faqsAnimation="slide-up"
            useInvertedBackground={true}
            title="Aggregated Resources & FAQs"
            description="Find answers to common questions and access valuable tools to support your real estate journey."
            faqs={[
              {
                id: "faq1",                title: "What are the first steps to become a real estate agent?",                content: "Typically, you need to complete pre-licensing education, pass a state exam, and find a sponsoring broker. Requirements vary by state."
              },
              {
                id: "faq2",                title: "How important is networking in real estate?",                content: "Networking is crucial for lead generation, referrals, and building professional relationships. Attend industry events and join local associations."
              },
              {
                id: "faq3",                title: "Where can I find reputable real estate courses?",                content: "Look for courses approved by your state's real estate commission or reputable online platforms and community colleges specializing in real estate education."
              },
              {
                id: "faq4",                title: "What is a 'comparative market analysis' (CMA)?",                content: "A CMA is an evaluation of a home's value based on recently sold, active, and expired listings in the neighborhood. It helps determine a competitive price."
              },
              {
                id: "faq5",                title: "How do I build a strong client base?",                content: "Focus on excellent service, clear communication, follow-up, and leveraging referrals. Consistent marketing and community involvement also help."
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={false}
            background={{
              variant: "plain"
            }}
            tag="Reach Out"
            title="Questions About Your Education?"
            description="Contact us today for personalized guidance on your real estate learning path."
            inputPlaceholder="Enter your email"
            buttonText="Get Info"
            termsText="By clicking Get Info you're confirming that you agree with our Privacy Policy."
            onSubmit={(email) => console.log(`Inquiry email: ${email}`)}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={footerColumns}
            bottomLeftText="© 2024 Slice and Ice. All rights reserved."
            bottomRightText="Tucson, Arizona"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
