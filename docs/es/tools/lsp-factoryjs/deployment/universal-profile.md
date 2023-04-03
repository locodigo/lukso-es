---
sidebar_position: 1
title: Perfil Universal
---

# Despliegue de un Perfil Universal

LSPFactory te permite desplegar y configurar rápidamente un Perfil Universal compuesto por una [Cuenta LSP0 ERC725](../../../standards/universal-profile/lsp0-erc725account), un [Gestor de claves LSP6](. ./../../standards/universal-profile/lsp6-key-manager), y un contrato inteligente [Receptor-Universal-LSP1](../../../standards/generic-standards/lsp1-universal-receiver.md):

```javascript
await lspFactory.UniversalProfile.deploy(profileProperties [, options]);
```

Esto desplegará los siguientes contratos:

- [Cuenta LSP0 ERC725](../../../standards/universal-profile/lsp0-erc725account)
- [Gestor de Claves LSP6](../../../standards/universal-profile/lsp6-key-manager)
- Y enlace a un [Receptor Universal LSP1] preinstalado(../../../standards/generic-standards/lsp1-universal-receiver.md)

Después

- subirá metadatos a IPFS y establecerá los metadatos [LSP3 Universal Profile](../../../standards/universal-profile/lsp3-universal-profile-metadata),
- adjuntará el Receptor Delegado Universal a la cuenta ERC725,
- establecerá el administrador de claves como propietario de la Cuenta ERC725, y
- establecerá todos los [permisos](../../../standards/universal-profile/lsp6-key-manager#-types-of-permissions) para las `controllerAddresses` excepto `DELEGATECALL`.

Estos contratos inteligentes enlazados con algunos [Metadatos del Perfil Universal LSP3](../../../standards/universal-profile/lsp3-universal-profile-metadata) forman un Perfil Universal. Los metadatos son la "cara" de un perfil y contienen información como el nombre, la descripción y la imagen del perfil.

:::caution
La clave de implementación que se pasa a LSPFactory recibirá [permisos de LSP6](../../../standards/universal-profile/lsp6-key-manager#-types-of-permissions) `CHANGEOWNER` y `CHANGEPERMISSIONS` para llevar a cabo la implementación del Perfil Universal.

Estos permisos se revocan en el último paso del despliegue. Es importante que este paso se complete correctamente para evitar riesgos de seguridad.

:::

## Propiedades del perfil

Dentro del objeto `profileProperties`, puedes establecer las opciones de configuración del perfil, como las direcciones del controlador y los metadatos LSP3.

### Direcciones del controlador

Puedes establecer las direcciones que deben ser capaces de controlar tu Perfil Universal inicialmente pasando las `controllerAddresses`. Las direcciones que se pasen aquí recibirán todos los permisos del Gestor de Claves LSP6 excepto `DELEGATECALL` para [evitar un mal uso accidental](https://solidity-by-example.org/hacks/delegatecall/). Si tus claves de controlador requieren `DELEGATECALL`, puedes [cambiar el permiso después de la implementación](../../../guides/key-manager/give-permissions.md).

La propiedad `controllerAddresses` puede rellenarse con direcciones de cuentas de propiedad externa (EOAs) u otro contrato inteligente que pueda llamar a la función `execute(calldata)` en el GestordeClaves.

```javascript
await lspFactory.UniversalProfile.deploy({
  controllerAddresses: [
    '0x7Ab53a0C861fb955050A8DA109eEeA5E61fd8Aa4',
    '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',
  ],
});
```

### Añadir metadatos LSP3

Al desplegar un Perfil Universal con LSPFactory, puedes especificar tus metadatos de Perfil Universal utilizando la clave `lsp3Profile` en el objeto `profileProperties`:

```javascript
await lspFactory.UniversalProfile.deploy({
  controllerAddresses: ['0x...'],
  lsp3Profile: myUniversalProfileData,
});
```

:::info Info
Los metadatos de perfil se pueden pasar como un objeto JSON que contenga los [Metadatos LSP3](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp3profile) que deseas cargar o como una URL de tus metadatos cargados previamente.
:::

Si se pasa un objeto LSP3MetaData, LSPFactory procesará y cargará los metadatos en IPFS.

:::info
Consulta [Opciones de carga](././universal-profile#ipfs-upload-options) para obtener más información sobre cómo especificar una pasarela IPFS personalizada.
:::

```javascript title='Carga automática de metadatos LSP3'
await lspFactory.UniversalProfile.deploy({
    controllerAddresses: ['0x...'],
    lsp3Profile: {
      name: 'Mi-Genial-Perfil',
      description: 'Mi genial Perfil Universal',
      tags: ['perfil-poblico'],
      links: [{
        title: 'Mi Sitio web',
        url: 'www.mi-sitioweb.com'
      }],
      ...
    }
  });
};
```

LSP3 Metadata can also be passed with the `LSP3Profile` key:

```javascript title='Carga automática de metadatos LSP3'
await lspFactory.UniversalProfile.deploy({
    controllerAddresses: ['0x...'],
    lsp3Profile: {
      LSP3Profile: {
      name: 'Mi-Genial-Perfil',
      description: 'Mi genial Perfil Universal',
      tags: ['perfil-poblico'],
      links: [{
        title: 'Mi Sitio web',
        url: 'www.mi-sitioweb.com'
        }],
        ...
      }
    }
  });
};
```

Los dos ejemplos siguientes descargarán el archivo JSON antes de aplicar el hash y generar el valor [JSONURL](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#JSONURL) adecuado.

```javascript title='Proporcionar una URL IPFS de metadatos LSP3 cargada previamente'
await lspFactory.UniversalProfile.deploy({
    controllerAddresses: ['0x...'],
    lsp3Profile: 'ipfs://QmQ7Wq4y2gWiuzB4a4Wd6UiidKNpzCJRpgzFqQwzyq6SsV'
  });
};
```

```javascript title='Proporcionar una URL de metadatos LSP3 cargada previamente'
await lspFactory.UniversalProfile.deploy({
    controllerAddresses: ['0x...'],
    lsp3Profile: 'https://mycoolserver.com/myProfile.json'
  });
};
```

También puedes proporcionar tú mismo el archivo JSON para generar el valor hash:

```javascript title='Proporcionar una url de metadatos LSP3 ya cargada y el propio archivo JSON'
await lspFactory.UniversalProfile.deploy({
  controllerAddresses: ['0x...'],
  lsp3Profile: {
    json: lsp3ProfileJson,
    url: 'https://mycoolserver.com/myProfile.json',
  },
});
```

O puedes proporcionar el valor hash y luego la URL del archivo cargado:

```javascript title='Proporcionar una url de metadatos LSP3 y valores hash ya cargados'
await lspFactory.UniversalProfile.deploy({
  controllerAddresses: ['0x...'],
  lsp3Profile: {
    hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',
    hashFunction: 'keccak256(utf8)',
    url: 'https://mycoolserver.com/file.json',
  },
});
```

### Establecer imágenes en los MetaDatos LSP3

Las propiedades `profileImage` y `backgroundImage` pueden ser pasadas dentro del objeto `lsp3Profile`. Estas pueden ser dadas como un objeto que contiene Metadatos de imágenes previamente cargadas, un objeto Javascript `File` si se usa del lado del cliente.

#### Imágenes precargadas

Un Perfil LSP3 requiere que las propiedades `profileImage` y `backgroundImage` sean cargadas en múltiples tamaños para que las interfaces puedan elegir cuál cargar para un mejor rendimiento de carga.

Si ya dispones de una imagen cargada en IPFS en varios tamaños, puedes pasar los metadatos de la imagen dentro del objeto `lsp3Profile` al desplegar un perfil.

:::info
Tanto `profileImage` como `backgroundImage` toman un conjunto, donde cada elemento son los metadatos de diferente tamaño de imagen.
:::

```javascript title='Configuración de los metadatos LSP3 que se cargarán con las imágenes de perfil y de fondo'
const myUniversalProfileData = {
  name: 'Mi-Genial-Perfil',
  description: 'Mi genial Perfil Universal',
  profileImage: [
    {
      width: 500,
      height: 500,
      hashFunction: 'keccak256(bytes)',
      hash: '0xfdafad027ecfe57eb4ad044b938805d1dec209d6e9f960fc320d7b9b11cced14', // bytes32 cadena hexadecimal del hash de la imagen
      url: 'ipfs://QmPLqMFDxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrajSGp',
    },
    ... // Deben incluirse varios tamaños de la imagen
  ],
  backgroundImage: [
    {
      width: 500,
      height: 500,
      hashFunction: 'keccak256(bytes)',
      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14', // bytes32 cadena hexadecimal del hash de la imagen
      url: 'ipfs://QmPLqMFHxiUDYAom3Zg4SiwoxDaFcZpHXpAmiDzxrtjSGp',
    },
    ... // Deben incluirse varios tamaños de la imagen
  ],
};

await lspFactory.UniversalProfile.deploy({
    controllerAddresses: ['0x...'],
    lsp3Profile: myUniversalProfileData
  });
};
```

### Establecer un Avatar en los MetaDatos LSP3

Se puede establecer un avatar pasando la propiedad `avatar` al objeto `lsp3Profile`.

Un avatar puede pasarse como un conjunto en el que cada elemento es un formato de archivo diferente del mismo avatar. Cada formato de archivo puede pasarse como un objeto `File`, o como un objeto de metadatos de activos según el [Esquema estándar LSP2 ERC725Y JSON](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#Array).

Si se pasa un archivo de avatar como objeto `File`, el archivo se cargará en IPFS, se convertirá al formato correcto de metadatos de activos y se añadirá al Json [Metadatos de Perfil LSP3](https://docs.lukso.tech/standards/universal-profile/lsp3-universal-profile-metadata).

Los archivos de avatar pasados como objetos de metadatos se establecerán directamente en los [Metadatos de Perfil LSP3](https://docs.lukso.tech/standards/universal-profile/lsp3-universal-profile-metadata) Json.

```javascript title='Configuración de metadatos LSP3 para cargar con un avatar con dos formatos'
<input type="file" id="avatar">

<script>
  const myLocalAvatar = document.getElementById('avatar').files[0];

  const myUniversalProfileData = {
    name: 'Mi-Genial-Perfil',
    description: 'Mi genial Perfil Universal',
    asset: [
        myLocalAvatar,
        {
          hashFunction: 'keccak256(bytes)',
          hash: '0x5f3dbd89cde4dde36241c501203b67a93b89908063f5516535136bc25f712e11',
          url: 'ipfs://QmWkAki4mLq2c9hsbKs4HFCaZdpUX1jLKKBb5y8YMATkak',
          fileType: 'image/obj',
        },
      ]
  };

  await lspFactory.UniversalProfile.deploy({
    controllerAddresses: ['0x...'],
    lsp3Profile: myUniversalProfileData
  });

<script/>
```

#### Uso del objeto Archivo de Javascript

Javascript ofrece un objeto `File` para facilitar el manejo de archivos dentro de un navegador. Los desarrolladores pueden pasarlos a los campos `profileImage` y `backgroundImage` para permitir arrastrar y soltar fácilmente imágenes desde una interfaz de usuario.

:::caution
El objeto `File` de Javascript sólo está disponible cuando se utiliza javascript en el navegador. Si se utiliza LSPFactory en un entorno Node, deben pasarse los metadatos de la imagen.
:::

```javascript
<input type="file" id="input">

<script>
    const myLocalFile = document.getElementById('input').files[0];

    const myUniversalProfileData = {
        name: 'Mi-Genial-Perfil',
        description: 'Mi genial Perfil Universal',
        profileImage: myLocalFile,
        backgroundImage: myLocalFile,
        tags: ['Fashion', 'Design'],
        links: [{
          title: "Mi Sitoweb",
          url: "www.mi-sitioweb.com"
        }],
    };

    await lspFactory.UniversalProfile.deploy({
      controllerAddresses: ['0x...'],
      lsp3Profile: myUniversalProfileData
    });
};
<script/>
```

LSPFactory creará cinco versiones redimensionadas de la imagen pasada, con tamaños máximos de `1800x1800`, `1024x1024`, `640x640`, `320x320`, `180x180`. Estas imágenes redimensionadas se establecerán dentro de `LSP3Metadata` y se adjuntarán al contrato `ERC725Account`.

<!-- #### Uso de Búferes de Imagen

Si se utiliza LSPFactory en un entorno Node donde el objeto Javascript `File` no está disponible, `profileImage` y `backgroundImage` pueden cargarse pasando directamente un Buffer de Archivo.

Los desarrolladores también deben pasar el tipo mime de la imagen para reconstruir y redimensionar la misma. Se puede acceder fácilmente a los mimetypes soportados utilizando el enum `SupportedImageBufferFormats` exportado por LSPFactory.

:::info

Los tipos mime admitidos son: `image/png`, `image/bmp`, `image/jpeg` y `image/gif`.

:::

```javascript
const profileImageBuffer = fs.readFileSync('./my-profile-image.png');
const backgroundImageBuffer = fs.readFileSync('./my-background-image.png');

const myUniversalProfileData = {
  name: 'Mi-Genial-Perfil',
  description: 'Mi genial Perfil Universal',
  profileImage: {
    buffer: profileImageBuffer,
    mimeType: SupportedImageBufferFormats.png,
  },
  backgroundImage: {
    buffer: backgroundImageBuffer,
    mimeType: SupportedImageBufferFormats.png,
  },
};

await lspFactory.UniversalProfile.deploy({
  controllerAddresses: ['0x...'],
  lsp3Profile: myUniversalProfileData,
});
``` -->

### Carga de metadatos LSP3 en IPFS

Puedes cargar tus metadatos LSP3 antes de desplegar un Perfil Universal utilizando el método `uploadMetaData()`. La función utiliza el mismo [esquema de objeto `lsp3Profile`](./universal-profile#adding-lsp3-metadata) definido anteriormente al desplegar un Perfil Universal. Devuelve un objeto que contiene la ubicación de carga IPFS de sus metadatos y su `lsp3Metdata` como un objeto javascript.

```javascript
await myLSPFactory.UniversalProfile.uploadMetaData(lsp3Profile [, options]);
```

Para cargar utilizando una pasarela IPFS personalizada, pasa el objeto `options`. El campo es el mismo objeto `options` que se utiliza al desplegar un Perfil Universal. [Más información](./universal-profile#ipfs-upload-options).

La función `uploadMetaData()` está disponible como método estático o no estático que puede invocarse sin instanciar un objeto `LSPFactory`.

```javascript title="Llamada a uploadMetaData en una instancia de LSPFactory"
await myLSPFactory.UniversalProfile.uploadMetaData(myLSP3MetaData);

/**
{
  hash: '0x1234...',
  hashFunction: 'keccak256(utf8)',
  url: 'https://ipfs.lukso.network/ipfs/QmPzUfdKhY6vfcLNDnitwKanpm5GqjYSmw9todNVmi4bqy',
  json: {
    LSP3Profile: {
      name: 'Mi-Genial-Perfil',
      description: 'Mi genial Perfil Universal',
      ...
    }
  }
}
*/
```

```javascript title="Llamada a uploadMetaData en la clase no instanciada"
await UniversalProfile.uploadMetaData(myLSP3MetaData);

> // igual que el anterior
```

## Configuración del Despliegue

Un Perfil Universal se compone de tres contratos inteligentes. [Cuenta LSP0 ERC725](../../../standards/universal-profile/lsp0-erc725account), [Gestor de Claves LSP6](../../../standards/universal-profile/lsp6-key-manager), y [Receptor-Universal LSP1](../../../standards/generic-standards/lsp1-universal-receiver.md).
Al desplegar un Perfil Universal, puedes configurar cómo deben desplegarse estos contratos dentro del objeto `options`.

En la clave [`version`](./options.md#version), los desarrolladores pueden pasar un [número de versión](./options.md#version), [código de bytes personalizado](./options.md#deploying-custom-bytecode) o una [dirección de contrato tipo](./options.md#custom-base-contract-address) para utilizarlos durante la implementación. Estableciendo el parámetro [`deployProxy`](./options.md#deploy-proxy) los desarrolladores pueden especificar si el contrato debe desplegarse utilizando el despliegue proxy.

:::info
El valor predeterminado de `deployProxy` es true para `ERC725Account` y `KeyManager` y false para `UniversalReceiverDelegate`.
Más información sobre la configuración del despliegue de proxy y el versionado de contratos [aquí](../deployment/options.md)

:::

```javascript
await lspFactory.UniversalProfile.deploy({...}, {
  LSP0ERC725Account: {
    version: '0.4.1', // Número de la versión
    deployProxy: true
  },
  LSP1UniversalReceiverDelegate: {
    version: '0x...', // Código byte personalizado
    deployProxy: false
  },
  LSP6KeyManager: {
    version: '0x6c1F3Ed2F99054C88897e2f32187ef15c62dC560', // Dirección del contrato tipo
    deployProxy: true
  }
})
```

#### Receptor Delegado Universal Despliegue Proxy

El `UniversalReceiverDelegate` es un contrato lógico que escribe en el Perfil Universal cuando éste recibe algún activo. Esta operación no es específica de ningún Perfil Universal en particular, por lo que los desarrolladores pueden utilizar el mismo contrato `UniversalReceiverDelegate` para múltiples despliegues de Perfiles Universales diferentes.

De forma predeterminada, no se implementará ningún contrato de Receptor Delegado Universal. En su lugar, LSPFactory utilizará la última versión disponible de la versión de `UniversalReceiverDelegate` almacenada en el [archivo de versión](https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json). Esta dirección se utiliza directamente en el Perfil Universal y recibe el permiso [`SETDATA` LSP6](https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager#permissions).

La reutilización de la dirección `UniversalReceiverDelegate` significa que no es necesario implementar ningún contrato `UniversalReceiverDelegate` al implementar un Perfil universal, lo que reduce aún más el coste de gas de la implementación de Perfiles Universales.

Para especificar que tu contrato `UniversalReceiverDelegate` debe utilizar el despliegue proxy, establece la propiedad `deployProxy` en `true`. Si no se especifica ninguna dirección de contrato tipo en el parámetro `version`, se desplegará un nuevo contrato tipo `UniversalReceiverDelegate`.

```javascript
lspFactory.UniversalProfile.deploy({...}, {
    LSP1UniversalReceiverDelegate: {
        deployProxy: true,
        version: '0x00b1d454Eb5d917253FD6cb4D5560dEC30b0960c',
    },
})
```

:::info
El contrato `UniversalReceiverDelegate` no utiliza la implementación proxy de forma predeterminada. Si se pasa una dirección al parámetro `version` del `LSP1UniversalReceiverDelegate` y `deployProxy` no se establece en `true`, LSPFactory establecerá la dirección proporcionada directamente en la CuentaERC725 como la [clave LSP1UniversalReceiverDelegate](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md#lsp1universalreceiverdelegate) y el [permiso `SETDATA` LSP6](https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager#permissions).
:::

```javascript title="Uso de una dirección UniversalReceiverDelegate personalizada"
lspFactory.UniversalProfile.deploy({...}, {
    LSP1UniversalReceiverDelegate: {
        version: '0x00b1d454Eb5d917253FD6cb4D5560dEC30b0960c',
        deployProxy: false
    },
})
```

### Versiones de Contratos

LSPFactory almacena las direcciones de las diferentes versiones del contrato tipo [internamente](https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json). Especificando un número de `versión`, los desarrolladores pueden especificar qué implementación de contrato tipo debe utilizarse durante la implementación.

La `versión` de los tres contratos puede establecerse a la vez pasando el parámetro de versión global. La versión también puede establecerse por contrato, que tendrá prioridad sobre el parámetro global.

```javascript title="Despliegue de un Perfil Universal con todos los contratos ajustados a la versión 0.5.0"
await lspFactory.UniversalProfile.deploy({...}, {
    version: '0.5.0'
});
```

```javascript title="Despliegue de un Perfil Universal en la versión 0.5.0, con un Gestor de Claves configurado en la versión 0.4.0"
await lspFactory.UniversalProfile.deploy({...}, {
    version: '0.5.0',
    LSP6KeyManager: {
      version: '0.4.0'
    }
});
```

### Despliegue de Bytecode Personalizado

Al desplegar un Perfil Universal, puede utilizar su implementación de contrato personalizada pasando el bytecode de creación compilado de un contrato que hayas escrito como parámetro `version`. El parámetro `bytecode` puede ser el bytecode de instanciación de una implementación de contrato personalizada que hayas escrito según tu caso de uso. La implementación debe cumplir los requisitos del estándar LSP.

:::note
El bytecode personalizado se desplegará y utilizará como parte del Perfil Universal. Los contratos desplegados desde bytecode personalizado no utilizarán ningún despliegue de contrato proxy.
:::

```javascript title="Despliegue de un Perfil Universal con una implementación personalizada de Gestor de Claves"
lspFactory.UniversalProfile.deploy({...}, {
    LSP6KeyManager: {
      version: '0x...'
    }
});
```

### Opciones de carga IPFS

Puedes especificar cómo quieres que se carguen los metadatos de tu perfil pasando el objeto options. Aquí puedes establecer la pasarela IPFS donde quieres que se carguen los metadatos del perfil.

:::note
El procedimiento toma una cadena URL o un objeto definido por la librería [IPFS-HTTP Client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions) que se utiliza internamente para interactuar con el nodo IPFS especificado.
:::

Si se pasa una URL y no se especifica ningún puerto, se utilizará el puerto estándar 5001.

```javascript title="Pasando cadena URL de ipfsGateway"
lspFactory.UniversalProfile.deploy({...}, {
  ipfsGateway: 'https://ipfs.infura.io:5001'
})
```

```javascript title="Pasando cadena URL ipfsGateway con puerto establecido"
lspFactory.UniversalProfile.deploy({...}, {
  ipfsGateway: 'https://ipfs.infura.io' // No se ha configurado ningún puerto. Se utilizará el puerto 5001
})
```

```javascript title="Pasando las opciones de ipfsGateway como un objeto"
lspFactory.UniversalProfile.deploy({...}, {
  ipfsGateway: {
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  }
})
```

Si se proporciona el parámetro `ipfsGateway`, se sobrescribirá el objeto `ipfsGateway` pasado durante la instanciación del LSPFactory sólo para esta llamada a la función.

### Despliegue Reactivo

LSPFactory emite eventos para cada paso del proceso de despliegue. Estos eventos pueden ser enganchados pasando el objeto `onDeployEvents` dentro del objeto `options`.

El objeto `onDeployEvents` recibe tres parámetros de llamada de retorno:

- `next` será llamado una vez por cada evento de despliegue que se dispare.
- `complete` será llamado una vez que el despliegue haya finalizado con los detalles de despliegue del contrato completado.
- `error` se llamará una vez si se produce un error durante el despliegue.

Esto permite utilizar LSPFactory para ciertos comportamientos reactivos. Por ejemplo, para dar una mejor retroalimentación a los usuarios durante el despliegue desde una interfaz de usuario como una barra de carga, o mostrar actualizaciones en vivo con los detalles y direcciones de los contratos a medida que se despliegan.

:::info
El callback `complete` será llamado con el mismo objeto de contrato que se devuelve cuando se resuelve la función `deploy`.

:::

```typescript title="Despliegue reactivo de un Perfil Universal"
const contracts = await lspFactory.UniversalProfile.deploy({...}, {
  onDeployEvents: {
    next: (deploymentEvent) => {
      console.log(deploymentEvent);
    },
    error: (error) => {
      console.error(error);
    },
    complete: (contracts) => {
      console.log('Despliegue del Perfil Universal completado');
      console.log(contracts);
    },
  }
});

/**
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP0ERC725Account',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP0ERC725Account',
  status: 'COMPLETE',
  contractAddress: '0xa7b2ab323cD2504689637A0b503262A337ab87d6',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'initialize(address)',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'initialize(address)',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP6KeyManager',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP6KeyManager',
  status: 'COMPLETE',
  contractAddress: '0x8fE3f0fd1bc2aCDA6cf3712Cd9C7858B8195DC8E',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP6KeyManager',
  functionName: 'initialize(address)',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP6KeyManager',
  functionName: 'initialize(address)',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  status: 'PENDING',
  contractName: 'LSP0ERC725Account',
  functionName: 'transferOwnership(address)',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'transferOwnership(address)',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'claimOwnership()',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'claimOwnership()',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'setData(bytes32,bytes)',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP0ERC725Account',
  functionName: 'setData(bytes32,bytes)',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
Despliegue del Perfil Universal completado
{
  LSP0ERC725Account: {
    address: '0xa7b2ab323cD2504689637A0b503262A337ab87d6',
    receipt: {
      ...
    }
  },
  LSP6KeyManager: {
    address: '0x8fE3f0fd1bc2aCDA6cf3712Cd9C7858B8195DC8E',
    receipt: {
      ...
    }
  }
}
*/

```
