# Fahrkelvin (Biblioteca NPM)

Temperature scale converter for Kelvin, Celsius, and Fahrenheit that you can bundle and import into your projects.

It currently supports: Celsius, Kelvin, and Fahrenheit

`npm i fahrkelvin`

**How to use:** 
- Import the `convert()` function from this module.
- Pass an object as its argument with the scale from which you want to convert, to which, and the value in a numeric format:

```ts
interface ITemperature {
    value: TTemperature;
    from: TScales;
    to: TScales;
}
```

If you have any doubts or bug reports to do, contact me at: andrewnationdev@gmail.com
Or visit its official repository at: [https://github.com/Redwars22/fahrkelvin](https://github.com/Redwars22/fahrkelvin).
