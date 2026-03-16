import { motion } from "framer-motion";
import { Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-4xl font-bold font-display text-foreground mb-3">Contact Us</h1>
            <p className="text-muted-foreground max-w-md mx-auto">We're here to help. Reach out for order issues, queries, or anything else.</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            <motion.a
              href="mailto:fluxfindindia@gmail.com"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary/25 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-3">For order issues, refunds, and general questions</p>
                <span className="text-primary font-semibold text-sm break-all">fluxfindindia@gmail.com</span>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Support Hours</h3>
                <p className="text-sm text-muted-foreground mb-1">Every Day, All Year</p>
                <p className="text-sm font-semibold text-foreground">24 × 7 Live Support</p>
                <p className="text-xs text-muted-foreground mt-2">We're always here whenever you need us</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Based In</h3>
                <p className="text-sm text-muted-foreground mb-1">India</p>
                <p className="text-sm font-semibold text-foreground">Serving customers nationwide</p>
                <p className="text-xs text-muted-foreground mt-2">All prices in INR (₹)</p>
              </div>
            </motion.div>
          </div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary/5 to-violet-500/5 border border-primary/15 rounded-3xl p-8 text-center"
          >
            <h2 className="text-xl font-bold font-display mb-2">Have an order issue?</h2>
            <p className="text-muted-foreground text-sm mb-6">Email us your transaction ID and Player ID and we'll resolve it fast.</p>
            <a
              href="mailto:fluxfindindia@gmail.com?subject=Order Issue - Lowest Weplay"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-violet-600 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              fluxfindindia@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
