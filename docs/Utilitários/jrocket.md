# Andrew JRocket

O Andrew JRocket é uma ferramenta simples e leve de teste para projetos Java. É um port do Andrew Testing Library para JavaScript.

![logo](https://cdn1.iconfinder.com/data/icons/space-filled-outline-35/64/Rocket-256.png)

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Eclipse](https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white)


[Visite a página do projeto no GitHub](https://github.com/Redwars22/andrew-jrocket)

# CONFIGURANDO E USANDO O JROCKET

- Baixe e coloque em qualquer lugar no projeto.
- Faça a classe na qual você quer executar o JRocket herdar (`extends`) da classe JRocketTesting.
- Execute a função `begin(String suite)` e passe o nome da suíte de teste como seu argumento.
- Adicione os matchers e execute os testes após a função `begin(String suite)`.
- Termine o teste com `end()`.
- Assim que a função `end()` for executada, o JRocket vai exibir um relatório na tela com o tempo de execução e o número de testes que passaram ou falharam,

```java
public class Example extends JRocketTesting {
	public void test() {
		begin("Comparar dois vetores");
		int [] x = {1,2,3,4};
		int [] y = {1,2,3,4};
		
		assertEquals(x,y);
		end();
	}
}
```

# MATCHERS
Há mais de 20 matchers no JRocket que você pode usar para testes!

## COMPARAÇÃO DE VALORES
- `assertEquals(int x, int y)`
- `assertEquals(float x, floats y)`
- `assertEquals(double x, double y)`
- `assertGreaterThan(int x, int y)`
- `assertGreaterThan(float x, float y)`
- `assertGreaterThan(double x, double y)`
- `assertLessThan(int x, int y)`
- `assertLessThan(float x, float y)`
- `assertLessThan(double x, double y)`
- `assertGreaterOrEqual(int x, int y)`
- `assertGreaterOrEqual(float x, float y)`
- `assertGreaterOrEqual(double x, double y)`
- `assertLessOrEqual(int x, int y)`
- `assertLessOrEqual(float x, float y)`
- `assertLessOrEqual(double x, double y)`

## COMPARAÇÃO DE STRINGS DE TEXTO
- `assertEquals(String x, String y)`

## EXPRESSÕES BOOLEANAS
- `assertTrue(boolean expr)`
- `assertFalse(boolean expr)`

## VETORES UNIDIMENSIONAIS
- `assertEquals(int [] x, int [] y)`
- `assertEquals(float [] x, floats [] y)`
- `assertEquals(double [] x, double [] y)`
- `assertEquals(String [] x, String [] y)`
