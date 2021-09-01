import string as s 
from random import*
ch = s.ascii_letters + s.digits 
password = "".join(choice(ch) for r in range(randint (8,16))) 
print(password)

