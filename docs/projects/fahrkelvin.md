# Fahrkelvin (Biblioteca NPM)

![logo](https://cdn3.iconfinder.com/data/icons/weather-free-1/32/Weather_Free_Filled_Outline_warm-termometer-weather-hot-temperature-256.png)

Biblioteca para converter escalas de temperatura Kelvin, Celsius e Fahrenheit que você pode incluir em seus projetos. Ela é leve e fácil de usar.

Atualmente ela suporta: Celsius, Kelvin e Fahrenheit.

Para instalar, use o comando `npm i fahrkelvin`.

**Como usar:** 
- Importe a função `convert()` deste módulo.
- Passe um objeto `ITemperature` como seu argumento com a escala da qual você quer converter, para qual, e o valor num formato numérico:

```ts
interface ITemperature {
    value: TTemperature;
    from: TScales;
    to: TScales;
}
```

Se tiver alguma dúvida ou quiser reportar algum bug, pode me contactar neste e-mail: andrewnationdev@gmail.com. Ou visite o repositório oficial aqui: [https://github.com/Redwars22/fahrkelvin](https://github.com/Redwars22/fahrkelvin).
