---
title: "SQL: Copy Tables and Massive Update"
date: "2019-04-06"
spoiler: "How to create a table from an existing one, insert all the data, and make a massive update in the case you made a mistake, using different RDBMSs."
---

## The road map

There are a lot of times during development where we make a mistake and all or part of our data are gone. Even worse when we lose them due to a bug in our production version.

In this post, we'll see how to create a database table as a backup from an existing one, copy the data, and make a massive update joining these two tables. We'll quote the corresponding SQL statements from different RDBMSs: MariaDB, PostgreSQL, MS SQL Server, IBM DB2, SQLite.

## MariaDB

### Create the table

```sql
CREATE TABLE tbl2 LIKE tbl1;
```

`tbl2` table will inhert all the attributes from `tbl1`.

### Copy the data

```sql
INSERT INTO tbl2
SELECT * FROM tbl1;
```

We may use the `WHERE` clause to insert only a part of tbl1's data.

### Massive update

```sql
UPDATE tbl1 a
INNER JOIN tbl2 b ON
a.key = b.key
SET a.column1 = b.column1;
```

## PostgreSQL

### Create the table

```sql
CREATE TABLE tbl2 ( LIKE tbl1 INCLUDING ALL );
```

### Copy the data

```sql
INSERT INTO tbl2
SELECT * FROM tbl1;
```

### Massive update

```sql
UPDATE tbl1 a
SET a.column1 = b.column1
FROM tbl2 b
WHERE
a.key = b.key;
```

## MS SQL Server

### Create the table and copy all data

```sql
SELECT * INTO tbl2
FROM tbl1
```

### Create the table ONLY

```sql
SELECT * INTO tbl2
FROM tbl1
WHERE 1 = 0;
```

### Massive update

```sql
UPDATE a
SET a.column1 = b.column1
FROM tbl1 a
INNER JOIN tbl2 b ON
a.key = b.key;
```

## IBM DB2

### Create the table

```sql
CREATE TABLE tbl2 LIKE tbl1;
```

### Copy the data

```sql
INSERT INTO tbl2
SELECT * FROM tbl1;
```

### Massive update

```sql
UPDATE tbl1 a
SET a.column1 = b.column1
FROM tbl2 b
WHERE
a.key = b.key;
```

## SQLite

### Create the table only

```sql
CREATE TABLE tbl2 AS
SELECT * FROM tbl1
WHERE 1 = 0;
```

### Copy the data only

```sql
INSERT INTO tbl2
SELECT * FROM tbl1;
```

### Create the table and the data at the same time

```sql
CREATE TABLE tbl2 AS
SELECT * FROM tbl1;
```

### Massive update

```sql
UPDATE tbl1
SET
column1 = (SELECT b.column1
    FROM tbl2 b
    WHERE b.key = tbl1.key)
WHERE tbl1.key IN (SELECT b.key FROM tbl2 b);
```

In SQLite we may take advantage of the [Row Values Method](https://www.sqlite.org/rowvalue.html), in the case we want to use more than one key:

```sql
UPDATE tbl1
SET
column1 = (SELECT b.column1
    FROM tbl2 b
    WHERE (b.key1, b.key2) = (tbl1.key1, tbl1.key2) )
WHERE (tbl1.key1, tbl1.key2) IN (
  SELECT b.key1, b.key2 FROM tbl2 b);
```
