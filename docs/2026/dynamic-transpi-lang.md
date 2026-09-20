# DYNAMIK LINGUAGEM DE PROGRAMAÇÃO

Dynamik é uma linguagem de programação experimental e minimalista que transpila para JavaScript. Ela foi projetada com uma sintaxe limpa, removendo a necessidade de chaves (`{}`) para blocos e pontuações excessivas.

[REPOSITÓRIO OFICIAL](https://github.com/andrewnationdev/dynamik-lang)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-%236DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white)

## Sintaxe Básica

### Variáveis e Atribuição
A atribuição de variáveis é direta. A inferência decide automaticamente se deve usar `let` ou `const` (variáveis com letras maiúsculas, como `MAX_VALUE`, são tratadas como constantes).

```dynamik
x = 1
Y_MAX = 100

```

### Funções

Funções são declaradas com a palavra-chave `fun`, seguidas pelo nome, parâmetros (com suporte opcional a tipagem estática que é removida na transpilação) e um tipo de retorno opcional (`-> tipo`). Blocos são encerrados com a palavra `end`.

```dynamik
fun sum(x:int, y:int) -> int
    return x + y
end

```

### Condicionais (`if`)

Estruturas condicionais usam a palavra-chave `then` ao final da condição, dispensando o uso de parênteses obrigatórios e fechando com `end`.

```dynamik
if x == 1 then
    console->log("Um")
end

```

### Chamadas de Métodos e Objetos

O operador `->` é utilizado para acessar métodos ou propriedades de objetos (que é convertido para o operador ponto `.` do JavaScript).

```dynamik
console->log(sum(x, y))

```

## Como Executar

O transpilador é executado via linha de comando utilizando Node.js, exigindo um arquivo de entrada com a extensão `.dyn`.

```bash
node dynamik.mjs arquivo_entrada.dyn arquivo_saida.js
```
