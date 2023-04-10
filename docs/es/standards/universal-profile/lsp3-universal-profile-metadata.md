---
sidebar_label: 'LSP3 - Metadatos de Perfil Universal'
sidebar_position: 4
---

# LSP3 - Metadatos de Perfil Universal

:::info Documento Estándard

[LSP3 - Metadatos de Perfil Universal](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md)

:::

## Introducción

La implementación del estándar **[LSP0-CuentaERC725](./lsp0-erc725account.md)** no contiene metadatos que describan la cuenta.

**LSP3-Metadatos-PerfilUniversal** es un estándar de metadatos que define claves de datos específicas para describir un Perfil Universal. Un Perfil Universal combina los dos estándares siguientes.

- **[LSP0-CuentaERC725](./lsp0-erc725account.md)**: una interfaz para una cuenta basada en un contrato inteligente.
- **LSP3-Metadatos-PerfilUniversal**: un conjunto de claves de datos predefinidas [ERC725Y](lsp0-erc725account.md#erc725y---generic-key-value-store) para describir el perfil.

## Claves de datos ERC725Y

:::tip Recomendación

Asegúrate de comprender las normas **[ERC725Y Almacenamiento Genérico de Claves/Valores](../lsp-background/erc725.md#erc725y---generic-data-keyvalue-store)** y **[LSP2 - EsquemaJSONERC725Y](../generic-standards/lsp2-json-schema.md)** antes de revisar las Claves de Datos ERC725Y.

:::

### `SupportedStandards:LSP3UniversalProfile`

```json
{
  "name": "SupportedStandards:LSP3UniversalProfile",
  "key": "0xeafec4d89fa9619884b60000abe425d64acd861a49b8ddf5c0b6962110481f38",
  "keyType": "Mapping",
  "valueType": "bytes4",
  "valueContent": "0xabe425d6"
}
```

Esta clave de datos se utiliza para saber si el contrato representa un **Perfil Universal**.

### `LSP3Profile`

```json
{
  "name": "LSP3Profile",
  "key": "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",
  "keyType": "Singleton",
  "valueType": "bytes",
  "valueContent": "JSONURL"
}
```

El valor adjunto a esta clave de datos es un [valor cifrado JSONURL](../../standards/generic-standards/lsp2-json-schema.md). Este valor representa una referencia a un [archivo JSON que describe los MetaDatos del Perfil Universal](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp3profile). Este archivo puede almacenarse de forma centralizada o descentralizada.

Dentro del archivo JSON, las claves `profileImage` y `backgroundImage` pueden aceptar un conjunto de imágenes, definiendo una imagen con diferentes dimensiones, `width` y `height`. Ajustar la escala de la imagen es útil para que las interfaces de cliente descarguen y muestren las imágenes con las dimensiones más adecuadas en lugar de reescalarlas después.

<details>
<summary>Ejemplo de archivo JSON vinculado a la clave de datos<code>LSP3Profile</code>. </summary>

```json
{
  "LSP3Profile": {
    "name": "frozeman",
    "description": "El inventor del ERC725 y el ERC20...",
    "links": [
      { "title": "Twitter", "url": "https://twitter.com/feindura" },
      { "title": "lukso.network", "url": "https://lukso.network" }
    ],
    "tags": ["brand", "public profile"],
    "avatar": [
      {
        "hashFunction": "keccak256(bytes)",
        "hash": "0x98fe032f81c43426fbcfb21c780c879667a08e2a65e8ae38027d4d61cdfe6f55",
        "url": "ifps://QmPJESHbVkPtSaHntNVY5F6JDLW8v69M2d6khXEYGUMn7N",
        "fileType": "fbx"
      }
    ],
    "profileImage": [
      {
        "address": 0x1231c7436a77a009a97e48e4e10c92e89fd95fe15, // la dirección de un LSP7 o un LSP8
        "tokenId": 0xdde1c7436a77a009a97e48e4e10c92e89fd95fe1556fc5c62ecef57cea51aa37 // (opcional) si el contrato de token es un LSP7
      }
    ],
    "backgroundImage": [
      {
        "width": 1800,
        "height": 1013,
        "hashFunction": "keccak256(bytes)",
        "hash": "0x98fe032f81c43426fbcfb21c780c879667a08e2a65e8ae38027d4d61cdfe6f55",
        "url": "ifps://QmPJESHbVkPtSaHntNVY5F6JDLW8v69M2d6khXEYGUMn7N"
      },
      {
        "width": 1024,
        "height": 576,
        "hashFunction": "keccak256(bytes)",
        "hash": "0xfce1c7436a77a009a97e48e4e10c92e89fd95fe1556fc5c62ecef57cea51aa37",
        "url": "ifps://QmZc9uMJxyUeUpuowJ7AD6MKoNTaWdVNcBj72iisRyM9Su"
      }
    ]
  }
}
```

</details>

### `LSP12IssuedAssets`

**Los Perfiles Universales** pueden crear activos digitales, como [tokens y NFTs](../nft-2.0/introduction.md). Todos los activos (tokens y NFTs) creados deben registrarse en el conjunto `LSP12IssuedAssets[]`.

El `LSP12IssuedAssetsMap:<address>` puede utilizarse para conocer el tipo de activo (_por ejemplo, un [token LSP7](../nft-2.0/LSP7-Digital-Asset.md) o un [LSP8 NFT](../nft-2.0/LSP8-Identifiable-Digital-Asset.md)_) extrayendo el identificador de interfaz ERC165 `bytes4` del contrato del activo. Los desarrolladores pueden extraer este valor `bytes4` del valor recuperado, los primeros 4bytes.

```json
{
  "name": "LSP12IssuedAssets[]",
  "key": "0x7c8c3416d6cda87cd42c71ea1843df28ac4850354f988d55ee2eaa47b6dc05cd",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```

```json
{
  "name": "LSP12IssuedAssetsMap:<address>",
  "key": "0x74ac2555c10b9349e78f0000<address>",
  "keyType": "Mapping",
  "valueType": "(bytes4,bytes8)",
  "valueContent": "(Bytes4,Number)"
}
```

### `LSP5ReceivedAssets`

:::info

Consulta la página del estándar [LSP5 - Activos recibidos](./lsp5-received-assets.md) para obtener más información.

:::

```json
{
  "name": "LSP5ReceivedAssets[]",
  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```

Si se utiliza el Perfil Universal con el **[LSP6-GestordeClaves](./lsp6-key-manager.md)** y **[LSP1-ReceptorDelegado Universal](../generic-standards/lsp1-universal-receiver-delegate.md)**, los activos recibidos se registrarán automáticamente en el almacén. Para saber cuántos activos diferentes tienes, puedes consultar esta clave de datos.
