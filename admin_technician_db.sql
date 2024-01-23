-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 17, 2024 at 12:41 PM
-- Server version: 5.5.68-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin_technician_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', '$2a$10$a1JKlczEWsZVM1Q.gva.VOCK.7C6Y4du6sVWu6qVov.i6ZABCaJc.');

-- --------------------------------------------------------

--
-- Table structure for table `apartments`
--

CREATE TABLE `apartments` (
  `id` int(11) NOT NULL,
  `apartmentName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `apartments`
--

INSERT INTO `apartments` (`id`, `apartmentName`, `location`) VALUES
(1, 'apartment one ', 'street 1, near Abcd, 764129'),
(4, 'apartmeent two', 'plot no 113'),
(6, 'apartment three', 'street 1, near abcd, 764129,abcds'),
(7, 'apartment four', 'street 1, near abcd, 764129,abcd'),
(8, 'apartment five', 'abcd, 123456');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `technician` int(11) NOT NULL,
  `apartment` int(11) NOT NULL,
  `note` text,
  `imageUrls` longtext,
  `status` enum('Rescheduled','Assigned','Inprogress','Unscheduled','Completed','Cancelled') DEFAULT NULL,
  `timeline` varchar(255) DEFAULT NULL,
  `duetime` varchar(255) DEFAULT NULL,
  `responsibilities` longtext,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `title`, `description`, `technician`, `apartment`, `note`, `imageUrls`, `status`, `timeline`, `duetime`, `responsibilities`, `createdAt`, `updatedAt`) VALUES
(1, 'Job Testing 1', 'Job testing Description', 1, 6, 'note for technician', 'images-1700147243343.jpg,images-1700147243349.jpeg', 'Cancelled', '18-11-2023', '09:30 PM', 'Job responsibilities one,job responsibilities two', '2023-11-16 15:03:19', '0000-00-00 00:00:00'),
(2, 'Motor testing', 'testing a motor', 1, 4, '', NULL, 'Cancelled', '16-09-2023', '03:41 PM', '', '2023-11-16 20:41:18', '0000-00-00 00:00:00'),
(3, 'Testing Mic', 'abcd description', 1, 6, 'some note', 'images-1700840085414.jpeg', 'Completed', '25-11-2023', '01:20 AM', 'one,two', '2023-11-24 15:33:37', '0000-00-00 00:00:00'),
(4, 'AC Repairing', 'AC repairing,Assigning these tasks will help ensure that your app undergoes comprehensive testing, covering various aspects such as usability, functionality, performance, security, and user experience across different platforms and regions.', 1, 6, 'Do it properly', NULL, 'Assigned', '09-12-2023', '01:00 PM', '', '2023-12-08 06:20:44', '0000-00-00 00:00:00'),
(5, 'Floor cleaning', 'Floor cleaning,Assigning these tasks will help ensure that your app undergoes comprehensive testing, covering various aspects such as usability, functionality, performance, security, and user experience across different platforms and regions.', 2, 6, 'Clean properly', NULL, 'Assigned', '10-12-2023', '01:50 PM', '', '2023-12-08 06:25:27', '0000-00-00 00:00:00'),
(6, 'Electricity Connection', 'Electricity Connection', 1, 8, '', NULL, 'Assigned', '11-12-2023', '11:57 AM', 'Electricity Connection', '2023-12-08 06:27:31', '0000-00-00 00:00:00'),
(7, 'TV connection', 'TV connection, Assigning these tasks will help ensure that your app undergoes comprehensive testing, covering various aspects such as usability, functionality, performance, security, and user experience across different platforms and regions.', 2, 6, '', NULL, 'Inprogress', '08-12-2023', '12:00 PM', '', '2023-12-08 06:30:28', '0000-00-00 00:00:00'),
(8, 'Carpenter  task', 'carpenter - Assigning these tasks will help ensure that your app undergoes comprehensive testing, covering various aspects such as usability, functionality, performance, security, and user experience across different platforms and regions.', 1, 4, '', NULL, 'Assigned', '20-12-2023', '12:03 PM', '', '2023-12-08 06:33:04', '0000-00-00 00:00:00'),
(9, 'Plumber task', 'Assigning these tasks will help ensure that your app undergoes comprehensive testing, covering various aspects such as usability, functionality, performance, security, and user experience across different platforms and regions.', 2, 8, '', NULL, 'Assigned', '12-12-2023', '12:03 PM', '', '2023-12-08 06:33:48', '0000-00-00 00:00:00'),
(10, 'Room cleaning', 'Assigning these tasks will help ensure that your app undergoes comprehensive testing, covering various aspects such as usability, functionality, performance, security, and user experience across different platforms and regions.', 1, 6, 'DO it properly', 'images-1702018457049.jpg', 'Completed', '13-12-2023', '12:04 PM', 'new responsibilty one,new responsibilty two,new responsibilty three', '2023-12-08 06:34:15', '0000-00-00 00:00:00'),
(11, 'TV and AC Repairing', 'Assigning these tasks will help ensure that your app undergoes comprehensive testing, covering various aspects such as usability, functionality, performance, security, and user experience across different platforms and regions.', 2, 4, '', NULL, 'Assigned', '09-12-2023', '02:05 PM', '', '2023-12-08 06:35:40', '0000-00-00 00:00:00'),
(12, 'new job ', 'new job description', 2, 7, 'job note for technician', 'images-1702018719933.jpeg', 'Assigned', '12-12-2023', '10:30 AM', 'responsibilities list,responsibility two', '2023-12-08 06:58:02', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `technicians`
--

CREATE TABLE `technicians` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `technicians`
--

INSERT INTO `technicians` (`id`, `name`, `email`, `password`) VALUES
(1, 'Ram Das', 'ram@gmail.com', '123456'),
(2, 'John doe', 'john@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `apartments`
--
ALTER TABLE `apartments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `technician` (`technician`),
  ADD KEY `apartment` (`apartment`);

--
-- Indexes for table `technicians`
--
ALTER TABLE `technicians`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `apartments`
--
ALTER TABLE `apartments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `technicians`
--
ALTER TABLE `technicians`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`technician`) REFERENCES `technicians` (`id`),
  ADD CONSTRAINT `jobs_ibfk_2` FOREIGN KEY (`apartment`) REFERENCES `apartments` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
