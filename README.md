# Larapress WordPress Boilerplate

Tema base WordPress desenvolvido pela equipe de front-end da [Larapress](https://larapress.com.br), baseado no [Underscores](https://underscores.me).

## Requisitos

- WordPress 5.9
- PHP ^7.4
- Node.js ^14.16.1
- NPM ^6.14.12

## Instalando o boilerplate

Clone o [boilerplate](https://github.com/larapressweb/boilerplate-wordpress) dentro da sua instalação do WordPress em `meu-projeto\wp-content\themes` e entre no diretório do projeto:

```bash
  git clone https://github.com/larapressweb/boilerplate-wordpress.git larapress
```

```bash
  cd larapress
```

Exclua a pasta `.git` para não versioná-la. Caso precise versionar seu projeto, inicialize o git em branco:

```bash
  rm -rf .git
```

```bash
  git init
```

Instale os pacotes do NPM:

```bash
  npm install
```

## Compilando os assets

Enquanto em ambiente de desenvolvimento, rode o comando abaixo para compilar os arquivos JS e CSS do tema:

```bash
  npm run watch
```

Antes de mandar tudo para produção, o comando abaixo deve ser rodado para gerar arquivos otimizados.

```bash
  npm run prod
```

Os arquivos a serem compilados se encontram no arquivo `webpack.mix.js`, na raiz do tema.
