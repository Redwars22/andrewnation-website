# EverestOS (Simulação de SO em C)

O EverestOS é uma simulação de um sistema operacional embarcado para um celular básico fictício (feature phone), desenvolvida em C.

[Código-Fonte](https://github.com/andrewnationdev/everest-os)

## Objetivo

O projeto busca reproduzir a experiência de um SO simples de telefone clássico, com navegação por teclado e aplicativos internos, para fins de estudo e prática de:

- Arquitetura modular em C;
- Organização de kernel, drivers e apps;
- Fluxo de interface em terminal.

## Estrutura geral

- `src/core`: núcleo do sistema (kernel e logs).
- `src/drivers`: drivers de display, entrada de teclado e armazenamento.
- `src/apps`: aplicativos simulados (discador, contatos, mensagens, chamadas, calculadora, configurações e menu principal).
- `include`: cabeçalhos públicos dos módulos.
- `data`: arquivos de dados usados pela simulação.

## Funcionalidades principais

- Menu principal com navegação por teclas.
- Execução de apps de telefone clássico.
- Entrada e controle por teclado no terminal.
- Comportamento de sistema com ciclo de atualização (loop) em estilo embarcado.

## Como executar

```bash
make && ./everest
```

## Controles básicos

- `w` / `s`: navegar para cima/baixo.
- `ENTER`: selecionar item.
- `b`: voltar ao menu.
- `t`: alternar configurações.
- `q`: desligar no menu principal.

No discador:

- `c`: apagar.
- `e`: realizar chamada.
