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
<kdb> 200 - OK </kdb>
``` {
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
} 
```

#### **GET** Listar todos restaurantes
<kbd>http://localhost:3333/api/v1/restaurante/listarTodos</kbd>

#### HEADERS
**Content-type**
application/json

#### Example Request
``` http://localhost:3333/api/v1/restaurante/listarTodos ```

#### Example Response
<kdb> 200 - OK </kdb>
```[
    {
        "_id": "5e30c840dfaa834be4b1abec",
        "cnpj": "27660128000138",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30c840dfaa834be4b1abed",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/140c353b-082d-fb1a-a66a-16c6d4eb5ec0.jpg",
        "created": "2020-01-28T23:48:16.206Z",
        "updated": "2020-01-28T23:48:16.206Z",
        "__v": 0
    },
    {
        "_id": "5e30c887dfaa834be4b1abee",
        "cnpj": "27990128000103",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4a67a18d8ee4ea1ed6",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            },
            {
                "_id": "5e30df4a67a18d8ee4ea1ed5",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/602ec99e-f2aa-8b43-8371-4a277dabe334.jpg",
        "created": "2020-01-28T23:50:38.862Z",
        "updated": "2020-01-29T01:26:34.293Z",
        "__v": 0
    },
] 
```

#### **POST** Cadastrar restaurantes
<kbd>http://localhost:3333/api/v1/restaurante/cadastrar</kbd>

#### HEADERS
**Content-type**
application/json

#### Example Request
``` http://localhost:3333/api/v1/restaurante/cadastrar ```

#### Body (JSON)
```{
  "cnpj": "85650128000158",
  "nome": "Restaurante X",
  "endereco": "Rua restaurante, 15",
  "horarioFuncionamento": [
    {
      "diaSemana": "Terça",
      "horarioAberto": "18:15",
      "horarioFechado": "18:30"
    },
    {
      "diaSemana": "Quarta",
      "horarioAberto": "18:15",
      "horarioFechado": "21:30"
    }
  ],
  "fotoRestaurante": "data:image/jpeg;base64,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"
}
```

> O campo fotoRestaurante deve ser uma imagem com o endereço em base 64.

#### Example Response
<kdb> 200 - OK </kdb>
``` {
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
} 
```

#### **PUT** Atualizar restaurantes
<kbd>http://localhost:3333/api/v1/restaurante/atualizar</kbd>

#### HEADERS
**Content-type**
application/json

#### Example Request
``` http://localhost:3333/api/v1/restaurante/atualizar ```

#### Body (JSON)
<kdb>{
  "cnpj": "85650128000158",
  "nome": "Restaurante X",
  "endereco": "Rua restaurante, 15",
  "horarioFuncionamento": [
    {
      "diaSemana": "Terça",
      "horarioAberto": "18:15",
      "horarioFechado": "23:30"
    },
    {
      "diaSemana": "Quarta",
      "horarioAberto": "18:15",
      "horarioFechado": "21:30"
    }
  ],
  "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/28067a8c-fa2b-4417-2bdd-33fdb3f07f23.jpg"
}</kdb>

> A busca será feita pelo cnpj, esse dado será recebido pelo Body(JSON).

#### Example Response
``` 200 - OK ```
<kdb> {
    "_id": "5e30dde967a18d8ee4ea1eb2",
    "cnpj": "85650128000155",
    "nome": "Restaurante X",
    "endereco": "Rua restaurante, 15",
    "horarioFuncionamento": [
        {
            "_id": "5e30dde967a18d8ee4ea1eb4",
            "diaSemana": "Terça",
            "horarioAberto": "18:15",
            "horarioFechado": "23:30"
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
} </kdb>

#### **DELETE** Excluir restaurante
<kbd>http://localhost:3333/api/v1/restaurante/excluir</kbd>

#### HEADERS
**Content-type**
application/json

#### Example Request
``` http://localhost:3333/api/v1/restaurante/excluir ```

#### Body (JSON)
<kdb>{
  "cnpj": "85650128000158",
  "nome": "Restaurante X",
  "endereco": "Rua restaurante, 15",
  "horarioFuncionamento": [
    {
      "diaSemana": "Terça",
      "horarioAberto": "18:15",
      "horarioFechado": "23:30"
    },
    {
      "diaSemana": "Quarta",
      "horarioAberto": "18:15",
      "horarioFechado": "21:30"
    }
  ],
  "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/28067a8c-fa2b-4417-2bdd-33fdb3f07f23.jpg"
}</kdb>

> A busca será feita pelo cnpj, esse dado será recebido pelo Body(JSON).

#### Example Response
``` 200 - OK ```
<kdb> {
    "n": 0,
    "opTime": {
        "ts": "6787194482652610569",
        "t": 2
    },
    "electionId": "7fffffff0000000000000002",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6787194482652610569",
        "signature": {
            "hash": "kefbCMSHRGBHrSEHghACUJeOK1c=",
            "keyId": "6785423384168628226"
        }
    },
    "operationTime": "6787194482652610569",
    "deletedCount": 1
} </kdb>
