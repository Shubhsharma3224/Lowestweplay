import { Link } from "wouter";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Zap, ShieldCheck, Trophy, MessageCircle, Users, ChevronRight, Star, ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";

const PARTNERS = [
  "https://i.ibb.co/0RR4Pnw4/IMG-20260207-WA0006-jpg.jpg",
  "https://i.ibb.co/PvRLkRKD/IMG-20260207-WA0008-jpg.jpg",
  "https://i.ibb.co/8ndyfLhX/IMG-20260207-WA0007-jpg.jpg",
  "https://i.ibb.co/B2BKn1yd/IMG-20260207-WA0013-jpg.jpg",
  "https://i.ibb.co/mFv2cBxY/IMG-20260207-WA0012-jpg.jpg",
  "https://i.ibb.co/5Wprxhbn/IMG-20260207-WA0015-jpg.jpg",
  "https://i.ibb.co/6JsWj7xz/IMG-20260207-WA0011-jpg.jpg",
  "https://i.ibb.co/xStFSBcM/IMG-20260207-WA0009-jpg.jpg",
  "https://i.ibb.co/zWQpk8C9/IMG-20260207-WA0014-jpg.jpg",
  "https://i.ibb.co/BH8QYGVj/IMG-20260207-WA0005-jpg.jpg"
];

const TRUST_BADGES = [
  { icon: Zap, label: "Instant Delivery", sub: "Under 5 mins" },
  { icon: ShieldCheck, label: "100% Secure", sub: "Safe Transactions" },
  { icon: Trophy, label: "Lowest Price", sub: "Up to 70% Off" },
  { icon: MessageCircle, label: "24/7 Support", sub: "Always here" },
  { icon: Users, label: "10k+ Customers", sub: "Happy gamers" }
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="w-full relative">

      {/* ── ANIMATED ORB BACKGROUND ── */}
      <div className="absolute top-0 left-0 right-0 h-[900px] w-full -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/40 to-violet-50/30">
        {/* Large indigo orb top-left */}
        <div className="orb w-[520px] h-[520px] bg-indigo-400/30 -top-32 -left-24" />
        {/* Emerald orb bottom-right */}
        <div className="orb orb-2 w-[400px] h-[400px] bg-emerald-400/20 top-64 right-0" />
        {/* Violet orb center */}
        <div className="orb orb-3 w-[340px] h-[340px] bg-violet-400/20 top-20 left-1/2 -translate-x-1/2" />
        {/* Fine grid overlay */}
        <div className="absolute inset-0" style={{backgroundImage:"radial-gradient(circle, rgba(79,70,229,0.06) 1px, transparent 1px)", backgroundSize:"32px 32px"}} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      {/* ── HERO SECTION ── */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT: Text content */}
          <div className="text-center lg:text-left">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-indigo-100 shadow-sm shadow-indigo-100 mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold text-foreground/80">Delivery fully operational</span>
              <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">LIVE</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold font-display leading-[1.08] mb-6 tracking-tight">
                Level Up{" "}
                <span className="relative inline-block">
                  <span className="shimmer-text">Your Game</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 9 Q75 2 150 9 Q225 16 298 9" stroke="url(#uline)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="uline" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4F46E5"/>
                        <stop offset="1" stopColor="#10B981"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                <span className="text-foreground">Without Emptying</span>
                <br />
                <span className="text-gradient">Your Wallet</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                India's cheapest WePlay top-up service. Get coins&nbsp;<strong className="text-foreground font-semibold">instantly</strong>, save up to&nbsp;<strong className="text-primary font-semibold">70%</strong>, with 100% safe transactions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-12"
            >
              <a
                href="#products"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white overflow-hidden
                  bg-gradient-to-r from-indigo-600 via-primary to-violet-600
                  shadow-xl shadow-indigo-500/35
                  hover:shadow-2xl hover:shadow-indigo-500/50
                  hover:-translate-y-1 active:translate-y-0
                  transition-all duration-300"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Zap className="w-5 h-5 fill-white" />
                View Pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base
                  bg-white/80 backdrop-blur border border-indigo-100
                  text-foreground hover:bg-white hover:border-primary/30
                  shadow-sm hover:shadow-md
                  hover:-translate-y-0.5
                  transition-all duration-300"
              >
                How It Works
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              {[
                { val: "10,000+", label: "Happy Customers" },
                { val: "70%", label: "Max Discount" },
                { val: "< 5 min", label: "Delivery Time" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-border hidden sm:block" />}
                  <div>
                    <div className="text-2xl font-bold font-display text-foreground">{s.val}</div>
                    <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Featured product card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow behind card */}
            <div className="absolute w-72 h-72 rounded-full bg-indigo-400/20 blur-[60px] -z-10" />
            <div className="absolute w-48 h-48 rounded-full bg-violet-400/15 blur-[40px] -z-10 translate-x-12 translate-y-8" />

            <div className="float-anim w-full max-w-xs relative">
              {/* Best seller badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-400/40 whitespace-nowrap">
                <Star className="w-3.5 h-3.5 fill-white" />
                BEST SELLER
              </div>

              {/* Card */}
              <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_30px_80px_-10px_rgba(79,70,229,0.25)] p-7 text-center">
                <div className="w-full aspect-square bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl mb-5 flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={PRODUCTS[4].image}
                    alt={PRODUCTS[4].name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(2.4k)</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">{PRODUCTS[4].name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{PRODUCTS[4].desc}</p>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <span className="text-2xl font-bold text-foreground">₹{PRODUCTS[4].price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-1.5">₹{PRODUCTS[4].mrp}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                    {Math.round(((PRODUCTS[4].mrp - PRODUCTS[4].price) / PRODUCTS[4].mrp) * 100)}% OFF
                  </span>
                </div>
                <Link href={`/checkout?product=${PRODUCTS[4].id}`}>
                  <button className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-violet-600 shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm">
                    <Zap className="w-4 h-4 fill-white" /> BUY NOW
                  </button>
                </Link>
              </div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-16 bg-white rounded-2xl border border-border shadow-xl px-3.5 py-2.5 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Instant</div>
                  <div className="text-[10px] text-muted-foreground">Delivery</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-24 bg-white rounded-2xl border border-border shadow-xl px-3.5 py-2.5 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">100%</div>
                  <div className="text-[10px] text-muted-foreground">Secure</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── TRUST BADGE STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-3"
        >
          {TRUST_BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/80 backdrop-blur border border-white/70 rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/8 hover:border-primary/20 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-violet-500/3 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-violet-500/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-violet-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground leading-tight">{badge.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{badge.sub}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* ID SAFE GUARANTEE */}
      <section className="py-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-y border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-foreground">ID SAFE GUARANTEE</h3>
              <p className="text-muted-foreground">100% Refund if any issue occurs. Your account security is our top priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS CAROUSEL */}
      <section id="partners" className="relative py-20 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
              Our Community
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Trusted By Thousands</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Happy customers who levelled up with Lowest Weplay</p>
          </motion.div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-4 pl-6">
            {PARTNERS.map((img, idx) => (
              <div key={idx} className="embla__slide flex-[0_0_220px] min-w-0 md:flex-[0_0_260px]">
                {/* Tall portrait card */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-indigo-100/50 border border-white/80 bg-white group">
                  <div className="aspect-[9/16] w-full overflow-hidden">
                    <img
                      src={img}
                      alt={`Partner ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/60 to-transparent flex items-end px-3 pb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                      </div>
                      <span className="text-white text-[11px] font-semibold drop-shadow">Verified Customer</span>
                    </div>
                    <span className="ml-auto text-white/70 text-[10px]">#{idx + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
      </section>

      {/* PRODUCTS GRID */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
              Top-Up Packs
            </span>
            <h2 className="text-4xl font-bold font-display mb-4">Choose Your Pack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">All top-ups processed instantly. Save up to 70% vs in-game pricing.</p>
          </motion.div>
        </div>

        {/* 2-col on mobile, 2-col on tablet, 3-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {PRODUCTS.map((product, idx) => {
            const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="h-full"
              >
                <div className="glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-5 relative flex flex-col group hover:shadow-2xl hover:-translate-y-1 hover:border-primary/25 transition-all duration-300 h-full">
                  {product.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-accent to-primary text-white text-[10px] sm:text-xs font-bold tracking-wider shadow-lg whitespace-nowrap">
                      {product.badge}
                    </div>
                  )}

                  <div className="relative w-full bg-gradient-to-br from-indigo-50/80 to-violet-50/80 rounded-xl sm:rounded-2xl mb-3 sm:mb-5 p-3 sm:p-5 overflow-hidden flex items-center justify-center" style={{aspectRatio:"1"}}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xs sm:text-base font-bold font-display text-foreground mb-0.5 sm:mb-1 leading-tight">{product.name}</h3>
                  <p className="text-[10px] sm:text-xs text-secondary font-semibold mb-2 sm:mb-4 flex-grow leading-relaxed line-clamp-2">{product.desc}</p>

                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <div>
                      <span className="text-sm sm:text-2xl font-bold text-foreground">₹{product.price}</span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground line-through ml-1">₹{product.mrp}</span>
                    </div>
                    <span className="text-[9px] sm:text-xs font-bold text-emerald-700 bg-emerald-100 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">{discount}% OFF</span>
                  </div>

                  <Link href={`/checkout?product=${product.id}`}>
                    <button className="w-full py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-white bg-gradient-to-r from-primary to-violet-600 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 active:scale-[0.97] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-sm">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 fill-white" /> BUY NOW
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Four simple steps to get your coins instantly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Select Pack", desc: "Choose the perfect coin package from our list." },
              { step: "2", title: "Enter Details", desc: "Provide your WePlay ID and Name securely." },
              { step: "3", title: "Pay Online", desc: "Complete payment via Razorpay securely." },
              { step: "4", title: "Instant Delivery", desc: "Coins added to your account within 5 mins!" }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                {idx !== 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-border -z-10" />}
                <div className="w-16 h-16 rounded-full bg-primary text-white font-display font-bold text-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-display mb-8">See Us In Action</h2>
        <div className="glass-card p-4 md:p-8 rounded-[2rem] shadow-2xl">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/wGYGm31bhZM"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
