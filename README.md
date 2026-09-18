# Beh Injetáveis — Entrega 1 (HTML5)

**Disciplina:** Desenvolvimento Frontend para Web (A2) — 2026.2
**Professor:** Cid Andrade

## Integrantes do grupo
- Luiz Henrique Rodrigues Nunes - RGM: 47402822
- Gabriela Colombo Martins Blach - RGM: 47132281
- Carolina da Silva Burrego - RGM: 47793431
- Sophia Campos - RGM: 46887776

## 1. Introdução

Este projeto apresenta o site institucional da **Beh Injetáveis**, uma organização real
especializada em procedimentos estéticos injetáveis realizados a domicílio na cidade de
São Paulo/SP. O objetivo do site é apresentar a empresa, seus procedimentos (Botox, enzima
capilar, lipo enzimática, enzima muscular, tratamento de hiperidrose e tratamento de
melasma), permitir o contato direto e a solicitação de orçamento.

## 2. Desenvolvimento

### Levantamento de informações
O grupo realizou uma reunião remota por Google Meet para conduzir a entrevista com a
responsável pela Beh Injetáveis, seguindo o roteiro de perguntas elaborado previamente
(apresentação e origem do negócio, serviços e atendimento, biossegurança e logística).

**Comprovação do contato real:**
`assets/img/comprovante.jpg` — print da reunião via Google Meet com o grupo (Luiz, Carolina,
Sophia e Gabriela) durante a condução da entrevista.

### Estrutura do site
O site foi desenvolvido em HTML5 puro (sem CSS nesta etapa), com 10 páginas interligadas:

- `index.html` — página inicial, com apresentação institucional, lista de procedimentos e
  recursos de áudio e vídeo
- `contato.html` — formulário de contato com validação nativa do HTML5
- `orcamento.html` — formulário de solicitação de orçamento, com seleção dos procedimentos
- `paginas/sobre-nos.html` — sobre a empresa
- `paginas/botox.html`
- `paginas/enzima-capilar.html`
- `paginas/lipo-enzimatica.html`
- `paginas/enzima-muscular.html`
- `paginas/hiperidrose.html`
- `paginas/melasma.html`

Todas as páginas usam marcação semântica (`header`, `nav`, `main`, `section`, `article`,
`footer`) e compartilham o mesmo menu de navegação.

### Decisões e desafios
Uma das principais decisões do grupo foi priorizar uma estrutura HTML semântica desde o
início, buscando para cada trecho de conteúdo a tag que melhor representasse seu papel
dentro do tema — cabeçalho, navegação, seções de procedimentos, formulários de contato e
orçamento. Também decidimos contar com o auxílio de uma IA para elaborar o roteiro de
perguntas da entrevista, o que ajudou o grupo a chegar a uma conversa mais direcionada e a
reunir informações suficientes e relevantes sobre o negócio e os procedimentos oferecidos.

## 3. Conclusão

Com a Entrega 1, o grupo pôde colocar em prática os fundamentos da estruturação semântica
em HTML5, aplicando as tags corretas para cada tipo de conteúdo e organizando um site
funcional para uma organização real. O contato direto com a Beh Injetáveis trouxe um
aprendizado além do técnico: a necessidade de traduzir informações reais de um negócio em
conteúdo claro e acessível para o usuário do site. O processo também reforçou a importância
do planejamento antes da codificação — como definir a entrevista, organizar as páginas e a
navegação — para que o desenvolvimento visual, na próxima entrega, tenha uma base sólida.

## Estrutura de pastas

```
beh-injetaveis/
├── index.html
├── contato.html
├── orcamento.html
├── paginas/
│   ├── sobre-nos.html
│   ├── botox.html
│   ├── enzima-capilar.html
│   ├── lipo-enzimatica.html
│   ├── enzima-muscular.html
│   ├── hiperidrose.html
│   └── melasma.html
├── assets/
│   ├── img/
│   ├── audio/
│   └── video/
└── README.md
```

## Site hospedado

[Acesse o site aqui](https://colombogaby.github.io/beh-injetaveis/)
