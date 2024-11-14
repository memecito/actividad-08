# API Autores
url /api/autores

## Registro
{{url}}/
Metodo: post

Body: usuario, email, imagen

retorno: json con el usuario registrado, mediante una consulta de autor por id

## Consulta todos
{{url}}/
Metodo: get

retorno: un json con un array que conteniene todos los clientes



## Consulta Autor
{{url}}/:idAutor
Metodo: get
Retorno: un json con el autor

## Consulta Autores post
{{url}}/autores/post
Metodo: get
retorno: un json con un array donde tenemos TODOS los autores y dentro de estos los post que ha escrito

## Actualizar Autor

## Borrar Autor
{{url}}/:idautor
Metodo: delete

elimina el autor y devuelve un mensaje de 'Autor eliminado'



# API Posts
url: /api/post

## Registro
{{url}}/
Metodo: post

body:
{
    titulo: string
    descripcion: string
    fecha_creacion: date
    categoria: string
    autor_id: number
}

Resultado: Consulta con el post creado

## Consulta por Autor
{{url}}/autor/:idautor
metodo: get

Devuelve un json con el autor y un array con todos los post, en caso de que no tenga todavia ningun post devuleve el array interno vacio
## Consulta todos los posts por autor
{{url}}/autores
Metodo: get

Devuelve un array con los autores que tienen almenos un post

## Actualizar Post

## Borrar Post


# API Categoria
url: /api/categoria

## Registro

## Consulta todas las categorias

## Consulta por categoria

## Actualizar Categoria