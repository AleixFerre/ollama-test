import ollama from "ollama";

const response = await ollama.chat({
  model: "llava",
  stream: true,
  messages: [{ role: "user", content: "He ligado este finde. Tengo dos numeros de chicas. Deberia hablarles? La verdad es que prefiero jugar al pokemon, pero no se que hacer. Qué me recomiendas?" }],
});

for await (const msg of response) {
  process.stdout.write(msg.message.content);
}

console.log();
