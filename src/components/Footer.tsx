import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import teleclinLogo from "@/assets/teleclin-logo.svg";

const Footer = () => {
  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Perguntas Frequentes", href: "#faq" },
  ];

  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Termos e Condições", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: Mail, text: "contato@teleclin.com.br" },
    { icon: Phone, text: "0800 123 4567" },
    { icon: MapPin, text: "São Paulo, SP - Brasil" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src={teleclinLogo} 
              alt="TeleClin Logo" 
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/80">
              Atendimento médico online 24h por dia. Consultas com médicos qualificados sem sair de casa.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-secondary-foreground/10 hover:bg-primary rounded-full p-2 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informações Legais</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-secondary-foreground/20">
              <p className="text-sm text-secondary-foreground/80">
                CRM: 12345/SP
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <contact.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-foreground/80">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
            <p>
              Copyright © {new Date().getFullYear()} - TeleClin. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido com ❤️ para sua saúde
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
