-- SELECT * FROM actors

--AGREGATE FUNCTIONS:

-- SELECT avg(oscars) AS avg_oscars
-- FROM actors

-- SELECT count(*) FROM actors

-- SELECT first_name, oscars
-- FROM actors
-- WHERE oscars = (SELECT max(oscars) FROM actors)

-----------------------------------------
--DISTINCT KEYWORD:

-- INSERT INTO actors (first_name, last_name, age, oscars)
-- VALUES('Matt','Ross','03/01/1970', 0);

--NOW WE HAVE TWO ACTORS WITH THE SAME FIRST NAME


-- SELECT DISTINCT first_name FROM actors

-- SELECT * FROM actors 
-- WHERE first_name in ('Brad', 'jolie')


-- SELECT first_name, age FROM actors WHERE age BETWEEN '01/01/1961' AND '01/01/1962'

-------------------------------------------
--GROUP BY CLAUSE

-- SELECT * FROM actors

-- SELECT first_name, last_name, sum(oscars)
-- FROM actors
-- GROUP BY first_name, last_name

