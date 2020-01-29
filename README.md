# GoomerListaRango
API RESTful capaz de gerenciar os restaurantes e os produtos do seu cardápio.

## Introdução
APIs criadas para realizar cadastro, consulta, atualização e exclusão de restaurantes e produtos.

## Endpoint
O endpoint de conexão com as APIs é: ``` http://localhost:3333/api/v1 ```

## Recursos disponíveis
Existem os seguintes recursos listados abaixo que estão disponíveis para manipulação através dos métodos GET, POST, PUT e DELETE:
  - Restaurantes
  - Produtos
 
## Tratamento de dados
Todos os dados enviados e recebidos pela API estão/deverão ser em formato JSON (application/json).

### Restaurante
#### ** {c:green}GET{/c} ** Listar restaurantes
<kbd>http://localhost:3333/api/v1/restaurante/listar/:cnpj</kbd>

| Parâmetro | Descrição                          |
| --------- | ---------------------------------- | 
| <mark>cnpj</mark> | Cnpj do restaurante a ser pesquisado |  
