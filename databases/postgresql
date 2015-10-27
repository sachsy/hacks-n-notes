# PostgreSQL

## Full text search

In text retrieval, full-text search refers to techniques for searching 
a single computer-stored document or a collection in a full text database.
Full-text search is distinguished from searches based on metadata or on 
parts of the original texts represented in databases. - [Wikipedia](http://en.wikipedia.org/wiki/Full_text_search)

A **Document** is the unit of searching in a full text search system; 
for example, a magazine article or email message. - [Postgres docs](http://www.postgresql.org/docs/9.3/static/textsearch-intro.html#TEXTSEARCH-DOCUMENT)

**tsvector** is a built-in data type specifically for Full Text indexing. Convert columns to **tsvector** using the `to_tsvector()` function. This tokenizes and prepares the string for searching. Tokenize means to split each word, phrase, or symbol in the blob into an indexable token.

Pass the **tsvector** into the `to_tsquery()` function using `@@` which says "return true if the **tsvector** matches the tsquery". 

eg.
```sql
select products.sku, products.title from products where to_tsvector(title) @@ to_tsquery('Mastering');

    sku     |              title
------------+---------------------------------
 aspnet4    | Mastering ASP.NET 4.0
```


## Aggregate Expressions

An aggregate expression represents the application of an aggregate function across the rows selected by a query. An aggregate function reduces multiple inputs to a single output value, such as the sum or average of the inputs.

## Operators

`string || string` concatenates

## Reference
http://blog.lostpropertyhq.com/postgres-full-text-search-is-good-enough/#1
