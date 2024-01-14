-- Create Customer table
-- CREATE TABLE Customer (
--     id INT PRIMARY KEY,
--     first_name VARCHAR(255) NOT NULL,
--     last_name VARCHAR(255) NOT NULL
-- );

-- -- Create Customer Profile table
-- CREATE TABLE CustomerProfile (
--     id INT PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT false,
--     customer_id INT,
--     FOREIGN KEY (customer_id) REFERENCES Customer(id)
-- );

-- -- Insert Customers
-- INSERT INTO Customer (id, first_name, last_name) VALUES
-- (1, 'John', 'Doe'),
-- (2, 'Jerome', 'Lalu'),
-- (3, 'Lea', 'Rive');

-- -- Insert Customer Profiles
-- INSERT INTO CustomerProfile (id, isLoggedIn, customer_id) VALUES
-- (1, true, 1),  -- John is loggedIn
-- (2, false, 2); -- Jerome is not loggedIn
-- SELECT Customer.first_name
-- FROM Customer
-- JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id
-- WHERE CustomerProfile.isLoggedIn = true;
-- SELECT Customer.first_name, COALESCE(CustomerProfile.isLoggedIn, false) AS isLoggedIn
-- FROM Customer
-- LEFT JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id;
-- SELECT COUNT(*) AS notLoggedInCustomers
-- FROM Customer
-- LEFT JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id
-- WHERE CustomerProfile.isLoggedIn IS NULL OR CustomerProfile.isLoggedIn = false;
-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR(255) NOT NULL
-- );

-- -- Insert Books
-- INSERT INTO Book (title, author) VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To Kill a Mockingbird', 'Harper Lee');
-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL UNIQUE,
--     age INTEGER CHECK (age <= 15)
-- );

-- -- Insert Students
-- INSERT INTO Student (name, age) VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);
-- CREATE TABLE Library (
--     book_fk_id INTEGER,
--     student_fk_id INTEGER,
--     borrowed_date DATE,
--     PRIMARY KEY (book_fk_id, student_fk_id),
--     FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

-- -- Insert Records into the Junction Table
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
-- ((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
-- ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');
-- SELECT * FROM Library;
-- SELECT Student.name, Book.title
-- FROM Library
-- JOIN Student ON Library.student_fk_id = Student.student_id
-- JOIN Book ON Library.book_fk_id = Book.book_id;
-- SELECT AVG(Student.age) AS average_age
-- FROM Library
-- JOIN Student ON Library.student_fk_id = Student.student_id
-- JOIN Book ON Library.book_fk_id = Book.book_id
-- WHERE Book.title = 'Alice In Wonderland';
-- Delete a student (for example, 'John')
-- DELETE FROM Student WHERE name = 'John';








