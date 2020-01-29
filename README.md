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
} ```

#### **GET** Listar todos restaurantes
<kbd>http://localhost:3333/api/v1/restaurante/listarTodos</kbd>

#### HEADERS
**Content-type**
application/json

#### Example Request
``` http://localhost:3333/api/v1/restaurante/listarTodos ```

#### Example Response
``` 200 - OK ```
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
    {
        "_id": "5e30dd4b67a18d8ee4ea1eab",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dd4b67a18d8ee4ea1eac",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/986cc211-ce85-0339-fe5d-28bb90f4d15a.jpg",
        "created": "2020-01-29T01:18:03.468Z",
        "updated": "2020-01-29T01:18:03.468Z",
        "__v": 0
    },
    {
        "_id": "5e30dde967a18d8ee4ea1eb0",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dde967a18d8ee4ea1eb1",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/4dbc99a7-036f-f59d-b764-557057366628.jpg",
        "created": "2020-01-29T01:20:41.176Z",
        "updated": "2020-01-29T01:20:41.176Z",
        "__v": 0
    },
    {
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
    },
    {
        "_id": "5e30de7167a18d8ee4ea1eb5",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30de7167a18d8ee4ea1eb6",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/0287e554-a8c0-ef5e-171c-b270e82368cd.jpg",
        "created": "2020-01-29T01:22:57.260Z",
        "updated": "2020-01-29T01:22:57.260Z",
        "__v": 0
    },
    {
        "_id": "5e30de7167a18d8ee4ea1eb7",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30de7167a18d8ee4ea1eb9",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30de7167a18d8ee4ea1eb8",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/65cd19a8-c5a8-6922-ee94-0897effd6256.jpg",
        "created": "2020-01-29T01:22:57.297Z",
        "updated": "2020-01-29T01:22:57.297Z",
        "__v": 0
    },
    {
        "_id": "5e30de8167a18d8ee4ea1eba",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30de8167a18d8ee4ea1ebb",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e9b7e03d-80f0-595d-2908-5d8b9a90f3ea.jpg",
        "created": "2020-01-29T01:23:13.420Z",
        "updated": "2020-01-29T01:23:13.420Z",
        "__v": 0
    },
    {
        "_id": "5e30debf67a18d8ee4ea1ebc",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30debf67a18d8ee4ea1ebe",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30debf67a18d8ee4ea1ebd",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/bd71f0dd-120c-04a7-8052-cbbab2e8e19f.jpg",
        "created": "2020-01-29T01:24:15.769Z",
        "updated": "2020-01-29T01:24:15.769Z",
        "__v": 0
    },
    {
        "_id": "5e30df4867a18d8ee4ea1ec6",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4867a18d8ee4ea1ec7",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e7b91d6d-7735-7251-ce49-539fca9b5459.jpg",
        "created": "2020-01-29T01:26:32.570Z",
        "updated": "2020-01-29T01:26:32.570Z",
        "__v": 0
    },
    {
        "_id": "5e30df4867a18d8ee4ea1ec8",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4867a18d8ee4ea1eca",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4867a18d8ee4ea1ec9",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/5521fa77-b4c9-db8f-68c2-d5f82a52f6c7.jpg",
        "created": "2020-01-29T01:26:32.612Z",
        "updated": "2020-01-29T01:26:32.612Z",
        "__v": 0
    },
    {
        "_id": "5e30df4867a18d8ee4ea1ecb",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4867a18d8ee4ea1ecc",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/38fb4315-ecfd-ab7e-3973-f1ab0a9baf4d.jpg",
        "created": "2020-01-29T01:26:32.744Z",
        "updated": "2020-01-29T01:26:32.744Z",
        "__v": 0
    },
    {
        "_id": "5e30df4867a18d8ee4ea1ed2",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4867a18d8ee4ea1ed4",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4867a18d8ee4ea1ed3",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/018a1cd5-ab6e-d483-3a14-c0ddbe2e3fe1.jpg",
        "created": "2020-01-29T01:26:32.962Z",
        "updated": "2020-01-29T01:26:32.962Z",
        "__v": 0
    },
    {
        "_id": "5e30df4867a18d8ee4ea1ecd",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4867a18d8ee4ea1ecf",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4867a18d8ee4ea1ece",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/db1e374d-b1b2-e129-3c9e-b8b36ab2b339.jpg",
        "created": "2020-01-29T01:26:32.772Z",
        "updated": "2020-01-29T01:26:32.772Z",
        "__v": 0
    },
    {
        "_id": "5e30df4867a18d8ee4ea1ed0",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4867a18d8ee4ea1ed1",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/67ecb5a4-dd54-a32c-690d-ffb263205bd7.jpg",
        "created": "2020-01-29T01:26:32.937Z",
        "updated": "2020-01-29T01:26:32.937Z",
        "__v": 0
    },
    {
        "_id": "5e30df4a67a18d8ee4ea1edb",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4a67a18d8ee4ea1edc",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/fcac84a0-7259-31f7-4d53-5f21eba1ae2c.jpg",
        "created": "2020-01-29T01:26:34.871Z",
        "updated": "2020-01-29T01:26:34.871Z",
        "__v": 0
    },
    {
        "_id": "5e30df4a67a18d8ee4ea1edd",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4a67a18d8ee4ea1edf",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4a67a18d8ee4ea1ede",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6fb6e5c6-8c24-0d97-accf-b92dfeca4111.jpg",
        "created": "2020-01-29T01:26:34.899Z",
        "updated": "2020-01-29T01:26:34.899Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1ee0",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1ee1",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d2db1ec1-d294-0f8f-2ff2-56f19ddd3b23.jpg",
        "created": "2020-01-29T01:26:35.055Z",
        "updated": "2020-01-29T01:26:35.055Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1ee2",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1ee4",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4b67a18d8ee4ea1ee3",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b1f2323a-603e-1145-4db1-96e6cb00e048.jpg",
        "created": "2020-01-29T01:26:35.081Z",
        "updated": "2020-01-29T01:26:35.081Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1ee5",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1ee6",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/432834f5-160b-8f80-33a5-a8a1b6c95908.jpg",
        "created": "2020-01-29T01:26:35.239Z",
        "updated": "2020-01-29T01:26:35.239Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1ee7",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1ee9",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4b67a18d8ee4ea1ee8",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/876c945c-d57b-2ffe-7709-3bc9b9daf5d3.jpg",
        "created": "2020-01-29T01:26:35.262Z",
        "updated": "2020-01-29T01:26:35.262Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1eea",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1eeb",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b786a4ef-bd0b-ecdc-8d54-e0c4d29da573.jpg",
        "created": "2020-01-29T01:26:35.416Z",
        "updated": "2020-01-29T01:26:35.416Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1eec",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1eee",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4b67a18d8ee4ea1eed",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/7fb2fb76-852a-c58f-fb23-e5f94a200340.jpg",
        "created": "2020-01-29T01:26:35.441Z",
        "updated": "2020-01-29T01:26:35.441Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1eef",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1ef0",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/c6303644-7046-f194-9e8a-468c9a10daef.jpg",
        "created": "2020-01-29T01:26:35.607Z",
        "updated": "2020-01-29T01:26:35.607Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1ef1",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1ef3",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4b67a18d8ee4ea1ef2",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/a65b3d2c-e2ac-4886-547e-3e358b8b7c6d.jpg",
        "created": "2020-01-29T01:26:35.631Z",
        "updated": "2020-01-29T01:26:35.631Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1ef4",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1ef5",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/02e251ce-44a8-542c-317a-7db0b719379a.jpg",
        "created": "2020-01-29T01:26:35.797Z",
        "updated": "2020-01-29T01:26:35.797Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1ef6",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1ef8",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4b67a18d8ee4ea1ef7",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/27c9113e-3aba-8d91-09ce-9df2ce24bd55.jpg",
        "created": "2020-01-29T01:26:35.825Z",
        "updated": "2020-01-29T01:26:35.825Z",
        "__v": 0
    },
    {
        "_id": "5e30df4b67a18d8ee4ea1ef9",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4b67a18d8ee4ea1efa",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b1574e69-a2cc-687a-f342-b874af4625d0.jpg",
        "created": "2020-01-29T01:26:35.987Z",
        "updated": "2020-01-29T01:26:35.987Z",
        "__v": 0
    },
    {
        "_id": "5e30df4c67a18d8ee4ea1efb",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4c67a18d8ee4ea1efd",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4c67a18d8ee4ea1efc",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/1f86d3f5-5fc7-3dda-a35a-4f8aeacba8db.jpg",
        "created": "2020-01-29T01:26:36.014Z",
        "updated": "2020-01-29T01:26:36.014Z",
        "__v": 0
    },
    {
        "_id": "5e30df4c67a18d8ee4ea1efe",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4c67a18d8ee4ea1eff",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ca4b5724-1988-d144-25ae-3b864f087454.jpg",
        "created": "2020-01-29T01:26:36.158Z",
        "updated": "2020-01-29T01:26:36.158Z",
        "__v": 0
    },
    {
        "_id": "5e30df4c67a18d8ee4ea1f00",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4c67a18d8ee4ea1f02",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4c67a18d8ee4ea1f01",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/7fe68495-8fc0-699e-304a-8461ec9028b2.jpg",
        "created": "2020-01-29T01:26:36.184Z",
        "updated": "2020-01-29T01:26:36.184Z",
        "__v": 0
    },
    {
        "_id": "5e30df4c67a18d8ee4ea1f03",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4c67a18d8ee4ea1f04",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/3d8e1ac4-469d-81bb-fe4b-b2354bbaa771.jpg",
        "created": "2020-01-29T01:26:36.347Z",
        "updated": "2020-01-29T01:26:36.347Z",
        "__v": 0
    },
    {
        "_id": "5e30df4c67a18d8ee4ea1f05",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df4c67a18d8ee4ea1f07",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df4c67a18d8ee4ea1f06",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6c13f1fc-6bbb-4b9d-ff87-7cfb87faae57.jpg",
        "created": "2020-01-29T01:26:36.376Z",
        "updated": "2020-01-29T01:26:36.376Z",
        "__v": 0
    },
    {
        "_id": "5e30df7167a18d8ee4ea1f08",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7167a18d8ee4ea1f09",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/a589033c-eab9-e1f8-e970-f9ce3e70ea5e.jpg",
        "created": "2020-01-29T01:27:13.858Z",
        "updated": "2020-01-29T01:27:13.858Z",
        "__v": 0
    },
    {
        "_id": "5e30df7167a18d8ee4ea1f0a",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7167a18d8ee4ea1f0c",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df7167a18d8ee4ea1f0b",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/92333cf2-c49e-ce46-84bb-09b859795019.jpg",
        "created": "2020-01-29T01:27:13.889Z",
        "updated": "2020-01-29T01:27:13.889Z",
        "__v": 0
    },
    {
        "_id": "5e30df7967a18d8ee4ea1f0d",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7967a18d8ee4ea1f0e",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2181d1a3-22fb-a45a-74d4-c55f64b9a29c.jpg",
        "created": "2020-01-29T01:27:21.654Z",
        "updated": "2020-01-29T01:27:21.654Z",
        "__v": 0
    },
    {
        "_id": "5e30df7967a18d8ee4ea1f0f",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7967a18d8ee4ea1f11",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df7967a18d8ee4ea1f10",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6b91a323-3856-4925-5903-4d330d3308d8.jpg",
        "created": "2020-01-29T01:27:21.680Z",
        "updated": "2020-01-29T01:27:21.680Z",
        "__v": 0
    },
    {
        "_id": "5e30df7a67a18d8ee4ea1f12",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7a67a18d8ee4ea1f13",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/4afc7077-0f49-9617-dafa-7adb9446acbe.jpg",
        "created": "2020-01-29T01:27:22.993Z",
        "updated": "2020-01-29T01:27:22.993Z",
        "__v": 0
    },
    {
        "_id": "5e30df7b67a18d8ee4ea1f14",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7b67a18d8ee4ea1f16",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df7b67a18d8ee4ea1f15",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/da6ae510-9b01-3dc8-d718-07818ad02351.jpg",
        "created": "2020-01-29T01:27:23.021Z",
        "updated": "2020-01-29T01:27:23.021Z",
        "__v": 0
    },
    {
        "_id": "5e30df7c67a18d8ee4ea1f17",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7c67a18d8ee4ea1f18",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/0c84c082-e074-8252-9b2f-bad292512081.jpg",
        "created": "2020-01-29T01:27:24.088Z",
        "updated": "2020-01-29T01:27:24.088Z",
        "__v": 0
    },
    {
        "_id": "5e30df7c67a18d8ee4ea1f19",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7c67a18d8ee4ea1f1b",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df7c67a18d8ee4ea1f1a",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6f084d22-7380-bd88-0ab2-b4035380c668.jpg",
        "created": "2020-01-29T01:27:24.116Z",
        "updated": "2020-01-29T01:27:24.116Z",
        "__v": 0
    },
    {
        "_id": "5e30df7d67a18d8ee4ea1f1c",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7d67a18d8ee4ea1f1d",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/9cf7803d-235c-4160-0c16-df1fa1b3645a.jpg",
        "created": "2020-01-29T01:27:25.194Z",
        "updated": "2020-01-29T01:27:25.194Z",
        "__v": 0
    },
    {
        "_id": "5e30df7d67a18d8ee4ea1f1e",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df7d67a18d8ee4ea1f20",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df7d67a18d8ee4ea1f1f",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/47abdcdf-63c7-79c3-8718-c8c3b36cc881.jpg",
        "created": "2020-01-29T01:27:25.218Z",
        "updated": "2020-01-29T01:27:25.218Z",
        "__v": 0
    },
    {
        "_id": "5e30df8067a18d8ee4ea1f21",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8067a18d8ee4ea1f22",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d508e9b9-6f4a-cc33-1fee-45b14b869f8a.jpg",
        "created": "2020-01-29T01:27:28.635Z",
        "updated": "2020-01-29T01:27:28.635Z",
        "__v": 0
    },
    {
        "_id": "5e30df8067a18d8ee4ea1f23",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8067a18d8ee4ea1f25",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8067a18d8ee4ea1f24",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/86df3da5-b73e-ebe6-3b20-fc43fe4882a3.jpg",
        "created": "2020-01-29T01:27:28.664Z",
        "updated": "2020-01-29T01:27:28.664Z",
        "__v": 0
    },
    {
        "_id": "5e30df8167a18d8ee4ea1f26",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8167a18d8ee4ea1f27",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/65aac705-5a39-67ca-850b-dac2d8b0e640.jpg",
        "created": "2020-01-29T01:27:29.933Z",
        "updated": "2020-01-29T01:27:29.933Z",
        "__v": 0
    },
    {
        "_id": "5e30df8167a18d8ee4ea1f28",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8167a18d8ee4ea1f2a",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8167a18d8ee4ea1f29",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/bc6bb65d-d150-c868-a4ba-70749da63ab8.jpg",
        "created": "2020-01-29T01:27:29.962Z",
        "updated": "2020-01-29T01:27:29.962Z",
        "__v": 0
    },
    {
        "_id": "5e30df8667a18d8ee4ea1f2b",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8667a18d8ee4ea1f2c",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/966677be-448f-4df8-9a24-befbfd3ac17d.jpg",
        "created": "2020-01-29T01:27:34.689Z",
        "updated": "2020-01-29T01:27:34.689Z",
        "__v": 0
    },
    {
        "_id": "5e30df8667a18d8ee4ea1f2d",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8667a18d8ee4ea1f2f",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8667a18d8ee4ea1f2e",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/cbd54b83-df2d-7693-02cd-c7a94c731ec4.jpg",
        "created": "2020-01-29T01:27:34.717Z",
        "updated": "2020-01-29T01:27:34.717Z",
        "__v": 0
    },
    {
        "_id": "5e30df8867a18d8ee4ea1f30",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8867a18d8ee4ea1f31",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/c74232e4-b045-b6db-d895-749067e117fd.jpg",
        "created": "2020-01-29T01:27:36.037Z",
        "updated": "2020-01-29T01:27:36.037Z",
        "__v": 0
    },
    {
        "_id": "5e30df8867a18d8ee4ea1f32",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8867a18d8ee4ea1f34",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8867a18d8ee4ea1f33",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ea08531f-b2ca-462b-1034-6a0bb36b195d.jpg",
        "created": "2020-01-29T01:27:36.069Z",
        "updated": "2020-01-29T01:27:36.069Z",
        "__v": 0
    },
    {
        "_id": "5e30df8867a18d8ee4ea1f35",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8867a18d8ee4ea1f36",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/c0ccb2f1-eaec-a4c6-8b75-c379cc05fc70.jpg",
        "created": "2020-01-29T01:27:36.905Z",
        "updated": "2020-01-29T01:27:36.905Z",
        "__v": 0
    },
    {
        "_id": "5e30df8867a18d8ee4ea1f37",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8867a18d8ee4ea1f39",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8867a18d8ee4ea1f38",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/9b06bb7c-ba73-fede-3930-2377582941fa.jpg",
        "created": "2020-01-29T01:27:36.941Z",
        "updated": "2020-01-29T01:27:36.941Z",
        "__v": 0
    },
    {
        "_id": "5e30df8967a18d8ee4ea1f3a",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8967a18d8ee4ea1f3b",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/105a17fc-a026-8da1-f447-bdeacf1dad1a.jpg",
        "created": "2020-01-29T01:27:37.719Z",
        "updated": "2020-01-29T01:27:37.719Z",
        "__v": 0
    },
    {
        "_id": "5e30df8967a18d8ee4ea1f3c",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8967a18d8ee4ea1f3e",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8967a18d8ee4ea1f3d",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2731715d-a556-ffc4-1bb6-61c6ab3e3ed2.jpg",
        "created": "2020-01-29T01:27:37.746Z",
        "updated": "2020-01-29T01:27:37.746Z",
        "__v": 0
    },
    {
        "_id": "5e30df8a67a18d8ee4ea1f3f",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8a67a18d8ee4ea1f40",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/07cb344d-2e0f-ea5f-c476-e76594572c07.jpg",
        "created": "2020-01-29T01:27:38.446Z",
        "updated": "2020-01-29T01:27:38.446Z",
        "__v": 0
    },
    {
        "_id": "5e30df8a67a18d8ee4ea1f41",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8a67a18d8ee4ea1f43",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8a67a18d8ee4ea1f42",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f66a84f6-3a98-6ba4-9541-6730b00ab02c.jpg",
        "created": "2020-01-29T01:27:38.479Z",
        "updated": "2020-01-29T01:27:38.479Z",
        "__v": 0
    },
    {
        "_id": "5e30df8a67a18d8ee4ea1f44",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8a67a18d8ee4ea1f45",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/73e6a7d8-6659-de23-306f-6a1114df4a0f.jpg",
        "created": "2020-01-29T01:27:38.943Z",
        "updated": "2020-01-29T01:27:38.943Z",
        "__v": 0
    },
    {
        "_id": "5e30df8a67a18d8ee4ea1f46",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8a67a18d8ee4ea1f48",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8a67a18d8ee4ea1f47",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ce3b02c7-ef4a-d525-2d3f-6307cae938ee.jpg",
        "created": "2020-01-29T01:27:38.966Z",
        "updated": "2020-01-29T01:27:38.966Z",
        "__v": 0
    },
    {
        "_id": "5e30df8b67a18d8ee4ea1f49",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8b67a18d8ee4ea1f4a",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/dfba35a2-5e04-6fd4-46ac-ae633f8fbee1.jpg",
        "created": "2020-01-29T01:27:39.778Z",
        "updated": "2020-01-29T01:27:39.778Z",
        "__v": 0
    },
    {
        "_id": "5e30df8b67a18d8ee4ea1f4b",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8b67a18d8ee4ea1f4d",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8b67a18d8ee4ea1f4c",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/561ffb7e-d2ab-a12c-c9e7-8f3dd9e8e9eb.jpg",
        "created": "2020-01-29T01:27:39.803Z",
        "updated": "2020-01-29T01:27:39.803Z",
        "__v": 0
    },
    {
        "_id": "5e30df8c67a18d8ee4ea1f4e",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8c67a18d8ee4ea1f4f",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/4557396f-22bf-ed27-9aa4-b0c735e26724.jpg",
        "created": "2020-01-29T01:27:40.405Z",
        "updated": "2020-01-29T01:27:40.405Z",
        "__v": 0
    },
    {
        "_id": "5e30df8c67a18d8ee4ea1f50",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8c67a18d8ee4ea1f52",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8c67a18d8ee4ea1f51",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/c188a175-9c33-274d-b93b-e2a11ee67733.jpg",
        "created": "2020-01-29T01:27:40.428Z",
        "updated": "2020-01-29T01:27:40.428Z",
        "__v": 0
    },
    {
        "_id": "5e30df8d67a18d8ee4ea1f53",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8d67a18d8ee4ea1f54",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e74abbea-d6e0-8059-b5d0-37ff0807d66b.jpg",
        "created": "2020-01-29T01:27:41.003Z",
        "updated": "2020-01-29T01:27:41.003Z",
        "__v": 0
    },
    {
        "_id": "5e30df8d67a18d8ee4ea1f55",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8d67a18d8ee4ea1f57",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8d67a18d8ee4ea1f56",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/4ac03691-82c7-024d-7a14-ff22917896f6.jpg",
        "created": "2020-01-29T01:27:41.046Z",
        "updated": "2020-01-29T01:27:41.046Z",
        "__v": 0
    },
    {
        "_id": "5e30df8d67a18d8ee4ea1f58",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8d67a18d8ee4ea1f59",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/0bfbed28-419b-9029-7072-1f252249ec38.jpg",
        "created": "2020-01-29T01:27:41.610Z",
        "updated": "2020-01-29T01:27:41.610Z",
        "__v": 0
    },
    {
        "_id": "5e30df8d67a18d8ee4ea1f5a",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8d67a18d8ee4ea1f5c",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8d67a18d8ee4ea1f5b",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/a03453c1-3d03-f3e7-9481-a825c8ad9dfe.jpg",
        "created": "2020-01-29T01:27:41.639Z",
        "updated": "2020-01-29T01:27:41.639Z",
        "__v": 0
    },
    {
        "_id": "5e30df8f67a18d8ee4ea1f5d",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8f67a18d8ee4ea1f5e",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/fc6af55d-83d7-dfec-9cc8-46e0094dfbac.jpg",
        "created": "2020-01-29T01:27:43.523Z",
        "updated": "2020-01-29T01:27:43.523Z",
        "__v": 0
    },
    {
        "_id": "5e30df8f67a18d8ee4ea1f5f",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df8f67a18d8ee4ea1f61",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df8f67a18d8ee4ea1f60",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/3864d20d-9cf7-7b3a-9cf2-d84b3b24c520.jpg",
        "created": "2020-01-29T01:27:43.554Z",
        "updated": "2020-01-29T01:27:43.554Z",
        "__v": 0
    },
    {
        "_id": "5e30df9067a18d8ee4ea1f62",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df9067a18d8ee4ea1f63",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/a23a313d-7d6c-3860-308c-36de4b368096.jpg",
        "created": "2020-01-29T01:27:44.515Z",
        "updated": "2020-01-29T01:27:44.515Z",
        "__v": 0
    },
    {
        "_id": "5e30df9067a18d8ee4ea1f64",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df9067a18d8ee4ea1f66",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df9067a18d8ee4ea1f65",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/75891ec5-2ee6-93a4-6d90-a03945bfd9db.jpg",
        "created": "2020-01-29T01:27:44.537Z",
        "updated": "2020-01-29T01:27:44.537Z",
        "__v": 0
    },
    {
        "_id": "5e30df9167a18d8ee4ea1f67",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df9167a18d8ee4ea1f68",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/0af9c0b8-bf88-1947-52c1-9ee4235e11c0.jpg",
        "created": "2020-01-29T01:27:45.885Z",
        "updated": "2020-01-29T01:27:45.885Z",
        "__v": 0
    },
    {
        "_id": "5e30df9167a18d8ee4ea1f69",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df9167a18d8ee4ea1f6b",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df9167a18d8ee4ea1f6a",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/21bad5dc-e033-c12e-f925-0831b63c92fd.jpg",
        "created": "2020-01-29T01:27:45.907Z",
        "updated": "2020-01-29T01:27:45.907Z",
        "__v": 0
    },
    {
        "_id": "5e30df9267a18d8ee4ea1f6c",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df9267a18d8ee4ea1f6d",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/29213549-de49-4e2e-b4e7-3fc991c2646e.jpg",
        "created": "2020-01-29T01:27:46.737Z",
        "updated": "2020-01-29T01:27:46.737Z",
        "__v": 0
    },
    {
        "_id": "5e30df9267a18d8ee4ea1f6e",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df9267a18d8ee4ea1f70",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df9267a18d8ee4ea1f6f",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/5eb1138f-4433-892e-2c76-9038376307cc.jpg",
        "created": "2020-01-29T01:27:46.762Z",
        "updated": "2020-01-29T01:27:46.762Z",
        "__v": 0
    },
    {
        "_id": "5e30df9467a18d8ee4ea1f71",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30df9467a18d8ee4ea1f72",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/da1bf995-ca2c-0d53-fa05-ea34c04bd984.jpg",
        "created": "2020-01-29T01:27:48.957Z",
        "updated": "2020-01-29T01:27:48.957Z",
        "__v": 0
    },
    {
        "_id": "5e30df9467a18d8ee4ea1f73",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30df9467a18d8ee4ea1f75",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30df9467a18d8ee4ea1f74",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/9dd319c6-0c26-6735-0b76-365fdd2d41e4.jpg",
        "created": "2020-01-29T01:27:48.986Z",
        "updated": "2020-01-29T01:27:48.986Z",
        "__v": 0
    },
    {
        "_id": "5e30dfa967a18d8ee4ea1f76",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfa967a18d8ee4ea1f77",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/cd51d799-8390-b58f-3023-18ce27cb2ed6.jpg",
        "created": "2020-01-29T01:28:09.548Z",
        "updated": "2020-01-29T01:28:09.548Z",
        "__v": 0
    },
    {
        "_id": "5e30dfa967a18d8ee4ea1f78",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfa967a18d8ee4ea1f7a",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfa967a18d8ee4ea1f79",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e1954fde-17db-f101-5f74-2067e966fc93.jpg",
        "created": "2020-01-29T01:28:09.580Z",
        "updated": "2020-01-29T01:28:09.580Z",
        "__v": 0
    },
    {
        "_id": "5e30dfac67a18d8ee4ea1f7b",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfac67a18d8ee4ea1f7c",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b6ef5b1b-61ac-32a7-721c-a4d8179d51b5.jpg",
        "created": "2020-01-29T01:28:12.713Z",
        "updated": "2020-01-29T01:28:12.713Z",
        "__v": 0
    },
    {
        "_id": "5e30dfac67a18d8ee4ea1f7d",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfac67a18d8ee4ea1f7f",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfac67a18d8ee4ea1f7e",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/7f430ef3-c577-7671-bd22-cdec9c47e1bc.jpg",
        "created": "2020-01-29T01:28:12.738Z",
        "updated": "2020-01-29T01:28:12.738Z",
        "__v": 0
    },
    {
        "_id": "5e30dfad67a18d8ee4ea1f80",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfad67a18d8ee4ea1f81",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/037d7ea8-1648-7d3e-7abc-61ea2e806a03.jpg",
        "created": "2020-01-29T01:28:13.807Z",
        "updated": "2020-01-29T01:28:13.807Z",
        "__v": 0
    },
    {
        "_id": "5e30dfad67a18d8ee4ea1f82",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfad67a18d8ee4ea1f84",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfad67a18d8ee4ea1f83",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/30770551-aa99-48e0-587a-0526b3616082.jpg",
        "created": "2020-01-29T01:28:13.838Z",
        "updated": "2020-01-29T01:28:13.838Z",
        "__v": 0
    },
    {
        "_id": "5e30dfae67a18d8ee4ea1f85",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfae67a18d8ee4ea1f86",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/90717d22-856a-8ddd-f478-09fb77ec77fe.jpg",
        "created": "2020-01-29T01:28:14.853Z",
        "updated": "2020-01-29T01:28:14.853Z",
        "__v": 0
    },
    {
        "_id": "5e30dfae67a18d8ee4ea1f87",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfae67a18d8ee4ea1f89",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfae67a18d8ee4ea1f88",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/860343e4-f477-48fa-a448-116cfd533218.jpg",
        "created": "2020-01-29T01:28:14.880Z",
        "updated": "2020-01-29T01:28:14.880Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbd67a18d8ee4ea1f8a",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbd67a18d8ee4ea1f8b",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ba1988ee-2c0b-2115-ccfa-796ff3e07923.jpg",
        "created": "2020-01-29T01:28:29.817Z",
        "updated": "2020-01-29T01:28:29.817Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbd67a18d8ee4ea1f8c",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbd67a18d8ee4ea1f8e",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbd67a18d8ee4ea1f8d",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/7aaeef34-0fea-47fb-0dc1-c095f356d3b4.jpg",
        "created": "2020-01-29T01:28:29.862Z",
        "updated": "2020-01-29T01:28:29.862Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbd67a18d8ee4ea1f8f",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbd67a18d8ee4ea1f90",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/94b1c7ba-f5b4-0701-9c72-e64b424140a0.jpg",
        "created": "2020-01-29T01:28:29.997Z",
        "updated": "2020-01-29T01:28:29.997Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1f91",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1f93",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbe67a18d8ee4ea1f92",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d592545d-e240-dd07-faa6-2391f6bad7e2.jpg",
        "created": "2020-01-29T01:28:30.021Z",
        "updated": "2020-01-29T01:28:30.021Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1f94",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1f95",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/80f50ed5-b3a3-cf22-454b-df6418ea8f7e.jpg",
        "created": "2020-01-29T01:28:30.172Z",
        "updated": "2020-01-29T01:28:30.172Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1f96",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1f98",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbe67a18d8ee4ea1f97",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/03b32982-8522-f602-5698-b40ccaf77c6b.jpg",
        "created": "2020-01-29T01:28:30.199Z",
        "updated": "2020-01-29T01:28:30.199Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1f99",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1f9a",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/5fe4e307-0a5d-3fc1-89bf-a9ccdf1f1f40.jpg",
        "created": "2020-01-29T01:28:30.348Z",
        "updated": "2020-01-29T01:28:30.348Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1f9b",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1f9d",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbe67a18d8ee4ea1f9c",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ebfb7744-efd5-0fc8-4453-b769d39bbf56.jpg",
        "created": "2020-01-29T01:28:30.370Z",
        "updated": "2020-01-29T01:28:30.370Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1f9e",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1f9f",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f93d7edf-ae01-479f-5e68-4a5b4e42e2a6.jpg",
        "created": "2020-01-29T01:28:30.520Z",
        "updated": "2020-01-29T01:28:30.520Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1fa0",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1fa2",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbe67a18d8ee4ea1fa1",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b022d880-a2c6-8a3f-2256-82dbe7ef5781.jpg",
        "created": "2020-01-29T01:28:30.545Z",
        "updated": "2020-01-29T01:28:30.545Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1fa3",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1fa4",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8341e61c-c5e9-4568-811e-0116a67cb663.jpg",
        "created": "2020-01-29T01:28:30.693Z",
        "updated": "2020-01-29T01:28:30.693Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1fa5",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1fa7",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbe67a18d8ee4ea1fa6",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/74558444-2c1c-444c-0fcd-8f02b58f6baf.jpg",
        "created": "2020-01-29T01:28:30.717Z",
        "updated": "2020-01-29T01:28:30.717Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1fa8",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1fa9",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2f98dd7c-984c-4c7c-023b-e0b19905995a.jpg",
        "created": "2020-01-29T01:28:30.875Z",
        "updated": "2020-01-29T01:28:30.875Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbe67a18d8ee4ea1faa",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbe67a18d8ee4ea1fac",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbe67a18d8ee4ea1fab",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/529bc71d-bdce-724f-ba0b-7a4cf663d1a5.jpg",
        "created": "2020-01-29T01:28:30.900Z",
        "updated": "2020-01-29T01:28:30.900Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fad",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fae",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/be0c2141-3f61-969e-ed87-dc88044af4b1.jpg",
        "created": "2020-01-29T01:28:31.045Z",
        "updated": "2020-01-29T01:28:31.045Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1faf",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fb1",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbf67a18d8ee4ea1fb0",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6648b68c-62ca-4a09-d009-223fec6a7289.jpg",
        "created": "2020-01-29T01:28:31.070Z",
        "updated": "2020-01-29T01:28:31.070Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fb2",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fb3",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/fe8cb2f4-b33e-486f-6015-5c3acde06034.jpg",
        "created": "2020-01-29T01:28:31.223Z",
        "updated": "2020-01-29T01:28:31.223Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fb4",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fb6",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbf67a18d8ee4ea1fb5",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/afa35a36-efec-6658-5958-139340601b17.jpg",
        "created": "2020-01-29T01:28:31.252Z",
        "updated": "2020-01-29T01:28:31.252Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fb7",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fb8",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8cbaa556-7f3b-8e3d-e730-574ec61e67e5.jpg",
        "created": "2020-01-29T01:28:31.402Z",
        "updated": "2020-01-29T01:28:31.402Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fb9",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fbb",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbf67a18d8ee4ea1fba",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/98f38b56-913d-597b-f518-65c7176d28c7.jpg",
        "created": "2020-01-29T01:28:31.425Z",
        "updated": "2020-01-29T01:28:31.425Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fbc",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fbd",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/3d173e78-c474-c622-cd1b-c379ffaeaa08.jpg",
        "created": "2020-01-29T01:28:31.578Z",
        "updated": "2020-01-29T01:28:31.578Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fbe",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fc0",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbf67a18d8ee4ea1fbf",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6c7cfa56-2273-bcc4-aa08-4233e95681ac.jpg",
        "created": "2020-01-29T01:28:31.602Z",
        "updated": "2020-01-29T01:28:31.602Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fc1",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fc2",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/20a27445-133a-9c48-b1dc-d5d25a3de846.jpg",
        "created": "2020-01-29T01:28:31.752Z",
        "updated": "2020-01-29T01:28:31.752Z",
        "__v": 0
    },
    {
        "_id": "5e30dfbf67a18d8ee4ea1fc3",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfbf67a18d8ee4ea1fc5",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfbf67a18d8ee4ea1fc4",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/16bd2e3d-99dd-17a0-d864-37c0ee336540.jpg",
        "created": "2020-01-29T01:28:31.779Z",
        "updated": "2020-01-29T01:28:31.779Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fc6",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fc7",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/a9eb66a0-f435-2249-b4e2-c0e9374faa25.jpg",
        "created": "2020-01-29T01:28:36.254Z",
        "updated": "2020-01-29T01:28:36.254Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fc8",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fca",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc467a18d8ee4ea1fc9",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8bb11c7d-eac8-b3ca-1ca3-ede8d45d6a01.jpg",
        "created": "2020-01-29T01:28:36.278Z",
        "updated": "2020-01-29T01:28:36.278Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fcb",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fcc",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/57450d9e-48a6-4c22-6924-382d1632b266.jpg",
        "created": "2020-01-29T01:28:36.425Z",
        "updated": "2020-01-29T01:28:36.425Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fcd",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fcf",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc467a18d8ee4ea1fce",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6eed3874-94d3-0b0f-a4f5-806e0448cf88.jpg",
        "created": "2020-01-29T01:28:36.449Z",
        "updated": "2020-01-29T01:28:36.449Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fd0",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fd1",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e32427df-2316-8e0a-15ae-ff555f591c38.jpg",
        "created": "2020-01-29T01:28:36.604Z",
        "updated": "2020-01-29T01:28:36.604Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fd2",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fd4",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc467a18d8ee4ea1fd3",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/bcd69b62-58d0-a378-6967-4d4e7a7487c6.jpg",
        "created": "2020-01-29T01:28:36.629Z",
        "updated": "2020-01-29T01:28:36.629Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fd5",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fd6",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/618c7374-135b-4fe3-ea5a-74ac6839b7a3.jpg",
        "created": "2020-01-29T01:28:36.779Z",
        "updated": "2020-01-29T01:28:36.779Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fd7",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fd9",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc467a18d8ee4ea1fd8",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/568919a3-1855-cabd-ad60-3cfa801512d4.jpg",
        "created": "2020-01-29T01:28:36.805Z",
        "updated": "2020-01-29T01:28:36.805Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fda",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fdb",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f7192dbb-64d3-a7cd-dc14-8666ebfaee3e.jpg",
        "created": "2020-01-29T01:28:36.970Z",
        "updated": "2020-01-29T01:28:36.970Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc467a18d8ee4ea1fdc",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc467a18d8ee4ea1fde",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc467a18d8ee4ea1fdd",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d8d4af85-d773-7d7e-975b-011617144b44.jpg",
        "created": "2020-01-29T01:28:36.994Z",
        "updated": "2020-01-29T01:28:36.994Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1fdf",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1fe0",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/81e4c6c9-02eb-4445-dca9-ed9708d5d80e.jpg",
        "created": "2020-01-29T01:28:37.142Z",
        "updated": "2020-01-29T01:28:37.142Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1fe1",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1fe3",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc567a18d8ee4ea1fe2",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/68aafb09-1450-f842-1606-dfa085e9c888.jpg",
        "created": "2020-01-29T01:28:37.167Z",
        "updated": "2020-01-29T01:28:37.167Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1fe4",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1fe5",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/01d8d821-bd70-218a-f963-3b48e1a09860.jpg",
        "created": "2020-01-29T01:28:37.320Z",
        "updated": "2020-01-29T01:28:37.320Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1fe6",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1fe8",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc567a18d8ee4ea1fe7",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d3741888-1bed-12eb-9450-3c41702877dc.jpg",
        "created": "2020-01-29T01:28:37.342Z",
        "updated": "2020-01-29T01:28:37.342Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1fe9",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1fea",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/31e5d25a-26c1-0044-fe23-108c1d7a1d42.jpg",
        "created": "2020-01-29T01:28:37.495Z",
        "updated": "2020-01-29T01:28:37.495Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1feb",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1fed",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc567a18d8ee4ea1fec",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8c9fd0f6-68c5-9b5e-109f-a6cfdb1d8a30.jpg",
        "created": "2020-01-29T01:28:37.519Z",
        "updated": "2020-01-29T01:28:37.519Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1fee",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1fef",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/9693c5fa-5ed2-891c-ff41-898021f1b391.jpg",
        "created": "2020-01-29T01:28:37.669Z",
        "updated": "2020-01-29T01:28:37.669Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1ff0",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1ff2",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc567a18d8ee4ea1ff1",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/66aebfde-d6d1-253b-38bd-9b2d950cd33c.jpg",
        "created": "2020-01-29T01:28:37.692Z",
        "updated": "2020-01-29T01:28:37.692Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1ff3",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1ff4",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6783244c-9159-ea21-a0c7-9f569751e2a3.jpg",
        "created": "2020-01-29T01:28:37.851Z",
        "updated": "2020-01-29T01:28:37.851Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc567a18d8ee4ea1ff5",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc567a18d8ee4ea1ff7",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc567a18d8ee4ea1ff6",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/0b340d24-d515-b040-730e-8dab01e619ee.jpg",
        "created": "2020-01-29T01:28:37.876Z",
        "updated": "2020-01-29T01:28:37.876Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc667a18d8ee4ea1ff8",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc667a18d8ee4ea1ff9",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/c702ba8d-0e33-61a5-bcc5-a4e289cae450.jpg",
        "created": "2020-01-29T01:28:38.029Z",
        "updated": "2020-01-29T01:28:38.029Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc667a18d8ee4ea1ffa",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc667a18d8ee4ea1ffc",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc667a18d8ee4ea1ffb",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/5c4bb2d1-eb1a-e34e-f713-ebf94f827664.jpg",
        "created": "2020-01-29T01:28:38.050Z",
        "updated": "2020-01-29T01:28:38.050Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc667a18d8ee4ea1ffd",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc667a18d8ee4ea1ffe",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/029251ee-f329-0104-bbdb-6fda5ebbecbe.jpg",
        "created": "2020-01-29T01:28:38.209Z",
        "updated": "2020-01-29T01:28:38.209Z",
        "__v": 0
    },
    {
        "_id": "5e30dfc667a18d8ee4ea1fff",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30dfc667a18d8ee4ea2001",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30dfc667a18d8ee4ea2000",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ea47e008-6b29-99aa-ea99-017ce174c399.jpg",
        "created": "2020-01-29T01:28:38.233Z",
        "updated": "2020-01-29T01:28:38.233Z",
        "__v": 0
    },
    {
        "_id": "5e30e10467a18d8ee4ea2002",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e10467a18d8ee4ea2003",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/954060cd-ccf6-2631-790f-d769b3fe09e6.jpg",
        "created": "2020-01-29T01:33:56.795Z",
        "updated": "2020-01-29T01:33:56.795Z",
        "__v": 0
    },
    {
        "_id": "5e30e10467a18d8ee4ea2004",
        "cnpj": "85650128000155",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e10467a18d8ee4ea2006",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e10467a18d8ee4ea2005",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b607749a-34eb-8de7-4baf-8c4477cf5ef2.jpg",
        "created": "2020-01-29T01:33:56.841Z",
        "updated": "2020-01-29T01:33:56.841Z",
        "__v": 0
    },
    {
        "_id": "5e30e1cc67a18d8ee4ea2009",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e1cc67a18d8ee4ea200a",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f83f0be1-93dd-126a-6e38-22d9079adb86.jpg",
        "created": "2020-01-29T01:37:16.470Z",
        "updated": "2020-01-29T01:37:16.470Z",
        "__v": 0
    },
    {
        "_id": "5e30e1cc67a18d8ee4ea200b",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e1cc67a18d8ee4ea200d",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e1cc67a18d8ee4ea200c",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/23fb7361-8f3a-3736-c0a3-c1408e85fe0e.jpg",
        "created": "2020-01-29T01:37:16.508Z",
        "updated": "2020-01-29T01:37:16.508Z",
        "__v": 0
    },
    {
        "_id": "5e30e20667a18d8ee4ea200e",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e20667a18d8ee4ea200f",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e36677d7-3971-c40f-edc3-f7ac42783f50.jpg",
        "created": "2020-01-29T01:38:14.442Z",
        "updated": "2020-01-29T01:38:14.442Z",
        "__v": 0
    },
    {
        "_id": "5e30e20667a18d8ee4ea2010",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e20667a18d8ee4ea2012",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e20667a18d8ee4ea2011",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/643736dd-d482-b796-827b-3df7b1224560.jpg",
        "created": "2020-01-29T01:38:14.479Z",
        "updated": "2020-01-29T01:38:14.479Z",
        "__v": 0
    },
    {
        "_id": "5e30e20a67a18d8ee4ea2013",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e20a67a18d8ee4ea2014",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/3a4d7f34-c987-312c-68a0-ca6fda64650d.jpg",
        "created": "2020-01-29T01:38:18.131Z",
        "updated": "2020-01-29T01:38:18.131Z",
        "__v": 0
    },
    {
        "_id": "5e30e20a67a18d8ee4ea2015",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e20a67a18d8ee4ea2017",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e20a67a18d8ee4ea2016",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/16613a29-b6cc-39e4-8c45-f0e2765fd689.jpg",
        "created": "2020-01-29T01:38:18.158Z",
        "updated": "2020-01-29T01:38:18.158Z",
        "__v": 0
    },
    {
        "_id": "5e30e24b67a18d8ee4ea2018",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e24b67a18d8ee4ea2019",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2044e060-d9d4-f39b-7cb1-77671beb6063.jpg",
        "created": "2020-01-29T01:39:23.333Z",
        "updated": "2020-01-29T01:39:23.333Z",
        "__v": 0
    },
    {
        "_id": "5e30e24b67a18d8ee4ea201a",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e24b67a18d8ee4ea201c",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e24b67a18d8ee4ea201b",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8af0de1b-c3f6-9350-24a0-99f58453fc28.jpg",
        "created": "2020-01-29T01:39:23.363Z",
        "updated": "2020-01-29T01:39:23.363Z",
        "__v": 0
    },
    {
        "_id": "5e30e26a67a18d8ee4ea201d",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e26a67a18d8ee4ea201e",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/712de016-eaf7-4294-b194-a4b15735e386.jpg",
        "created": "2020-01-29T01:39:54.553Z",
        "updated": "2020-01-29T01:39:54.553Z",
        "__v": 0
    },
    {
        "_id": "5e30e26a67a18d8ee4ea201f",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e26a67a18d8ee4ea2021",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e26a67a18d8ee4ea2020",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/451f24e3-7e13-36bb-2ed0-9f4daca792f1.jpg",
        "created": "2020-01-29T01:39:54.585Z",
        "updated": "2020-01-29T01:39:54.585Z",
        "__v": 0
    },
    {
        "_id": "5e30e27167a18d8ee4ea2022",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27167a18d8ee4ea2023",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/629a2eb3-2f46-9c23-a855-7dcfe3217aa6.jpg",
        "created": "2020-01-29T01:40:01.631Z",
        "updated": "2020-01-29T01:40:01.631Z",
        "__v": 0
    },
    {
        "_id": "5e30e27167a18d8ee4ea2024",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27167a18d8ee4ea2026",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27167a18d8ee4ea2025",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/565529e3-a452-5d17-07a7-9edded4fc545.jpg",
        "created": "2020-01-29T01:40:01.661Z",
        "updated": "2020-01-29T01:40:01.661Z",
        "__v": 0
    },
    {
        "_id": "5e30e27167a18d8ee4ea2027",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27167a18d8ee4ea2028",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2e7060fa-3bd8-838b-49c0-480b705526e0.jpg",
        "created": "2020-01-29T01:40:01.809Z",
        "updated": "2020-01-29T01:40:01.809Z",
        "__v": 0
    },
    {
        "_id": "5e30e27167a18d8ee4ea2029",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27167a18d8ee4ea202b",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27167a18d8ee4ea202a",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/69aedddb-2e9d-2d39-45d1-9bbbb8b10304.jpg",
        "created": "2020-01-29T01:40:01.830Z",
        "updated": "2020-01-29T01:40:01.830Z",
        "__v": 0
    },
    {
        "_id": "5e30e27167a18d8ee4ea202c",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27167a18d8ee4ea202d",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8fb59bf5-fc78-5eb0-64e2-294ce3a43ed5.jpg",
        "created": "2020-01-29T01:40:01.989Z",
        "updated": "2020-01-29T01:40:01.989Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea202e",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea2030",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27267a18d8ee4ea202f",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/dde48e1b-b90b-52bb-9876-5b292e42f845.jpg",
        "created": "2020-01-29T01:40:02.017Z",
        "updated": "2020-01-29T01:40:02.017Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea2031",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea2032",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/5103bf81-63d5-3a22-e0ef-dc53665ed1fd.jpg",
        "created": "2020-01-29T01:40:02.170Z",
        "updated": "2020-01-29T01:40:02.170Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea2033",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea2035",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27267a18d8ee4ea2034",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/5ead567f-3323-0329-d497-7d0cc4465b3f.jpg",
        "created": "2020-01-29T01:40:02.196Z",
        "updated": "2020-01-29T01:40:02.196Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea2036",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea2037",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/77aaa99f-fc47-f3a8-1a18-b4eebbaec96a.jpg",
        "created": "2020-01-29T01:40:02.354Z",
        "updated": "2020-01-29T01:40:02.354Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea2038",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea203a",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27267a18d8ee4ea2039",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/9a2cfe72-9e50-0ae0-3784-911182e1e941.jpg",
        "created": "2020-01-29T01:40:02.378Z",
        "updated": "2020-01-29T01:40:02.378Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea203b",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea203c",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2f90a5b4-10ab-e65a-e54b-4dfdaf305e63.jpg",
        "created": "2020-01-29T01:40:02.543Z",
        "updated": "2020-01-29T01:40:02.543Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea203d",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea203f",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27267a18d8ee4ea203e",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/c6dcaebf-cbe8-d795-0792-a48ebceb43dc.jpg",
        "created": "2020-01-29T01:40:02.564Z",
        "updated": "2020-01-29T01:40:02.564Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea2040",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea2041",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f8600718-30b6-38f2-0bf8-559e6787540c.jpg",
        "created": "2020-01-29T01:40:02.721Z",
        "updated": "2020-01-29T01:40:02.721Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea2042",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea2044",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27267a18d8ee4ea2043",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/47aeab68-f3b9-ab29-f69b-e431a222e006.jpg",
        "created": "2020-01-29T01:40:02.749Z",
        "updated": "2020-01-29T01:40:02.749Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea2045",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea2046",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d9c55bdb-f3a9-9635-4b64-dd948e19cdf4.jpg",
        "created": "2020-01-29T01:40:02.894Z",
        "updated": "2020-01-29T01:40:02.894Z",
        "__v": 0
    },
    {
        "_id": "5e30e27267a18d8ee4ea2047",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27267a18d8ee4ea2049",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27267a18d8ee4ea2048",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/9a9de731-278a-1993-49f6-e057ba94f1b7.jpg",
        "created": "2020-01-29T01:40:02.920Z",
        "updated": "2020-01-29T01:40:02.920Z",
        "__v": 0
    },
    {
        "_id": "5e30e27367a18d8ee4ea204a",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27367a18d8ee4ea204b",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6e61cab0-2c00-c4f5-de57-b29f0dda439c.jpg",
        "created": "2020-01-29T01:40:03.082Z",
        "updated": "2020-01-29T01:40:03.082Z",
        "__v": 0
    },
    {
        "_id": "5e30e27367a18d8ee4ea204c",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27367a18d8ee4ea204e",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27367a18d8ee4ea204d",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/235fd2d5-f885-b847-c792-b0541ba02179.jpg",
        "created": "2020-01-29T01:40:03.108Z",
        "updated": "2020-01-29T01:40:03.108Z",
        "__v": 0
    },
    {
        "_id": "5e30e27367a18d8ee4ea204f",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27367a18d8ee4ea2050",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/7df5edf7-a1d9-ec06-f280-1933d0783c62.jpg",
        "created": "2020-01-29T01:40:03.260Z",
        "updated": "2020-01-29T01:40:03.260Z",
        "__v": 0
    },
    {
        "_id": "5e30e27367a18d8ee4ea2051",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27367a18d8ee4ea2053",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27367a18d8ee4ea2052",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b83b1805-13a8-a864-2dd0-82e29549e4c9.jpg",
        "created": "2020-01-29T01:40:03.285Z",
        "updated": "2020-01-29T01:40:03.285Z",
        "__v": 0
    },
    {
        "_id": "5e30e27367a18d8ee4ea2054",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27367a18d8ee4ea2055",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2bab71e9-6d42-0df5-8b8a-6031e70b4d80.jpg",
        "created": "2020-01-29T01:40:03.449Z",
        "updated": "2020-01-29T01:40:03.449Z",
        "__v": 0
    },
    {
        "_id": "5e30e27367a18d8ee4ea2056",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27367a18d8ee4ea2058",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27367a18d8ee4ea2057",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/45865172-cea0-957c-75bc-6cbea13e66f6.jpg",
        "created": "2020-01-29T01:40:03.477Z",
        "updated": "2020-01-29T01:40:03.477Z",
        "__v": 0
    },
    {
        "_id": "5e30e27367a18d8ee4ea2059",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27367a18d8ee4ea205a",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e628207c-603d-d071-fc80-ee6bd110d4cf.jpg",
        "created": "2020-01-29T01:40:03.620Z",
        "updated": "2020-01-29T01:40:03.620Z",
        "__v": 0
    },
    {
        "_id": "5e30e27367a18d8ee4ea205b",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e27367a18d8ee4ea205d",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e27367a18d8ee4ea205c",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/a880232c-b43e-71c0-f415-299ea8206fa5.jpg",
        "created": "2020-01-29T01:40:03.643Z",
        "updated": "2020-01-29T01:40:03.643Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea205e",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea205f",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/4515744b-7ffc-db98-b2af-49fd05d2cb4f.jpg",
        "created": "2020-01-29T01:40:34.284Z",
        "updated": "2020-01-29T01:40:34.284Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea2060",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea2062",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29267a18d8ee4ea2061",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/7dabe97d-a8a3-3f51-8441-1f0da81ab82c.jpg",
        "created": "2020-01-29T01:40:34.315Z",
        "updated": "2020-01-29T01:40:34.315Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea2063",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea2064",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2fa06ea5-c5d0-08cb-179f-9cf6010c5f4d.jpg",
        "created": "2020-01-29T01:40:34.472Z",
        "updated": "2020-01-29T01:40:34.472Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea2065",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea2067",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29267a18d8ee4ea2066",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/72d1e296-57f1-9354-4f20-712078220dc4.jpg",
        "created": "2020-01-29T01:40:34.497Z",
        "updated": "2020-01-29T01:40:34.497Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea2068",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea2069",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/dffa7f6e-f869-603a-310a-4e092cad951e.jpg",
        "created": "2020-01-29T01:40:34.647Z",
        "updated": "2020-01-29T01:40:34.647Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea206a",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea206c",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29267a18d8ee4ea206b",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/fd5a5e48-d6e1-7de7-ee4c-f4f0e85536eb.jpg",
        "created": "2020-01-29T01:40:34.667Z",
        "updated": "2020-01-29T01:40:34.667Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea206d",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea206e",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/52a0d471-c3b7-dc43-4d3d-257e8a69fa5f.jpg",
        "created": "2020-01-29T01:40:34.816Z",
        "updated": "2020-01-29T01:40:34.816Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea206f",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea2071",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29267a18d8ee4ea2070",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ccf092cf-8fa1-a71a-5ec2-fd5e234a166c.jpg",
        "created": "2020-01-29T01:40:34.836Z",
        "updated": "2020-01-29T01:40:34.836Z",
        "__v": 0
    },
    {
        "_id": "5e30e29267a18d8ee4ea2072",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29267a18d8ee4ea2073",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/23f6672a-b481-9d28-c17b-fea001603601.jpg",
        "created": "2020-01-29T01:40:34.986Z",
        "updated": "2020-01-29T01:40:34.986Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea2074",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea2076",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29367a18d8ee4ea2075",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2f56c2d6-e10a-9409-7dc3-7906f2698b59.jpg",
        "created": "2020-01-29T01:40:35.011Z",
        "updated": "2020-01-29T01:40:35.011Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea2077",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea2078",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8f5c12c0-f8af-e937-b8a0-c396ed5a1e15.jpg",
        "created": "2020-01-29T01:40:35.159Z",
        "updated": "2020-01-29T01:40:35.159Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea2079",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea207b",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29367a18d8ee4ea207a",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ce6fee90-6085-8e67-a05b-c252a634f092.jpg",
        "created": "2020-01-29T01:40:35.181Z",
        "updated": "2020-01-29T01:40:35.181Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea207c",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea207d",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/85672513-bc61-0df7-4964-fea73d5b45b2.jpg",
        "created": "2020-01-29T01:40:35.330Z",
        "updated": "2020-01-29T01:40:35.330Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea207e",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea2080",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29367a18d8ee4ea207f",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/de7ef132-268d-8d3d-4f2d-9f7011284c4a.jpg",
        "created": "2020-01-29T01:40:35.355Z",
        "updated": "2020-01-29T01:40:35.355Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea2081",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea2082",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/99a65fb2-dd2c-13cb-90ae-717c4685b62c.jpg",
        "created": "2020-01-29T01:40:35.503Z",
        "updated": "2020-01-29T01:40:35.503Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea2083",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea2085",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29367a18d8ee4ea2084",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/88d6263f-5583-294d-7de6-b08efb14cc21.jpg",
        "created": "2020-01-29T01:40:35.524Z",
        "updated": "2020-01-29T01:40:35.524Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea2086",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea2087",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e33dad73-5b06-24bf-871d-5a4651335735.jpg",
        "created": "2020-01-29T01:40:35.673Z",
        "updated": "2020-01-29T01:40:35.673Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea2088",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea208a",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29367a18d8ee4ea2089",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8530a62b-601b-924e-eea0-16b8729f9002.jpg",
        "created": "2020-01-29T01:40:35.696Z",
        "updated": "2020-01-29T01:40:35.696Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea208b",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea208c",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e670594c-1c02-732d-3115-4de639e79ac5.jpg",
        "created": "2020-01-29T01:40:35.849Z",
        "updated": "2020-01-29T01:40:35.849Z",
        "__v": 0
    },
    {
        "_id": "5e30e29367a18d8ee4ea208d",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29367a18d8ee4ea208f",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29367a18d8ee4ea208e",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/94ed7896-b55a-236b-43eb-d91718942b46.jpg",
        "created": "2020-01-29T01:40:35.874Z",
        "updated": "2020-01-29T01:40:35.874Z",
        "__v": 0
    },
    {
        "_id": "5e30e29467a18d8ee4ea2090",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29467a18d8ee4ea2091",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/cc774799-0d72-6f77-d53a-d79b5cd6b97e.jpg",
        "created": "2020-01-29T01:40:36.027Z",
        "updated": "2020-01-29T01:40:36.027Z",
        "__v": 0
    },
    {
        "_id": "5e30e29467a18d8ee4ea2092",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29467a18d8ee4ea2094",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29467a18d8ee4ea2093",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b9d72bcd-bcb7-e6f9-eb78-8e622612ee4d.jpg",
        "created": "2020-01-29T01:40:36.049Z",
        "updated": "2020-01-29T01:40:36.049Z",
        "__v": 0
    },
    {
        "_id": "5e30e29467a18d8ee4ea2095",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29467a18d8ee4ea2096",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ddf6d08c-ad40-fb51-3917-977bb36ab9ad.jpg",
        "created": "2020-01-29T01:40:36.206Z",
        "updated": "2020-01-29T01:40:36.206Z",
        "__v": 0
    },
    {
        "_id": "5e30e29467a18d8ee4ea2097",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29467a18d8ee4ea2099",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29467a18d8ee4ea2098",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/76e6c05b-5216-6a23-18e1-51b0390e1932.jpg",
        "created": "2020-01-29T01:40:36.228Z",
        "updated": "2020-01-29T01:40:36.228Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea209a",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea209b",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/b2df87ca-525b-12d7-443d-a99403c9fe28.jpg",
        "created": "2020-01-29T01:40:41.262Z",
        "updated": "2020-01-29T01:40:41.262Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea209c",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea209e",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29967a18d8ee4ea209d",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ab10f83f-14bd-205a-2e7a-735f4e3dbb2e.jpg",
        "created": "2020-01-29T01:40:41.287Z",
        "updated": "2020-01-29T01:40:41.287Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea209f",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea20a0",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f714c4d7-bbd9-40c0-942c-ead1540ae59c.jpg",
        "created": "2020-01-29T01:40:41.451Z",
        "updated": "2020-01-29T01:40:41.451Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea20a1",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea20a3",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29967a18d8ee4ea20a2",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/0d8aea32-17f9-c538-6be1-6468709d1a4e.jpg",
        "created": "2020-01-29T01:40:41.479Z",
        "updated": "2020-01-29T01:40:41.479Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea20a4",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea20a5",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/a5cfac22-a65c-19c1-b05c-eaf20afdfc88.jpg",
        "created": "2020-01-29T01:40:41.638Z",
        "updated": "2020-01-29T01:40:41.638Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea20a6",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea20a8",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29967a18d8ee4ea20a7",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f3c70c1d-1d02-4b6a-3de6-a56f2786c2a6.jpg",
        "created": "2020-01-29T01:40:41.664Z",
        "updated": "2020-01-29T01:40:41.664Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea20a9",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea20aa",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/573b24cf-8ced-f6e4-daf9-87e244a18a03.jpg",
        "created": "2020-01-29T01:40:41.816Z",
        "updated": "2020-01-29T01:40:41.816Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea20ab",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea20ad",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29967a18d8ee4ea20ac",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/16080b51-596b-4aa1-3c33-21658ba52c47.jpg",
        "created": "2020-01-29T01:40:41.840Z",
        "updated": "2020-01-29T01:40:41.840Z",
        "__v": 0
    },
    {
        "_id": "5e30e29967a18d8ee4ea20ae",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29967a18d8ee4ea20af",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/77122d43-829a-7a69-4541-6b2a068a7c2c.jpg",
        "created": "2020-01-29T01:40:41.991Z",
        "updated": "2020-01-29T01:40:41.991Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20b0",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20b2",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29a67a18d8ee4ea20b1",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/fb7b1c8b-1b52-f7ee-6a6f-690391b1177b.jpg",
        "created": "2020-01-29T01:40:42.018Z",
        "updated": "2020-01-29T01:40:42.018Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20b3",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20b4",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/cce80d54-16e0-4b65-38e4-96a8a9e5ff5a.jpg",
        "created": "2020-01-29T01:40:42.167Z",
        "updated": "2020-01-29T01:40:42.167Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20b5",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20b7",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29a67a18d8ee4ea20b6",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/151f0647-9f37-64cc-b65f-4ff34f72cecb.jpg",
        "created": "2020-01-29T01:40:42.193Z",
        "updated": "2020-01-29T01:40:42.193Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20b8",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20b9",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/3362d887-f3f2-6ad1-866c-98e1cea130f9.jpg",
        "created": "2020-01-29T01:40:42.350Z",
        "updated": "2020-01-29T01:40:42.350Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20ba",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20bc",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29a67a18d8ee4ea20bb",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e0e88491-93ca-4259-e2b4-eb670cfceeb9.jpg",
        "created": "2020-01-29T01:40:42.372Z",
        "updated": "2020-01-29T01:40:42.372Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20bd",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20be",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/55a45456-0e0e-a7d2-3208-7864d5deb7c8.jpg",
        "created": "2020-01-29T01:40:42.522Z",
        "updated": "2020-01-29T01:40:42.522Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20bf",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20c1",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29a67a18d8ee4ea20c0",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/eea91ad8-23b3-0f3d-6362-943392f04a3b.jpg",
        "created": "2020-01-29T01:40:42.543Z",
        "updated": "2020-01-29T01:40:42.543Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20c2",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20c3",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/dff075ff-3ca7-7da9-3cd6-521fa4f59c86.jpg",
        "created": "2020-01-29T01:40:42.690Z",
        "updated": "2020-01-29T01:40:42.690Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20c4",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20c6",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29a67a18d8ee4ea20c5",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/cc3881ab-9968-971b-b1c3-bac9b1d6c538.jpg",
        "created": "2020-01-29T01:40:42.713Z",
        "updated": "2020-01-29T01:40:42.713Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20c7",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20c8",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/2b738ebf-a12f-77a3-f35c-44de7b5670b7.jpg",
        "created": "2020-01-29T01:40:42.866Z",
        "updated": "2020-01-29T01:40:42.866Z",
        "__v": 0
    },
    {
        "_id": "5e30e29a67a18d8ee4ea20c9",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29a67a18d8ee4ea20cb",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29a67a18d8ee4ea20ca",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/0a1cce46-77a5-ff3d-4ffa-03637f5ca0b9.jpg",
        "created": "2020-01-29T01:40:42.892Z",
        "updated": "2020-01-29T01:40:42.892Z",
        "__v": 0
    },
    {
        "_id": "5e30e29b67a18d8ee4ea20cc",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29b67a18d8ee4ea20cd",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6ed931c8-2ca7-0956-7220-3e143e7bb6e9.jpg",
        "created": "2020-01-29T01:40:43.039Z",
        "updated": "2020-01-29T01:40:43.039Z",
        "__v": 0
    },
    {
        "_id": "5e30e29b67a18d8ee4ea20ce",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29b67a18d8ee4ea20d0",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29b67a18d8ee4ea20cf",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/87ce9867-5f46-fe8a-2ef6-2a54b4c39d7f.jpg",
        "created": "2020-01-29T01:40:43.062Z",
        "updated": "2020-01-29T01:40:43.062Z",
        "__v": 0
    },
    {
        "_id": "5e30e29b67a18d8ee4ea20d1",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29b67a18d8ee4ea20d2",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/3dc68ddf-3d98-dc13-48dd-3498c21e4cbe.jpg",
        "created": "2020-01-29T01:40:43.207Z",
        "updated": "2020-01-29T01:40:43.207Z",
        "__v": 0
    },
    {
        "_id": "5e30e29b67a18d8ee4ea20d3",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e29b67a18d8ee4ea20d5",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e29b67a18d8ee4ea20d4",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6bec36b6-8bf6-3e10-2b10-cbff4ef92ff0.jpg",
        "created": "2020-01-29T01:40:43.233Z",
        "updated": "2020-01-29T01:40:43.233Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a367a18d8ee4ea20d6",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a367a18d8ee4ea20d7",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/fb2a587b-3808-3a4e-0913-8456aff74640.jpg",
        "created": "2020-01-29T01:40:51.978Z",
        "updated": "2020-01-29T01:40:51.978Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20d8",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20da",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a467a18d8ee4ea20d9",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/830d507d-dcfd-1c78-d0c2-6e450336b6c7.jpg",
        "created": "2020-01-29T01:40:52.013Z",
        "updated": "2020-01-29T01:40:52.013Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20db",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20dc",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/11f9138d-5b3e-359e-8432-7423f0cfb1d9.jpg",
        "created": "2020-01-29T01:40:52.159Z",
        "updated": "2020-01-29T01:40:52.159Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20dd",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20df",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a467a18d8ee4ea20de",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/1745fe5c-9c9b-3527-da72-1a8d81b3be40.jpg",
        "created": "2020-01-29T01:40:52.185Z",
        "updated": "2020-01-29T01:40:52.185Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20e0",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20e1",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/64bd481f-9522-1375-6b49-2d1f90b2b2db.jpg",
        "created": "2020-01-29T01:40:52.338Z",
        "updated": "2020-01-29T01:40:52.338Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20e2",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20e4",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a467a18d8ee4ea20e3",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e05027d3-cf07-30fa-82e8-4b7885c424e0.jpg",
        "created": "2020-01-29T01:40:52.361Z",
        "updated": "2020-01-29T01:40:52.361Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20e5",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20e6",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/95322efc-c727-187a-ff6b-3ad742b1ad08.jpg",
        "created": "2020-01-29T01:40:52.511Z",
        "updated": "2020-01-29T01:40:52.511Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20e7",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20e9",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a467a18d8ee4ea20e8",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/faf3019f-685d-1256-68df-143201ff12f2.jpg",
        "created": "2020-01-29T01:40:52.536Z",
        "updated": "2020-01-29T01:40:52.536Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20ea",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20eb",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d8d2e9f4-46a1-053f-e8c1-43e03530f2fb.jpg",
        "created": "2020-01-29T01:40:52.691Z",
        "updated": "2020-01-29T01:40:52.691Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20ec",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20ee",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a467a18d8ee4ea20ed",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/29eced84-a1b7-350d-f2b6-c466d20baa3c.jpg",
        "created": "2020-01-29T01:40:52.714Z",
        "updated": "2020-01-29T01:40:52.714Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20ef",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20f0",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/fbbeb294-0df8-ec3f-79ba-e94cacb2877d.jpg",
        "created": "2020-01-29T01:40:52.862Z",
        "updated": "2020-01-29T01:40:52.862Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a467a18d8ee4ea20f1",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a467a18d8ee4ea20f3",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a467a18d8ee4ea20f2",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/c27111d3-72dc-b514-0c0b-e9db4d25f022.jpg",
        "created": "2020-01-29T01:40:52.885Z",
        "updated": "2020-01-29T01:40:52.885Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea20f4",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea20f5",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/ea8dbec9-e2d7-eab5-cde0-2cbabeb1c40d.jpg",
        "created": "2020-01-29T01:40:53.042Z",
        "updated": "2020-01-29T01:40:53.042Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea20f6",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea20f8",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a567a18d8ee4ea20f7",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8c8a534a-3c60-ae28-068c-825ec6678459.jpg",
        "created": "2020-01-29T01:40:53.065Z",
        "updated": "2020-01-29T01:40:53.065Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea20f9",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea20fa",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/7406cd51-071a-ddea-0c24-887861e4c34a.jpg",
        "created": "2020-01-29T01:40:53.218Z",
        "updated": "2020-01-29T01:40:53.218Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea20fb",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea20fd",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a567a18d8ee4ea20fc",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/34a4844e-cbd4-4b98-f18b-d8649ede5abe.jpg",
        "created": "2020-01-29T01:40:53.240Z",
        "updated": "2020-01-29T01:40:53.240Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea20fe",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea20ff",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/cb7aa2fb-f14d-fbe1-cb71-516ad3efa250.jpg",
        "created": "2020-01-29T01:40:53.411Z",
        "updated": "2020-01-29T01:40:53.411Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea2100",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea2102",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a567a18d8ee4ea2101",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/99a861b3-4b92-66ed-dc8f-fe04ee1597a6.jpg",
        "created": "2020-01-29T01:40:53.436Z",
        "updated": "2020-01-29T01:40:53.436Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea2103",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea2104",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/7e05c12a-0c4b-3992-fbae-b25dd71e31db.jpg",
        "created": "2020-01-29T01:40:53.582Z",
        "updated": "2020-01-29T01:40:53.582Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea2105",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea2107",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a567a18d8ee4ea2106",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/a9d95956-4bc9-d1a8-76a5-01d9e569c946.jpg",
        "created": "2020-01-29T01:40:53.606Z",
        "updated": "2020-01-29T01:40:53.606Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea2108",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea2109",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/1fa00357-69fd-db03-2bcc-15f6546830bb.jpg",
        "created": "2020-01-29T01:40:53.761Z",
        "updated": "2020-01-29T01:40:53.761Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea210a",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea210c",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a567a18d8ee4ea210b",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e9130dff-8367-5290-67f1-6bce3c7897ec.jpg",
        "created": "2020-01-29T01:40:53.780Z",
        "updated": "2020-01-29T01:40:53.780Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea210d",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea210e",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f9bbfcba-cc78-bcec-e959-3473e168ad4e.jpg",
        "created": "2020-01-29T01:40:53.950Z",
        "updated": "2020-01-29T01:40:53.950Z",
        "__v": 0
    },
    {
        "_id": "5e30e2a567a18d8ee4ea210f",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2a567a18d8ee4ea2111",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2a567a18d8ee4ea2110",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f8e39c09-adee-84e4-939f-0ce94316cad4.jpg",
        "created": "2020-01-29T01:40:53.973Z",
        "updated": "2020-01-29T01:40:53.973Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ad67a18d8ee4ea2112",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ad67a18d8ee4ea2113",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/3f098be0-5287-2c84-2ccd-a5f93b3ccf73.jpg",
        "created": "2020-01-29T01:41:01.865Z",
        "updated": "2020-01-29T01:41:01.865Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ad67a18d8ee4ea2114",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ad67a18d8ee4ea2116",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2ad67a18d8ee4ea2115",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/db80c7ec-b8fd-a46d-7ec7-10e942abb6e3.jpg",
        "created": "2020-01-29T01:41:01.900Z",
        "updated": "2020-01-29T01:41:01.900Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea2117",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea2118",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/e67ca915-ed26-53a0-671a-c00e1c7a9ef7.jpg",
        "created": "2020-01-29T01:41:02.038Z",
        "updated": "2020-01-29T01:41:02.038Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea2119",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea211b",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2ae67a18d8ee4ea211a",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/76b10ec0-1bd5-6920-c0b2-4199297113fd.jpg",
        "created": "2020-01-29T01:41:02.064Z",
        "updated": "2020-01-29T01:41:02.064Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea211c",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea211d",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/8686db65-edea-a5b1-2ebf-0febad31b32f.jpg",
        "created": "2020-01-29T01:41:02.215Z",
        "updated": "2020-01-29T01:41:02.215Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea211e",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea2120",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2ae67a18d8ee4ea211f",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/96961cc8-1b27-1f1f-4151-eb39ccee3bc5.jpg",
        "created": "2020-01-29T01:41:02.238Z",
        "updated": "2020-01-29T01:41:02.238Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea2121",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea2122",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/fcf0f75a-9939-ade6-4fc0-e113b089b923.jpg",
        "created": "2020-01-29T01:41:02.407Z",
        "updated": "2020-01-29T01:41:02.407Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea2123",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea2125",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2ae67a18d8ee4ea2124",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/df70dfdf-2615-839b-de08-ceedece9819c.jpg",
        "created": "2020-01-29T01:41:02.434Z",
        "updated": "2020-01-29T01:41:02.434Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea2126",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea2127",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/da1d8810-eff9-3c16-b403-815ad951d1e5.jpg",
        "created": "2020-01-29T01:41:02.578Z",
        "updated": "2020-01-29T01:41:02.578Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea2128",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea212a",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2ae67a18d8ee4ea2129",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f2d5a7a8-fbe7-e046-8c9b-df8fd35cc26a.jpg",
        "created": "2020-01-29T01:41:02.602Z",
        "updated": "2020-01-29T01:41:02.602Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea212b",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea212c",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/f2221af1-83fd-fced-b759-65bff16ca1ea.jpg",
        "created": "2020-01-29T01:41:02.760Z",
        "updated": "2020-01-29T01:41:02.760Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea212d",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea212f",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2ae67a18d8ee4ea212e",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d9026755-020f-f4dc-9e51-5a6ad166e234.jpg",
        "created": "2020-01-29T01:41:02.784Z",
        "updated": "2020-01-29T01:41:02.784Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea2130",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea2131",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/d34ff571-8399-1037-d740-ba2ebb562231.jpg",
        "created": "2020-01-29T01:41:02.936Z",
        "updated": "2020-01-29T01:41:02.936Z",
        "__v": 0
    },
    {
        "_id": "5e30e2ae67a18d8ee4ea2132",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2ae67a18d8ee4ea2134",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2ae67a18d8ee4ea2133",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/dca9f13e-a53b-f88e-be8d-057bb5873e88.jpg",
        "created": "2020-01-29T01:41:02.960Z",
        "updated": "2020-01-29T01:41:02.960Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea2135",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea2136",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/0b83d678-6134-808c-0167-9df0780829cb.jpg",
        "created": "2020-01-29T01:41:03.113Z",
        "updated": "2020-01-29T01:41:03.113Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea2137",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea2139",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2af67a18d8ee4ea2138",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/3f969cec-7fb0-6ffd-f6a2-771f71de53e3.jpg",
        "created": "2020-01-29T01:41:03.137Z",
        "updated": "2020-01-29T01:41:03.137Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea213a",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea213b",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/907af98d-474f-aeb0-875d-b85b12d0cada.jpg",
        "created": "2020-01-29T01:41:03.295Z",
        "updated": "2020-01-29T01:41:03.295Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea213c",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea213e",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2af67a18d8ee4ea213d",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/42c38b0e-8db5-0ecb-9a1f-a119a80fd3ef.jpg",
        "created": "2020-01-29T01:41:03.318Z",
        "updated": "2020-01-29T01:41:03.318Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea213f",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea2140",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/19b6019b-3f03-aefc-362a-e6522d539929.jpg",
        "created": "2020-01-29T01:41:03.473Z",
        "updated": "2020-01-29T01:41:03.473Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea2141",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea2143",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2af67a18d8ee4ea2142",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/46993a13-0bda-f1fc-ba16-8a4ade7d1560.jpg",
        "created": "2020-01-29T01:41:03.494Z",
        "updated": "2020-01-29T01:41:03.494Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea2144",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea2145",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/52c93a55-01bb-1695-d9e6-09625f45b971.jpg",
        "created": "2020-01-29T01:41:03.648Z",
        "updated": "2020-01-29T01:41:03.648Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea2146",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea2148",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2af67a18d8ee4ea2147",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/c6b93173-8f88-ee41-2759-dcc5ed0d14c9.jpg",
        "created": "2020-01-29T01:41:03.671Z",
        "updated": "2020-01-29T01:41:03.671Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea2149",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea214a",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6bc9efa3-2982-063b-7da6-01e0ee18e967.jpg",
        "created": "2020-01-29T01:41:03.829Z",
        "updated": "2020-01-29T01:41:03.829Z",
        "__v": 0
    },
    {
        "_id": "5e30e2af67a18d8ee4ea214b",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e2af67a18d8ee4ea214d",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e2af67a18d8ee4ea214c",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/1cc8edb4-9f9f-ddce-bc95-c67d94f09bc9.jpg",
        "created": "2020-01-29T01:41:03.852Z",
        "updated": "2020-01-29T01:41:03.852Z",
        "__v": 0
    },
    {
        "_id": "5e30e3b167a18d8ee4ea214e",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e3b167a18d8ee4ea214f",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/1808c9a4-e2c6-c465-debf-cc4ce6b24849.jpg",
        "created": "2020-01-29T01:45:21.106Z",
        "updated": "2020-01-29T01:45:21.106Z",
        "__v": 0
    },
    {
        "_id": "5e30e3b167a18d8ee4ea2150",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e3b167a18d8ee4ea2152",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e3b167a18d8ee4ea2151",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/de469f91-e764-7df9-2340-205767e1c9cf.jpg",
        "created": "2020-01-29T01:45:21.155Z",
        "updated": "2020-01-29T01:45:21.155Z",
        "__v": 0
    },
    {
        "_id": "5e30e3e267a18d8ee4ea2153",
        "cnpj": "27.660.128/0001-38",
        "nome": "Teste teste",
        "endereco": "Rua teste, 2",
        "horarioFuncionamento": [
            {
                "_id": "5e30e3e267a18d8ee4ea2154",
                "diaSemana": "Segunda",
                "horarioAberto": "18:15",
                "horarioFechado": "18:29"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/22b7024a-9155-c9a7-93ee-52b39e9f2204.jpg",
        "created": "2020-01-29T01:46:10.909Z",
        "updated": "2020-01-29T01:46:10.909Z",
        "__v": 0
    },
    {
        "_id": "5e30e3e267a18d8ee4ea2155",
        "cnpj": "85650128000158",
        "nome": "Restaurante X",
        "endereco": "Rua restaurante, 15",
        "horarioFuncionamento": [
            {
                "_id": "5e30e3e267a18d8ee4ea2157",
                "diaSemana": "Terça",
                "horarioAberto": "18:15",
                "horarioFechado": "18:30"
            },
            {
                "_id": "5e30e3e267a18d8ee4ea2156",
                "diaSemana": "Quarta",
                "horarioAberto": "18:15",
                "horarioFechado": "21:30"
            }
        ],
        "fotoRestaurante": "https://nodestoreteste.blob.core.windows.net/restaurant-images/6581b9b2-8166-3008-696c-a8975663f3c1.jpg",
        "created": "2020-01-29T01:46:10.946Z",
        "updated": "2020-01-29T01:46:10.946Z",
        "__v": 0
    }
]```
