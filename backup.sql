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
  `concert_date` varchar(255) NOT NULL,
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
INSERT INTO `concert` VALUES (1,'Wild Horse','John Prine','10/10/22',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(2,'Exit Inn','Kenny Loggins','10/10/21',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(3,'The End','Disturbed','11/10/21',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(4,'Springwater','Garth Brooks','12/10/21',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(5,'Mercy Lounge','Tame Impala','09/10/21',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(6,'The High Watt','Testament','11/11/21',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(7,'The 5 Spot','Phish','09/10/22',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(8,'BridgeStone','Wu-Tang','11/10/22',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(9,'Ryman Auditorium','Patsy CLI-ne','09/12/22',100,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(10,'Grand Ole Opry','JSON ALLDEEZ','05/10/22',100,'2021-05-26 16:02:48','2021-05-26 16:02:48');
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
INSERT INTO `ticket` VALUES (1,1,1,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(2,1,2,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(3,1,3,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(4,2,4,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(5,2,5,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(6,2,6,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(7,3,7,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(8,3,8,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(9,3,9,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(10,4,10,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(11,4,1,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(12,4,2,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(13,5,3,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(14,5,4,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(15,5,5,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(16,6,6,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(17,6,7,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(18,6,8,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(19,7,9,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(20,7,10,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(21,7,1,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(22,8,2,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(23,8,3,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(24,8,4,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(25,9,5,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(26,9,6,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(27,9,7,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(28,10,8,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(29,10,9,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(30,10,10,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(31,2,7,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(32,6,2,'2021-05-26 16:02:48','2021-05-26 16:02:48'),(33,7,5,'2021-05-26 16:02:48','2021-05-26 16:02:48');
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
INSERT INTO `user` VALUES (1,'JaquesEtch@gmail.com','$2b$10$ru.SimtEfGq87m521DVXnO27M/JCfAVP3vHSG0SobiQdM828FvWgi'),(2,'JamesBlank@gmail.com','$2b$10$hjCyBBEzQD0PonooEkZsx.qSTkNSTI1gr9zZeFWBTckRL0pM53qyS'),(3,'Bill&Ted@gmail.com','$2b$10$RKAsHaWSr49UMV9PRn9KI.XiPcSaPsdPDPmt3sV7B0ZW69SAFdVYe'),(4,'PurpBurp@gmail.com','$2b$10$V6YViuGZrNpzVXmb58enoOz8x2R8HFloKbLm94uSVSjPR2mWb6HAC'),(5,'RockyRaccoon@gmail.com','$2b$10$voFBnj229y/IBqUwOmHBOONAy56.aL.D67.FgYROqKiVr2xCD9UzW'),(6,'LeggoEggo@gmail.com','$2b$10$hN9ddkQcZIZY2JZh1ab1r.nkfCghfYJRYlqRUFWCDQUTQS0q8XMQa'),(7,'AustinCool@gmail.com','$2b$10$rstUCXObMiMbA.YOqtG0Se8y9qmKc8ZXRF.kdUPwonlCznH8aUfGO'),(8,'JillValentine@gmail.com','$2b$10$JJOzHmkeopRnqR/LgqefTeWCbIUHf1eoiKp7UMS82ZyOLOWJLWhSG'),(9,'TrickyTrina@gmail.com','$2b$10$AmC3KXADvMhgAv6Vl7RkM.qZ56zLjYhAKyJrkGeCpb/YFHF6ZWBZ6'),(10,'JimmyCrackCorn@gmail.com','$2b$10$NjyCu7w58a2Kk4BLul06W.v/anq8SJoL8QiVUugDqDxWAD3ZH8XhW');
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

-- Dump completed on 2021-05-26 12:06:50
