CREATE DATABASE homepage;
use homepage;


create table board(
    idx INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    subject VARCHAR(100) NOT NULL,
    board_name VARCHAR(50) NOT NULL,
    content TEXT,
    today DATETIME DEFAULT CURRENT_TIMESTAMP,
    hit INT(11)
) AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- MariaDB : 역슬래쉬 기능있나봄. 사용하려면 \\권장 or / 대체하는 것 권장