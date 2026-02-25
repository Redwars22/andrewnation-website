# VIAÇÃO PARANAENSE FULLSTACK NUXT

Projeto fullstack com Nuxt para uma empresa fictícia de transporte intermunicipal e interestadual.

:::warning
Em breve!
:::

## INTRODUÇÃO

Este é o meu primeiro projeto fullstack com o framework NuxtJS/VueJS. Sempre uso ReactJS, normalmente com NextJS, nos meus projetos, sobretudo nos maiores, porém desta vez quis fazer este com NuxtJS, tanto para aprender e ver como funciona na prática, quanto para tirar conclusões pessoais de como ele se difere do NextJS e em quais contextos performaria melhor. Criei o projeto pensando no fluxo de compra de passagens intermunicipais e interestaduais de empresas de transporte reais. A partir de um breve estudo e análise desses fluxos, surgiu este projeto.

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

### GET_ASSENTOS_DISPONIVEIS
### GET_CIDADES
### GET_ITINERARIO
### GET_MAIN_DESTINATIONS
### GET_VIAGENS
### HANDLE_TICKET