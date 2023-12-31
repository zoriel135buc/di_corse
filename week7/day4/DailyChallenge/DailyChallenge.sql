-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Denzel','Washington','28/12/1954', 3),('Tom','Cruise','03/07/1962',2);
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Leonardo','DiCaprio','11/11/1974', 7),('Johnny','Depp','09/06/1963',3)
-- UPDATE actors SET first_name='Mati'WHERE first_name='Matt' AND last_name='Damon';
-- UPDATE actors 
-- SET number_oscars=4 
-- WHERE first_name='George' AND last_name='Clooney'
-- RETURNING 
--     actor_id,
--     first_name, 
--     last_name,
--     age;
-- ALTER TABLE actors RENAME COLUMN age TO birthdate;
-- DELETE FROM actors WHERE actor_id=4
-- RETURNING actor_id, first_name, last_name, number_oscars;
--     SELECT COUNT(actor_id)
-- FROM actors;





-- SELECT*FROM actors