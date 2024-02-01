# meli-search-api

#### Notas del desarrollador:

Debido a que este proyecto se basa en un challenge técnico, se omitieron algunas buenas prácticas de desarrollo por temas de practiciadad, tiempo de entrega vs tiempo disponible del dev, etc:

- Versionado en ramas, pull request y code review.
- Testing.
- CD/CI

### Uso

Crear un archivo `.env` o configurar las siguientes variables de entorno:

```
MELI_ITEMS_API = "https://api.mercadolibre.com"
```

El proyecto se despliega en el puerto `3001` para no tener conflictos al levantar una app Node para frontend como React o NextJS que utilizan el mismo puerto.

### Recursos

La **API** disponibiliza dos recursos `GET` para ser consumidos:

**GET /items?q="query_string"**

```

Response:
{
  author: {
    name: string;
    lastName: string;
  };
  categories: [string];
  items: [
        {
        id: string;
        title: string;
        price: {
            currency: string;
            amount: number;
            decimals: number;
        };
        picture: string;
        condition: string;
        free_shipping: boolean;
        }
    ]
}
```
