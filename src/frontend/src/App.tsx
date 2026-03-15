import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Blinds,
  Building2,
  ChevronDown,
  ChevronRight,
  Compass,
  Eye,
  HeartHandshake,
  Layers,
  Lightbulb,
  Loader2,
  MapPin,
  Menu,
  PaintBucket,
  Phone,
  Shield,
  Sofa,
  Star,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

const PRODUCTS_DROPDOWN = [
  "Furniture",
  "Carpeting",
  "Luxury Vinyl Plank",
  "Wall Panel",
  "Lighting",
  "Seating",
  "Bed Frames",
  "Art & Mirror",
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products", dropdown: PRODUCTS_DROPDOWN },
  { label: "Contact Us", href: "#contact" },
];

const HERO_SLIDES = [
  {
    image: "/assets/generated/hero-1.dim_1400x700.jpg",
    title: "First Shriji Hospitality",
    subtitle:
      "Full-service FF&E and renovation solutions crafted to elevate hotel and motel interiors nationwide.",
    cta: "Learn More",
    ctaHref: "#about",
  },
  {
    image: "/assets/generated/hero-2.dim_1400x700.jpg",
    title: "Expert Consultation",
    subtitle:
      "Over 18 years of delivering strategic FF&E, design, and renovation solutions for hospitality brands.",
    cta: "Contact Us",
    ctaHref: "#contact",
  },
  {
    image: "/assets/generated/hero-3.dim_1400x700.jpg",
    title: "Coast to Coast Service",
    subtitle:
      "Providing full and partial renovation solutions for hotels and motels across the United States.",
    cta: "Our Services",
    ctaHref: "#services",
  },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Hotel Renovation",
    desc: "Complete hotel and motel renovation designed to upgrade interiors, improve functionality, and elevate guest experience.",
  },
  {
    icon: Layers,
    title: "Luxury Flooring",
    desc: "Durable and stylish flooring options including carpeting and luxury vinyl plank tailored for high-traffic hospitality environments.",
  },
  {
    icon: Blinds,
    title: "Window Treatments",
    desc: "Thoughtfully selected window treatments and décor elements that complement your interior design while enhancing guest comfort.",
  },
  {
    icon: PaintBucket,
    title: "Surface Finishes",
    desc: "Carefully planned materials and finishes that balance aesthetics, durability, and long-term value for hospitality interiors.",
  },
  {
    icon: Sofa,
    title: "Furniture & FF&E",
    desc: "High-quality furniture and FF&E solutions selected to match your brand, budget, and operational needs.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    desc: "Functional and aesthetic lighting solutions designed to enhance ambience, improve visibility, and elevate the guest experience.",
  },
];

const PRODUCT_ITEMS = [
  {
    title: "Furniture",
    image: "/assets/generated/product-furniture.dim_600x400.jpg",
    desc: "High-quality, durable furniture designed specifically for hotel and motel interiors.",
  },
  {
    title: "Carpeting",
    image: "/assets/generated/product-carpeting.dim_600x400.jpg",
    desc: "Comfortable and long-lasting carpeting ideal for high-traffic hospitality spaces.",
  },
  {
    title: "Luxury Vinyl Plank",
    image: "/assets/generated/product-vinyl.dim_600x400.jpg",
    desc: "Stylish, moisture-resistant flooring combining durability with a premium look.",
  },
  {
    title: "Wall Panel",
    image: "/assets/generated/product-wallpanel.dim_600x400.jpg",
    desc: "Modern wall panels that add texture, depth, and character to interior spaces.",
  },
  {
    title: "Lighting",
    image: "/assets/generated/product-lighting.dim_600x400.jpg",
    desc: "Functional and decorative lighting solutions that enhance ambience and visibility.",
  },
  {
    title: "Seating",
    image: "/assets/generated/product-seating.dim_600x400.jpg",
    desc: "Ergonomic and comfortable seating options crafted for guest comfort and longevity.",
  },
  {
    title: "Bed Frames",
    image: "/assets/generated/product-bedframes.dim_600x400.jpg",
    desc: "Strong, well-crafted bed frames designed for comfort, support, and long-term durability.",
  },
  {
    title: "Art & Mirror",
    image: "/assets/generated/product-art.dim_600x400.jpg",
    desc: "Carefully selected artwork and mirrors that enhance space, light, and interior aesthetics.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Great service, selection and price, highly recommended. The team at First Shriji Hospitality transformed our property completely.",
    name: "Peter Patel",
    hotel: "Holiday Inn, CO",
  },
  {
    quote:
      "Great customer service by everyone at First Shriji Hospitality; from start to finish. They delivered exactly what they promised, on time and on budget.",
    name: "Anil Fernando",
    hotel: "Baymont Inn, CA",
  },
  {
    quote:
      "Easy and affordable process. We have been with this team for over 10 years now. A truly great company with deep hospitality expertise.",
    name: "Raj Singh",
    hotel: "Comfort Inn, MI",
  },
];

const QUOTE_PRODUCTS = [
  "Furniture",
  "Carpeting",
  "Luxury Vinyl Plank",
  "Wall Panel",
  "Lighting",
  "Seating",
  "Bed Frames",
  "Art & Mirror",
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-dark shadow-xl shadow-black/40" : "bg-navy-dark/95"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
              <span className="text-background font-display font-bold text-sm">
                E
              </span>
            </div>
            <span className="font-display font-bold text-base md:text-lg text-white leading-tight">
              First <span className="text-gold">Shriji</span> Hospitality
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setProductsOpen((v) => !v)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white-muted hover:text-gold transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-navy-dark border border-border rounded-md shadow-xl shadow-black/50 py-1 z-50"
                        data-ocid="nav.dropdown_menu"
                      >
                        {link.dropdown.map((item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => {
                              scrollToSection("#products");
                              setProductsOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-white-muted hover:text-gold hover:bg-navy-light transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-sm font-medium text-white-muted hover:text-gold transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ),
            )}
            <button
              type="button"
              onClick={() => handleNav("#quote")}
              className="ml-2 btn-gold text-sm rounded-sm"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-navy-dark border-t border-border overflow-hidden"
          >
            <div className="container px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-3 py-2 text-sm font-medium text-white-muted hover:text-gold transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNav("#quote")}
                className="mt-2 btn-gold text-sm rounded-sm text-center"
                data-ocid="nav.primary_button"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % HERO_SLIDES.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[580px] max-h-[800px] overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current}-text`}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: animating ? 0 : 1, y: animating ? -16 : 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-1 bg-gold mb-6"
              />
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white-muted mb-8 leading-relaxed">
                {slide.subtitle}
              </p>
              <button
                type="button"
                onClick={() => scrollToSection(slide.ctaHref)}
                className="btn-gold rounded-sm text-base"
                data-ocid="hero.primary_button"
              >
                {slide.cta} <ChevronRight className="inline w-4 h-4 ml-1" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((slide, i) => (
          <button
            type="button"
            key={slide.title}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-gold"
                : "w-4 bg-white/40 hover:bg-white/70"
            }`}
            data-ocid="hero.toggle"
          />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const highlights = [
    {
      icon: Users,
      title: "Awesome Team",
      sub: "Professionals",
      desc: "Our experienced team balances cost and design through clear communication and efficient project planning.",
    },
    {
      icon: Zap,
      title: "Faster Performance",
      sub: "Process Driven",
      desc: "We follow a structured process from concept to execution, ensuring timely delivery without compromising quality.",
    },
    {
      icon: HeartHandshake,
      title: "Excellent Support",
      sub: "Client Focused",
      desc: "Our dedicated support team is always available to assist you at every stage of your project.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="section-title text-foreground mb-6">
              First Shriji Hospitality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At First Shriji Hospitality, we specialize in delivering
              thoughtful FF&amp;E and interior solutions for hotels and motels.
              Our team focuses on balancing design, functionality, and cost to
              create spaces that enhance guest experience while aligning with
              your brand goals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From full-scale renovations to carefully curated furnishings,
              flooring, and lighting, we manage every detail with precision and
              transparency. With a collaborative approach and 18+ years of
              industry experience, we help hospitality owners bring their vision
              to life.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("#services")}
              className="btn-gold rounded-sm"
              data-ocid="about.primary_button"
            >
              Our Services
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="/assets/generated/hero-1.dim_1400x700.jpg"
                alt="About First Shriji Hospitality"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-background p-6 rounded-sm shadow-xl hidden md:block">
              <div className="font-display text-3xl font-bold">18+</div>
              <div className="text-sm font-semibold mt-1">
                Years of Experience
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-navy-light border border-border rounded-sm p-6 card-hover"
            >
              <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {h.title}
              </h3>
              <p className="text-gold text-sm font-semibold mb-2">{h.sub}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-navy-light">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <span className="section-label">What We Do</span>
          <h2 className="section-title text-foreground">Our Best Services</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            From concept to completion, we handle every aspect of your hotel
            renovation and FF&amp;E procurement with precision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-background border border-border rounded-sm p-6 card-hover"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-sm flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <s.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="text-gold text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                data-ocid={`services.secondary_button.${i + 1}`}
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title text-foreground">Our Products</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Premium hospitality-grade products carefully sourced for quality,
            durability, and aesthetic excellence.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PRODUCT_ITEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="group bg-navy-light border border-border rounded-sm overflow-hidden card-hover"
              data-ocid={`products.item.${i + 1}`}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-foreground mb-1 text-sm md:text-base">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 hidden md:block">
                  {p.desc}
                </p>
                <button
                  type="button"
                  onClick={() => scrollToSection("#quote")}
                  className="text-gold text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  data-ocid={`products.secondary_button.${i + 1}`}
                >
                  View Products <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.72 0.12 85) 0, oklch(0.72 0.12 85) 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="section-label">Excellence in Every Detail</span>
          <h2 className="section-title text-foreground mb-3">
            Built for Hospitality Excellence
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Complete FF&amp;E &amp; Interior Solutions for Hotels &amp; Motels
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={() => scrollToSection("#quote")}
              className="btn-gold rounded-sm text-base"
              data-ocid="cta.primary_button"
            >
              Request a Quote
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("#services")}
              className="btn-outline-gold rounded-sm text-base"
              data-ocid="cta.secondary_button"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Building2,
              title: "Full Renovation",
              desc: "Comprehensive hotel and motel renovation services designed to modernize interiors, improve functionality, and enhance guest experience.",
            },
            {
              icon: Sofa,
              title: "FF&E Supply",
              desc: "High-quality furniture, fixtures, and equipment carefully selected to match your brand standards and long-term durability requirements.",
            },
            {
              icon: Shield,
              title: "Trusted Partner",
              desc: "A reliable hospitality partner with proven experience delivering consistent results through transparent communication and planning.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-navy-light/60 border border-gold/20 rounded-sm p-6 text-center"
            >
              <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: Eye,
      title: "Client Focus",
      desc: "We prioritize your satisfaction and complete projects only when all expectations are fully met and approved.",
    },
    {
      icon: Users,
      title: "Guest First",
      desc: "Designs are planned from the guest's perspective for real-world comfort, safety, and usability.",
    },
    {
      icon: Compass,
      title: "Clear Vision",
      desc: "We help define an interior vision that aligns with your brand identity and long-term business goals.",
    },
    {
      icon: Target,
      title: "Reliable Team",
      desc: "Our experienced team ensures smooth execution from initial planning through final completion and handover.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-light">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title text-foreground mb-4">
              Designed for Hotels &amp; Motels
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are dedicated to delivering thoughtful hotel and motel
              interiors that balance comfort, functionality, and design. Every
              project is completed with care and attention to detail.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="/assets/generated/hero-2.dim_1400x700.jpg"
                alt="Why Choose First Shriji Hospitality"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-navy-dark border border-gold/30 p-5 rounded-sm shadow-xl hidden md:block">
              <div className="font-display text-3xl font-bold text-gold">
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Projects Completed
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const { actor } = useActor();
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const toggleProduct = (p: string) => {
    setSelected((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Name and email are required.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      if (actor) {
        await actor.submitQuoteRequest(
          form.name,
          form.email,
          form.phone,
          form.company,
          selected,
          form.message,
        );
      }
      setSuccess(true);
      toast.success(
        "Quote request submitted successfully! We'll be in touch shortly.",
      );
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setSelected([]);
    } catch {
      setError("Something went wrong. Please try again.");
      toast.error("Failed to submit quote request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <span className="section-label">Request for</span>
          <h2 className="section-title text-foreground">Free Quotation</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Select the products and services you're interested in and fill out
            your details. We'll respond within 24 hours.
          </p>
        </div>
        <div className="bg-navy-light border border-border rounded-sm p-6 md:p-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <p className="text-sm font-semibold text-foreground mb-4">
                Select Products / Services
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {QUOTE_PRODUCTS.map((p, i) => (
                  <div key={p} className="flex items-center gap-2">
                    <Checkbox
                      id={`product-${i}`}
                      checked={selected.includes(p)}
                      onCheckedChange={() => toggleProduct(p)}
                      className="border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                      data-ocid={`quote.checkbox.${i + 1}`}
                    />
                    <Label
                      htmlFor={`product-${i}`}
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      {p}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <Label
                  htmlFor="q-name"
                  className="text-sm text-muted-foreground mb-1.5 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="q-name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="John Smith"
                  className="bg-background border-border focus:border-gold"
                  required
                  data-ocid="quote.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="q-email"
                  className="text-sm text-muted-foreground mb-1.5 block"
                >
                  Email Address *
                </Label>
                <Input
                  id="q-email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="john@hotel.com"
                  className="bg-background border-border focus:border-gold"
                  required
                  data-ocid="quote.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="q-phone"
                  className="text-sm text-muted-foreground mb-1.5 block"
                >
                  Phone Number
                </Label>
                <Input
                  id="q-phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="(555) 000-0000"
                  className="bg-background border-border focus:border-gold"
                  data-ocid="quote.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="q-company"
                  className="text-sm text-muted-foreground mb-1.5 block"
                >
                  Company / Hotel Name
                </Label>
                <Input
                  id="q-company"
                  value={form.company}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, company: e.target.value }))
                  }
                  placeholder="Grand Hotel Group"
                  className="bg-background border-border focus:border-gold"
                  data-ocid="quote.input"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label
                htmlFor="q-message"
                className="text-sm text-muted-foreground mb-1.5 block"
              >
                Message
              </Label>
              <Textarea
                id="q-message"
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="Tell us about your project, property size, timeline, and any specific requirements..."
                rows={4}
                className="bg-background border-border focus:border-gold resize-none"
                data-ocid="quote.textarea"
              />
            </div>

            {error && (
              <p
                className="text-destructive text-sm mb-4"
                data-ocid="quote.error_state"
              >
                {error}
              </p>
            )}
            {success && (
              <p
                className="text-green-400 text-sm mb-4"
                data-ocid="quote.success_state"
              >
                ✓ Your quote request has been submitted. We&apos;ll contact you
                shortly!
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full md:w-auto rounded-sm text-base h-auto py-3 px-8"
              data-ocid="quote.submit_button"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                  Submitting...
                </>
              ) : (
                "Get Quote"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-navy-light">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title text-foreground">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-background border border-border rounded-sm p-6 card-hover"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex gap-1 mb-4">
                {["s1", "s2", "s3", "s4", "s5"].map((sk) => (
                  <Star key={sk} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-display font-bold text-sm">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-muted-foreground text-xs">{t.hotel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-navy-dark">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display font-bold text-foreground">
              Our Office
            </h3>
            <p className="text-muted-foreground text-sm">
              1461 W. Tallyho Court
              <br />
              Addison, IL 60101
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display font-bold text-foreground">Call Us</h3>
            <p className="text-muted-foreground text-sm">
              <a
                href="tel:+13315750939"
                className="hover:text-gold transition-colors"
              >
                (331) 575-0939
              </a>
              <br />
              <a
                href="tel:+16302255915"
                className="hover:text-gold transition-colors"
              >
                (630) 225-5915
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center">
              <Building2 className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display font-bold text-foreground">
              Business Hours
            </h3>
            <p className="text-muted-foreground text-sm">
              Mon – Fri: 8:00 AM – 6:00 PM
              <br />
              Sat: 9:00 AM – 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy-dark border-t border-border pt-16 pb-6">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-background font-display font-bold text-sm">
                  E
                </span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                First <span className="text-gold">Shriji</span> Hospitality
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              First Shriji Hospitality is a full-service FF&amp;E company
              providing expert consultation, renovation solutions, and quality
              furnishings for hotels and motels nationwide.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Home:#home",
                "About Us:#about",
                "Services:#services",
                "Products:#products",
                "Contact Us:#contact",
              ].map((item) => {
                const [label, href] = item.split(":");
                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(href)}
                      className="text-muted-foreground text-sm hover:text-gold transition-colors"
                      data-ocid="footer.link"
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {PRODUCTS_DROPDOWN.map((p) => (
                <li key={p}>
                  <button
                    type="button"
                    onClick={() => scrollToSection("#products")}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors"
                    data-ocid="footer.link"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            &copy; {year} First Shriji Hospitality. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <CTABanner />
        <WhyChooseUs />
        <QuoteForm />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
