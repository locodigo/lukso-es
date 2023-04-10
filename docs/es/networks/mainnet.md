---
sidebar_position: 1
---

# Red principal

:::note
La Red Principal de LUKSO aún no ha comenzado. Por favor, mantente informado en [Red Pública de Pruebas L16](./l16-testnet/parameters).
:::

## Arquitectura

La Arquitectura Blockchain de LUKSO consta de tres clientes:

- El cliente de la cadena de balizas que ejecuta Casper the Friendly Finality Gadget (Casper FFG) como protocolo de consenso (`Casper Consensus`: <https://github.com/lukso-network/prysm>).
- The execution engine client (EVM) (`Smart Contract Execution`: <https://github.com/lukso-network/go-ethereum>)
- El cliente validador (`Validator`)

## Cómo convertirse en Validador de Génesis

LUKSO comenzará como una PoS Blockchain con un Conjunto Inicial de Validadores de Génesis al que cualquiera puede unirse.

Una vez desplegado en Ethereum, el contrato inteligente de validador de Génesis permitirá a los usuarios depositar LYXe y convertirse en validadores de Génesis para LUKSO Mainnet. Por cada validador que ejecute, deberá generar una clave de validador y depositar 32 LYXe. No habrá límite en el número de validadores que puedes ejecutar.

El plazo para convertirse en validador de Génesis será de unas 3 semanas antes del lanzamiento (o más si es necesario). Se requieren al menos **4.096 validadores de génesis** antes de que el Contrato Inteligente de Depósito del Validador de Génesis pueda ser congelado y el proceso de génesis pueda comenzar.

Una vez congelados, los participantes pueden generar dos archivos: genesis.ssz y genesis.json. Estos archivos serán el punto de partida de la red y determinarán el estado inicial de la misma.

Los depositantes tendrán a su disposición una dApp de depósito que lee del contrato inteligente de depósito Genesis Validator. El estado inicial de la red contendrá todas las claves del Validador de Génesis y estará disponible en forma de archivo genesis.ssz, que podrá descargarse una vez finalizado el plazo de depósito.

El segundo archivo, genesis.json, contiene el estado inicial de la cadena. Incluye los saldos iniciales y el suministro total de LYX. La comunidad podrá elegir entre 35 millones, 42 millones (sugerencia del equipo fundador) o 100 millones.

La hora de inicio de la red se definirá en los archivos de génesis. Probablemente será alrededor de 1 semana después de la congelación del Depósito de Validadores de Genesis. Los Validadores deberán tener listos sus nodos al menos un día antes del inicio de la red. Los nodos crearán y recibirán bloques automáticamente después de la hora de inicio de la red.

## Más información

- [Arquitectura de la Mainnet de LUKSO → Cadena de balizas Casper con ejecución EVM](https://medium.com/lukso/luksos-mainnet-architecture-casper-beacon-chain-with-evm-execution-f68f9ef7039a)
- [Actualización del progreso de la Mainnet de LUKSO nº 2](https://medium.com/lukso/an-update-on-the-road-to-mainnet-48d39ce411d7)
- [Actualización nº 1 del progreso de la Mainnet de LUKSO](https://medium.com/lukso/lukso-mainnet-progress-update-1-5d678e47a3eb)
- [Calendario y proceso de la Mainnet de LUKSO](https://medium.com/lukso/lukso-mainnet-timeline-and-process-dd997fe811c8)
