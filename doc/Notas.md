# Notas

## Baraja española

Para realizar el ejercicio fue necesario disponer de una [baraja española completa](https://commons.wikimedia.org/wiki/File:Baraja_española_completa.png), con sus cuatro palos (oros, copas, espadas y bastos) y sus 12 cartas por palo, incluyendo los ochos y nueves (en muchos juegos se prescinden de ellos) y las figuras (sota, caballo y rey). También se necesita la imagen del reverso de las cartas y una carta en blanco.

El recurso de esta baraja aparece en un único fichero de imagen. Esto es porque se suele utilizar una técnica denominada *CSS Image Sprites*, que se emplea para minimizar las latencias que se ocasionan por obtener las imágenes entre cliente y servidor una por una. Tienes más información al respecto:

- [CSS Sprites: What They Are, Why They’re Cool, and How To Use Them](https://css-tricks.com/css-sprites/)
- [CSS Image Sprites](https://www.w3schools.com/css/css_image_sprites.asp)
- [CSS Sprites Generator](https://www.toptal.com/developers/css/sprite-generator/)

Para simplificar el ejercicio y mejorar su comprensión se ha evitado emplear *CSS Image Sprites*, generando una imagen por cada carta.

Para realizar esto (subdividir la imagen de las cartas) se ha empleado un [script escrito en Python](./res/des-sprites.py).
