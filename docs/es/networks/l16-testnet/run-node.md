---
title: Ejecutar un nodo
sidebar_position: 2
---

# Ejecutar un nodo

## Requisitos del sistema

| Parámetro                 | Valor          |
| ------------------------- | -------------- |
| Sistema Operativo         | Linux o MacOS |
| Número de núcleos de CPU  | 2              |
| RAM                       | 16 GB          |
| SSD                       | 100 GB         |

:::info
Los nuevos chips M1 de Apple no están soportados de forma nativa por nuestro cliente de nodo. Sin embargo, puedes seguir [esta guía](https://medium.com/@luki3k5/running-lukso-node-on-m1-mac-acf92d433a38) para ejecutarlo utilizando Rosetta, el software de emulación integrado de Apple.
:::

## Ports

| Puerto  | Protocolo | Cliente                   | Descripción               |
| ------- | --------- | ------------------------- | ------------------------- |
| 30303   | TCP       | sincronización geth       | puerto debe estar abierto |
| 30303   | UDP       | localización geth         | puerto debe estar abierto |
| 13000   | TCP       | sincronización con baliza | puerto debe estar abierto |
| 12000   | UDP       | localización de la baliza | puerto debe estar abierto |

## Configuración del Entorno Linux

Para obtener instrucciones sobre cómo configurar una Mac, consulta la sección [Configuración para MacOS](#macos-system-setup).

### Configurar Firewall

Denegar todo el tráfico entrante por defecto

```sh
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

Permitir el tráfico para los puertos enumerados anteriormente.

```sh
sudo ufw allow 30303/tcp
sudo ufw allow 30303/udp
sudo ufw allow 13000/tcp
sudo ufw allow 12000/udp
```

Puedes reenviar puertos adicionales, utilizando el siguiente comando:

```sh
sudo ufw allow [replace_with_your_ssh_port]/tcp/udp
```

Esto puede ser útil para configurar tu conexión ssh o para monitorear.

Activar cortafuegos

```sh
sudo ufw enable
```

:::info

NOTA: Asegúrate también de configurar tu router para que reenvíe estos puertos.

:::

Puedes seguir esta guía [Port Forwarding](https://github.com/KEEZ-RobG/node-guide/blob/main/PortForward.md) autorizada por la comunidad.

### Instalar Dependencias

1. [curl](https://curl.se/)
2. [Docker](https://docs.docker.com/get-docker/)
3. [Docker Compose](https://docs.docker.com/compose/)

#### Instala curl

```sh
sudo apt-get -y update
sudo apt-get -y install curl
```

#### Instala Docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

#### Instala Docker Compose

```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose --version
```

## Ajustes para MacOS

### Configurar Firewall

Esta sección está en preparación

:::info

Esta sección está en preparación

:::

### Instala Dependencias

1. [Homebrew package manager](https://brew.sh)
2. [curl](https://macappstore.org/curl/)
3. [Docker Desktop for Mac](https://docs.docker.com/desktop/mac/install/)

#### Instala Homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Instala Curl

```sh
brew install curl
```

#### Instala Docker Desktop para Mac

Ve a https://docs.docker.com/desktop/mac/install/ e instala la aplicación.
No es necesario instalar Docker Compose por separado.

:::info
Abre la aplicación Docker Desktop tras la instalación desde la carpeta de aplicaciones de tu Mac
:::

## Instala la interfaz de línea de comandos (CLI) de LUKSO

Crea un directorio:

```sh
mkdir lukso-l16-testnet
```

y navega hasta él en tu terminal utilizando el comando `cd`.

```sh
cd lukso-l16-testnet
```

A continuación, instala [LUKSO CLI](https://github.com/lukso-network/lukso-cli) utilizando el script de instalación:

```sh
sudo curl https://install.l16.lukso.network | sudo bash
```

#### Comprueba la versión de LUKSO CLI

```sh
lukso -v
```

El resultado tiene que ser v.0.4.3 o superior.

## Inicializar la red

```sh
sudo lukso network init --chain l16
```

El CLI te pedirá que configures el nombre de tu nodo.

## Inicia tu nodo

Puedes iniciar tu nodo con:

```sh
sudo lukso network start
```

#### CComprueba tu nodo

Espera 1 hora y comprueba si tu nodo se ha sincronizado en esta página de estadísticas:

- [https://stats.execution.l16.lukso.network](https://stats.execution.l16.lukso.network)

Inmediatamente después de arrancar tu nodo puedes comprobar el proceso de sincronización en tus [registros](./logs-stats-monitoring.md).

## Detén tu nodo

```sh
sudo lukso network stop
```

:::tip ¿Quieres ejecutar un nodo validador?

Si quieres, ya estás preparado para ejecutar validadores en tu nodo. Consulta el tutorial en la página [validador](./become-validator.md).

:::

## ¿Necesitas ayuda?

Haz tu pregunta en el canal de validadores en el [servidor oficial de Discord de LUKSO](https://discord.gg/u7cmyUyw8F).
