---
sidebar_position: 3
title: Opciones
---

# Objeto de Opciones de Contrato

Al desplegar un Perfil Universal o un Activo Digital, cada contrato inteligente puede configurarse individualmente pasando un objeto de configuración de contrato al parámetro options de la función `deploy`.

## Parámetros

| Nombre                                                | Tipo     | Descripción                                                                                                                                                                                                                                                                                                                                                                                    |
| :---------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`version`](./options.md#version) (opcional)          | Cadena   | Establece qué versión del contrato inteligente debe desplegarse. Puede ser un [número de versión](./options.md#contract-versions), [dirección del contrato base](./options.md#custom-base-contract-address), o [custom bytecode](#deploying-custom-bytecode). Por defecto es la última versión disponible en el [archivo de versiones](https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json). |
| [`deployProxy`](./options.md#deploy-proxy) (opcional) | Booleano | Determina si el contrato se desplegará como un **contrato proxy mínimo** basado en [EIP1167](https://eips.ethereum.org/EIPS/eip-1167) o como un contrato completo con un constructor.                                                                                                                                                                                                         |

### Versión

Bajo el parámetro `version` los desarrolladores pueden especificar un [número de versión](./options#contract-versions), [custom bytecode](./options.md#deploying-custom-bytecode) o una [dirección de contrato base](./options.md#custom-base-contract-address) que se utilizará para el despliegue del contrato inteligente.

#### Dirección de contrato base personalizada

Cuando se utiliza [despliegue proxy](./options.md#deploy-proxy) los desarrolladores pueden pasar una dirección al parámetro `version` para especificar la dirección del contrato tipo del que heredará su lógica el contrato proxy. El contrato tipo puede contener lógica personalizada en función de un caso de uso específico.

LSPFactory desplegará entonces un contrato proxy que hereda su lógica a partir de la dirección del contrato tipo especificada.

:::info
Cualquier dirección de contrato tipo que los desarrolladores pasen aquí debe adherirse al estándar de contrato LSP relevante para el que se está utilizando.

:::

Más información sobre el despliegue de proxy [aquí](./options#deploy-proxy).

```javascript title="Despliegue de un Activo Digital LSP7 utilizando una dirección de contrato tipo específica"
await lspFactory.LSP7DigitalAsset.deploy({...}, {
    LSP7DigitalAsset: {
        version: '0x00b1d454Eb5d917253FD6cb4D5560dEC30b0960c',
        deployProxy: true
    }
});
```

#### Versiones de Contrato

LSPFactory almacena las direcciones de las diferentes versiones del contrato base [internamente](https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json). Especificando un número de `versión`, los desarrolladores pueden especificar qué versión de contrato tipo debe utilizarse durante el despliegue. El número de versión refleja la versión del paquete de la librería [lsp-smart-contracts](https://github.com/lukso-network/tools-lsp-factory/releases) utilizada para desplegar el contrato tipo.

```javascript
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({...}, {
    LSP7DigitalAsset: {
        version: '0.5.0',
        deployProxy: true
    }
});
```

#### Despliegue de Bytecode Personalizado

Los desarrolladores pueden desplegar una implementación de contrato personalizada pasando algún bytecode de creación compilado al parámetro `version`.

Puede tratarse del bytecode de instanciación de una implementación estándar LSP personalizada escrita de acuerdo con un caso de uso personalizado. La implementación debe cumplir los requisitos necesarios del estándar LSP.

:::note
Los contratos desplegados desde bytecode personalizado no utilizarán ningún proxy de despliegue de contratos.
:::

```javascript title="Despliegue de un Activo digital LSP8 a partir de bytecode personalizado"
lspFactory.UniversalProfile.deploy({...}, {
  LSP6KeyManager: {
    version: '0x...',
  },
})
```

### Despliegue Proxy

LSPFactory utiliza el despliegue proxy de contratos inteligentes para maximizar la eficiencia del gas. Esto puede configurarse pasando el parámetro `deployProxy` para determinar si un contrato debe desplegarse como un **contrato proxy mínimo** basado en [EIP1167](https://eips.ethereum.org/EIPS/eip-1167) o un contrato completo con un constructor.

Un contrato proxy es un contrato ligero que hereda su lógica haciendo referencia a la dirección de un contrato tipo ya desplegado en la blockchain. La herencia permite un despliegue más barato porque la lógica del contrato inteligente ya ha sido desplegada en el contrato tipo.

:::info
LSPFactory almacena direcciones de contratos tipo para diferentes versiones [internamente](https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json) y utilizará la última versión de contrato tipo disponible si no se especifica ninguna versión.
:::

Cuando se utiliza el despliegue proxy, LSPFactory comprobará que hay algún bytecode desplegado en la dirección del contrato tipo antes de realizar el despliegue. Si no se encuentra ninguno, se desplegará un nuevo contrato tipo al que se hará referencia en el contrato proxy. Este proceso es útil cuando se utiliza LSPFactory en una red de desarrollo local como Hardhat, donde no habrá contratos tipo desplegados previamente.

Cuando se utiliza el despliegue proxy, los desarrolladores pueden especificar la dirección del contrato tipo pasando el parámetro [`version`](./options.md#version). Esto permite desplegar una implementación de contrato específica desplegando un contrato proxy que hereda su lógica de un contrato tipo personalizado previamente desplegado.

El valor predeterminado de `deployProxy` es `true` para todos los contratos excepto `LSP1UniversalReceiverDelegate` cuando se despliega un Perfil Universal ([leer más](../deployment/universal-profile.md#universal-receiver-delegate-proxy-deployment)).

:::info
Si `deployProxy` se establece en `false`, el contrato inteligente se desplegará desde la versión actual de la librería [lsp-smart-contracts](https://github.com/lukso-network/lsp-smart-contracts).
:::

```javascript title="Despliegue de un Perfil Universal utilizando un contrato ERC725Account completo con constructor"
lspFactory.UniversalProfile.deploy({...}, {
  ERC725Account: {
    deployProxy: false,
  },
})
```

## Ejemplos

```js title="Pasar las opciones de contrato del Perfil Universal"
await lspFactory.UniversalProfile.deploy({...}, {
    ERC725Account: {
        version: '0.5.0',
        deployProxy: true
    },
    LSP6Keymanager: {
        version: '0x...', // Código byte personalizado
        deployProxy: false
    },
    LSP1UniversalReceiverDelegate: {
        version: '0x87cd003F9Ac7d6eBcd811f7b427c7dBF6f6ba132', // Dirección personalizada del contrato tipo
        deployProxy: true
    },
})
```

```js title="Pasar opciones de contrato LSP7DigitalAsset"
await lspFactory.LSP7DigitalAsset.deploy({...}, {
    LSP7DigitalAsset: {
        version: '0x...', // Código byte personalizado
        deployProxy: false
    },
})
```

```js title="Pasar opciones de contrato LSP8IdentifiableDigitalAsset"
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({...}, {
    LSP8IdentifiableDigitalAsset: {
        version: '0x87cd003F9Ac7d6eBcd811f7b427c7dBF6f6ba132', // Dirección personalizada del contrato tipo
        deployProxy: true
    },
})
```
