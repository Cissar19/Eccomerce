# Eccomerce Contreras

Este proyecto fue realizado para aprobar el curso de ReactJs en CoderHouse. Se utilizaron herramientas de ReactJs tales como, componentes JSX,Props, Hooks(useState, useEffect, useParams),Router-Dom, Context, Asincronia y Firebase.

El proyecto simula un eccomerce de venta de Comics y Funkos. En el inicio se renderizan las dos categorias juntas. Pero tambien esta la opcion de visitar cada categoria por separada.

## Componentes

Los componentes principales del Eccomerce son:
-ItemListContainer
-ItemDetailContainer
-Item
-Services
-CartContainer

### Componente ItemListContainer

Dentro del componente ItemListContainer se encuentra el uso del Hook useEffect ya que es necesario dado que se necesita almacenar y renderizar de forma correcta el nuevo componente.

Tambien se puede encontrar el componente Item el cual se mapea para asi iterar el array, El componente Item tambienrecibe props :

            <Item
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                detail={item.detail}
                imgurl={item.imgurl}
            />

### Componente Item
En el componente Item, se imprimen con jsx las props recibidas anteriormente.

### ItemDetailContainer
Este componente se encarga de renderizar el detalle del producto, una vez que seleccionamos el boton de "Más Detalles" (Ubicado en Item). Este componente llama a otro (ItemDetailContainerCount) que se encarga con logica Js de contabilizar los eventos onclick de stock.

### Header
Dentro de la carpeta Header se puede encontrar el componente Navbar, que ayuda con la navegacio del sitio. Se aplico Router-Dom para que no existieran recargas, es decir, que todos los href se remplazaron con Link

### Context
Se encarga de globalizar todo lo que necisitemos en otros componentes, en este caso. Se utilizo para compartir a otros componentes toda la logica del carrito de compras. Como por ejemplo AddItem, ClearCart, RemoveItem, etc...

### Firebase
Se subio toda la data a una db, y desde ahi se consumen todos los datos del eccomerce, tambien crea la orden de compra con su id respectivo





