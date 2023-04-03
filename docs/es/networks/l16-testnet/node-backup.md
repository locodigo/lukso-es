---
title: Copia de seguridad y recuperación
sidebar_position: 4
---

# Copia de seguridad y recuperación de su validador

Hemos hecho que sea sencillo y directo recuperar un nodo con sus validadores cuando tu antiguo nodo ya no funciona o quieres transferirlo todo a una nueva máquina.

## Keystore

 el keystore es un derivado de estos 4 valores:

* **ValidatorMnemonic** - la semilla para tus claves validadoras
* **WithdrawalMnemonic** - que se necesita para retirar sus apuestas
* **KeystoreIndexFrom** y **KeyStoreIndexTo** - las posiciones clave que elegiste para crear un keystore con x cantidad de claves validadoras.

Si haces una copia de seguridad de estos 4 valores y los almacenas de forma segura, siempre podrás recuperar la configuración de tu validador.

## Copia de seguridad del almacén de claves

Primero explicamos como hacer un respaldo y transferir los archivos del keystore a otra máquina.

El CLI de LUKSO ofrece 2 comandos para hacer un respaldo y recuperar este respaldo en una nueva máquina.

Primero explicaremos el comando backup:

```bash
lukso network validator backup
```
Esto producirá un archivo de recuperación **"node_recovery.json con "** exactamente estos cuatro valores.

Utiliza este comando de copia de seguridad después de haber configurado con éxito tu nodo y validadores en tu máquina. Guarda este archivo en algún lugar seguro y sin conexión.

## Arranca tu nuevo nodo

Comienza siempre en tu nueva máquina con la instalación de LUKSO CLI, después necesitas inicializar la red antes de poder recuperar tus antiguos validadores:

```bash
lukso network init --chain l16
```

## Recupera tus validadores con el archivo de respaldo
```bash
echo CONTENIDO_DEL_ARCHIVO_JSON_DE_RESPALDO > node_recovery.json
```
```bash
lukso network validator recover --path ./node_recovery.json
```
**OR**

Tranfer **node_recovery.json** from the place where you stored it to your machine and add it to your path in the `lukso network validator recover` command:

Example:
```
lukso network validator recover --path /home/USER/lukso-node/node_recovery.json
```
Cambia **USER** por el nombre de usuario de tu cuenta.

Esto recreará tu configuración y recuperará tu validador.


:::danger
NOTA

* El comando de recuperación sólo funcionará si **no** has utilizado antes el comando `lukso network validator setup`. Así que debería ocurrir inmediatamente después de inicializar el nodo con `lukso network init --chain l16`.
* **NUNCA** ejecutes los 2 nodos al mismo tiempo - serás penalizado. Asegúrate de que has **detenido** tu nodo existente antes de instalar y recuperar tu nuevo nodo. Asegúrate también de que tus viejos contenedores e imágenes Docker están borrados.
:::
