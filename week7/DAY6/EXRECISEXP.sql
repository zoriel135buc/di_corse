-- SELECT *FROM customer
-- SELECT CONCAT(first_name, ' ', last_name) AS full_name
-- FROM customer;
-- SELECT create_date
-- FROM customer;
-- SELECT *
-- FROM customer
-- ORDER BY first_name DESC;
-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC;
-- SELECT address,phone
-- FROM address
-- where district='texas'
-- SELECT *
-- FROM film
-- WHERE film_id IN (15,150)
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'YourFavoriteMovie';
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE LEFT(title, 2) = LEFT('YourFavoriteMovie', 2)
-- SELECT film_id, title, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10;
-- SELECT film_id, title, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- OFFSET 10 ROWS
-- FETCH NEXT 10 ROWS ONLY;
-- SELECT
--     c.first_name,
--     c.last_name,
--     p.amount,
--     p.payment_date
-- FROM
--     customer c
-- JOIN
--     payment p ON c.customer_id = p.customer_id
-- ORDER BY
--     p.payment_id;
-- SELECT f.film_id, f.title
-- FROM film f
-- LEFT JOIN inventory i ON f.film_id = i.film_id
-- WHERE i.film_id IS NULL;
-- SELECT city.city_id, city.city, country.country
-- FROM city
-- JOIN country ON city.country_id = country.country_id;
-- SELECT
--     c.customer_id,
--     c.first_name AS customer_first_name,
--     c.last_name AS customer_last_name,
--     p.amount,
--     p.payment_date,
--     s.staff_id
-- FROM
--     customer c
-- JOIN
--     payment p ON c.customer_id = p.customer_id
-- JOIN
--     staff s ON p.staff_id = s.staff_id
-- ORDER BY
--     s.staff_id, p.payment_id;

