from PIL import Image

im = Image.open("Baraja_española_completa.png")
print(im.format, im.size, im.mode)

for x in range(0,2496,208):
    for y in range(0,1595,319):
        carta = im.crop((x,y,x+208,y+319))
        carta.save("{}-{}.png".format(x,y),"PNG")
