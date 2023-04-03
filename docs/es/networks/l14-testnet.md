---
sidebar_position: 4
---

# L14 Red pública de pruebas

:::success L14-Testnet está en funcionamiento.
Esta red de pruebas es la última red estable.
:::
La [Red Pública de Pruebas L14](http://explorer.l14.lukso.network/) es la red de pruebas POA pronto obsoleta, actualmente utilizada para todos los UniversalProfiles y NFTs emitidos (Pre). La red L14 está actualizada con las últimas bifurcaciones de Ethereum hasta Constantinopla.

## MetaMask

Para añadir la red L14 a MetaMask, estos son los parámetros:

| Parámetro                     | Valor                            |
| ----------------------------- | -------------------------------- |
| Nombre de la red              | L14                              |
| Nueva URL de RPC              | https://rpc.l14.lukso.network    |
| ID de cadena                  | 22 (0x16)                        |
| Símbolo de la moneda          | LYXt                             |
| URL del Explorador de Bloques | https://blockscout.com/lukso/l14 |

Y si lo necesitas, [aquí tienes un tutorial sobre cómo hacerlo](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC).

## Ejecutar un Nodo

### Instalar el Nodo

Instala un nodo de paridad `> 2.2.7-stable` como [se describe aquí](https://openethereum.github.io/Setup.html).

La red de prueba LUKSO L14 requiere la mayoría de las [transiciones de Constantinopla](https://blog.ethereum.org/2019/02/22/ethereum-constantinople-st-petersburg-upgrade-announcement/). Esto significa que necesita al menos ejecutar paridad > 2.2.7-stable.

### Iniciar el Nodo

Ejecuta tu nodo de paridad y conéctate a la red de prueba LUKSO L14 usando:

```bash
$ parity --chain spec.json --bootnodes enode://6a6b0b286e3f96dee993d995f3fd435a065388664e211f02533e28c9ddc31089eb90f71d1386c3c74ee60f79df86cacdb10992c38e2f9cccac4881cb84526415@35.195.116.26:30303
```

El [spec.json](https://github.com/lukso-network/lukso-chain-spec/blob/l14/spec.json) está en la rama [l14](https://github.com/lukso-network/lukso-chain-spec/tree/l14) del repositorio `lukso-chain-spec`.

En caso de que el nodo de arranque de arriba no funcione, puedes encontrar las especificaciones actuales [aquí](https://github.com/lukso-network/lukso-chain-spec/blob/l14/bootnodes.txt).

## Enlaces

- Punto final RPC: <https://rpc.l14.lukso.network>
- Explorador: <https://blockscout.com/lukso/l14>
- Grifo: <http://faucet.l14.lukso.network>

## Repositorios

- <https://github.com/lukso-network/l14-deploy-node-gcloud>
- <https://github.com/lukso-network/l14-chain-spec>
- <https://github.com/lukso-network/l14-dapps-validators>

## Características

Los EiPs habilitados son:

- [eip140](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-140.md)
- [eip145](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-145.md)
- [eip211](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-211.md)
- [eip214](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-214.md)
- [eip658](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-658.md)
- [eip1014](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1014.md)
- [eip1052](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1052.md)
- [eip1283](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1283.md)

No incluido en comparación con la mainnet de Ethereum:

- [eip1234](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1234.md) (Ajuste de la bomba de dificultad)

## Recursos

- https://medium.com/lukso/announcing-the-l14-test-network-38d7c622c6cb
- https://github.com/lukso-network/l14-deploy-node-gcloud
