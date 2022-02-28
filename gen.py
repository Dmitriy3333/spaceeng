x = 16**8*4**20-4**5-64
a = 4
c = ''

while x > 0:
  c = str(x%a) + c
  x // a

print(c.count('3'))