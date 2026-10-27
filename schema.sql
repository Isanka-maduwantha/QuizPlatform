CREATE DATABASE IF NOT EXISTS mindspark;
USE mindspark;
CREATE TABLE IF NOT EXISTS subjects(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(80) NOT NULL UNIQUE);
CREATE TABLE IF NOT EXISTS questions(
 id INT AUTO_INCREMENT PRIMARY KEY,
 rnd TINYINT NOT NULL,            -- 1 general, 2 subject, 3 rapid fire
 subject_id INT NULL,
 text TEXT NOT NULL,
 options JSON NULL,               -- MCQ options (rounds 1-2)
 correct TINYINT NULL,            -- index of correct option
 answer_text VARCHAR(255) NULL,   -- rapid fire answer
 FOREIGN KEY(subject_id) REFERENCES subjects(id) ON DELETE SET NULL);
CREATE TABLE IF NOT EXISTS game_state(id TINYINT PRIMARY KEY, data JSON NOT NULL);
INSERT IGNORE INTO game_state VALUES(1,'{"teams":[{"name":"Team A","score":0},{"name":"Team B","score":0}],"view":"idle","qid":null,"revealed":false,"timerEnd":null,"subject":null,"rapidTeam":0,"got":0,"used":[]}');
INSERT IGNORE INTO subjects(name) VALUES('Physics'),('Chemistry'),('Biology'),('Combined Maths'),('ICT'),('Media Studies'),('Geography'),('Business Studies');

--  Testing
-- use mindspark;
-- create database mindspark;
-- show tables;

-- SET NAMES utf8mb4;
-- select * from subjects;
-- select * from questions;

-- drop database mindspark;