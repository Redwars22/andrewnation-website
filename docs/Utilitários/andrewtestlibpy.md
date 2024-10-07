# Andrew Testing Library (Python)

![logo](https://github.com/Redwars22/andrew-testlib-py/blob/main/example.jpg)

O Andrew Testing Library para Python é uma ferramenta de teste, análoga ao Andrew Testing Library que é um outro projeto meu feito para testes em TS/JS. Ela é bem mais simples que ferramentas mais parrudas, mas para testes simples deve cumprir bem seu objetivo.

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

![example](https://github.com/Redwars22/andrew-testlib-py/blob/main/example.jpg)

```py
from andtlib import AndrewTestingLibrary

test = AndrewTestingLibrary("Checks if the sum of two numbers is equal to 8")
test.start()

num1 = 4
num2 = 4
sum = num1 + num2

test.shouldBeEqual(sum, 8)
test.stop()
```

## Recursos

O ATL para Python é pequeno (menos de 5kB) e possui cerca de 13 matchers para verificar e comparar valores e mais um específico para listas.

## Plataformas e Tecnologias

O Andrew Testing Library foi escrito com Python.

## Código-fonte e downloads

Você pode obter o código-fonte do Andrew Testing Library e baixar sua versão mais recente [clicando aqui](https://github.com/Redwars22/andrew-testlib-py).