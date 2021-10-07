/**
 * Faça um programa para entrar com uma distância (Km), o tempo de viagem (horas) e dizer se a velocidade média foi superior ao limite (80km/h) ou não.
 *
 */

const leia = require("prompt-sync")({ sigint: true });

const km = leia("Digite a distância percorrida em (KM): ");
const hrs = leia("Digite o tempo da viagem (H).........: ");

const media = km / hrs;

if (media <= 80) {
    console.log("Você viajou dentro das normas de trânsito");
} else {
    console.log("Você VIOLOU o limite de velocidade permitido");
}
