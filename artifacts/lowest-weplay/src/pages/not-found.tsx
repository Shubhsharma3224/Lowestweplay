import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full glass-card p-8 rounded-3xl text-center shadow-xl">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold font-display mb-2 text-foreground">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button className="w-full px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
