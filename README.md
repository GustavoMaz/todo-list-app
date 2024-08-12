# Todo List

Desenvolvido como projeto do curso de Vue.js do Tiago Matos. 

## Funcionalidade
É um aplicativo que permite a criação de uma lista de tarefas.
Cada item pode ser criado, editado, marcado como concluído ou deletado.
A aplicação usa um servidor local para simular um banco de dados e armazendar informações, para que os itens persistam mesmo quando a página é fechada.

## Setup
- Para iniciar uma build de desenvolvimento:
```terminal
yarn serve
```

- Para iniciar o servidor local:
```terminal
cd api
json-server --watch database.json
```
