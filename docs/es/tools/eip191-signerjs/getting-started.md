---
sidebar_position: 1
---

# Primeros Pasos

- [Repositorio GitHub](https://github.com/lukso-network/tools-eip191-signer)
- [Paquete NPM](https://www.npmjs.com/package/@lukso/eip191-signer.js)

El paquete `@lukso/eip191-signer.js` se utiliza para firmar cualquier dato EIP191.

Se utiliza el siguiente formato para firmar datos:

```bash
0x19 <versión de 1 byte> <datos específicos de la versión> <datos a firmar>
```

En el caso de un mensaje firmado con Ethereum:

- versión de 1 byte = `0x45`
- datos específicos de la versión = `thereum Signed Message:\n + len(message)`

En el caso de datos con validador previsto:

- versión de 1 byte = `0x00`
- datos específicos de la versión = validatorAddress

  Este prefijo se utiliza para que una transacción no pueda ser firmada inadvertidamente al firmar un mensaje firmado Ethereum.

# Instalar

```bash
npm install @lukso/eip191-signer.js
```

# Configuración

```javascript
import { EIP191Signer } from '@lukso/eip191-signer.js';

const eip191Signer = new EIP191Signer();
```
