
-- UPDATE new_film
-- SET language_id = 3  -- Replace 3 with the valid language_id you want to set
-- WHERE id IN (1, 2);  -- Replace 1, 2 with the valid film_ids you want to update
-- SHOW CREATE TABLE customer;
-- Insert into referenced table first
-- INSERT INTO country (country_id, country_name) VALUES (1, 'United States');

-- -- Then insert into the customer table with the foreign key reference
-- INSERT INTO customer (customer_id, customer_name, country_id) VALUES (101, 'John Doe', 1);
-- Drop foreign key constraints referencing customer_review
-- ALTER TABLE some_other_table DROP FOREIGN KEY some_constraint_name;

-- -- Drop customer_review table
-- DROP TABLE IF EXISTS customer_review;
-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE return_date IS NULL;
-- SELECT film.title, film.rental_rate
-- FROM rental
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY film.rental_rate DESC
-- LIMIT 30;
-- SELECT film_id, title
-- FROM film
-- WHERE description LIKE '%sumo wrestler%'
--   AND actor_list LIKE '%Penelope Monroe%';
-- SELECT film_id, title
-- FROM film
-- WHERE length < 60
--   AND rating = 'R';
-- SELECT film.film_id, film.title
-- FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE customer.last_name = 'Mahan'
--   AND customer.first_name = 'Matthew'
--   AND rental.rental_rate > 4.00
--   AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';
--   SELECT film.film_id, film.title, film.description, film.replacement_cost
-- FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE customer.last_name = 'Mahan'
--   AND customer.first_name = 'Matthew'
--   AND (film.title LIKE '%boat%' OR film.description LIKE '%boat%')
--   AND film.replacement_cost > 30.00; -- Adjust the cost threshold as needed




