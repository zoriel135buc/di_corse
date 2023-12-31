--HOW TO RETRIEVE DATA FROM RELATED TABLES: JOIN
-- WE HAVE DIFFERENT TYPES OF JOINS:

--1: INNER JOIN

--SYNTAX:

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actor_id = actor_playing_id

--THE RESULT WILL RETURN A VIEW THAT WILL HAVE ALL THE FIELDS THAT MATCHS: NOT NULL FIELDS

-- CREATE TABLE producers (
-- producer_id SERIAL,
-- producer_name VARCHAR(50) NOT NULL,
-- movies_id INTEGER,

-- PRIMARY KEY (producer_id),
-- FOREIGN KEY (movies_id) REFERENCES movies (movie_id))

-- INSERT INTO producers (producer_name, movies_id)
-- VALUES 
-- ('Warner Bros', (SELECT movie_id FROM movies WHERE movie_title = 'Interstellar'))

-- SELECT movies.movie_title, producers.producer_name
-- FROM movies
-- INNER JOIN producers
-- ON movies.movie_id = producers.movies_id

--2 LEFT JOIN

SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
FULL OUTER JOIN movies
ON actors.actor_id = movies.movie_id

