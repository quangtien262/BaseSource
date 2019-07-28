-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2019 at 12:54 PM
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
-- Table structure for table `table_column`
--

CREATE TABLE `table_column` (
  `id` int(11) NOT NULL,
  `table_id` int(11) DEFAULT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value_default` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_null` tinyint(2) DEFAULT 1,
  `max_length` int(11) DEFAULT NULL,
  `edit` tinyint(1) DEFAULT 1,
  `type_show` int(11) DEFAULT NULL,
  `add2search` int(11) DEFAULT NULL,
  `search_type` int(11) DEFAULT 1,
  `type_edit` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `show_in_list` tinyint(4) DEFAULT 0,
  `require` int(11) DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `parent_id` int(11) DEFAULT 0,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `select_table_id` int(11) DEFAULT NULL,
  `conditions` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `fast_edit` int(2) DEFAULT 0,
  `table_link` int(11) DEFAULT 0,
  `column_table_link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `class` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sub_list` tinyint(2) DEFAULT 0,
  `sub_column_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `config_add_sub_table` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bg_in_list` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `add_column_in_list` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `column_name_map_to_comment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `table_column`
--

INSERT INTO `table_column` (`id`, `table_id`, `display_name`, `name`, `type`, `value_default`, `is_null`, `max_length`, `edit`, `type_show`, `add2search`, `search_type`, `type_edit`, `show_in_list`, `require`, `sort_order`, `parent_id`, `created_at`, `updated_at`, `select_table_id`, `conditions`, `fast_edit`, `table_link`, `column_table_link`, `class`, `sub_list`, `sub_column_name`, `config_add_sub_table`, `bg_in_list`, `add_column_in_list`, `column_name_map_to_comment`) VALUES
(4, 9, 'name', 'name', 'VARCHAR', '100', 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-02-11', '2019-02-18', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(7, 9, 'Image', 'image', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(8, 13, 'Name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(9, 13, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 13, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(21, 15, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(22, 15, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(24, 15, 'sort_order', 'sort_order', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(27, 17, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(28, 17, 'describe', 'describe', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 3, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(29, 17, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 2, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(30, 17, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 4, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(31, 17, 'content', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(32, 18, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(33, 18, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 2, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(34, 19, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(36, 20, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(37, 20, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 1, 0, 3, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(38, 20, 'summary', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 4, 0, '2019-03-31', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(40, 21, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 2, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(41, 21, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 3, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(42, 21, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 1, 4, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(44, 21, 'content', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(45, 22, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(46, 22, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 2, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(47, 23, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(48, 23, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 2, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(52, 25, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(53, 25, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(54, 25, 'content', 'content', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(55, 25, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(58, 20, 'Link xem thêm', 'link', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-04-06', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(59, 21, 'link', 'link', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 1, 1, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(82, 29, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(83, 29, 'pdf', 'pdf', 'TEXT', NULL, 1, 255, 1, NULL, 0, 1, 'pdf', 0, 0, 3, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(84, 29, 'image', 'image', 'TEXT', NULL, 1, 255, 1, NULL, 0, 1, 'image_laravel', 0, 0, 4, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(85, 29, 'summary', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(86, 20, 'video', 'video', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'video', 0, 0, 0, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(87, 29, 'Chọn danh mục', 'category_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-08', '2019-04-08', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(88, 19, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 0, NULL, 1, 1, 'select', 0, 0, 0, 0, '2019-04-11', '2019-04-11', 19, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(89, 31, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(90, 31, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(91, 31, 'input_type', 'input_type', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'input', 0, 0, 3, 0, '2019-04-15', '2019-04-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(92, 31, 'block_type_id', 'block_type_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'select', 0, 0, 4, 0, '2019-04-15', '2019-04-15', 32, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(93, 32, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(94, 32, 'parent_id', 'parent_id', 'INT', NULL, 1, 255, 0, NULL, 0, 1, 'number', 0, 0, 3, 0, '2019-04-15', '2019-04-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(95, 32, 'image', 'image', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 2, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(106, 35, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(107, 35, 'Mật khẩu (Bỏ trống nếu bạn không muốn thay đổi))', 'password', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'encryption', 0, 0, 6, 0, '2019-04-15', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(108, 35, 'name', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 4, 0, '2019-04-15', '2019-05-28', 0, '', 0, 0, NULL, '', 0, NULL, NULL, NULL, NULL, NULL),
(109, 35, 'remember_token', 'remember_token', 'VARCHAR', NULL, 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 9, 0, '2019-04-15', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(110, 35, 'Tên đăng nhập', 'username', 'VARCHAR', '', 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 5, 0, '2019-04-21', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(111, 35, 'Email', 'email', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 7, 0, '2019-04-21', '2019-04-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(112, 35, 'user_type', 'user_type', 'VARCHAR', '0', 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 8, 0, '2019-04-21', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(124, 31, 'input_name', 'input_name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-04-28', '2019-04-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(137, 37, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(138, 37, 'NVKD', 'map_nvkd_nhap_hang', 'INT', '0', 1, 11, 1, NULL, 0, 1, 'number', 1, 0, 6, 0, '2019-05-04', '2019-07-21', 0, '', 1, 41, NULL, 'width01', 1, 'hang_ve_id', '', '0', '', ''),
(139, 37, 'Ngày gửi', 'ngay_gui', 'DATE', '0', 1, 0, 1, NULL, 0, 1, 'date', 1, 0, 9, 0, '2019-05-04', '2019-06-09', 0, '', 1, 0, NULL, '', 0, '', '', '0', '{\"ngay_gui\":\"Ngày gửi\",\r\n\"ngay_ve\":\"Ngày về\",\r\n\"ma_van_chuyen\":\"Mã vận chuyển\"}', NULL),
(140, 37, 'Ngày về', 'ngay_ve', 'DATE', '0', 1, 0, 1, NULL, 0, 1, 'date', 0, 0, 12, 0, '2019-05-04', '2019-06-09', 0, '', 1, 0, NULL, '', 0, '', '', '0', '', NULL),
(147, 37, 'Tổng SK', 'total_sk', 'FLOAT', '0', 1, 0, 1, NULL, 0, 1, 'number', 1, 0, 4, 0, '2019-05-04', '2019-06-09', 0, '', 1, 0, NULL, 'width01', 0, '', '', '0', NULL, NULL),
(148, 37, 'Mã SP', 'name', 'VARCHAR', '', 1, 0, 1, NULL, 0, 1, 'text', 1, 0, 5, 0, '2019-05-04', '2019-07-01', 0, '', 1, 0, NULL, 'width01', 0, '', '{\r\n\"table_id\":\"41\",\r\n\"column\":\"hang_ve_id\",\r\n\"title\":\"ThêmNVKD\"\r\n}', '0', '', ''),
(151, 37, 'NVMH', 'nvmh_id', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'select', 1, 0, 8, 0, '2019-05-25', '2019-06-09', 35, '', 1, 0, NULL, 'width02', 0, '', '', '0', '{\"nvmh_id\":\"NV_MuaHàng\",\r\n\"nvvc\":\"NV_VanChuyen\",\r\n\"cbm\":\"Số khối\"}', NULL),
(152, 38, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(153, 38, 'name', 'name', 'VARCHAR', '', 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-05-25', '2019-05-28', 0, '', 0, 0, NULL, 'width02', 0, NULL, NULL, NULL, NULL, NULL),
(154, 38, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(155, 38, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 8, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(156, 38, 'Số kiện', 'so_kien', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'number', 1, 0, 2, 0, '2019-05-25', '2019-05-28', 0, '', 1, 0, NULL, 'width01', 1, NULL, NULL, NULL, NULL, NULL),
(157, 38, 'Đóng gói', 'dong_goi', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-05-25', '2019-05-28', 0, '', 1, 0, NULL, 'width01', 1, NULL, NULL, NULL, NULL, NULL),
(158, 38, 'Số lượng', 'so_luong', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'number', 1, 0, 4, 0, '2019-05-25', '2019-05-28', 0, '', 1, 0, NULL, 'width01', 1, NULL, NULL, NULL, NULL, NULL),
(159, 38, 'Tên hàng', 'ten_hang_ve_id', 'INT', '0', 1, 11, 1, NULL, 0, 1, 'select', 0, 0, 1, 0, '2019-05-26', '2019-06-02', 39, '', 0, 0, NULL, '', 0, 'ten_hang_ve_id', NULL, NULL, NULL, NULL),
(160, 37, 'sort_order', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'number', 0, 0, 13, 0, '2019-05-26', '2019-05-26', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(161, 35, 'sort_order', 'sort_order', 'INT', '0', 1, 0, 0, NULL, 0, 1, 'number', 0, 0, 10, 0, '2019-05-28', '2019-05-28', 0, '', 0, 0, NULL, '', 0, NULL, NULL, NULL, NULL, NULL),
(162, 35, 'Họ tên', 'fullname', 'VARCHAR', '', 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 2, 0, '2019-05-28', '2019-05-28', 0, '', 1, 0, NULL, '', 1, NULL, NULL, NULL, NULL, NULL),
(163, 39, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-28', '2019-05-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(164, 39, 'Tên hàng', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 3, 0, '2019-05-28', '2019-06-08', 0, '', 1, 0, NULL, 'width02', 1, '', '{\r\n\"table_id\":\"38\",\r\n\"column\":\"ten_hang_ve_id\",\r\n\"title\":\"ThêmSốLượng\"\r\n}', NULL, NULL, NULL),
(165, 39, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-05-28', '2019-05-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(166, 39, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-05-28', '2019-05-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(167, 39, 'Số lượng', 'ten_hang_ve_id', 'INT', '0', 1, 12, 0, NULL, 0, 1, 'number', 0, 0, 4, 0, '2019-05-28', '2019-06-08', 0, '', 0, 38, NULL, '', 1, 'ten_hang_ve_id', '', NULL, NULL, NULL),
(168, 39, 'NVKD', 'nvkd_nhap_hang_id', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'select', 1, 0, 2, 0, '2019-05-28', '2019-06-01', 41, '', 0, 0, NULL, 'width03', 0, '', NULL, NULL, NULL, NULL),
(169, 35, 'Tên hàng', 'ten_hang', 'INT', '0', 1, 12, 0, NULL, 0, 1, 'text', 0, 0, 3, 0, '2019-05-28', '2019-05-28', 0, '', 0, 39, NULL, '', 1, NULL, NULL, NULL, NULL, NULL),
(175, 41, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-29', '2019-05-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(176, 41, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-05-29', '2019-06-04', 0, '', 0, 0, NULL, '', 0, '', '', NULL, NULL, NULL),
(177, 41, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-05-29', '2019-05-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(178, 41, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-05-29', '2019-05-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(179, 41, 'NVKD nhập hàng', 'user_id', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'select', 1, 0, 2, 0, '2019-05-29', '2019-07-21', 35, '', 0, 0, NULL, 'width02', 1, '', '{\r\n\"table_id\":\"39\",\r\n\"column\":\"nvkd_nhap_hang_id\",\r\n\"title\":\"ThêmHàng\"\r\n}', '0', '', ''),
(180, 41, 'Tên hàng', 'nvkd_nhap_hang_id', 'INT', '0', 1, 12, 0, NULL, 0, 1, 'number', 0, 0, 3, 0, '2019-05-29', '2019-06-04', 0, '', 0, 39, NULL, '', 1, 'nvkd_nhap_hang_id', '', NULL, NULL, NULL),
(181, 41, 'Hàng về', 'hang_ve_id', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'select', 0, 0, 4, 0, '2019-05-29', '2019-06-04', 37, '', 1, 0, NULL, '', 0, '', '', NULL, NULL, NULL),
(182, 42, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-06-08', '2019-06-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(183, 42, 'Tên trạng thái', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-06-08', '2019-06-08', 0, '', 0, 0, NULL, '', 0, '', '', NULL, NULL, NULL),
(184, 42, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-06-08', '2019-06-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(185, 42, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-06-08', '2019-06-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(186, 42, 'Màu sắc', 'color', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'color', 1, 0, 3, 0, '2019-06-08', '2019-06-08', 0, '', 0, 0, NULL, '', 0, '', '', NULL, NULL, NULL),
(187, 37, 'Trạng thái', 'status', 'INT', '0', 1, 0, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-06-08', '2019-07-07', 42, '', 1, 0, NULL, 'width01', 1, '', '', '1', '', ''),
(189, 37, 'NV Vận chuyển', 'nvvc', 'VARCHAR', '', 1, 0, 1, NULL, 0, 1, 'text', 0, 0, 3, 0, '2019-06-09', '2019-06-09', 0, '', 0, 0, NULL, '', 0, '', '', '0', NULL, NULL),
(190, 37, 'Số khối', 'cbm', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-06-09', '2019-06-09', 0, '', 1, 0, NULL, '', 0, '', '', '0', '', NULL),
(191, 37, 'Mã vận chuyển', 'ma_van_chuyen', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 10, 0, '2019-06-09', '2019-06-09', 0, '', 0, 0, NULL, '', 0, '', '', '0', '', NULL),
(192, 43, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-06-09', '2019-06-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(193, 43, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 0, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-06-09', '2019-06-29', 0, '', 0, 0, NULL, '', 0, '', '', '0', '', ''),
(194, 43, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-06-09', '2019-06-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(195, 43, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-06-09', '2019-06-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(196, 43, 'User', 'user_id', 'INT', '0', 1, 11, 1, NULL, 0, 1, 'select', 0, 0, 3, 0, '2019-06-09', '2019-06-09', 35, '', 0, 0, NULL, '', 0, '', '', '0', '', NULL),
(197, 43, 'Hàng về', 'hang_ve_id', 'INT', '0', 1, 11, 1, NULL, 0, 1, 'select', 0, 0, 4, 0, '2019-06-09', '2019-06-09', 37, '', 0, 0, NULL, '', 0, '', '', '0', '', NULL),
(198, 43, 'Comment', 'content', 'TEXT', '', 1, 0, 1, NULL, 0, 1, 'textarea', 1, 0, 5, 0, '2019-06-09', '2019-06-09', 0, '', 1, 0, NULL, '', 0, '', '', '0', '', NULL),
(199, 37, 'Ghi chú', 'note', 'INT', '0', 1, 0, 1, NULL, 0, 1, 'comment', 1, 0, 11, 0, '2019-06-09', '2019-06-09', 43, '', 1, 0, NULL, '', 0, '', '', '0', '', 'hang_ve_id'),
(200, 37, 'Hình ảnh', 'images', 'TEXT', '', 1, 0, 1, NULL, 0, 1, 'images_no_db', 1, 0, 0, 0, '2019-06-15', '2019-07-21', 0, '', 1, 0, NULL, 'main-multiple-image', 0, '', '', '0', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `table_column`
--
ALTER TABLE `table_column`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `table_column`
--
ALTER TABLE `table_column`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
