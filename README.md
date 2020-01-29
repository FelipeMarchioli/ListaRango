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
#### **GET** Listar restaurantes
<kbd>http://localhost:3333/api/v1/restaurante/listar/:cnpj</kbd>

| Parâmetro | Descrição                          |
| --------- | ---------------------------------- | 
| cnpj      | Cnpj do restaurante a ser pesquisado | 

#### HEADERS
**Content-type**
application/json

#### Example Request
``` http://localhost:3333/api/v1/restaurante/listar/85650128000155 ```

#### Example Response
``` 200 - OK ```
```{
    "_id": "5e30dde967a18d8ee4ea1eb2",
    "cnpj": "85650128000155",
    "nome": "Restaurante X",
    "endereco": "Rua restaurante, 15",
    "horarioFuncionamento": [
        {
            "_id": "5e30dde967a18d8ee4ea1eb4",
            "diaSemana": "Terça",
            "horarioAberto": "18:15",
            "horarioFechado": "18:30"
        },
        {
            "_id": "5e30dde967a18d8ee4ea1eb3",
            "diaSemana": "Quarta",
            "horarioAberto": "18:15",
            "horarioFechado": "21:30"
        }
    ],
    "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/28067a8c-fa2b-4417-2bdd-33fdb3f07f23.jpg",
    "created": "2020-01-29T01:20:41.215Z",
    "updated": "2020-01-29T01:20:41.215Z",
    "__v": 0
}```
