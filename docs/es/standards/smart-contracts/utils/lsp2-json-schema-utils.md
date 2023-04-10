---
title: LSP2Utils
sidebar_position: 1
---

# LSP2UtilsEsquemaJSON

:::info

[`LSP2Utils.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP2ERC725YJSONSchema/LSP2Utils.sol)

:::

Esta librería puede utilizarse para generar claves de datos ERC725Y de acuerdo con los esquemas JSON definidos en el estándar LSP2.

## Funciones

### generateSingletonKey

```solidity
function generateSingletonKey(
    string memory keyName
) internal pure returns (bytes32);
```

Genera una clave de datos de `keyType` Singleton.

#### Parámetros:

| Nombre    |  Tipo  | Descripción                                                 |
| :-------- | :----- | :---------------------------------------------------------- |
| `keyName` | string | La cadena a hash para generar una clave de datos Singleton. |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                                   |
| :------- | :------ | :-------------------------------------------- |
| `result` | bytes32 | Clave de datos del mapeo `keyType` Singleton. |

### generateArrayKey

```solidity
function generateArrayKey(
    string memory keyName
) internal pure returns (bytes32);
```

Genera una clave de datos del mapeo `keyType` mediante el hash `keyName`.

##### Requisitos:

- Los dos últimos caracteres DEBEN ser `[]`.

Ej:

```solidity
string memory keyName = "ArrayName[]";
```

#### Parámetros:

| Nombre    | Tipo   | Descripción                                                                   |
| :-------- | :----- | :---------------------------------------------------------------------------- |
| `keyName` | string | La cadena que se utilizará para generar una clave de datos de `keyType` Array |

#### Valores Devueltos:

| Nombre    | Tipo   | Descripción                         |
| :------- | :------ | :---------------------------------- |
| `result` | bytes32 | Clave de datos del array `keyType`. |

### generateArrayElementKeyAtIndex

```solidity
function generateArrayElementKeyAtIndex(
    bytes32 arrayKey,
    uint256 index
) internal pure returns (bytes32);
```

Genera la clave de datos del elemento `arrayKey` en el `index` dado. Esto se hace concatenando los primeros 16 bytes de `arrayKey` con un `index`.

#### Parámetros:

| Nombre     | Tipo    | Descripción                      |
| :--------- | :------ | :------------------------------- |
| `arrayKey` | bytes32 | Clave de datos del array.        |
| `index`    | uint256 | Índice del elemento en el array. |

#### Valores Devueltos:

| Nombre    | Tipo   | Descripción                              |
| :------- | :------ | :--------------------------------------- |
| `result` | bytes32 | Clave de datos del elemento en el array. |

### generateMappingKey(string,srting)

```solidity
function generateMappingKey(
    string memory firstWord,
    string memory lastWord
) internal pure returns (bytes32);
```

Genera una clave de datos del mapeo `keyType` concatenando el hash de la `firstWord` con el hash de la `secondWord`.

#### Parámetros:

| Nombre      | Tipo   | Descripción                                                                                                                         |
| :---------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `firstWord` | string | Se utiliza para generar un hash y sus 10 primeros bytes se utilizan para la primera parte de la clave de datos del mapeo `keyType`. |
| `lastWord`  | string | Se utiliza para generar un hash y sus primeros 20 bytes se utilizan para la última parte de la clave de datos del mapeo `keyType`.  |

#### Valores Devueltos:

| Nombre    | Tipo   | Descripción                         |
| :------- | :------ | :---------------------------------- |
| `result` | bytes32 | Clave de datos del mapeo `keyType`. |

### generateMappingKey(string,address)

```solidity
function generateMappingKey(
    string memory firstWord,
    address addr
) internal pure returns (bytes32);
```

Genera una clave de datos del mapeo `keyType` mediante el hash de una cadena y su concatenación con una dirección.

#### Parámetros:

| Nombre      | Tipo    | Descripción                                                                                                                         |
| :---------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| `firstWord` | string  | Se utiliza para generar un hash y sus 10 primeros bytes se utilizan para la primera parte de la clave de datos del mapeo `keyType`. |
| `addr`      | address | Se utiliza para la última parte de la clave de datos del mapeo `keyType`.                                                           |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                         |
| :------- | :------ | :---------------------------------- |
| `result` | bytes32 | Clave de datos del mapeo `keyType`. |

### generateMappingKey(bytes10,bytes20)

```solidity
function generateMappingKey(
    bytes10 keyPrefix,
    bytes20 bytes20Value
) internal pure returns (bytes32);
```

Genera una clave de datos del mapeo `keyType` concatenando `keyPrefix` con `bytes20Value`.

#### Parámetros:

| Nombre         | Tipo    | Descripción                                             |
| :------------- | :------ | :------------------------------------------------------ |
| `keyPrefix`    | bytes10 | Primera parte de la clave de datos del mapeo `keyType`. |
| `bytes20Value` | bytes20 | Segunda parte de la clave de datos del mapeo `keyType`. |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                         |
| :------- | :------ | :---------------------------------- |
| `result` | bytes32 | Clave de datos del mapeo `keyType`. |

### generateMappingWithGroupingKey(string,string,address)

```solidity
function generateMappingWithGroupingKey(
    string memory firstWord,
    string memory secondWord,
    address addr
) internal pure returns (bytes32);
```

Genera una clave de datos de `keyType` MappingWithGrouping concatenando el hash de la `firstWord`, el hash de la `secondWord` y una dirección.

#### Parámetros:

| Nombre       | Tipo    | Descripción                                                                                                                                     |
| :----------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `firstWord`  | string  | Se utiliza para generar un hash y sus 6 primeros bytes se utilizan para la primera parte de la clave de datos de `keyType` MappingWithGrouping. |
| `secondWord` | string  | Se utiliza para generar un hash y sus 4 primeros bytes se utilizan para la segunda parte de la clave de datos de `keyType` MappingWithGrouping. |
| `addr`       | address | Se utiliza para la última parte de la clave de datos de `keyType` MappingWithGrouping.                                                          |

#### Valores Devueltos:

| Nombre    | Tipo   | Descripción                               |
| :------- | :------ | :----------------------------------------- |
| `result` | bytes32 | Clave de datos de `keyType` MappingWithGrouping. |

### generateMappingWithGroupingKey(bytes10,bytes20)

```solidity
function generateMappingWithGroupingKey(
    bytes10 keyPrefix,
    bytes20 bytes20Value
) internal pure returns (bytes32);
```

Genera una clave de datos de `keyType` MappingWithGrouping concatenando `keyPrefix` con `bytes20Value`.

#### Parámetros:

| Nombre         | Tipo    | Descripción                                                                             |
| :------------- | :------ | :-------------------------------------------------------------------------------------- |
| `keyPrefix`    | bytes10 | Se utiliza para la primera parte de la clave de datos de `keyType` MappingWithGrouping. |
| `bytes20Value` | bytes20 | Se utiliza para la última parte de la clave de datos de `keyType` MappingWithGrouping.  |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                                      |
| :------- | :------ | :----------------------------------------------- |
| `result` | bytes32 | Clave de datos de `keyType` MappingWithGrouping. |

### generateJSONURLValue

```solidity
function generateJSONURLValue(
    string memory hashFunction,
    string memory json,
    string memory url
) internal pure returns (bytes memory key);
```

Generar un JSONURL valueContent.

#### Parámetros:

| Nombre         | Tipo   | Descripción                                            |
| :------------- | :----- | :----------------------------------------------------- |
| `hashFunction` | string | La función utilizada para hacer hash del archivo JSON. |
| `json`         | string | Valor en bytes del archivo JSON.                       |
| `url`          | string | La URL donde se aloja el archivo JSON.                 |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción     |
| :------- | :------ | :-------------- |
| `result` | bytes32 | Valor URL JSON. |

### generateASSETURLValue

```solidity
function generateASSETURLValue(
    string memory hashFunction,
    string memory assetBytes,
    string memory url
) internal pure returns (bytes memory key);
```

Generar un ASSETURL valueContent.

#### Parámetros:

| Nombre         | Tipo   | Descripción                                            |
| :------------- | :----- | :----------------------------------------------------- |
| `hashFunction` | string | La función utilizada para hacer hash del archivo JSON. |
| `assetBytes`   | string | Valor en bytes del archivo JSON.                       |
| `url`          | string | La URL donde se aloja el archivo JSON.                 |

#### Valores Devueltos:

| Nombre    | Tipo   | Descripción               |
| :------- | :------ | :------------------------ |
| `result` | bytes32 | Valor de la URL de ASSET. |

### isEncodedArray

```solidity
function isEncodedArray(
    bytes memory data
) internal pure returns (bool);
```

Comprobar si `data` es un conjunto codificado

#### Parámetros:

| Nombre | Tipo  | Descripción                   |
| :----- | :---- | :---------------------------- |
| `data` | bytes | El valor que debe verificarse.|

### isEncodedArrayOfAddresses

```solidity
function isEncodedArrayOfAddresses(
    bytes memory data
) internal pure returns (bool);
```

Comprobación de si `data` es un conjunto codificado de direcciones (address[])

#### Parámetros:

| Nombre | Tipo  | Descripción                    |
| :----- | :---- | :----------------------------- |
| `data` | bytes | El valor que debe verificarse. |

### isBytes4EncodedArray

```solidity
function isBytes4EncodedArray(
    bytes memory data
) internal pure returns (bool);
```

Comprueba que `data` es un conjunto de bytes4 (bytes4[]) codificado según las especificaciones ABI de Solidity.

#### Parámetros:

| Nombre | Tipo  | Descripción                    |
| :----- | :---- | :----------------------------- |
| `data` | bytes | El valor que debe verificarse. |

### isCompactBytesArray

```solidity
function isCompactBytesArray(
    bytes memory compactBytesArray
) internal pure returns (bool);
```

Verificar la validez del `compactBytesArray` según LSP2.

#### Parámetros:

| Nombre              | Tipo  | Descripción                    |
| :------------------ | :---- | :----------------------------- |
| `compactBytesArray` | bytes | El valor que debe verificarse. |

### uncheckedIncrement

```solidity
uncheckedIncrement(
    uint256 i
) internal pure returns (uint256);
```

Devolverá uint256 incrementado sin marcar.
Puede usarse para ahorrar gas al iterar sobre bucles.

## Referencias

- [Implementaciones de Solidity (GitHub)](https://github.com/lukso-network/lsp-smart-contracts/tree/develop/contracts)
