---
sidebar_label: 'LSP6 - Gestor de Claves'
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LSP6 - Gestor de Claves

:::info Documento Estándard

[LSP6 - Gestor de Claves](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md)

:::

## Introducción

Una [CuentaLSP0ERC725](./../smart-contracts/lsp0-erc725-account.md) por sí sola tiene una usabilidad limitada. Dado que es un **contrato propio**, sólo el propietario de la cuenta puede escribir datos en él o utilizarlo para interactuar con otros contratos inteligentes.

Aquí es donde entra en juego el Gestor de Claves. Un contrato inteligente que controla una CuentaLSP0ERC725, actuando como su nuevo propietario. Así, funciona como una puerta de enlace para el contrato **account**.

La idea es dar [permisos](#permissions) a cualquier `dirección`, como Cuentas de Propiedad Externa (EOA) o contratos inteligentes. Estos pueden entonces interactuar con la CuentaLSP0ERC725 **a través del Gestor de Claves**. El Gestor de Claves permitirá o restringirá el acceso en función de los permisos establecidos para la "dirección" de llamada.

Las direcciones con permiso pueden interactuar directamente con el Gestor de Claves o pueden firmar un mensaje para ser ejecutado por cualquier instancia (usuarios, servicios de retransmisión).

:x: &nbsp; **Sin Gestor de Claves**, sólo el propietario de la LSP0ERC725Account puede utilizar su Cuenta.

:white_check_mark: &nbsp; **Con un Gestor de Claves** asociado a una CuentaLSP0ERC725, otras direcciones (EOA o contratos) pueden utilizar una Cuenta en nombre de su propietario.

![Descripción general del Gestor de Claves LSP6 permitido](/img/standards/lsp6/lsp6-key-manager-overview-allowed.jpeg)

![Vista general del Gestor de Claves LSP6 no permitida](/img/standards/lsp6/lsp6-key-manager-overview-not-allowed.jpeg)

Los permisos para las direcciones no se almacenan en el Gestor de Claves. En su lugar, se **almacenan dentro de la clave de datos - almacén de valores de la CuentaLSP0ERC725** vinculada al Gestor de Claves. De esta forma, es posible **actualizar** fácilmente el Gestor de Claves sin tener que restablecer de nuevo todos los permisos.

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator

---

## Permisos

:::tip

Puedes utilizar las funciones [`encodePermissions(...)`](../../../../../../../../../tools/erc725js/classes/ERC725#encodepermissions) y [`decodePermissions(...)`](../../../../../../.. /tools/erc725js/classes/ERC725#decodepermissions) de la herramienta [_erc725.js_](../../../../../../tools/erc725js/getting-started) para **crear, combinar** o **descifrar valores de permisos**.

:::

![Permisos LSP6](/img/standards/lsp6/lsp6-permissions.jpeg)

Haz clic en los siguientes elementos para **obtener más información sobre las funciones habilitadas por cada permiso**.

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator

<details id="changeowner">
    <summary><code>CHANGEOWNER</code> - Permite cambiar el propietario del contrato controlado.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000001</code>
    </p>

El permiso `CHANGEOWNER` permite cambiar el propietario de la CuentaERC725 vinculada.
Utilizando este permiso, puedes actualizar fácilmente el [`LSP6GestordeClaves`](../smart-contracts/lsp6-key-manager.md) vinculado a la Cuenta transfiriendo la propiedad a un nuevo Gestor de Claves.

</details>

<details>
    <summary><code>ADDCONTROLLER</code> - Permite dar permisos a nuevas direcciones.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000002</code>
    </p>

El permiso `ADDCONTROLLER` posibilita conceder permisos a nuevas direcciones (controladores) que antes no tenían ningún permiso. Esto permite añadir nuevas direcciones de controlador que pueden interactuar o utilizar la CuentaERC725 vinculada.

El permiso `ADDCONTROLLER` es necesario para:

- Dar a una nueva dirección algún permiso estableciendo sus permisos en `AddressPermissions:Permissions:<controller-address>`.
- Añadir una nueva dirección de controlador en la lista de `AddressPermissions[index]` en un `index` específico.
- Aumentar la longitud del conjunto `AddressPermissions[]` (para describir que se ha añadido una nueva dirección de controlador).

![ADD Permissions](/img/standards/lsp6/lsp6-add-permissions.jpeg)

</details>

<details>
    <summary><code>CHANGEPERMISSIONS</code> - Permite cambiar los permisos existentes de las direcciones.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000004</code>
    </p>

Este permiso permite **editar permisos** de cualquier dirección que ya tenga algún permiso establecido en la CuentaERC725 (incluida ella misma).
El `CHANGEPERMISSIONS` también es necesario para:

- 🗑️ **Eliminar** una `dirección` controladora de la lista de `AddressPermissions[]`, es decir:
  - eliminar su dirección en un índice específico en `AddressPermissions[index]`.
- disminuir la longitud del conjunto `AddressPermissions[]` (para describir que se ha eliminado la dirección de un controlador).
- 🖊️ **Editar** una entrada en el Array `AddressPermissions[index]`, lo que significa cambiar la dirección almacenada en un índice específico.
  > ⚠️ **Atención:** una dirección de controlador con `CHANGEPERMISSIONS` también puede editar sus propios permisos. ¡Tenga cuidado al conceder este permiso!

![CAMBIAR PERMISOS](/img/standards/lsp6/lsp6-change-permissions.jpeg)

Ten en cuenta que el comportamiento de `CHANGEPERMISSIONS` varía ligeramente en función del nuevo valor de permisos que se establezca (véase la figura siguiente).

![CHANGE Permissions](/img/standards/lsp6/lsp6-change-permissions-variants.jpeg)

</details>

<details>
    <summary><code>ADDEXTENSIONS</code> - Permite añadir más contratos de extensión en la CuentaERC725 vinculada.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000008</code>
    </p>

El permiso `ADDEXTENSIONS` permite añadir nuevos contratos de extensión a través de la función `fallback` de la CuentaERC725 vinculada.

</details>

<details>
    <summary><code>CHANGEEXTENSIONS</code> - Permite editar la dirección de un contrato de extensión en la CuentaERC725 vinculada.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000010</code>
    </p>

El permiso `CHANGEEXTENSIONS` permite editar la dirección del contrato de extensión para un selector de función bytes4 específico enviado a la función `fallback` de la CuentaERC725 vinculada.

</details>

<details>
    <summary><code>ADDUNIVERSALRECEIVERDELEGATE</code> - Permite añadir nuevas direcciones de contratos LSP1ReceptorDelegadoUnviersal.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000020</code>
    </p>

El permiso `ADDUNIVERSALRECEIVERDELEGATE` permite añadir nuevos contratos de extensión LSP1ReceptorDelegadoUnviersal para identificadores de tipo específicos, cuando no se ha configurado inicialmente ninguna extensión de contratos para un identificador de tipo específico.

Consulte [**LSP1 Receptor Delegado Universal > extension**](../generic-standards/lsp1-universal-receiver.md#extension) para obtener más detalles.

> **NB** este permiso también permite establecer la dirección del contrato predeterminado LSP1ReceptorDelegadoUnviersal bajo la clave de datos `LSP1UniversalReceiverDelegate` si no se estableció ninguna dirección en primer lugar.

</details>

<details>
    <summary><code>CHANGEUNIVERSALRECEIVERDELEGATE</code> - Permite editar las direcciones de los contratos LSP1ReceptorDelegadoUnviersal.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000040</code>
    </p>

El permiso `CHANGEUNIVERSALRECEIVERDELEGATE` permite dos cosas:

1. editar la dirección del contrato predeterminado LSP1ReceptorDelegadoUnviersal (vinculado bajo la clave de datos `LSP1UniversalReceiverDelegate`).
2. editar las direcciones de los contratos de extensión LSP1UniversalReceiverDelegate vinculados a identificadores de tipo específicos.

Véase [**LSP1 Receptor Delegado Universal > extension**](../generic-standards/lsp1-universal-receiver.md#extension) para más detalles.

</details>

<details>
    <summary><code>REENTRANCY</code> - Permite reingresar durante una ejecución.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000080</code>
    </p>

Cuando un contrato o una EOA tiene este permiso, le permite ejecutar una carga útil durante la ejecución de otra carga útil. Un contrato volvería a entrar utilizando `execute(..)` y una EOA lo haría a través de `executeRelayCall(..)`.

Por ejemplo, uno de los mejores usos para este permiso es el siguiente escenario:

1. La CuentaERC725A vinculada al Gestor de Claves realiza una llamada externa a un _contrato A_.
2. El _contrato A_ realizará algunas actualizaciones internas utilizando los datos recibidos.
3. A continuación, el _contrato A_ volverá a llamar a la CuentaERC725 **(a través del Gestor de Claves)** con otra carga útil que actualizará el almacenamiento de la cuenta.

![Permiso REENTRANCY  1](/img/standards/lsp6/lsp6-reentrancy-example-1.jpeg)
![Permiso REENTRANCY  2](/img/standards/lsp6/lsp6-reentrancy-example-2.jpeg)

Para que se produzca esa interacción, el contrato A debe tener el permiso REENTRANCY.

</details>

<details>
    <summary><code>TRANSFERVALUE</code> - Permite transferir los tokens nativos de la CuentaERC725A vinculada <strong>con restricciones</strong>.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000200</code>
    </p>

El permiso `TRANSFERVALUE` permite transferir los tokens nativos de la CuentaERC725A vinculada **con restricciones**.

1. a direcciones específicas (EOAs o contratos).
2. a contratos que apliquen un tipo específico de _estándares de interfaz_, que puedan detectarse utilizando los ID de interfaz ERC165.

Estas restricciones pueden aplicarse utilizando los datos LSP6 `AddressPermissions:AllowedCalls:<address>`, donde `<address>` es la dirección del controlador que tiene el permiso `TRANSFERVALUE`.

<br/>

> **Nota:** Para las transferencias simples de tokens nativos, no deben pasarse datos (`""`) al cuarto parámetro de la función [`execute`](../smart-contracts/lsp0-erc725-account.md#execute) del contrato Account. Por ejemplo: `account.execute(operationCall, recipient, amount, "")`.
>
> El emisor de la llamada necesitará el permiso `CALL` para enviar cualquier dato a lo largo de la transferencia LYX.

</details>

<details>
    <summary><code>CALL</code> - Permite utilizar la CuentaERC725A vinculada para interactuar con contratos <strong>con restricciones</strong>.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000800</code><br/>
    </p>

El permiso `CALL` permite utilizar la CuentaERC725 vinculada para llamar a funciones de contratos desplegados en la red **con restricciones**.

1. a direcciones de contratos específicos (contratos).
2. a contratos que apliquen un tipo específico de _estándares de interfaces_, que puedan detectarse utilizando los ID de interfaces ERC165.

Utiliza el opcode subyacente `CALL` que permite cambiar estados en el contrato llamado.

</details>

<details>
    <summary><code>STATICCALL</code> - Permite llamar a otros contratos a través del contrato controlado</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000002000</code><br/>
    </p>

Este permiso permite a la CuentaERC725 vinculada al Gestor de Claves realizar llamadas externas a contratos mientras se desautorizan los cambios de estado en la dirección a la que se llama.
Utiliza el opcode [STATICCALL](https://eips.ethereum.org/EIPS/eip-214) al realizar la llamada externa.

> **NB:** Si se cambia algún estado en un contrato de destino a través de una `STATICCALL`, la llamada se **revertirá silenciosamente**.

</details>

<details>
    <summary><code>DELEGATECALL</code> - Permite delegar la llamada a otros contratos a través del contrato controlado</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000008000</code>
    </p>

This permission allows executing code and functions from other contracts in the UP context.

:::danger

**`DELEGATECALL`** está actualmente deshabilitado (incluso si está establecido en el GestordeClaves) debido a su naturaleza peligrosa, ya que los desarrolladores viciosos pueden ejecutar algún código malicioso en el contrato de Cuenta vinculado.

:::

</details>

<details>
    <summary><code>DEPLOY</code> - Permite desplegar otros contratos a través del contrato controlado</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000010000</code>
    </p>

Permite a la persona que llama desplegar un contrato inteligente, utilizando la CuentaERC725 vinculada como desplegador. Los desarrolladores deben proporcionar el código de bytes del contrato a desplegar en la carga útil (codificada ABI) pasada al Gestor de Claves.

> Para desplegar un contrato pueden utilizarse tanto el opcode `CREATE` como [`CREATE2`](https://eips.ethereum.org/EIPS/eip-1014).

</details>

<details>
    <summary><code>SETDATA</code> - Permite fijar datos sobre el contrato controlado</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000040000</code>
    </p>

Permite a una dirección escribir cualquier forma de datos en el almacén de claves de datos - valores [ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y) de la `CuentaERC725` vinculada (excepto permisos, que requieren los permisos `CHANGEPERMISSIONS`).

> **NB:** una `dirección` puede restringirse para establecer sólo claves de datos específicas mediante **[Claves de Datos ERC725Y permitidas](#allowed-erc725y-keys)**.

</details>

<details>
    <summary><code>ENCRYPT</code>: Permite cifrar datos o mensajes en nombre de la cuenta controlada</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000080000</code>
    </p>

Los desarrolladores pueden utilizar el permiso `ENCRYPT` para cifrar datos o mensajes, por ejemplo para mensajería privada.

</details>

<details>
    <summary><code>DECRYPT</code>: Permite descifrar datos o mensajes en nombre de la cuenta controlada</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000100000</code>
    </p>

Los desarrolladores pueden utilizar el permiso `DECRYPT` para descifrar datos o mensajes, por ejemplo para mensajería privada.

</details>

<details>
    <summary><code>SIGN</code>: Permite firmar en nombre de la cuenta controlada, por ejemplo para iniciar sesión.</summary>
    <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000200000</code>
    </p>

El permiso `SIGN` permite a una dirección autenticarse en nombre de la UP. Se puede utilizar principalmente en aplicaciones web2.0 para [firmar mensajes de inicio de sesión](../../guides/browser-extension/sign-in-with-ethereum).

</details>

:::note

Cuando se despliega con nuestra herramienta [**lsp-factory.js**](https://docs.lukso.tech/tools/lsp-factoryjs/getting-started), el propietario del Perfil Universal tendrá todos los permisos anteriores establecidos por defecto.

:::

### SUPER Permisos

Los superpermisos conceden los mismos permisos que sus homólogos no super, con la diferencia de que las comprobaciones de las restricciones para [**Llamadas Permitidas**](#allowed-calls) y [**Claves de Datos ERC725Y Permitidas**](#allowed-erc725y-data-keys) se _saltan_. Esto permite transacciones más baratas tanto si estas restricciones están establecidas como si no.

<details>
    <summary><code>SUPER_TRANSFERVALUE</code></summary>
     <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000100</code>
    </p>

Igual que `TRANSFERVALUE`, pero permitiendo enviar tokens nativos a cualquier `dirección` (EOA o contrato). Esto tampoco comprobará [**Llamadas permitidas**](#llamadas-permitidas) al transferir valor a contratos.

</details>

<details>
    <summary><code>SUPER_CALL</code></summary>
     <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000000400</code>
    </p>

Igual que `CALL`, pero permitiendo interactuar con cualquier contrato. Esto no comprobará [**Llamadas permitidas**]( #allowed-calls) si el llamante tiene alguna de estas restricciones establecidas.

</details>

<details>
    <summary><code>SUPER_STATICCALL</code></summary>
     <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000001000</code>
    </p>

Igual que `STATICCALL`, pero permitiendo interactuar con cualquier contrato. No comprobará [**Llamadas permitidas**]( #allowed-calls) si el llamante tiene alguna de estas restricciones establecidas.

</details>

<details>
    <summary><code>SUPER_DELEGATECALL</code></summary>
     <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000004000</code>
    </p>

Igual que `DELEGATECALL`, pero permitiendo interactuar con cualquier contrato. Esto no comprobará [**Llamadas permitidas**](#allowed-calls) si el llamante tiene alguna de estas restricciones establecidas.

</details>

<details id="super-set-data">
    <summary><code>SUPER_SETDATA</code></summary>
     <p style={{marginBottom: '3%', marginTop: '2%', textAlign: 'center'}}>
        <b>value = </b><code>0x0000000000000000000000000000000000000000000000000000000000020000</code>
    </p>

Igual que `SETDATA`, pero permitiendo establecer cualquier clave de datos ERC725Y. Esto no comprobará [**Claves de datos ERC725Y permitidas**](#allowed-erc725y-data-keys) si la persona que llama tiene alguna restricción.

</details>

:::caution

Se debe utilizar con precaución, ya que incluso si se establecen restricciones a ciertas [**Llamadas permitidas**](#allowed-calls) o [**Claves de datos ERC725Y permitidas**](#allowed-erc725y-data-keys) para una dirección de controlador, se ignorarán.

:::

### Combinar permisos

Los permisos pueden combinarse si una `dirección` necesita más de un permiso. Para ello

1. calcula la suma del valor decimal de cada permiso.
2. convierte el resultado a hexadecimal.

<details>
    <summary>Ejemplo</summary>

<Tabs>
<TabItem value="example1" label="Example 1" default>

```solidity
permissions: CALL + TRANSFERVALUE

  0x0000000000000000000000000000000000000000000000000000000000000800 (2048 in decimal)
+ 0x0000000000000000000000000000000000000000000000000000000000000200 (512)
---------------------------------------------------------------------
= 0x0000000000000000000000000000000000000000000000000000000000000a00 (= 2560)
```

</TabItem>
<TabItem value="example2" label="Example 2">

```solidity
permissions: CHANGEPERMISSIONS + SETDATA

  0x0000000000000000000000000000000000000000000000000000000000000004 (4 in decimal)
+ 0x0000000000000000000000000000000000000000000000000000000000040000 (262144)
---------------------------------------------------------------------
= 0x0000000000000000000000000000000000000000000000000000000000040004 (= 262148)
```

</TabItem>

</Tabs>

</details>

---

### Consultar las direcciones con permisos

:::tip

La función de conveniencia [`getData(...)`](../../tools/erc725js/classes/ERC725.md#getdata) de [_erc725.js_](../../../../../../../tools/erc725js/getting-started) te devolverá la lista completa de direcciones con permisos, al proporcionar la clave de datos del conjunto `AddressPermission[]` como parámetro.

:::

Puedes obtener la lista de `direcciones` que tienen algún permiso establecido en la CuentaERC725 vinculada consultando la clave de datos `AddressPermission[]`, en el almacenamiento ERC725Y a través de [`getData(...)`](../smart-contracts/erc725-contract.md#getdata---erc725y).

- **key:** `0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3`
- **valor devuelto:** el número total de direcciones que tienen algún permiso establecido (= longitud del conjunto)

Cada `dirección` puede ser recuperada accediendo a cada índice del conjunto (ver [LSP2 > Conjuntos docs](../generic-standards/lsp2-json-schema.md#array) y [LSP2 > Especificaciones estándar de conjuntos](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#array) para instrucciones más detalladas).

```json
{
  "name": "AddressPermissions[]",
  "key": "0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```

![AddressPermissions array - list of addresses with permissions](/img/standards/lsp6/lsp6-address-permissions-array.jpeg)

_ejemplo:_

_si la clave de datos del conjunto `AddressPermission[]` devuelve `0x00000000000000000000000000000000000000000000000000000000000000000004` (longitud del conjunto = 4), cada `dirección` puede obtenerse consultando las siguientes claves de datos:_

- _`0xdf30dba06db6a30e65354d9a64c6098600000000000000000000000000000000`: 1ª `dirección`( índice 0 del conjunto = `AddressPermissions[0]`)_
- _`0xdf30dba06db6a30e65354d9a64c6098600000000000000000000000000000001`: 2ª `dirección`( índice 1 del conjunto = `AddressPermissions[1]`)_
- _`0xdf30dba06db6a30e65354d9a64c6098600000000000000000000000000000002`: 3ª `dirección`( índice 2 del conjunto = `AddressPermissions[2]`)_
- _`0xdf30dba06db6a30e65354d9a64c6098600000000000000000000000000000003`: 4ª `dirección`( índice 3 del conjunto = `AddressPermissions[3]`)_

## Tipos de permisos

| Tipo de Permiso                                        | Descripción                                                                                                                                                                        | clave de datos `bytes32`              |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [**Address Permissions**](#address-permissions)        | define un conjunto de [**permisos**](#permissions) para una `dirección`.                                                                                                                 | `0x4b80742de2bf82acb3630000<address>` |
| [**Allowed Calls**](#allowed-calls)                    | define un conjunto de interacciones (función + dirección + estándar) permitidas para una dirección de controlador.                                                                                    | `0x4b80742de2bf393a64c70000<address>` |
| [**Allowed ERC725Y Data Keys**](#allowed-erc725y-keys) | define una lista de claves de datos ERC725Y que una "dirección" sólo puede establecer mediante [`setData(...)`](../smart-contracts/lsp0-erc725-account.md#setdata-array) en la CuentaERC725 vinculada. | `0x4b80742de2bf866c29110000<address>` |

> [Para más información, ver LSP6](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md#erc725y-data-keys)

Los valores establecidos bajo estas claves de datos de permiso **DEBEN tener el siguiente formato** para garantizar el correcto comportamiento de sus funciones.

- **Address Permissions**: un valor `bytes32`.
- **Allowed Calls**: un [CompactBytesArray](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#bytescompactbytesarray) de la tupla `(bytes4,address,bytes4)`.
- **Allowed ERC725Y Data Keys**: un [CompactBytesArray](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#bytescompactbytesarray) de bytes, que contiene valores de `bytes1` a `bytes32`.

:::caution

Para **añadir/eliminar entradas en la lista de llamadas permitidas o Claves de Datos ERC725Y**, el **conjunto completo de bytes compactos** debe ser cifrado de nuevo y restablecido. Cada actualización **anula todo el estado anterior**.

Ten en cuenta que este proceso es costoso, ya que los datos que se establecen son un **CompactBytesArray**.

:::

### Permisos de dirección

Una dirección puede tener uno (o más) permisos, lo que le permite realizar múltiples _"acciones"_ en una CuentaERC725. Dichas _"acciones"_ incluyen **establecer datos** en la CuentaERC725, **llamar a otros contratos**, **transferir tokens nativos**, etc.

Para conceder permiso(s) a una `<address>`, establezca el siguiente par de datos clave - valor en el almacenamiento [ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y) de la ERC725Account vinculada al Gestor de Claves.

- **key:** `0x4b80742de2bf82acb3630000<address>`.
- **value:** uno de los permisos disponibles a continuación. Para conceder varios permisos, consulte la sección Combinación de permisos.

> **NB:** recuerda eliminar el prefijo `0x` del campo `<address>` anterior.

```json
{
  "name": "AddressPermissions:Permissions:<address>",
  "key": "0x4b80742de2bf82acb3630000<address>",
  "keyType": "MappingWithGrouping",
  "valueType": "bytes32",
  "valueContent": "BitArray"
}
```

![Address Permissions range](/img/standards/lsp6/lsp6-address-permissions.jpeg)

:::danger

** ¡Otorgar permisos a la propia CuentaERC725 vinculada es peligroso! **

Un usuario puede crear una carga útil a través de `ERC725X.execute(...)` para enviarla de vuelta al GestordeClaves, lo que puede dar lugar a un potencial ataque de reentrada.

Tal flujo de transacciones puede llevar a un llamador inicial a utilizar más permisos de los permitidos inicialmente mediante el uso de los permisos concedidos a la dirección de la CuentaERC725 vinculada.

:::

:::caution

Cada permiso DEBE tener **exactamente 32 bytes** y **relleno de ceros a la izquierda**:

- `0x0000000000000000000000000000000000000000000000000000000000000008` ✅
- `0x0800000000000000000000000000000000000000000000000000000000000000` ❌

Por ejemplo, si intentas establecer el permiso TRANSFERVALUE para una dirección como `0x08`, esto se almacenará internamente como  `0x0800000000000000000000000000000000000000000000000000000000000000`.

Asegúrate de que el valor `bytes32` establecido en los permisos es correcto según estas reglas, para evitar comportamientos incorrectos o inesperados y errores.

:::

---

### Llamadas Permitidas

Puedes restringir una dirección con la que interactuar:

<details>
    <summary>Estándares</summary>

Estos contratos DEBEN implementar el estándar [ERC165](https://eips.ethereum.org/EIPS/eip-165) para poder detectar sus interfaces.

|    ID de Interfaz     |                     Significado                      |
| :-------------------: | :--------------------------------------------------: |
|     `0xffffffff`      |     Se permite interactuar con cualquier norma.      |
| Interfaces específicas | Se permite la interacción con una norma específica. |

</details>

<details>
    <summary>Direcciones</summary>

|                 Direcciones                  |                     Significado                     |
| :------------------------------------------: | :-------------------------------------------------: |
| `0xffffffffffffffffffffffffffffffffffffffff` |    Se permite interactuar con cualquier norma.      |
|              Otras direcciones               | Se permite la interacción con una norma específica. |

</details>

<details>
    <summary>Funciones</summary>

|    Selector de Función      |                     Significado                     |
| :-------------------------: | :-------------------------------------------------: |
|        `0xffffffff`         |    Se permite interactuar con cualquier norma.      |
| Otros selectores de función | Se permite la interacción con una norma específica. |

</details>

Para permitir que una `<dirección>` ejecute cualquier función en una LSP0ERC725Account (ID de interfaz `0x66767497`) desplegada en la dirección `0xCA41e4ea94c8fA99889c8EA2c8948768cBaf4bc0`, puede establecerse el par de datos clave - valor que figura a continuación en el almacenamiento del contrato ERC725Y.

- **key:** `0x4b80742de2bf393a64c70000<address>`
- **valores posibles:**
  - `(bytes4,address,bytes4)[CompactBytesArray]`: un [**CompactBytesArray**](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#bytescompactbytesarray) de tupla `(bytes4,address,bytes4)` que se crea concatenando el _selector de función_, la _dirección_ y el _estándar_ elegidos. Por ejemplo: `0x001c66767497CA41e4ea94c8fA99889c8EA2c8948768cBaf4bc0ffffffff`
  - `0x` (vacío): si el valor es un **byte vacío** (= `0x`), el llamante `<dirección>` no puede interactuar con ninguna función, dirección o estándar (**= todas las llamadas están prohibidas**).

<details>
    <summary>Combining multiple interactions</summary>

Si quieres tener varias interacciones diferentes, DEBES añadir cada una de las interacciones deseadas a un [**CompactBytesArray**](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#bytescompactbytesarray). Ten en cuenta que la longitud de cada elemento en el [**CompactBytesArray**](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#bytescompactbytesarray) debe ser **28** = **`0x001c`**, porque un _standard_ usa **4 bytes**, una _address_ usa **20 bytes** y una _function_ usa **4 bytes**.

Ej:

- _Standard_: **LSP0, `0x66767497`**;  
  _Address_: **`0xCA41e4ea94c8fA99889c8EA2c8948768cBaf4bc0`**;  
  _Function_: **any**;  
  _CompactBytesArray_: **`0x001c66767497CA41e4ea94c8fA99889c8EA2c8948768cBaf4bc0ffffffff`**
- _Standard_: **any**;  
  _Address_: **`0xF70Ce3b58f275A4c28d06C98615760dDe774DE57`**;  
  _Function_: **transfer(address,address,uint256,bool,bytes), `0x760d9bba`**;  
  _CompactBytesArray_: **`0x001cffffffffF70Ce3b58f275A4c28d06C98615760dDe774DE57760d9bba`**
- _Standard_: **any**;  
  _Address_: **`0xd3236aa1B8A4dDe5eA375fd1F2Fb5c354e686c9f`**;  
  _Function_: **any**;  
  _CompactBytesArray_: **`0x001cffffffffd3236aa1B8A4dDe5eA375fd1F2Fb5c354e686c9fffffffff`**

Un _CompactBytesArray_ para estas 3 interacciones tendría el siguiente aspecto:
`0x`**`001c`**`66767497CA41e4ea94c8fA99889c8EA2c8948768cBaf4bc0ffffffff`**`001c`**`ffffffffF70Ce3b58f275A4c28d06C98615760dDe774DE57760d9bba`**`001c`**`ffffffffd3236aa1B8A4dDe5eA375fd1F2Fb5c354e686c9fffffffff`

</details>

```json
{
  "name": "AddressPermissions:AllowedCalls:<address>",
  "key": "0x4b80742de2bf393a64c70000<address>",
  "keyType": "MappingWithGrouping",
  "valueType": "(bytes4,address,bytes4)[CompactBytesArray]",
  "valueContent": "(Bytes4,Address,Bytes4)"
}
```

![LSP6 Allowed Calls Overview](/img/standards/lsp6/lsp6_allowed_calls_example.jpeg)

:::warning

Permitir un estándar específico no ofrece seguridad sobre el funcionamiento interno o la corrección de un contrato inteligente. Debería utilizarse más como un mecanismo de "prevención de errores" que como una medida de seguridad.

:::

:::info

**Si no se establecen llamadas permitidas (`0x`), un controlador no puede interactuar con ninguna dirección ni transferir ningún valor (Contrato o EOA).**

:::

---

### Claves de datos ERC725Y permitidas

Si a una dirección se le permite [`SETDATA`]( #permissions) en una CuentaERC725, es posible restringir qué claves de datos puede establecer o actualizar esta dirección.

Para restringir que una `<dirección>` sólo pueda establecer la clave `LSP3Profile` (`0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5`), puede establecerse el siguiente par clave-valor de datos en el almacenamiento del contrato ERC725Y. Cifrar los datos como [**CompactBytesArray**](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#bytescompactbytesarray).

- **key:** `0x4b80742de2bf866c29110000<address>`
- **value(s):** `0x00205ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5`

<details>
    <summary>Claves de datos ERC725Y: tamaño fijo vs tamaño dinámico</summary>

Introducción (resumen)
Puedes configurar 2 tipos de **Claves de datos ERC725Y**:

- _Claves de Datos de Tamaño Fijo_

Una **Clave de Datos de tamaño fijo** es una clave de datos que tiene una longitud fija de 32 bytes. Si una _dirección de controlador_ tiene una clave de datos ERC725Y de tamaño fijo permitida, entonces esa _dirección de controlador_ sólo puede cambiar el valor de esa clave de datos de tamaño fijo específica.

- _Claves de Datos de Tamaño Dinámico_

Una **Clave de Datos de tamaño dinámico** es una clave de datos que puede tener una longitud de 1 byte a 31 bytes. Si una _dirección de controlador_ tiene un conjunto de claves de datos ERC725Y de tamaño dinámico permitido, entonces esa _dirección de controlador_ puede cambiar cualquier clave de datos que comience con la _clave de datos de tamaño dinámico_.

_**Ejemplos:**_

- _Claves de Datos de Tamaño Fijo_

Imaginemos la siguiente situación: has establecido una **Clave de datos ERC725Y permitida de tamaño fijo** (por ejemplo, `0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5`) para una dirección de controlador (por ejemplo, Alice).
Con esa Configuración permitiste a Alice actualizar sólo el valor de la **Clave de Datos ERC725Y Permitida**.

![Claves de datos ERC725Y permitidas en LSP6, clave de tamaño fijo](/img/standards/lsp6/lsp6_allowed_erc725y_data_keys_fixed_key.jpeg)

- _Claves de Datos de Tamaño Dinámico_

Imaginemos la siguiente situación, estableces una **Clave de datos de tamaño dinámico ERC725Y permitida** (por ejemplo, `0xbeefbeefbeefbeef`) para una dirección de controlador (por ejemplo, Bob).
Con esta configuración, permites a Bob establecer cualquier **clave de datos** que empiece por `0xbeefbeefbeef`.

E.g:

- `0xbeefbeefbeefbeefcafecafecafecafecafecafecafecafecafecafecafecafe`
- `0xbeefbeefbeefbeef0000000000000000000000000000000000000000c629dfa8`
- `0xbeefbeefbeefbeef000000000000000000000000000000000000000000001253`

![LSP6 Allowed ERC725Y Data Keys, Dynamic-Size Key](/img/standards/lsp6/lsp6_allowed_erc725y_data_keys_dynamic_key.jpeg)

</details>

<details>
    <summary>Combinar varias Claves de Datos ERC725Y</summary>

Si quieres tener múltiples claves de datos ERC725Y diferentes permitidas, DEBES añadir cada una de las claves de datos deseadas a un [**CompactBytesArray**](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#bytescompactbytesarray).

Ej.:

- `0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5` (**longitud: 32 bytes** = `0x0020`)
- `0x5ef83ad9559033e6e941db7d7c495acd` (**longitud: 16 bytes** = `0x0010`)
- `0xbeefbeef` (**longitud: 4 bytes** = `0x0004`)

Un CompactBytesArray para estas 3 claves de datos ERC725Y tendría el siguiente aspecto:
`0x`**`0020`**`5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5`**`0010`**`5ef83ad9559033e6e941db7d7c495acd`**`0004`**`beefbeef`

</details>

```json
{
  "name": "AddressPermissions:AllowedERC725YDataKeys:<address>",
  "key": "0x4b80742de2bf866c29110000<address>",
  "keyType": "MappingWithGrouping",
  "valueType": "bytes32[CompactBytesArray]",
  "valueContent": "Bytes32"
}
```

A continuación se muestra un caso práctico de ejemplo. Una CuentaERC725 puede permitir que algunas aplicaciones añadan/editen información en su almacenamiento a través de `setData(...)`. La cuenta puede restringir tales dApps y protocolos para editar las claves de datos que sólo son relevantes para la lógica de sus aplicaciones.

![Vista general de las claves de datos ERC725Y permitidas en LSP6](/img/standards/lsp6/lsp6-allowed-erc725ydatakeys-overview.jpeg)

Como resultado, esto proporciona contexto para la dApp sobre qué datos pueden operar en la cuenta, mientras que les impide editar otra información, como los metadatos de la cuenta, o datos relevantes para otras dapps.

![LSP6 Allowed ERC725YDataKeys overview](/img/standards/lsp6/lsp6-allowed-erc725ydatakeys-example-allowed.jpeg)

![LSP6 Allowed ERC725YDataKeys overview](/img/standards/lsp6/lsp6-allowed-erc725ydatakeys-example-denied-1.jpeg)

![LSP6 Allowed ERC725YDataKeys overview](/img/standards/lsp6/lsp6-allowed-erc725ydatakeys-example-denied-2.jpeg)

:::info

**Si no se establecen claves de datos ERC725Y permitidas, la dirección del controlador no puede establecer ningún valor para ninguna clave.**

:::

---

## Types of Execution

Tipos de Ejecución

Existen 2 formas de interactuar con la CuentaERC725 vinculada al Gestor de Claves.

- **ejecución directa**, en la que la `dirección` llamante envía directamente una **carga útil** al Gestor de Claves (= llamada a función cifrada en la CuentaERC725 vinculada) al Gestor de Claves a través de `execute(...)`.
- **ejecución por retransmisión**, en la que una `dirección` **A** firmante firma una carga útil y una `dirección` **B** ejecutora (_por ejemplo, un servicio de retransmisión_) ejecuta la carga útil en nombre del firmante a través de `executeRelayCall(...)`.

La principal diferencia entre la ejecución directa _vs_ la ejecución por retransmisión es que con la ejecución directa, la `dirección de llamada` es la dirección real que realiza la solicitud + el pago del coste de gas de la ejecución. Con la ejecución de retransmisión, una `dirección` firmante puede interactuar con la CuentaERC725 sin tener que pagar el coste del gas.

![Direct vs Relay Execution](/img/standards/lsp6/lsp6-direct-vs-relay-execution.jpeg)

### Ejecución por Retransmisión

La ejecución por retransmisión permite a los usuarios interactuar con contratos inteligentes en la blockchain **sin necesidad de tokens nativos** para pagar las cuotas de transacción. Esto permite una mejor experiencia de integración para los usuarios nuevos en criptomonedas y blockchain.

La ejecución por retransmisión minimiza la fricción para las dApps, incluyendo la eliminación de la necesidad de que los usuarios se preocupen por la cuota de gas, o cualquier paso complejo necesario para operar en blockchains (KYC, frases de semillas, gas).

Las dapps pueden entonces aprovechar las características de ejecución por retransmisión para crear su propio modelo de negocio en torno a la construcción de su propio **servicio de retransmisión**, solución de contratos inteligentes en la parte superior del Gestor de Claves para pagar con sus tokens, o acordar con los usuarios métodos de pago, incluyendo suscripciones, anuncios, etc...

![LSP6 Key Manager Relay Service](/img/standards/lsp6/lsp6-relay-execution.jpeg)

### ¿Cómo se firman las transacciones por retransmisión?

Las transacciones de retransmisión se firman utilizando la [**versión 0 de EIP191**](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md#version-0x00). Los datos de la llamada de retransmisión que desea firmar **DEBEN** ser el _keccak256 hash digest_ de los siguientes elementos _(valores de bytes)_ concatenados.

```javascript
0x19 <0x00> <KeyManager address> <LSP6_VERSION> <chainId> <nonce> <value> <payload>
```

| Elementos del mensaje | Detalles                                                                                                                                                                                                                       |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0x19`                | Byte utilizado para garantizar que el _relay call signed data_ no es un RLP válido.                                                                                                                                                     |
| `0x00`                | La [**versión 0 de EIP191**](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md#version-0x00).                                                                                                                     |
| `KeyManager address`  | La dirección del Gestor de Claves que ejecutará la llamada de retransmisión.                                                                                                                                               |
| `LSP6_VERSION`        | La versión del Gestor de Claves que ejecutará la llamada de retransmisión, como `uint256`. (La versión actual del Gestor de Claves de LSP6 es **6**)                                                                                               |
| `chainId`             | El id de cadena de la blockchain donde está desplegado el Gestor de Claves, como `uint256`.                                                                                                                                               |
| `nonce`               | El [**nonce**](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md#getnonce) único para la carga útil.                                                                                                    |
| `value`               | La cantidad de **tokens nativos** que se transferirán a la [**Cuenta ERC725**](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md) vinculada al Gestor de Claves que ejecutará la llamada de retransmisión. |
| `payload`             | La carga útil que se va a ejecutar.                                                                                                                                                                                             |

:::info

Si quieres firmar una transacción _EIP191 de Llamada Ejecutada por Retransmisión_ puedes utilizar nuestra librería, [**eip191-signer.js**](https://github.com/lukso-network/tools-eip191-signer).

:::

### Ejecución fuera de orden

Dado que el Gestor de Claves ofrece **ejecución de retransmisión** mediante mensaje firmado, es importante proporcionar medidas de seguridad para garantizar que el mensaje firmado no pueda repetirse una vez ejecutado. **[Nonces](https://www.techtarget.com/searchsecurity/definition/nonce#:~:text=A%20nonce%20is%20a%20random,to%20as%20a%20cryptographic%20nonce.)** existían para resolver este problema, pero con el siguiente inconveniente:

- Los mensajes firmados con nonces secuenciales deben ser **ejecutados en orden**, lo que significa que un mensaje firmado con nonce 4 no puede ser ejecutado antes que el mensaje firmado con nonce 3. Este es un problema crítico que puede limitar el uso de la ejecución por retransmisión.

Aquí vienen los **nonces multicanal** que proporcionan la capacidad de ejecutar mensajes firmados **con**/sin** un orden específico dependiendo de la elección del firmante.

Los mensajes firmados deben ejecutarse secuencialmente si se firman en el mismo canal y deben ejecutarse independientemente si se firman en canales diferentes.

- El mensaje firmado con el nonce 4 en el canal 1 no puede ejecutarse antes que el mensaje firmado con el nonce 3 en el canal 1, pero puede ejecutarse antes que el mensaje firmado con el nonce 3 en el canal 2.

![LSP6 Key Manager Relay Service](/img/standards/lsp6/lsp6-multi-channel-nonce.jpeg)

Más información sobre **[Nonces multicanal](../faq/channel-nonce.md)** casos de uso y su construcción interna.

## Referencias

- [Propuestas de Estándares LUKSO: LSP6 - Gestor de Claves (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md)
- [LSP6 Gestor de Claves: implementaciones de Solidity (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP6KeyManager)
