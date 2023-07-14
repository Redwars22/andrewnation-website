# Algometer

O Algometer é uma ferramenta de linha de comando feita com Node para medir o tempo de execução de algoritmos JavaScript/TypeScript.

![algometer](https://andrewnationdev.vercel.app/img/algometer.png)

## Recursos
- Ele te fornece o tempo de execução de uma função em milissegundos.
- Você pode chamá-lo de qualquer lugar do seu código importando a função `Algometer` e passando para ela um **arrow function** contendo o seu algoritmo como argumento. Por favor certifique-se de estar executando o arquivo com o Node, senão o Algometer pode não funcionar.
- Funciona tanto com JavaScript puro e TypeScript.

## Exemplo
```tsx
import Algometer from "../base/algometer";

Algometer("Algoritmo Sem Nome", ()=>{
    let result: number;
    const k = 12;

    for(let i = 0; i < 80000; i++)
        for(let j = 0; j < 80000; j++)
                result = i * (j*j) + (k*k) - (j + k) - (i*i) * j;
})
```

## Download e código-fonte
O Algometer pode ser instalado com o comando `npm i andrew-algometer`. Você também pode ver o código-fonte deste projeto no repositório oficial dele [aqui](https://github.com/Redwars22/algometer).