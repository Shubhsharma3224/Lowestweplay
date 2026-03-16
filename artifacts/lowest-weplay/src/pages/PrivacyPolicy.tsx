import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Legal</p>
              <h1 className="text-3xl font-bold font-display text-foreground">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/80">
            <Section title="1. Information We Collect">
              <p>When you use Lowest Weplay, we collect the following information to process your order:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1.5">
                <li>Your name and game player ID / UID</li>
                <li>Email address (if provided for order confirmation)</li>
                <li>Payment details — processed securely by Razorpay; we do not store card or UPI details</li>
                <li>IP address and browser information for fraud prevention</li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To fulfill your coin top-up order</li>
                <li>To send you order confirmation and support communications</li>
                <li>To detect and prevent fraudulent transactions</li>
                <li>To improve our service and website experience</li>
              </ul>
            </Section>

            <Section title="3. Data Sharing">
              <p>We do not sell or rent your personal data to third parties. We share data only with:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1.5">
                <li><strong>Razorpay</strong> — payment processing (governed by their privacy policy)</li>
                <li>Law enforcement when legally required</li>
              </ul>
            </Section>

            <Section title="4. Data Security">
              <p>All payment transactions are encrypted using SSL/TLS. We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse.</p>
            </Section>

            <Section title="5. Cookies">
              <p>We use essential cookies to keep your session active during checkout. We do not use tracking or advertising cookies.</p>
            </Section>

            <Section title="6. Your Rights">
              <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:fluxfindindia@gmail.com" className="text-primary font-medium hover:underline">fluxfindindia@gmail.com</a>.</p>
            </Section>

            <Section title="7. Contact">
              <p>For any privacy-related questions, write to us at <a href="mailto:fluxfindindia@gmail.com" className="text-primary font-medium hover:underline">fluxfindindia@gmail.com</a>.</p>
            </Section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border pb-8">
      <h2 className="text-base font-bold text-foreground mb-3">{title}</h2>
      {children}
    </div>
  );
}
