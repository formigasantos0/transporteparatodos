# Landing Page — Programa Transporte para Todos (NTU)

Site estático construído a partir do ficheiro Illustrator `NTU SEMINÁRIO - Landpage.ai`
(prancheta 1920 × 6054 px). Não precisa de build nem de servidor especial.

## Estrutura

```
site/
├── index.html          ← página única
├── css/style.css       ← estilos (escala fluida: 1rem = 10px a 1920px de largura)
├── js/main.js          ← animações de entrada + realce do menu
├── fonts/              ← TBJ Otilito (do pacote) + Inter e Montserrat em WOFF2
└── img/                ← fotos otimizadas, logo e ícones extraídos do .ai
```

## Publicar

Basta copiar o conteúdo da pasta `site/` para a raiz pública do servidor
(ex.: `public_html/`, `www/` ou equivalente). Nada mais é necessário.

## Links

- **LER A CARTA** → `docs/carta-sao-paulo.pdf` (incluído no site)
- **QUERO ADERIR** → formulário Google Forms (abre em nova aba)
- **BAIXAR RELATÓRIO** → ainda com `href="#"`; quando o PDF do relatório estiver
  pronto, colocá-lo em `docs/` e atualizar o link no `index.html`.

## Notas

- As fontes Adobe em falta no pacote (Inter e Montserrat) foram substituídas
  pelas versões idênticas do Google Fonts, alojadas localmente (sem chamadas externas).
- O design é fiel ao original a 1920px e escala proporcionalmente noutras larguras;
  abaixo de 760px usa um layout próprio para telemóvel.
- A foto de fundo do hero (`img/hero.jpg`, ~1 MB) é a maior peça da página.
  Se quiser mais leveza, pode reduzir a qualidade/dimensão sem tocar no CSS.
