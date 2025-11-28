import { Clock, FileText, Headset, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-consulta.png";

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-tight">
              Consultas <span className="underline decoration-4 underline-offset-8">médicas</span> 24h por dia!{" "}
              <span className="text-primary block mt-2">SEM SAIR DE CASA.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
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
