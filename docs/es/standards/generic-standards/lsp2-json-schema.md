---
sidebar_label: 'LSP2 - Esquema JSON ERC725Y'
sidebar_position: 3
---

# LSP2 - Esquema JSON ERC725Y

:::info Documento Estándard

[LSP2 - Esquema JSON ERC725Y](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md)

:::

:::success Sugerencia

Our [JavaScript library **erc725.js**](../../tools/erc725js/getting-started.md) makes it easy to read + write data encoded according to the LSP2 Schema without manually going through all the encoding complexity.

:::

## Introducción

El almacenamiento de un contrato inteligente consiste en múltiples **ranuras de almacenamiento**. Estas ranuras están referenciadas por un **número de ranura** (como un **entero**) empezando por la ranura 0. Cada pieza de datos (= estado del contrato) en un contrato inteligente se almacena como **bytes en bruto** en una ranura de almacenamiento específica.

> En resumen, los contratos inteligentes sólo entienden dos lenguajes: bytes y uint256.
> Tomemos el siguiente par clave-valor, por ejemplo. No es fácil inferir el significado de estas claves de datos leyéndolas como **bytes**.

```
(clave)                                                              => (valor)
0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1 => 0x4d7920546f6b656e20322e30
```

El uso de **números de ranura** y **bytes crudos** hace que el almacenamiento de contratos sea muy difícil de manejar. [ERC725Y](../universal-profile/lsp0-erc725account.md#erc725y---generic-key-value-store) resuelve parte del problema mediante una disposición de almacenamiento más flexible, en la que los datos se direccionan mediante claves `bytes32`. Sin embargo, con lenguajes de tan bajo nivel, es difícil para los humanos entender los datos del almacenamiento.

El principal problema en torno al almacenamiento de contratos inteligentes también surge cuando los datos se almacenan de forma diferente, dependiendo de los casos de uso individuales y de las necesidades de la aplicación. Ningún esquema estándar define "qué representan los datos almacenados bajo una clave de datos específica".

Estos dos problemas hacen que sea muy difícil para los contratos inteligentes interactuar entre sí y para los servicios externos interactuar con el almacenamiento de los contratos.

## ¿Qué representa este estándar?

### Especificación

El estándar LSP2 pretende ofrecer una mejor abstracción sobre el almacenamiento de un contrato inteligente.

Este estándar introduce un esquema JSON que permite representar el almacenamiento de un contrato inteligente a través de claves de datos más comprensibles. Hace que los datos almacenados en un contrato inteligente estén mejor organizados.

![Universal Profile + ERC725Y JSON schema (diagram)](/img/standards/lsp2/ERC725Y-JSON-Schema-explained.jpeg)

Al introducir un esquema, podemos representar el almacenamiento de contratos de la misma forma en todos los contratos de la red. Todo el mundo tiene una visión unificada de los datos almacenados entre los contratos inteligentes. Los desarrolladores pueden analizar rápidamente los datos, y los contratos o interfaces pueden leer o escribir datos desde o hacia el almacenamiento de contratos de la misma manera. La estandarización hace que los contratos inteligentes sean **más interoperables entre sí**.

### ¿Cómo funciona LSP2?

LSP2 introduce nuevas formas de cifrar datos, dependiendo de su tipo. Desde una única entrada hasta múltiples entradas (como arrays o mapas).

Una clave de datos en el almacenamiento de contratos puede definirse como un objeto JSON con propiedades que describen la clave.

```json
{
  "name": "LSP4TokenName",
  "key": "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1",
  "keyType": "Singleton",
  "valueType": "string",
  "valueContent": "String"
}
```

## Tipos de Clave de Datos

Un tipo de clave de datos define **CÓMO** se construye una clave de datos de 32 bytes, representando cómo se describe un tipo de clave de datos particular en 32 bytes. Por ejemplo, las claves de datos `Singleton` son simples hashes keccak256 de la cadena de nombre de la clave. Otros tipos de claves de datos se construyen a partir de trozos de hashes para agrupar diferentes partes del nombre de la clave o definir claves de elementos de array.

El Estándar LSP2 define varios **tipos de claves de datos**:

- [Singleton](#singleton)
- [Array](#array)
- [Mapping](#mapping)
- [MappingWithGrouping](#mappingconagrupación)

### Singleton

Una clave de datos **Singleton** es útil para almacenar un único valor bajo una única clave de datos.

A continuación se muestra un ejemplo de una clave de datos **Singleton**.

```json
{
  "name": "LSP4TokenName",
  "key": "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1",
  "keyType": "Singleton",
  "valueType": "string",
  "valueContent": "String"
}
```

![LSP2 Singleton key type](/img/standards/lsp2/lsp2-key-type-singleton.jpeg)

### Array

Los desarrolladores pueden utilizar una clave de datos de tipo Array para almacenar un conjunto de elementos del mismo tipo de datos. Se accede a ellos mediante un _índice_ que define su posición dentro del mismo.

Los elementos del conjunto se ordenan sistemáticamente, en el orden en que se añaden o eliminan de él.

Las **principales propiedades** del tipo de clave de datos Array de LSP2 son:

- _el orden importa_ :exclamación:
- _se permiten duplicados_ :white_check_mark:

Un tipo de clave de datos Array puede ser útil cuando existe la necesidad de almacenar un gran grupo de elementos de datos similares bajo la misma clave de datos. Por ejemplo, una lista de tokens o NFTs que ha recibido una dirección. A continuación se muestra un ejemplo de una clave de datos Array:

```json
{
  "name": "LSP5ReceivedAssets[]",
  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```

![LSP2 Array key type (length check)](/img/standards/lsp2/lsp2-key-type-array-length-check.jpeg)

---

![LSP2 Array key type (index access)](/img/standards/lsp2/lsp2-key-type-array-index-access.jpeg)

### Mapping

El tipo de clave de datos Mapping es similar al concepto de tablas de consulta. Puede utilizarse para asignar datos que tienen un significado compartido (como elementos derivados de un antepasado común), y buscar o consultar elementos específicos de forma eficaz.

Las **principales propiedades** del tipo de clave de datos LSP2 Mapping son:

- _el orden no importa_ :white_check_mark:
- _no se permiten duplicados_ :x:

Los datos a mapear pueden ser palabras que tengan un significado específico para el protocolo o la implementación de la aplicación, o tipos de datos subyacentes (= `<mixed type>`) como `address`, `bytesN`, `uintN`, etc. Para `<mixed type>`, todos los tipos de datos se rellenan a la izquierda. Si el tipo es superior a 20 bytes, la segunda parte de la clave se

- corte a la izquierda para `uint<M>`, `int<M>` y `bool`.
- corte a la derecha para `bytes<M>` y `address`.

A continuación se muestran algunos ejemplos del tipo de clave **Mapping**.

- mapping a **palabras:** `SupportedStandards:LSP3UniversalProfile`, `SupportedStandards:LSP4DigitalAsset`, `SupportedStandards:LSP{N}{StandardName}`, etc...
- mapping a **`<tipo mixto>`**, como una `dirección`: `LSP5ReceivedAssetsMap:<dirección>`.
- mapping a **`<tipo mixto>`**, como un `bytes32`: `LSP8MetadataAddress:<bytes32>`

#### Ejemplo 1: Asignación como `primeraPalabra:segundaPalabra`.

```json
{
  "name": "SupportedStandards:LSP3UniversalProfile",
  "key": "0xeafec4d89fa9619884b60000abe425d64acd861a49b8ddf5c0b6962110481f38",
  "keyType": "Mapping",
  "valueType": "bytes4",
  "valueContent": "0xabe425d6"
}
```

![LSP2 Mapping key type to word](/img/standards/lsp2/lsp2-key-type-mapping-to-word.jpeg)

#### Ejemplo 2: Mapping como `primeraPalabra:<address>` (`<mixed type>`)

`address` valor = `0xcafecafecafecafecafecafecafecafecafecafe`

```json
{
  "name": "LSP5ReceivedAssetsMap:<address>",
  "key": "0x812c4334633eb816c80d0000cafecafecafecafecafecafecafecafecafecafe",
  "keyType": "Mapping",
  "valueType": "(bytes4,bytes8)",
  "valueContent": "(Bytes4,Number)"
}
```

![LSP2 Mapping key type to address](/img/standards/lsp2/lsp2-key-type-mapping-to-address.jpeg)

#### Ejemplo 3: Mapping como `primeraPalabra:<bytes32>` (`<mixed type>`)

`bytes32` valor = `0xaaaabbbbccccddddeeeeffff111122223333444455556666777788889999aaaa`.

El valor `bytes32` se **corta a la derecha**.

```json
{
  "name": "LSP8MetadataAddress:<bytes32>",
  "key": "0x73dcc7c3c4096cdc7f8a0000aaaabbbbccccddddeeeeffff1111222233334444",
  "keyType": "Mapping",
  "valueType": "Mixed",
  "valueContent": "Mixed"
}
```

![LSP2 Mapping key type to bytes32](/img/standards/lsp2/lsp2-key-type-mapping-to-bytes32.jpeg)

### MappingWithGrouping

:::warning

`<HashprimeraPalabra>:<HashsegundaPalabra>:<bytes2(0)>:<HashterceraPalabra>`

Debes tener en cuenta que si eliges el mismo valor de hash para `primeraPalabra` y `terceraPalabra` hay un 0.0000000233% de posibilidades de que dos valores aleatorios para la `segundaPalabra` den como resultado la misma clave de datos.

:::

Una clave de datos de tipo **MappingWithGrouping** es similar al tipo de clave de datos **[Mapping](#mapping)**, excepto que se pueden añadir subtipos a la clave de datos de mapeo principal.

Por ejemplo, puede utilizarse para diferenciar varios tipos de la clave de datos de asignación principal, como diferentes tipos de permisos (véase [LSP6 - Gestor de Claves](../universal-profile/lsp6-key-manager.md)).

A continuación se muestra un ejemplo de una clave de datos MappingWithGrouping:

```json
{
    "name": "AddressPermissions:Permissions:<address>",
    "key": "0x4b80742de2bf82acb3630000<address>",
    "keyType": "MappingWithGrouping",
    "valueType": "bytes32",
    "valueContent": "BitArray"
},
```

![LSP2 mappingWithGrouping key type](/img/standards/lsp2/lsp2-key-type-mapping-with-grouping.jpeg)

<details>
    <summary>Ejemlpo de Solidity</summary>

Siempre que quieras generar una clave de datos de `keyType` **MappingWithGrouping**:

```solidity
bytes32 dataKey = bytes32(
    bytes.concat(
        bytes6(keccak256(bytes(firstWord))),
        bytes4(keccak256(bytes(secondWord))),
        bytes2(0),
        bytes20(keccak256(bytes(thirdWord)))
    )
);
```

</details>
