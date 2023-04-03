---
title: Solución de problemas
sidebar_position: 6
---

# Solución de problemas con la Red de Pruebas L16

## Permiso denegado

Si recibes un error indicando que el permiso está denegado utiliza `sudo` antes de tu comando.

## Problemas de sincronización

Cuando tu nodo no se sincroniza usa los siguientes pasos. Todos los pasos tienen que ser ejecutados en el directorio de tu nodo así que primero ```cd``` al directorio correcto.

Actualiza el CLI de LUKSO
```
sudo curl https://install.l16.lukso.network | sudo bash
```
Actualiza los archivos de tu nodo
```
sudo lukso network update
```
Reinicia tu nodo
```
sudo lukso network restart
```
Pon en marcha tu validador
```
sudo lukso network validator start
```

Pasará algún tiempo antes de que estés completamente sincronizado y aparezcas en las páginas de estadísticas. Puedes ver el progreso de la sincronización en tus [registros](./logs-stats-monitoring.md).

## Bootnodes

Puedes actualizar Bootnodes con

```
lukso network update
```

Es necesario reiniciar el nodo para que los cambios surtan efecto.

```
lukso network restart
```

#### Cambiar el nombre del nodo

Si quieres cambiar el nombre de tu nodo puedes hacerlo en el archivo `node_config.yaml`.

```sh
sudo nano node_config.yaml
```

Cambia el nombre del nodo, ciérralo con `ctrl+X` y guárdalo.


## Se añadirán más soluciones si es necesario.