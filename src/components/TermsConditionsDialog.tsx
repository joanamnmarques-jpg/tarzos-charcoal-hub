import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsConditionsDialogProps {
  children: React.ReactNode;
}

const TermsConditionsDialog = ({ children }: TermsConditionsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Termos e Condições</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h3 className="text-foreground font-semibold mb-2">1. Identificação</h3>
              <p>
                Os presentes Termos e Condições regulam a utilização deste site, destinado à venda de carvão. Ao contactar-nos através do site ou por mensagem, o utilizador concorda com os termos aqui descritos.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">2. Objeto do Site</h3>
              <p className="mb-2">
                Este site tem como finalidade exclusivamente informativa, destinando-se a apresentar os produtos disponíveis (carvão) e os meios de contacto do vendedor.
              </p>
              <p className="mb-2 font-semibold text-foreground">
                ⚠️ Não é possível efetuar compras, pagamentos ou encomendas diretamente através do site.
              </p>
              <p className="mb-2">O contacto realizado pelo site serve apenas para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Solicitar informações</li>
                <li>Pedir orçamentos</li>
                <li>Iniciar um contacto comercial</li>
              </ul>
              <p className="mt-2">
                Qualquer venda ou encomenda só ocorre fora do site, através de contacto direto por mensagem ou telefone.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">3. Processo de Encomenda</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>O cliente entra em contacto através dos meios disponibilizados no site (ex.: WhatsApp, telefone, e-mail ou redes sociais).</li>
                <li>São prestadas informações sobre preço, quantidade, disponibilidade e entrega.</li>
                <li>Nenhuma encomenda é realizada ou concluída através do site.</li>
                <li>A venda apenas é considerada válida após acordo direto entre o cliente e o vendedor, realizado fora do site.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">4. Preços e Pagamentos</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Os preços indicados são informados por mensagem e podem estar sujeitos a alteração sem aviso prévio.</li>
                <li>O método de pagamento será acordado diretamente com o cliente (ex.: dinheiro, transferência bancária ou outro meio disponível).</li>
                <li>O pagamento pode ser exigido antes ou no momento da entrega, conforme acordado.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">5. Entregas</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>As entregas são efetuadas no local e data acordados com o cliente.</li>
                <li>O cliente deve garantir que alguém esteja disponível para receber a encomenda.</li>
                <li>Eventuais atrasos decorrentes de fatores externos (trânsito, condições climatéricas, avarias, entre outros) não poderão ser imputados ao vendedor.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">6. Qualidade do Produto</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>O carvão vendido cumpre os padrões normais de qualidade para o seu fim.</li>
                <li>Pequenas variações de tamanho, peso ou aparência são consideradas normais e não constituem defeito.</li>
                <li>O cliente deve verificar o produto no momento da entrega.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">7. Cancelamentos e Devoluções</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Qualquer pedido de cancelamento deverá ser comunicado com a maior antecedência possível.</li>
                <li>As situações de cancelamento, alteração ou eventual devolução serão analisadas caso a caso, conjuntamente com o cliente, tendo em conta o estado da encomenda, logística e demais circunstâncias.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">8. Responsabilidade</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>O vendedor não se responsabiliza por uso indevido do produto após a entrega.</li>
                <li>A responsabilidade do vendedor limita-se ao valor pago pelo produto adquirido.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">9. Proteção de Dados</h3>
              <p>
                Os dados pessoais fornecidos pelos clientes são tratados de acordo com a nossa Política de Privacidade, disponível neste site.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">10. Alterações aos Termos e Condições</h3>
              <p>
                Reservamo-nos o direito de alterar os presentes Termos e Condições a qualquer momento. As alterações entram em vigor após a sua publicação no site.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">11. Lei Aplicável</h3>
              <p>
                Os presentes Termos e Condições são regidos pela legislação aplicável no país onde a atividade é exercida.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">12. Contactos</h3>
              <p>
                Para qualquer questão relacionada com estes Termos e Condições, o cliente poderá contactar-nos através dos meios indicados no site.
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

export default TermsConditionsDialog;
