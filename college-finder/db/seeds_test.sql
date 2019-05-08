DROP DATABASE IF EXISTS collegefinder;
CREATE DATABASE collegefinder;

INSERT INTO users (name)
	VALUES ("Sam"), ("Steve"), ("Steve Two");

SELECT * FROM users;

INSERT INTO colleges (name, alias, city, zip, sat_score, admission_rate, population, tuition_out_of_state, tuition_in_state, cost_average_annual, loan_average, UserId)
	VALUES ("University of Southern California", "USC", "Los Angeles", 90029, 1300, .13, 12000, 60000, 60000, 56000, 25000, 1);
    
SELECT * FROM colleges;