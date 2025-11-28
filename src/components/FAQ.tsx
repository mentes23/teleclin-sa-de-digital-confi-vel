import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é o TeleClin?",
      answer: "TeleClin é uma plataforma de telemedicina que conecta você a médicos qualificados 24 horas por dia, 7 dias por semana. Realize suas consultas online de forma rápida, segura e sem sair de casa, recebendo atestados e receitas digitais válidos."
    },
    {
      question: "Qual o valor da consulta?",
      answer: "O valor da consulta no TeleClin é de apenas R$ 49,90. Não há mensalidades, taxas ocultas ou valores adicionais. Você paga apenas quando utilizar o serviço."
    },
    {
      question: "Há carência ou fidelidade?",
      answer: "Não! No TeleClin você não tem carência nem contrato de fidelidade. Utilize o serviço quando precisar, sem compromissos ou períodos de espera."
    },
    {
      question: "Como funciona o atendimento médico?",
      answer: "Após o pagamento, você será conectado a um médico disponível através de videochamada ou chat. O atendimento é realizado por médicos registrados no CRM, que podem emitir receitas e atestados digitais válidos em todo território nacional."
    },
    {
      question: "Pago algo além dos R$ 49,90?",
      answer: "Não! O valor de R$ 49,90 já inclui a consulta completa, atestado médico (se necessário) e receita digital. Não cobramos nenhum valor adicional pelo serviço."
    },
    {
      question: "A empresa em que trabalho pode se negar a receber um atestado?",
      answer: "Não. De acordo com a Resolução CFM nº 2.227/2018, atestados emitidos por telemedicina têm a mesma validade de atestados presenciais. Seu empregador é obrigado a aceitar o documento."
    },
    {
      question: "Como saber se o médico é um médico mesmo?",
      answer: "Todos os nossos médicos são registrados no Conselho Regional de Medicina (CRM). As informações do médico, incluindo nome completo e número do CRM, são fornecidas durante o atendimento e constam nos documentos emitidos."
    },
    {
      question: "Posso utilizar meu cadastro para um familiar?",
      answer: "Não. Por questões de segurança e sigilo médico, cada pessoa deve ter seu próprio cadastro. Porém, você pode realizar cadastros separados para cada membro da família e todos poderão utilizar o serviço."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            PERGUNTAS FREQUENTES
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4">
                  {index + 1} - {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
