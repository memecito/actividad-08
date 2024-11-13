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

## Consulta todos los posts por autor

## Consulta Autor
{{url}}/:idAutor
Metodo: get

retorno: un json con un cliente

## Actualizar Autor

## Borrar Autor



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

## Actualizar Post

## Borrar Post


# API Categoria
url: /api/categoria

## Registro

## Consulta todas las categorias

## Consulta por categoria

## Actualizar Categoria