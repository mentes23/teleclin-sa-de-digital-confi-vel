import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      text: "Faça seu cadastro em nossa plataforma de forma rápida e simples.",
    },
    {
      number: "2",
      text: "Efetue o pagamento e comece seu atendimento médico na mesma hora.",
    },
    {
      number: "3",
      text: "Sempre que precisar de atendimento médico é só acessar nossa plataforma.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          COMO FUNCIONA?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <Card 
              key={step.number}
              className="relative p-8 bg-primary text-primary-foreground shadow-card hover:shadow-float transition-shadow"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{step.number}</span>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="text-center text-base leading-relaxed">
                  {step.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
