import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Lock, Loader2 } from "lucide-react";
import { getProductById } from "@/data/products";

export default function Payment() {
  const [, setLocation] = useLocation();
  const [productLink, setProductLink] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const pId = searchParams.get("product");
    
    if (!pId) {
      setLocation("/");
      return;
    }

    const found = getProductById(pId);
    if (!found) {
      setLocation("/");
      return;
    }

    setProductLink(found.link);

    // Redirect after 1.5 seconds
    const timer = setTimeout(() => {
      window.location.href = found.link;
    }, 1500);

    return () => clearTimeout(timer);
  }, [setLocation]);

  if (!productLink) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-[2rem] p-10 text-center max-w-md w-full border-white shadow-2xl"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Lock className="w-3 h-3 text-secondary" />
          </div>
        </div>

        <h2 className="text-2xl font-bold font-display mb-3">Preparing Secure Payment...</h2>
        <p className="text-muted-foreground mb-8">
          Please wait while we redirect you to Razorpay to complete your transaction securely.
        </p>

        <a 
          href={productLink}
          className="text-sm font-medium text-primary hover:underline"
        >
          Click here if not redirected automatically
        </a>
      </motion.div>
    </div>
  );
}
