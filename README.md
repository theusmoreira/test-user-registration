# Aplicação para registro e autenticação de usuários

## Conteúdo

- [Sobre](#about)
- [Começando](#getting_started)
- [Uso](#usage)

## Sobre <a name = "about"></a>

Consiste no desenvolvimento de uma aplicação, que permite cadastrar e autenticar usuários.
A aplicação é construída em NodeJS, com o framework Express, o banco de dados é um arquivo .json que fica na pasta `src/database`, usei, Celebrate para fazer validações, JWT para autenticação e Babel para fazer compilação do código fonte.

## Começando <a name = "getting_started"></a>

Aqui iremos rodar a aplicação em modo desenvolvimento, por padrão a aplicação estará rodando na porta 3000.

### Requisitos

- NodeJS - +12.x
- Git

```bash
git clone https://github.com/matheus-santos-moreira/test-user-registration.git
cd test-registration
```

### Instalação

Primeiro mudados o arquivo `.env.example` para `.env`, depois populamos o arquivo com uma chave JWT_SECRET, pode ser gerado um hash qualquer - para melhorar a segurança da aplicação, seria melhor usar chaves RSA, chave privada para gerar nosso token, e chave pública para verificar o token, que poderia ser compartilhada com outros serviços para verificar se o token é valido.

Dentro da pasta do projeto, para instalar as dependência.
```bash
yarn
```

Então usaremos o comando abaixo para rodar a aplicação, em modo de desenvolvimento.
```bash
yarn dev
```
Que irá responder com `Server running on port 3000 - http://localhost:3000/sign-in` , isso quer dizer que aplicação está funcionando.

## Uso <a name = "usage"></a>

Na aplicação temos dois end-points principais:

`/sessions` - Usa método POST para enviar dados para autenticação do usuário.

`/users` - Usa método POST para enviar dados para criação do usuário.


E temos os end-points, que servem arquivos estáticos da api:

`/sign-in` - Formulário para autenticação do usuário.

`/sign-up` - Formulário para criação do usuário.


### Dificuldades
- Tive dificuldade parar pensar na estruturação da aplicação, apesar de achar que a estrutura poderia melhorar, usei meus conhecimentos prévios na estruturação da aplicação.
- Também tive um pouco de dificuldade para servir os arquivos estáticos na aplicação, minha ideia inicial era usar a template engine EJS, mas decidir por optar por arquivos html.
