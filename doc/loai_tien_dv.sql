-- phpMyAdmin SQL Dump
-- version 4.4.15
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 02, 2020 at 10:12 AM
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
-- Table structure for table `loai_tien_dv`
--

CREATE TABLE IF NOT EXISTS `loai_tien_dv` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price_default` int(11) DEFAULT 0,
  `tinh_theo_so_nguoi` int(11) DEFAULT 1
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `loai_tien_dv`
--

INSERT INTO `loai_tien_dv` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `display_name`, `price_default`, `tinh_theo_so_nguoi`) VALUES
(1, 'thang_may', 0, 0, '2020-06-01 19:07:10', '2020-06-01 19:19:44', 'Thang máy', 50000, 1),
(2, 'may_giat', 0, 0, '2020-06-01 19:07:10', '2020-06-01 19:19:38', 'Máy giặt', 70000, 1),
(3, 'tien_mang', 0, 0, '2020-06-01 19:07:10', '2020-06-01 19:24:44', 'Tiền mạng internet', 100000, 2),
(4, 'tien_wc', 0, 0, '2020-06-01 19:07:10', '2020-06-01 19:24:40', 'Tiền vệ sinh chung', 30000, 1),
(5, 'tien_nuoc', 0, 0, '2020-06-01 19:07:11', '2020-06-01 19:19:24', 'Tiền nước', 100000, 1),
(6, 'quan_ly_chung', 0, 0, '2020-06-01 19:07:11', '2020-06-01 19:24:30', 'Quản lý chung', 100000, 2),
(7, 'tien_chieu_sang', 0, 0, '2020-06-01 19:13:36', '2020-06-01 19:19:12', 'Tiền chiếu sáng', 30000, 1),
(8, 'tu_lanh', 0, 0, '2020-06-01 19:13:36', '2020-06-01 19:24:20', 'Tủ lạnh', 150000, 2),
(9, 'xe_dap_dien', 0, 0, '2020-06-01 19:13:37', '2020-06-01 19:24:13', 'Xe đạp điện', 30000, 2),
(10, 'nong_lanh', 0, 0, '2020-06-01 19:13:37', '2020-06-01 19:18:58', 'Nóng lạnh', 70000, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `loai_tien_dv`
--
ALTER TABLE `loai_tien_dv`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `loai_tien_dv`
--
ALTER TABLE `loai_tien_dv`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
