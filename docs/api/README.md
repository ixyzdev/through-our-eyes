A continuación tienes un **documento claro y utilizable** para **entender y usar los parámetros de Google Books API**.
Está pensado como **referencia directa** para tu endpoint y para n8n.

---

# Google Books API — Guía de parámetros (`volumes`)

API base (endpoint principal):
**Google Books**

```
GET https://www.googleapis.com/books/v1/volumes
```

Todos los parámetros se envían como **query parameters**.

---

## 1. Parámetro obligatorio

### `q` — Query de búsqueda

**Obligatorio.** Define qué libros buscar.

Ejemplos:

```
q=fiction
q=intitle:novela
q=inauthor:cortázar
q=subject:fantasy
q=isbn:9788439721189
```

Operadores soportados:

* `intitle:` → título
* `inauthor:` → autor
* `subject:` → categoría
* `isbn:` → ISBN
* `inpublisher:` → editorial

Se pueden combinar:

```
q=intitle:novela+inauthor:cortázar
```

---

## 2. Orden y relevancia

### `orderBy`

Define cómo se ordenan los resultados.

Valores posibles:

* `relevance` (default) → más relevantes primero
* `newest` → más recientes primero

Ejemplo:

```
orderBy=relevance
```

---

## 3. Paginación

### `maxResults`

Cantidad de resultados devueltos.

* Rango: `1` – `40`
* Default: `10`

Ejemplo:

```
maxResults=20
```

---

### `startIndex`

Índice desde donde empezar (paginación).

Ejemplo:

* Página 1:

```
startIndex=0
```

* Página 2 (si maxResults=20):

```
startIndex=20
```

---

## 4. Idioma

### `langRestrict`

Restringe resultados a un idioma.

Valores:

* `es` → español
* `en` → inglés
* `fr`, `de`, etc.

Ejemplo:

```
langRestrict=es
```

---

## 5. Tipo de impresión

### `printType`

Filtra por tipo de publicación.

Valores:

* `books` → solo libros
* `magazines` → solo revistas
* `all` (default)

Recomendado:

```
printType=books
```

---

## 6. Tamaño de la respuesta

### `projection`

Define cuánta información devuelve la API.

Valores:

* `lite` → datos básicos (más rápido)
* `full` → datos completos

Recomendado para listados:

```
projection=lite
```

---

## 7. Filtro por disponibilidad

### `filter`

Filtra por tipo de acceso.

Valores útiles:

* `free-ebooks`
* `paid-ebooks`
* `ebooks`
* `full`
* `partial`

Ejemplo:

```
filter=free-ebooks
```

---

## 8. API Key

### `key`

Tu clave de Google Books API.

Ejemplo:

```
key=TU_API_KEY
```

Recomendación:

* Guardarla como **variable de entorno**
* No exponerla en clientes

---

## 9. Parámetros menos usados (opcional)

### `download`

```
download=epub
```

### `source`

Identificador libre de tu app:

```
source=thoru-or-eyes
```

---

## 10. Ejemplo completo (canónico)

```
GET https://www.googleapis.com/books/v1/volumes
  ?q=fiction
  &orderBy=relevance
  &maxResults=20
  &startIndex=0
  &langRestrict=es
  &printType=books
  &projection=lite
  &key=TU_API_KEY
```

---

## 11. Recomendación de uso para tu proyecto

Para **Thor u Or Eyes**, el set recomendado es:

* `q`
* `orderBy`
* `maxResults`
* `startIndex`
* `langRestrict`
* `printType=books`
* `projection=lite`

Evita:

* `filter` al inicio (reduce demasiado)
* `projection=full` en listados (payload grande)

---

## Regla final

> **Google Books no es un ranking global de “más populares”.
> Es un motor de búsqueda contextual.**

Los resultados “más conocidos” dependen de:

* `relevance`
* cómo formules `q`
* paginación

Este documento ya te sirve como **contrato técnico** para tu endpoint y para documentarlo más adelante (OpenAPI).
