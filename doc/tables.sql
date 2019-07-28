-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2019 at 12:53 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlmh`
--

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `id` int(15) NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_edit` int(11) DEFAULT 0,
  `type_show` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'BASIC, DRAG_DROP',
  `count_item_of_page` int(11) DEFAULT 30,
  `model_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `form_data_type` int(11) DEFAULT 1,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `import` int(11) DEFAULT NULL,
  `export` int(11) DEFAULT NULL,
  `have_delete` int(11) DEFAULT 0,
  `have_add_new` int(11) NOT NULL DEFAULT 0,
  `table_tab` int(11) DEFAULT 0,
  `table_tab_map_column` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `sort_order`, `name`, `display_name`, `is_edit`, `type_show`, `count_item_of_page`, `model_name`, `parent_id`, `form_data_type`, `created_at`, `updated_at`, `import`, `export`, `have_delete`, `have_add_new`, `table_tab`, `table_tab_map_column`) VALUES
(26, 4, 'tables', 'Category', 0, '1', 30, 'Tables', 0, 1, '2019-02-21', '2019-02-21', NULL, NULL, 0, 0, 0, '0'),
(31, 2, 'block_item', 'block_item', 0, '1', 30, 'block_item', 34, 1, '2019-04-15', '2019-05-01', NULL, NULL, 0, 0, 0, '0'),
(32, 1, 'block', 'block', 0, '1', 30, NULL, 34, 2, '2019-04-15', '2019-05-01', NULL, NULL, 0, 0, 0, '0'),
(35, 4, 'zzz_user', 'User', 0, '0', 30, '', 26, 1, '2019-05-01', '2019-06-06', 0, 0, 0, 0, 0, '0'),
(37, 1, 'zzz_hang_ve', 'Quản lý hàng về', 1, '0', 30, 'HangVe', 0, 1, '2019-05-04', '2019-07-07', 0, 1, 1, 0, 42, 'status'),
(38, 3, 'zzz_so_luong_hang_ve', 'Số lượng hàng về', 1, '0', 30, '', 26, 1, '2019-05-25', '2019-05-28', 0, 0, 0, 0, 0, '0'),
(39, 2, 'zzz_ten_hang_ve', 'Tên hàng về', 1, '0', 30, '', 26, 2, '2019-05-28', '2019-05-28', 0, 0, 0, 0, 0, '0'),
(41, 1, 'zzz_nvkd_nhap_hang', 'NVKD nhập hàng', 1, '0', 30, '', 26, 1, '2019-05-29', '2019-05-29', 0, 0, 0, 0, 0, '0'),
(42, 2, 'zzz_hang_ve_status', 'Trạng thái hàng về', 1, '1', 30, '', 0, 2, '2019-06-08', '2019-06-14', 0, 0, 0, 0, 0, '0'),
(43, 3, 'zzz__hang_ve_comment', 'Comment hàng về', 1, '', 30, '', 0, 1, '2019-06-09', '2019-06-09', 0, 0, 0, 0, 0, '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
