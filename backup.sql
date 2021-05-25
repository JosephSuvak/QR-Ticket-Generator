-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: qr_ticket_db
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `concert`
--

DROP TABLE IF EXISTS `concert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concert` (
  `id` int NOT NULL AUTO_INCREMENT,
  `venue_name` varchar(255) NOT NULL,
  `concert_name` varchar(255) NOT NULL,
  `stock` int DEFAULT '100',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concert`
--

LOCK TABLES `concert` WRITE;
/*!40000 ALTER TABLE `concert` DISABLE KEYS */;
INSERT INTO `concert` VALUES (1,'Wild Horse','John Prine',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(2,'Exit Inn','Kenny Loggins',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(3,'The End','Disturbed',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(4,'Springwater','Garth Brooks',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(5,'Mercy Lounge','Tame Impala',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(6,'The High Watt','Testament',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(7,'The 5 Spot','Phish',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(8,'BridgeStone','Wu-Tang',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(9,'Ryman Auditorium','Patsy CLI-ne',100,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(10,'Grand Ole Opry','JSON ALLDEEZ',100,'2021-05-23 20:33:39','2021-05-23 20:33:39');
/*!40000 ALTER TABLE `concert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Session` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
INSERT INTO `Session` VALUES ('JdwyPLTfBuUkj1iOfTyUdca91Y3W1j1M','2021-05-23 17:48:58','{\"cookie\":{\"originalMaxAge\":300000,\"expires\":\"2021-05-23T17:48:58.166Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_id\":2,\"loggedIn\":true}','2021-05-23 17:43:29','2021-05-23 17:43:58'),('T7vMIRKaCAmy8GzQ-ZH6FDcOIdTWl0A8','2021-05-23 20:21:28','{\"cookie\":{\"originalMaxAge\":300000,\"expires\":\"2021-05-23T20:21:28.457Z\",\"httpOnly\":true,\"path\":\"/\"}}','2021-05-23 20:16:08','2021-05-23 20:16:28');
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `concert_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `concert_id` (`concert_id`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`concert_id`) REFERENCES `concert` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,1,1,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(2,1,2,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(3,1,3,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(4,2,4,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(5,2,5,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(6,2,6,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(7,3,7,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(8,3,8,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(9,3,9,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(10,4,10,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(11,4,1,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(12,4,2,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(13,5,3,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(14,5,4,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(15,5,5,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(16,6,6,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(17,6,7,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(18,6,8,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(19,7,9,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(20,7,10,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(21,7,1,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(22,8,2,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(23,8,3,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(24,8,4,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(25,9,5,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(26,9,6,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(27,9,7,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(28,10,8,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(29,10,9,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(30,10,10,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(31,2,7,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(32,6,2,'2021-05-23 20:33:39','2021-05-23 20:33:39'),(33,7,5,'2021-05-23 20:33:39','2021-05-23 20:33:39');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'JillValentine@gmail.com','$2b$10$5Kq.z6gFhPMSxLZrGFc5q.Lcu296TT/I0h1oj7zJBZzQIBZXXV2je'),(2,'Bill&Ted@gmail.com','$2b$10$FDX9pYZE0hJdk/GJcsIIcuVe0BVi6yXXwxP3Ov/b/eeeEnYeVD0/W'),(3,'RockyRaccoon@gmail.com','$2b$10$BeP3bDHGJesyyro//Fw8/Oo4uGerRvMrI4PoXK8xElyGl4F0zPgBa'),(4,'JamesBlank@gmail.com','$2b$10$dw9rTR0ToHqycSurkfwWVuU.yrysCPqGn.ot.ff6q5m08tw4Sxplu'),(5,'PurpBurp@gmail.com','$2b$10$NFa8SJ9sFNBJwiKSgmNZie5P/ODYCO3hy5aEKK8tTFQK0REwfPGcq'),(6,'LeggoEggo@gmail.com','$2b$10$WFcc9lmRLof3uBbTQEGIY.JFc6uNQGhNLcOFFtKf9dlpZaEMjeF3W'),(7,'JaquesEtch@gmail.com','$2b$10$YFTrM9Fng7tgyW.kFKt...KYzbR4S6QNZCfd9h3QD1U/FziYo.5aW'),(8,'AustinCool@gmail.com','$2b$10$6B6fslaYOQdj2GRnlbeN.OcH3p/TeCbiq/8Lo6G5ey3DHmHszOTXi'),(9,'TrickyTrina@gmail.com','$2b$10$nHBjorhC6.iu4S0R7yeNp.ynZeuDmfgoei9NtmyJRP5DBq8UB3zhm'),(10,'JimmyCrackCorn@gmail.com','$2b$10$srmrz9K0EW84I9x9xUjQ6uAjmeBjuHxnrHr19LPneaZ569LpAycqu');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-23 16:35:08
