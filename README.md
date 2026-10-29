# Portfólio de Gustavo Marques — Infraestrutura, Redes e Cloud

Site estático em HTML, CSS e JavaScript pronto para publicar no GitHub Pages.

## Como visualizar

Abra o arquivo `index.html` no navegador. Não é necessário instalar nada.

## Organização das fotos

As imagens do portfólio estão organizadas fisicamente em quatro pastas:

```
portfolio-gustavo/
├── index.html
├── README.md
└── assets/
    ├── style.css
    ├── script.js
    └── images/
        ├── racks/         # instalação, manutenção e organização de racks
        ├── sistemas/      # GLPI, MV e fluxograma de atendimento
        ├── computadores/  # estações de trabalho e preparação
        └── cftv/          # câmeras de monitoramento
```

No site, as fotos também são agrupadas por categoria. Clique em um cartão da categoria para ver todas as fotos correspondentes e clique em cada foto para ampliar.

## Como alterar textos e fotos

- Abra `index.html` no VS Code e busque por nomes e descrições para modificar.
- Para trocar uma imagem, substitua o arquivo correspondente na pasta ou atualize o atributo `src` no HTML.
- Não mova fotos sem atualizar os links no `index.html`.
- As cores, tamanhos e espaçamentos estão em `assets/style.css`.

## Publicar no GitHub Pages

1. Crie um repositório chamado `seuusuario.github.io` no GitHub.
2. Extraia este ZIP e envie o conteúdo da pasta `portfolio-gustavo` **para a raiz do repositório**.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, branch **main**, pasta **/(root)** e salve.
4. Acesse `https://seuusuario.github.io` após a publicação.

## Atenção à confidencialidade

As fotografias e capturas de tela foram enviadas pelo autor. Antes de tornar o site público, revise se há dados sensíveis, como identificação de câmeras, informações de sistemas internos, processos operacionais, nomes de empresas, endereços de rede e equipamentos. Confirme também a autorização para divulgar imagens capturadas em ambientes de terceiros. O material não deve expor dados confidenciais ou pessoais.

## Sobre o conteúdo

Este portfólio usa as experiências profissionais informadas pelo autor. As fotos são exemplos de ambientes e trabalhos associados às áreas descritas, sem afirmar autoria individual de projetos completos ou implementações não verificadas.
