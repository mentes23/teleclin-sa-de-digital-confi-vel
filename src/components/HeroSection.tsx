import { Clock, FileText, Headset, CreditCard, Users, ShieldCheck, Award, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulta.png";
import heroLogo from "@/assets/teleclin-hero-logo.png";

const HeroSection = () => {
  const features = [
    { icon: Clock, label: "Médicos 24h" },
    { icon: FileText, label: "Atestados" },
    { icon: Headset, label: "Suporte Total" },
    { icon: CreditCard, label: "Pagamento Seguro" },
    { icon: Users, label: "Todas as Idades" }
  ];

  const trustBadges = [
    { icon: ShieldCheck, label: "Compra Segura" },
    { icon: Award, label: "Satisfação Garantida" },
    { icon: Lock, label: "Privacidade Protegida" },
  ];

  return (
    <section id="inicio" className="pt-20 pb-0 bg-gradient-to-br from-secondary/5 to-background relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Logo */}
            <div className="animate-fade-in">
              <img 
                src={heroLogo} 
                alt="TeleClin - Saúde rápida, segura e digital" 
                className="w-full max-w-sm h-auto mx-auto lg:mx-0" 
              />
            </div>
            
            {/* Headline */}
            <div className="animate-fade-in space-y-3" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Atendimento médico online 24h por dia!
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-accent">
                SEM SAIR DE CASA.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 hover:bg-primary/20 transition-colors"
                >
                  <div className="bg-background rounded-full p-2">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Decorative Elements */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-3xl -z-10 animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-3xl -z-10 animate-scale-in" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/4 -right-4 text-primary/30 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 0v40M0 20h40" stroke="currentColor" strokeWidth="4"/>
              </svg>
            </div>
            <div className="absolute bottom-1/4 -left-4 text-accent/30 animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
                <path d="M15 0v30M0 15h30" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </div>

            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-float relative z-10">
              <img 
                src={heroImage} 
                alt="Médica profissional para consulta online" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Conversion Bar */}
      <div className="bg-secondary py-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center md:text-left">
              <p className="text-secondary-foreground/80 text-sm mb-2">Se consulte agora mesmo:</p>
              <p className="text-5xl md:text-6xl font-bold text-primary">R$ 49,90</p>
            </div>
            <Button variant="cta" size="lg" className="text-lg px-12 py-6 h-auto">
              QUERO ME CONSULTAR
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8 pt-6 border-t border-secondary-foreground/20">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-secondary-foreground/90">
                <badge.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;