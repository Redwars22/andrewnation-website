# VIAÇÃO PARANAENSE FULLSTACK (NUXT)

Projeto fullstack com Nuxt para uma empresa fictícia de transporte intermunicipal e interestadual.

[▶️ EXECUTAR ONLINE](https://viacaoparanaense.vercel.app/)

[📁 CÓDIGO-FONTE (GITHUB)](https://github.com/andrewnationdev/viacao-paranaense-fullstack)

## INTRODUÇÃO

Este é o meu primeiro projeto fullstack com o framework NuxtJS/VueJS. Sempre uso ReactJS, normalmente com NextJS, nos meus projetos, sobretudo nos maiores, porém desta vez quis fazer este com NuxtJS, tanto para aprender e ver como funciona na prática, quanto para tirar conclusões pessoais de como ele se difere do NextJS e em quais contextos performaria melhor. Criei o projeto pensando no fluxo de compra de passagens intermunicipais e interestaduais de empresas de transporte reais. A partir de um breve estudo e análise desses fluxos, surgiu este projeto.

## CAPTURAS DE TELA E CONCEITO DE INTERFACE

<div style="display: flex; gap: 10px; justify-content: space-between;">
  <img src="https://andrewnationdev.vercel.app/img/viacao-paranaense/img1.png" alt="Fluxo inicial da compra de passagens" style="width: 32%; border-radius: 8px;">
  <img src="https://andrewnationdev.vercel.app/img/viacao-paranaense/img2.png" alt="Escolha da viagem" style="width: 32%; border-radius: 8px;">
  <img src="https://andrewnationdev.vercel.app/img/viacao-paranaense/img3.png" alt="Verificar bilhetes comprados anteriormente" style="width: 32%; border-radius: 8px;">
</div>

## USO E INSTALAÇÃO
Após descompactar o projeto, execute o seguinte comando no terminal para instalar as dependências e executá-lo em `localhost`: `pnpm install && npm run dev`

## TECNOLOGIAS EMPREGADAS

- Empregou-se o Nuxt para o front-end e back-end dada a sua estrutura simples e concisa, além da facilidade de uso e implementação dos seus recursos (fetching, criação de APIs, stores e composables, etc).

- Para os ícones, empregou-se a biblioteca `lucide-vue-next`, pela sua facilidade de implementação, grande número de ícones em seu repositório e disponibilidade.

- O TailwindCSS é o que usei para a estilização de toda a interface, dispensando o uso de CSS customizado e garantindo uma interface mais limpa, organizada e responsiva usando e reaproveitando ferramentas e classes já existentes usadas por inúmeros sites.

- Para a geração de códigos hash, empregou-se a biblioteca `crypto`. A geração de PDF das passagens a serem impressas é possível por meio do `html2pdf.js`, o qual gera arquivos PDF a partir de components HTML. O `maska` foi empregado no campo de CPF para lidar com a máscara enquanto o usuário digita, ao passo que `qrcode-vue` foi usado para gerar códigos QR das passagens.

## FUNCIONALIDADES IMPLEMENTADAS

- Compra e busca de passagens por origem, destino e data de viagem.
- Escolha de poltronas dentre as disponíveis para aquela viagem.
- Geração e impressão de passagens em PDF com QR-Code.

## API

Todos os endpoints da API são acessíveis através da URL `/api/endpoint`, sendo que alguns requerem parâmetros específicos.

### GET_ROUTES

Este endpoint retorna todas as rotas disponíveis e é a partir daqui que o sistema monta as combinações de origem e destino. Ele também fornece as rotas de viagem para o endpoint `get_viagens`. O retorno da API é um array do tipo `IRoutes[]`, assim:

```ts
interface IRoutes {
    id: number;
    id_origin: number;
    id_destination: number;
    duration: TDateTime;
    price: number;
    service: TServices;
    departures: IDepartures[],
}
```

Todas as tipagens localizam-se em `types/schema.ts`.

### GET_ASSENTOS_DISPONIVEIS

Este endpoint retorna os assentos disponíveis para a viagem escolhida. Recebe como parâmetros `id_origin` com o código da cidade de origem (um inteiro), `id_destination` com o código da cidade de destino (também um número inteiro) e `date` com a data da viagem. Ele retorna o seguinte objeto, com o `status` e um array do tipo `ISeat[]` com todos assentos do veículo, indicando para cada um se estão disponíveis ou não).

```ts
interface ISeatsEndpoint {
    status: IStatus;
    data: {
        available_seats: ISeat[];
        message: string | undefined;
    }
}
```

```ts
interface ISeat {
    id: number;
    label: string;
    isOccupied: boolean;
}
```

### GET_CIDADES

Retorna um array to tipo `ICity[]` com os códigos, ids e nomes legíveis das cidades atendidas pela empresa em suas rotas.

```ts
export interface ICity {
    id: number;
    code: string;
    name: string;
}
```

### GET_ITINERARIO

Retorna o itinerário (nome da linha) a ser impresso na passagem em formato legível para o usuário, tomando como parâmetros `id_origin` (id da cidade de origem) e `id_destination` (id da cidade de destino). Em `itinerary`, tem-se o nome da linha no formato `ORIGEM X DESTINO` (Ex: `CURITIBA X PONTA GROSSA`).

```ts
export interface IItinerario {
    itinerary: string;
    originCode: string;
    destinationCode: string;
}
```

### GET_VIAGENS

Recebe como parâmetro `date`, a data da partida, e retorna todas as viagens para o usuário disponíveis para aquela data, realizando a filtragem (por exemplo, mostrando apenas as passagens até 3 horas antes do horário de embarque). Ele recebe todas as rotas do endpoint `get_routes`. O retorno é um array do tipo `IRoutes[]`.

```ts
interface IRoutes {
    id: number;
    id_origin: number;
    id_destination: number;
    duration: TDateTime;
    price: number;
    service: TServices;
    departures: IDepartures[],
}
```

### HANDLE_TICKET

É responsável por gerar a passagem para o usuário. Requer como parâmetros o `id_origin`, `price` (preço do trecho), `service` (tipo de serviço), `id_destination`, `date` (data da partida), `passengers` (passageiros e os seus dados), `departure_time` (horário de partida).

```ts
ITicket {
    id_service: number;
    id_ticket: number;
    id_origin: number;
    id_destination: number;
    departure_time: TDateTime;
    type: string;
    bus_type: TServices;
    seat_number: number;
    departure_date: TDateTime;
    cpf: string;
    price: number;
    boarding_fee: number;
    toll: number;
    sha_code: string;
}
```

O retorno do endpoint é um array do tipo `ITicket[]` com os bilhetes de cada passageiro.

```ts
interface ITicketEndpoint {
    status: IStatus;
    data: ITicket[];
}
```
