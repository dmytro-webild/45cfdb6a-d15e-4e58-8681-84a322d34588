"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
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
      navItems={[
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Visit",
          id: "contact",
        },
      ]}
      brandName="Slice and Ice"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "plain",
      }}
      title="Hot Pizza. Cool Treats. Family Fun."
      description="Tucson's favorite spot for fresh, wood-fired style pizza and refreshing shaved ice. Perfect for families, students, and everyone craving a little happiness."
      buttons={[
        {
          text: "Call Now",
          href: "tel:5205550123",
        },
        {
          text: "Get Directions",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/assortment-tamales-ingredients-green-table_23-2148942270.jpg?_wi=1"
      imageAlt="Slice and Ice featured food"
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Why We're Tucson's Choice"
      metrics={[
        {
          id: "1",
          value: "Fresh",
          description: "Hand-tossed pizza dough made daily.",
        },
        {
          id: "2",
          value: "100%",
          description: "Family-friendly atmosphere always.",
        },
        {
          id: "3",
          value: "Cool",
          description: "Over 20 flavors of shaved ice.",
        },
        {
          id: "4",
          value: "Local",
          description: "Proudly serving the Tucson area.",
        },
      ]}
      metricsAnimation="slide-up"
      tag="Our Commitment"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Tucson's Best Kept Secret"
      description="At Slice and Ice, we believe in the simple things: a perfectly crispy slice of pizza and a mountain of cool, refreshing shaved ice. We’re more than a food shop—we’re a local neighborhood gathering spot for families, friends, and anyone looking to beat the heat with a smile. Stop by today and treat the family to something special."
      buttons={[
        {
          text: "Visit Us Today",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-restaurant-coffee-shop-cafe_1203-8565.jpg?_wi=1"
      imageAlt="Slice and Ice atmosphere"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Classic Margherita",
          price: "Fresh",
          variant: "Pizza",
          imageSrc: "http://img.b2bpic.net/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134253.jpg?_wi=1",
        },
        {
          id: "p2",
          name: "Signature Shaved Ice",
          price: "Cool",
          variant: "Dessert",
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-pomegranate-arils-with-sliced-onion_114579-86244.jpg?_wi=1",
        },
        {
          id: "p3",
          name: "Pepperoni Feast",
          price: "Savory",
          variant: "Pizza",
          imageSrc: "http://img.b2bpic.net/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134253.jpg?_wi=2",
        },
        {
          id: "p4",
          name: "Tropical Blast",
          price: "Sweet",
          variant: "Frozen Treat",
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-pomegranate-arils-with-sliced-onion_114579-86244.jpg?_wi=2",
        },
      ]}
      title="Menu Highlights"
      description="Hand-crafted pizzas and icy desserts designed for every appetite."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Fresh Ingredients",
          description: "Locally sourced toppings and fresh dough.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-vector/summer-background-with-watercolor-ice-cream_23-2147638086.jpg",
          },
          items: [],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-tamales-ingredients-green-table_23-2148942270.jpg?_wi=2",
          imageAlt: "fresh italian pizza close up",
        },
        {
          id: "f2",
          title: "Fun Environment",
          description: "The perfect place for birthday parties and after-school snacks.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/front-view-little-cookie-cake-with-lemon-slices-candies-dark-background-cake-biscuit-fruit-citrus-sweet-cookie_140725-110229.jpg",
          },
          items: [],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134253.jpg?_wi=3",
          imageAlt: "delicious pepperoni pizza gourmet",
        },
        {
          id: "f3",
          title: "Hot & Cold",
          description: "Dinner and dessert in one convenient, delicious stop.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-restaurant-coffee-shop-cafe_1203-8565.jpg?_wi=2",
          },
          items: [],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-pomegranate-arils-with-sliced-onion_114579-86244.jpg?_wi=3",
          imageAlt: "refreshing shaved ice colorful syrup",
        },
      ]}
      title="Why Families Love Slice and Ice"
      description="We've built a place where neighbors meet, kids celebrate, and everyone enjoys a treat."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          handle: "Local Mom",
          testimonial: "The kids love the shaved ice! The pizza is fresh and perfect for a quick family dinner.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-brown-haired-woman-showing-thumb-up-lady-looking-camera_1262-14383.jpg?_wi=1",
        },
        {
          id: "t2",
          name: "Jason Reed",
          handle: "Student",
          testimonial: "Best spot to hang out after class. Great prices and even better treats.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-boy-eating-spaghetti_23-2148910384.jpg?_wi=1",
        },
        {
          id: "t3",
          name: "The Garcia Family",
          handle: "Loyal Customers",
          testimonial: "We come here every weekend. It's the highlight of our family time!",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-eating-pizza_23-2151231286.jpg",
        },
        {
          id: "t4",
          name: "Emily Chen",
          handle: "Pizza Fan",
          testimonial: "The pepperoni is fantastic. Plus, the atmosphere is just so welcoming and fun.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-brown-haired-woman-showing-thumb-up-lady-looking-camera_1262-14383.jpg?_wi=2",
        },
        {
          id: "t5",
          name: "Mark Johnson",
          handle: "Tucson Resident",
          testimonial: "An absolute gem in the neighborhood! The kids beg to come here every single weekend.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-boy-eating-spaghetti_23-2148910384.jpg?_wi=2",
        },
      ]}
      title="What Our Neighbors Say"
      description="Real feedback from the Tucson community we love serving."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Today"
      title="Stop By Slice and Ice"
      description="Address: 1234 Tucson Blvd, Tucson, AZ\nHours: Open Daily 11:00 AM - 9:00 PM\nPhone: (520) 555-0123\n\nCome visit us today for your favorite pizza and frozen treats!"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Slice and Ice",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Slice and Ice. All rights reserved."
      bottomRightText="Tucson, Arizona"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
