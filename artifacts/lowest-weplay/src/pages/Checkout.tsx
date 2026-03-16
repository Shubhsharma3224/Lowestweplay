import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowLeft, Gamepad2, User, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { PRODUCTS, getProductById } from "@/data/products";

const checkoutSchema = z.object({
  weplayId: z.string().min(3, "WePlay ID is required"),
  weplayName: z.string().min(2, "In-game name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  saveInfo: z.boolean().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const [, setLocation] = useLocation();
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState(PRODUCTS[0]); // fallback
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Parse query params
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

    setProductId(pId);
    setProduct(found);
  }, [setLocation]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid }
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    mode: "onChange",
    defaultValues: {
      saveInfo: true
    }
  });

  // Load saved info
  useEffect(() => {
    const saved = localStorage.getItem("weplay_user_info");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.weplayId) setValue("weplayId", parsed.weplayId);
        if (parsed.weplayName) setValue("weplayName", parsed.weplayName);
        if (parsed.email) setValue("email", parsed.email);
        if (parsed.phone) setValue("phone", parsed.phone);
      } catch (e) {}
    }
  }, [setValue]);

  const weplayIdValue = watch("weplayId");

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    if (data.saveInfo) {
      localStorage.setItem("weplay_user_info", JSON.stringify({
        weplayId: data.weplayId,
        weplayName: data.weplayName,
        email: data.email,
        phone: data.phone
      }));
    } else {
      localStorage.removeItem("weplay_user_info");
    }

    // Simulate small delay for UX before redirect
    setTimeout(() => {
      setLocation(`/payment?product=${product.id}`);
    }, 800);
  };

  if (!productId) return null;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[500px]"
      >
        <button 
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="glass-card rounded-[2rem] p-6 md:p-8 shadow-2xl border-white/80 relative">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold font-display mb-4">Complete Your Purchase</h1>
            
            {/* Product Summary Pill */}
            <div className="flex items-center gap-4 bg-slate-100/80 p-3 rounded-2xl border border-border/50">
              <img src={product.image} alt={product.name} className="w-12 h-12 object-contain bg-white rounded-xl p-1 shadow-sm" />
              <div className="flex-1">
                <p className="font-bold text-sm leading-tight">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.desc}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-primary">₹{product.price}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Weplay ID */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">WEPLAY ID <span className="text-destructive">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Gamepad2 className="w-5 h-5 text-muted-foreground" />
                </div>
                <input
                  {...register("weplayId")}
                  className={`w-full pl-12 pr-10 py-3.5 bg-white border ${errors.weplayId ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:border-primary focus:ring-primary/20'} rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                  placeholder="e.g., WP123456"
                />
                {weplayIdValue && weplayIdValue.length >= 3 && !errors.weplayId && (
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                )}
              </div>
              {errors.weplayId && <p className="mt-1 text-xs text-destructive">{errors.weplayId.message}</p>}
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">WEPLAY NAME <span className="text-destructive">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <input
                  {...register("weplayName")}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white border ${errors.weplayName ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:border-primary focus:ring-primary/20'} rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                  placeholder="Your in-game display name"
                />
              </div>
              {errors.weplayName && <p className="mt-1 text-xs text-destructive">{errors.weplayName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">EMAIL ADDRESS <span className="text-destructive">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white border ${errors.email ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:border-primary focus:ring-primary/20'} rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                  placeholder="For payment confirmation"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">PHONE NUMBER <span className="text-muted-foreground font-normal">(Optional)</span></label>
              <div className="relative flex">
                <div className="flex-shrink-0 flex items-center justify-center px-4 bg-slate-50 border border-r-0 border-border rounded-l-xl text-muted-foreground text-sm font-medium">
                  +91
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <input
                    {...register("phone")}
                    className="w-full pl-9 pr-4 py-3.5 bg-white border border-border focus:border-primary rounded-r-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-200"
                    placeholder="For delivery updates"
                  />
                </div>
              </div>
            </div>

            {/* Save Info */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="saveInfo"
                {...register("saveInfo")}
                className="w-5 h-5 rounded text-primary focus:ring-primary border-border"
              />
              <label htmlFor="saveInfo" className="text-sm text-muted-foreground cursor-pointer select-none">
                Save info for next time
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full mt-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                </>
              ) : (
                "PROCEED TO PAYMENT →"
              )}
            </button>
            <p className="text-center text-xs text-muted-foreground mt-4">
              By proceeding, you agree to our Terms of Service & Privacy Policy.
            </p>
          </form>

        </div>
      </motion.div>
    </div>
  );
}
