import { Link } from "wouter";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <img
              src="https://i.ibb.co/vCHmxWCc/Gemini-Generated-Image-qxp195qxp195qxp1-removebg-preview.png"
              alt="Lowest Weplay"
              className="w-[160px] mb-5"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Your trusted partner for instant, secure, and affordable WePlay coin top-ups. Best rates guaranteed with 24/7 delivery.
            </p>
            <a
              href="mailto:fluxfindindia@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Mail className="w-4 h-4" />
              fluxfindindia@gmail.com
            </a>
            <div className="mt-6 flex items-center gap-3 opacity-60">
              <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">SECURE PAYMENTS</span>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-slate-100 rounded flex items-center justify-center text-[10px] font-bold text-slate-600">UPI</div>
                <div className="w-10 h-6 bg-slate-100 rounded flex items-center justify-center text-[10px] font-bold text-slate-600">VISA</div>
                <div className="w-10 h-6 bg-slate-100 rounded flex items-center justify-center text-[10px] font-bold text-slate-600">MC</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-5 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><a href="/#products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Products</a></li>
              <li><a href="/#partners" className="text-muted-foreground hover:text-primary transition-colors text-sm">Community</a></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-5 text-sm">Policies</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Refund Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Lowest Weplay. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/refund-policy" className="hover:text-primary transition-colors">Refunds</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Protected by <span className="font-bold text-foreground">Razorpay</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
