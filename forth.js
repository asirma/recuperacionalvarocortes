const pt = require("prompt-sync")({ sigint: true})

const nombre = pt("¿Cuál es tu nombre? => ");
console.log("\nTu nombre es " + nombre)