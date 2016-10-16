CREATE TABLE `aplicacion_social`.`photos` (
  `photo_id` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(45) NULL,
  `place` VARCHAR(45) NULL,
  `photo_path` VARCHAR(100) NOT NULL,
  `upload_date` DATETIME NOT NULL,
  PRIMARY KEY (`photo_id`));