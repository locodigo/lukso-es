---
title: Redes
description: Preguntas frecuentes de las redes de LUKSO
sidebar_position: 3
---

# Las preguntas más fecuentes

## GENERAL

### ¿Cuándo se lanzará la red principal de LUKSO?

La fecha de lanzamiento actual está prevista para 2022. Puedes encontrar la última actualización en nuestro [artículo de Medium](https://medium.com/lukso/an-update-on-the-road-to-mainnet-48d39ce411d7).

### He encontrado un error. ¿Cómo puedo reportarlo?

Puedes crear una incidencia en GitHub en el repositorio del proyecto relacionado. Si no puedes hacerlo, puedes enviarnos un mensaje a nuestro servidor [Discord](https://discord.gg/lukso).

## RED

### ¿Cuáles son los tiempos de bloque y de épocas previstos?

L16 funcionará con 6s por posición. Cada época contiene 32 posiciones.
Para la red principal aún no hemos decidido los valores.

### ¿Cuál es la tx/segundo esperada?

L16 comenzará con 60-80M de límite de GAS. El hardware debería seguir estando bien con 8-16GB y CPU de 4 núcleos.

### ¿Hay algún cambio en la red LUKSO en comparación con Ethereum 2.0? ¿Cuáles son esos cambios?

Nos gustaría seguir siendo lo más compatibles posible con Eth2.0. No esperes muchas diferencias en el mecanismo de consenso por ahora. Nuestro RnD 
de cara al futuro:

1. funcionalidad de retiro de fondos
2. fragmentación
3. disponibilidad de datos

### ¿Serán compatibles otros clientes además de geth (del mismo modo que Ethereum)?

Una de las ventajas de mantenernos cerca de Eth2.0 es que somos compatibles con todos los clientes. Actualmente estamos ejecutando en el lado de la baliza un cliente Lighthouse y vamos a Teku en un futuro próximo. Lo ideal sería que fuéramos compatibles con todos los clientes.

### ¿Cuál es la visión de LUKSO con respecto a la red? ¿Seguirá LUKSO las actualizaciones de la red Ethereum o finalmente se dividirá y seguirá su propio camino de nuevo después de mainnet con los clientes Pandora/Vanguard/Orchestrator?

Podría haber cambios en el futuro, pero siempre se trata de un equilibrio entre ejecutar sus propias ideas y desviarse de Eth2.0. 
Nuestros esfuerzos tras el lanzamiento de la red principal se decidirán en función de la dirección de desarrollo de Eth2.0.

### ¿Puedo participar con mis tokens sin ser un validador?

La participación está configurada de tal forma que se necesita un nodo validador. 
Es probable que haya reservas de participación, pero estas reducen la descentralización y no son ideales para una red muy descentralizada.

### ¿Va a implementar LUKSO el estándar EIP-1559?

Está previsto [EIP-1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md), pero se decidirá definitivamente antes del lanzamiento de la red principal.

## NODO

### ¿Una menor latencia influirá positivamente en mis recompensas?

Cuando llega la hora señalada para que un validador 
proponga un bloque, el validador tiene exactamente 6 segundos 
para votar. Hay dos situaciones que pueden hacer que un validador no llegue a ese momento: 

1. Su cadena no está sincronizada con la cabeza canónica. 
2. el validador ha necesitado más de 6s para proponer el bloque. 

No hay recompensas extra por ser muy rápido...

### ¿Cómo debo configurar mi nodo para maximizar mis "peers"?

En el caso normal, un nodo se conectará a un máximo de peers. 
Pero cada peer tiene un paso de evaluación que juzgará si el nodo es "digno", de lo contrario dirá "adiós". 
Puedes comprobar los registros para ver si recibes muchos de los mensajes de despedida.

Max peers puede ser ajustado en la configuración de su nodo, pero más peers aumentan el ancho de banda y no necesariamente conllevan beneficios.

### ¿Por qué hay una diferencia entre mis peers en el sitio web de estadísticas de ejecución y en el de estadísticas de consenso?

Con la bifurcación Bellatrix, Geth debe seguir la cadena de balizas. 
Se sincronizará por sí mismo sólo hasta la época final. 

Esto significa que una vez que se alcanza la finalidad no es tan importante cuántos peers tiene el nudo de ejecución. 
Los peers en ejecución y consenso no son necesariamente los mismos. No existe ningún mecanismo por el que el consenso le diga al nodo de ejecución con qué pares está conectado y viceversa.

### ¿Qué puertos deben estar abiertos en un nodo?

Lo mejor sería que abrieras los siguientes puertos y protocolos en la red para que tu nodo funcione correctamente.

```
tcp:30303
tcp:13000
udp:12000
udp:30303
```
### ¿Cómo puedo abrir mis puertos en mi máquina nodo? ¿Puedes describirlo para Mac y Linux
```
# Linux
El uso de lukso-cli abrirá los puertos automáticamente.
Esto se debe a la configuración subyacente de docker-compose que se ejecuta en modo "host". Si tienes un firewall configurado, por favor permite el tráfico para los puertos mencionados.
```

:::info
NOTA: Asegúrate de que también reenvías esos puertos en tu router.
:::

## VALIDADOR

### ¿Podemos confirmar que 1 validador = 32 LYX en la red principal?

La cantidad final de participación se basará en el precio LYXe y probablemente poco antes de de la red principal. Es muy probable que no sea de 32 LYX. Como la cantidad debe ser lo suficientemente alta para incentivar el buen comportamiento de los validadores. Si cuesta demasiado poco, la red se vuelve insegura.

### ¿Cuándo será posible retirar el LYX de un validador y cómo?

Eth2.0 planificó la funcionalidad de retiro con la fase 1. 
Estamos observando este tema muy de cerca. Idealmente
estamos satisfechos con la solución. Pero como ya hemos dicho, podríamos proponer una solución propia.

### ¿Hay un número mínimo de validadores que deba ejecutar?

No, puedes ejecutar tantos como quieras, incluso un solo validador.

### ¿Existe un límite máximo para el número de validadores que un nodo puede ejecutar, en relación con la descentralización?

No se indica con exactitud. Estábamos ejecutando un nodo con 60 validadores. Además de proponer bloques, el nodo de validación tiene funciones adicionales, como votar un bloque. Puede ocurrir que llegue a saturarse una posición. Pero también depende del tamaño de los validadores en total. Si hay muchos validadores 
los deberes podrían ser muy bajos para un nodo.

### ¿Hay alguna ventaja en dividir los validadores en varios nodos en lugar de ejecutar todos los validadores en un solo nodo?

Ejemplo: Un nodo con 200 validadores o dos nodos con 100 validadores cada uno.

Se trata de un problema de optimización que afecta a 
muchos factores: Precio por nodo. Densidad total de validadores. 
Puede ser razonable ejecutar 200 validadores en un nodo, pero 
no lo recomendamos.

### ¿Se obtienen mayores rendimientos si se depositan más de 32 LYX en un validador?

No. 

### ¿Puedo iniciar validadores adicionales con las recompensas que estoy recibiendo en mi saldo de validador?

Esto vuelve a la pregunta de si se aplica la opción de retiros.

### ¿Pueden explicar el proceso para retirar y vender participaciones sin que deje de funcionar el validador?

Por el momento esto no está disponible.

### ¿Qué aspecto deben tener los registros en cada caso para tener la certeza de que todo va sobre ruedas?

A lo largo de los años hemos desarrollado un sentido para los registros bonitos y
recomendaríamos acostumbrarse a ellos primero tratando de entenderlos 
y eventualmente haciendo preguntas. Además, proporcionaremos explicaciones 
para diferentes advertencias y errores en el futuro. Pero lo ideal sería que los
registros se puedan omitir - otras herramientas deberían proporcionar visibilidad 
(Grafana,Exploradores,...)

### ¿Es posible comprobar si un validador está funcionando correctamente y cuáles son las recompensas sin usar Grafana/Prometheus?

Puedes utilizar la CLI. Estamos mejorando el comando:

```
lukso network validator describe
```

## SEGURIDAD

### ¿Se puede rastrear la ubicación de mi nodo?

Sí, ya que expones tu IP.
