import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const cadastroSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  genero: z.enum(["Masculino", "Feminino", "Não-binário"], {
    required_error: "Gênero é obrigatório",
  }),
  cpf: z.string().trim().min(11, "CPF deve ter 11 dígitos").max(14),
  celular: z.string().trim().min(10, "Celular inválido").max(15),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  cep: z.string().trim().min(8, "CEP deve ter 8 dígitos").max(9),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

const Cadastro = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    genero: "" as "Masculino" | "Feminino" | "Não-binário" | "",
    cpf: "",
    celular: "",
    dataNascimento: "",
    cep: "",
    senha: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = cadastroSchema.parse(formData);

      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.senha,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
        },
      });

      if (signUpError) throw signUpError;
      if (!authData.user) throw new Error("Erro ao criar usuário");

      const { error: profileError } = await supabase.from("profiles").insert({
        user_id: authData.user.id,
        nome: validatedData.nome,
        cpf: validatedData.cpf,
        celular: validatedData.celular,
        data_nascimento: validatedData.dataNascimento,
        genero: validatedData.genero,
        cep: validatedData.cep,
      });

      if (profileError) throw profileError;

      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Você já pode acessar sua conta.",
      });

      navigate("/");
    } catch (error: any) {
      console.error("Erro ao cadastrar:", error);
      toast({
        title: "Erro ao cadastrar",
        description: error.message || "Verifique os dados e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl p-8 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-10 h-2 bg-primary"></div>
              <div className="w-2 h-10 bg-primary absolute"></div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">Cadastro</h1>
        <p className="text-center text-muted-foreground mb-6">
          Preencha o formulário abaixo para ter acesso à nossa área exclusiva do consumidor.
          <br />
          Apenas itens marcados com <span className="text-destructive">*</span> são obrigatórios.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nome">
              Nome <span className="text-destructive">*</span>
            </Label>
            <Input
              id="nome"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">
              E-mail <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label>
              Gênero <span className="text-destructive">*</span>
            </Label>
            <RadioGroup
              value={formData.genero}
              onValueChange={(value) =>
                setFormData({ ...formData, genero: value as typeof formData.genero })
              }
              className="mt-2 space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Masculino" id="masculino" />
                <Label htmlFor="masculino" className="font-normal">
                  Masculino
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Feminino" id="feminino" />
                <Label htmlFor="feminino" className="font-normal">
                  Feminino
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Não-binário" id="nao-binario" />
                <Label htmlFor="nao-binario" className="font-normal">
                  Não-binário
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="cpf">
              CPF <span className="text-destructive">*</span>
            </Label>
            <Input
              id="cpf"
              required
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="celular">
              Celular <span className="text-destructive">*</span>
            </Label>
            <Input
              id="celular"
              required
              placeholder="(00) 00000-0000"
              value={formData.celular}
              onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="dataNascimento">
              Data de Nascimento <span className="text-destructive">*</span>
            </Label>
            <Input
              id="dataNascimento"
              type="date"
              required
              value={formData.dataNascimento}
              onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
              className="mt-1"
            />
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-4">Endereço</h2>
            <div>
              <Label htmlFor="cep">
                CEP <span className="text-destructive">*</span>
              </Label>
              <Input
                id="cep"
                required
                placeholder="00000-000"
                value={formData.cep}
                onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="senha">
              Senha <span className="text-destructive">*</span>
            </Label>
            <Input
              id="senha"
              type="password"
              required
              value={formData.senha}
              onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
              className="mt-1"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => navigate("/")}
              disabled={loading}
            >
              Voltar
            </Button>
            <Button type="submit" className="flex-1" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </div>
        </form>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          Já tem uma conta?{" "}
          <Button variant="link" className="p-0" onClick={() => navigate("/login")}>
            Faça login
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;
