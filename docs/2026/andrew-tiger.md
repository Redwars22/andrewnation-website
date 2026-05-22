# 🐯 Andrew Tiger

O **Andrew Tiger** é um gerenciador de estado criado para ser simples, performático e multi-framework por natureza (ReactJS e Vue). Ele utiliza uma lógica de **Shallow Comparison** nativa para garantir que os componentes do seu aplicativo só atualizem quando for necessário.

AVISO: Esta biblioteca está em estado inicial de desenvolvimento e por isso podem haver bugs, que poderão ser reportados no repositório oficial do projeto no GitHub [aqui](https://github.com/andrewnationdev/andrew-tiger).

## ✨ Por que Andrew Tiger?

- **🚀 Leve**.
- **🧩 Multi-framework:** Suporte nativo e otimizado para **React** e **Vue**.
- **⚡ Performance:** Comparações rasas e suporte a seletores para evitar re-renderizações sem necessidade.
- **🛠 Zero Boilerplate:** Sem Providers complexos ou configurações extensas.
- **🌐 Async Ready:** Suporte para chamadas assíncronas dentro da store.

## 🚀 Instalação

```bash
npm install andrew-tiger
```

## 🧠 Core (Vanilla)
A base do Andrew Tiger é independente de framework.

```ts
import { createStore } from 'andrew-tiger';

const store = createStore((set) => ({
  count: 0,
  viagens: [],
  increment: () => set((state) => ({ count: state.count + 1 })),
  fetchViagens: async () => {
    const data = await fetch('/api/viagens').then(res => res.json());
    set({ viagens: data });
  }
}));
```

## ⚛️ React
```ts
import { useTiger } from 'andrew-tiger/react';
import { store } from './store';

function Counter() {
  // O componente só re-renderiza se o valor mudar
  const count = useTiger(store, (s) => s.count);
  const { increment } = store.getState();

  return <button onClick={increment}>{count}</button>;
}
```

## 🟢 Vue/Nuxt
```ts
<script setup>
import { useTigerVue } from 'andrew-tiger/vue';
import { store } from './store';

const count = useTigerVue(store, (s) => s.count);
const { increment } = store.getState();
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

🛠️ Decisões de Arquitetura do Projeto
Construí o Andrew Tiger seguindo o princípio da imutabilidade previsível. Pelo uso do `Object.is` para validar as mudanças de estado, se garante um ciclo de vida de dados limpo e eficiente, ideal para aplicações que exigem performance sem a dificuldade de implementar ferramentas maiores.
