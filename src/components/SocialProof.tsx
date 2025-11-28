import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, Lock } from "lucide-react";

const SocialProof = () => {
  const trustBadges = [
    { icon: ShieldCheck, label: "Compra Segura" },
    { icon: Award, label: "Satisfação Garantida" },
    { icon: Lock, label: "Privacidade Protegida" },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            200 mil brasileiros atendidos e satisfeitos
          </h2>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto bg-background rounded-2xl p-8 shadow-float">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="text-left">
                <p className="text-primary font-semibold mb-1">Se consulte agora mesmo:</p>
                <p className="text-5xl font-bold text-primary">R$ 49,90</p>
              </div>
              <Button variant="cta" size="lg" className="text-lg px-10">
                QUERO ME CONSULTAR
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 flex-wrap pt-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground">
                <badge.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
