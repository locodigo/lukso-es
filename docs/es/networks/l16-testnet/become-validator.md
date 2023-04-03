---
sidebar_position: 3
---

# Conviértete en validador

:::info
Antes de ejecutar validadores en tu nodo, asegúrate de que tu nodo se está ejecutando y funciona correctamente. Para más información, consulta la página [Ejecutar un nodo](./run-node).
:::

## Configurar Validador

```sh
cd lukso-l16-testnet
sudo lukso network validator setup
```
Esto creará un almacén de claves y una cartera de transacciones. El propósito de la cartera de transacciones es llamar y pagar la transacción de depósito.

:::info
Introduce una contraseña y guárdala en algún sitio.
:::

:::danger
No elimines nunca los siguientes archivos si has depositado tus validadores: keystore, transaction_wallet y deposit_data.json.
:::

## Cantidad de validadores

Elige cuantos validadores quieres ejecutar, por cada validador necesitas tener 220 LYXt

## Mnemónico

Si es la primera vez que configuras tus validadores, elige no utilizar un Mnemónico existente.

Elige crear una Mnemónica separada para retirar.

La Mnemónica aparecerá en su archivo `node_config.yaml`.

Abre tu `node_config.yaml`.
```
nano node_config.yaml
```

Copia tus Mnemónicos y guárdalos en algún lugar seguro y sin conexión.

## Comprueba tu saldo
Comprueba si el monedero tiene fondos suficientes:

```sh
lukso network validator describe
```

Visita el [Grifo](https://faucet.l16.lukso.network) y pega la dirección pública de la cartera de transacciones en el campo y elige la cantidad de LYXt que quieres recibir.

:::info
Transfiere **suficientes** (#validadores x staking_amount **+ LYXt extra para pagar las comisiones de depósito**) fondos a la dirección pública del monedero de la transacción.
:::


## Enviar la transacción

### Realizar un simulacro primero

```
lukso network validator deposit --dry
```

Esto le dará la posibilidad de comprobar lo que va a ocurrir sin ejecutar una transacción.

### Depositar tus validadores

:::danger
Si estás 100% seguro de que todo es correcto puedes depositar tus LYXt, perderás todos tus LYXt si te equivocas.
:::

```
lukso network validator deposit
```

Pueden pasar hasta ocho horas antes de que tu validador se active, pero mientras tanto ya puedes iniciarlo.

Una vez depositado LYXt asegúrate de crear una copia de seguridad.

```
lukso network validator backup
```

Guarda el archivo **node_recovery.json** en algún lugar seguro y sin conexión.

## Iniciar el nodo validador

```
sudo lukso network start
```

```
sudo lukso network validator start
```

Comprueba el estado de tu validador, puede tardar hasta 8 horas en activarse.

```
lukso network validator describe
```

Asegúrate de que todo funciona correctamente comprobando las páginas de estadísticas:

- [Estadísticas de ejecución](https://stats.execution.l16.lukso.network)
- [Estadísticas de consenso](https://stats.consensus.l16.lukso.network)

También puedes comprobar tus [registros](./logs-stats-monitoring.md).

## Terminología

### Nodo Validador

**Nodo Validador** es una combinación de servicios y un almacén de claves subyacente que si se ejecutan juntos están
sincronizando, validando y proponiendo bloques. En la mayoría de los casos puede describirse como un directorio que contiene  
toda la información necesaria para _ejecutar_ este nodo. En LUKSO el directorio tiene la siguiente estructura:

- **configs**
  - **configs.yaml** // configuración del servicio de consenso
  - **genesis.json** // configuración del servicio de ejecución
- datos
  - **datos_ejecución** // db del servicio de ejecución
  - **datos_consenso** // db del servicio de consenso
  - **validator_data** // db del servicio de validación
- **keystore**
  - **prysm/direct/account/all-accounts.keystore.json** // almacén de claves del validador
  - ...
  - **password.txt** // contraseña del almacén de claves
- **docker-compose.yaml** // describe cómo ejecutar las imágenes docker
- **node_config.yaml** // valores ajustables sobre cómo ejecutar los nodos
- **.env** // archivo autogenerado derivado de **node_config.yaml**

### Validator Keystore

El **Validator Keystore** es un directorio con claves privadas en formatos para el respectivo servicio de validador
(Teku, Lighthouse, Prysm,...). El keystore tiene un número fijo de claves. Si necesitas cambiar
el número de claves **debes** crear un nuevo keystore. Siempre hay **un** **Validator Keystore** para
un **Nodo Validador**.

### Validator Key

La **Validator Key** es una clave privada que puede tener un saldo activo y se utiliza para firmar atestados
y bloques propuestos. La clave puede tener una cantidad arbitraria de LYX depositados pero **no** cambiará la recompensa.
Es posible depositar LYX varias veces en esta validator key y eso es importante para el caso de que la **Validator Key** falte a sus obligaciones y pierda saldo.

### Validator Key State

El **Validator Key State** es el estado de una clave en particular. Un **Validator Keystore** puede tener muchas
claves en varios estados. Cuando se crean por primera vez, todas las **Validator Keys** están en el estado
NOT_DEPOSITED. (NOTA: Si el almacén de claves fue recreado el estado puede diferir para algunas claves)

| Estado        | Acitvado por                                                  | Comentarios                                                                           |
| ------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| NOT_DEPOSITED | ...                                                           | El keystore se ha creado por primera vez                                              |
| PENDING       | Se realizó un depósito con _importe mínimo de participación_. | Existe una participación probada depositada en el Contrato de Depósito                |
| ACTIVE        | La red de consenso observó el depósito                        | El validador podrá ser elegido para proponer y atestiguar en las próximas épocas      |

## Cómo se crean las Validator Keys

Una **Validator Keys** siempre forma parte de un **Validator Keystore** - como una única clave o como una combinación de muchas. Las claves
son derivadas por un [Mnemonic](https://wolovim.medium.com/ethereum-201-mnemonics-bb01a9108c38).
Un Mnemonic puede crear potencialmente una cantidad infinita de claves. Es importante entender que
estas claves están indexadas. Existe la posibilidad de crear (teóricamente) un cierto rango.

Una vez que se conoce una mnemónica la creación de **Validator Keystores** es **no** aleatoria sino **determinista**.

### Un ejemplo

Dado un mnemónico _m_. Creamos un keystore de la posición 0 a la 2. Esto podría resultar en:

- **Keystore A**
  - Key0: 0x8154..12
  - Key1: 0x7361..45
  - Key2: 0x7481..fe

Ahora supongamos que borramos este keystore, y creamos uno nuevo de la posición 1 a la 3. Esto resulta en:

- **Keystore B**
  - Key1: 0x7361..45
  - Key2: 0x7481..fe
  - Key3: 0x78ca..89

Como puedes ver la Clave1 y la Clave2 son las mismas en **Keystore A** y **Keystore B**. Este mecanismo
proporciona un gran poder para reorganizar la configuración de los nodos.

### Ejemplo de configuración de nodos

Supongamos - dado un mnemónico _m_ - que queremos crear 2 nodos con 30 claves en
**Nodo A** y 16 claves en el otro **Nodo B**. Dado nuestro mnemónico _m_ tendríamos
por ejemplo, la siguiente configuración:

**Nodo A** tiene un almacén de claves con claves desde la posición _0_ hasta la posición _29_.
**Nodo B** tiene un almacén de claves con claves desde la posición _30_ hasta la posición _45_.

Ahora supongamos que queremos reordenar los **Validator Keys** teniendo la misma cantidad de claves en ambos nodos.

Deberíamos

1. Detener los nodos validadores
2. Borrar los keystores
3. Vuelve a crear los keystores con el mismo mnemónico **m**
4. Arrancar de nuevo los nodos

La configuración podría ser

**El nodo A** tiene un keystore con claves desde la posición _0_ hasta la posición _22_.
**El nodo B** tiene un keystore con claves desde la posición _23_ hasta la posición _45_

## ¿Necesitas ayuda?

Haz tu pregunta en el canal de validadores del [servidor oficial de Discord de LUKSO](https://discord.gg/u7cmyUyw8F).
