-- phpMyAdmin SQL Dump
-- version 4.4.15
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 09, 2019 at 09:39 AM
-- Server version: 10.2.14-MariaDB
-- PHP Version: 7.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `htmedia_ta`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(10) unsigned NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `route_id` int(11) DEFAULT 0,
  `seo_keyword` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `seo_description` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `sort_order`, `created_at`, `updated_at`, `name`, `parent_id`, `route_id`, `seo_keyword`, `seo_description`) VALUES
(2, 3, '2019-03-29 23:05:16', '2019-04-09 21:55:47', 'Sản Phẩm', 0, 2, NULL, NULL),
(3, 4, '2019-03-29 23:05:43', '2019-04-19 22:32:38', 'Tin tức', 0, 3, NULL, NULL),
(4, 5, '2019-03-29 23:05:26', '2019-04-09 21:43:52', 'Liên Hệ', 0, 4, NULL, NULL),
(8, 1, '2019-04-14 23:09:32', '2019-04-14 23:09:32', 'Sản Phẩm 1', 2, 2, NULL, NULL),
(11, 2, '2019-04-14 23:10:32', '2019-04-14 23:10:32', 'Sản Phẩm 2.2', 2, 2, NULL, NULL),
(12, 3, '2019-04-14 23:10:47', '2019-04-14 23:10:47', 'Sản Phẩm 2.3', 2, 2, NULL, NULL),
(13, 1, '2019-04-22 01:21:37', '2019-04-22 01:22:12', 'Trang Chủ', 0, 6, NULL, NULL),
(14, 2, '2019-04-29 03:25:58', '2019-04-29 03:25:58', 'Giới thiệu', 0, 8, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
