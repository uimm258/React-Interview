-- Setup

-- Assume DB = postgresql

-- Given the table:

CREATE TABLE something
(
    id uuid NOT NULL,
    name  CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL,
    phone CHARACTER VARYING(255),
    birthday DATE,
    age INTEGER
);

-- create a trigger/function which will calculate the age on insert or modify given the birthday

CREATE OR REPLACE FUNCTION age_in_years() RETURNS TRIGGER AS $body$
BEGIN
  NEW.age := date_part('year', CURRENT_TIME - NEW.dob::timestamp);
  RETURN NEW; 
END; 
$body$ LANGUAGE plpgsql;

CREATE VIEW something_current AS 
  SELECT *, date_part('year', CURRENT_TIME - dob::timestamp) AS age
  FROM something;