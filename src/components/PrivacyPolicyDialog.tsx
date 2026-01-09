import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

const PrivacyPolicyDialog = ({ children }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Política de Privacidade</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h3 className="text-foreground font-bold text-base mb-2">1. Introdução</h3>
              <p>
                A presente Política de Privacidade descreve como são tratados os dados pessoais dos utilizadores deste site, dedicado à venda de carvão, batatas e cebolas. A proteção da privacidade e dos dados pessoais dos nossos clientes é uma prioridade, sendo todo o tratamento de dados realizado em conformidade com a legislação aplicável em matéria de proteção de dados.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">2. Dados Pessoais Recolhidos</h3>
              <p className="mb-2">
                Este site não possui sistema de registo de utilizadores. Os dados pessoais são fornecidos exclusivamente de forma voluntária, quando o cliente entra em contacto connosco através de mensagens (por exemplo, WhatsApp, e-mail, formulário de contacto ou redes sociais).
              </p>
              <p className="mb-2">Os dados que podem ser recolhidos incluem:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nome</li>
                <li>Empresa</li>
                <li>Número de identificação fiscal</li>
                <li>Número de telefone</li>
                <li>Endereço de e-mail</li>
                <li>Conteúdo da mensagem enviada pelo cliente</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">3. Finalidade do Tratamento dos Dados</h3>
              <p className="mb-2">Os dados pessoais recolhidos são utilizados apenas para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder a pedidos de informação</li>
                <li>Processar encomendas</li>
                <li>Comunicar com o cliente sobre preços, disponibilidade e entrega de produtos</li>
                <li>Cumprir obrigações legais, quando aplicável</li>
              </ul>
              <p className="mt-2">
                Os dados não serão utilizados para fins de marketing automático nem para envio de comunicações não solicitadas.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">4. Partilha de Dados com Terceiros</h3>
              <p className="mb-2">
                Os dados pessoais dos clientes não são vendidos, partilhados ou cedidos a terceiros, exceto quando necessário para:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cumprimento de obrigações legais</li>
                <li>Execução do serviço de entrega (por exemplo, fornecimento da morada ao transportador)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">5. Conservação dos Dados</h3>
              <p>
                Os dados pessoais são conservados apenas pelo tempo necessário para responder ao contacto do cliente, concluir a encomenda ou cumprir obrigações legais. Após esse período, os dados são eliminados de forma segura.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">6. Segurança dos Dados</h3>
              <p>
                São adotadas medidas técnicas e organizativas adequadas para proteger os dados pessoais contra perda, uso indevido, acesso não autorizado, divulgação ou alteração.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">7. Direitos dos Titulares dos Dados</h3>
              <p className="mb-2">Nos termos da lei, o cliente tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Aceder aos seus dados pessoais</li>
                <li>Solicitar a correção de dados incorretos ou incompletos</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Limitar ou opor-se ao tratamento dos dados</li>
              </ul>
              <p className="mt-2">
                Para exercer qualquer um destes direitos, o cliente pode entrar em contacto através dos meios habituais de comunicação.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">8. Cookies</h3>
              <p>
                Este site pode utilizar apenas cookies essenciais ao seu funcionamento. Não são utilizados cookies para fins de rastreamento, publicidade ou análise sem o consentimento do utilizador.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">9. Alterações à Política de Privacidade</h3>
              <p>
                Esta Política de Privacidade pode ser atualizada ocasionalmente. Quaisquer alterações serão publicadas nesta página.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-bold text-base mb-2">10. Contactos</h3>
              <p>
                Para qualquer questão relacionada com esta Política de Privacidade ou com o tratamento dos seus dados pessoais, o cliente pode contactar-nos através dos canais disponíveis no site.
              </p>
            </section>

            <p className="text-sm pt-4 border-t border-border">
              Última atualização: 18/12/2025
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
