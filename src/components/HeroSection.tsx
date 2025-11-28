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
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src={heroLogo} 
                alt="TeleClin - Saúde rápida, segura e digital" 
                className="w-full max-w-md h-auto"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-tight">
                Atendimento{" "}
                <span className="underline decoration-4 underline-offset-8">médico online</span>
              </h1>
              
              <div className="flex items-center gap-3">
                <Clock className="w-16 h-16 text-primary" strokeWidth={3} />
                <div>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary">24h</span>
                  <p className="text-lg font-bold text-secondary uppercase">disponível!</p>
                </div>
              </div>

              <div className="inline-block bg-secondary text-background px-6 py-3 rounded-full">
                <p className="text-lg md:text-xl font-bold">RÁPIDO E SEGURO</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mt-6">
              Saúde rápida, segura e digital. Receitas, atestados e orientação sem filas.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
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
