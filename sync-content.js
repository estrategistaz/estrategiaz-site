import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =====================================================
// CONFIGURAÇÃO
// =====================================================

const estruturas = [
  {
    origem: path.join(__dirname, "..", "obsidianVault", "01 Autores"),
    destino: path.join(__dirname, "src", "content", "autores"),
  },

  {
    origem: path.join(__dirname, "..", "obsidianVault", "02 Livros"),
    destino: path.join(__dirname, "src", "content", "livros"),
  },

  {
    origem: path.join(__dirname, "..", "obsidianVault", "03 Frameworks"),
    destino: path.join(__dirname, "src", "content", "frameworks"),
  },
];

// =====================================================
// SINCRONIZAÇÃO
// =====================================================

for (const estrutura of estruturas) {

  const { origem, destino } = estrutura;

  console.log(`\nSincronizando:`);
  console.log(`Origem:  ${origem}`);
  console.log(`Destino: ${destino}`);

  // Verifica se a pasta do Obsidian existe
  if (!fs.existsSync(origem)) {
    console.log(`⚠️ Pasta não encontrada: ${origem}`);
    continue;
  }

  // Cria a pasta do Astro
  fs.mkdirSync(destino, { recursive: true });

  // Remove arquivos antigos
  for (const arquivo of fs.readdirSync(destino)) {

    const caminho = path.join(destino, arquivo);

    if (fs.statSync(caminho).isFile() && arquivo.endsWith(".md")) {
      fs.unlinkSync(caminho);
    }
  }

  // Copia os arquivos do Obsidian
  let quantidade = 0;

  for (const arquivo of fs.readdirSync(origem)) {

    if (arquivo.endsWith(".md")) {

      fs.copyFileSync(
        path.join(origem, arquivo),
        path.join(destino, arquivo)
      );

      quantidade++;
    }
  }

  console.log(`✅ ${quantidade} arquivo(s) sincronizado(s).`);
}

console.log("\n✅ Conteúdo sincronizado!");