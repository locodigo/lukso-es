---
sidebar_label: 'Crear una Bóveda'
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Crear una Bóveda

Esta guía te enseñará a desplegar un contrato **[Bóveda LSP9](../../standards/smart-contracts/lsp9-vault.md)**. Este contrato se puede utilizar para **guardar activos** como tokens y NFTs. También se puede utilizar con un [UniversalProfile](../../standards/universal-profile/introduction.md) y un [Gestor de Claves](../../standards/universal-profile/lsp6-key-manager.md) para **restringir algunas direcciones** (protocolos, amigos, etc..) para ejecutar y setData en él, en lugar de establecer o ejecutar directamente en el perfil.

![Guía - Cómo crear una LSP9Vault](/img/guides/lsp9/LSP9VaultGuide.jpeg)

## Despliegue de un contrato LSP9Vault

Para empezar con esta guía necesitarás lo siguiente:

- La _clave privada_ de tu cuenta, para poder enviar la transacción.
- La dirección de un [**Perfil Universal**](../../standards/universal-profile/lsp0-erc725account.md)

Asegúrate de tener instaladas las siguientes dependencias antes de comenzar este tutorial:

- O bien [`web3.js`](https://github.com/web3/web3.js) o bien [`ethers.js`](https://github.com/ethers-io/ethers.js/)
- [`@lukso/lsp-smart-contracts`](https://github.com/lukso-network/lsp-smart-contracts/)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```shell title="Instala las dependencias"
npm install web3 @lukso/lsp-smart-contracts
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```shell title="Instala las dependencias"
npm install ethers @lukso/lsp-smart-contracts
```

  </TabItem>

</Tabs>

## Paso 1 - Configuración de importaciones y constantes

Para las importaciones, necesitaremos el **ABI**  del contrato `LSP9vault` y el **bytecode** para poder desplegar una Bóveda LSP9.  
Para las constantes necesitaremos la _clave privada_ y _la dirección del receptor de la bóveda_.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Importaciones y Constantes"
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const vaultOwner = '0x...'; // La dirección que será el propietario de la bóveda

// inicializa tu EOA
const privateKey = '0x...';
const myEOA = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones y Constantes"
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const vaultOwner = '0x...'; // La dirección que será el propietario de la bóveda

// inicializa tu EOA
const privateKey = '0x...';
const myEOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

## Paso 2 - Instanciar contratos

Crea una instancia para `LSP9Vault`, necesaria para desplegar el contrato.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Instancia del contrato"
// crea una instancia del contrato LSP9Vault
let myVault = new web3.eth.Contract(LSP9Vault.abi);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Instancia del contrato"
// crea una instancia del contrato LSP9Vault
let vaultFactory = new ethers.ContractFactory(
  LSP9Vault.abi,
  LSP9Vault.bytecode,
);
```

  </TabItem>

</Tabs>

## Paso 3 - Enviar transacción

Por último, envía la transacción de **despliegue del contrato**.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Enviar transacción de despliegue de contrato"
// desplegar el contrato de la bóveda
await myVault
  .deploy({
    data: LSP9Vault.bytecode,
    arguments: [vaultOwner],
  })
  .send({
    from: myEOA.address,
    gas: 5_000_000,
    gasPrice: '1000000000',
  });
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Enviar transacción de despliegue de contrato"
// desplegar el contrato de la bóveda
const myVault = await vaultFactory.connect(myEOA).deploy(vaultOwner);
```

  </TabItem>

</Tabs>

## Código final

:::caution

Necesitas tener LYXt en tu EOA para poder pagar las cuotas de transacción. Visita :arrow_right: **[LUKSO L16 Página web del Grifo](https://faucet.l16.lukso.network/)** para conseguir algo de LYXt.

:::

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Desplegar la bóveda"
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const vaultOwner = '0x...'; // La dirección que será el propietario de la bóveda

// inicializa tu EOA
const privateKey = '0x...';
const myEOA = web3.eth.accounts.wallet.add(privateKey);

// crea una instancia del contrato LSP9Vault
let myVault = new web3.eth.Contract(LSP9Vault.abi);

// desplegar el contrato de la bóveda
await myVault
  .deploy({
    data: LSP9Vault.bytecode,
    arguments: [vaultOwner],
  })
  .send({
    from: myEOA.address,
    gas: 5_000_000,
    gasPrice: '1000000000',
  });
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Desplegar la bóveda"
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const vaultOwner = '0x...'; // La dirección que será el propietario de la bóveda

// inicializa tu EOA
const privateKey = '0x...';
const myEOA = new ethers.Wallet(privateKey).connect(provider);

// crea una instancia del contrato LSP9Vault
let vaultFactory = new ethers.ContractFactory(
  LSP9Vault.abi,
  LSP9Vault.bytecode,
);

// desplegar el contrato de la bóveda
const myVault = await vaultFactory.connect(myEOA).deploy(vaultOwner);
```

  </TabItem>

</Tabs>
