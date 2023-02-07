# README

- [1. Instrucciones sobre cómo documentar](#1-instrucciones-sobre-cómo-documentar)
  - [1.1. Mecanismo de versionado](#11-mecanismo-de-versionado)
- [2. Documentación](#2-documentación)
  - [2.1. Documentación inline](#21-documentación-inline)
  - [2.2. Memoria de tu trabajo](#22-memoria-de-tu-trabajo)

## 1. Instrucciones sobre cómo documentar

La primera consideración es que NO debes editar ningún fichero de README.md para tu propia documentación. Si quieres corregir algún error ortográfico o de cualquier tipo, realízalo a través de un pull request.

Para documentar tu código debes contemplar los siguientes aspectos:

### 1.1. Mecanismo de versionado

Todos los cambios notables en este proyecto deberán ser documentados en el fichero `CHANGELOG.md`.

El formato está basado en [*Keep a Changelog*](https://keepachangelog.com/en/1.0.0/),
y este proyecto se adiere a [*Semantic Versioning*](https://semver.org/spec/v2.0.0.html).

Puedes y debes alterar este fichero conforme vayas generando versiones:

Cuando tengas un revisión de tu código que consideres estable, etiquétala de la siguiente manera según trabajes o no en equipo.

> `release/usuario/vx.y.z-` o `release/equipo/vx.y.z`

- Donde `x`, es un número que incrementarás empezando por el 1, cuando liberes una release (se te indicará cuando suceda)
- Donde `y`, es un número que incrementarás empezando por el 0, cuando superes un [HITOS](Hitos.md)
- Donde `z`, es un número que incrementarás empezando por el 0, cuando realices correcciones en tu programa o refactorizaciones. (aspectos NO funcionales)
- Donde `usuario`, es el indentificador que se te ha proporcicionado en clase. O bien, si trabajas formando un equipo con más compañeros, `equipo` será el nombre del grupo acordado en clase con el profesor.

**Importante:** Sé estricto y preciso formando la cadena de la versión. Utiliza caracteres [ASCII](https://es.wikipedia.org/wiki/ASCII) (sin acentos). Pon tu nombre con la primera letra en minúscula siguiendo el resto con el estilo [lowerCamelCase](https://es.wikipedia.org/wiki/CamelCase). Recuerda que esto es importante porque pueden existir mecanismos de automatización de revisión de ejercicios.

```Shell
# Ejemplo
git tag release/rainieroDeMonaco/v0.1.0
```

## 2. Documentación

### 2.1. Documentación inline

**Es necesario documentar los métodos de interfaz**.

También realizar comentarios sobre tu código de forma que facilite su compresión.

### 2.2. Memoria de tu trabajo

Puedes realizar una memoria del trabajo realizado en el fichero `doc/Work.md`
