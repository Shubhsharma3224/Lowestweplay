import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Legal</p>
              <h1 className="text-3xl font-bold font-display text-foreground">Refund Policy</h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/80">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="font-semibold text-amber-800">Important Notice</p>
              <p className="mt-1 text-amber-700">Because WePlay coins are a digital, instantly delivered product, all sales are generally final. Please read the conditions below carefully before purchasing.</p>
            </div>

            <Section title="1. When Refunds Are Eligible">
              <p>We will process a full refund in the following situations:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1.5">
                <li>Your payment was deducted but the order was not fulfilled within 24 hours</li>
                <li>You were charged twice for the same order</li>
                <li>A technical error caused an incorrect amount to be charged</li>
              </ul>
            </Section>

            <Section title="2. Non-Refundable Situations">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Coins successfully delivered to the provided Player ID / UID</li>
                <li>Wrong Player ID / UID entered by the customer — please double-check before ordering</li>
                <li>Change of mind after a successful delivery</li>
                <li>Account banned or restricted by WePlay for unrelated reasons</li>
              </ul>
            </Section>

            <Section title="3. How to Request a Refund">
              <p>Email us at <a href="mailto:fluxfindindia@gmail.com" className="text-primary font-medium hover:underline">fluxfindindia@gmail.com</a> within <strong>48 hours</strong> of your purchase with:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1.5">
                <li>Your full name</li>
                <li>Order / transaction ID (from your payment confirmation)</li>
                <li>Player ID / UID used</li>
                <li>Screenshot of the payment receipt</li>
              </ul>
            </Section>

            <Section title="4. Refund Processing Time">
              <p>Approved refunds are credited within <strong>5–7 business days</strong> to the original payment method. The exact time depends on your bank or payment provider.</p>
            </Section>

            <Section title="5. Contact">
              <p>For refund queries write to <a href="mailto:fluxfindindia@gmail.com" className="text-primary font-medium hover:underline">fluxfindindia@gmail.com</a>. We aim to respond within 24 hours.</p>
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
