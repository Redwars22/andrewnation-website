# SGTRod (Sistema de Gerenciamento de Transporte Rodoviário)

**MAIS DETALHES EM BREVE**

Este é um sistema robusto para gestão de frotas de ônibus, motoristas, itinerários (linhas) e emissão de passagens com escolha de poltronas. Desenvolvido com **Laravel 12** e **Filament PHP v3** (painel administrativo ultra responsivo).

## **🚀 Como Rodar o Projeto**

Graças aos scripts configurados no seu composer.json, você só precisa de dois comandos para deixar tudo rodando:

### **1\. Instalação e Setup Inicial**

Prepara o ambiente, gera a chave, roda as migrations e compila os assets:

> composer setup

### **2\. Iniciar Servidores (Desenvolvimento)**

Inicia o servidor Laravel, a fila de processamento (queue), o monitor de logs (pail) e o Vite, tudo simultaneamente:

> php artisan serve

## **📂 Estrutura de Dados (Modelos)**

Aqui está como as peças do sistema se conectam:

| Modelo | O que faz? | Relações Principais |
| :---- | :---- | :---- |
| **Bus** (Ônibus) | Cadastro físico do veículo (placa, capacidade, modelo). | Possui várias Viagens (trips). |
| **Driver** (Motorista) | Cadastro de quem dirige (CNH, CPF, telefone e status). | Usado na escala de Viagens. |
| **Trip** (Linha/Viagem) | Define o itinerário principal, ônibus, motorista e dias da semana que opera. | Pertence a um Bus e um Driver. Possui várias Seções (sections). |
| **TripSection** (Seção/Parada) | As paradas do itinerário, horários de embarque e preços de cada trecho. | Pertence a uma Trip. |
| **Seat** (Poltrona) | Controle de ocupação física de uma poltrona em uma data específica. | Aponta para Trip e TripSection. |
| **Ticket** (Passagem) | O bilhete emitido para o passageiro com dados de pagamento e poltrona. | Pertence a Trip e TripSection. |

## **🎨 Recursos do Painel Administrativo (Filament)**

### **📊 Dashboard (StatsOverview)**

Exibe os principais KPIs (indicadores) da empresa em tempo real no topo da página:

* **Total de Ônibus** ativos na frota.  
* **Motoristas Ativos** prontos para viagem.  
* **Linhas/Viagens** programadas.  
* **Bilhetes Emitidos** no mês corrente.  
* **Faturamento Bruto** estimado acumulado do mês corrente.

### **🚍 Gestão de Frotas (BusResource)**

* Cadastro de prefixo, placa única, modelo e capacidade.  
* Bloqueio/ativação rápida de veículos.

### **🪪 Cadastro de Motoristas (DriverResource)**

* Validações de segurança para CNH e CPF (com máscaras de input).  
* Controle de disponibilidade do motorista.

### **🗺️ Linhas e Itinerários (TripResource)**

Onde a mágica acontece\! Você monta a viagem completa:

1. **Escala:** Seleciona o ônibus e o motorista.  
2. **Dias de Operação:** Checkbox para os dias da semana que a linha funciona.  
3. **Configuração de Poltronas:** Limita a venda conforme a capacidade real do veículo (com regra de validação para impedir que vendam mais assentos do que o ônibus suporta).  
4. **Itinerário Dinâmico:** Um *Repeater* (repetidor) onde você adiciona as cidades, horários e preços de cada trecho de forma flexível.

### **🎟️ Emissão de Passagens (TicketResource)**

Uma tela de vendas inteligente:

* **Datas Inteligentes:** O calendário desabilita automaticamente os dias da semana em que aquela linha específica não opera.  
* **Busca de Preço:** O valor da passagem atualiza sozinho de acordo com o trecho selecionado.  
* **Mapa de Poltronas:** Integração visual (bus-map) para selecionar o assento ideal.  
* **Impressão de Bilhete:** Pré-visualização do bilhete (ticket-preview) pronta para o passageiro.

## **🛠️ Tecnologias Utilizadas**

* **Laravel 12** (Core do backend)  
* **Filament PHP v3** (Painel administrativo completo e elegante)  
* **Simple QR Code** (Preparado para gerar códigos QR em passagens)  
* **AlpineJS** (Interfaces interativas rápidas)
