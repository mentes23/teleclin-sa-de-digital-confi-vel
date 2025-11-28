import { Button } from "@/components/ui/button";
import logo from "@/assets/teleclin-logo.svg";
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <button 
            onClick={() => scrollToSection("inicio")} 
            className="text-foreground font-medium hover:text-primary transition-all duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection("como-funciona")} 
            className="text-foreground font-medium hover:text-primary transition-all duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection("beneficios")} 
            className="text-foreground font-medium hover:text-primary transition-all duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
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