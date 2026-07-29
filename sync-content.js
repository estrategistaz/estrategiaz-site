import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho do Vault
const origem = path.join(
  __dirname,
  "..",
  "obsidianVault",
  "01 Autores"
);

// Caminho do Astro
const destino = path.join(
  __dirname,
  "src",
  "content",
  "autores"
);

// Cria a pasta destino
fs.mkdirSync(destino, { recursive: true });

// Remove arquivos antigos
for (const arquivo of fs.readdirSync(destino)) {
  if (arquivo.endsWith(".md")) {
    fs.unlinkSync(path.join(destino, arquivo));
  }
}

// Copia arquivos do Vault
for (const arquivo of fs.readdirSync(origem)) {
  if (arquivo.endsWith(".md")) {
    fs.copyFileSync(
      path.join(origem, arquivo),
      path.join(destino, arquivo)
    );
  }
}

console.log("✅ Conteúdo sincronizado!");