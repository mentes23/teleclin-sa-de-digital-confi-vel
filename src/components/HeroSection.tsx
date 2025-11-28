import { Clock, FileText, Headset, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-consulta.png";
import heroLogo from "@/assets/teleclin-hero-logo.png";

const HeroSection = () => {
  const features = [
    { icon: Clock, label: "Médicos 24h" },
    { icon: FileText, label: "Atestados" },
    { icon: Headset, label: "Suporte" },
    { icon: CreditCard, label: "Pagamento Seguro" },
  ];

  return (
    <section id="inicio" className="pt-20 pb-12 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="mb-4">
              <img 
                src={heroLogo} 
                alt="TeleClin - Saúde rápida, segura e digital" 
                className="w-full max-w-md h-auto"
              />
            </div>
            
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary leading-tight">
                Atendimento{" "}
                <span className="underline decoration-4 underline-offset-8">médico online</span>
              </h1>
              
              <div className="flex items-center gap-2">
                <Clock className="w-12 h-12 text-primary" strokeWidth={3} />
                <div>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary">24h</span>
                  <p className="text-base font-bold text-secondary uppercase">disponível!</p>
                </div>
              </div>

              <div className="inline-block bg-secondary text-background px-5 py-2 rounded-full">
                <p className="text-base md:text-lg font-bold">RÁPIDO E SEGURO</p>
              </div>
            </div>
            
            <p className="text-base text-muted-foreground">
              Saúde rápida, segura e digital. Receitas, atestados e orientação sem filas.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-secondary">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Floating Card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-float">
              <img 
                src={heroImage} 
                alt="Médica profissional para consulta online"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Price Card */}
            <Card className="absolute bottom-6 left-6 right-6 p-6 shadow-float bg-background/95 backdrop-blur-sm">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Se consulte agora mesmo:</p>
                  <p className="text-4xl font-bold text-primary">R$ 49,90</p>
                </div>
                <Button variant="cta" size="lg">
                  QUERO ME CONSULTAR
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
