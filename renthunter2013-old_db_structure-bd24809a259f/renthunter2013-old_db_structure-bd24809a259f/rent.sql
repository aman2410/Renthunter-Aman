-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.0.45-community-nt - MySQL Community Edition (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for renthunter
DROP DATABASE IF EXISTS `renthunter`;
CREATE DATABASE IF NOT EXISTS `renthunter` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `renthunter`;

-- Dumping structure for table renthunter.amenities_type
DROP TABLE IF EXISTS `amenities_type`;
CREATE TABLE IF NOT EXISTS `amenities_type` (
  `id` int(11) NOT NULL auto_increment,
  `atype` varchar(50) default NULL,
  `fclass` varchar(20) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_amenities_type_users` (`cuser`),
  CONSTRAINT `FK_amenities_type_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.amenities_type: ~62 rows (approximately)
/*!40000 ALTER TABLE `amenities_type` DISABLE KEYS */;
REPLACE INTO `amenities_type` (`id`, `atype`, `fclass`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'TV', 'fa-tv', 'n', '2019-12-07', '4:01 PM', 16),
	(2, 'Sofa', 'fa-sofa', 'y', '2020-01-16', '8:37 PM', 16),
	(12, 'Fridge', 'Glyphycon', 'n', '2020-04-12', '9:02 AM', 16),
	(13, 'AC', 'Glyphycon', 'n', '2020-04-12', '9:02 AM', 16),
	(14, 'Fan', 'Glyphycon', 'n', '2020-04-12', '9:02 AM', 16),
	(15, 'Oven', 'Glyphycon', 'n', '2020-04-12', '9:03 AM', 16),
	(16, 'Tube Light', 'Glyphycon', 'n', '2020-04-12', '9:03 AM', 16),
	(17, 'Gym', 'Glyphycon', 'n', '2020-04-12', '9:04 AM', 16),
	(18, 'Swimming Pool', 'Glyphycon', 'n', '2020-04-12', '9:04 AM', 16),
	(19, 'Dining Table', 'Glyphycon', 'n', '2020-04-12', '9:04 AM', 16),
	(20, 'Car parking', 'Glyphycon', 'n', '2020-04-12', '9:04 AM', 16),
	(21, 'Bike parking', 'Glyphycon', 'n', '2020-04-12', '9:05 AM', 16),
	(22, 'CCTV', 'Glyphycon', 'n', '2020-04-12', '9:06 AM', 16),
	(23, 'Power Backup', 'Glyphycon', 'n', '2020-04-12', '9:06 AM', 16),
	(24, 'Water', 'Glyphycon', 'n', '2020-04-12', '9:07 AM', 16),
	(25, 'Geyser', 'Glyphycon', 'n', '2020-04-12', '9:07 AM', 16),
	(26, 'Washing Machine', 'Glyphycon', 'n', '2020-04-12', '9:07 AM', 16),
	(27, 'Wardrobe', 'Glyphycon', 'n', '2020-04-12', '9:07 AM', 16),
	(28, 'Bed', 'Glyphycon', 'n', '2020-04-12', '9:08 AM', 16),
	(29, 'Modular kitchen', 'Glyphycon', 'n', '2020-04-12', '9:08 AM', 16),
	(30, 'Stove', 'Glyphycon', 'n', '2020-04-12', '9:09 AM', 16),
	(31, 'Water Purifier', 'Glyphycon', 'n', '2020-04-12', '9:09 AM', 16),
	(32, 'Curtains', 'Glyphycon', 'n', '2020-04-12', '9:09 AM', 16),
	(33, 'Water storage', 'Glyphycon', 'n', '2020-04-12', '9:10 AM', 16),
	(34, 'Vastu complaint', 'Glyphycon', 'n', '2020-04-12', '9:10 AM', 16),
	(35, 'Waste disposal', 'Glyphycon', 'n', '2020-04-12', '9:10 AM', 16),
	(36, 'Rain water harvesting', 'Glyphycon', 'n', '2020-04-12', '9:11 AM', 16),
	(37, 'Security/fire alarm', 'Glyphycon', 'n', '2020-04-12', '9:11 AM', 16),
	(38, 'Piped Gas', 'Glyphycon', 'n', '2020-04-12', '9:11 AM', 16),
	(39, 'Club House', 'Glyphycon', 'n', '2020-04-12', '9:11 AM', 16),
	(40, 'Lift', 'Glyphycon', 'n', '2020-04-12', '9:13 AM', 16),
	(41, 'Wifi', 'Glyphycon', 'n', '2020-04-12', '9:14 AM', 16),
	(42, 'DTH', 'Glyphycon', 'n', '2020-04-12', '9:14 AM', 16),
	(43, 'Air Cooler', 'Glyphycon', 'n', '2020-04-12', '9:14 AM', 16),
	(44, 'Exhaust fan', 'Glyphycon', 'n', '2020-04-12', '9:15 AM', 16),
	(45, 'Pet Home', 'Glyphycon', 'n', '2020-04-12', '9:16 AM', 16),
	(46, 'Watchman', 'Glyphycon', 'n', '2020-04-12', '9:17 AM', 16),
	(47, 'Chairs', 'Glyphycon', 'n', '2020-04-12', '9:18 AM', 16),
	(48, 'Computers', 'Glyphycon', 'n', '2020-04-12', '9:18 AM', 16),
	(49, 'Centralized AC', 'Glyphycon', 'n', '2020-04-12', '9:18 AM', 16),
	(50, 'High Speed Internet', 'Glyphycon', 'n', '2020-04-12', '9:19 AM', 16),
	(51, 'Printers', 'Glyphycon', 'n', '2020-04-12', '9:19 AM', 16),
	(52, 'Meeting/Board Room', 'Glyphycon', 'n', '2020-04-12', '9:20 AM', 16),
	(53, 'Projector', 'Glyphycon', 'n', '2020-04-12', '9:20 AM', 16),
	(54, 'Cafeteria', 'Glyphycon', 'n', '2020-04-12', '9:21 AM', 16),
	(55, 'Restroom', 'Glyphycon', 'n', '2020-04-12', '9:21 AM', 16),
	(56, 'Coffee Vending Machine', 'Glyphycon', 'n', '2020-04-12', '9:23 AM', 16),
	(57, 'Couch', 'Glyphycon', 'n', '2020-04-12', '9:24 AM', 16),
	(58, 'Server Room', 'Glyphycon', 'n', '2020-04-12', '9:25 AM', 16),
	(59, 'Switches and Routers', 'Glyphycon', 'n', '2020-04-12', '9:25 AM', 16),
	(60, 'Laptops', 'Glyphycon', 'n', '2020-04-12', '9:27 AM', 16),
	(61, 'Smart Board', 'Glyphycon', 'n', '2020-04-12', '9:27 AM', 16),
	(62, 'Intercom', 'Glyphycon', 'n', '2020-04-12', '9:27 AM', 16),
	(63, 'Disinfectant', 'Glyphycon', 'n', '2020-04-12', '9:29 AM', 16),
	(64, 'Ventilation Chamber', 'Glyphycon', 'n', '2020-04-12', '9:30 AM', 16),
	(65, 'Hooks', 'Glyphycon', 'n', '2020-04-12', '9:30 AM', 16),
	(66, 'Heavy vehicle parking', 'Glyphycon', 'n', '2020-04-12', '9:31 AM', 16),
	(67, 'Weigh Bridge', 'Glyphycon', 'n', '2020-04-12', '9:31 AM', 16),
	(68, 'Biometric', 'Glyphycon', 'n', '2020-04-12', '9:35 AM', 16),
	(69, 'Terrace Garden', 'Glyphycon', 'n', '2020-04-12', '9:37 AM', 16),
	(70, 'Stage', 'Glyphycon', 'n', '2020-04-12', '9:40 AM', 16),
	(71, 'Spot light', 'Glyphycon', 'n', '2020-04-12', '9:40 AM', 16);
/*!40000 ALTER TABLE `amenities_type` ENABLE KEYS */;

-- Dumping structure for table renthunter.apartment_amn
DROP TABLE IF EXISTS `apartment_amn`;
CREATE TABLE IF NOT EXISTS `apartment_amn` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `amn` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_apartment_amn_post_apartment` (`apa_id`),
  KEY `FK_apartment_amn_amenities_type` (`amn`),
  KEY `FK_apartment_amn_users` (`cuser`),
  CONSTRAINT `FK_apartment_amn_amenities_type` FOREIGN KEY (`amn`) REFERENCES `amenities_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_apartment_amn_post_apartment` FOREIGN KEY (`apa_id`) REFERENCES `post_apartment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_apartment_amn_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.apartment_amn: ~19 rows (approximately)
/*!40000 ALTER TABLE `apartment_amn` DISABLE KEYS */;
REPLACE INTO `apartment_amn` (`id`, `apa_id`, `amn`, `cdate`, `ctime`, `cuser`) VALUES
	(21, 11, 1, '2020-04-12', '11:33 AM', 28),
	(22, 11, 25, '2020-04-12', '11:33 AM', 28),
	(23, 11, 26, '2020-04-12', '11:33 AM', 28),
	(24, 11, 27, '2020-04-12', '11:33 AM', 28),
	(25, 11, 35, '2020-04-12', '11:33 AM', 28),
	(26, 11, 36, '2020-04-12', '11:33 AM', 28),
	(27, 11, 37, '2020-04-12', '11:33 AM', 28),
	(28, 11, 39, '2020-04-12', '11:33 AM', 28),
	(29, 11, 41, '2020-04-12', '11:33 AM', 28),
	(30, 11, 45, '2020-04-12', '11:33 AM', 28),
	(31, 11, 47, '2020-04-12', '11:33 AM', 28),
	(32, 11, 50, '2020-04-12', '11:33 AM', 28),
	(33, 11, 52, '2020-04-12', '11:33 AM', 28),
	(34, 11, 54, '2020-04-12', '11:33 AM', 28),
	(35, 11, 56, '2020-04-12', '11:33 AM', 28),
	(36, 12, 1, '2020-04-29', '9:30 AM', 19),
	(37, 12, 2, '2020-04-29', '9:30 AM', 19),
	(38, 12, 12, '2020-04-29', '9:30 AM', 19),
	(39, 12, 13, '2020-04-29', '9:30 AM', 19);
/*!40000 ALTER TABLE `apartment_amn` ENABLE KEYS */;

-- Dumping structure for table renthunter.apartment_ser
DROP TABLE IF EXISTS `apartment_ser`;
CREATE TABLE IF NOT EXISTS `apartment_ser` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `ser` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_apartment_ser_post_apartment` (`apa_id`),
  KEY `FK_apartment_ser_service_type` (`ser`),
  KEY `FK_apartment_ser_users` (`cuser`),
  CONSTRAINT `FK_apartment_ser_post_apartment` FOREIGN KEY (`apa_id`) REFERENCES `post_apartment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_apartment_ser_service_type` FOREIGN KEY (`ser`) REFERENCES `service_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_apartment_ser_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.apartment_ser: ~16 rows (approximately)
/*!40000 ALTER TABLE `apartment_ser` DISABLE KEYS */;
REPLACE INTO `apartment_ser` (`id`, `apa_id`, `ser`, `cdate`, `ctime`, `cuser`) VALUES
	(7, 11, 3, '2020-04-12', '11:33 AM', 28),
	(8, 11, 4, '2020-04-12', '11:33 AM', 28),
	(9, 11, 5, '2020-04-12', '11:33 AM', 28),
	(10, 11, 6, '2020-04-12', '11:33 AM', 28),
	(11, 11, 7, '2020-04-12', '11:33 AM', 28),
	(12, 11, 8, '2020-04-12', '11:33 AM', 28),
	(13, 11, 9, '2020-04-12', '11:33 AM', 28),
	(14, 11, 10, '2020-04-12', '11:33 AM', 28),
	(15, 11, 11, '2020-04-12', '11:33 AM', 28),
	(16, 11, 12, '2020-04-12', '11:33 AM', 28),
	(17, 11, 13, '2020-04-12', '11:33 AM', 28),
	(18, 11, 14, '2020-04-12', '11:33 AM', 28),
	(19, 11, 15, '2020-04-12', '11:33 AM', 28),
	(20, 11, 16, '2020-04-12', '11:33 AM', 28),
	(21, 11, 17, '2020-04-12', '11:33 AM', 28),
	(22, 11, 18, '2020-04-12', '11:33 AM', 28);
/*!40000 ALTER TABLE `apartment_ser` ENABLE KEYS */;

-- Dumping structure for table renthunter.area_types
DROP TABLE IF EXISTS `area_types`;
CREATE TABLE IF NOT EXISTS `area_types` (
  `id` int(11) NOT NULL auto_increment,
  `sname` int(11) default NULL,
  `cname` int(11) default NULL,
  `aname` varchar(150) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_area_types_state_types` (`sname`),
  KEY `FK_area_types_city_types` (`cname`),
  KEY `FK_area_types_users` (`cuser`),
  CONSTRAINT `FK_area_types_city_types` FOREIGN KEY (`cname`) REFERENCES `city_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_area_types_state_types` FOREIGN KEY (`sname`) REFERENCES `state_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_area_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.area_types: ~145 rows (approximately)
/*!40000 ALTER TABLE `area_types` DISABLE KEYS */;
REPLACE INTO `area_types` (`id`, `sname`, `cname`, `aname`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 5, 14, 'Begur Kopa Road', 'n', '2020-04-29', '8:22 AM', 16),
	(2, 5, 14, 'Doddaballapur Road', 'n', '2020-04-29', '8:22 AM', 16),
	(3, 5, 14, 'Electronic City', 'n', '2020-04-29', '8:23 AM', 16),
	(4, 5, 14, 'Hebbal', 'n', '2020-04-29', '8:23 AM', 16),
	(5, 5, 14, 'Hegade Nagar', 'n', '2020-04-29', '8:23 AM', 16),
	(6, 5, 14, 'Hesaraghatta', 'n', '2020-04-29', '8:23 AM', 16),
	(7, 5, 14, 'Hoskote', 'n', '2020-04-29', '8:24 AM', 16),
	(8, 5, 14, 'Hosur', 'n', '2020-04-29', '8:24 AM', 16),
	(9, 5, 14, 'Hosur Road', 'n', '2020-04-29', '8:24 AM', 16),
	(10, 5, 14, 'Indiranagar', 'n', '2020-04-29', '8:24 AM', 16),
	(11, 5, 14, 'International Airport', 'n', '2020-04-29', '8:25 AM', 16),
	(12, 5, 14, 'Jayanagar', 'n', '2020-04-29', '8:25 AM', 16),
	(13, 5, 14, 'JP Nagar', 'n', '2020-04-29', '8:25 AM', 16),
	(14, 5, 14, 'Kaggalipura', 'n', '2020-04-29', '8:26 AM', 16),
	(15, 5, 14, 'KGA Golf Course', 'n', '2020-04-29', '8:26 AM', 16),
	(16, 5, 14, 'Koramangala', 'n', '2020-04-29', '8:26 AM', 16),
	(17, 5, 14, 'Krishnarajapuram', 'n', '2020-04-29', '8:26 AM', 16),
	(18, 5, 14, 'Kundana', 'n', '2020-04-29', '8:27 AM', 16),
	(19, 5, 14, 'Langford Town', 'n', '2020-04-29', '8:27 AM', 16),
	(20, 5, 14, 'Malleswaram', 'n', '2020-04-29', '8:27 AM', 16),
	(21, 5, 14, 'Marathahalli', 'n', '2020-04-29', '8:28 AM', 16),
	(22, 5, 14, 'MG Road', 'n', '2020-04-29', '8:28 AM', 16),
	(23, 5, 14, 'Minerva Circle', 'n', '2020-04-29', '8:28 AM', 16),
	(24, 5, 14, 'Mysore Road', 'n', '2020-04-29', '8:29 AM', 16),
	(25, 5, 14, 'Palace Grounds', 'n', '2020-04-29', '8:29 AM', 16),
	(26, 5, 14, 'Race Course Road', 'n', '2020-04-29', '8:29 AM', 16),
	(27, 5, 14, 'Rajajinagar', 'n', '2020-04-29', '8:30 AM', 16),
	(28, 5, 14, 'Seshadripuram', 'n', '2020-04-29', '8:30 AM', 16),
	(29, 5, 14, 'Shivaji Nagar', 'n', '2020-04-29', '8:30 AM', 16),
	(30, 5, 14, 'Tumkur Road', 'n', '2020-04-29', '8:30 AM', 16),
	(31, 5, 14, 'Ulsoor Lake', 'n', '2020-04-29', '8:31 AM', 16),
	(32, 5, 14, 'Vasanth Nagar', 'n', '2020-04-29', '8:31 AM', 16),
	(33, 5, 14, 'Whitefield', 'n', '2020-04-29', '8:31 AM', 16),
	(34, 5, 14, 'Yelahanka', 'n', '2020-04-29', '8:32 AM', 16),
	(35, 5, 14, 'Yelahanka Devanhalli Road', 'n', '2020-04-29', '8:32 AM', 16),
	(36, 5, 14, 'Electronic City Phase 1', 'n', '2020-04-29', '8:36 AM', 16),
	(37, 5, 14, 'Electronic City Phase 2', 'n', '2020-04-29', '8:36 AM', 16),
	(38, 5, 14, 'Hebbagodi', 'n', '2020-04-29', '8:37 AM', 16),
	(39, 5, 14, 'Bommasandra', 'n', '2020-04-29', '8:38 AM', 16),
	(40, 5, 14, 'Chandapura', 'n', '2020-04-29', '8:38 AM', 16),
	(41, 5, 14, 'Konappana Agrahara', 'n', '2020-04-29', '8:40 AM', 16),
	(42, 5, 14, 'Begur', 'n', '2020-04-29', '8:41 AM', 16),
	(43, 5, 14, 'Bommanahalli', 'n', '2020-04-29', '8:42 AM', 16),
	(44, 5, 14, 'Madivala', 'n', '2020-04-29', '8:42 AM', 16),
	(45, 5, 14, 'BTM Layout', 'n', '2020-04-29', '8:43 AM', 16),
	(46, 5, 14, 'HSR Layout', 'n', '2020-04-29', '8:44 AM', 16),
	(47, 5, 14, 'Hulimavu', 'n', '2020-04-29', '8:44 AM', 16),
	(48, 5, 14, 'Mejistic', 'n', '2020-04-29', '8:48 AM', 16),
	(49, 5, 14, 'Chowdeshwari', 'n', '2020-04-29', '8:49 AM', 16),
	(50, 5, 14, 'Attur', 'n', '2020-04-29', '8:49 AM', 16),
	(51, 5, 14, 'Yelahanka New Town', 'n', '2020-04-29', '8:49 AM', 16),
	(52, 5, 14, 'Jakkur', 'n', '2020-04-29', '8:50 AM', 16),
	(53, 5, 14, 'Thanisandra', 'n', '2020-04-29', '8:51 AM', 16),
	(54, 5, 14, 'Byatarayanapura', 'n', '2020-04-29', '8:51 AM', 16),
	(55, 5, 14, 'Kodigehalli', 'n', '2020-04-29', '8:51 AM', 16),
	(56, 5, 14, 'Vidyaranyapura', 'n', '2020-04-29', '8:51 AM', 16),
	(57, 5, 14, 'Doddabommasandra', 'n', '2020-04-29', '8:52 AM', 16),
	(58, 5, 14, 'Kuvempunagar', 'n', '2020-04-29', '8:58 AM', 16),
	(59, 5, 14, 'Shettihalli', 'n', '2020-04-29', '8:58 AM', 16),
	(60, 5, 14, 'Mallasandra', 'n', '2020-04-29', '8:59 AM', 16),
	(61, 5, 14, 'Bagalgunte', 'n', '2020-04-29', '8:59 AM', 16),
	(62, 5, 14, 'Dasarahalli', 'n', '2020-04-29', '8:59 AM', 16),
	(63, 5, 14, 'Jalahalli', 'n', '2020-04-30', '9:28 AM', 16),
	(64, 5, 14, 'J P Park', 'n', '2020-04-30', '9:28 AM', 16),
	(65, 5, 14, 'Radhakrishna Temple', 'n', '2020-04-30', '9:28 AM', 16),
	(66, 5, 14, 'Sanjay Nagar', 'n', '2020-04-30', '9:28 AM', 16),
	(67, 5, 14, 'Ganganagar', 'n', '2020-04-30', '9:29 AM', 16),
	(68, 5, 14, 'Hebbala', 'n', '2020-04-30', '9:29 AM', 16),
	(69, 5, 14, 'Nagenahalli', 'n', '2020-04-30', '9:29 AM', 16),
	(70, 5, 14, 'Nagawara', 'n', '2020-04-30', '9:30 AM', 16),
	(71, 5, 14, 'HBR Layout', 'n', '2020-04-30', '9:30 AM', 16),
	(72, 5, 14, 'Horamavu', 'n', '2020-04-30', '9:30 AM', 16),
	(73, 5, 14, 'Ramamurthynagar', 'n', '2020-04-30', '9:30 AM', 16),
	(74, 5, 14, 'Banasawadi', 'n', '2020-04-30', '9:31 AM', 16),
	(75, 5, 14, 'Kammanahalli', 'n', '2020-04-30', '9:31 AM', 16),
	(76, 5, 14, 'Kacharakanahalli', 'n', '2020-04-30', '9:32 AM', 16),
	(77, 5, 14, 'K G Halli', 'n', '2020-04-30', '9:32 AM', 16),
	(78, 5, 14, 'Kushal Nagar', 'n', '2020-04-30', '9:32 AM', 16),
	(79, 5, 14, 'Kaval Byrasandra', 'n', '2020-04-30', '9:33 AM', 16),
	(80, 5, 14, 'Manorayana Palya', 'n', '2020-04-30', '9:33 AM', 16),
	(81, 5, 14, 'Gangenahalli', 'n', '2020-04-30', '9:33 AM', 16),
	(82, 5, 14, 'Aramane Nagar', 'n', '2020-04-30', '9:34 AM', 16),
	(83, 5, 14, 'Mathikere', 'n', '2020-04-30', '9:35 AM', 16),
	(84, 5, 14, 'Yeshwanthpura', 'n', '2020-04-30', '9:35 AM', 16),
	(85, 5, 14, 'HMT', 'n', '2020-04-30', '9:35 AM', 16),
	(86, 5, 14, 'Chokkasandra', 'n', '2020-04-30', '9:36 AM', 16),
	(87, 5, 14, 'Doddabidarakallu', 'n', '2020-04-30', '9:36 AM', 16),
	(88, 5, 14, 'Peenya Industrial Area', 'n', '2020-04-30', '9:37 AM', 16),
	(89, 5, 14, 'Lakshmidevinagar', 'n', '2020-04-30', '9:37 AM', 16),
	(90, 5, 14, 'Nandini Layout', 'n', '2020-04-30', '9:37 AM', 16),
	(91, 5, 14, 'Marappana Palya', 'n', '2020-04-30', '9:38 AM', 16),
	(92, 5, 14, 'Malleshwaram', 'n', '2020-04-30', '9:38 AM', 16),
	(93, 5, 14, 'JC Nagar', 'n', '2020-04-30', '9:38 AM', 16),
	(94, 5, 14, 'D J Halli', 'n', '2020-04-30', '9:38 AM', 16),
	(95, 5, 14, 'Muneshwaranagar', 'n', '2020-04-30', '9:39 AM', 16),
	(96, 5, 14, ' Lingarajapura', 'n', '2020-04-30', '9:39 AM', 16),
	(97, 5, 14, 'Benniganahalli', 'n', '2020-04-30', '9:39 AM', 16),
	(98, 5, 14, 'Vijanapura', 'n', '2020-04-30', '9:39 AM', 16),
	(99, 5, 14, 'K R Pura', 'n', '2020-04-30', '9:40 AM', 16),
	(100, 5, 14, 'Basavanapura', 'n', '2020-04-30', '9:40 AM', 16),
	(101, 5, 14, 'Hoodi', 'n', '2020-04-30', '9:40 AM', 16),
	(102, 5, 14, 'Devasandra', 'n', '2020-04-30', '9:40 AM', 16),
	(103, 5, 14, 'A. Narayanapura', 'n', '2020-04-30', '9:41 AM', 16),
	(104, 5, 14, 'C V Raman Nagar', 'n', '2020-04-30', '9:41 AM', 16),
	(105, 5, 14, 'New Thippasandra', 'n', '2020-04-30', '9:41 AM', 16),
	(106, 5, 14, 'Maruthi Seva Nagar', 'n', '2020-04-30', '9:41 AM', 16),
	(107, 5, 14, 'Sagayapuram', 'n', '2020-04-30', '9:42 AM', 16),
	(108, 5, 14, 'S K Garden', 'n', '2020-04-30', '9:42 AM', 16),
	(109, 5, 14, 'Ramaswamy Palya', 'n', '2020-04-30', '9:42 AM', 16),
	(110, 5, 14, 'Jayamahal', 'n', '2020-04-30', '9:43 AM', 16),
	(111, 5, 14, 'Raj Mahal Guttahalli', 'n', '2020-04-30', '9:43 AM', 16),
	(112, 5, 14, 'Kadumalleshwara', 'n', '2020-04-30', '9:43 AM', 16),
	(113, 5, 14, 'Subramanya Nagar', 'n', '2020-04-30', '9:44 AM', 16),
	(114, 5, 14, 'Nagapura', 'n', '2020-04-30', '9:44 AM', 16),
	(115, 5, 14, 'Mahalakshmi Layout', 'n', '2020-04-30', '9:44 AM', 16),
	(116, 5, 14, 'Laggere', 'n', '2020-04-30', '9:45 AM', 16),
	(117, 5, 14, 'Rajagopalanagar', 'n', '2020-04-30', '9:45 AM', 16),
	(118, 5, 14, 'Hegganahalli', 'n', '2020-04-30', '9:45 AM', 16),
	(119, 5, 14, 'Herohalli', 'n', '2020-04-30', '9:45 AM', 16),
	(120, 5, 14, 'Kottigepalya', 'n', '2020-04-30', '9:45 AM', 16),
	(121, 5, 14, 'Shakthiganapathi Nagar', 'n', '2020-04-30', '9:46 AM', 16),
	(122, 5, 14, 'Shankaramata', 'n', '2020-04-30', '9:46 AM', 16),
	(123, 5, 14, 'Gayathri Nagar', 'n', '2020-04-30', '9:46 AM', 16),
	(124, 5, 14, 'Dattathreya Temple', 'n', '2020-04-30', '9:46 AM', 16),
	(125, 5, 14, 'Pulikeshinagar', 'n', '2020-04-30', '9:47 AM', 16),
	(126, 5, 14, 'Sarvagnanagar', 'n', '2020-04-30', '9:50 AM', 16),
	(127, 5, 14, 'Hoysalanagar', 'n', '2020-04-30', '9:51 AM', 16),
	(128, 5, 14, 'Vignananagar', 'n', '2020-04-30', '9:51 AM', 16),
	(129, 5, 14, 'Garudacharpalya', 'n', '2020-04-30', '9:51 AM', 16),
	(130, 5, 14, 'Kadugodi', 'n', '2020-04-30', '9:53 AM', 16),
	(131, 5, 14, 'Hagadur', 'n', '2020-04-30', '9:54 AM', 16),
	(132, 5, 14, 'Doddanekundi', 'n', '2020-04-30', '9:54 AM', 16),
	(133, 5, 14, 'HAL Airport', 'n', '2020-04-30', '10:00 AM', 16),
	(134, 5, 14, 'Vijay Nagar', 'n', '2020-07-01', '8:32 PM', 16),
	(135, 5, 14, 'Banashankari', 'n', '2020-07-01', '8:33 PM', 16),
	(136, 20, 22, 'Katraj', 'n', '2020-08-01', '10:30 AM', 16),
	(137, 20, 22, 'shaniwar wada', 'n', '2020-08-01', '10:31 AM', 16),
	(138, 30, 33, 'Old City', 'n', '2020-08-01', '10:32 AM', 16),
	(139, 30, 33, 'Jubli Hills', 'n', '2020-08-01', '10:35 AM', 16),
	(140, 30, 33, 'Kukat palli', 'n', '2020-08-01', '10:35 AM', 16),
	(141, 30, 33, 'Koti', 'n', '2020-08-01', '10:36 AM', 16),
	(142, 30, 33, 'Punjagutta', 'n', '2020-08-01', '10:36 AM', 16),
	(143, 30, 33, 'Begumpet', 'n', '2020-08-01', '10:37 AM', 16),
	(144, 30, 33, 'Mehdipatnam', 'n', '2020-08-01', '10:37 AM', 16),
	(145, 30, 33, 'Ameerpet', 'n', '2020-08-01', '10:37 AM', 16);
/*!40000 ALTER TABLE `area_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.bhk_types
DROP TABLE IF EXISTS `bhk_types`;
CREATE TABLE IF NOT EXISTS `bhk_types` (
  `id` int(11) NOT NULL auto_increment,
  `bhk` varchar(30) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_bhk_types_users` (`cuser`),
  CONSTRAINT `FK_bhk_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.bhk_types: ~6 rows (approximately)
/*!40000 ALTER TABLE `bhk_types` DISABLE KEYS */;
REPLACE INTO `bhk_types` (`id`, `bhk`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, '1 R K', 'n', '2019-12-07', '3:08 PM', 16),
	(2, '1 BHK', 'n', '2019-12-07', '3:08 PM', 16),
	(3, '2 BHK', 'n', '2019-12-07', '3:08 PM', 16),
	(4, '3 BHK', 'n', '2020-04-12', '8:46 AM', 16),
	(5, '4 BHK', 'n', '2020-04-12', '8:46 AM', 16),
	(6, '5 BHK', 'n', '2020-04-12', '8:46 AM', 16);
/*!40000 ALTER TABLE `bhk_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.cards_details
DROP TABLE IF EXISTS `cards_details`;
CREATE TABLE IF NOT EXISTS `cards_details` (
  `id` int(11) NOT NULL auto_increment,
  `pname` varchar(50) default NULL,
  `pname1` int(11) default NULL,
  `ttl` varchar(30) default NULL,
  `pmny` varchar(30) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `card_no` varchar(50) default NULL,
  `assigned` varchar(1) default 'n',
  `aused` varchar(1) default 'n',
  PRIMARY KEY  (`id`),
  KEY `FK_cards_details_payment_plans` (`pname1`),
  KEY `FK_cards_details_users` (`cuser`),
  CONSTRAINT `FK_cards_details_payment_plans` FOREIGN KEY (`pname1`) REFERENCES `payment_plans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_cards_details_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.cards_details: ~25 rows (approximately)
/*!40000 ALTER TABLE `cards_details` DISABLE KEYS */;
REPLACE INTO `cards_details` (`id`, `pname`, `pname1`, `ttl`, `pmny`, `cdate`, `ctime`, `cuser`, `card_no`, `assigned`, `aused`) VALUES
	(1, 'Home', 6, '10', '100', '2021-01-24', '7:59 AM', 16, '31503', 'n', 'n'),
	(2, 'Home', 6, '10', '100', '2021-01-24', '7:59 AM', 16, '89267', 'y', 'n'),
	(3, 'Home', 6, '10', '100', '2021-01-24', '7:59 AM', 16, '70485', 'n', 'n'),
	(4, 'Home', 6, '10', '50', '2021-01-24', '7:59 AM', 16, '11058', 'n', 'n'),
	(5, 'Home', 6, '10', '50', '2021-01-24', '7:59 AM', 16, '20044', 'n', 'n'),
	(6, 'Home', 6, '10', '50', '2021-01-24', '7:59 AM', 16, '82790', 'n', 'n'),
	(7, 'Home', 6, '10', '0', '2021-01-24', '7:59 AM', 16, '91674', 'n', 'n'),
	(8, 'Home', 6, '10', '0', '2021-01-24', '7:59 AM', 16, '44070', 'y', 'n'),
	(9, 'Home', 6, '10', '0', '2021-01-24', '7:59 AM', 16, '63126', 'n', 'n'),
	(10, 'Home', 6, '10', '0', '2021-01-24', '7:59 AM', 16, '4002', 'n', 'n'),
	(11, 'Apartment', 20, '15', '100', '2021-02-06', '8:20 AM', 16, '76779', 'n', 'n'),
	(12, 'Apartment', 20, '15', '100', '2021-02-06', '8:20 AM', 16, '58299', 'n', 'n'),
	(13, 'Apartment', 20, '15', '100', '2021-02-06', '8:20 AM', 16, '11228', 'n', 'n'),
	(14, 'Apartment', 20, '15', '100', '2021-02-06', '8:20 AM', 16, '65698', 'n', 'n'),
	(15, 'Apartment', 20, '15', '100', '2021-02-06', '8:20 AM', 16, '47587', 'n', 'n'),
	(16, 'Apartment', 20, '15', '50', '2021-02-06', '8:20 AM', 16, '43614', 'n', 'n'),
	(17, 'Apartment', 20, '15', '50', '2021-02-06', '8:20 AM', 16, '54265', 'n', 'n'),
	(18, 'Apartment', 20, '15', '50', '2021-02-06', '8:20 AM', 16, '86214', 'n', 'n'),
	(19, 'Apartment', 20, '15', '50', '2021-02-06', '8:20 AM', 16, '30720', 'n', 'n'),
	(20, 'Apartment', 20, '15', '50', '2021-02-06', '8:20 AM', 16, '6344', 'n', 'n'),
	(21, 'Apartment', 20, '15', '0', '2021-02-06', '8:20 AM', 16, '21461', 'n', 'n'),
	(22, 'Apartment', 20, '15', '0', '2021-02-06', '8:20 AM', 16, '82464', 'n', 'n'),
	(23, 'Apartment', 20, '15', '0', '2021-02-06', '8:20 AM', 16, '93339', 'n', 'n'),
	(24, 'Apartment', 20, '15', '0', '2021-02-06', '8:20 AM', 16, '84116', 'n', 'n'),
	(25, 'Apartment', 20, '15', '0', '2021-02-06', '8:20 AM', 16, '17007', 'n', 'n');
/*!40000 ALTER TABLE `cards_details` ENABLE KEYS */;

-- Dumping structure for table renthunter.categories
DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL default '0',
  `catg` varchar(50) default NULL,
  `catg_desc` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.categories: ~42 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
REPLACE INTO `categories` (`id`, `catg`, `catg_desc`, `cdate`, `ctime`, `cuser`) VALUES
	(60, 'Aluminium', '', '2019-10-26', '2:45 PM', 1),
	(73, 'Aluminium 2', NULL, '2019-10-31', '2:04 PM', 1),
	(74, 'SS', NULL, '2019-10-31', '2:15 PM', 1),
	(76, 'SS1', NULL, '2019-10-31', '6:05 PM', 1),
	(86, 'Akai ', NULL, '2019-11-01', '8:18 AM', 1),
	(95, 'Brass ', NULL, '2019-11-01', '9:12 PM', 1),
	(96, 'Copper', NULL, '2019-11-01', '9:12 PM', 1),
	(526, 'Rajalakshmi ', NULL, '2019-11-02', '5:19 PM', 1),
	(527, 'Joyo', NULL, '2019-11-02', '10:08 PM', 1),
	(529, 'Cutlery ', NULL, '2019-11-03', '12:35 PM', 1),
	(530, 'Brass Antique ', NULL, '2019-11-03', '3:59 PM', 1),
	(535, 'Glass', NULL, '2019-11-03', '4:07 PM', 1),
	(541, 'Emergency', NULL, '2019-11-03', '4:41 PM', 1),
	(543, 'Plastic acesories ', NULL, '2019-11-03', '4:59 PM', 1),
	(545, 'Metal ', NULL, '2019-11-03', '5:28 PM', 1),
	(546, 'Green Chef ', NULL, '2019-11-05', '7:51 PM', 1),
	(547, 'Motani', NULL, '2019-11-05', '7:51 PM', 1),
	(548, 'Bajaj', NULL, '2019-11-05', '7:51 PM', 1),
	(549, 'Crompton', NULL, '2019-11-05', '7:51 PM', 1),
	(550, 'Everest', NULL, '2019-11-05', '7:51 PM', 1),
	(551, 'Elegant', NULL, '2019-11-05', '7:51 PM', 1),
	(552, 'Brass & Copper', NULL, '2019-11-07', '2:28 PM', 1),
	(553, 'Copper & brass', NULL, '2019-11-07', '2:28 PM', 1),
	(554, 'Brasss', NULL, '2019-11-07', '2:28 PM', 1),
	(555, 'White Metal', NULL, '2019-11-07', '2:28 PM', 1),
	(2184, 'Cooker', '', '2019-11-08', '4:46 PM', 1),
	(2185, 'Rolex', '', '2019-11-08', '4:54 PM', 1),
	(2186, 'Home Life', '', '2019-11-08', '4:54 PM', 1),
	(2187, 'Crown', '', '2019-11-08', '4:55 PM', 1),
	(2188, 'Baby products ', NULL, '2019-11-09', '7:46 AM', 1),
	(2189, 'Milton', NULL, '2019-11-10', '1:58 PM', 1),
	(2190, 'Fancy gift ', NULL, '2019-11-11', '7:42 PM', 1),
	(2191, 'Non Stick', '', '2019-11-13', '12:15 PM', 1),
	(2192, 'Top', '', '2019-11-13', '12:43 PM', 1),
	(2193, 'Stainless Steal', '', '2019-11-13', '12:46 PM', 1),
	(2194, 'Wood', '', '2019-11-13', '12:48 PM', 1),
	(2195, 'Spare items', '', '2019-11-13', '7:17 PM', 1),
	(2196, 'China Products', NULL, '2019-11-17', '4:33 PM', 1),
	(2197, 'Scrap', '', '2019-11-19', '7:15 PM', 1),
	(2198, 'Stand', '', '2019-11-20', '3:37 PM', 1),
	(2199, 'Filter', NULL, '2019-11-25', '1:41 PM', 1),
	(2201, 'Modware', NULL, '2019-12-01', '11:47 PM', 1);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping structure for table renthunter.city_types
DROP TABLE IF EXISTS `city_types`;
CREATE TABLE IF NOT EXISTS `city_types` (
  `id` int(11) NOT NULL auto_increment,
  `sname` int(11) default NULL,
  `cname` varchar(75) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_city_types_state_types` (`sname`),
  KEY `FK_city_types_users` (`cuser`),
  CONSTRAINT `FK_city_types_state_types` FOREIGN KEY (`sname`) REFERENCES `state_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_city_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.city_types: ~57 rows (approximately)
/*!40000 ALTER TABLE `city_types` DISABLE KEYS */;
REPLACE INTO `city_types` (`id`, `sname`, `cname`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 6, 'Hyderabad', 'n', '2020-04-12', '5:48 PM', 16),
	(2, 7, 'Itanagar', 'n', '2020-04-12', '5:48 PM', 16),
	(3, 8, 'Dispur', 'n', '2020-04-12', '5:49 PM', 16),
	(4, 9, 'Patna', 'n', '2020-04-12', '5:49 PM', 16),
	(5, 10, 'Raipur', 'n', '2020-04-12', '5:49 PM', 16),
	(6, 11, 'Panaji', 'n', '2020-04-12', '5:49 PM', 16),
	(7, 12, 'Gandhinagar', 'n', '2020-04-12', '5:49 PM', 16),
	(8, 13, 'Chandigarh', 'n', '2020-04-12', '5:50 PM', 16),
	(9, 14, 'Shimla', 'n', '2020-04-12', '5:50 PM', 16),
	(10, 15, 'Aizwal', 'n', '2020-04-12', '5:51 PM', 16),
	(11, 16, 'Srinagar', 'n', '2020-04-12', '5:51 PM', 16),
	(12, 16, 'Jammu', 'n', '2020-04-12', '5:51 PM', 16),
	(13, 17, 'Ranchi', 'n', '2020-04-12', '5:52 PM', 16),
	(14, 5, 'Bangalore', 'n', '2020-04-12', '5:52 PM', 16),
	(15, 5, 'Mysore', 'n', '2020-04-12', '5:52 PM', 16),
	(16, 5, 'Mangalore', 'n', '2020-04-12', '5:52 PM', 16),
	(17, 5, 'Hubli', 'n', '2020-04-12', '5:53 PM', 16),
	(18, 5, 'Kalaburagi (Gulbarga)', 'n', '2020-04-12', '5:53 PM', 16),
	(19, 18, 'Thiruvananthapuram', 'n', '2020-04-12', '5:54 PM', 16),
	(20, 19, 'Bhopal', 'n', '2020-04-12', '5:54 PM', 16),
	(21, 20, 'Mumbai', 'n', '2020-04-12', '5:55 PM', 16),
	(22, 20, 'Pune', 'n', '2020-04-12', '5:55 PM', 16),
	(23, 5, 'Belagavi', 'n', '2020-04-12', '5:55 PM', 16),
	(24, 21, 'Imphal', 'n', '2020-04-12', '5:56 PM', 16),
	(25, 22, 'Shillong', 'n', '2020-04-12', '5:56 PM', 16),
	(26, 23, 'Kohima', 'n', '2020-04-12', '5:57 PM', 16),
	(27, 24, 'Bhubaneswar', 'n', '2020-04-12', '5:57 PM', 16),
	(28, 25, 'Chandigarh', 'n', '2020-04-12', '5:57 PM', 16),
	(29, 26, 'Jaipur', 'n', '2020-04-12', '5:58 PM', 16),
	(30, 27, 'Gangtok', 'n', '2020-04-12', '5:58 PM', 16),
	(31, 28, 'Chennai', 'n', '2020-04-12', '5:58 PM', 16),
	(32, 29, 'Agartala', 'n', '2020-04-12', '5:58 PM', 16),
	(33, 30, 'Hyderabad', 'n', '2020-04-12', '5:58 PM', 16),
	(34, 31, 'Lucknow', 'n', '2020-04-12', '5:59 PM', 16),
	(35, 32, 'Dehradun', 'n', '2020-04-12', '5:59 PM', 16),
	(36, 33, 'Kolkatta', 'n', '2020-04-12', '5:59 PM', 16),
	(37, 5, 'Dharwad', 'n', '2020-04-12', '6:00 PM', 16),
	(38, 5, 'Davanagere', 'n', '2020-04-12', '6:00 PM', 16),
	(39, 5, 'Ballari', 'n', '2020-04-12', '6:01 PM', 16),
	(40, 5, 'Vijayapura (Bijapur)', 'n', '2020-04-12', '6:02 PM', 16),
	(41, 5, 'Shivamogga', 'n', '2020-04-12', '6:02 PM', 16),
	(42, 5, 'Tumakuru', 'n', '2020-04-12', '6:02 PM', 16),
	(43, 5, 'Raichur', 'n', '2020-04-12', '6:02 PM', 16),
	(44, 5, 'Bidar', 'n', '2020-04-12', '6:02 PM', 16),
	(45, 5, 'Hosapete', 'n', '2020-04-12', '6:03 PM', 16),
	(46, 5, 'Gadag', 'n', '2020-04-12', '6:03 PM', 16),
	(47, 5, 'Kolara', 'n', '2020-04-12', '6:03 PM', 16),
	(48, 5, 'Hassan', 'n', '2020-04-12', '6:04 PM', 16),
	(49, 6, 'Visakhapatnam', 'n', '2020-04-12', '6:04 PM', 16),
	(50, 6, 'Vijayawada', 'n', '2020-04-12', '6:05 PM', 16),
	(51, 6, 'Guntur', 'n', '2020-04-12', '6:05 PM', 16),
	(52, 30, 'Nizamabad', 'n', '2020-04-12', '6:06 PM', 16),
	(53, 30, 'Secunderabad', 'n', '2020-04-12', '6:07 PM', 16),
	(54, 20, 'Solapur', 'n', '2020-04-12', '6:08 PM', 16),
	(55, 28, 'Salem', 'n', '2020-04-12', '6:10 PM', 16),
	(56, 28, 'Vellore', 'n', '2020-04-12', '6:10 PM', 16),
	(57, 5, 'Tumkur', 'n', '2020-06-08', '6:18 PM', 16);
/*!40000 ALTER TABLE `city_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.contac_owner
DROP TABLE IF EXISTS `contac_owner`;
CREATE TABLE IF NOT EXISTS `contac_owner` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(75) default NULL,
  `mob` varchar(10) default NULL,
  `email` varchar(75) default NULL,
  `msg` varchar(150) default NULL,
  `cid` varchar(10) default NULL,
  `ctype` varchar(50) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.contac_owner: ~5 rows (approximately)
/*!40000 ALTER TABLE `contac_owner` DISABLE KEYS */;
REPLACE INTO `contac_owner` (`id`, `name`, `mob`, `email`, `msg`, `cid`, `ctype`, `cdate`, `ctime`) VALUES
	(1, 'nags', '8105734993', 'nagendras23@gmail.com', 'test', '3', 'Home', '2020-10-30', '7:21 AM'),
	(2, 'dsv', '8974541564', 'd', 'd', '3', 'Home', '2020-10-30', '7:23 AM'),
	(3, 'sd', '5645646546', 'asc', 'c', '2', 'HOME', '2020-12-15', '11:52 AM'),
	(4, 'dc', '5454564551', 'ddv', 'ddv', '2', 'HOME', '2020-12-15', '11:54 AM'),
	(5, 'rfrefrefre', '5454564551', 'shreepad.dshpnd44@gmail.com', 'dc', '2', 'HOME', '2020-12-15', '11:58 AM');
/*!40000 ALTER TABLE `contac_owner` ENABLE KEYS */;

-- Dumping structure for table renthunter.facing_types
DROP TABLE IF EXISTS `facing_types`;
CREATE TABLE IF NOT EXISTS `facing_types` (
  `id` int(11) NOT NULL auto_increment,
  `facings` varchar(30) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_facing_types_users` (`cuser`),
  CONSTRAINT `FK_facing_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.facing_types: ~8 rows (approximately)
/*!40000 ALTER TABLE `facing_types` DISABLE KEYS */;
REPLACE INTO `facing_types` (`id`, `facings`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(2, 'South', 'n', '2019-12-18', '10:21 AM', 16),
	(3, 'North', 'n', '2019-12-18', '10:21 AM', 16),
	(4, 'East', 'n', '2019-12-18', '10:21 AM', 16),
	(5, 'West', 'n', '2019-12-18', '10:21 AM', 16),
	(6, 'South East', 'n', '2020-04-12', '9:00 AM', 16),
	(7, 'North East', 'n', '2020-04-12', '9:00 AM', 16),
	(8, 'South West', 'n', '2020-04-12', '9:01 AM', 16),
	(9, 'North West', 'n', '2020-04-12', '9:01 AM', 16);
/*!40000 ALTER TABLE `facing_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.floor_types
DROP TABLE IF EXISTS `floor_types`;
CREATE TABLE IF NOT EXISTS `floor_types` (
  `id` int(11) NOT NULL auto_increment,
  `floor` varchar(30) default NULL,
  `disabled` varchar(1) default NULL,
  `Column 4` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_floor_types_users` (`cuser`),
  CONSTRAINT `FK_floor_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.floor_types: ~14 rows (approximately)
/*!40000 ALTER TABLE `floor_types` DISABLE KEYS */;
REPLACE INTO `floor_types` (`id`, `floor`, `disabled`, `Column 4`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'Ground Floor', 'n', NULL, '2019-12-07', '3:43 PM', 16),
	(2, 'First floor', 'n', NULL, '2020-04-12', '8:53 AM', 16),
	(3, 'Second Floor', 'n', NULL, '2020-04-12', '8:53 AM', 16),
	(4, 'Third Floor', 'n', NULL, '2020-04-12', '8:54 AM', 16),
	(5, 'Fourth Floor', 'n', NULL, '2020-04-12', '8:54 AM', 16),
	(6, 'Fifth Floor', 'n', NULL, '2020-04-12', '8:54 AM', 16),
	(7, 'Sixth Floor', 'n', NULL, '2020-04-12', '8:54 AM', 16),
	(8, 'Seventh Floor', 'n', NULL, '2020-04-12', '8:54 AM', 16),
	(9, 'Eighth Floor', 'n', NULL, '2020-04-12', '8:55 AM', 16),
	(10, 'Ninth Floor ', 'n', NULL, '2020-04-12', '8:56 AM', 16),
	(11, 'Tenth Floor', 'n', NULL, '2020-04-12', '8:57 AM', 16),
	(12, 'Eleventh Floor', 'n', NULL, '2020-04-12', '8:57 AM', 16),
	(13, 'Twelfth Floor', 'n', NULL, '2020-04-12', '8:58 AM', 16),
	(14, 'Thirteenth Floor', 'n', NULL, '2020-04-12', '8:58 AM', 16);
/*!40000 ALTER TABLE `floor_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.food_service
DROP TABLE IF EXISTS `food_service`;
CREATE TABLE IF NOT EXISTS `food_service` (
  `id` int(11) NOT NULL auto_increment,
  `ttype` varchar(50) default NULL,
  `disabled` varchar(1) default 'n',
  `cdate` varchar(10) default 'n',
  `ctime` varchar(10) default 'n',
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_food_service_users` (`cuser`),
  CONSTRAINT `FK_food_service_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.food_service: ~3 rows (approximately)
/*!40000 ALTER TABLE `food_service` DISABLE KEYS */;
REPLACE INTO `food_service` (`id`, `ttype`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'With Food', 'n', '2020-01-30', '6:02 PM', 16),
	(2, 'Without Food', 'n', '2020-01-30', '6:02 PM', 16),
	(3, 'Both', 'n', '2020-01-30', '6:02 PM', 16);
/*!40000 ALTER TABLE `food_service` ENABLE KEYS */;

-- Dumping structure for table renthunter.furnished_types
DROP TABLE IF EXISTS `furnished_types`;
CREATE TABLE IF NOT EXISTS `furnished_types` (
  `id` int(11) NOT NULL auto_increment,
  `ftype` varchar(50) default NULL,
  `disabled` varchar(1) default 'n',
  `cdate` varchar(10) default 'n',
  `ctime` varchar(10) default 'n',
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_furnished_types_users` (`cuser`),
  CONSTRAINT `FK_furnished_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.furnished_types: ~3 rows (approximately)
/*!40000 ALTER TABLE `furnished_types` DISABLE KEYS */;
REPLACE INTO `furnished_types` (`id`, `ftype`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(2, 'Semi furnished', 'n', '2020-04-12', '8:51 AM', 16),
	(3, 'Unfurnished', 'n', '2020-04-12', '8:51 AM', 16),
	(4, 'Fully furnished', 'n', '2020-04-12', '8:52 AM', 16);
/*!40000 ALTER TABLE `furnished_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.gallery
DROP TABLE IF EXISTS `gallery`;
CREATE TABLE IF NOT EXISTS `gallery` (
  `id` int(11) NOT NULL auto_increment,
  `pname` varchar(150) default NULL,
  `img_path` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_gallery_users` (`cuser`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.gallery: ~5 rows (approximately)
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
REPLACE INTO `gallery` (`id`, `pname`, `img_path`, `cdate`, `ctime`, `cuser`) VALUES
	(1, '1', 'nags_2020-11-262541397.png', '2020-11-26', '9:19 PM', 16),
	(2, '2', 'nags_2020-11-2693806070.jpg', '2020-11-26', '9:19 PM', 16),
	(3, '3', 'nags_2020-11-2660818855.jpg', '2020-11-26', '9:19 PM', 16),
	(4, '4', 'nags_2020-11-2636219772.jpg', '2020-11-26', '9:19 PM', 16),
	(5, '5', 'nags_2020-11-2668651923.jpg', '2020-11-26', '9:19 PM', 16);
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;

-- Dumping structure for table renthunter.gst_details
DROP TABLE IF EXISTS `gst_details`;
CREATE TABLE IF NOT EXISTS `gst_details` (
  `id` int(11) NOT NULL auto_increment,
  `gst` varchar(30) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_gst_details_users` (`cuser`),
  CONSTRAINT `FK_gst_details_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.gst_details: ~1 rows (approximately)
/*!40000 ALTER TABLE `gst_details` DISABLE KEYS */;
REPLACE INTO `gst_details` (`id`, `gst`, `cdate`, `ctime`, `cuser`) VALUES
	(1, '18', '2020-10-16', '7:27 PM', 16);
/*!40000 ALTER TABLE `gst_details` ENABLE KEYS */;

-- Dumping structure for table renthunter.home_amn
DROP TABLE IF EXISTS `home_amn`;
CREATE TABLE IF NOT EXISTS `home_amn` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `amn` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_home_amn_post_home` (`apa_id`),
  KEY `FK_home_amn_amenities_type` (`amn`),
  KEY `FK_home_amn_users` (`cuser`),
  CONSTRAINT `FK_home_amn_amenities_type` FOREIGN KEY (`amn`) REFERENCES `amenities_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_home_amn_post_home` FOREIGN KEY (`apa_id`) REFERENCES `post_home` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_home_amn_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.home_amn: ~0 rows (approximately)
/*!40000 ALTER TABLE `home_amn` DISABLE KEYS */;
/*!40000 ALTER TABLE `home_amn` ENABLE KEYS */;

-- Dumping structure for table renthunter.home_ser
DROP TABLE IF EXISTS `home_ser`;
CREATE TABLE IF NOT EXISTS `home_ser` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `ser` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_home_ser_users` (`cuser`),
  KEY `FK_home_ser_service_type` (`ser`),
  KEY `FK_home_ser_post_home` (`apa_id`),
  CONSTRAINT `FK_home_ser_post_home` FOREIGN KEY (`apa_id`) REFERENCES `post_home` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_home_ser_service_type` FOREIGN KEY (`ser`) REFERENCES `service_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_home_ser_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.home_ser: ~0 rows (approximately)
/*!40000 ALTER TABLE `home_ser` DISABLE KEYS */;
/*!40000 ALTER TABLE `home_ser` ENABLE KEYS */;

-- Dumping structure for table renthunter.locations
DROP TABLE IF EXISTS `locations`;
CREATE TABLE IF NOT EXISTS `locations` (
  `id` int(11) NOT NULL auto_increment,
  `lname` varchar(75) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_locations_users` (`cuser`),
  CONSTRAINT `FK_locations_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.locations: ~2 rows (approximately)
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
REPLACE INTO `locations` (`id`, `lname`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'Bangalore', 'n', '2019-12-07', '2:14 PM', 16),
	(2, 'Mysore', 'n', '2019-12-07', '2:27 PM', 16);
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;

-- Dumping structure for table renthunter.near_by
DROP TABLE IF EXISTS `near_by`;
CREATE TABLE IF NOT EXISTS `near_by` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(75) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.near_by: ~38 rows (approximately)
/*!40000 ALTER TABLE `near_by` DISABLE KEYS */;
REPLACE INTO `near_by` (`id`, `name`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'ATM', 'n', '2020-02-12', '7:56 PM', 16),
	(2, 'Hospital', 'n', '2020-02-12', '7:56 PM', 16),
	(3, 'Bank', 'n', '2020-02-12', '7:56 PM', 16),
	(4, 'School', 'n', '2020-02-12', '7:57 PM', 16),
	(5, 'Mall', 'n', '2020-02-12', '7:57 PM', 16),
	(6, 'Bus Stop', 'n', '2020-04-12', '8:27 AM', 16),
	(7, 'Central Bus stop', 'n', '2020-04-12', '8:28 AM', 16),
	(8, 'Metro', 'n', '2020-04-12', '8:28 AM', 16),
	(9, 'Railway station', 'n', '2020-04-12', '8:28 AM', 16),
	(10, 'College', 'n', '2020-04-12', '8:29 AM', 16),
	(11, 'Airport', 'n', '2020-04-12', '8:30 AM', 16),
	(12, 'Temple', 'n', '2020-04-12', '8:30 AM', 16),
	(13, 'Mosque', 'n', '2020-04-12', '8:30 AM', 16),
	(14, 'Church', 'n', '2020-04-12', '8:30 AM', 16),
	(15, 'Gurdwara', 'n', '2020-04-12', '8:31 AM', 16),
	(16, 'Stadium', 'n', '2020-04-12', '8:31 AM', 16),
	(17, 'Play Ground', 'n', '2020-04-12', '8:31 AM', 16),
	(18, 'Food Streat', 'n', '2020-04-12', '8:33 AM', 16),
	(19, 'Theatre', 'n', '2020-04-12', '8:33 AM', 16),
	(20, 'Multiplex Theatre', 'n', '2020-04-12', '8:34 AM', 16),
	(21, 'Lake', 'n', '2020-04-12', '8:35 AM', 16),
	(22, 'Tech park ', 'n', '2020-04-12', '8:36 AM', 16),
	(23, 'Medical ', 'n', '2020-04-12', '8:38 AM', 16),
	(24, 'Clinic', 'n', '2020-04-12', '8:39 AM', 16),
	(25, 'Joggers park', 'n', '2020-04-12', '8:39 AM', 16),
	(26, 'Restaurant', 'n', '2020-04-12', '8:39 AM', 16),
	(27, 'Taxi Stand', 'n', '2020-04-12', '8:39 AM', 16),
	(28, 'Auto Stand', 'n', '2020-04-12', '8:40 AM', 16),
	(29, 'Fruit Market', 'n', '2020-04-12', '8:40 AM', 16),
	(30, 'Vegetable Market', 'n', '2020-04-12', '8:40 AM', 16),
	(31, 'Flower Market', 'n', '2020-04-12', '8:40 AM', 16),
	(32, 'Super Bazar', 'n', '2020-04-12', '8:40 AM', 16),
	(33, 'Bakery', 'n', '2020-04-12', '8:41 AM', 16),
	(34, 'Post Office', 'n', '2020-04-25', '1:25 PM', 16),
	(35, 'Police Station', 'n', '2020-04-25', '1:26 PM', 16),
	(36, 'Fire Station', 'n', '2020-04-25', '1:26 PM', 16),
	(37, 'Blood Bank', 'n', '2020-04-25', '1:26 PM', 16),
	(38, 'Amusement Park', 'n', '2020-04-25', '1:28 PM', 16);
/*!40000 ALTER TABLE `near_by` ENABLE KEYS */;

-- Dumping structure for table renthunter.offer_promos
DROP TABLE IF EXISTS `offer_promos`;
CREATE TABLE IF NOT EXISTS `offer_promos` (
  `id` int(11) NOT NULL auto_increment,
  `doc_no` varchar(30) default NULL,
  `pid` int(11) default NULL,
  `off_per` varchar(20) default NULL,
  `o_used` varchar(5) default NULL,
  `pcode` varchar(30) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_offer_promos_payment_plans` (`pid`),
  KEY `FK_offer_promos_users` (`cuser`),
  CONSTRAINT `FK_offer_promos_payment_plans` FOREIGN KEY (`pid`) REFERENCES `payment_plans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_offer_promos_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.offer_promos: ~3 rows (approximately)
/*!40000 ALTER TABLE `offer_promos` DISABLE KEYS */;
REPLACE INTO `offer_promos` (`id`, `doc_no`, `pid`, `off_per`, `o_used`, `pcode`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'RHNTR2021HO0001', 6, '10', 'n', 'e85e6539', '2021-01-13', '2:35 PM', 19),
	(2, 'RHNTR2021HO0001', 12, '20', 'n', '7480d0c5', '2021-01-13', '2:35 PM', 19),
	(3, 'RHNTR2021HO0001', 13, '30', 'n', '8c0f7b19', '2021-01-13', '2:35 PM', 19);
/*!40000 ALTER TABLE `offer_promos` ENABLE KEYS */;

-- Dumping structure for table renthunter.office_amn
DROP TABLE IF EXISTS `office_amn`;
CREATE TABLE IF NOT EXISTS `office_amn` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `amn` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_office_amn_post_office` (`apa_id`),
  KEY `FK_office_amn_amenities_type` (`amn`),
  KEY `FK_office_amn_users` (`cuser`),
  CONSTRAINT `FK_office_amn_amenities_type` FOREIGN KEY (`amn`) REFERENCES `amenities_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_office_amn_post_office` FOREIGN KEY (`apa_id`) REFERENCES `post_office` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_office_amn_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.office_amn: ~0 rows (approximately)
/*!40000 ALTER TABLE `office_amn` DISABLE KEYS */;
/*!40000 ALTER TABLE `office_amn` ENABLE KEYS */;

-- Dumping structure for table renthunter.office_ser
DROP TABLE IF EXISTS `office_ser`;
CREATE TABLE IF NOT EXISTS `office_ser` (
  `id` int(11) NOT NULL default '0',
  `apa_id` int(11) default NULL,
  `ser` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  KEY `FK_office_ser_post_office` (`apa_id`),
  KEY `FK_office_ser_service_type` (`ser`),
  KEY `FK_office_ser_users` (`cuser`),
  CONSTRAINT `FK_office_ser_post_office` FOREIGN KEY (`apa_id`) REFERENCES `post_office` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_office_ser_service_type` FOREIGN KEY (`ser`) REFERENCES `service_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_office_ser_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.office_ser: ~0 rows (approximately)
/*!40000 ALTER TABLE `office_ser` DISABLE KEYS */;
/*!40000 ALTER TABLE `office_ser` ENABLE KEYS */;

-- Dumping structure for table renthunter.payments_temp
DROP TABLE IF EXISTS `payments_temp`;
CREATE TABLE IF NOT EXISTS `payments_temp` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(75) default NULL,
  `mob` varchar(10) default NULL,
  `amt` varchar(10) default NULL,
  `pstat` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.payments_temp: ~1 rows (approximately)
/*!40000 ALTER TABLE `payments_temp` DISABLE KEYS */;
REPLACE INTO `payments_temp` (`id`, `name`, `mob`, `amt`, `pstat`, `cdate`, `ctime`) VALUES
	(1, 'sripad', '9743157015', '100', 'pay_FjEHHbVXxQboWO', '5:15 PM', '5:15 PM');
/*!40000 ALTER TABLE `payments_temp` ENABLE KEYS */;

-- Dumping structure for table renthunter.payment_plans
DROP TABLE IF EXISTS `payment_plans`;
CREATE TABLE IF NOT EXISTS `payment_plans` (
  `id` int(11) NOT NULL auto_increment,
  `pname` varchar(50) default NULL,
  `cost` varchar(20) default NULL,
  `mon` varchar(20) default NULL,
  `fea1` varchar(150) default NULL,
  `fea2` varchar(150) default NULL,
  `fea3` varchar(150) default NULL,
  `fea4` varchar(150) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `fea5` varchar(150) default NULL,
  `fea6` varchar(150) default NULL,
  `fea7` varchar(150) default NULL,
  `fea8` varchar(150) default NULL,
  `ptype` varchar(150) default NULL,
  `off_per` varchar(10) default '0',
  PRIMARY KEY  (`id`),
  KEY `FK_payment_plans_users` (`cuser`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.payment_plans: ~26 rows (approximately)
/*!40000 ALTER TABLE `payment_plans` DISABLE KEYS */;
REPLACE INTO `payment_plans` (`id`, `pname`, `cost`, `mon`, `fea1`, `fea2`, `fea3`, `fea4`, `disabled`, `cdate`, `ctime`, `cuser`, `fea5`, `fea6`, `fea7`, `fea8`, `ptype`, `off_per`) VALUES
	(5, 'Gest User', '0', '1', '', '', '', '', 'n', '2020-10-04', '11:23 AM', 16, '', '', '', '', 'Home', '0'),
	(6, 'Normal Plan', '600', '3', '222', '333', '444', '555', 'n', '2020-10-04', '11:24 AM', 16, '', '', '', '', 'Home', '10'),
	(12, 'Special Plan', '1000', '6', '', '', '', '', 'n', '2020-10-04', '11:30 AM', 16, '', '', '', '', 'Home', '20'),
	(13, 'Renthunter Super User', '2000', '12', '', '', '', '', 'n', '2020-10-04', '11:31 AM', 16, '', '', '', '', 'Home', '30'),
	(14, 'Gest User', '0', '1', '', '', '', '', 'n', '2020-10-04', '11:31 AM', 16, '', '', '', '', 'PG', '0'),
	(15, 'Normal Plan', '2000', '3', '', '', '', '', 'n', '2020-10-04', '11:32 AM', 16, '', '', '', '', 'PG', '10'),
	(16, 'Special Plan', '4000', '6', '', '', '', '', 'n', '2020-10-04', '11:32 AM', 16, '', '', '', '', 'PG', '20'),
	(17, 'Renthunter Super User', '5000', '12', '', '', '', '', 'n', '2020-10-04', '11:33 AM', 16, '', '', '', '', 'PG', '30'),
	(18, 'Gest User', '0', '1', '', '', '', '', 'n', '2020-10-04', '11:33 AM', 16, '', '', '', '', 'Apartment', '0'),
	(19, 'Normal Plan', '600', '3', '', '', '', '', 'n', '2020-10-04', '11:34 AM', 16, '', '', '', '', 'Apartment', '10'),
	(20, 'Special Plan', '1000', '6', '', '', '', '', 'n', '2020-10-04', '11:35 AM', 16, '', '', '', '', 'Apartment', '20'),
	(21, 'Renthunter Super User', '2000', '12', '', '', '', '', 'n', '2020-10-04', '11:35 AM', 16, '', '', '', '', 'Apartment', '30'),
	(22, 'Gest User', '0', '1', '', '', '', '', 'y', '2020-10-04', '11:37 AM', 16, '', '', '', '', 'Shops', '0'),
	(23, 'Normal Plan', '600', '3', '', '', '', '', 'n', '2020-10-04', '11:37 AM', 16, '', '', '', '', 'Shops', '10'),
	(24, 'Special Plan', '1000', '6', '', '', '', '', 'n', '2020-10-04', '11:38 AM', 16, '', '', '', '', 'Shops', '20'),
	(25, 'Renthunter Super User', '2000', '12', '', '', '', '', 'n', '2020-10-04', '11:39 AM', 16, '', '', '', '', 'Shops', '30'),
	(26, 'Gest User', '0', '1', '', '', '', '', 'y', '2020-10-04', '11:41 AM', 16, '', '', '', '', 'Office Space', '0'),
	(27, 'Normal Plan', '2000', '3', '', '', '', '', 'n', '2020-10-04', '11:41 AM', 16, '', '', '', '', 'Office Space', '10'),
	(28, 'Special Plan', '4000', '6', '', '', '', '', 'n', '2020-10-04', '11:42 AM', 16, '', '', '', '', 'Office Space', '20'),
	(29, 'Renthunter Super User', '5000', '12', '', '', '', '', 'n', '2020-10-04', '11:43 AM', 16, '', '', '', '', 'Office Space', '30'),
	(30, 'Gest User', '0', '1', '', '', '', '', 'y', '2020-10-04', '11:44 AM', 16, '', '', '', '', 'Warehouse', '0'),
	(31, 'Normal Plan', '2000', '3', '', '', '', '', 'n', '2020-10-04', '11:44 AM', 16, '', '', '', '', 'Warehouse', '10'),
	(32, 'Special Plan', '4000', '6', '', '', '', '', 'n', '2020-10-04', '11:44 AM', 16, '', '', '', '', 'Warehouse', '20'),
	(33, 'Renthunter Super User', '5000', '12', '', '', '', '', 'n', '2020-10-04', '11:45 AM', 16, '', '', '', '', 'Warehouse', '30'),
	(34, 'test', '0', '1', '', '', '', '', 'n', '2020-10-28', '8:37 AM', 16, '', '', '', '', 'Special Rentals', '10'),
	(35, 'test1', '600', '2', '', '', '', '', 'n', '2020-10-28', '8:38 AM', 16, '', '', '', '', 'Special Rentals', '15');
/*!40000 ALTER TABLE `payment_plans` ENABLE KEYS */;

-- Dumping structure for table renthunter.pg_amn
DROP TABLE IF EXISTS `pg_amn`;
CREATE TABLE IF NOT EXISTS `pg_amn` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `amn` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_pg_amn_post_pg` (`apa_id`),
  KEY `FK_pg_amn_amenities_type` (`amn`),
  CONSTRAINT `FK_pg_amn_amenities_type` FOREIGN KEY (`amn`) REFERENCES `amenities_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_pg_amn_post_pg` FOREIGN KEY (`apa_id`) REFERENCES `post_pg` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.pg_amn: ~0 rows (approximately)
/*!40000 ALTER TABLE `pg_amn` DISABLE KEYS */;
/*!40000 ALTER TABLE `pg_amn` ENABLE KEYS */;

-- Dumping structure for table renthunter.pg_ser
DROP TABLE IF EXISTS `pg_ser`;
CREATE TABLE IF NOT EXISTS `pg_ser` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `ser` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_pg_ser_post_pg` (`apa_id`),
  KEY `FK_pg_ser_service_type` (`ser`),
  CONSTRAINT `FK_pg_ser_post_pg` FOREIGN KEY (`apa_id`) REFERENCES `post_pg` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_pg_ser_service_type` FOREIGN KEY (`ser`) REFERENCES `service_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.pg_ser: ~0 rows (approximately)
/*!40000 ALTER TABLE `pg_ser` DISABLE KEYS */;
/*!40000 ALTER TABLE `pg_ser` ENABLE KEYS */;

-- Dumping structure for table renthunter.post_apartment
DROP TABLE IF EXISTS `post_apartment`;
CREATE TABLE IF NOT EXISTS `post_apartment` (
  `id` int(11) NOT NULL auto_increment,
  `name_num` varchar(75) default NULL,
  `street_no` varchar(50) default NULL,
  `address_pro` varchar(200) default NULL,
  `land_mark` varchar(200) default NULL,
  `city` int(11) default NULL,
  `state` int(11) default NULL,
  `country` varchar(75) default NULL,
  `age_pro` varchar(30) default NULL,
  `near_by` varchar(150) default NULL,
  `oter_details` varchar(150) default NULL,
  `tenant_type` varchar(150) default NULL,
  `bhk` int(11) default NULL,
  `area_build` varchar(10) default NULL,
  `adate` varchar(10) default NULL,
  `fur` int(11) default NULL,
  `floor` int(11) default NULL,
  `facings` int(11) default NULL,
  `oter_details1` varchar(150) default NULL,
  `parking` varchar(5) default NULL,
  `oter_details2` varchar(150) default NULL,
  `rent_amt` varchar(20) default NULL,
  `deposit_amt` varchar(20) default NULL,
  `nego` varchar(20) default NULL,
  `maintanece_amt` varchar(20) default NULL,
  `agreement_dur` varchar(20) default NULL,
  `info_leave` varchar(20) default NULL,
  `oter_details3` varchar(150) default NULL,
  `rule_non_veg` varchar(5) default NULL,
  `rule_pets` varchar(5) default NULL,
  `rule_drink` varchar(5) default NULL,
  `rule_water` varchar(5) default NULL,
  `rule_elec` varchar(5) default NULL,
  `oter_details4` varchar(150) default NULL,
  `payment_type` varchar(20) default NULL,
  `img1` varchar(150) default NULL,
  `img2` varchar(150) default NULL,
  `img3` varchar(150) default NULL,
  `img4` varchar(150) default NULL,
  `img5` varchar(150) default NULL,
  `img6` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `cstatus` varchar(30) default 'On Hold',
  `disabled` varchar(1) default 'y',
  `area_build_type` varchar(10) default NULL,
  `area_build_in` varchar(10) default NULL,
  `aname` int(11) default NULL,
  `kyc_name` varchar(75) default NULL,
  `kyc_gender` varchar(30) default NULL,
  `kyc_mob` varchar(10) default NULL,
  `kyc_email` varchar(75) default NULL,
  `kyc_add1` varchar(200) default NULL,
  `kyc_pin` varchar(6) default NULL,
  `kyc_utype` varchar(30) default NULL,
  `kyc_utime` varchar(50) default NULL,
  `counter` int(11) default NULL,
  `yrr` int(11) default NULL,
  `doc_no` varchar(50) default NULL,
  `pstat` varchar(150) default NULL,
  `promo` varchar(1) default 'n',
  `off_code` varchar(20) default NULL,
  `paym` varchar(20) default '0',
  `exp_date` varchar(10) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_post_apartment_bhk_types` (`bhk`),
  KEY `FK_post_apartment_furnished_types` (`fur`),
  KEY `FK_post_apartment_floor_types` (`floor`),
  KEY `FK_post_apartment_facing_types` (`facings`),
  KEY `FK_post_apartment_users` (`cuser`),
  CONSTRAINT `FK_post_apartment_bhk_types` FOREIGN KEY (`bhk`) REFERENCES `bhk_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_apartment_facing_types` FOREIGN KEY (`facings`) REFERENCES `facing_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_apartment_floor_types` FOREIGN KEY (`floor`) REFERENCES `floor_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_apartment_furnished_types` FOREIGN KEY (`fur`) REFERENCES `furnished_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_apartment_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.post_apartment: ~0 rows (approximately)
/*!40000 ALTER TABLE `post_apartment` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_apartment` ENABLE KEYS */;

-- Dumping structure for table renthunter.post_home
DROP TABLE IF EXISTS `post_home`;
CREATE TABLE IF NOT EXISTS `post_home` (
  `id` int(11) NOT NULL auto_increment,
  `name_num` varchar(75) default NULL,
  `street_no` varchar(50) default NULL,
  `address_pro` varchar(200) default NULL,
  `land_mark` varchar(200) default NULL,
  `city` int(11) default NULL,
  `state` int(11) default NULL,
  `country` varchar(75) default NULL,
  `age_pro` varchar(30) default NULL,
  `near_by` varchar(150) default NULL,
  `oter_details` varchar(150) default NULL,
  `tenant_type` varchar(150) default NULL,
  `bhk` int(11) default NULL,
  `area_build` varchar(10) default NULL,
  `adate` varchar(10) default NULL,
  `fur` int(11) default NULL,
  `floor` int(11) default NULL,
  `facings` int(11) default NULL,
  `oter_details1` varchar(150) default NULL,
  `parking` varchar(5) default NULL,
  `oter_details2` varchar(150) default NULL,
  `rent_amt` varchar(20) default NULL,
  `deposit_amt` varchar(20) default NULL,
  `nego` varchar(20) default NULL,
  `maintanece_amt` varchar(20) default NULL,
  `agreement_dur` varchar(20) default NULL,
  `info_leave` varchar(20) default NULL,
  `oter_details3` varchar(150) default NULL,
  `rule_non_veg` varchar(5) default NULL,
  `rule_pets` varchar(5) default NULL,
  `rule_drink` varchar(5) default NULL,
  `rule_water` varchar(5) default NULL,
  `rule_elec` varchar(5) default NULL,
  `oter_details4` varchar(150) default NULL,
  `payment_type` varchar(20) default NULL,
  `img1` varchar(150) default NULL,
  `img2` varchar(150) default NULL,
  `img3` varchar(150) default NULL,
  `img4` varchar(150) default NULL,
  `img5` varchar(150) default NULL,
  `img6` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `cstatus` varchar(30) default 'On Hold',
  `disabled` varchar(1) default 'y',
  `area_build_type` varchar(10) default NULL,
  `area_build_in` varchar(10) default NULL,
  `aname` int(11) default NULL,
  `kyc_name` varchar(75) default NULL,
  `kyc_gender` varchar(30) default NULL,
  `kyc_mob` varchar(10) default NULL,
  `kyc_email` varchar(75) default NULL,
  `kyc_add1` varchar(200) default NULL,
  `kyc_pin` varchar(6) default NULL,
  `kyc_utype` varchar(30) default NULL,
  `kyc_utime` varchar(50) default NULL,
  `counter` int(11) default NULL,
  `yrr` int(11) default NULL,
  `doc_no` varchar(30) default NULL,
  `pstat` varchar(150) default NULL,
  `promo` varchar(1) default 'n',
  `off_code` varchar(20) default NULL,
  `paym` varchar(20) default '0',
  `exp_date` varchar(10) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_post_home_tenant_types` (`tenant_type`),
  KEY `FK_post_home_bhk_types` (`bhk`),
  KEY `FK_post_home_furnished_types` (`fur`),
  KEY `FK_post_home_floor_types` (`floor`),
  KEY `FK_post_home_facing_types` (`facings`),
  KEY `FK_post_home_users` (`cuser`),
  KEY `FK_post_home_near_by` (`near_by`),
  CONSTRAINT `FK_post_home_bhk_types` FOREIGN KEY (`bhk`) REFERENCES `bhk_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_home_facing_types` FOREIGN KEY (`facings`) REFERENCES `facing_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_home_floor_types` FOREIGN KEY (`floor`) REFERENCES `floor_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_home_furnished_types` FOREIGN KEY (`fur`) REFERENCES `furnished_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_home_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.post_home: ~9 rows (approximately)
/*!40000 ALTER TABLE `post_home` DISABLE KEYS */;
REPLACE INTO `post_home` (`id`, `name_num`, `street_no`, `address_pro`, `land_mark`, `city`, `state`, `country`, `age_pro`, `near_by`, `oter_details`, `tenant_type`, `bhk`, `area_build`, `adate`, `fur`, `floor`, `facings`, `oter_details1`, `parking`, `oter_details2`, `rent_amt`, `deposit_amt`, `nego`, `maintanece_amt`, `agreement_dur`, `info_leave`, `oter_details3`, `rule_non_veg`, `rule_pets`, `rule_drink`, `rule_water`, `rule_elec`, `oter_details4`, `payment_type`, `img1`, `img2`, `img3`, `img4`, `img5`, `img6`, `cdate`, `ctime`, `cuser`, `cstatus`, `disabled`, `area_build_type`, `area_build_in`, `aname`, `kyc_name`, `kyc_gender`, `kyc_mob`, `kyc_email`, `kyc_add1`, `kyc_pin`, `kyc_utype`, `kyc_utime`, `counter`, `yrr`, `doc_no`, `pstat`, `promo`, `off_code`, `paym`, `exp_date`) VALUES
	(1, 'ggf', 'fgfg', '', 'df', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 2, '5', '2021-01-22', 4, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '600', '', '', '', '', '', '', '2021-01-13', '2:35 PM', 19, 'On Hold', 'y', 'Built-Up', 'Sqft', 124, 'Shreepad Deshpande1', 'Male', '7777777777', 'nagendras23@gmail.com', 'ggf fgfg', '555555', 'Owner', 'Monday to Friday', 1, 2021, 'RHNTR2021HO0001', 'pay_GOjeB6o0uITahw', 'y', '', '600', '2025-01-17'),
	(2, 'dbgb', 'fgbgb', '', 'gbgb', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 1, '5', '2021-01-22', 2, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '600', '', '', '', '', '', '', '2021-01-16', '5:08 PM', 19, 'On Hold', 'y', 'Built-Up', 'Yard', 82, 'Shreepad Deshpande1', 'Male', '7777777777', 'nagendras23@gmail.com', 'dbgb fgbgb', '555555', 'Owner', 'Monday to Friday', 2, 2021, 'RHNTR2021HO0002', 'pay_GPxqoczAXhAi0v', 'n', '', '600', '2025-02-01'),
	(3, 'ggg', 'ggg', '', 'gfg', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 1, '5', '2021-01-21', 4, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '600', '', '', '', '', '', '', '2021-01-16', '5:10 PM', 19, 'On Hold', 'y', 'Carpet', 'Yard', 82, 'Shreepad Deshpande1', 'Male', '7777777777', 'nagendras23@gmail.com', 'ggg ggg', '555555', 'Owner', 'Monday to Friday', 3, 2021, 'RHNTR2021HO0003', 'pay_GPxtIiCjjTzJ0P', 'n', '', '600', '2025-01-16'),
	(4, 'grthgrh', 'rttrh', '', 'fgg', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 1, '55', '2021-01-21', 2, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '0', '', '', '', '', '', '', '2021-01-17', '1:48 PM', 19, 'On Hold', 'y', 'Built-Up', 'Yard', 42, 'Shreepad Deshpande1', 'Male', '7777777777', 'nagendras23@gmail.com', 'grthgrh rttrh', '555555', 'Owner', 'Monday to Friday', 4, 2021, 'RHNTR2021HO0004', '', 'n', '', '0', '2021-03-01'),
	(5, 'fggbgrh', 'rgb', '', 'gbgfb', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 2, '5', '2021-01-22', 4, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '600', '', '', '', '', '', '', '2021-01-17', '1:57 PM', 19, 'On Hold', 'y', 'Carpet', 'Yard', 43, 'Shreepad Deshpande1', 'Male', '7777777777', 'nagendras23@gmail.com', 'fggbgrh rgb', '555555', 'Owner', 'Monday to Friday', 5, 2021, 'RHNTR2021HO0005', 'pay_GQJ8tuiAa76NJf', 'n', '', '600', '2025-01-17'),
	(6, 'sddggg', 'sd', '', 'sdfd', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 2, '5', '2021-01-29', 2, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '600', '', '', '', '', '', '', '2021-01-17', '1:59 PM', 19, 'On Hold', 'n', 'Carpet', 'Yard', 49, 'Shreepad Deshpande1', 'Male', '7777777777', 'nagendras23@gmail.com', 'sddggg sd', '555555', 'Owner', 'All Days', 6, 2021, 'RHNTR2021HO0006', 'pay_GQJAvusNISAW7Y', 'n', '', '600', '2021-01-17'),
	(7, 'rrgrhh', 'dghgh', '', 'ghbggh', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 2, '5', '2021-01-30', 4, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '600', '', '', '', '', '', '', '2021-01-24', '8:12 AM', 19, 'On Hold', 'y', 'Carpet', 'Yard', 96, 'Shreepad Deshpande1', 'Female', '7777777777', 'nagendras23@gmail.com', 'rrgrhh dghgh', '555555', 'Owner', 'All Days', 7, 2021, 'RHNTR2021HO0007', 'pay_GSz02Wq9gMOp74', 'n', '', '600', '2025-01-24'),
	(8, 'ffgfdg', 'ffv', '', 'fv', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 2, '5', '2021-01-29', 4, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '1000', '', '', '', '', '', '', '2021-01-27', '8:55 PM', 19, 'On Hold', 'y', 'Carpet', 'Yard', 96, 'Shreepad Deshpande1', 'Male', '7777777777', 'nagendras23@gmail.com', 'ffgfdg ffv', '555555', 'Broker', 'Monday to Friday', 8, 2021, 'RHNTR2021HO0008', 'pay_GWO570TckyOEPU', 'n', '', '1000', '2021-08-01'),
	(9, 'fgfg', 's', '', 'f', 14, 5, 'India', 'Less than 1 Year', '', '', '2', 2, '5', '2021-02-25', 2, NULL, NULL, '', 'y', '', '5', '5', 'n', '', '', '', '', 'y', 'y', 'y', 'y', 'y', '', '600', '', '', '', '', '', '', '2021-02-01', '10:32 PM', 19, 'On Hold', 'y', 'Carpet', 'Yard', 49, 'Shreepad Deshpande1', 'Male', '7777777777', 'nagendras23@gmail.com', 'fgfg s', '555555', 'Owner', 'Monday to Friday', 9, 2021, 'RHNTR2021HO0009', 'pay_GWObBc4vt8uwPV', 'n', '', '600', '2025-02-01');
/*!40000 ALTER TABLE `post_home` ENABLE KEYS */;

-- Dumping structure for table renthunter.post_office
DROP TABLE IF EXISTS `post_office`;
CREATE TABLE IF NOT EXISTS `post_office` (
  `id` int(11) NOT NULL auto_increment,
  `name_num` varchar(75) default NULL,
  `street_no` varchar(50) default NULL,
  `address_pro` varchar(200) default NULL,
  `land_mark` varchar(200) default NULL,
  `city` int(11) default NULL,
  `state` int(11) default NULL,
  `country` varchar(75) default NULL,
  `age_pro` varchar(30) default NULL,
  `near_by` varchar(150) default NULL,
  `oter_details` varchar(150) default NULL,
  `tenant_type` varchar(150) default NULL,
  `area_build` varchar(10) default NULL,
  `adate` varchar(10) default NULL,
  `fur` int(11) default NULL,
  `floor` int(11) default NULL,
  `facings` int(11) default NULL,
  `oter_details1` varchar(150) default NULL,
  `parking` varchar(5) default NULL,
  `oter_details2` varchar(150) default NULL,
  `rent_amt` varchar(20) default NULL,
  `deposit_amt` varchar(20) default NULL,
  `nego` varchar(20) default NULL,
  `maintanece_amt` varchar(20) default NULL,
  `agreement_dur` varchar(20) default NULL,
  `info_leave` varchar(20) default NULL,
  `oter_details3` varchar(150) default NULL,
  `rule_non_veg` varchar(5) default NULL,
  `rule_pets` varchar(5) default NULL,
  `rule_drink` varchar(5) default NULL,
  `rule_water` varchar(5) default NULL,
  `rule_elec` varchar(5) default NULL,
  `oter_details4` varchar(150) default NULL,
  `payment_type` varchar(20) default NULL,
  `img1` varchar(150) default NULL,
  `img2` varchar(150) default NULL,
  `img3` varchar(150) default NULL,
  `img4` varchar(150) default NULL,
  `img5` varchar(150) default NULL,
  `img6` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `cstatus` varchar(30) default 'On Hold',
  `disabled` varchar(1) default 'y',
  `area_build_type` varchar(10) default NULL,
  `area_build_in` varchar(10) default NULL,
  `aname` int(11) default NULL,
  `kyc_name` varchar(50) default NULL,
  `kyc_gender` varchar(30) default NULL,
  `kyc_mob` varchar(10) default NULL,
  `kyc_email` varchar(75) default NULL,
  `kyc_add1` varchar(200) default NULL,
  `kyc_pin` varchar(6) default NULL,
  `kyc_utype` varchar(30) default NULL,
  `kyc_utime` varchar(50) default NULL,
  `counter` int(11) default NULL,
  `yrr` int(11) default NULL,
  `doc_no` varchar(50) default NULL,
  `pstat` varchar(150) default NULL,
  `promo` varchar(1) default 'n',
  `off_code` varchar(20) default NULL,
  `paym` varchar(20) default '0',
  `exp_date` varchar(10) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_post_office_furnished_types` (`fur`),
  KEY `FK_post_office_floor_types` (`floor`),
  KEY `FK_post_office_facing_types` (`facings`),
  KEY `FK_post_office_users` (`cuser`),
  CONSTRAINT `FK_post_office_facing_types` FOREIGN KEY (`facings`) REFERENCES `facing_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_office_floor_types` FOREIGN KEY (`floor`) REFERENCES `floor_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_office_furnished_types` FOREIGN KEY (`fur`) REFERENCES `furnished_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_office_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.post_office: ~0 rows (approximately)
/*!40000 ALTER TABLE `post_office` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_office` ENABLE KEYS */;

-- Dumping structure for table renthunter.post_pg
DROP TABLE IF EXISTS `post_pg`;
CREATE TABLE IF NOT EXISTS `post_pg` (
  `id` int(11) NOT NULL auto_increment,
  `name_num` varchar(75) default NULL,
  `street_no` varchar(50) default NULL,
  `address_pro` varchar(200) default NULL,
  `land_mark` varchar(200) default NULL,
  `city` int(11) default NULL,
  `state` int(11) default NULL,
  `country` varchar(75) default NULL,
  `age_pro` varchar(30) default NULL,
  `near_by` varchar(150) default NULL,
  `oter_details` varchar(150) default NULL,
  `tenant_type` varchar(150) default NULL,
  `adate` varchar(10) default NULL,
  `fur` int(11) default NULL,
  `food` varchar(5) default NULL,
  `food1` varchar(5) default NULL,
  `share` varchar(5) default NULL,
  `share1` varchar(5) default NULL,
  `oter_details1` varchar(150) default NULL,
  `parking` varchar(5) default NULL,
  `oter_details2` varchar(150) default NULL,
  `rent_amt` varchar(20) default NULL,
  `deposit_amt` varchar(20) default NULL,
  `nego` varchar(20) default NULL,
  `maintanece_amt` varchar(20) default NULL,
  `agreement_dur` varchar(20) default NULL,
  `info_leave` varchar(20) default NULL,
  `oter_details3` varchar(150) default NULL,
  `rule_non_veg` varchar(5) default NULL,
  `rule_pets` varchar(5) default NULL,
  `rule_drink` varchar(5) default NULL,
  `rule_water` varchar(5) default NULL,
  `rule_elec` varchar(5) default NULL,
  `oter_details4` varchar(150) default NULL,
  `payment_type` varchar(20) default NULL,
  `img1` varchar(150) default NULL,
  `img2` varchar(150) default NULL,
  `img3` varchar(150) default NULL,
  `img4` varchar(150) default NULL,
  `img5` varchar(150) default NULL,
  `img6` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `cstatus` varchar(30) default 'On Hold',
  `disabled` varchar(1) default 'y',
  `aname` int(11) default NULL,
  `kyc_name` varchar(75) default NULL,
  `kyc_gender` varchar(30) default NULL,
  `kyc_mob` varchar(10) default NULL,
  `kyc_email` varchar(75) default NULL,
  `kyc_add1` varchar(200) default NULL,
  `kyc_pin` varchar(6) default NULL,
  `kyc_utype` varchar(30) default NULL,
  `kyc_utime` varchar(50) default NULL,
  `counter` int(11) default NULL,
  `yrr` int(11) default NULL,
  `doc_no` varchar(50) default NULL,
  `pstat` varchar(150) default NULL,
  `promo` varchar(1) default 'n',
  `off_code` varchar(20) default NULL,
  `paym` varchar(20) default '0',
  `exp_date` varchar(10) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_post_pg_furnished_types` (`fur`),
  KEY `FK_post_pg_users` (`cuser`),
  CONSTRAINT `FK_post_pg_furnished_types` FOREIGN KEY (`fur`) REFERENCES `furnished_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_pg_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.post_pg: ~0 rows (approximately)
/*!40000 ALTER TABLE `post_pg` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_pg` ENABLE KEYS */;

-- Dumping structure for table renthunter.post_shops
DROP TABLE IF EXISTS `post_shops`;
CREATE TABLE IF NOT EXISTS `post_shops` (
  `id` int(11) NOT NULL auto_increment,
  `name_num` varchar(75) default NULL,
  `street_no` varchar(50) default NULL,
  `address_pro` varchar(200) default NULL,
  `land_mark` varchar(200) default NULL,
  `city` int(11) default NULL,
  `state` int(11) default NULL,
  `country` varchar(75) default NULL,
  `age_pro` varchar(30) default NULL,
  `near_by` varchar(150) default NULL,
  `oter_details` varchar(150) default NULL,
  `tenant_type` varchar(150) default NULL,
  `area_build` varchar(10) default NULL,
  `adate` varchar(10) default NULL,
  `fur` int(11) default NULL,
  `floor` int(11) default NULL,
  `facings` int(11) default NULL,
  `oter_details1` varchar(150) default NULL,
  `parking` varchar(5) default NULL,
  `oter_details2` varchar(150) default NULL,
  `rent_amt` varchar(20) default NULL,
  `deposit_amt` varchar(20) default NULL,
  `nego` varchar(20) default NULL,
  `maintanece_amt` varchar(20) default NULL,
  `agreement_dur` varchar(20) default NULL,
  `info_leave` varchar(20) default NULL,
  `oter_details3` varchar(150) default NULL,
  `rule_non_veg` varchar(5) default NULL,
  `rule_pets` varchar(5) default NULL,
  `rule_drink` varchar(5) default NULL,
  `rule_water` varchar(5) default NULL,
  `rule_elec` varchar(5) default NULL,
  `oter_details4` varchar(150) default NULL,
  `payment_type` varchar(20) default NULL,
  `img1` varchar(150) default NULL,
  `img2` varchar(150) default NULL,
  `img3` varchar(150) default NULL,
  `img4` varchar(150) default NULL,
  `img5` varchar(150) default NULL,
  `img6` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `cstatus` varchar(30) default 'On Hold',
  `disabled` varchar(1) default 'y',
  `area_build_type` varchar(10) default NULL,
  `area_build_in` varchar(10) default NULL,
  `aname` int(11) default NULL,
  `kyc_name` varchar(50) default NULL,
  `kyc_gender` varchar(30) default NULL,
  `kyc_mob` varchar(10) default NULL,
  `kyc_email` varchar(75) default NULL,
  `kyc_add1` varchar(200) default NULL,
  `kyc_pin` varchar(6) default NULL,
  `kyc_utype` varchar(30) default NULL,
  `kyc_utime` varchar(50) default NULL,
  `counter` int(11) default NULL,
  `yrr` int(11) default NULL,
  `doc_no` varchar(50) default NULL,
  `pstat` varchar(150) default NULL,
  `promo` varchar(1) default 'n',
  `off_code` varchar(20) default NULL,
  `paym` varchar(20) default '0',
  `exp_date` varchar(10) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_post_shops_furnished_types` (`fur`),
  KEY `FK_post_shops_floor_types` (`floor`),
  KEY `FK_post_shops_facing_types` (`facings`),
  KEY `FK_post_shops_users` (`cuser`),
  CONSTRAINT `FK_post_shops_facing_types` FOREIGN KEY (`facings`) REFERENCES `facing_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_shops_floor_types` FOREIGN KEY (`floor`) REFERENCES `floor_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_shops_furnished_types` FOREIGN KEY (`fur`) REFERENCES `furnished_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_shops_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.post_shops: ~0 rows (approximately)
/*!40000 ALTER TABLE `post_shops` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_shops` ENABLE KEYS */;

-- Dumping structure for table renthunter.post_specials
DROP TABLE IF EXISTS `post_specials`;
CREATE TABLE IF NOT EXISTS `post_specials` (
  `id` int(11) NOT NULL auto_increment,
  `name_num` varchar(75) default NULL,
  `street_no` varchar(50) default NULL,
  `address_pro` varchar(200) default NULL,
  `land_mark` varchar(200) default NULL,
  `city` int(11) default NULL,
  `state` int(11) default NULL,
  `country` varchar(75) default NULL,
  `age_pro` varchar(30) default NULL,
  `near_by` varchar(150) default NULL,
  `oter_details` varchar(150) default NULL,
  `rtype` varchar(175) default NULL,
  `occu` varchar(20) default NULL,
  `veg` varchar(5) default NULL,
  `nonveg` varchar(5) default NULL,
  `bothh` varchar(5) default NULL,
  `nrooms` varchar(30) default NULL,
  `rooms` varchar(5) default NULL,
  `hall` varchar(5) default NULL,
  `area_build` varchar(10) default NULL,
  `adate` varchar(10) default NULL,
  `fur` int(11) default NULL,
  `floor` int(11) default NULL,
  `facings` int(11) default NULL,
  `oter_details1` varchar(150) default NULL,
  `parking` varchar(5) default NULL,
  `oter_details2` varchar(150) default NULL,
  `rent_amt` varchar(20) default NULL,
  `deposit_amt` varchar(20) default NULL,
  `nego` varchar(20) default NULL,
  `maintanece_amt` varchar(20) default NULL,
  `agreement_dur` varchar(20) default NULL,
  `info_leave` varchar(20) default NULL,
  `oter_details3` varchar(150) default NULL,
  `rule_non_veg` varchar(5) default NULL,
  `rule_pets` varchar(5) default NULL,
  `rule_drink` varchar(5) default NULL,
  `rule_water` varchar(5) default NULL,
  `rule_elec` varchar(5) default NULL,
  `oter_details4` varchar(150) default NULL,
  `payment_type` varchar(20) default NULL,
  `img1` varchar(150) default NULL,
  `img2` varchar(150) default NULL,
  `img3` varchar(150) default NULL,
  `img4` varchar(150) default NULL,
  `img5` varchar(150) default NULL,
  `img6` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `cstatus` varchar(30) default 'On Hold',
  `disabled` varchar(1) default 'y',
  `area_build_type` varchar(10) default NULL,
  `area_build_in` varchar(10) default NULL,
  `Column 55` varchar(10) default NULL,
  `aname` int(11) default NULL,
  `kyc_name` varchar(75) default NULL,
  `kyc_gender` varchar(30) default NULL,
  `kyc_mob` varchar(10) default NULL,
  `kyc_email` varchar(75) default NULL,
  `kyc_add1` varchar(200) default NULL,
  `kyc_pin` varchar(6) default NULL,
  `kyc_utype` varchar(30) default NULL,
  `kyc_utime` varchar(50) default NULL,
  `counter` int(11) default NULL,
  `yrr` int(11) default NULL,
  `doc_no` varchar(50) default NULL,
  `pstat` varchar(150) default NULL,
  `promo` varchar(1) default 'n',
  `off_code` varchar(20) default NULL,
  `paym` varchar(20) default '0',
  `exp_date` varchar(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.post_specials: ~0 rows (approximately)
/*!40000 ALTER TABLE `post_specials` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_specials` ENABLE KEYS */;

-- Dumping structure for table renthunter.post_warehouse
DROP TABLE IF EXISTS `post_warehouse`;
CREATE TABLE IF NOT EXISTS `post_warehouse` (
  `id` int(11) NOT NULL auto_increment,
  `name_num` varchar(75) default NULL,
  `street_no` varchar(50) default NULL,
  `address_pro` varchar(200) default NULL,
  `land_mark` varchar(200) default NULL,
  `city` int(11) default NULL,
  `state` int(11) default NULL,
  `country` varchar(75) default NULL,
  `age_pro` varchar(30) default NULL,
  `near_by` varchar(150) default NULL,
  `oter_details` varchar(150) default NULL,
  `tenant_type` varchar(150) default NULL,
  `area_build` varchar(10) default NULL,
  `adate` varchar(10) default NULL,
  `fur` int(11) default NULL,
  `floor` int(11) default NULL,
  `facings` int(11) default NULL,
  `oter_details1` varchar(150) default NULL,
  `parking` varchar(5) default NULL,
  `oter_details2` varchar(150) default NULL,
  `rent_amt` varchar(20) default NULL,
  `deposit_amt` varchar(20) default NULL,
  `nego` varchar(20) default NULL,
  `maintanece_amt` varchar(20) default NULL,
  `agreement_dur` varchar(20) default NULL,
  `info_leave` varchar(20) default NULL,
  `oter_details3` varchar(150) default NULL,
  `rule_non_veg` varchar(5) default NULL,
  `rule_pets` varchar(5) default NULL,
  `rule_drink` varchar(5) default NULL,
  `rule_water` varchar(5) default NULL,
  `rule_elec` varchar(5) default NULL,
  `oter_details4` varchar(150) default NULL,
  `payment_type` varchar(20) default NULL,
  `img1` varchar(150) default NULL,
  `img2` varchar(150) default NULL,
  `img3` varchar(150) default NULL,
  `img4` varchar(150) default NULL,
  `img5` varchar(150) default NULL,
  `img6` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `cstatus` varchar(30) default 'On Hold',
  `disabled` varchar(1) default 'y',
  `area_build_type` varchar(10) default NULL,
  `area_build_in` varchar(10) default NULL,
  `aname` int(11) default NULL,
  `kyc_name` varchar(75) default NULL,
  `kyc_gender` varchar(30) default NULL,
  `kyc_mob` varchar(10) default NULL,
  `kyc_email` varchar(75) default NULL,
  `kyc_add1` varchar(200) default NULL,
  `kyc_pin` varchar(6) default NULL,
  `kyc_utype` varchar(30) default NULL,
  `kyc_utime` varchar(30) default NULL,
  `counter` int(11) default NULL,
  `yrr` int(11) default NULL,
  `doc_no` varchar(50) default NULL,
  `pstat` varchar(150) default NULL,
  `promo` varchar(1) default 'n',
  `off_code` varchar(20) default NULL,
  `paym` varchar(20) default '0',
  `exp_date` varchar(10) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_post_warehouse_furnished_types` (`fur`),
  KEY `FK_post_warehouse_floor_types` (`floor`),
  KEY `FK_post_warehouse_facing_types` (`facings`),
  KEY `FK_post_warehouse_users` (`cuser`),
  CONSTRAINT `FK_post_warehouse_facing_types` FOREIGN KEY (`facings`) REFERENCES `facing_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_warehouse_floor_types` FOREIGN KEY (`floor`) REFERENCES `floor_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_warehouse_furnished_types` FOREIGN KEY (`fur`) REFERENCES `furnished_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_post_warehouse_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.post_warehouse: ~0 rows (approximately)
/*!40000 ALTER TABLE `post_warehouse` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_warehouse` ENABLE KEYS */;

-- Dumping structure for table renthunter.promo_settings
DROP TABLE IF EXISTS `promo_settings`;
CREATE TABLE IF NOT EXISTS `promo_settings` (
  `id` int(11) NOT NULL auto_increment,
  `pname` varchar(50) default NULL,
  `pname1` varchar(50) default NULL,
  `ttl` varchar(10) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_promo_settings_users` (`cuser`),
  CONSTRAINT `FK_promo_settings_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.promo_settings: ~1 rows (approximately)
/*!40000 ALTER TABLE `promo_settings` DISABLE KEYS */;
REPLACE INTO `promo_settings` (`id`, `pname`, `pname1`, `ttl`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'Home', '6', '10', '2021-01-13', '2:25 PM', 19);
/*!40000 ALTER TABLE `promo_settings` ENABLE KEYS */;

-- Dumping structure for table renthunter.property_status
DROP TABLE IF EXISTS `property_status`;
CREATE TABLE IF NOT EXISTS `property_status` (
  `id` int(11) NOT NULL auto_increment,
  `home_dis` varchar(1) default NULL,
  `apart_dis` varchar(1) default NULL,
  `pg_dis` varchar(1) default NULL,
  `off_dis` varchar(1) default NULL,
  `shop_dis` varchar(1) default NULL,
  `ware_dis` varchar(1) default NULL,
  `spcl_dis` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_property_status_users` (`cuser`),
  CONSTRAINT `FK_property_status_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.property_status: ~1 rows (approximately)
/*!40000 ALTER TABLE `property_status` DISABLE KEYS */;
REPLACE INTO `property_status` (`id`, `home_dis`, `apart_dis`, `pg_dis`, `off_dis`, `shop_dis`, `ware_dis`, `spcl_dis`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'y', 'y', 'y', 'y', 'y', 'y', 'y', '2021-01-07', '2:16 PM', 16);
/*!40000 ALTER TABLE `property_status` ENABLE KEYS */;

-- Dumping structure for table renthunter.register_temp
DROP TABLE IF EXISTS `register_temp`;
CREATE TABLE IF NOT EXISTS `register_temp` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(50) default NULL,
  `email` varchar(75) default NULL,
  `mob` varchar(10) default NULL,
  `otp` varchar(10) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.register_temp: ~6 rows (approximately)
/*!40000 ALTER TABLE `register_temp` DISABLE KEYS */;
REPLACE INTO `register_temp` (`id`, `name`, `email`, `mob`, `otp`, `cdate`, `ctime`) VALUES
	(14, 'adc', '', '8746513153', '5740', '2020-12-20', '2:06 PM'),
	(24, '7777777777', '', '9743157019', '4646', '2020-12-21', '8:02 AM'),
	(77, '', '', '9743157018', '4140', '2020-12-21', '12:14 PM'),
	(78, '7777777777', '', '7777775654', '1961', '2021-01-07', '11:49 PM'),
	(79, '', '', '9019809926', '7272', '2022-09-10', '9:31 AM'),
	(80, '', '', '8105734993', '7148', '2022-09-10', '3:15 PM');
/*!40000 ALTER TABLE `register_temp` ENABLE KEYS */;

-- Dumping structure for table renthunter.rental_types
DROP TABLE IF EXISTS `rental_types`;
CREATE TABLE IF NOT EXISTS `rental_types` (
  `id` int(11) NOT NULL auto_increment,
  `rtype` varchar(75) default NULL,
  `disabled` varchar(1) default 'n',
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.rental_types: ~7 rows (approximately)
/*!40000 ALTER TABLE `rental_types` DISABLE KEYS */;
REPLACE INTO `rental_types` (`id`, `rtype`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(4, 'Function Hall', 'n', '2020-04-08', '10:16 AM', 16),
	(5, 'Resot', 'n', '2020-04-08', '10:18 AM', 16),
	(6, 'Restaurant', 'n', '2020-04-08', '10:18 AM', 16),
	(7, 'lodge', 'n', '2020-04-08', '10:18 AM', 16),
	(8, ' Destination wedding', 'n', '2020-04-08', '10:19 AM', 16),
	(9, 'Theatre', 'n', '2020-04-12', '10:07 AM', 16),
	(10, 'Deva', 'n', '2020-07-01', '8:37 PM', 16);
/*!40000 ALTER TABLE `rental_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.report_property
DROP TABLE IF EXISTS `report_property`;
CREATE TABLE IF NOT EXISTS `report_property` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(75) default NULL,
  `mob` varchar(10) default NULL,
  `email` varchar(75) default NULL,
  `msg` varchar(500) default NULL,
  `cid` int(11) default NULL,
  `ctype` varchar(500) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.report_property: ~2 rows (approximately)
/*!40000 ALTER TABLE `report_property` DISABLE KEYS */;
REPLACE INTO `report_property` (`id`, `name`, `mob`, `email`, `msg`, `cid`, `ctype`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'nags', '8105734993', 'nagendras23@gmail.com', 'test on report a property', 14, 'HOME', '2020-11-20', '12:07 PM', NULL),
	(2, 'sddv', '5454564551', 'shreepad.dshpnd44@gmail.com', 'dscd', 2, 'HOME', '2020-12-15', '11:29 AM', NULL);
/*!40000 ALTER TABLE `report_property` ENABLE KEYS */;

-- Dumping structure for table renthunter.rules_types
DROP TABLE IF EXISTS `rules_types`;
CREATE TABLE IF NOT EXISTS `rules_types` (
  `id` int(11) NOT NULL auto_increment,
  `rname` varchar(150) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_rules_types_users` (`cuser`),
  CONSTRAINT `FK_rules_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.rules_types: ~6 rows (approximately)
/*!40000 ALTER TABLE `rules_types` DISABLE KEYS */;
REPLACE INTO `rules_types` (`id`, `rname`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'Throw waste in dustbin', 'n', '2020-04-12', '6:22 PM', 16),
	(2, 'Girls not allowed in the PG', 'n', '2020-04-12', '6:23 PM', 16),
	(3, 'Boys not allowed in the PG', 'n', '2020-04-12', '6:23 PM', 16),
	(4, 'Cooking not allowed', 'n', '2020-04-12', '6:24 PM', 16),
	(5, 'Park Vehicles at the parking space', 'n', '2020-04-12', '6:25 PM', 16),
	(6, 'Fixed Timing for Coming Back at Night in PG', 'n', '2020-04-12', '6:28 PM', 16);
/*!40000 ALTER TABLE `rules_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.save_property
DROP TABLE IF EXISTS `save_property`;
CREATE TABLE IF NOT EXISTS `save_property` (
  `id` int(11) NOT NULL auto_increment,
  `cid` int(11) default NULL,
  `ctype` varchar(50) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_save_property_users` (`cuser`),
  CONSTRAINT `FK_save_property_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.save_property: ~8 rows (approximately)
/*!40000 ALTER TABLE `save_property` DISABLE KEYS */;
REPLACE INTO `save_property` (`id`, `cid`, `ctype`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 3, 'HOME', '2020-11-20', '1:33 PM', 19),
	(2, 22, 'HOME', '2020-11-24', '5:28 PM', 19),
	(3, 38, 'HOME', '2020-11-24', '5:29 PM', 19),
	(4, 26, 'HOME', '2020-11-24', '5:32 PM', 19),
	(5, 25, 'HOME', '2020-11-24', '5:33 PM', 19),
	(6, 22, 'HOME', '2020-11-24', '5:39 PM', 19),
	(7, 2, 'HOME', '2020-12-15', '11:42 AM', 19),
	(8, 3, 'HOME', '2020-12-15', '11:43 AM', 19);
/*!40000 ALTER TABLE `save_property` ENABLE KEYS */;

-- Dumping structure for table renthunter.service_type
DROP TABLE IF EXISTS `service_type`;
CREATE TABLE IF NOT EXISTS `service_type` (
  `id` int(11) NOT NULL auto_increment,
  `stype` varchar(50) default NULL,
  `fclass` varchar(20) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_service_type_users` (`cuser`),
  CONSTRAINT `FK_service_type_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.service_type: ~25 rows (approximately)
/*!40000 ALTER TABLE `service_type` DISABLE KEYS */;
REPLACE INTO `service_type` (`id`, `stype`, `fclass`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(2, 'Maid Service', 'Glyphycon', 'n', '2020-04-12', '9:42 AM', 16),
	(3, 'Security Services', 'Glyphycon', 'n', '2020-04-12', '9:42 AM', 16),
	(4, 'Water Can Doorstep Delivery', 'Glyphycon', 'n', '2020-04-12', '9:43 AM', 16),
	(5, 'Office Boy', 'Glyphycon', 'n', '2020-04-12', '9:44 AM', 16),
	(6, 'Reception', 'Glyphycon', 'n', '2020-04-12', '9:45 AM', 16),
	(7, 'Telecaller ', 'Glyphycon', 'n', '2020-04-12', '9:45 AM', 16),
	(8, 'Liftman ', 'Glyphycon', 'n', '2020-04-12', '9:46 AM', 16),
	(9, 'Pickup and Drop Service', 'Glyphycon', 'n', '2020-04-12', '9:47 AM', 16),
	(10, 'Plumber Service', 'Glyphycon', 'n', '2020-04-12', '9:48 AM', 16),
	(11, 'Electrician Service', 'Glyphycon', 'n', '2020-04-12', '9:48 AM', 16),
	(12, 'Mechanic Service', 'Glyphycon', 'n', '2020-04-12', '9:48 AM', 16),
	(13, 'Painter', 'Glyphycon', 'n', '2020-04-12', '9:49 AM', 16),
	(14, 'Photographer ', 'Glyphicon', 'n', '2020-04-12', '10:10 AM', 16),
	(15, 'Videographer', 'Glyphicon', 'n', '2020-04-12', '10:11 AM', 16),
	(16, 'Band/Orchestra ', 'Glyphicon', 'n', '2020-04-12', '10:12 AM', 16),
	(17, 'Catering', 'Glyphicon', 'n', '2020-04-12', '10:13 AM', 16),
	(18, 'Disk Jockey(DJ)', 'Glyphicon', 'n', '2020-04-12', '10:15 AM', 16),
	(19, 'Stage Decoration', 'Glyphicon', 'n', '2020-04-12', '10:15 AM', 16),
	(20, 'Servents', 'Glyphicon', 'n', '2020-04-12', '10:16 AM', 16),
	(21, 'Waiter/waitress', 'Glyphicon', 'n', '2020-04-12', '10:16 AM', 16),
	(22, 'Manager', 'Glyphicon', 'n', '2020-04-12', '10:17 AM', 16),
	(23, 'Pandal Service', 'Glyphicon', 'n', '2020-04-12', '10:18 AM', 16),
	(24, 'Serial Lights', 'Glyphicon', 'n', '2020-04-12', '10:19 AM', 16),
	(25, 'Cook', 'Glyphicon', 'n', '2020-04-12', '10:19 AM', 16),
	(26, 'Event Manager', 'Glyphicon', 'n', '2020-04-12', '10:21 AM', 16);
/*!40000 ALTER TABLE `service_type` ENABLE KEYS */;

-- Dumping structure for table renthunter.sharing_types
DROP TABLE IF EXISTS `sharing_types`;
CREATE TABLE IF NOT EXISTS `sharing_types` (
  `id` int(11) NOT NULL auto_increment,
  `ttype` varchar(50) default NULL,
  `disabled` varchar(1) default 'n',
  `cdate` varchar(10) default 'n',
  `ctime` varchar(10) default 'n',
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_sharing_types_users` (`cuser`),
  CONSTRAINT `FK_sharing_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.sharing_types: ~10 rows (approximately)
/*!40000 ALTER TABLE `sharing_types` DISABLE KEYS */;
REPLACE INTO `sharing_types` (`id`, `ttype`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 'Single Sharing', 'n', '2020-01-30', '6:14 PM', 16),
	(2, 'Two Sharing', 'n', '2020-01-30', '6:15 PM', 16),
	(3, 'Three Sharing', 'n', '2020-04-12', '10:04 AM', 16),
	(4, 'Four Sharing', 'n', '2020-04-12', '10:04 AM', 16),
	(5, 'Five Sharing', 'n', '2020-04-12', '10:04 AM', 16),
	(6, 'Six Sharing', 'n', '2020-04-12', '10:05 AM', 16),
	(7, 'Seven Sharing', 'n', '2020-04-12', '10:05 AM', 16),
	(8, 'Eight Sharing', 'n', '2020-04-12', '10:05 AM', 16),
	(9, 'Nine Sharing', 'n', '2020-04-12', '10:06 AM', 16),
	(10, 'Ten Sharing', 'n', '2020-04-12', '10:06 AM', 16);
/*!40000 ALTER TABLE `sharing_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.shops_amn
DROP TABLE IF EXISTS `shops_amn`;
CREATE TABLE IF NOT EXISTS `shops_amn` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `amn` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_shops_amn_post_shops` (`apa_id`),
  KEY `FK_shops_amn_amenities_type` (`amn`),
  KEY `FK_shops_amn_users` (`cuser`),
  CONSTRAINT `FK_shops_amn_amenities_type` FOREIGN KEY (`amn`) REFERENCES `amenities_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_shops_amn_post_shops` FOREIGN KEY (`apa_id`) REFERENCES `post_shops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_shops_amn_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.shops_amn: ~0 rows (approximately)
/*!40000 ALTER TABLE `shops_amn` DISABLE KEYS */;
/*!40000 ALTER TABLE `shops_amn` ENABLE KEYS */;

-- Dumping structure for table renthunter.shops_ser
DROP TABLE IF EXISTS `shops_ser`;
CREATE TABLE IF NOT EXISTS `shops_ser` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `ser` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_shops_ser_post_shops` (`apa_id`),
  KEY `FK_shops_ser_service_type` (`ser`),
  KEY `FK_shops_ser_users` (`cuser`),
  CONSTRAINT `FK_shops_ser_post_shops` FOREIGN KEY (`apa_id`) REFERENCES `post_shops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_shops_ser_service_type` FOREIGN KEY (`ser`) REFERENCES `service_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_shops_ser_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.shops_ser: ~0 rows (approximately)
/*!40000 ALTER TABLE `shops_ser` DISABLE KEYS */;
/*!40000 ALTER TABLE `shops_ser` ENABLE KEYS */;

-- Dumping structure for table renthunter.smtp_details
DROP TABLE IF EXISTS `smtp_details`;
CREATE TABLE IF NOT EXISTS `smtp_details` (
  `id` int(11) NOT NULL auto_increment,
  `smtp` varchar(50) default NULL,
  `port` varchar(10) default NULL,
  `email` varchar(75) default NULL,
  `pwd` varchar(30) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_smtp_details_users` (`cuser`),
  CONSTRAINT `FK_smtp_details_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.smtp_details: ~1 rows (approximately)
/*!40000 ALTER TABLE `smtp_details` DISABLE KEYS */;
REPLACE INTO `smtp_details` (`id`, `smtp`, `port`, `email`, `pwd`, `cdate`, `ctime`, `cuser`) VALUES
	(2, 'smtpout.secureserver.net', '587', 'support@renthunter.in', 'Renthunter@35', '2019-10-05', '7:57 PM', 16);
/*!40000 ALTER TABLE `smtp_details` ENABLE KEYS */;

-- Dumping structure for table renthunter.specials_amn
DROP TABLE IF EXISTS `specials_amn`;
CREATE TABLE IF NOT EXISTS `specials_amn` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `amn` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.specials_amn: ~31 rows (approximately)
/*!40000 ALTER TABLE `specials_amn` DISABLE KEYS */;
REPLACE INTO `specials_amn` (`id`, `apa_id`, `amn`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 3, 1, '2020-04-10', '1:06 AM', 19),
	(2, 3, 2, '2020-04-10', '1:06 AM', 19),
	(3, 4, 1, '2020-04-10', '4:01 PM', 28),
	(4, 5, 1, '2020-04-10', '4:05 PM', 28),
	(5, 4, 13, '2020-07-02', '9:53 PM', 30),
	(6, 5, 15, '2020-07-14', '10:05 PM', 31),
	(7, 5, 19, '2020-07-14', '10:05 PM', 31),
	(8, 8, 2, '2020-07-15', '8:09 PM', 33),
	(9, 9, 12, '2020-07-17', '9:30 PM', 19),
	(10, 10, 2, '2020-07-17', '10:15 PM', 34),
	(11, 10, 13, '2020-07-17', '10:15 PM', 34),
	(12, 11, 2, '2020-07-21', '11:54 AM', 19),
	(13, 13, 1, '2020-09-02', '5:25 PM', 19),
	(14, 13, 2, '2020-09-02', '5:25 PM', 19),
	(15, 14, 1, '2020-09-11', '6:35 PM', 19),
	(16, 14, 12, '2020-09-11', '6:35 PM', 19),
	(17, 14, 1, '2020-09-11', '6:36 PM', 19),
	(18, 14, 12, '2020-09-11', '6:36 PM', 19),
	(19, 14, 1, '2020-09-11', '6:36 PM', 19),
	(20, 14, 12, '2020-09-11', '6:36 PM', 19),
	(21, 14, 1, '2020-09-11', '6:36 PM', 19),
	(22, 14, 12, '2020-09-11', '6:36 PM', 19),
	(23, 18, 1, '2020-09-11', '9:34 PM', 19),
	(24, 18, 2, '2020-09-11', '9:34 PM', 19),
	(25, 18, 12, '2020-09-11', '9:34 PM', 19),
	(26, 18, 13, '2020-09-11', '9:34 PM', 19),
	(31, 19, 1, '2020-09-27', '8:40 PM', 19),
	(32, 19, 2, '2020-09-27', '8:40 PM', 19),
	(33, 19, 12, '2020-09-27', '8:40 PM', 19),
	(34, 19, 15, '2020-09-27', '8:40 PM', 19),
	(35, 19, 17, '2020-09-27', '8:40 PM', 19);
/*!40000 ALTER TABLE `specials_amn` ENABLE KEYS */;

-- Dumping structure for table renthunter.specials_ser
DROP TABLE IF EXISTS `specials_ser`;
CREATE TABLE IF NOT EXISTS `specials_ser` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `ser` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.specials_ser: ~8 rows (approximately)
/*!40000 ALTER TABLE `specials_ser` DISABLE KEYS */;
REPLACE INTO `specials_ser` (`id`, `apa_id`, `ser`, `cdate`, `ctime`, `cuser`) VALUES
	(1, 10, 8, '2020-07-17', '10:15 PM', 34),
	(2, 10, 11, '2020-07-17', '10:15 PM', 34),
	(3, 18, 1, '2020-09-11', '9:34 PM', 19),
	(4, 18, 2, '2020-09-11', '9:34 PM', 19),
	(5, 18, 3, '2020-09-11', '9:34 PM', 19),
	(6, 18, 4, '2020-09-11', '9:34 PM', 19),
	(9, 19, 1, '2020-09-27', '8:40 PM', 19),
	(10, 19, 4, '2020-09-27', '8:40 PM', 19);
/*!40000 ALTER TABLE `specials_ser` ENABLE KEYS */;

-- Dumping structure for table renthunter.state_types
DROP TABLE IF EXISTS `state_types`;
CREATE TABLE IF NOT EXISTS `state_types` (
  `id` int(11) NOT NULL auto_increment,
  `sname` varchar(75) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_state_types_users` (`cuser`),
  CONSTRAINT `FK_state_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.state_types: ~30 rows (approximately)
/*!40000 ALTER TABLE `state_types` DISABLE KEYS */;
REPLACE INTO `state_types` (`id`, `sname`, `disabled`, `cdate`, `ctime`, `cuser`) VALUES
	(5, 'Karnataka', 'n', '2020-04-12', '5:41 PM', 16),
	(6, 'Andhra Pradhesh', 'n', '2020-04-12', '5:42 PM', 16),
	(7, 'Arunachal Pradhesh', 'n', '2020-04-12', '5:42 PM', 16),
	(8, 'Assam', 'n', '2020-04-12', '5:42 PM', 16),
	(9, 'Bihar', 'n', '2020-04-12', '5:43 PM', 16),
	(10, 'Chattisgath', 'n', '2020-04-12', '5:43 PM', 16),
	(11, 'Goa', 'n', '2020-04-12', '5:43 PM', 16),
	(12, 'Gujarat', 'n', '2020-04-12', '5:43 PM', 16),
	(13, 'Hariyana', 'n', '2020-04-12', '5:43 PM', 16),
	(14, 'Himachal Pradhesh', 'n', '2020-04-12', '5:43 PM', 16),
	(15, 'Misoram', 'n', '2020-04-12', '5:44 PM', 16),
	(16, 'Jammu & Kashmir', 'n', '2020-04-12', '5:44 PM', 16),
	(17, 'Jharkhand', 'n', '2020-04-12', '5:44 PM', 16),
	(18, 'Kerala', 'n', '2020-04-12', '5:44 PM', 16),
	(19, 'Madhya Pradhesh', 'n', '2020-04-12', '5:44 PM', 16),
	(20, 'Maharashtra', 'n', '2020-04-12', '5:44 PM', 16),
	(21, 'Manipur', 'n', '2020-04-12', '5:44 PM', 16),
	(22, 'Meghalaya', 'n', '2020-04-12', '5:45 PM', 16),
	(23, 'Nagaland', 'n', '2020-04-12', '5:45 PM', 16),
	(24, 'Odisha', 'n', '2020-04-12', '5:46 PM', 16),
	(25, 'Panjab', 'n', '2020-04-12', '5:46 PM', 16),
	(26, 'Rajasthan', 'n', '2020-04-12', '5:46 PM', 16),
	(27, 'Sikkim', 'n', '2020-04-12', '5:46 PM', 16),
	(28, 'Tamil Nadu', 'n', '2020-04-12', '5:46 PM', 16),
	(29, 'Tripura', 'n', '2020-04-12', '5:47 PM', 16),
	(30, 'Telangana', 'n', '2020-04-12', '5:47 PM', 16),
	(31, 'Uttar Pradhesh', 'n', '2020-04-12', '5:47 PM', 16),
	(32, 'Uttarakhand', 'n', '2020-04-12', '5:47 PM', 16),
	(33, 'West Bengal', 'n', '2020-04-12', '5:47 PM', 16),
	(34, 'AP', 'n', '2020-06-08', '7:38 PM', 16);
/*!40000 ALTER TABLE `state_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.tenant_types
DROP TABLE IF EXISTS `tenant_types`;
CREATE TABLE IF NOT EXISTS `tenant_types` (
  `id` int(11) NOT NULL auto_increment,
  `ttype` varchar(50) default NULL,
  `fclass` varchar(20) default NULL,
  `disabled` varchar(1) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `ptype` varchar(50) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_tenant_types_users` (`cuser`),
  CONSTRAINT `FK_tenant_types_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.tenant_types: ~15 rows (approximately)
/*!40000 ALTER TABLE `tenant_types` DISABLE KEYS */;
REPLACE INTO `tenant_types` (`id`, `ttype`, `fclass`, `disabled`, `cdate`, `ctime`, `cuser`, `ptype`) VALUES
	(2, 'Bachelor Male', 'fa-male', 'n', '2019-12-07', '2:55 PM', 16, 'Home'),
	(3, 'Bachelor Female', 'fa-female', 'n', '2020-04-05', '11:41 AM', 16, 'Home'),
	(4, 'Family', 'fa-users', 'n', '2020-04-05', '11:41 AM', 16, 'Home'),
	(5, 'Men', 'fa-male', 'n', '2020-04-05', '11:42 AM', 16, 'PG'),
	(6, 'Women', 'fa-female', 'n', '2020-04-05', '11:42 AM', 16, 'PG'),
	(7, 'Bachelor Male', 'fa-male', 'n', '2020-04-05', '11:42 AM', 16, 'Apartment'),
	(8, 'Bachelor Female', 'fa-female', 'n', '2020-04-05', '11:42 AM', 16, 'Apartment'),
	(9, 'Family', 'fa-users', 'n', '2020-04-05', '11:43 AM', 16, 'Apartment'),
	(11, 'Corporate office', 'Glyphicon', 'n', '2020-04-06', '9:16 PM', 16, 'Office Space'),
	(12, 'Commercial', 'Glyphycon', 'n', '2020-04-10', '6:31 PM', 16, 'Shops'),
	(13, 'Commercial', 'Glyphycon', 'n', '2020-04-10', '6:31 PM', 16, 'Warehouse'),
	(14, 'Any ', 'Glyphycon', 'n', '2020-04-10', '6:34 PM', 16, 'Office Space'),
	(15, 'Any ', 'Glyphycon', 'n', '2020-04-10', '6:34 PM', 16, 'Shops'),
	(16, 'Any ', 'Glyphycon', 'n', '2020-04-10', '6:34 PM', 16, 'Warehouse'),
	(17, 'Any ', 'Glyphycon', 'n', '2020-04-10', '6:35 PM', 16, 'Special Rentals');
/*!40000 ALTER TABLE `tenant_types` ENABLE KEYS */;

-- Dumping structure for table renthunter.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(50) default NULL,
  `pwd` varchar(50) default NULL,
  `firstname` varchar(50) default NULL,
  `email` varchar(50) default NULL,
  `mob` varchar(10) default NULL,
  `created_date` varchar(20) default NULL,
  `type` varchar(15) default NULL,
  `login_date` varchar(30) default NULL,
  `login_time` varchar(10) default NULL,
  `disabled` varchar(1) default NULL,
  `cpwd` varchar(1) default 'n',
  `fpwd` varchar(1) default 'n',
  `aemail` varchar(150) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.users: ~21 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `username`, `pwd`, `firstname`, `email`, `mob`, `created_date`, `type`, `login_date`, `login_time`, `disabled`, `cpwd`, `fpwd`, `aemail`) VALUES
	(16, 'nags', 'nags', 'admin12', 'nagendras234@gmail.com', '8105734995', '2019-07-16', 'Admin', '2022-07-02', '12:58 PM', 'n', 'y', 'y', NULL),
	(18, 'nandy', 'nana', 'nandini', 'nandini.kar14@gmail.com', '8105734994', '2019-11-18', 'user', '2019-12-03', '8:48 PM', 'n', 'n', 'n', NULL),
	(19, '7777777777', 'nags', 'Shreepad Deshpande1', 'nagendras23@gmail.com', '7777777777', '2019-12-04', 'User', '2021-02-06', '8:41 AM', 'n', 'n', 'y', 'nagendras23545@gmail.com'),
	(20, '8674653456', 'nags', 'hjgfhgh', 'nagendras234@gmail.com', '8674653456', '2019-12-04', 'User', '2019-12-04', '3:26 PM', 'n', 'n', 'n', NULL),
	(22, '6666666666', 'Nandu@1234', 'Nandini', 'nagendras234@gmail.com', '6666666666', '2019-12-04', 'User', '2019-12-04', '4:03 PM', 'n', 'n', 'n', NULL),
	(24, 'nagu', 'nagu', 'Nagalingappa', 'nagu@skylamps.in', '5555555555', NULL, 'Marketing', NULL, NULL, 'n', 'n', 'n', NULL),
	(25, '9738828243', 'Hanuman@55', 'Govind', 'govind@mailinator.com', '9738828243', '2020-03-29', 'User', '2022-07-02', '11:44 AM', 'n', 'n', 'y', NULL),
	(26, '7892544337', 'shiddu@Ank', 'shiddu', 'malajure.santosh@gmail.com', '7892544337', '2020-04-09', 'User', '2020-04-09', '8:52 PM', 'n', 'n', 'n', NULL),
	(27, '7892544337', 'shiddu@Ank', 'shiddu', 'malajure.santosh@gmail.com', '7892544337', '2020-04-09', 'User', '2020-04-09', '8:52 PM', 'n', 'n', 'n', NULL),
	(28, '6360398123', 'neeta591An', 'Tiger', 'malajure.santosh@gmail.com', '6360398123', '2020-04-10', 'User', '2020-04-12', '11:14 AM', 'n', 'n', 'n', NULL),
	(29, '9972910335', 'Hanuman@55', 'Govind', 'govind.patil0155@gmail.com', '9972910335', '2020-05-16', 'User', '2020-05-16', '8:48 PM', 'n', 'n', 'n', NULL),
	(30, '8970681862', 'san@123', 'sanm', 'sowjanyagowda95@gmail.com', '8970681862', '2020-07-02', 'User', '2020-07-02', '9:38 PM', 'n', 'n', 'n', NULL),
	(31, '7760377604', 'Hanuman@55', 'Bhavani', 'govind@mailinator.com', '7760377604', '2020-07-14', 'User', '2020-07-14', '9:43 PM', 'n', 'n', 'n', NULL),
	(32, '7760863072', 'yamini@123', 'Yamini', 'yamini@cogknit.com', '7760863072', '2020-07-15', 'User', '2020-07-15', '7:22 PM', 'n', 'n', 'n', NULL),
	(33, '7676598394', 'yamini@123', 'YaminiRAj', 'yaminiraj@cogknit.com', '7676598394', '2020-07-15', 'User', '2020-08-05', '8:07 PM', 'n', 'n', 'n', NULL),
	(34, '9945762433', 'san@123', 'Siju T', 'siju@cogknit.com', '9945762433', '2020-07-17', 'User', '2020-07-17', '9:51 PM', 'n', 'n', 'n', NULL),
	(35, '9743157016', 'ujwal5007', 'sripad', 'shreepad.dshpnd44@gmail.com', '9743157016', '2020-07-17', 'User', '2020-09-13', '8:01 PM', 'n', 'n', 'y', NULL),
	(36, '9743157017', 'ujwal5007', 'sripad', 'shreepad.dshpnd44@gmail.com', '9743157017', '2020-07-17', 'User', '2020-11-12', '11:41 AM', 'n', 'n', 'y', NULL),
	(37, 'Govindpatil', 'Hanuman255', 'Govind', 'govind@renthunter.in', '9738828243', NULL, 'Tech Team', NULL, NULL, 'n', 'n', 'n', NULL),
	(38, '5454564551', 'Nags@1', 'rfrefrefre', 'nags@a.com', '5454564551', '2020-12-15', 'User', '2020-12-15', '10:50 AM', 'n', 'n', 'n', NULL),
	(41, '8978645645', 'Nags@1', 'Nagendra', 'nagendras23@gmail.com', '8978645645', '2020-12-20', 'User', '2020-12-22', '11:37 AM', 'n', 'n', 'n', NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table renthunter.user_cards
DROP TABLE IF EXISTS `user_cards`;
CREATE TABLE IF NOT EXISTS `user_cards` (
  `id` int(11) NOT NULL auto_increment,
  `card_id` int(11) default NULL,
  `pstat` varchar(75) default NULL,
  `doc_no` varchar(75) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `cused` varchar(1) default 'n',
  PRIMARY KEY  (`id`),
  KEY `FK_user_cards_cards_details` (`card_id`),
  KEY `FK_user_cards_users` (`cuser`),
  CONSTRAINT `FK_user_cards_cards_details` FOREIGN KEY (`card_id`) REFERENCES `cards_details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_cards_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.user_cards: ~2 rows (approximately)
/*!40000 ALTER TABLE `user_cards` DISABLE KEYS */;
REPLACE INTO `user_cards` (`id`, `card_id`, `pstat`, `doc_no`, `cdate`, `ctime`, `cuser`, `cused`) VALUES
	(1, 8, 'pay_GSz02Wq9gMOp74', 'RHNTR2021HO0007', '2021-01-24', '8:12 AM', 19, 'y'),
	(2, 2, 'pay_GWObBc4vt8uwPV', 'RHNTR2021HO0009', '2021-02-01', '11:11 PM', 19, 'n');
/*!40000 ALTER TABLE `user_cards` ENABLE KEYS */;

-- Dumping structure for table renthunter.user_plan
DROP TABLE IF EXISTS `user_plan`;
CREATE TABLE IF NOT EXISTS `user_plan` (
  `id` int(11) NOT NULL auto_increment,
  `ptype` varchar(50) default NULL,
  `payment_type` varchar(150) default NULL,
  `pstat` varchar(150) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  `pname` varchar(75) default NULL,
  `cost` varchar(30) default NULL,
  `mon` varchar(30) default NULL,
  `fea1` varchar(150) default NULL,
  `fea2` varchar(150) default NULL,
  `fea3` varchar(150) default NULL,
  `fea4` varchar(150) default NULL,
  `fea5` varchar(150) default NULL,
  `fea6` varchar(150) default NULL,
  `fea7` varchar(150) default NULL,
  `fea8` varchar(150) default NULL,
  `pid` int(11) default NULL,
  `disc` varchar(10) default '0',
  `gst` varchar(10) default '0',
  `disc_val` varchar(10) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.user_plan: ~13 rows (approximately)
/*!40000 ALTER TABLE `user_plan` DISABLE KEYS */;
REPLACE INTO `user_plan` (`id`, `ptype`, `payment_type`, `pstat`, `cdate`, `ctime`, `cuser`, `pname`, `cost`, `mon`, `fea1`, `fea2`, `fea3`, `fea4`, `fea5`, `fea6`, `fea7`, `fea8`, `pid`, `disc`, `gst`, `disc_val`) VALUES
	(1, 'Home', '600', 'pay_GOjeB6o0uITahw', '2021-01-13', '2:35 PM', 19, 'Normal Plan', '600', '3', '222', '333', '444', '555', '', '', '', '', 1, '0', '18', '0.0'),
	(2, 'Home', '600', 'pay_GPxqoczAXhAi0v', '2021-01-16', '5:08 PM', 19, 'Normal Plan', '600', '3', '222', '333', '444', '555', '', '', '', '', 2, '0', '18', '0.0'),
	(3, 'Home', '600', 'pay_GPxtIiCjjTzJ0P', '2021-01-16', '5:10 PM', 19, 'Normal Plan', '600', '3', '222', '333', '444', '555', '', '', '', '', 3, '0', '18', '0.0'),
	(4, 'Home', '600', 'pay_GQIyvphhYjr7ND', '2021-01-17', '1:48 PM', 19, 'Normal Plan', '600', '3', '222', '333', '444', '555', '', '', '', '', 4, '0', '18', '0.0'),
	(5, 'Home', '600', 'pay_GQJ8tuiAa76NJf', '2021-01-17', '1:57 PM', 19, 'Normal Plan', '600', '3', '222', '333', '444', '555', '', '', '', '', 5, '0', '18', '0.0'),
	(6, 'Home', '600', 'pay_GQJAvusNISAW7Y', '2021-01-17', '1:59 PM', 19, 'Normal Plan', '600', '3', '222', '333', '444', '555', '', '', '', '', 6, '0', '18', '0.0'),
	(7, 'Home', '600', 'pay_GSz02Wq9gMOp74', '2021-01-24', '8:12 AM', 19, 'Normal Plan', '600', '3', '222', '333', '444', '555', '', '', '', '', 7, '0', '18', '0.0'),
	(8, 'Home', '0', '', '2021-01-27', '8:55 PM', 19, 'Gest User', '0', '1', '', '', '', '', '', '', '', '', 8, '0', '18', '0.0'),
	(11, 'Home', '0', '', '2021-02-01', '9:06 PM', 19, 'Gest User', '0', '1', '', '', '', '', '', '', '', '', 4, '0', '18', '0.0'),
	(12, 'Home', '0', '', '2021-02-01', '10:32 PM', 19, 'Gest User', '0', '1', '', '', '', '', '', '', '', '', 9, '0', '18', '0.0'),
	(13, 'Home', '0', '', '2021-02-01', '10:37 PM', 19, 'Gest User', '0', '1', '', '', '', '', '', '', '', '', 4, '0', '18', '0.0'),
	(14, 'Home', '1000', 'pay_GWO570TckyOEPU', '2021-02-01', '10:41 PM', 19, 'Special Plan', '1000', '6', '', '', '', '', '', '', '', '', 8, '0', '18', '0.0'),
	(16, 'Home', '600', 'pay_GWObBc4vt8uwPV', '2021-02-01', '11:11 PM', 19, 'Normal Plan', '600', '3', '222', '333', '444', '555', '', '', '', '', 9, '0', '18', '0.0');
/*!40000 ALTER TABLE `user_plan` ENABLE KEYS */;

-- Dumping structure for table renthunter.warehouse_amn
DROP TABLE IF EXISTS `warehouse_amn`;
CREATE TABLE IF NOT EXISTS `warehouse_amn` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `amn` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_warehouse_amn_post_warehouse` (`apa_id`),
  KEY `FK_warehouse_amn_amenities_type` (`amn`),
  KEY `FK_warehouse_amn_users` (`cuser`),
  CONSTRAINT `FK_warehouse_amn_amenities_type` FOREIGN KEY (`amn`) REFERENCES `amenities_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_warehouse_amn_post_warehouse` FOREIGN KEY (`apa_id`) REFERENCES `post_warehouse` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_warehouse_amn_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.warehouse_amn: ~0 rows (approximately)
/*!40000 ALTER TABLE `warehouse_amn` DISABLE KEYS */;
/*!40000 ALTER TABLE `warehouse_amn` ENABLE KEYS */;

-- Dumping structure for table renthunter.warehouse_ser
DROP TABLE IF EXISTS `warehouse_ser`;
CREATE TABLE IF NOT EXISTS `warehouse_ser` (
  `id` int(11) NOT NULL auto_increment,
  `apa_id` int(11) default NULL,
  `ser` int(11) default NULL,
  `cdate` varchar(10) default NULL,
  `ctime` varchar(10) default NULL,
  `cuser` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_warehouse_ser_post_warehouse` (`apa_id`),
  KEY `FK_warehouse_ser_service_type` (`ser`),
  KEY `FK_warehouse_ser_users` (`cuser`),
  CONSTRAINT `FK_warehouse_ser_post_warehouse` FOREIGN KEY (`apa_id`) REFERENCES `post_warehouse` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_warehouse_ser_service_type` FOREIGN KEY (`ser`) REFERENCES `service_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_warehouse_ser_users` FOREIGN KEY (`cuser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table renthunter.warehouse_ser: ~0 rows (approximately)
/*!40000 ALTER TABLE `warehouse_ser` DISABLE KEYS */;
/*!40000 ALTER TABLE `warehouse_ser` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
