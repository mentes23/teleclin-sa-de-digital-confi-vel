import { Heart, Brain, Baby, Bone, Eye, Stethoscope, Pill, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const Specialties = () => {
  const specialties = [
    {
      icon: Heart,
      name: "Cardiologia",
      description: "Cuidados com o coração e sistema circulatório"
    },
    {
      icon: Brain,
      name: "Neurologia",
      description: "Tratamento de doenças do sistema nervoso"
    },
    {
      icon: Baby,
      name: "Pediatria",
      description: "Saúde e desenvolvimento infantil"
    },
    {
      icon: Bone,
      name: "Ortopedia",
      description: "Problemas musculares e ósseos"
    },
    {
      icon: Eye,
      name: "Oftalmologia",
      description: "Cuidados com a visão e saúde ocular"
    },
    {
      icon: Stethoscope,
      name: "Clínica Geral",
      description: "Atendimento médico abrangente"
    },
    {
      icon: Pill,
      name: "Dermatologia",
      description: "Tratamento de pele, cabelo e unhas"
    },
    {
      icon: Activity,
      name: "Psiquiatria",
      description: "Saúde mental e bem-estar emocional"
    }
  ];

  return (
    <section id="especialidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4">
            Especialidades <span className="text-primary">Disponíveis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos você com especialistas em diversas áreas da medicina, prontos para atender 24h por dia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card 
              key={index} 
              className="p-6 hover-scale hover:shadow-float transition-all duration-300 cursor-pointer group animate-fade-in border-2 hover:border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <specialty.icon className="w-8 h-8 text-primary" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {specialty.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {specialty.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-4">
            E muitas outras especialidades disponíveis!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
