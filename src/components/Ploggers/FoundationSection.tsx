 import { ExternalLink } from "lucide-react";
 
 const FoundationSection = () => {
   return (
     <section className="section-padding border-t border-border/50">
       <div className="container-wide">
         <div className="max-w-3xl mx-auto text-center">
           <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
             An Initiative By
           </p>
           <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
             Vinit Abhedya Foundation
           </h3>
           <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
             Chh. Sambhajinagar Ploggers is a grassroots environmental initiative 
             under the Vinit Abhedya Foundation, working to create healthier, 
             cleaner, and more connected communities through collective action.
           </p>
           <a
             href="#"
             className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
           >
             Learn more about the Foundation
             <ExternalLink className="w-4 h-4" />
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default FoundationSection;