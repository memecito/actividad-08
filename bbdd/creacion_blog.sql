-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 ;
USE `blog` ;

-- -----------------------------------------------------
-- Table `blog`.`autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`autores` (
  `idautor` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `imagen` VARCHAR(45) NULL,
  PRIMARY KEY (`idautor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`posts` (
  `idpost` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  `fecha_creacion` DATE NULL,
  `categoria` VARCHAR(45) NULL,
  `autor_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idpost`),
  INDEX `fk_posts_autores1_idx` (`autor_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_autores1`
    FOREIGN KEY (`autor_id`)
    REFERENCES `blog`.`autores` (`idautor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`categorias` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`categorias_posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`categorias_posts` (
  `categoria_id` INT NOT NULL,
  `post_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`categoria_id`, `post_id`),
  INDEX `fk_categorias_has_posts_posts1_idx` (`post_id` ASC) VISIBLE,
  INDEX `fk_categorias_has_posts_categorias_idx` (`categoria_id` ASC) VISIBLE,
  CONSTRAINT `fk_categorias_has_posts_categorias`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `blog`.`categorias` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_categorias_has_posts_posts1`
    FOREIGN KEY (`post_id`)
    REFERENCES `blog`.`posts` (`idpost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
