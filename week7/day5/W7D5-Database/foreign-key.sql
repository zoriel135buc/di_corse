-----CREATING RELATIONSHIP BETWEEN TABLES = FOREIGN KEY, REFERENCES
-----CHILD TABLE: THE ONE WITH THE FOREIGN KEY

-- CREATE TABLE movies (
-- movie_id SERIAL,
-- movie_title VARCHAR(100) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id))


-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES 
-- ('Interstellar', 'Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Michael Caine, and Matt Damon. Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.',
-- (SELECT actor_id FROM actors WHERE first_name = 'Matt'))

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES 
-- ('Interstellar', 'Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Michael Caine, and Matt Damon. Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.',
-- 'NAtalie Portman') 
--WON'T WORK


-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));
	
-------------------------------------------