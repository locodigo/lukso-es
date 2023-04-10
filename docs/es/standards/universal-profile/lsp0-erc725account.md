---
sidebar_label: 'LSP0 - Cuenta ERC725'
sidebar_position: 2
---

# LSP0 - Cuenta ERC725

:::info Documento estándard

[LSP0 - CuentaERC725](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md)

:::

## Introducción

Las [Cuentas de Propiedad Externa ("EOAs por sus siglas en inglés")](https://ethereum.org/en/developers/docs/accounts/#externally-owned-accounts-and-key-pairs) son el tipo principal de **cuenta** en Ethereum, controlada por una clave privada. Si la clave privada se ve **comprometida**, cualquiera puede ejecutar transacciones desde la cuenta y acceder a cualquier activo que posea. Las EOA no incorporan ningún mecanismo para adjuntar información o datos, lo que dificulta la identificación de la persona o entidad que utiliza la cuenta. Sólo pueden realizar interacciones simples utilizando el opcode **[CALL](https://www.evm.codes/#f1)** y crear contratos utilizando el opcode **[CREATE](https://www.evm.codes/#f0)**.

Estos problemas pueden solucionarse con el estándar **[ERC725](../lsp-background/erc725.md)**, que proporciona más operaciones para ejecutar y una forma flexible de adjuntar datos para el contrato incluso después de que se haya desplegado.

Sin embargo, para que una cuenta basada en un contrato inteligente sea viable a largo plazo, debe tener muchas más funcionalidades que la capacidad de ejecutar y adjuntar datos. Las características que hacen de un contrato inteligente una cuenta son:

- la capacidad de **verificar mensajes firmados**
- ser **notificado de la entrada de tokens**, seguidores y otros tipos de transacciones,
- ser capaz de ser **ampliado después del despliegue** para soportar funciones y estándares que se adoptarán en el futuro.

Además, debe contar con un **sistema seguro de gestión de la propiedad** para garantizar la protección de los activos valiosos.

## ¿Qué representa esta norma?

Una **CuentaERC725** es un sistema de cuenta blockchain que puede ser utilizado por individuos, máquinas u otros contratos inteligentes. Se compone de varios estándares que permiten las funcionalidades mencionadas anteriormente. Está formado por:

- **[ERC165](https://eips.ethereum.org/EIPS/eip-165)** permite registrar y detectar las interfaces y estándares que el contrato implementa, o implementará en el futuro.

- **[ERC725X](../lsp-background/erc725.md#erc725x---generic-executor)** es un ejecutor genérico que permite llamar a contratos externos con diferentes operaciones como [**CALL**](https://www.evm.codes/#f1), [**STATICCALL**](https://eips.ethereum.org/EIPS/eip-214) y [**DELEGATECALL**](https://eips.ethereum.org/EIPS/eip-7). También permite desplegar nuevos contratos con [**CREATE**](https://www.evm.codes/#f0) o [**CREATE2**](https://eips.ethereum.org/EIPS/eip-1014), o transferir valor a cualquier dirección (EOA o contratos inteligentes).

- **[ERC725Y](../lsp-background/erc725.md#erc725y---generic-data-keyvalue-store)** es un almacén genérico de clave-valor que permite **adjuntar cualquier información** al contrato inteligente incluso después de que haya sido desplegado.

- **[ERC1271](https://eips.ethereum.org/EIPS/eip-1271)** ayuda a **verificar la validez** de un mensaje y una firma.

- **[LSP1-ReceptorDelegado](../generic-standards/lsp1-universal-receiver.md)** permite **notificaciones sobre transacciones entrantes o salientes** y añade un manejo y comportamiento personalizados basados en estas transacciones.

- **[LSP14-Propiedad2-Pasos](../generic-standards/lsp14-ownable-2-step.md)** permite un **sistema seguro de gestión de la propiedad**.

- **[LSP17-ExtensiondelContrato](../generic-standards/lsp17-contract-extension.md)** permite **ampliar el contrato después de su despliegue** para soportar nuevos estándares y funcionalidades.

### ERC725X - Ejecutor Genérico

:::tip

Consulta el estándar **[ERC725](../lsp-background//erc725.md)** para más información.

Consulta las [**funciones de ejecución**](../smart-contracts/lsp0-erc725-account.md#execute) proporcionadas por **ERC725X** que permiten al contrato ejecutar múltiples operaciones.

Consulta las guías de **javascript** para conocer [**Cómo enviar tokens nativos**](../../guides/universal-profile/transfer-lyx.md) o [**Cómo llamar a la función de otro contrato**](../../guides/universal-profile/interact-with-contracts.md) utilizando la función execute.

:::

El estándar **ERC725X** permite a la cuenta realizar llamadas genéricas a otros contratos inteligentes, incluyendo la transferencia de tokens nativos. Las acciones externas pueden ejecutarse utilizando la función genérica `execute(...)` del contrato inteligente y las llamadas múltiples pueden realizarse con la función `execute(..)` **batch**, pero sólo el propietario de la cuenta puede realizar estas operaciones.

Además, también permite el despliegue de nuevos contratos inteligentes proporcionando el bytecode del nuevo contrato a desplegar como argumento a la función `execute(...)`. Los contratos pueden desplegarse utilizando los opcodes **CREATE** o **CREATE2**.

Están disponibles los siguientes tipos de llamadas (tipos de operación):

| Número de operación |                   Tipo de operación                    | Descripción                                                                                                         |
| :-----------------: | :----------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------ |
|        0            |          [`CALL`](https://www.evm.codes/#f1)           | Transferencia de tokens nativos o llamadas a funciones de contratos inteligentes.                                                           |
|        1            |         [`CREATE`](https://www.evm.codes/#f0)          | Crea un nuevo contrato inteligente basado en la dirección del contrato y el nonce.                                                |
|        2            |  [`CREATE2`](https://eips.ethereum.org/EIPS/eip-1014)  | Crea un nuevo contrato inteligente basado en la dirección del contrato, el código de bytes y la clave. La dirección puede estar predeterminada. |
|        3            | [`STATICCALL`](https://eips.ethereum.org/EIPS/eip-214) | Llama a otro contrato inteligente sin permitir ninguna modificación del estado durante la llamada.                       |
|        4            | [`DELEGATECALL`](https://eips.ethereum.org/EIPS/eip-7) | Ejecuta la función desde otro contrato, pero utiliza el contexto del contrato actual.                               |

#### Operación 0 - CALL

# ![ERC725X tipo de operación CALL](/img/standards/lsp0/LSP0-CALL.jpeg)

#### Operación 1 - CREATE

# ![ERC725X tipo de operación CREATE](/img/standards/lsp0/LSP0-CREATE.jpeg)

#### Operación 2 - CREATE2

# ![ERC725X tipo de operación CREATE2](/img/standards/lsp0/LSP0-CREATE2.jpeg)

#### Operación 3 - STATICCALL

# ![ERC725X tipo de operación STATICCALL](/img/standards/lsp0/LSP0-STATICCALL.jpeg)

#### Operación 4 - DELEGATECALL

# ![ERC725X tipo de operación DELEGATECALL](/img/standards/lsp0/LSP0-DELEGATECALL.jpeg)

### ERC725Y - Almacén Genérico Clave-Valor

:::tip

Consulta el estándar **[ERC725](../lsp-background//erc725.md)** para más información.

Consulta las funciones [**setData functions**](../smart-contracts/lsp0-erc725-account.md#setdata) proporcionadas por **ERC725Y** que permiten adjuntar datos al contrato.

Consulta las guías **javascript** para conocer [**Cómo editar un perfil (setData)**](../../guides/universal-profile/edit-profile.md) o [**Cómo leer de un perfil (getData)**](../../guides/universal-profile/read-profile-data.md).

:::

Una vez que un contrato inteligente se despliega con un conjunto específico de variables que contienen datos, no puede ser modificado para incluir nuevas variables. Esto puede ser un problema para las cuentas basadas en contratos inteligentes que necesiten almacenar más y más datos en el futuro.

ERC725Y estandariza un mapeo de claves de datos a valores de datos para almacenar datos dinámicamente, y tener la capacidad de añadir o eliminar datos a lo largo del tiempo sin necesidad de volver a desplegar el contrato. Da flexibilidad al almacenamiento del contrato.

- Las **Claves de datos** se representan como valores `bytes32`.
- Los **Valores de datos** bajo estas claves se almacenan como `bytes`.

![Almacenamiento de claves y valores ERC725Y frente al almacenamiento de contratos estándar](/img/standards/lsp0/LSP0-Storage.jpeg)

Los desarrolladores pueden acceder a los datos almacenados en el contrato a través de claves de datos en lugar de hacer referencia a la ranura de almacenamiento donde residen los datos.

Gracias al ERC725Y, los contratos son más interoperables, ya que su almacenamiento se representa de la misma manera. Los contratos y las interfaces pueden entonces leer y escribir datos desde o hacia el almacenamiento de la misma manera a través de las funciones [`getData(...)`](../smart-contracts/lsp0-erc725-account.md#getdata) y [`setData(...)`](../smart-contracts/lsp0-erc725-account.md#setdata).

### ERC1271

:::tip

Consulta el estándar **[ERC1271](https://eips.ethereum.org/EIPS/eip-1271)** para obtener más información.

Consulta la documentación de la función [**isValidSignature**](../smart-contracts/lsp0-erc725-account.md#isvalidsignature).

:::

A diferencia de las cuentas de propiedad externa (EOA), **los contratos inteligentes no pueden firmar mensajes**, ya que no disponen de claves privadas. Este estándar define una forma para que los contratos verifiquen si una firma y un mensaje proporcionado son válidos de acuerdo con la lógica del contrato. Habrá muchos contratos que quieran utilizar mensajes firmados para validar derechos de movimiento de activos u otros fines.

El **LSP0-CuentaERC725** implementa el estándar **ERC1271** de una manera flexible que permite la actualización futura cuando se establecen diferentes tipos de propietarios.

Cuando el propietario de la cuenta es una EOA, se utiliza el algoritmo **ECDSA** para recuperar la dirección del firmante a partir de la firma y el mensaje proporcionados, y la función `isValidSignature(..)` devolverá **valid** si la dirección del firmante recuperada coincide con la dirección del propietario.

Cuando el propietario es un contrato inteligente, la función `isValidSignature(..)` será llamada en el propietario y devolverá si la firma y el mensaje son **valid** de acuerdo con la lógica en `isValidSignature(..)` en el contrato propietario.

### LSP1 - UniversalReceiver

:::tip

Consulta el estándar **[LSP1-ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md)** para obtener más información.

Consulta las funciones [**universalReceiver functions**](../smart-contracts/lsp0-erc725-account.md#universalreceiver) proporcionadas por **LSP1** que permiten notificar las transacciones entrantes/salientes.

Consulta las guías **javascript** para saber [**Cómo configurar un ReceptorDelegadoUniversal construido por LUKSO**](../../guides/universal-receiver-delegate/set-default-implementation.md) o [**Cómo configurar tu propio ReceptorDelegadoUniversal**](../../guides/universal-receiver-delegate/accept-reject-assets.md).

:::

Este estándar permite que la cuenta sea notificada de transacciones entrantes tales como transferencia de tokens, transferencia de bóvedas, transferencia de información, etc. Las notificaciones son útiles para situaciones en las que los usuarios quieren personalizar la forma en que el contrato de su cuenta reacciona a ciertos tokens, ya sea rechazándolos u operando una llamada específica en cada token recibido.

El **[LSP0-ERC725Account](#)** implementa la función `universalReceiver(..)` que:

Emite un evento [`UniversalReceiver`](../smart-contracts/lsp0-erc725-account.md#universalreceiver-1) con el `typeId` y `data`, así como parámetros adicionales como la cantidad enviada a la función, el llamante de la función y el valor de retorno de los contratos delegados.

El `typeId` es un valor **bytes32** que representa el tipo de acción sobre la que se notifica. Por ejemplo, si quieres notificar a una cuenta sobre un tipo específico de token, puedes hacer un hash de la palabra **"TOKENXX "** que resultaría en un `bytes32`, y luego usarlo como `typeId`.

El campo `data` puede contener información relevante relacionada con el `typeId` utilizado cuando se llamó a la función `universalReceiver(...)`. En el caso de las transferencias de tokens, podría ser cualquier información cifrada, como el saldo del receptor, la hora, los derechos, etc.

El campo typeId proporciona un identificador único para el tipo de notificación, mientras que el campo data proporciona la información específica relacionada con la notificación. Esto permite una comunicación eficiente y efectiva de la información relacionada con el token, sin necesidad de un extenso análisis sintáctico o decodificación de los datos.

La función `universalReceiver(...)` y su evento `UniversalReceiver` son los mecanismos a través de los cuales una **LSP0-ERC725Account** puede recibir notificaciones. Los sitios web pueden monitorizar y escuchar el evento y los eventos anteriores para entender sobre qué ha sido notificada la cuenta.

# ![LSP0 being notified](/img/standards/lsp0/LSP0-Notification.jpeg)

Esta innovación es especialmente beneficiosa para todo tipo de contratos que tengan una conexión con la cuenta, especialmente los estándares de tokens, ya que agiliza la experiencia del usuario de blockchain al permitir que se notifique directamente al destinatario de un token.

Actualmente, para determinar qué tokens posee una dirección es necesario revisar todos los eventos de todos los contratos de tokens de la red blockchain y filtrar los tokens que posee la dirección en función de los eventos de esos contratos.

Sin embargo, con el evento **UniversalReceiver**, los contratos pueden llamar a la función `universalReceiver(..)` y emitir el evento en la propia cuenta. De esta forma, para determinar qué tokens posee una cuenta, basta con escuchar el evento UniversalReceiver emitido en esa cuenta. Este método es mucho más sencillo y eficiente.

# ![LSP0 siendo notificado](/img/standards/lsp0/LSP-Notification-Token.jpeg)

Además del evento **UniversalReceiver**, el propietario de la cuenta tiene la posibilidad de establecer en el almacenamiento de la cuenta las direcciones de contratos etiquetados como **ReceptoresUniversalesDelegados** (URD). Estos contratos pueden ser elegidos para ejecutarse en cada llamada a la función `universalReceiver(..)` o en un `typeId` específico pasado a la función.

Esto permite reaccionar a las llamadas, no sólo ser informado. Por ejemplo, si la cuenta recibe cualquier tipo de token, independientemente del typeId, podría especificar en el **ReceptorUniversalDelegado** principal que la transferencia se revierta automáticamente.

O, para un tipo específico de token representado por un `typeId` específico, la cuenta podría especificar en el **MappedUniversalReceiverDelegate** (Mapeado a un typeId específico) que el token debería ser automáticamente reenviado a una cámara acorazada que la cuenta posea.

# ![LSP0 reacting](/img/standards/lsp0/LSP0-Token-Reacting.jpeg)

Los contratos **ReceptorDelegadoUniversal**, **proporcionan interacciones opcionales** que permiten a la cuenta ir más allá de ser simplemente informada y proporciona una manera de responder activamente a diferentes tipos de notificaciones a medida que ocurren.

### LSP14 - Propiedad 2-Pasos

:::tip

Consulta el estándar **[LSP14 - Propiedad 2-Pasos](../generic-standards/lsp14-ownable-2-step.md)** para más información.

Consulta las [**funciones LSP14**](../smart-contracts/lsp14-ownable-2-step.md) que permiten transferencias de propiedad en 2 pasos.

Consulta las guías **javascript** para saber [**Cómo transferir la propiedad de un perfil**](../../guides/key-manager/upgrade-lsp6.md).

:::

Una cuenta que contiene activos valiosos y representa tu identidad digital debe ser segura para evitar errores que puedan resultar en su pérdida. Por lo tanto, debe existir un sistema de gestión de propiedad seguro para esta cuenta.

**LSP14-Propiedad 2-Pasos** es un estándar que permite transferir o renunciar a la titularidad de una cuenta mediante un proceso de 2 pasos, haciéndola más resistente a los ataques de phishing. Este estándar permite que cualquier dirección, como una EOA o un contrato inteligente, sea el propietario de la cuenta. El propietario puede ser un **contrato inteligente**, o un **multisig**, o un **GestordeClaves** que permita un control de acceso basado en permisos. (Consulta **[LSP6-GestordeClaves](../universal-profile/lsp6-key-manager.md)**)

![ERC725Y key-value store vs standard contract storage](/img/standards/lsp0/LSP0-Owner.jpeg)

La transferencia de propiedad se realiza en dos etapas, en la que se designa un propietario pendiente y, a continuación, en otra transacción, el propietario pendiente debe confirmar la aceptación de la propiedad. En el proceso de transferencia de propiedad, las 2 partes se notifican utilizando el estándar **[LSP1-ReceptorUniversal](#lsp1---universalreceiver)**.

#### Iniciar la transferencia

![ERC725Y key-value store vs standard contract storage](/img/standards/lsp0/LSP0-Transfer1.jpeg)

#### Aceptar propiedad

![ERC725Y key-value store vs standard contract storage](/img/standards/lsp0/LSP0-Transfer2.jpeg)

#### Transferencia Completada

![ERC725Y key-value store vs standard contract storage](/img/standards/lsp0/LSP0-Transfer3.jpeg)

El proceso para renunciar a la propiedad sigue una estructura similar, en la que se realiza una llamada inicial, seguida de un periodo de espera y un plazo específico durante el cual se puede renunciar a la propiedad antes de que se reinicie el proceso.

![Renounce Ownership](/img/standards/lsp0/LSP0-Renounce.jpeg)

### LSP17 - Extensión del Contrato

:::tip

Consulta el estándar **[LSP17 - ExtensiónContrato](../generic-standards/lsp17-contract-extension.md)** para más información.

Verifica la [**función fallback**](../smart-contracts/lsp0-erc725-account.md#fallback) que permite llamadas para las extensiones.

:::

Una vez que una cuenta basada en un contrato inteligente se despliega en la blockchain, no es posible modificar el contrato para añadir nuevas funciones nativas o cambiar el comportamiento de las existentes. Esto puede ser una limitación para estas cuentas, que pueden necesitar soportar nuevos casos de uso, funciones y estándares que puedan adoptarse en el futuro.

**[LSP17-ExtensiónContrato](../generic-standards/lsp17-contract-extension.md)** define un mecanismo para extender un contrato para soportar nuevos estándares y funciones mediante el uso de **extensiones**.

#### Compatibilidad con nuevas funciones

La **LSP0-CuentaERC725** contiene funciones básicas para interactuar con otras direcciones, almacenar y recuperar datos, verificar firmas, gestionar transacciones, gestionar la propiedad y comprobar la compatibilidad de la interfaz con las funciones enumeradas a continuación.

![Funciones básicas de LSP0](/img/standards/lsp0/LSP0-Functions.jpeg)

Para garantizar la longevidad y la evolución continua de la LSP0 como cuenta de blockchain, es importante que admita nuevas funciones que se estandarizarán en el futuro. Esto puede lograrse mediante el uso de contratos de extensión, que permiten al propietario de la cuenta añadir nuevas funcionalidades no soportadas de forma nativa por la LSP0.

![LSP0 ampliado con las funciones onERC721Received y validateUserOp](/img/standards/lsp0/LSP0-Extended.jpeg)

Por ejemplo, en la figura anterior, la LSP0 se amplió con la función `onERC721Received(..)` que permitirá al contrato recibir transferencias ERC721 seguras.

Utilizando estas extensiones, la cuenta puede ser actualizada con nuevas funciones y permanecer adaptable a los cambios en el ecosistema blockchain.

#### Admite nuevos estándares

La capacidad de añadir nuevas funciones a la LSP0 es crucial para su extensibilidad post-despliegue, pero también es importante que la LSP0 sea capaz de soportar los nuevos IDs de interfaz de cualquier estándar que se añada a través de extensiones. Inicialmente, el LSP0 soporta un conjunto de interfaces en el momento del despliegue:

![LSP0 base interfaceIds](/img/standards/lsp0/LSP0-SupportedInterface.jpeg)

Sin embargo, la cuenta puede declarar la compatibilidad con nuevos ID de interfaz después de haber sido ampliada. Esto es especialmente ventajoso para los contratos que comprueban si un contrato admite un ID de interfaz específico antes de interactuar con él.

![LSP0 Extended interfaceIds](/img/standards/lsp0/LSP0-Extended-Interfaces.jpeg)
