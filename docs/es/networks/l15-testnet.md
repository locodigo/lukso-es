---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# L15 Red Pública de Pruebas

:::danger LA RED DE PRUEBA L15 HA FINALIZADO.
La red de pruebas L15 ha sido sustituida por la red de pruebas pública [L16] (./l16-testnet/parameters), consulta la documentación sobre la red L16.
:::

Esta red es efímera, lo que significa que no está destinada a ser completamente estable y utilizable todavía para contratos inteligentes de prueba más persistentes. Asume que la red puede ser reiniciada en cualquier momento. La [Red Pública de Pruebas L16](./l16-testnet/parameters) está pensada como una red de pruebas persistente más estable antes de la red principal (aún no en funcionamiento).

# MetaMask

Para añadir la Red L15 a MetaMask, estos son los ajustes:

| Parámetro                      | Valor                                      |
| ------------------------------ | ------------------------------------------ |
| Nombre de red                  | L15                                        |
| Nueva URL                      | RPC https://rpc.l15.lukso.network          |
| ID de cadena                   | 23 (0x17)                                  |
| Símbolo de moneda              |  LYXt                                      |
| URL del Explorador de Bloques: | https://explorer.pandora.l15.lukso.network | 

Y si lo necesitas, [aquí tienes un tutorial sobre cómo hacerlo](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC).

## Activar un Nodo

<!-- Dado que estamos restableciendo la red, asegúrate de ejecutar `$ lukso reset all` y reinstalar el binario `lukso:

<Tabs groupId="operating-systems">
<TabItem value="linux" label="Linux">

```bash
$ lukso stop
$ lukso reset all
$ curl https://install.l15.lukso.network | bash
$ lukso start --node-name "SUSTITUIR-CON-NOMBRE-DE-NODO"
```

</TabItem>
<TabItem value="macos" label="MacOS">

```bash
$ sudo lukso stop
$ lukso reset all
$ sudo curl https://install.l15.lukso.network | bash
$ sudo lukso start --node-name "SUSTITUIR-CON-NOMBRE-DE-NODO"
```

</TabItem>
</Tabs>

Se trata de una operación única y es necesario para poder unirse a la diversión. -->

### Iniciar un Nodo de Archivo

<Tabs groupId="operating-systems">
<TabItem value="linux" label="Linux">

```bash
$ curl https://install.l15.lukso.network | bash
$ lukso start --node-name "SUSTITUIR-CON-NOMBRE-DE-NODO"
```

</TabItem>
<TabItem value="macos" label="MacOS">

```bash
$ sudo curl https://install.l15.lukso.network | bash
$ sudo lukso start --node-name "SUSTITUIR-CON-NOMBRE-DE-NODO"
```

</TabItem>
</Tabs>

El comando inicia tu nodo como nodo de archivo.

<!-- :::info

Por favor, ten en cuenta que actualmente no adjuntamos tu nodo a las páginas de estadísticas de [pandora](https://stats.pandora.l15.lukso.network) y [vanguard](https://stats.vanguard.l15.lukso.network). Esto se debe a que estas páginas no son capaces de monitorizar más de 100 nodos y el navegador empieza a congelarse. Ahora mismo estamos trabajando en una página de estado local para Pandora y Vanguard.

::: -->

<div style={{textAlign: 'center'}}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/G2DSFqYwteI" title="Reproductor de vídeos de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Conviértete en Validador

:::caution

Si actualmente estás operando un nodo, por favor ejecuta `lukso stop` (`sudo lukso stop` para MacOS) antes de continuar.

:::

1. Ve a la [Plataforma de Lanzamiento LUKSO](https://launchpad.l15.lukso.network) y sigue los pasos para convertirte en validador.
2. Puedes comprobar el estado de tu validador en [Vanguard Block Explorer](https://explorer.vanguard.l15.lukso.network). Puedes encontrar tu validador a través de su clave pública.

## Enlaces

- https://faucet.l15.lukso.network Para conseguir algunos LYXt (LYX de prueba)
- https://launchpad.l15.lukso.network El Launchpad para participar como validador

---

- https://stats.vanguard.l15.lukso.network Página de estadísticas de la cadena de bloques de consenso Vanguard
- https://explorer.vanguard.l15.lukso.network Página del Explorador de Bloques para la cadena de bloques de consenso Vanguard

---

- https://stats.pandora.l15.lukso.network Página de estadísticas de la cadena de bloques Pandora
- https://explorer.pandora.l15.lukso.network Página del explorador de bloques de la cadena de bloques de Pandora
- https://rpc.l15.lukso.network Punto final RPC público para el shard blockchain de Pandora

## Repositorios

Los archivos de configuración de la red:

- <https://github.com/lukso-network/network-configs>

Clientes:

- `Vanguard`: <https://github.com/lukso-network/vanguard-consensus-engine>
- `Pandora`: <https://github.com/lukso-network/pandora-execution-engine>
- `Orchestrator`: <https://github.com/lukso-network/lukso-orchestrator>
