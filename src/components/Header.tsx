import { Button } from "@/components/ui/button";
import logo from "@/assets/teleclin-logo.svg";
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <header className="fixed top-0 left-0 right-0 bg-background shadow-sm z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors">
            Início
          </button>
          <button onClick={() => scrollToSection("como-funciona")} className="text-foreground hover:text-primary transition-colors">
            Como Funciona
          </button>
          <button onClick={() => scrollToSection("beneficios")} className="text-foreground hover:text-primary transition-colors">
            Benefícios
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Entrar
          </Button>
          <Button variant="cta" size="lg">
            Quero me consultar
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;