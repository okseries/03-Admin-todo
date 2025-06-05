# Development
pasoas para levantar la app en desarrollo


1. Levantar la base de datos 
```bash
docker compose up -d
```

2. renobrar el .env.template a .env
3. Reemplazar las variables de entorno

# Prisma commands

```bash
npx prisma init
npx prisma migrate dev init
npx prisma generate
```


4. Ejecutar el seed para [ingresar datos iniciales en la bd](http://localhost:3000/api/seed)




