import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Legal</p>
              <h1 className="text-3xl font-bold font-display text-foreground">Terms &amp; Conditions</h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/80">
            <Section title="1. Acceptance of Terms">
              <p>By accessing or placing an order on Lowest Weplay ("we", "us", "our"), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our service.</p>
            </Section>

            <Section title="2. Our Service">
              <p>Lowest Weplay is an independent third-party reseller of WePlay coin packages. We are not affiliated with, endorsed by, or officially connected to WePlay or its parent company. All product names and trademarks belong to their respective owners.</p>
            </Section>

            <Section title="3. Eligibility">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You must be at least 18 years old (or the age of majority in your jurisdiction) to make a purchase</li>
                <li>You confirm that the Player ID / UID you provide is accurate and belongs to you</li>
              </ul>
            </Section>

            <Section title="4. Orders &amp; Delivery">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Orders are typically processed and delivered within 5–60 minutes of payment confirmation</li>
                <li>Delivery may be delayed in exceptional circumstances; we will communicate via the email provided</li>
                <li>You are solely responsible for entering the correct Player ID / UID</li>
              </ul>
            </Section>

            <Section title="5. Payments">
              <p>All payments are processed securely through Razorpay. By completing a purchase you agree to Razorpay's Terms of Service. We accept UPI, debit/credit cards, and net banking.</p>
            </Section>

            <Section title="6. Prohibited Use">
              <p>You agree not to use our service for any unlawful purpose, including but not limited to:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1.5">
                <li>Fraudulent chargebacks</li>
                <li>Purchasing coins for accounts you do not own</li>
                <li>Reselling coins in violation of WePlay's terms</li>
              </ul>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>Lowest Weplay is not liable for any indirect, incidental, or consequential damages arising from your use of our service. Our total liability shall not exceed the amount you paid for the order in question.</p>
            </Section>

            <Section title="8. Changes to Terms">
              <p>We reserve the right to update these Terms at any time. Continued use of the service after changes constitutes acceptance of the revised Terms.</p>
            </Section>

            <Section title="9. Contact">
              <p>Questions about these Terms? Email us at <a href="mailto:fluxfindindia@gmail.com" className="text-primary font-medium hover:underline">fluxfindindia@gmail.com</a>.</p>
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
