---
sidebar_position: 1
---

# EIP191Signer

## hashEthereumSignedMessage

```javascript
eip191Signer.hashEthereumSignedMessage(message);
```

Realiza el hash del mensaje introducido. El mensaje será envuelto como sigue: `'\x19' + '\x45' + 'thereum Mensaje Firmado:\n' + messageBytes.length + message` y hasheado usando keccak256.

### Parámetros

`message` - `Cadena`: Un mensaje a hashear.

### Respuesta

`Cadena`: El mensaje con hash construido como `'\x19' + '\x45' + 'thereum Signed Message:\n' + messageBytes.length + message`.

### Ejemplo

```javascript
eip191Signer.hashEthereumSignedMessage('Hola Mundo');
// '0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2';
```

## hashDataWithIntendedValidator

```javascript
eip191Signer.hashDataWithIntendedValidator(validatorAddress, message);
```

Realiza el hash del mensaje introducido. El mensaje será envuelto de la siguiente manera: `'\x19' + '\x00' + validatorAddress + message` y se hasheará utilizando keccak256.

### Parámetros

`validatorAddress` - `Cadena`: La dirección del validador.

message` - `Cadena`: Un mensaje para hash.

### Respuesta

`Cadena`: El mensaje hash construido como `'\x19' + '\x00' + validatorAddress + message`.

### Ejemplo

```javascript
eip191Signer.hashDataWithIntendedValidator(
  0xad278a6ead89f6b6c6fdf54a3e6e876660593b45,
  'Hola Mundo',
);
// '0xa63022286ecaa3317625e319a64b3bf01c41da558dfc1890e8cb196eb414ffd5';
```

## signEthereumSignedMessage

```javascript
eip191Signer.signEthereumSignedMessage(message, signingKey);
```

Firma un mensaje. El mensaje pasado como parámetro se envolverá de la siguiente manera: `'\x19' + '\x45' + 'thereum Mensaje Firmado:\n' + messageBytes.length + message`

### Parámetros

1. `message` - `Cadena`: El mensaje a firmar.

2. `signingKey` - `Cadena`: La clave privada con la que firmar.

### Respuesta

`Object`: **El objeto Mensaje**

- `message` - `Cadena`: El mensaje dado.
- `messageHash` - `Cadena`: El hash del mensaje dado construido como `'\x19' + '\x45' + 'thereum Signed Message:\n' + messageBytes.length + message`.
- `r` - `Cadena`: Primeros 32 bytes de la firma.
- `s` - `Cadena`: Los 32 bytes siguientes de la firma.
- `v` - `Cadena`: Valor de recuperación + 27.
- `signature` - `Cadena`: La firma codificada RLP en bruto.

### Ejemplo

```javascript
eip191Signer.signEthereumSignedMessage(
  'Hola Mundo',
  'ffeb17b9a6059fec3bbab63d76b060b7380cac7a62ce6621a134531a46458968',
);
/**
{     message: 'Hola Mundo',
      messageHash: '0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2',
      v: '0x1c',
      r: '0x85c15865f2909897c1be6d66c1d9c86d6125978aec9e28d1a69d4d306bde694f',
      s: '0x7cf9723f0eeaf8815e3fa984ac1d7bf3c420786ead91abd4dd9c1657897efec1',
      signature: '0x85c15865f2909897c1be6d66c1d9c86d6125978aec9e28d1a69d4d306bde694f7cf9723f0eeaf8815e3fa984ac1d7bf3c420786ead91abd4dd9c1657897efec11c'
    }
*/
```

## signDataWithIntendedValidator

```javascript
eip191Signer.signDataWithIntendedValidator(
  validatorAddress,
  message,
  signingKey,
);
```

Firma un mensaje. El mensaje pasado como parámetro se envolverá de la siguiente manera: `'\x19' + '\x00' + validatorAddress + message`.

### Parámetros

1. `validatorAddress` - `Cadena`: La dirección del validador.

2. `message` - `Cadena`: El mensaje a firmar.

3. `signingKey` - `Cadena`: La clave privada con la que firmar.

### Respuesta

`Object`: **El objeto Mensaje**

- `message` - `Cadena`: El mensaje dado.
- `messageHash` - `Cadena`: El hash del mensaje dado construido como `'\x19' + '\x00' + validatorAddress + message`.
- r` - `Cadena`: Los primeros 32 bytes de la firma.
- `s` - `Cadena`: Los 32 bytes siguientes de la firma.
- `v` - `Cadena`: Valor de recuperación + 27.
- `signature` - `Cadena`: La firma codificada RLP en bruto.

### Ejemplo

```javascript
eip191Signer.signDataWithIntendedValidator(
  '0xad278a6ead89f6b6c6fdf54a3e6e876660593b45',
  'Hola Mundo',
  'ffeb17b9a6059fec3bbab63d76b060b7380cac7a62ce6621a134531a46458968',
);
/**
    {
      message: 'Hola Mundo',
      messageHash: '0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2',
      v: '0x1c',
      r: '0x85c15865f2909897c1be6d66c1d9c86d6125978aec9e28d1a69d4d306bde694f',
      s: '0x7cf9723f0eeaf8815e3fa984ac1d7bf3c420786ead91abd4dd9c1657897efec1',
      signature: '0x85c15865f2909897c1be6d66c1d9c86d6125978aec9e28d1a69d4d306bde694f7cf9723f0eeaf8815e3fa984ac1d7bf3c420786ead91abd4dd9c1657897efec11c'
    }

*/
```

## recover

```javascript
eip191Signer.recover(message, signature);
```

Recupera la dirección que se utilizó para firmar el mensaje dado.

### Parámetros

1. `messageHash` - "Cadena|Objeto": **O bien mensaje firmado ya prefijado y hasheado u objeto Mensaje con los siguientes valores**:

   - `message` - 'Cadena': El mensaje dado.
   - `messageHash` - `Cadena`: El hash del mensaje dado.
   - `r` - `Cadena`: Los primeros 32 bytes de la firma.
   - `s` - `Cadena`: Los siguientes 32 bytes de la firma.
   - `v` - `Cadena`: Valor de recuperación + 27.
   - `signature` - `Cadena`: La firma codificada RLP en bruto.

2. `signature` - `Cadena`: La firma cruda codificada en RLP.

### Respuesta

`Cadena`: La dirección utilizada para firmar el mensaje dado.

### Ejemplo

```javascript
eip191Signer.recover(
  'Hola Mundo',
  '0x1eab2de0103b8e82650f9706b17cf2adce55a335e7041bad5a94ab49c56a9c12662e80a369ffa2a6a77fbeaad1f32653cbd74860c8fbc999b1fc47b8d1cb7d931c',
);
// 0x4C58e78663CB5D2Bd84Dc10beDe82A7C83442a8d;
```
