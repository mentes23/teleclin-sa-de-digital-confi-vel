import { Clock, FileText, Headset, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-consulta.png";
import heroLogo from "@/assets/teleclin-hero-logo.png";
const HeroSection = () => {
  const features = [{
    icon: Clock,
    label: "Médicos 24h"
  }, {
    icon: FileText,
    label: "Atestados"
  }, {
    icon: Headset,
    label: "Suporte"
  }, {
    icon: CreditCard,
    label: "Pagamento Seguro"
  }];
  return <section id="inicio" className="pt-20 pb-12 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="mb-4 animate-fade-in flex justify-center">
              <img src={heroLogo} alt="TeleClin - Saúde rápida, segura e digital" className="w-full max-w-md h-auto" />
            </div>
            
            
            
            

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              {features.map((feature, index) => (
                <Card key={index} className="p-3 flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
                  <feature.icon className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium text-center">{feature.label}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Floating Card */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="rounded-2xl overflow-hidden shadow-float">
              <img src={heroImage} alt="Médica profissional para consulta online" className="w-full h-auto object-contain" />
            </div>

            {/* Floating Price Card */}
            <Card className="absolute bottom-6 left-6 right-6 p-6 shadow-float bg-background/95 backdrop-blur-sm animate-scale-in" style={{
            animationDelay: '0.6s'
          }}>
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
    </section>;
};
export default HeroSection;