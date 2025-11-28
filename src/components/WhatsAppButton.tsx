import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Número do WhatsApp
  const message = "Olá! Gostaria de agendar uma consulta.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:animate-pulse" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
