---
title: 🆙 API RPC
sidebar_position: 10
---

# 🆙 API RPC

:::dangerProyecto en desarrollo

Esta página se encuentra en fase de desarrollo.

:::

La [Extensión LUKSO](../guides/browser-extension/install-browser-extension.md) utiliza nuevos RPC API que se describen aquí.

## Métodos

### up_addTransactionRelayer

Agregar un retransmisor personalizado.

#### Parámetros

##### 1. `relayer` - Objeto

Objeto que contiene las propiedades del nuevo retransmisor. Para obtener más información sobre los retransmisores personalizados, puede leer la [API del Servicio de Retransmisión de Transacciones](./relayer-api.md).

| Nombre     | Tipo     | Descripción                      |
| :--------- | :------- | :------------------------------- |
| `name`     | Cadena   | El nombre del retransmisor.      |
| `apiUrl`   | Cadena   | La URL de la API base.           |
| `chainIds` | Conjunto | Conjunto de cadenas (hex) o int. |

```js
params: [
  {
    name: 'My Retransmisor',
    apiUrl: 'https://relayer.l16.staging.lukso.dev/api/v1/',
    chainIds: [2828],
  },
];
```

#### Devuelve

##### 1. `String Array` - Conjunto de direcciones de perfil universal que el usuario seleccionó para este servicio de retransmisión.

Devuelve el conjunto de direcciones de Perfiles Universales.

### up_import

Agregar una dirección de Perfil Universal.

#### Parámetros

##### 1. `String` - Dirección de perfil universal a añadir a la extensión

La dirección de Perfil Universal a añadir.

```js
params: ['0x311611C9A46a192C14Ea993159a0498EDE5578aC'];
```

#### Devuelve

##### 1. `String` - Nueva dirección del controlador, que será añadida al perfil por la dapp.

POR HACER
