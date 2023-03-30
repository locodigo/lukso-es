---
title: Perfil Unviersal
description: Preguntas frecuentes sobre el Perfil Universal
sidebar_position: 2
---

# Las preguntas más frecuentes

## ¿Dónde están mis claves? ¿Puedo utilizar MetaMask o un monedero físico?

Cuando creas un Perfil Universal desde [UniversalProfile.cloud](https://universalprofile.cloud) o [The Dematerialised](https://thedematerialised.com/), se crea un monedero en el `localStorage` de tu navegador. Se te envía por correo electrónico un enlace de acceso que contiene una clave privada cifrada.
La copia de seguridad por correo electrónico es un método temporal para controlar tus claves mientras el equipo de LUKSO trabaja en herramientas personalizadas para gestionar tu cuenta de Perfil Universal. Estos sitios web aún no admiten MetaMask ni monederos de hardware.

Si eres un desarrollador de dApp, puedes conectar tu dApp a MetaMask y firmar/enviar transacciones desde el EOA proporcionado por MetaMask. Necesitarás conectar MetaMask a la [L14 Testnet](../networks/l14-testnet.md) y probablemente enviar la transacción a través del [Gestor de Claves](../standards/universal-profile/lsp6-key-manager.md) que posee el Perfil Universal. También necesitarás saber con qué dirección de contrato inteligente de Perfil Universal puede interactuar el EOA proporcionado por MetaMask.

## ¿Puedo enviar ETH/Token/NFT de Ethereum a mi dirección de Perfil Universal?

Tu contrato inteligente de Perfil Universal está desplegado en la red [LUKSO L14](../networks/l14-testnet.md), una red diferente a la red principal de Ethereum. Por lo tanto, no es posible enviar ETH a tu dirección de perfil universal. Los usuarios perderán sus activos si envían ETH, tokens o NFT desde la red principal de Ethereum a su dirección de contrato inteligente de Perfil Universal.

## ¿Se migrarán mi Perfil Universal y mis activos a la red principal?

LUKSO migrará a la red principal todos los Perfiles Universales creados en:

- [The Dematerialised](https://thedematerialised.com)
- [Perfil Universal](https://universalprofile.cloud)

La migración incluye todos los NFT emitidos por [LUKSO](https://lukso.network/) y [The Dematerialised](https://thedematerialised.com).

Si tu app despliega sus contratos y Perfiles Universales, tú serás el responsable de migrarlos a la red principal.
