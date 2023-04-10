---
title: Nonces multicanales
sidebar_position: 1
---

# Preguntas más frecuentes

## ¿Qué son los nonces multicanal?

:::note
Los desarrolladores tomaron este concepto de [Ejecución fuera de orden](https://github.com/amxx/permit#out-of-order-execution).
:::

El uso de nonces evita que las transacciones firmadas antiguas vuelvan a reproducirse (ataques de repetición). Un nonce es un número arbitrario que los constructores pueden usar sólo una vez en una transacción.

### Problema de los Nonces Secuenciales.

Con transacciones nativas, los nonces son estrictamente secuenciales. La secuencialidad significa que los nonces de los mensajes deben ejecutarse en orden. Por ejemplo, para que el mensaje número 4 se ejecute, debe esperar a que el mensaje número 3 se complete.

Sin embargo, los **nonces secuenciales tienen la siguiente limitación**:

Algunos usuarios pueden querer firmar múltiples mensajes, permitiendo la transferencia de diferentes activos a diferentes destinatarios. En ese caso, el destinatario querrá poder utilizar o transferir sus activos cuando quiera y seguramente no querrá esperar a nadie antes de firmar otra transacción.

Ante este problema, resulta útil la **ejecución fuera de orden**.

### Nonces multicanal

La ejecución fuera de orden se consigue utilizando varios canales independientes. El nonce de cada canal se comporta como se espera, pero los diferentes canales son independientes. La subdivisión significa que los mensajes 2, 3 y 4 del canal 0 deben ejecutarse secuencialmente, pero el mensaje 3 del `channel 1` es independiente y sólo depende del mensaje 2 del `channel 1`.

La ventaja es que la clave del firmante puede determinar en qué canal firmar los nonces. Los servicios de retransmisión tendrán que entender el canal que elige el firmante y ejecutar las transacciones de cada canal en el orden correcto para evitar transacciones fallidas.

### Nonces en el Gestor de Claves

El Gestor de Claves permite la ejecución fuera de orden de los mensajes mediante el uso de nonces a través de múltiples canales.

Los nonces se representan como `uint256` a partir de la concatenación de dos `uint128`: el `channelId` y el `nonceId`.

- más 128 bits a la izquierda: `channelId`
- más 128 bits a la derecha: `nonceId`

![multi-channel-nonce](/img/standards/faq/multi-channel-nonce.jpg)

<p align="center">
<i>Ejemplo de nonce multicanal, donde channelId == 5 y nonceId == 1</i>
</p>

El nonce actual puede ser consultado usando:

```solidity
function getNonce(address _address, uint256 _channel) public view returns (uint256)
```

Como el `channelId` representa los 128 bits más a la izquierda, un valor mínimo como `1` devolverá un número `nonce` enorme: `2**128` igual a:

`340282366920938463463374607431768211456`.

Después de que se ejecute la transacción firmada el `nonceId` se incrementará en `1`, esto incrementará el `nonce` en `1` porque el nonceId representa los primeros 128 bits del nonce, por lo que será

`340282366920938463463374607431768211457`.

### Ejemplo de código solidity

```solidity
_nonces[signer][nonce >> 128]++
```

La expresión `nonce >> 128` representa el canal que el firmante eligió para ejecutar la transacción. Después de buscar el nonce del firmante en ese canal específico, se incrementará en uno utilizando `++`.

Para mensajes secuenciales, los usuarios pueden usar el canal `0`, y para mensajes fuera de orden, pueden usar el canal `n`.

**Importante:** Es decisión del usuario elegir el canal en el que quiere firmar múltiples órdenes secuenciales, no es necesario el `canal 0`.
