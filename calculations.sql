create database icandy;

use icandy;

create table userData(
    id int auto_increment not null,
    userName varchar(255) not null,
    gender varchar(255) not null,
    age int not null,
    weight decimal (6,2) not null,
    height decimal (2,1) not null, 
    waistSize decimal (4,2) not null,
    activityLevel decimal (4,3) not null, 
    fatPercentage decimal (4,2),
    RMR decimal (7,2), 
    caloriesPerDay decimal (7,2),    
);