# Beh Injetáveis — Entrega 1 (HTML5)

**Disciplina:** Desenvolvimento Frontend para Web (A2) — 2026.2
**Professor:** Cid Andrade

## Integrantes do grupo
- Luiz Henrique Rodrigues Nunes - RGM: 47402822 - github.com/luizrnunes
- Gabriela Colombo Martins Blach - RGM: 47132281 - github.com/Colombogaby
- Carolina da Silva Burrego - RGM: 47793431 - github.com/carolinaburrego
- Sophia Campos - RGM: 46887776 - github.com/sophiacampos0612

## Contato do profissional
WhatsApp: (11) 97013-1416
E-mail: uber.rodrigues1969@gmail.com
Instagram: beh.injetáveis

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
- `paginas/contato.html` — formulário de contato com validação nativa do HTML5
- `paginas/orcamento.html` — formulário de solicitação de orçamento, com seleção dos procedimentos
- `paginas/sobre-nos.html` — sobre a empresa
- `paginas/botox.html`
- `paginas/enzima-capilar.html`
- `paginas/lipo-enzimatica.html`
- `paginas/enzima-muscular.html`
- `paginas/hiperidrose.html`
- `paginas/melasma.html`

Todas as páginas usam marcação semântica (`header`, `nav`, `main`, `section`, `article`,
`footer`) e compartilham o mesmo menu de navegação.

### Validação W3C
Na Entrega 1, todas as 10 páginas foram validadas no [Nu Html Checker (W3C)](https://validator.w3.org/),
sem erros. Um aviso identificado na página de contato (ausência de heading dentro de um
`article`) foi corrigido adicionando um `h3`.

Na Entrega 2, depois de adicionar o CSS e o JavaScript, o site foi validado novamente,
usando o endereço publicado no GitHub Pages:

- **HTML:** as 10 páginas passaram no [Nu Html Checker](https://validator.w3.org/) sem erros
  nem avisos. Na revalidação, o checker apontou que as páginas internas não tinham um título
  de nível 1. O título de cada página passou a ser um `h1` e os subtítulos subiram um nível,
  mantendo a hierarquia correta (`h1` → `h2`) sem alterar o visual.
- **CSS:** a folha de estilo `assets/css/style.css` passou no
  [Serviço de Validação de CSS do W3C](https://jigsaw.w3.org/css-validator/) sem erros
  (CSS nível 3 + SVG). Os alertas exibidos são apenas informativos (uso de variáveis CSS e
  `@import` de fontes) e não indicam problemas.

**Comprovação** (prints em `assets/img/validacao/`):

| Página | Print |
|---|---|
| Início (`index.html`) | [html-index.png](assets/img/validacao/html-index.png) · [endereço raiz](assets/img/validacao/html-site-raiz.png) |
| Sobre Nós | [html-sobre-nos.png](assets/img/validacao/html-sobre-nos.png) |
| Botox | [html-botox.png](assets/img/validacao/html-botox.png) |
| Enzima Capilar | [html-enzima-capilar.png](assets/img/validacao/html-enzima-capilar.png) |
| Lipo Enzimática | [html-lipo-enzimatica.png](assets/img/validacao/html-lipo-enzimatica.png) |
| Enzima Muscular | [html-enzima-muscular.png](assets/img/validacao/html-enzima-muscular.png) |
| Hiperidrose | [html-hiperidrose.png](assets/img/validacao/html-hiperidrose.png) |
| Melasma | [html-melasma.png](assets/img/validacao/html-melasma.png) |
| Orçamento | [html-orcamento.png](assets/img/validacao/html-orcamento.png) |
| Contato | [html-contato.png](assets/img/validacao/html-contato.png) |
| CSS (`style.css`) | [css-style.png](assets/img/validacao/css-style.png) |

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
├── paginas/
│   ├── contato.html
│   ├── orcamento.html
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

## Domínio

O site está publicado no GitHub Pages, mas a Beh Injetáveis ainda não possui um domínio
próprio. O domínio escolhido pelo grupo é **`behinjetaveis.com.br`**: ele repete exatamente
o nome da marca (o mesmo usado no Instagram), é curto, fácil de lembrar, e a terminação
`.com.br` indica uma empresa brasileira, o que combina com um atendimento local em São Paulo.

**Pesquisa de disponibilidade:** a consulta no [Registro.br](https://registro.br), órgão
responsável pelos domínios `.br`, mostrou que o domínio está **disponível para registro**.

![Consulta de disponibilidade no Registro.br](assets/img/dominio/registro-br-behinjetaveis.png)

**Custo** (valores exibidos na consulta): R$ 40,00 por 1 ano, R$ 76,00 por 2 anos ou
R$ 184,00 por 5 anos.

**Processo de aquisição:**

1. A responsável pela Beh Injetáveis cria uma conta no Registro.br com o próprio CPF ou CNPJ,
   para que o domínio fique em nome da dona do negócio, e não do grupo.
2. Pesquisa `behinjetaveis.com.br`, clica em **Registrar**, escolhe o período (1, 2 ou 5 anos)
   e faz o pagamento.
3. Após a confirmação do pagamento, configura no painel do Registro.br os registros de DNS
   apontando para os servidores do GitHub Pages.
4. No repositório, em **Settings → Pages → Custom domain**, informa `behinjetaveis.com.br` e
   ativa o HTTPS. A partir daí, o site passa a abrir pelo domínio próprio.

## Colaboradores

- Luiz Henrique Rodrigues Nunes
- Carolina da Silva Burrego
- Sophia Campos
