-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 13, 2019 lúc 09:25 AM
-- Phiên bản máy phục vụ: 10.3.16-MariaDB
-- Phiên bản PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `base`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `about`
--

CREATE TABLE `about` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `summary` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin_config`
--

CREATE TABLE `admin_config` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `banner` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `admin_config`
--

INSERT INTO `admin_config` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `banner`) VALUES
(1, 'Bất động sản Tiến Anh', 0, 0, '2019-09-01 03:35:49', '2019-09-01 03:35:49', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `apartment`
--

CREATE TABLE `apartment` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `gia_nhuong` int(11) DEFAULT NULL,
  `note` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `apartment`
--

INSERT INTO `apartment` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `address`, `gia_nhuong`, `note`) VALUES
(1, '1A/174 Trần Duy Hưng', 0, 0, '2019-07-31 03:36:06', '2019-08-19 20:43:28', '1A/174 Trần Duy Hưng', 205000000, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `block`
--

CREATE TABLE `block` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `image` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `block`
--

INSERT INTO `block` (`id`, `sort_order`, `created_at`, `updated_at`, `name`, `parent_id`, `image`) VALUES
(1, 0, '2019-04-15 01:57:40', '2019-04-15 01:57:40', 'Slide nhiều hình ảnh', 0, '/photos/1/landipage/11.png'),
(2, 0, '2019-04-27 19:53:47', '2019-04-29 01:23:36', 'block 02', 0, '/photos/1/landipage/block02.png'),
(3, 0, '2019-04-29 00:58:27', '2019-04-29 01:24:18', 'Block 03', 0, '/photos/1/landipage/block03.png'),
(4, 0, '2019-04-29 02:34:30', '2019-04-29 02:34:30', 'Block 04', 0, '/photos/1/landipage/block04.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `block_item`
--

CREATE TABLE `block_item` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `input_type` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `block_type_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `input_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `block_item`
--

INSERT INTO `block_item` (`id`, `sort_order`, `created_at`, `updated_at`, `name`, `parent_id`, `input_type`, `block_type_id`, `input_name`) VALUES
(2, 11, '2019-04-15 02:00:45', '2019-04-27 21:13:59', 'Tiêu đề', 0, 'text', '1', 'name'),
(3, 13, '2019-04-15 02:01:17', '2019-04-27 21:16:05', 'Mô tả', 0, 'textarea', '1', 'description'),
(4, 14, '2019-04-15 02:01:52', '2019-04-27 21:14:19', 'đường dẫn', 0, 'text', '1', 'path'),
(5, 12, '2019-04-28 03:19:38', '2019-04-27 21:15:55', 'Hinh ảnh', 0, 'image_laravel', '1', 'image'),
(6, 7, '2019-04-27 19:54:39', '2019-04-27 21:13:15', 'Tiêu đề', 0, 'text', '2', 'name'),
(7, 9, '2019-04-27 19:55:03', '2019-04-27 21:15:47', 'Hình ảnh', 0, 'image_laravel', '2', 'image'),
(8, 10, '2019-04-27 19:55:20', '2019-04-27 21:16:12', 'Mô tả', 0, 'textarea', '2', 'description'),
(9, 8, '2019-04-29 01:16:23', '2019-04-29 01:16:39', 'Link', 0, 'text', '2', 'path'),
(10, 4, '2019-04-29 02:35:11', '2019-04-29 02:35:11', 'Tiêu đề', 0, 'text', '4', 'name'),
(11, 5, '2019-04-29 02:35:26', '2019-04-29 02:40:09', 'Mô tả', 0, 'textarea', '4', 'descriptiondes'),
(12, 6, '2019-04-29 02:35:52', '2019-04-29 02:35:52', 'Hình ảnh', 0, 'image_laravel', '4', 'image'),
(13, 1, '2019-04-29 02:39:55', '2019-04-29 02:39:55', 'Tiêu đề', 0, 'text', '3', 'name'),
(14, 2, '2019-04-29 02:40:34', '2019-04-29 02:40:34', 'Hình ảnh', 0, 'image_laravel', '3', 'image'),
(15, 3, '2019-04-29 02:40:49', '2019-04-29 02:40:49', 'Mô tả', 0, 'textarea', '3', 'description');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `route_id` int(11) DEFAULT 0,
  `seo_keyword` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `seo_description` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `configweb`
--

CREATE TABLE `configweb` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `youtube` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `configweb`
--

INSERT INTO `configweb` (`id`, `sort_order`, `created_at`, `updated_at`, `name`, `address`, `email`, `logo`, `facebook`, `youtube`, `instagram`, `phone`) VALUES
(1, 0, '2019-04-05 20:49:15', '2019-05-01 00:14:58', 'Công Ty TNHH ABC', 'Nguyen Khuyen, 5/12', 'quangtienvkt@gmail.com', '/photos/5/logoMS.png', NULL, NULL, NULL, '32');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cmtnd` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `ngay_cap` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noi_cap` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `email` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `status_customer_id` int(11) DEFAULT 0,
  `motel_room_id` int(11) DEFAULT 0,
  `note` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `cmtnd`, `ngay_cap`, `noi_cap`, `address`, `mobile`, `email`, `status_customer_id`, `motel_room_id`, `note`) VALUES
(1, 'Nguyễn Thành Nguyên - 202/174', 0, 0, '2019-07-31 03:57:46', '2019-08-02 18:29:45', '0', NULL, NULL, NULL, '0868649697', NULL, 1, 7, NULL),
(2, 'Nguyễn Ngọc Phương - 103/174', 0, 0, '2019-07-31 04:01:21', '2019-08-03 01:03:12', '0', NULL, NULL, NULL, '0988801087', NULL, 1, 4, 'Bạn ở cùng\r\nVũ Hoàng Mai: 0335495226'),
(3, 'Hồng - 501/174', 0, 0, '2019-07-31 04:02:28', '2019-08-02 18:29:21', '0', NULL, NULL, NULL, '0384029807', NULL, 1, 14, NULL),
(4, 'Đức Anh 301/174', 0, 0, '2019-07-31 04:03:33', '2019-08-02 18:29:17', '0', NULL, NULL, NULL, '0888910292', NULL, 1, 8, NULL),
(5, 'Lê Nguyễn Phương Nam - 303/174', 0, 0, '2019-07-31 04:04:33', '2019-08-02 23:24:59', '063513234', NULL, 'Phường Kim Tân - Lào Cai', NULL, '0868459518', NULL, 1, 10, NULL),
(6, 'Nguyễn Thành Nguyên - 202/174', 0, 0, '2019-07-31 04:05:27', '2019-08-03 00:08:27', '221299322', '11/01/2008', 'Xã Hòa Trị - Huyện Phú Hòa - Phú Yên', NULL, '0868649697', NULL, 1, 7, NULL),
(7, 'Nhung (Nhi) - 501/174', 0, 0, '2019-07-31 04:07:46', '2019-08-13 20:39:06', '0', NULL, NULL, NULL, '0964047396', NULL, 1, 14, 'Từ 101 chuyển lên'),
(8, 'Đinh Thị Ngọc Trâm (201/174)', 0, 0, '2019-08-02 04:08:12', '2019-08-03 00:05:25', '061070787', '20/01/2010', 'CA Yên Bái', 'Thị trấn Yên Thế - Lục Yên - Yên Bái', '0961039844', NULL, 1, 5, NULL),
(9, 'Lương Thị Phương (401)', 0, 0, '2019-08-02 04:14:21', '2019-08-02 23:17:15', '0031193001762', NULL, NULL, 'Lương Quan - Lê Lợi - Chí Linh - Hải Dương', '0963149862', NULL, 1, 11, NULL),
(10, 'Trần Việt Tiệp - 203/174', 0, 0, '2019-08-02 18:27:41', '2019-08-03 01:05:09', '183794065', '06/24/2018', 'CA Nghệ Tĩnh', 'CA Nghệ Tĩnh', '0364862366', NULL, 1, 6, NULL),
(11, 'Thảo - 402/174', 0, 0, '2019-08-02 18:30:16', '2019-09-01 23:52:39', NULL, NULL, NULL, NULL, '0326371133', NULL, 1, 12, NULL),
(12, 'Ngô Gia Tuấn - 102/174', 0, 0, '2019-08-02 18:37:41', '2019-08-03 00:52:08', '038201018845', '12/28/2018', 'Cồn Thái, Kim Sơn, Ning Bình', NULL, '0336567395', NULL, 1, 3, NULL),
(13, 'Nguyễn Lê Hồng Nhung 403/174', 0, 0, '2019-08-02 18:41:54', '2019-08-02 18:41:54', '132390417', NULL, 'Đồng Xuân, Thanh Ba, Phú Thọ', NULL, '01682343918', NULL, 1, 13, NULL),
(14, 'Nguyễn Thị Hà - 302/174', 0, 0, '2019-08-02 23:15:04', '2019-08-02 23:15:04', NULL, NULL, NULL, 'Số 59 tổ 20A khu 4 phường Bắc Sơn - Uông Bí - Quảng Ninh', '0337744768', NULL, 1, 9, NULL),
(15, 'Hằng', 0, 0, '2019-08-13 20:40:16', '2019-08-13 20:40:21', NULL, NULL, NULL, NULL, NULL, NULL, 1, 2, 'Duy (Chồng): 0859496789'),
(16, 'Nhi (001/174)', 0, 0, '2019-08-16 19:32:45', '2019-08-16 19:32:45', NULL, NULL, NULL, NULL, '0975566781', NULL, 1, 15, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `footer`
--

CREATE TABLE `footer` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `link` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `footer`
--

INSERT INTO `footer` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `link`) VALUES
(1, 'Nội dung mới', 0, 6, '2019-04-30 22:52:46', '2019-04-30 22:52:46', '#'),
(2, 'Ứng dụng cho Windows 10', 1, 1, '2019-04-30 22:52:55', '2019-04-30 22:52:55', '#'),
(3, 'Các ứng dụng Office', 1, 2, '2019-04-30 22:53:08', '2019-04-30 22:53:13', '#'),
(4, 'Microsoft Store', 0, 5, '2019-04-30 22:54:18', '2019-04-30 22:54:18', NULL),
(5, 'Hồ sơ tài khoản', 4, 1, '2019-04-30 22:54:26', '2019-04-30 22:54:26', NULL),
(6, 'Trung tâm Tải xuống', 4, 2, '2019-04-30 22:54:32', '2019-04-30 22:54:32', NULL),
(7, 'Trả lại', 4, 3, '2019-04-30 22:54:39', '2019-04-30 22:54:39', NULL),
(8, 'Theo dõi đơn hàng', 4, 4, '2019-04-30 22:54:48', '2019-04-30 22:54:48', NULL),
(9, 'Giáo dục', 0, 4, '2019-04-30 22:55:33', '2019-04-30 22:55:33', NULL),
(10, 'Microsoft trong giáo dục', 9, 1, '2019-04-30 22:55:36', '2019-04-30 22:55:36', NULL),
(11, 'Office cho học sinh', 9, 2, '2019-04-30 22:55:43', '2019-04-30 22:55:43', NULL),
(12, 'Office 365 cho trường học', 9, 3, '2019-04-30 22:55:52', '2019-04-30 22:55:52', NULL),
(13, 'Doanh nghiệp', 0, 3, '2019-04-30 22:56:11', '2019-04-30 22:56:11', NULL),
(14, 'Microsoft Azure', 13, 1, '2019-04-30 22:56:22', '2019-04-30 22:56:22', NULL),
(15, 'Microsoft Industry', 13, 2, '2019-04-30 22:56:28', '2019-04-30 22:56:28', NULL),
(16, 'Dịch vụ Tài chính', 13, 3, '2019-04-30 22:56:39', '2019-04-30 22:56:39', NULL),
(17, 'Nhà phát triển', 0, 2, '2019-04-30 22:56:55', '2019-04-30 22:56:55', NULL),
(18, 'Microsoft Visual Studio', 17, 1, '2019-04-30 22:57:03', '2019-04-30 22:57:03', NULL),
(19, 'Mạng lưới Nhà phát triển', 17, 2, '2019-04-30 22:57:10', '2019-04-30 22:57:10', NULL),
(20, 'Công ty', 0, 1, '2019-04-30 22:57:22', '2019-04-30 22:57:22', NULL),
(21, 'Sự nghiệp', 20, 1, '2019-04-30 22:57:31', '2019-04-30 22:57:31', NULL),
(22, 'Giới thiệu về công ty', 20, 2, '2019-04-30 22:57:49', '2019-04-30 22:57:49', NULL),
(23, 'Tin tức công ty', 20, 3, '2019-04-30 22:57:58', '2019-04-30 22:57:58', NULL),
(24, 'Nhà đầu tư', 20, 4, '2019-04-30 22:58:09', '2019-04-30 22:58:09', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hop_dong`
--

CREATE TABLE `hop_dong` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `motel_room_id` int(11) DEFAULT 0,
  `gia_thue` int(11) DEFAULT 0,
  `customer_id` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `tien_dat_coc` int(11) DEFAULT 0,
  `so_nguoi` int(11) DEFAULT 0,
  `note` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `status_hop_dong_id` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hop_dong`
--

INSERT INTO `hop_dong` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `motel_room_id`, `gia_thue`, `customer_id`, `start_date`, `end_date`, `tien_dat_coc`, `so_nguoi`, `note`, `status_hop_dong_id`) VALUES
(1, '501/174', 0, 0, '2019-08-01 19:20:02', '2019-09-01 23:49:08', 14, 3000000, 3, '2019-08-01', '2019-10-31', 3000000, 2, NULL, 1),
(2, '403/174', 0, 0, '2019-08-03 05:58:19', '2019-09-01 23:33:10', 13, 3500000, 13, '2019-08-01', '2019-10-31', 3500000, 2, NULL, 1),
(3, '402/174', 0, 0, '2019-08-03 05:59:54', '2019-09-01 23:33:02', 12, 3200000, 11, '2019-08-01', '2019-10-31', 3200000, 1, NULL, 1),
(4, '401/174', 0, 0, '2019-08-03 05:59:57', '2019-09-01 23:32:59', 11, 3000000, 9, '2019-08-01', '2019-10-31', 3000000, 2, NULL, 1),
(5, '303/174', 0, 0, '2019-08-03 05:59:58', '2019-09-01 23:32:57', 10, 3500000, 5, '2019-08-01', '2019-10-31', 3500000, 3, NULL, 1),
(6, '302/174', 0, 0, '2019-08-03 05:59:59', '2019-09-02 21:58:37', 9, 3000000, 14, '2019-08-01', '2019-10-31', 3000000, 2, NULL, 1),
(7, '301/174', 0, 0, '2019-08-02 18:00:00', '2019-09-01 23:49:32', 8, 3000000, 4, '2019-08-01', '2019-10-31', 3000000, 1, NULL, 1),
(8, '203/174', 0, 0, '2019-08-02 18:00:04', '2019-09-01 23:32:39', 6, 3000000, 10, '2019-08-01', '2019-01-31', 3000000, 2, NULL, 1),
(9, '202/174', 0, 0, '2019-08-02 18:00:05', '2019-09-01 23:32:36', 7, 3200000, 6, '2019-08-01', '2019-10-31', 3200000, 1, NULL, 1),
(10, '201/174', 0, 0, '2019-08-02 18:00:37', '2019-09-01 23:32:33', 5, 3000000, 8, '2019-08-01', '2019-10-31', 3000000, 3, NULL, 1),
(11, '103/174', 0, 0, '2019-08-02 18:00:39', '2019-09-03 04:31:16', 4, 3300000, 2, '2019-08-01', '2019-10-31', 3300000, 2, NULL, 1),
(12, '102/174', 0, 0, '2019-08-02 18:05:00', '2019-09-01 23:32:20', 3, 3000000, 12, '2019-08-01', '2019-10-31', 3000000, 2, NULL, 1),
(13, '101/174', 0, 0, '2019-08-02 18:05:01', '2019-09-13 23:19:45', 2, 3000000, 15, '2019-08-01', '2019-10-31', 3000000, 4, NULL, 1),
(14, '001/174', 0, 0, '2019-08-16 19:33:58', '2019-09-01 23:07:37', 15, 3500000, 16, '2019-08-16', '2019-11-30', 3500000, 2, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoan_thu_khac`
--

CREATE TABLE `khoan_thu_khac` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `money` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khoan_thu_khac`
--

INSERT INTO `khoan_thu_khac` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `money`) VALUES
(1, 'Sơn trả nợ nhượng 174 lần 1', 0, 0, '2019-08-19 20:14:27', '2019-08-20 20:33:16', 40000000),
(2, 'Sơn trả nợ nhượng 174 lần 2', 0, 0, '2019-08-19 20:16:19', '2019-08-20 20:33:20', 40000000),
(3, 'Sơn trả nhượng', 0, 0, '2019-08-28 03:24:45', '2019-08-28 03:24:45', 50000000),
(4, 'Sơn trả nhượng 28.08.2019', 0, 0, '2019-08-28 03:25:00', '2019-08-28 03:25:00', 110000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `landing_page`
--

CREATE TABLE `landing_page` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `image` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `blocks` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `landing_page`
--

INSERT INTO `landing_page` (`id`, `sort_order`, `created_at`, `updated_at`, `name`, `parent_id`, `image`, `category_id`, `blocks`) VALUES
(1, 0, '2019-04-15 02:06:44', '2019-04-29 03:58:36', 'Trang chủ', '0', '/photos/1/300px-Srebarna-Lake.jpg', '13', NULL),
(2, 0, '2019-04-15 02:06:44', '2019-04-29 00:29:44', 'Giới thiệu', '0', '/photos/1/300px-Srebarna-Lake.jpg', '14', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `landing_page_item`
--

CREATE TABLE `landing_page_item` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `landing_page_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `block_id` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `landing_page_item`
--

INSERT INTO `landing_page_item` (`id`, `sort_order`, `created_at`, `updated_at`, `name`, `parent_id`, `landing_page_id`, `data`, `block_id`) VALUES
(12, 0, '2019-04-28 21:43:04', '2019-04-29 00:31:36', NULL, '0', '1', '{\"_token\":\"vexR2xDM1EJWTjWIO6N2vzHewnwuxFE6ufMFOT94\",\"tabIndex\":\"0\",\"title\":\"Slide h\\u00ecnh \\u1ea3nh\",\"name\":[\"\",\"\"],\"image\":[\"\\/photos\\/1\\/slide\\/RE2lEVR.jpg\",\"\\/photos\\/1\\/slide\\/RW67SS.jpg\"],\"description\":[\"\",\"\"],\"path\":[\"#\",\"\\u01b0\"]}', 1),
(15, 0, '2019-04-29 01:21:35', '2019-04-29 02:31:08', 'Sắp kết thúc thời gian hỗ trợ', '0', '1', '{\"_token\":\"Eb1uoKkzROWaKYGx3EaRgtmeTUUA7O67XP5DNoWw\",\"tabIndex\":\"0\",\"title\":\"Cho c\\u00f4ng vi\\u1ec7c\",\"name\":[\"S\\u1eafp k\\u1ebft th\\u00fac th\\u1eddi gian h\\u1ed7 tr\\u1ee3\",\"T\\u1ea3i Visual Studio 2019\",\"Office 365 cho Doanh nghi\\u1ec7p\",\"Windows 10 Enterprise\"],\"path\":[\"#\",\"\",\"\",\"\"],\"image\":[\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2OfW4?ver=3149&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true\",\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2n9C8?ver=4d49&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true\",\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2mheW?ver=527a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true\",\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE1CmIw?ver=e555&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true\"],\"description\":[\"SQL Server v\\u00e0 Windows Server 2008 s\\u1ebd kh\\u00f4ng c\\u00f2n \\u0111\\u01b0\\u1ee3c h\\u1ed7 tr\\u1ee3 trong th\\u1eddi gian t\\u1edbi\\u2014\\u0111\\u00e3 t\\u1edbi l\\u00fac c\\u1ea7n n\\u00e2ng c\\u1ea5p\",\"T\\u1ea3i Visual Studio 2019, m\\u1ed9t IDE c\\u1ea3i ti\\u1ebfn, hi\\u1ec7n \\u0111\\u1ea1i, gi\\u00fap t\\u0103ng n\\u0103ng su\\u1ea5t l\\u00e0m vi\\u1ec7c.\",\"Truy c\\u1eadp v\\u00e0o t\\u1ec7p tin t\\u1eeb m\\u1ecdi n\\u01a1i, d\\u00f9 tr\\u1ef1c tuy\\u1ebfn hay ngo\\u1ea1i tuy\\u1ebfn.\",\"T\\u1ea3i xu\\u1ed1ng b\\u1ea3n \\u0111\\u00e1nh gi\\u00e1 90 ng\\u00e0y mi\\u1ec5n ph\\u00ed cho chuy\\u00ean gia CNTT.\"]}', 2),
(16, 0, '2019-04-29 02:38:15', '2019-04-29 02:38:37', 'Tổng hợp suy nghĩ, rồi phát triển chúng hơn nữa', '0', '1', '{\"_token\":\"Eb1uoKkzROWaKYGx3EaRgtmeTUUA7O67XP5DNoWw\",\"tabIndex\":\"0\",\"title\":\"Block 04\",\"name\":[\"T\\u1ed5ng h\\u1ee3p suy ngh\\u0129, r\\u1ed3i ph\\u00e1t tri\\u1ec3n ch\\u00fang h\\u01a1n n\\u1eefa\"],\"descriptiondes\":[\"S\\u1eeda l\\u1ea1i c\\u00e1c ghi ch\\u00fa c\\u1ee7a b\\u1ea1n b\\u1eb1ng c\\u00e1ch nh\\u1eadp, t\\u00f4 s\\u00e1ng ho\\u1eb7c vi\\u1ebft tay ch\\u00fa th\\u00edch. Nh\\u1edd c\\u00f3 OneNote tr\\u00ean m\\u1ecdi thi\\u1ebft b\\u1ecb, b\\u1ea1n s\\u1ebd kh\\u00f4ng b\\u1ecf l\\u1ee1 tia c\\u1ea3m h\\u1ee9ng n\\u00e0o.\"],\"image\":[\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2lrfB?ver=899f&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true\"]}', 4),
(17, 0, '2019-04-29 02:42:33', '2019-04-29 02:42:33', 'Sắp xếp khoa học mọi nội dung của bạn', '0', '1', '{\"_token\":\"Eb1uoKkzROWaKYGx3EaRgtmeTUUA7O67XP5DNoWw\",\"tabIndex\":\"0\",\"title\":\"\",\"name\":[\"S\\u1eafp x\\u1ebfp khoa h\\u1ecdc m\\u1ecdi n\\u1ed9i dung c\\u1ee7a b\\u1ea1n\"],\"image\":[\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2lwga?ver=afbc&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true\"],\"description\":[\"\\u0110\\u1ec3 s\\u1eafp x\\u1ebfp khoa h\\u1ecdc trong s\\u1ed5 tay, b\\u1ea1n c\\u00f3 th\\u1ec3 chia s\\u1ed5 tay th\\u00e0nh c\\u00e1c m\\u1ee5c v\\u00e0 trang. B\\u1ea1n s\\u1ebd lu\\u00f4n t\\u00ecm \\u0111\\u01b0\\u1ee3c ghi ch\\u00fa ngay t\\u1ea1i v\\u1ecb tr\\u00ed m\\u00ecnh \\u0111\\u00e3 t\\u1ea1m d\\u1eebng nh\\u1edd kh\\u1ea3 n\\u0103ng d\\u1eabn h\\u01b0\\u1edbng v\\u00e0 t\\u00ecm ki\\u1ebfm d\\u1ec5 d\\u00e0ng.\"]}', 3),
(18, 1, '2019-04-28 21:43:04', '2019-04-29 00:32:23', NULL, '0', '2', '{\"_token\":\"vexR2xDM1EJWTjWIO6N2vzHewnwuxFE6ufMFOT94\",\"tabIndex\":\"0\",\"title\":\"Slide h\\u00ecnh \\u1ea3nh\",\"name\":[\"\",\"\"],\"image\":[\"\\/photos\\/1\\/slide\\/RW67SS.jpg\",\"\\/photos\\/1\\/slide\\/RE2lEVR.jpg\"],\"description\":[\"\",\"\"],\"path\":[\"\",\"\"]}', 1),
(19, 3, '2019-04-29 01:21:35', '2019-04-29 02:31:08', 'Sắp kết thúc thời gian hỗ trợ', '0', '2', '{\"_token\":\"Eb1uoKkzROWaKYGx3EaRgtmeTUUA7O67XP5DNoWw\",\"tabIndex\":\"0\",\"title\":\"Cho c\\u00f4ng vi\\u1ec7c\",\"name\":[\"S\\u1eafp k\\u1ebft th\\u00fac th\\u1eddi gian h\\u1ed7 tr\\u1ee3\",\"T\\u1ea3i Visual Studio 2019\",\"Office 365 cho Doanh nghi\\u1ec7p\",\"Windows 10 Enterprise\"],\"path\":[\"#\",\"\",\"\",\"\"],\"image\":[\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2OfW4?ver=3149&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true\",\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2n9C8?ver=4d49&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true\",\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2mheW?ver=527a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true\",\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE1CmIw?ver=e555&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true\"],\"description\":[\"SQL Server v\\u00e0 Windows Server 2008 s\\u1ebd kh\\u00f4ng c\\u00f2n \\u0111\\u01b0\\u1ee3c h\\u1ed7 tr\\u1ee3 trong th\\u1eddi gian t\\u1edbi\\u2014\\u0111\\u00e3 t\\u1edbi l\\u00fac c\\u1ea7n n\\u00e2ng c\\u1ea5p\",\"T\\u1ea3i Visual Studio 2019, m\\u1ed9t IDE c\\u1ea3i ti\\u1ebfn, hi\\u1ec7n \\u0111\\u1ea1i, gi\\u00fap t\\u0103ng n\\u0103ng su\\u1ea5t l\\u00e0m vi\\u1ec7c.\",\"Truy c\\u1eadp v\\u00e0o t\\u1ec7p tin t\\u1eeb m\\u1ecdi n\\u01a1i, d\\u00f9 tr\\u1ef1c tuy\\u1ebfn hay ngo\\u1ea1i tuy\\u1ebfn.\",\"T\\u1ea3i xu\\u1ed1ng b\\u1ea3n \\u0111\\u00e1nh gi\\u00e1 90 ng\\u00e0y mi\\u1ec5n ph\\u00ed cho chuy\\u00ean gia CNTT.\"]}', 2),
(20, 2, '2019-04-29 02:38:15', '2019-04-29 02:38:37', 'Tổng hợp suy nghĩ, rồi phát triển chúng hơn nữa', '0', '2', '{\"_token\":\"Eb1uoKkzROWaKYGx3EaRgtmeTUUA7O67XP5DNoWw\",\"tabIndex\":\"0\",\"title\":\"Block 04\",\"name\":[\"T\\u1ed5ng h\\u1ee3p suy ngh\\u0129, r\\u1ed3i ph\\u00e1t tri\\u1ec3n ch\\u00fang h\\u01a1n n\\u1eefa\"],\"descriptiondes\":[\"S\\u1eeda l\\u1ea1i c\\u00e1c ghi ch\\u00fa c\\u1ee7a b\\u1ea1n b\\u1eb1ng c\\u00e1ch nh\\u1eadp, t\\u00f4 s\\u00e1ng ho\\u1eb7c vi\\u1ebft tay ch\\u00fa th\\u00edch. Nh\\u1edd c\\u00f3 OneNote tr\\u00ean m\\u1ecdi thi\\u1ebft b\\u1ecb, b\\u1ea1n s\\u1ebd kh\\u00f4ng b\\u1ecf l\\u1ee1 tia c\\u1ea3m h\\u1ee9ng n\\u00e0o.\"],\"image\":[\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2lrfB?ver=899f&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true\"]}', 4),
(21, 4, '2019-04-29 02:42:33', '2019-04-29 02:42:33', 'Sắp xếp khoa học mọi nội dung của bạn', '0', '2', '{\"_token\":\"Eb1uoKkzROWaKYGx3EaRgtmeTUUA7O67XP5DNoWw\",\"tabIndex\":\"0\",\"title\":\"\",\"name\":[\"S\\u1eafp x\\u1ebfp khoa h\\u1ecdc m\\u1ecdi n\\u1ed9i dung c\\u1ee7a b\\u1ea1n\"],\"image\":[\"https:\\/\\/img-prod-cms-rt-microsoft-com.akamaized.net\\/cms\\/api\\/am\\/imageFileData\\/RE2lwga?ver=afbc&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true\"],\"description\":[\"\\u0110\\u1ec3 s\\u1eafp x\\u1ebfp khoa h\\u1ecdc trong s\\u1ed5 tay, b\\u1ea1n c\\u00f3 th\\u1ec3 chia s\\u1ed5 tay th\\u00e0nh c\\u00e1c m\\u1ee5c v\\u00e0 trang. B\\u1ea1n s\\u1ebd lu\\u00f4n t\\u00ecm \\u0111\\u01b0\\u1ee3c ghi ch\\u00fa ngay t\\u1ea1i v\\u1ecb tr\\u00ed m\\u00ecnh \\u0111\\u00e3 t\\u1ea1m d\\u1eebng nh\\u1edd kh\\u1ea3 n\\u0103ng d\\u1eabn h\\u01b0\\u1edbng v\\u00e0 t\\u00ecm ki\\u1ebfm d\\u1ec5 d\\u00e0ng.\"]}', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_02_22_024550_create_permission_tables', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Model\\User', 2),
(2, 'App\\Model\\User', 3),
(2, 'App\\Model\\User', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `motel_room`
--

CREATE TABLE `motel_room` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `apartment_id` int(11) DEFAULT NULL,
  `status_motel_room_id` int(11) DEFAULT 0,
  `note` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `motel_room`
--

INSERT INTO `motel_room` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `apartment_id`, `status_motel_room_id`, `note`) VALUES
(2, '101/174', 0, 1, '2019-07-29 20:30:20', '2019-08-02 03:57:41', 1, 2, NULL),
(3, '102/174', 0, 2, '2019-07-29 20:30:26', '2019-07-31 00:02:26', 1, 2, NULL),
(4, '103/174', 0, 3, '2019-07-29 20:30:42', '2019-08-02 04:15:14', 1, 2, NULL),
(5, '201/174', 0, 4, '2019-07-29 20:30:49', '2019-08-02 04:08:51', 1, 2, NULL),
(6, '203/174', 0, 6, '2019-07-29 20:31:05', '2019-07-31 00:02:19', 1, 2, NULL),
(7, '202/174', 0, 5, '2019-07-29 20:31:12', '2019-08-02 03:48:42', 1, 2, NULL),
(8, '301/174', 0, 7, '2019-07-29 20:31:54', '2019-07-31 00:02:12', 1, 2, NULL),
(9, '302/174', 0, 8, '2019-07-29 20:32:12', '2019-07-31 00:02:09', 1, 2, NULL),
(10, '303/174', 0, 9, '2019-07-29 20:49:00', '2019-08-02 03:56:44', 1, 2, NULL),
(11, '401/174', 0, 10, '2019-07-29 21:01:40', '2019-08-02 04:14:51', 1, 2, NULL),
(12, '402/174', 0, 11, '2019-07-29 21:03:20', '2019-07-31 00:01:59', 1, 2, NULL),
(13, '403/174', 0, 12, '2019-07-29 21:04:09', '2019-08-02 03:48:44', 1, 2, NULL),
(14, '501/174', 0, 13, '2019-07-29 21:04:45', '2019-08-02 03:57:08', 1, 2, NULL),
(15, '001/174', 0, 0, '2019-07-30 22:14:19', '2019-08-16 19:21:35', 1, 2, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `summary` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `seo_keyword` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `seo_description` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `sort_order`, `created_at`, `updated_at`, `title`, `image`, `content`, `summary`, `category_id`, `seo_keyword`, `seo_description`) VALUES
(4, 0, '2019-03-19 20:22:05', '2019-04-22 00:55:10', 'Laporte: \'Man City mạnh hơn Liverpool\'', '/photos/1/hi-res-8a7cae324bacba9b17177b2-2578-7496-1554699289_500x300.png', '<h1>Laporte: &#39;Man City mạnh hơn Liverpool&#39;</h1>\r\n\r\n<p>Trung vệ Man City muốn đội nh&agrave; đoạt mọi danh hiệu m&ugrave;a n&agrave;y.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Khi gi&agrave;nh chiến thắng mọi trận đấu, ch&uacute;ng t&ocirc;i cảm thấy l&agrave; đội b&oacute;ng lớn. Ch&uacute;ng t&ocirc;i sẽ giữ vững phong độ v&agrave; gi&agrave;nh mọi danh hiệu, đ&oacute; l&agrave; điều to&agrave;n đội mong muốn&quot;,&nbsp;Aymeric Laporte n&oacute;i với tờ&nbsp;<em>Telefoot</em>. &quot;Trở th&agrave;nh đội hay nhất ở Ngoại hạng Anh l&agrave; phần thưởng quan trọng, v&agrave; t&ocirc;i hy vọng Man City sẽ kết th&uacute;c m&ugrave;a giải với v&agrave;i danh hiệu&quot;.</p>\r\n\r\n<p>Man City đang tr&ecirc;n đường chinh phục c&uacute; ăn bốn ở m&ugrave;a giải n&agrave;y. Đội b&oacute;ng vừa lọt v&agrave;o chung kết Cup FA, sau khi đoạt Cup Li&ecirc;n đo&agrave;n Anh. Man City cũng chuẩn bị thi đấu ở tứ kết Champions League, v&agrave; đang đua tranh ng&ocirc;i v&ocirc; địch Ngoại hạng Anh c&ugrave;ng Liverpool.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\" style=\"width:500px\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Laporte là một trong những trụ cột ở hàng thủ Man City. Ảnh: AFP.\" src=\"https://i-thethao.vnecdn.net/2019/04/08/hi-res-8a7cae324bacba9b17177b2-2832-1770-1554699289.png\" style=\"margin:0px\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Laporte l&agrave; một trong những trụ cột ở h&agrave;ng thủ Man City. Ảnh:&nbsp;<em>AFP.</em></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&quot;Liệu ch&uacute;ng t&ocirc;i c&oacute; mạnh hơn Liverpool? T&ocirc;i cho rằng đ&uacute;ng như vậy. Liverpool c&oacute; đội h&igrave;nh rất chất lượng nhưng t&ocirc;i hy vọng Man City sẽ l&agrave;m n&ecirc;n kh&aacute;c biệt. T&ocirc;i tới Man City để gi&agrave;nh mọi danh hiệu, bao gồm cả Champions League. Mục ti&ecirc;u trước mắt l&agrave; tiến tới trận chung kết&quot;, Laporte n&oacute;i trước trận tứ kết lượt đi tr&ecirc;n s&acirc;n Tottenham.</p>\r\n\r\n<p>Trong khi Man City chơi trận b&aacute;n kết Cup FA v&agrave;o cuối tuần trước, Liverpool đ&atilde; tận dụng thời cơ vươn l&ecirc;n vị tr&iacute; dẫn đầu Ngoại hạng Anh. Liverpool đang hơn Man City hai điểm, nhưng chơi nhiều hơn một trận.</p>', 'Man City đang trên đường chinh phục cú ăn bốn ở mùa giải này. Đội bóng vừa lọt vào chung kết Cup FA,', 3, NULL, NULL),
(5, 0, '2019-03-21 02:18:27', '2019-04-21 03:11:09', 'Thương  Hiệu Suzaran', '/photos/1/Nhandienthuonghieu3-ID2984.png', '<p>Sản phẩm b&ocirc;ng tẩy trang được sản xuất bằng c&ocirc;ng nghệ y tế</p>\r\n\r\n<p>Trụ sở ch&iacute;nh của ch&uacute;ng t&ocirc;i được đặt tại Nhật Bản, Suzaran cung cấp những sản phẩm đảm bảo ti&ecirc;u chuẩn tr&ecirc;n thị trường.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Lời ch&agrave;o</p>\r\n\r\n<p>Suzaran tự tin về c&aacute;c sản phẩm của m&igrave;nh tr&ecirc;n thị trường. B&ocirc;ng Tẩy Trang Lily Bell được thiết kế sử dụng trong l&agrave;m đẹp v&agrave; xuất ph&aacute;t từ một lịch sử l&acirc;u đời: Đ&oacute; ch&iacute;nh l&agrave; miếng Gạc Y tế được sử dụng trong c&aacute;c t&igrave;nh huống quan trọng v&agrave; sản xuất ra c&aacute;c sản phẩm an to&agrave;n d&ugrave;ng cho em b&eacute;. Được bắt đầu sản xuất tại Nhật Bản từ 180 năm trước, Suzaran tự h&agrave;o mang đến Việt Nam những miếng b&ocirc;ng chất lượng.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Suzaran lu&ocirc;n theo đ&ocirc;ng h&agrave;nh c&ugrave;ng kh&aacute;ch h&agrave;ng để đ&aacute;p ứng những nhu cầu ti&ecirc;u chuẩn m&agrave; kh&aacute;ch h&agrave;ng đề ra. Thương hiệu B&ocirc;ng t&acirc;y trang Lily Bell được người ti&ecirc;u d&ugrave;ng y&ecirc;u th&iacute;ch với c&ocirc;ng dụng gi&uacute;p chăm s&oacute;c da, l&agrave;m sạch da. Suzaran Việt Nam hứa hẹn sẽ mang đến những sản phẩm chất lượng đến kh&aacute;ch h&agrave;ng.</p>', 'Sản phẩm bông tẩy trang được sản xuất bằng công nghệ y tế\r\nTrụ sở chính của chúng tôi được đặt tại Nhật Bản', 4, NULL, NULL),
(6, 0, '2019-04-06 20:58:36', '2019-04-21 03:11:24', 'Chứng nhận An toàn', '/photos/1/giay-chung-nhan-ve-sinh-an-toan-thuc-pham.jpg', '<p>1. Sản phẩm uy t&iacute;n&nbsp;</p>\r\n\r\n<p>2. Chất lượng đạt chuẩn</p>\r\n\r\n<p>3. l&agrave;m việc với ti&ecirc;u ch&iacute; &quot;c&ugrave;ng đồng h&agrave;nh v&agrave; ph&aacute;t triển&quot;</p>', 'mang đến cho khách hàng những sản phẩm thảo dược được điều chế hoàn toàn 100% từ thiên nhiên', 4, NULL, NULL),
(7, 0, '2019-04-21 03:15:05', '2019-04-22 01:12:55', 'Nông dân vượt dốc đào măng đắng vào cuối vụ ở Thanh Hóa', '/photos/1/20190416095816-1555493123-5172-1555493171_380x228.jpg', '<p>Ng&agrave;y 22/4, Bộ trưởng Gi&aacute;o dục v&agrave; Đ&agrave;o tạo Ph&ugrave;ng Xu&acirc;n Nhạ đ&atilde; trả lời b&aacute;o ch&iacute;&nbsp;về việc xử l&yacute; những người li&ecirc;n quan đến gian lận điểm thi ở H&agrave; Giang, Sơn La v&agrave; H&ograve;a B&igrave;nh.&nbsp;</p>\r\n\r\n<p><em>- 16 c&aacute;n bộ gi&aacute;o dục, c&ocirc;ng an ở ba tỉnh đ&atilde; bị khởi tố v&igrave; li&ecirc;n quan gian lận điểm thi THPT Quốc gia, nhưng Chủ tịch Hội đồng thi, người đứng đầu ng&agrave;nh gi&aacute;o dục địa phương, phụ huynh trong ng&agrave;nh c&oacute; con em được n&acirc;ng điểm chưa bị xử l&yacute;. L&agrave; Chủ tịch Hội đồng thi THPT quốc gia, Bộ trưởng c&oacute; &yacute; kiến thế n&agrave;o với địa phương?</em></p>\r\n\r\n<p>- T&ocirc;i rất đau l&ograve;ng v&agrave; kh&ocirc;ng chấp nhận những c&aacute;n bộ, vi&ecirc;n chức ng&agrave;nh gi&aacute;o dục c&oacute; h&agrave;nh vi gian lận điểm thi cho th&iacute; sinh. H&agrave;nh vi n&agrave;y vi phạm đạo đức nh&agrave; gi&aacute;o, vi phạm ph&aacute;p luật nghi&ecirc;m trọng.&nbsp;</p>\r\n\r\n<p>Bộ đề nghị c&aacute;c địa phương xem x&eacute;t xử l&yacute; nghi&ecirc;m c&aacute;n bộ, c&ocirc;ng chức, vi&ecirc;n chức trong ng&agrave;nh gi&aacute;o dục c&oacute; h&agrave;nh vi gian lận điểm thi cho con em m&igrave;nh, tinh thần l&agrave; cương quyết đưa ra khỏi ng&agrave;nh những c&aacute;n bộ n&agrave;y.&nbsp;Bộ cũng đang t&iacute;ch cực phối hợp với Bộ C&ocirc;ng an x&aacute;c định đối tượng vi phạm để xử l&yacute; c&ocirc;ng bằng, ch&iacute;nh x&aacute;c, kh&ocirc;ng bao che v&agrave; minh bạch.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Bộ trưởng Phùng Xuân Nhạ. Ảnh: Võ Hải.\" src=\"https://i-vnexpress.vnecdn.net/2019/04/22/ong-nha-8650-1555909769.jpg\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Bộ trưởng Ph&ugrave;ng Xu&acirc;n Nhạ. Ảnh:&nbsp;<em>V&otilde; Hải.</em></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p><em>- 222 t</em><em>h&iacute; sinh sai điểm thi ở H&agrave; Giang, Sơn La, H&ograve;a B&igrave;nh vẫn được x&eacute;t tuyển đại học, trong khi những em mang điện thoại v&agrave;o ph&ograve;ng thi, d&ugrave; chưa sử dụng đ&atilde; bị đ&igrave;nh chỉ, hủy kết quả thi. Bộ trưởng nghĩ sao về hai c&aacute;ch xử l&yacute; n&agrave;y?</em></p>\r\n\r\n<p>-&nbsp;Tất cả h&agrave;nh vi gian lận trong kỳ thi THPT quốc gia n&oacute;i ri&ecirc;ng v&agrave; bất cứ kỳ thi n&agrave;o kh&aacute;c đều sẽ bị xử l&yacute; nghi&ecirc;m.&nbsp;C&aacute;c đại học khối c&ocirc;ng an đ&atilde; hủy kết quả tr&uacute;ng tuyển, trả về địa phương th&iacute; sinh được n&acirc;ng điểm. C&aacute;c trường khối d&acirc;n sự cũng hủy kết quả tr&uacute;ng tuyển với th&iacute; sinh c&oacute; điểm chấm thẩm định thấp hơn điểm chuẩn.</p>\r\n\r\n<p>Ri&ecirc;ng 12 th&iacute; sinh c&oacute; điểm chấm thẩm định kh&ocirc;ng thấp hơn điểm chuẩn th&igrave; trước mắt c&aacute;c trường đang cho tiếp tục theo học. Tuy nhi&ecirc;n, khi c&oacute; kết luận của cơ quan điều tra, em n&agrave;o c&oacute; tham gia v&agrave;o qu&aacute; tr&igrave;nh gian lận sẽ bị xử l&yacute; theo ph&aacute;p luật.</p>\r\n\r\n<p>Quan điểm của Bộ Gi&aacute;o dục v&agrave; Đ&agrave;o tạo l&agrave; xử l&yacute; nghi&ecirc;m khắc, xem x&eacute;t cho th&ocirc;i học những th&iacute; sinh c&oacute; kết luận li&ecirc;n quan đến gian lận thi cử.</p>\r\n\r\n<p><em>-&nbsp;Tại sao việc xử l&yacute; kh&ocirc;ng sớm hơn để đỡ tốn c&ocirc;ng sức, tiền bạc khi c&aacute;c em học tiếp?</em></p>\r\n\r\n<p>-&nbsp;Xử l&yacute; sai phạm li&ecirc;n quan đến kết quả thi THPT quốc gia của th&iacute; sinh kh&ocirc;ng chỉ được &aacute;p dụng bởi Quy chế thi THPT quốc gia m&agrave; c&ograve;n nhiều văn bản quy phạm ph&aacute;p luật v&agrave; c&aacute;c quy định kh&aacute;c của cơ sở gi&aacute;o dục đại học. Khi xử l&yacute; một trường hợp, ch&uacute;ng ta phải &aacute;p dụng nhiều quy định để đảm bảo t&iacute;nh ch&iacute;nh x&aacute;c, c&ocirc;ng bằng, nghi&ecirc;m minh.</p>\r\n\r\n<p>Theo Luật Gi&aacute;o dục đại học, việc tuyển sinh thuộc quyền tự chủ của cơ sở gi&aacute;o dục đại học. C&aacute;c cơ sở gi&aacute;o dục đại học c&oacute; quyền v&agrave; tr&aacute;ch nhiệm xử l&yacute;, kh&ocirc;ng thụ động ngồi đợi chỉ đạo của Bộ. Vừa qua, c&aacute;c đại học khối c&ocirc;ng an đ&atilde; chủ động xử l&yacute; theo quyền v&agrave; tr&aacute;ch nhiệm của họ. T&ocirc;i ủng hộ c&aacute;ch xử l&yacute; của c&aacute;c trường n&agrave;y.</p>\r\n\r\n<p>Ch&uacute;ng t&ocirc;i đang r&agrave; so&aacute;t, tham khảo &yacute; kiến chuy&ecirc;n gia ph&aacute;p luật để ho&agrave;n thiện c&aacute;c quy chế của ng&agrave;nh nhằm giải quyết những vấn đề thực tế ph&aacute;t sinh khi thực hiện cơ chế tự chủ đại học, đặc biệt l&agrave; quy định c&aacute;c chế t&agrave;i đủ mạnh để răn đe, xử l&yacute; ngay với c&aacute;c loại vi phạm gi&aacute;n tiếp trong thi cử.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><a href=\"https://vnexpress.net/infographics/222-thi-sinh-duoc-nang-diem-bi-xu-ly-the-nao-3911339.html\"><img alt=\"222 thí sinh được nâng điểm đang bị xử lý như thế nào? Đồ họa: Tiến Thành\" src=\"https://i-vnexpress.vnecdn.net/2019/04/22/thi-sinh-vi-pham-5511-15557623-6234-6850-1555906557.jpg\" /></a></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>222 th&iacute; sinh được n&acirc;ng điểm đang bị xử l&yacute; như thế n&agrave;o? Đồ họa:&nbsp;<em>Tiến Th&agrave;nh</em></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p><em>- Hai th&aacute;ng nữa l&agrave; diễn ra kỳ thi THPT quốc gia 2019, Bộ Gi&aacute;o dục v&agrave; Đ&agrave;o tạo đ&atilde; chuẩn bị như thế n&agrave;o để ngăn chặn gian lận?</em></p>\r\n\r\n<p>-&nbsp;T&ocirc;i lu&ocirc;n qu&aacute;n triệt với c&aacute;n bộ tham gia v&agrave;o c&ocirc;ng t&aacute;c thi rằng việc tổ chức kỳ thi THPT quốc gia v&agrave; tuyển sinh đại học kh&ocirc;ng chỉ l&agrave; nhiệm vụ chuy&ecirc;n m&ocirc;n của ng&agrave;nh gi&aacute;o dục, m&agrave; c&ograve;n l&agrave; nhiệm vụ ch&iacute;nh trị, tr&aacute;ch nhiệm với x&atilde; hội. Do đ&oacute;, việc n&agrave;y phải đặc biệt được coi trọng để đảm bảo t&iacute;nh an to&agrave;n, nghi&ecirc;m t&uacute;c, c&ocirc;ng bằng, ch&iacute;nh x&aacute;c.</p>\r\n\r\n<p>Những &quot;lỗ hổng&quot; về mặt quy tr&igrave;nh, kỹ thuật trong tổ chức thi THPT quốc gia 2018 hiện đ&atilde; được ng&agrave;nh gi&aacute;o dục khắc phục. Ch&uacute;ng t&ocirc;i cũng tăng cường ứng dụng c&ocirc;ng nghệ th&ocirc;ng tin v&agrave; sử dụng c&aacute;c thiết bị kỹ thuật để đảm bảo an ninh, an to&agrave;n trong tổ chức thi; n&acirc;ng cấp phần mềm để ngăn chặn v&agrave; hỗ trợ ph&aacute;t hiện gian lận trong qu&aacute; tr&igrave;nh chấm thi.</p>\r\n\r\n<p>Tuy nhi&ecirc;n, kỹ thuật, c&ocirc;ng nghệ c&oacute; tốt đến đ&acirc;u, con người tham gia v&agrave;o l&agrave;m thi m&agrave; kh&ocirc;ng tốt, cố &yacute; vi phạm th&igrave; ti&ecirc;u cực vẫn c&oacute; thể xảy đến. Do đ&oacute;, trong c&aacute;c cuộc họp chuẩn bị cho kỳ thi năm nay, t&ocirc;i lu&ocirc;n đặc biệt y&ecirc;u cầu lựa chọn c&aacute;n bộ c&oacute; năng lực, tr&aacute;ch nhiệm, phẩm chất ch&iacute;nh trị tốt để tham gia l&agrave;m thi v&agrave; phải chịu tr&aacute;ch nhiệm trực tiếp trước ph&aacute;p luật.</p>\r\n\r\n<p>Bộ Gi&aacute;o dục v&agrave; Đ&agrave;o tạo mong c&aacute;c bộ ng&agrave;nh, địa phương v&agrave; người d&acirc;n cả nước đồng h&agrave;nh, gi&aacute;m s&aacute;t, để việc tổ chức kỳ thi THPT quốc gia v&agrave; tuyển sinh đại học, cao đẳng 2019 th&agrave;nh c&ocirc;ng tốt đẹp.</p>', 'Gia đình ông Phạm Văn Ý vượt sườn dốc trơn trượt, tìm đào măng đắng vào cuối vụ. Thân măng dài 20-30 cm trọng', 3, NULL, NULL),
(8, 0, '2019-04-21 23:07:12', '2019-04-21 23:07:12', 'Fognini vô địch Monte Carlo 2019', '/photos/1/20001-1555870122-1555870136-7229-1555870146_180x108.png', '<p>Tay vợt Italy lần đầu v&ocirc; địch một giải ATP 1000, sau khi hạ Dusan Lajovic 6-3, 6-4 tại chung kết giải Monte Carlo.</p>\r\n\r\n<p>Một ng&agrave;y sau khi g&acirc;y sốc bằng việc loại Rafael Nadal ở b&aacute;n kết, Fabio Fognini c&oacute; được danh hiệu lớn nhất trong sự nghiệp từ trước đến nay. Tay vợt Italy nhẹ nh&agrave;ng vượt qua &quot;hiện tượng&quot; Dusan Lajovic trong trận ATP 1000 đầu ti&ecirc;n m&agrave; cả hai g&oacute;p mặt.</p>\r\n\r\n<p>Ở ba lần hạ Nadal trước đ&oacute;, Fognini đều thua nhanh ở v&ograve;ng đấu kế tiếp. Tay vợt Italy khiến người h&acirc;m mộ lo ngại điều tương tự sẽ lặp lại, khi đ&aacute;nh mất game giao b&oacute;ng thứ hai trong trận.</p>\r\n\r\n<p>Nhưng Lajovic cũng mới lần đầu dự chung kết ATP 1000 v&agrave; kh&ocirc;ng vững v&agrave;ng về t&acirc;m l&yacute;. Tay vợt Serbia c&oacute; hai game-point để dẫn 3-1 nhưng đều bỏ lỡ. Anh đ&aacute;nh hỏng qu&aacute; nhiều, để Fognini thắng liền bốn game v&agrave; dẫn ngược 5-2.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Lajovic mắc tới 36 lỗi tự đánh hỏng ở trận chung kết, nhiều hơn Fognini 13 lỗi. Ảnh: AP.\" src=\"https://i-thethao.vnecdn.net/2019/04/22/2000-jpeg-1555869978-2434-1555870145.png\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Lajovic mắc tới 36 lỗi tự đ&aacute;nh hỏng ở trận chung kết, nhiều hơn Fognini 13 lỗi. Ảnh:&nbsp;<em>AP</em>.</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Fognini c&agrave;ng chơi c&agrave;ng lấy lại sự b&igrave;nh tĩnh. Anh cứu th&agrave;nh c&ocirc;ng break-point ở game giao quyết định, trước khi thắng set đầu 6-3 nhờ điểm winner thứ 12.</p>\r\n\r\n<p>Lajovic đuối hơn trong c&aacute;c pha đ&ocirc;i c&ocirc;ng cuối s&acirc;n nhưng cũng kh&ocirc;ng dễ đầu h&agrave;ng. Tay vợt số 48 thế giới mất game giao b&oacute;ng đầu set hai, nhưng gỡ h&ograve;a ngay sau đ&oacute;. Chỉ khi Fognini thắng th&ecirc;m một game giao b&oacute;ng nữa v&agrave; vươn l&ecirc;n dẫn 3-2, thế trận mới tuột khỏi tầm tay Lajovic. Tay vợt Serbia g&aacute;c vợt chung cuộc với tỷ số 3-6, 4-6.</p>\r\n\r\n<p>&quot;Lần đầu v&agrave;o chung kết ATP 1000 l&agrave; trải nghiệm tuyệt vời với t&ocirc;i&quot;, Lajovic chia sẻ. &quot;Gi&oacute; tại Monte Carlo kh&aacute; to v&agrave; Fognini l&agrave; người gi&agrave;u kinh nghiệm hơn ở điều kiện thời tiết như h&ocirc;m nay. C&aacute;c c&uacute; quả v&agrave; khả năng di chuyển của anh ấy cũng rất tốt. T&ocirc;i c&oacute; cảm gi&aacute;c rằng m&igrave;nh vất vả hơn anh ấy trong việc gi&agrave;nh điểm. Đ&oacute; l&agrave; điểm mấu chốt trong thất bại n&agrave;y&quot;.</p>\r\n\r\n<p>Fognini l&agrave; hạt giống thấp nhất đăng quang tại Monte Carlo trong 20 năm qua. Anh gi&agrave;nh số tiền thưởng 958.000 đ&ocirc;la c&ugrave;ng 1000 điểm thưởng ATP &ndash; số điểm gi&uacute;p tay vợt Italy vươn l&ecirc;n thứ 12 thế giới v&agrave;o tuần n&agrave;y.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Fognini lên ngôi xứng đáng tại Monte Carlo. Ảnh: AP.\" src=\"https://i-thethao.vnecdn.net/2019/04/22/2000-1-jpeg-1555870095-5370-1555870146.png\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Fognini l&ecirc;n ng&ocirc;i xứng đ&aacute;ng tại Monte Carlo. Ảnh<em>:&nbsp;AP.</em></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&quot;T&ocirc;i phải chuẩn bị kỹ c&agrave;ng cho trận đấu n&agrave;y v&igrave; HLV cũ của t&ocirc;i đang l&agrave;m việc c&ugrave;ng Lajovic&quot;, Fognini chia sẻ. &quot;T&ocirc;i đ&atilde; cố gắng kh&ocirc;ng để bị bắt b&agrave;i. Đ&acirc;y l&agrave; th&agrave;nh tựu to lớn sau một giải đấu kh&oacute; khăn. T&ocirc;i rất hạnh ph&uacute;c&quot;.</p>\r\n\r\n<p>Danh hiệu ATP 1000 đầu ti&ecirc;n sẽ mang đến sự tự tin cho Fognini trong phần c&ograve;n lại của m&ugrave;a đất nện. Tay vợt mới trở lại sau chấn thương từng hai lần su&yacute;t bị loại tại Monte Carlo năm nay. Anh bị Andrey Rubley dẫn 6-4, 4-1 ở v&ograve;ng một v&agrave; bị Borna Coric dẫn 6-1, 2-0 ở tứ kết. Fognini thắng ngược cả hai trận đấu đ&oacute;, rồi hạ &quot;Vua đất nện&quot; Nadal chỉ sau hai set v&agrave; cuối c&ugrave;ng c&oacute; danh hiệu lớn nhất sự nghiệp từ trước đến nay</p>', 'Tay vợt Italy lần đầu vô địch một giải ATP 1000, sau khi hạ Dusan Lajovic 6-3, 6-4 tại chung kết giải Monte Carlo.', 3, NULL, NULL),
(9, 0, '2019-04-21 23:08:43', '2019-04-21 23:08:43', 'Ronaldo cam kết ở lại Juventus', '/photos/1/ronaldo-1555823369-1555823379-8659-1555823432.png', '<p>Si&ecirc;u sao 34 tuổi sẽ gắn b&oacute; với &quot;L&atilde;o B&agrave;&quot; th&ecirc;m &iacute;t nhất một m&ugrave;a giải để chinh phục Champions League.</p>\r\n\r\n<p>&quot;Chắc chắn 1000 phần trăm l&agrave; t&ocirc;i sẽ ở lại Juventus m&ugrave;a tới&quot;, Cristiano Ronaldo n&oacute;i sau khi c&ugrave;ng Juventus v&ocirc; địch Serie A 2018-2019. Đường căng ngang của anh khiến hậu vệ Fiorentina phản lưới, ấn định thắng lợi 2-1 cho Juventus ở v&ograve;ng 33. Chiến thắng gi&uacute;p CLB th&agrave;nh Turin hơn nh&igrave; bảng Napoli 20 điểm, v&ocirc; địch sớm năm v&ograve;ng.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Ronaldo (số 7) sẽ không rời Juventus hè 2019. Ảnh: Reuters.\" src=\"https://i-thethao.vnecdn.net/2019/04/21/ronaldo-1555823369-1555823379-8659-1555823432.png\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Ronaldo (số 7) sẽ kh&ocirc;ng rời Juventus h&egrave; 2019. Ảnh:&nbsp;<em>Reuters</em>.</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Tương lai của Ronaldo tại Turin bị đặt dấu hỏi, sau khi Juventus bị Ajax loại ở tứ kết Champions League. Ch&acirc;u &Acirc;u l&agrave; mục ti&ecirc;u chinh phục của Juventus m&ugrave;a n&agrave;y, sau bảy năm li&ecirc;n tiếp đoạt Scudetto. Nhưng, sự hiện diện của Ronaldo chưa đủ để gi&uacute;p &quot;L&atilde;o B&agrave;&quot; ho&agrave;n th&agrave;nh ước nguyện. Danh hiệu Serie A của Juventus gần bằng Inter v&agrave; AC Milan cộng lại, nhưng họ thua hai CLB th&agrave;nh Milan ở danh hiệu Champions League.</p>\r\n\r\n<p>Ronaldo cũng coi trọng Champions League hơn danh hiệu quốc gia, nhưng đ&acirc;y l&agrave; lần đầu anh v&ocirc; địch Serie A. Si&ecirc;u sao người Bồ Đ&agrave;o Nha trở th&agrave;nh cầu thủ đầu ti&ecirc;n v&ocirc; địch Anh, T&acirc;y Ban Nha v&agrave; Italy. Juventus c&oacute; thể sẽ lột x&aacute;c trong h&egrave; 2019, để chinh phục Champions League sau 24 năm dang dở.</p>\r\n\r\n<p>Ronaldo cập bến Juventus h&egrave; 2018 với gi&aacute; 120 triệu đ&ocirc;la. Mục ti&ecirc;u của anh l&agrave; đi t&igrave;m thử th&aacute;ch mới.</p>', 'Siêu sao 34 tuổi sẽ gắn bó với \"Lão Bà\" thêm ít nhất một mùa giải để chinh phục Champions League.', 3, NULL, NULL),
(10, 0, '2019-04-21 23:11:53', '2019-04-21 23:11:53', 'Golfer Đài Loan vô địch RBC Heritage', '/photos/1/2000-1555910972-2965-1555910996_180x108.jpg', '<p>Cheng-tsung Pan lần đầu v&ocirc; địch một giải PGA Tour, khi đạt điểm -12 qua bốn v&ograve;ng tại RBC Heritage.</p>\r\n\r\n<p>Sau 32 năm, Đ&agrave;i Loan mới c&oacute; th&ecirc;m một golfer v&ocirc; địch PGA Tour. C.T. Pan tạo ra bất ngờ lớn khi vượt mặt golfer số một thế giới Dustin Johnson c&ugrave;ng những t&ecirc;n tuổi kh&aacute;c để gi&agrave;nh số tiền thưởng 1,242 triệu đ&ocirc;la cho nh&agrave; v&ocirc; địch.</p>\r\n\r\n<p>Năm birdie v&agrave; một bogey ở v&ograve;ng cuối l&agrave; đủ để Pan l&ecirc;n ng&ocirc;i với tổng điểm -12, c&aacute;ch đ&uacute;ng một gậy so với nh&igrave; bảng Matt Kuchar. Chiến thắng tại s&acirc;n Harbour Town khiến sự nghiệp của golfer Đ&agrave;i Loan sang trang. Anh được đảm bảo quyền dự PGA Tour đến năm 2021, gi&agrave;nh v&eacute; dự hai major PGA Championship 2019 v&agrave; Masters 2020. B&ecirc;n cạnh đ&oacute;, Pan cũng s&aacute;ng cửa lọt v&agrave;o đội h&igrave;nh tuyển Quốc tế dự Presidents Cup v&agrave;o cuối năm.</p>\r\n\r\n<p>&quot;Đ&acirc;y l&agrave; chiến thắng kh&oacute; tin&quot;, Pan chia sẻ ngay sau giải. &quot;Điện thoại của t&ocirc;i đổ chu&ocirc;ng li&ecirc;n tục trong 10 ph&uacute;t vừa qua. T&ocirc;i rất hạnh ph&uacute;c với chiến thắng đầu ti&ecirc;n tr&ecirc;n Tour&quot;.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"C.T. Pan là golfer thứ 14 lần đầu vô địch PGA Tour tại RBC Heritage. Ảnh: AP.\" src=\"https://i-thethao.vnecdn.net/2019/04/22/2000-jpeg-1555910946-4777-1555910996.png\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>C.T. Pan l&agrave; golfer thứ 14 lần đầu v&ocirc; địch PGA Tour tại RBC Heritage. Ảnh:&nbsp;<em>AP.</em></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Danh hiệu tại RBC Heritage cũng giải tỏa phần n&agrave;o cho C.T. Pan, người đ&aacute;nh kh&ocirc;ng tốt từ đầu năm với bốn giải kh&ocirc;ng qua cắt v&agrave; chỉ c&oacute; ba lần lọt top 25 ở c&aacute;c giải tham dự.</p>\r\n\r\n<p>Matt Kuchar đứng thứ hai với điểm -11, trong khi Patrick Cantlay, Scott Piercy v&agrave; Shane Lowry xếp T3 với một gậy nhiều hơn. Golfer dẫn đầu v&ograve;ng ba Dustin Johnson th&igrave; g&acirc;y thất vọng tr&agrave;n trề. Số một thế giới bogey ba lần v&agrave; bogey k&eacute;p hai lần chỉ trong năm hố, từ hố 11 đến 15, qua đ&oacute; đạt điểm +6 ở v&ograve;ng cuối v&agrave; rớt xuống T28 chung cuộc với tổng -4.</p>\r\n\r\n<p>Tuần n&agrave;y, c&aacute;c golfer sẽ c&oacute; mặt tại Louisiana, Mỹ để dự giải đấu đ&ocirc;i Zurich Classic of New Orleans. Đ&acirc;y l&agrave; sự kiện duy nhất trong m&ugrave;a giải diễn ra với thể thức gh&eacute;p cặp golfer qua bốn v&ograve;ng</p>', 'Cheng-tsung Pan lần đầu vô địch một giải PGA Tour, khi đạt điểm -12 qua bốn vòng tại RBC Heritage.', 3, NULL, NULL),
(11, 0, '2019-04-21 23:13:53', '2019-04-21 23:28:03', 'Mourinho không bất ngờ nếu Ajax hay Tottenham vô địch Champions League', '/photos/1/untitled-1555833729-5394-1555833820_180x108.png', '<p>HLV người Bồ Đ&agrave;o Nha tin hai đội b&oacute;ng bị xem l&agrave; cửa dưới c&oacute; cơ hội ngang ngửa với Liverpool v&agrave; Barca.</p>\r\n\r\n<p>&quot;T&ocirc;i thực sự vui cho Ajax v&agrave; Tottenham. Một khi bạn v&agrave;o tới tứ kết, phải c&oacute; l&yacute; do n&agrave;o đ&oacute; để điều đ&oacute; xảy ra. Ở v&ograve;ng bảng, đ&ocirc;i khi bạn gặp may, đ&ocirc;i khi đối thủ chơi kh&ocirc;ng tốt như kỳ vọng, đ&ocirc;i khi bạn gặp may khi bốc thăm v&ograve;ng 1/8. Nhưng khi v&agrave;o tới tứ kết, theo một c&aacute;ch đ&aacute;ng t&ocirc;n trọng, t&ocirc;i lu&ocirc;n tin rằng mỗi đội c&oacute; 12,5% cơ hội v&ocirc; địch&quot;, Jose Mourinho n&oacute;i.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Mourinho tin rằng Ajax và Tottenham đủ sức vô địch Champions League. Ảnh: Reuters.\" src=\"https://i-thethao.vnecdn.net/2019/04/21/Untitled-7836-1555833819.jpg\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Mourinho tin rằng Ajax v&agrave; Tottenham đủ sức v&ocirc; địch Champions League. Ảnh:&nbsp;<em>Reuters</em>.</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Ajax li&ecirc;n tiếp tạo ra hai cơn địa chấn khi đ&aacute;nh bại Real Madrid ở v&ograve;ng 1/8 v&agrave; Juventus ở tứ kết. Tottenham cũng g&acirc;y sốc khi loại Man City của Pep Guardiola để g&oacute;p mặt tại b&aacute;n kết.</p>\r\n\r\n<p>&quot;Khi bạn v&agrave;o b&aacute;n kết, cơ hội thậm ch&iacute; lớn hơn, l&agrave; 25% cho mỗi đội&quot;, Mourinho n&oacute;i th&ecirc;m. &quot;T&ocirc;i sẽ kh&ocirc;ng bất ngờ nếu Ajax hay Tottenham v&ocirc; địch. Được rồi, c&oacute; lẽ t&ocirc;i sẽ bất ngờ một ch&uacute;t nhưng t&ocirc;i sẽ kh&ocirc;ng sốc v&igrave; hai đội đ&oacute; đ&atilde; v&agrave;o b&aacute;n kết v&agrave; một trong hai sẽ v&agrave;o chung kết. Trận chung kết l&agrave; trận đấu cuối c&ugrave;ng, chỉ một trận. N&oacute; chỉ k&eacute;o d&agrave;i 90 ph&uacute;t v&agrave; đ&oacute; l&agrave; trận đấu cả đời của đa số cầu thủ&quot;.</p>\r\n\r\n<p>&quot;T&ocirc;i nghĩ cả hai đội đều đang mơ về chức v&ocirc; địch v&agrave; họ c&oacute; l&yacute; do tốt để mơ về n&oacute;. Ajax l&agrave; chuy&ecirc;n gia loại c&aacute;c đội lớn. C&ograve;n Tottenham, ch&uacute;ng ta kh&ocirc;ng thể xem họ l&agrave; đội b&oacute;ng &#39;s&aacute;t &ocirc;ng lớn&#39; v&igrave; Man City kh&ocirc;ng c&oacute; truyền thống tại Champions League. Nhưng dẫu sao Man City vẫn l&agrave; đội b&oacute;ng h&agrave;ng đầu ở Anh, v&agrave; Tottenham vẫn c&oacute; thể đ&aacute;nh bại họ. Cho n&ecirc;n, t&ocirc;i nghĩ cơ hội v&ocirc; địch của Tottenham l&agrave; 50-50&quot;, &ocirc;ng n&oacute;i tiếp.</p>', 'HLV người Bồ Đào Nha tin hai đội bóng bị xem là cửa dưới có cơ hội ngang ngửa với Liverpool và Barca.', 3, NULL, NULL),
(12, 0, '2019-04-21 23:07:12', '2019-04-21 23:07:12', 'Fognini vô địch Monte Carlo 2019', '/photos/1/20001-1555870122-1555870136-7229-1555870146_180x108.png', '<p>Tay vợt Italy lần đầu v&ocirc; địch một giải ATP 1000, sau khi hạ Dusan Lajovic 6-3, 6-4 tại chung kết giải Monte Carlo.</p>\r\n\r\n<p>Một ng&agrave;y sau khi g&acirc;y sốc bằng việc loại Rafael Nadal ở b&aacute;n kết, Fabio Fognini c&oacute; được danh hiệu lớn nhất trong sự nghiệp từ trước đến nay. Tay vợt Italy nhẹ nh&agrave;ng vượt qua &quot;hiện tượng&quot; Dusan Lajovic trong trận ATP 1000 đầu ti&ecirc;n m&agrave; cả hai g&oacute;p mặt.</p>\r\n\r\n<p>Ở ba lần hạ Nadal trước đ&oacute;, Fognini đều thua nhanh ở v&ograve;ng đấu kế tiếp. Tay vợt Italy khiến người h&acirc;m mộ lo ngại điều tương tự sẽ lặp lại, khi đ&aacute;nh mất game giao b&oacute;ng thứ hai trong trận.</p>\r\n\r\n<p>Nhưng Lajovic cũng mới lần đầu dự chung kết ATP 1000 v&agrave; kh&ocirc;ng vững v&agrave;ng về t&acirc;m l&yacute;. Tay vợt Serbia c&oacute; hai game-point để dẫn 3-1 nhưng đều bỏ lỡ. Anh đ&aacute;nh hỏng qu&aacute; nhiều, để Fognini thắng liền bốn game v&agrave; dẫn ngược 5-2.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Lajovic mắc tới 36 lỗi tự đánh hỏng ở trận chung kết, nhiều hơn Fognini 13 lỗi. Ảnh: AP.\" src=\"https://i-thethao.vnecdn.net/2019/04/22/2000-jpeg-1555869978-2434-1555870145.png\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Lajovic mắc tới 36 lỗi tự đ&aacute;nh hỏng ở trận chung kết, nhiều hơn Fognini 13 lỗi. Ảnh:&nbsp;<em>AP</em>.</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Fognini c&agrave;ng chơi c&agrave;ng lấy lại sự b&igrave;nh tĩnh. Anh cứu th&agrave;nh c&ocirc;ng break-point ở game giao quyết định, trước khi thắng set đầu 6-3 nhờ điểm winner thứ 12.</p>\r\n\r\n<p>Lajovic đuối hơn trong c&aacute;c pha đ&ocirc;i c&ocirc;ng cuối s&acirc;n nhưng cũng kh&ocirc;ng dễ đầu h&agrave;ng. Tay vợt số 48 thế giới mất game giao b&oacute;ng đầu set hai, nhưng gỡ h&ograve;a ngay sau đ&oacute;. Chỉ khi Fognini thắng th&ecirc;m một game giao b&oacute;ng nữa v&agrave; vươn l&ecirc;n dẫn 3-2, thế trận mới tuột khỏi tầm tay Lajovic. Tay vợt Serbia g&aacute;c vợt chung cuộc với tỷ số 3-6, 4-6.</p>\r\n\r\n<p>&quot;Lần đầu v&agrave;o chung kết ATP 1000 l&agrave; trải nghiệm tuyệt vời với t&ocirc;i&quot;, Lajovic chia sẻ. &quot;Gi&oacute; tại Monte Carlo kh&aacute; to v&agrave; Fognini l&agrave; người gi&agrave;u kinh nghiệm hơn ở điều kiện thời tiết như h&ocirc;m nay. C&aacute;c c&uacute; quả v&agrave; khả năng di chuyển của anh ấy cũng rất tốt. T&ocirc;i c&oacute; cảm gi&aacute;c rằng m&igrave;nh vất vả hơn anh ấy trong việc gi&agrave;nh điểm. Đ&oacute; l&agrave; điểm mấu chốt trong thất bại n&agrave;y&quot;.</p>\r\n\r\n<p>Fognini l&agrave; hạt giống thấp nhất đăng quang tại Monte Carlo trong 20 năm qua. Anh gi&agrave;nh số tiền thưởng 958.000 đ&ocirc;la c&ugrave;ng 1000 điểm thưởng ATP &ndash; số điểm gi&uacute;p tay vợt Italy vươn l&ecirc;n thứ 12 thế giới v&agrave;o tuần n&agrave;y.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Fognini lên ngôi xứng đáng tại Monte Carlo. Ảnh: AP.\" src=\"https://i-thethao.vnecdn.net/2019/04/22/2000-1-jpeg-1555870095-5370-1555870146.png\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Fognini l&ecirc;n ng&ocirc;i xứng đ&aacute;ng tại Monte Carlo. Ảnh<em>:&nbsp;AP.</em></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&quot;T&ocirc;i phải chuẩn bị kỹ c&agrave;ng cho trận đấu n&agrave;y v&igrave; HLV cũ của t&ocirc;i đang l&agrave;m việc c&ugrave;ng Lajovic&quot;, Fognini chia sẻ. &quot;T&ocirc;i đ&atilde; cố gắng kh&ocirc;ng để bị bắt b&agrave;i. Đ&acirc;y l&agrave; th&agrave;nh tựu to lớn sau một giải đấu kh&oacute; khăn. T&ocirc;i rất hạnh ph&uacute;c&quot;.</p>\r\n\r\n<p>Danh hiệu ATP 1000 đầu ti&ecirc;n sẽ mang đến sự tự tin cho Fognini trong phần c&ograve;n lại của m&ugrave;a đất nện. Tay vợt mới trở lại sau chấn thương từng hai lần su&yacute;t bị loại tại Monte Carlo năm nay. Anh bị Andrey Rubley dẫn 6-4, 4-1 ở v&ograve;ng một v&agrave; bị Borna Coric dẫn 6-1, 2-0 ở tứ kết. Fognini thắng ngược cả hai trận đấu đ&oacute;, rồi hạ &quot;Vua đất nện&quot; Nadal chỉ sau hai set v&agrave; cuối c&ugrave;ng c&oacute; danh hiệu lớn nhất sự nghiệp từ trước đến nay</p>', 'Tay vợt Italy lần đầu vô địch một giải ATP 1000, sau khi hạ Dusan Lajovic 6-3, 6-4 tại chung kết giải Monte Carlo.', 3, NULL, NULL),
(13, 0, '2019-04-21 23:08:43', '2019-04-21 23:08:43', 'Ronaldo cam kết ở lại Juventus', '/photos/1/ronaldo-1555823369-1555823379-8659-1555823432.png', '<p>Si&ecirc;u sao 34 tuổi sẽ gắn b&oacute; với &quot;L&atilde;o B&agrave;&quot; th&ecirc;m &iacute;t nhất một m&ugrave;a giải để chinh phục Champions League.</p>\r\n\r\n<p>&quot;Chắc chắn 1000 phần trăm l&agrave; t&ocirc;i sẽ ở lại Juventus m&ugrave;a tới&quot;, Cristiano Ronaldo n&oacute;i sau khi c&ugrave;ng Juventus v&ocirc; địch Serie A 2018-2019. Đường căng ngang của anh khiến hậu vệ Fiorentina phản lưới, ấn định thắng lợi 2-1 cho Juventus ở v&ograve;ng 33. Chiến thắng gi&uacute;p CLB th&agrave;nh Turin hơn nh&igrave; bảng Napoli 20 điểm, v&ocirc; địch sớm năm v&ograve;ng.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Ronaldo (số 7) sẽ không rời Juventus hè 2019. Ảnh: Reuters.\" src=\"https://i-thethao.vnecdn.net/2019/04/21/ronaldo-1555823369-1555823379-8659-1555823432.png\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Ronaldo (số 7) sẽ kh&ocirc;ng rời Juventus h&egrave; 2019. Ảnh:&nbsp;<em>Reuters</em>.</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Tương lai của Ronaldo tại Turin bị đặt dấu hỏi, sau khi Juventus bị Ajax loại ở tứ kết Champions League. Ch&acirc;u &Acirc;u l&agrave; mục ti&ecirc;u chinh phục của Juventus m&ugrave;a n&agrave;y, sau bảy năm li&ecirc;n tiếp đoạt Scudetto. Nhưng, sự hiện diện của Ronaldo chưa đủ để gi&uacute;p &quot;L&atilde;o B&agrave;&quot; ho&agrave;n th&agrave;nh ước nguyện. Danh hiệu Serie A của Juventus gần bằng Inter v&agrave; AC Milan cộng lại, nhưng họ thua hai CLB th&agrave;nh Milan ở danh hiệu Champions League.</p>\r\n\r\n<p>Ronaldo cũng coi trọng Champions League hơn danh hiệu quốc gia, nhưng đ&acirc;y l&agrave; lần đầu anh v&ocirc; địch Serie A. Si&ecirc;u sao người Bồ Đ&agrave;o Nha trở th&agrave;nh cầu thủ đầu ti&ecirc;n v&ocirc; địch Anh, T&acirc;y Ban Nha v&agrave; Italy. Juventus c&oacute; thể sẽ lột x&aacute;c trong h&egrave; 2019, để chinh phục Champions League sau 24 năm dang dở.</p>\r\n\r\n<p>Ronaldo cập bến Juventus h&egrave; 2018 với gi&aacute; 120 triệu đ&ocirc;la. Mục ti&ecirc;u của anh l&agrave; đi t&igrave;m thử th&aacute;ch mới.</p>', 'Siêu sao 34 tuổi sẽ gắn bó với \"Lão Bà\" thêm ít nhất một mùa giải để chinh phục Champions League.', 3, NULL, NULL),
(14, 0, '2019-04-21 23:11:53', '2019-04-21 23:11:53', 'Golfer Đài Loan vô địch RBC Heritage', '/photos/1/2000-1555910972-2965-1555910996_180x108.jpg', '<p>Cheng-tsung Pan lần đầu v&ocirc; địch một giải PGA Tour, khi đạt điểm -12 qua bốn v&ograve;ng tại RBC Heritage.</p>\r\n\r\n<p>Sau 32 năm, Đ&agrave;i Loan mới c&oacute; th&ecirc;m một golfer v&ocirc; địch PGA Tour. C.T. Pan tạo ra bất ngờ lớn khi vượt mặt golfer số một thế giới Dustin Johnson c&ugrave;ng những t&ecirc;n tuổi kh&aacute;c để gi&agrave;nh số tiền thưởng 1,242 triệu đ&ocirc;la cho nh&agrave; v&ocirc; địch.</p>\r\n\r\n<p>Năm birdie v&agrave; một bogey ở v&ograve;ng cuối l&agrave; đủ để Pan l&ecirc;n ng&ocirc;i với tổng điểm -12, c&aacute;ch đ&uacute;ng một gậy so với nh&igrave; bảng Matt Kuchar. Chiến thắng tại s&acirc;n Harbour Town khiến sự nghiệp của golfer Đ&agrave;i Loan sang trang. Anh được đảm bảo quyền dự PGA Tour đến năm 2021, gi&agrave;nh v&eacute; dự hai major PGA Championship 2019 v&agrave; Masters 2020. B&ecirc;n cạnh đ&oacute;, Pan cũng s&aacute;ng cửa lọt v&agrave;o đội h&igrave;nh tuyển Quốc tế dự Presidents Cup v&agrave;o cuối năm.</p>\r\n\r\n<p>&quot;Đ&acirc;y l&agrave; chiến thắng kh&oacute; tin&quot;, Pan chia sẻ ngay sau giải. &quot;Điện thoại của t&ocirc;i đổ chu&ocirc;ng li&ecirc;n tục trong 10 ph&uacute;t vừa qua. T&ocirc;i rất hạnh ph&uacute;c với chiến thắng đầu ti&ecirc;n tr&ecirc;n Tour&quot;.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"C.T. Pan là golfer thứ 14 lần đầu vô địch PGA Tour tại RBC Heritage. Ảnh: AP.\" src=\"https://i-thethao.vnecdn.net/2019/04/22/2000-jpeg-1555910946-4777-1555910996.png\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>C.T. Pan l&agrave; golfer thứ 14 lần đầu v&ocirc; địch PGA Tour tại RBC Heritage. Ảnh:&nbsp;<em>AP.</em></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Danh hiệu tại RBC Heritage cũng giải tỏa phần n&agrave;o cho C.T. Pan, người đ&aacute;nh kh&ocirc;ng tốt từ đầu năm với bốn giải kh&ocirc;ng qua cắt v&agrave; chỉ c&oacute; ba lần lọt top 25 ở c&aacute;c giải tham dự.</p>\r\n\r\n<p>Matt Kuchar đứng thứ hai với điểm -11, trong khi Patrick Cantlay, Scott Piercy v&agrave; Shane Lowry xếp T3 với một gậy nhiều hơn. Golfer dẫn đầu v&ograve;ng ba Dustin Johnson th&igrave; g&acirc;y thất vọng tr&agrave;n trề. Số một thế giới bogey ba lần v&agrave; bogey k&eacute;p hai lần chỉ trong năm hố, từ hố 11 đến 15, qua đ&oacute; đạt điểm +6 ở v&ograve;ng cuối v&agrave; rớt xuống T28 chung cuộc với tổng -4.</p>\r\n\r\n<p>Tuần n&agrave;y, c&aacute;c golfer sẽ c&oacute; mặt tại Louisiana, Mỹ để dự giải đấu đ&ocirc;i Zurich Classic of New Orleans. Đ&acirc;y l&agrave; sự kiện duy nhất trong m&ugrave;a giải diễn ra với thể thức gh&eacute;p cặp golfer qua bốn v&ograve;ng</p>', 'Cheng-tsung Pan lần đầu vô địch một giải PGA Tour, khi đạt điểm -12 qua bốn vòng tại RBC Heritage.', 3, NULL, NULL),
(15, 0, '2019-04-21 23:13:53', '2019-04-21 23:28:35', 'Mourinho không bất ngờ nếu Ajax hay Tottenham vô địch Champions League', '/photos/1/untitled-1555833729-5394-1555833820_180x108.png', '<p>HLV người Bồ Đ&agrave;o Nha tin hai đội b&oacute;ng bị xem l&agrave; cửa dưới c&oacute; cơ hội ngang ngửa với Liverpool v&agrave; Barca.</p>\r\n\r\n<p>&quot;T&ocirc;i thực sự vui cho Ajax v&agrave; Tottenham. Một khi bạn v&agrave;o tới tứ kết, phải c&oacute; l&yacute; do n&agrave;o đ&oacute; để điều đ&oacute; xảy ra. Ở v&ograve;ng bảng, đ&ocirc;i khi bạn gặp may, đ&ocirc;i khi đối thủ chơi kh&ocirc;ng tốt như kỳ vọng, đ&ocirc;i khi bạn gặp may khi bốc thăm v&ograve;ng 1/8. Nhưng khi v&agrave;o tới tứ kết, theo một c&aacute;ch đ&aacute;ng t&ocirc;n trọng, t&ocirc;i lu&ocirc;n tin rằng mỗi đội c&oacute; 12,5% cơ hội v&ocirc; địch&quot;, Jose Mourinho n&oacute;i.</p>\r\n\r\n<table align=\"center\" border=\"0\" cellpadding=\"3\" cellspacing=\"0\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"Mourinho tin rằng Ajax và Tottenham đủ sức vô địch Champions League. Ảnh: Reuters.\" src=\"https://i-thethao.vnecdn.net/2019/04/21/Untitled-7836-1555833819.jpg\" /></td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>Mourinho tin rằng Ajax v&agrave; Tottenham đủ sức v&ocirc; địch Champions League. Ảnh:&nbsp;<em>Reuters</em>.</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Ajax li&ecirc;n tiếp tạo ra hai cơn địa chấn khi đ&aacute;nh bại Real Madrid ở v&ograve;ng 1/8 v&agrave; Juventus ở tứ kết. Tottenham cũng g&acirc;y sốc khi loại Man City của Pep Guardiola để g&oacute;p mặt tại b&aacute;n kết.</p>\r\n\r\n<p>&quot;Khi bạn v&agrave;o b&aacute;n kết, cơ hội thậm ch&iacute; lớn hơn, l&agrave; 25% cho mỗi đội&quot;, Mourinho n&oacute;i th&ecirc;m. &quot;T&ocirc;i sẽ kh&ocirc;ng bất ngờ nếu Ajax hay Tottenham v&ocirc; địch. Được rồi, c&oacute; lẽ t&ocirc;i sẽ bất ngờ một ch&uacute;t nhưng t&ocirc;i sẽ kh&ocirc;ng sốc v&igrave; hai đội đ&oacute; đ&atilde; v&agrave;o b&aacute;n kết v&agrave; một trong hai sẽ v&agrave;o chung kết. Trận chung kết l&agrave; trận đấu cuối c&ugrave;ng, chỉ một trận. N&oacute; chỉ k&eacute;o d&agrave;i 90 ph&uacute;t v&agrave; đ&oacute; l&agrave; trận đấu cả đời của đa số cầu thủ&quot;.</p>\r\n\r\n<p>&quot;T&ocirc;i nghĩ cả hai đội đều đang mơ về chức v&ocirc; địch v&agrave; họ c&oacute; l&yacute; do tốt để mơ về n&oacute;. Ajax l&agrave; chuy&ecirc;n gia loại c&aacute;c đội lớn. C&ograve;n Tottenham, ch&uacute;ng ta kh&ocirc;ng thể xem họ l&agrave; đội b&oacute;ng &#39;s&aacute;t &ocirc;ng lớn&#39; v&igrave; Man City kh&ocirc;ng c&oacute; truyền thống tại Champions League. Nhưng dẫu sao Man City vẫn l&agrave; đội b&oacute;ng h&agrave;ng đầu ở Anh, v&agrave; Tottenham vẫn c&oacute; thể đ&aacute;nh bại họ. Cho n&ecirc;n, t&ocirc;i nghĩ cơ hội v&ocirc; địch của Tottenham l&agrave; 50-50&quot;, &ocirc;ng n&oacute;i tiếp.</p>', 'HLV người Bồ Đào Nha tin hai đội bóng bị xem là cửa dưới có cơ hội ngang ngửa với Liverpool và Barca.', 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('quangtienvkt@gmail.com', '$2y$10$6qhwY0f0bB8tONoMotYJwu3h3kSHJUwFKG.hTIZlMPvJaG4FFV9wu', '2019-01-30 02:51:14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'View list news', 'web', '2019-02-21 20:37:14', '2019-02-24 01:40:46'),
(2, 'Edit news', 'web', '2019-02-21 20:38:38', '2019-02-24 01:41:03'),
(3, 'Delete news', 'web', '2019-02-24 01:41:27', '2019-02-24 01:41:27'),
(4, 'View list Product', 'web', '2019-02-24 01:43:35', '2019-02-24 01:43:35'),
(5, 'Edit Product', 'web', '2019-02-24 01:43:47', '2019-02-24 01:43:54'),
(6, 'Delete news', 'web', '2019-02-24 01:44:05', '2019-02-24 01:44:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `summary` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `images` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `seo_keyword` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `seo_description` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `created_at`, `updated_at`, `name`, `image`, `content`, `summary`, `sort_order`, `images`, `category_id`, `seo_keyword`, `seo_description`) VALUES
(1, '2019-03-17 20:55:36', '2019-04-28 20:42:56', 'Sản phẩm đầu tiên', '/photos/1/ｾｫﾐﾞﾕﾕﾆｬ-ﾍ・ﾉｰ・104634-1-min.jpg', '<p>&nbsp;</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->B&ocirc;ng tẩy trang được l&agrave;m từ 100% Cotton&nbsp; nguy&ecirc;n chất từ thi&ecirc;n nhi&ecirc;n, kh&ocirc;ng g&acirc;y k&iacute;ch ứng cho da.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Được thiết kế 3 lớp. Miếng b&ocirc;ng mềm mịn v&agrave; phần viền bồng được dập cả 4 viền gi&uacute;p cho b&ocirc;ng kh&ocirc;ng bị xơ đem tới cảm gi&aacute;c dễ chịu v&agrave; th&acirc;n thiện cho da</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Chất lượng đ&aacute;p ứng ti&ecirc;u chuẩn của Nhật Bản. Tạo cảm gi&aacute;c nhẹ nh&agrave;ng v&agrave; mềm mại khi sử dụng.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Độ thấm vừa phải gi&uacute;p tiết kiệm hơn trong việc sử dụng toner hoặc nước tẩy trang.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->K&iacute;ch thước miếng b&ocirc;ng ho&agrave;n hảo, vừa tay v&agrave; đặc biết t&uacute;i co d&acirc;y r&uacute;t c&oacute; thể k&eacute;o lại được v&igrave; vậy rất tiện dụng khi mang đi du lịch.</p>', 'được làm từ 100% Cotton nguyên chất từ thiên nhiên, không gây kích ứng cho da.', 0, '[]', 8, NULL, NULL),
(2, '2019-04-14 21:26:16', '2019-04-22 02:28:02', 'Sữa Nghệ CurCuMilk Collagen', '/photos/1/Sản phẩm/1.jpg', '<h1><strong>SỮA NGHỆ CURCUMILK COLLAGEN</strong></h1>\r\n\r\n<p>Củ nghệ chứa Curcumin với h&agrave;m lượng 1-3%, đ&acirc;y l&agrave; hoạt chất qu&yacute; c&oacute; t&aacute;c dụng sinh học ch&iacute;nh nhưng &iacute;t tan, hấp thụ k&eacute;m chỉ đạt 1-2%.</p>\r\n\r\n<p>Nano Curcumin với k&iacute;ch thước si&ecirc;u nhỏ được nghi&ecirc;n cứu v&agrave; sản xuất bở Viện H&agrave;n L&acirc;m Khoa học &amp; C&ocirc;ng nghệ Việt Nam gi&uacute;p thẩm thấu v&agrave;o m&aacute;u nhanh ch&oacute;ng, hấp thụ tới 90-95%, độ tan tăng 4500 &ndash; 7500 lần so với bột nghệ th&ocirc;ng thường.</p>\r\n\r\n<p>CurcuMilk Collagen l&agrave; sự kết hợp ho&agrave;n hảo của Sữa gầy, Nano Curcumin, Collagen, Vitamin, đường cỏ ngọt Stevia thay thế cho tinh bột nghệ, ngon hơn hiệu quả hơn. Sử dụng l&acirc;u d&agrave;i m&agrave; kh&ocirc;ng lo ngại vấn đề tiểu đường v&agrave; tăng c&acirc;n.</p>\r\n\r\n<p><strong>Th&agrave;nh phần</strong></p>\r\n\r\n<p>Sữa gầy (98%)</p>\r\n\r\n<p>Nano Curcumin (1%)</p>\r\n\r\n<p>Collagen, Vitamin E, Đường cỏ ngọt.</p>\r\n\r\n<p>Phụ liệu: nipazil, nipazol vừa đủ.</p>\r\n\r\n<p><strong>C&ocirc;ng dụng:</strong></p>\r\n\r\n<p>&nbsp; Bổ sung dinh dưỡng bồi bổ cơ thể, n&acirc;ng cao sức khỏe v&agrave; thể trạng, hỗ trợ tăng cường ti&ecirc;u h&oacute;a, gi&uacute;p nhanh l&agrave;nh vết thương.</p>\r\n\r\n<p>&nbsp; H&agrave;m lượng Curcumin c&oacute; trong sản phẩm gi&uacute;p da hồng h&agrave;o, giảm t&agrave;n nhang, n&aacute;m m&aacute;, hỗ trợ l&agrave;m giảm c&aacute;c triệu chứng của bệnh dạ d&agrave;y, giảm h&agrave;m lượng cholesterol trong m&aacute;u. Ngăn ngừa ung thư.</p>\r\n\r\n<p><strong>Đối tượng sử dụng</strong></p>\r\n\r\n<p>D&ugrave;ng cho người từ 18 tuổi trở l&ecirc;n: Phụ nữ sau sinh, người sau phẫu thuật, người gi&agrave;, người sức khỏe yếu, người bị bệnh dạ d&agrave;y, người kh&iacute; huyết k&eacute;m, da k&eacute;m sắc, dạ bị sạm, t&agrave;n nhang, n&aacute;m m&aacute;. Người bị mỡ m&aacute;u cao, người ung thư v&agrave; người cần ngăn ngừa ung thư. D&ugrave;ng được cho người tiểu đường.</p>\r\n\r\n<p><strong>Hướng dẫn sử dụng</strong></p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; Pha 4 muỗng c&agrave; ph&ecirc; (20gr) v&agrave;o ly nước ấm 180ml (khoảng 50oC), khấy đều đến khi tan ho&agrave;n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;to&agrave;n&nbsp; v&agrave; uống.</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp;Ng&agrave;y d&ugrave;ng 1 ly. Kh&ocirc;ng sử dụng nếu dị ứng với bất kỳ th&agrave;nh phần của sản phẩm</p>\r\n\r\n<p><strong>&nbsp;Hướng dẫn bảo quản:</strong></p>\r\n\r\n<p>&nbsp; Sản phẩm được l&agrave;m từ sữa, h&uacute;t ẩm mạnh, bảo quản sản phẩm nơi kh&ocirc; r&aacute;o, tho&aacute;ng m&aacute;t, tr&aacute;nh&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &aacute;nh nắng mặt trời. Kh&ocirc;ng bảo quản trong tủ lạnh. D&ugrave;ng trong v&ograve;ng 30 ng&agrave;y sau khi mở nắp.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Đ&oacute;ng&nbsp; chặt nắp sau khi sử dụng.</p>\r\n\r\n<p><br />\r\n<em>*<strong>Ch&uacute; &yacute;</strong></em><strong>:</strong>&nbsp;Thực phẩm n&agrave;y kh&ocirc;ng phải l&agrave; thuốc, kh&ocirc;ng c&oacute; t&aacute;c dụng thay thế thuốc chữa bệnh.</p>', 'CurcuMilk Collagen là sự kết hợp hoàn hảo của Sữa gầy, Nano Curcumin', 0, '[]', 8, NULL, NULL),
(3, '2019-04-21 03:17:23', '2019-04-21 03:17:23', 'Gel Phụ Khoa Vương Hậu', '/photos/1/IMG_376462.jpg', NULL, 'Dung dịch vệ sinh phụ nữ Vương Hậu là sản phẩm dùng để vệ sinh vùng kín hàng ngày,', 0, '[]', 8, NULL, NULL),
(4, '2019-04-21 03:18:11', '2019-04-21 03:18:11', 'Kem Sẹo Doctor A', '/photos/1/Untitled-2.jpg', NULL, 'Kem trị sẹo Doctor A là giải pháp hoàn hảo nhất cho người bị sẹo', 0, '[]', 8, NULL, NULL),
(5, '2019-03-17 20:55:36', '2019-04-20 21:36:00', 'Sản phẩm đầu tiên', '/photos/1/ｾｫﾐﾞﾕﾕﾆｬ-ﾍ・ﾉｰ・104634-1-min.jpg', '<p>&nbsp;</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->B&ocirc;ng tẩy trang được l&agrave;m từ 100% Cotton&nbsp; nguy&ecirc;n chất từ thi&ecirc;n nhi&ecirc;n, kh&ocirc;ng g&acirc;y k&iacute;ch ứng cho da.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Được thiết kế 3 lớp. Miếng b&ocirc;ng mềm mịn v&agrave; phần viền bồng được dập cả 4 viền gi&uacute;p cho b&ocirc;ng kh&ocirc;ng bị xơ đem tới cảm gi&aacute;c dễ chịu v&agrave; th&acirc;n thiện cho da</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Chất lượng đ&aacute;p ứng ti&ecirc;u chuẩn của Nhật Bản. Tạo cảm gi&aacute;c nhẹ nh&agrave;ng v&agrave; mềm mại khi sử dụng.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Độ thấm vừa phải gi&uacute;p tiết kiệm hơn trong việc sử dụng toner hoặc nước tẩy trang.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->K&iacute;ch thước miếng b&ocirc;ng ho&agrave;n hảo, vừa tay v&agrave; đặc biết t&uacute;i co d&acirc;y r&uacute;t c&oacute; thể k&eacute;o lại được v&igrave; vậy rất tiện dụng khi mang đi du lịch.</p>', 'được làm từ 100% Cotton nguyên chất từ thiên nhiên, không gây kích ứng cho da. Được thiết kế 3 lớp. Miếng bông mềm mị', 0, '[\"\\/imgs\\/12\\/0-1554777833.jpeg\",\"\\/imgs\\/12\\/1-1554777833.jpeg\",\"\\/imgs\\/12\\/2-1554777833.jpeg\",\"\\/imgs\\/12\\/3-1554777833.jpeg\",\"\\/imgs\\/12\\/4-1554777833.jpeg\"]', 8, NULL, NULL),
(11, '2019-04-21 03:18:11', '2019-04-21 03:18:11', 'Kem Sẹo Doctor A', '/photos/1/Untitled-2.jpg', NULL, 'Kem trị sẹo Doctor A là giải pháp hoàn hảo nhất cho người bị sẹo', 0, '[]', 8, NULL, NULL),
(12, '2019-03-17 20:55:36', '2019-04-20 21:36:25', 'Sản phẩm đầu tiên', '/photos/1/ｾｫﾐﾞﾕﾕﾆｬ-ﾍ・ﾉｰ・104634-1-min.jpg', '<p>&nbsp;</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->B&ocirc;ng tẩy trang được l&agrave;m từ 100% Cotton&nbsp; nguy&ecirc;n chất từ thi&ecirc;n nhi&ecirc;n, kh&ocirc;ng g&acirc;y k&iacute;ch ứng cho da.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Được thiết kế 3 lớp. Miếng b&ocirc;ng mềm mịn v&agrave; phần viền bồng được dập cả 4 viền gi&uacute;p cho b&ocirc;ng kh&ocirc;ng bị xơ đem tới cảm gi&aacute;c dễ chịu v&agrave; th&acirc;n thiện cho da</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Chất lượng đ&aacute;p ứng ti&ecirc;u chuẩn của Nhật Bản. Tạo cảm gi&aacute;c nhẹ nh&agrave;ng v&agrave; mềm mại khi sử dụng.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Độ thấm vừa phải gi&uacute;p tiết kiệm hơn trong việc sử dụng toner hoặc nước tẩy trang.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->K&iacute;ch thước miếng b&ocirc;ng ho&agrave;n hảo, vừa tay v&agrave; đặc biết t&uacute;i co d&acirc;y r&uacute;t c&oacute; thể k&eacute;o lại được v&igrave; vậy rất tiện dụng khi mang đi du lịch.</p>', 'được làm từ 100% Cotton nguyên chất từ thiên nhiên, không gây kích ứng cho da. Được thiết kế 3 lớp. Miếng bông mềm mị', 0, '[\"\\/imgs\\/12\\/0-1554777833.jpeg\",\"\\/imgs\\/12\\/1-1554777833.jpeg\",\"\\/imgs\\/12\\/2-1554777833.jpeg\",\"\\/imgs\\/12\\/3-1554777833.jpeg\",\"\\/imgs\\/12\\/4-1554777833.jpeg\"]', 8, NULL, NULL),
(13, '2019-03-17 20:55:36', '2019-04-20 21:36:30', 'Sản phẩm đầu tiên', '/photos/1/ｾｫﾐﾞﾕﾕﾆｬ-ﾍ・ﾉｰ・104634-1-min.jpg', '<p>&nbsp;</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->B&ocirc;ng tẩy trang được l&agrave;m từ 100% Cotton&nbsp; nguy&ecirc;n chất từ thi&ecirc;n nhi&ecirc;n, kh&ocirc;ng g&acirc;y k&iacute;ch ứng cho da.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Được thiết kế 3 lớp. Miếng b&ocirc;ng mềm mịn v&agrave; phần viền bồng được dập cả 4 viền gi&uacute;p cho b&ocirc;ng kh&ocirc;ng bị xơ đem tới cảm gi&aacute;c dễ chịu v&agrave; th&acirc;n thiện cho da</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Chất lượng đ&aacute;p ứng ti&ecirc;u chuẩn của Nhật Bản. Tạo cảm gi&aacute;c nhẹ nh&agrave;ng v&agrave; mềm mại khi sử dụng.</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->Độ thấm vừa phải gi&uacute;p tiết kiệm hơn trong việc sử dụng toner hoặc nước tẩy trang.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><!--[if !supportLists]-->-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--[endif]-->K&iacute;ch thước miếng b&ocirc;ng ho&agrave;n hảo, vừa tay v&agrave; đặc biết t&uacute;i co d&acirc;y r&uacute;t c&oacute; thể k&eacute;o lại được v&igrave; vậy rất tiện dụng khi mang đi du lịch.</p>', 'được làm từ 100% Cotton nguyên chất từ thiên nhiên, không gây kích ứng cho da. Được thiết kế 3 lớp. Miếng bông mềm mị', 0, '[\"\\/imgs\\/12\\/0-1554777833.jpeg\",\"\\/imgs\\/12\\/1-1554777833.jpeg\",\"\\/imgs\\/12\\/2-1554777833.jpeg\",\"\\/imgs\\/12\\/3-1554777833.jpeg\",\"\\/imgs\\/12\\/4-1554777833.jpeg\"]', 8, NULL, NULL),
(14, '2019-04-21 03:17:23', '2019-04-21 03:17:23', 'Gel Phụ Khoa Vương Hậu', '/photos/1/IMG_376462.jpg', NULL, 'Dung dịch vệ sinh phụ nữ Vương Hậu là sản phẩm dùng để vệ sinh vùng kín hàng ngày,', 0, '[]', 8, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'web', '2019-02-21 20:31:34', '2019-02-23 17:40:53'),
(2, 'News', 'web', '2019-02-23 16:50:55', '2019-02-24 01:42:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(5, 1),
(6, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `so_dien`
--

CREATE TABLE `so_dien` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `motel_room_id` int(11) DEFAULT 0,
  `week` int(11) DEFAULT 0,
  `year` int(11) DEFAULT NULL,
  `so_dau` int(11) DEFAULT 0,
  `so_cuoi` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `so_dien`
--

INSERT INTO `so_dien` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `motel_room_id`, `week`, `year`, `so_dau`, `so_cuoi`) VALUES
(1, '', 0, 0, '2019-08-02 18:51:31', '2019-08-31 19:55:04', 15, 8, 2019, 2396, 2644),
(2, '', 0, 0, '2019-08-02 18:51:34', '2019-09-03 04:25:39', 2, 8, 2019, 3908, 4217),
(3, '', 0, 0, '2019-08-02 18:51:38', '2019-09-02 21:59:43', 3, 8, 2019, 2697, 2767),
(4, '', 0, 0, '2019-08-02 18:51:42', '2019-09-03 04:26:23', 4, 8, 2019, 3058, 3125),
(5, '', 0, 0, '2019-08-16 21:02:03', '2019-08-31 19:54:25', 5, 8, 2019, 4361, 4741),
(6, '', 0, 0, '2019-08-16 21:02:04', '2019-08-31 19:54:15', 7, 8, 2019, 2139, 2164),
(7, '', 0, 0, '2019-08-16 21:02:07', '2019-08-31 19:53:57', 6, 8, 2019, 3829, 4008),
(8, '', 0, 0, '2019-08-16 21:02:43', '2019-08-31 19:53:33', 8, 8, 2019, 3277, 3526),
(9, '', 0, 0, '2019-08-16 21:02:44', '2019-08-31 19:53:12', 9, 8, 2019, 2077, 2197),
(10, '', 0, 0, '2019-08-16 21:02:45', '2019-08-31 19:52:53', 10, 8, 2019, 4736, 4975),
(11, '', 0, 0, '2019-08-16 21:02:58', '2019-08-31 19:52:32', 11, 8, 2019, 3154, 3294),
(12, '', 0, 0, '2019-08-16 21:03:49', '2019-08-31 19:52:11', 12, 8, 2019, 3370, 3590),
(13, '', 0, 0, '2019-08-16 21:03:50', '2019-08-31 19:34:44', 13, 8, 2019, 2231, 2241),
(14, '', 0, 0, '2019-08-16 21:03:53', '2019-08-31 19:34:19', 14, 8, 2019, 3674, 3938);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status`
--

CREATE TABLE `status` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status_customer`
--

CREATE TABLE `status_customer` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `status_customer`
--

INSERT INTO `status_customer` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Đang thuê', 0, 0, '2019-08-01 21:20:09', '2019-08-01 21:20:09'),
(2, 'Đã trả phòng', 0, 0, '2019-08-01 21:20:22', '2019-08-01 21:20:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status_hop_dong`
--

CREATE TABLE `status_hop_dong` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `status_hop_dong`
--

INSERT INTO `status_hop_dong` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `color`) VALUES
(1, 'Đang hoạt động', 0, 0, '2019-08-01 19:22:14', '2019-08-01 19:22:14', NULL),
(2, 'Đã hết hạn', 0, 0, '2019-08-01 19:22:25', '2019-08-01 19:22:25', NULL),
(3, 'Huỷ hợp đồng', 0, 0, '2019-08-01 19:22:35', '2019-08-01 19:22:35', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status_investment`
--

CREATE TABLE `status_investment` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `status_investment`
--

INSERT INTO `status_investment` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Đã thanh toán', 0, 0, '2019-07-30 22:03:08', '2019-07-30 22:03:08'),
(2, 'Chưa thanh toán', 0, 0, '2019-07-30 22:03:59', '2019-07-30 22:03:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status_motel_room`
--

CREATE TABLE `status_motel_room` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `status_motel_room`
--

INSERT INTO `status_motel_room` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Phòng trống', 0, 0, '2019-07-30 22:09:24', '2019-07-30 22:09:24'),
(2, 'Đang cho thuê', 0, 0, '2019-07-30 22:09:38', '2019-07-30 22:09:38'),
(3, 'Đang bảo trì', 0, 0, '2019-07-30 22:09:55', '2019-07-30 22:09:55');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status_tien_phong`
--

CREATE TABLE `status_tien_phong` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `status_tien_phong`
--

INSERT INTO `status_tien_phong` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `color`) VALUES
(1, 'Đã thanh toán', 0, 0, '2019-08-09 04:38:19', '2019-08-19 20:18:44', '#0ad912'),
(2, 'Chưa thanh toán', 0, 0, '2019-08-09 04:38:28', '2019-08-19 20:18:54', '#fc0000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tables`
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
  `have_add_new` int(11) DEFAULT 0,
  `table_tab` int(11) DEFAULT 0,
  `table_tab_map_column` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_show_btn_edit` tinyint(2) DEFAULT 0,
  `is_edit_express` int(11) DEFAULT 0,
  `is_add_express` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tables`
--

INSERT INTO `tables` (`id`, `sort_order`, `name`, `display_name`, `is_edit`, `type_show`, `count_item_of_page`, `model_name`, `parent_id`, `form_data_type`, `created_at`, `updated_at`, `import`, `export`, `have_delete`, `have_add_new`, `table_tab`, `table_tab_map_column`, `is_show_btn_edit`, `is_edit_express`, `is_add_express`) VALUES
(12, 3, 'product', 'Quản lí sản phẩm', 1, 'BASIC', 30, 'Product', 26, 1, '2019-02-12', '2019-04-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(14, 5, 'news', 'Quản lí tin tức', 1, NULL, 30, NULL, 26, 1, '2019-03-19', '2019-04-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(16, 2, 'category', 'QL danh mục', 1, '1', 30, NULL, 26, 2, '2019-03-30', '2019-05-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(24, 8, '__route', 'route', 0, '1', 30, NULL, 26, 2, '2019-04-01', '2019-08-10', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(26, 14, 'tables', 'Category', 0, '1', 30, 'Tables', 0, 1, '2019-02-21', '2019-02-21', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(27, 7, 'configweb', 'Cấu hình website', 1, '5', 30, NULL, 26, 1, '2019-04-06', '2019-05-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(28, 6, 'contact', 'Thư gửi liên hệ', 1, NULL, 30, NULL, 26, 1, '2019-04-07', '2019-04-07', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(31, 2, 'block_item', 'block_item', 0, '1', 30, 'block_item', 34, 1, '2019-04-15', '2019-05-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(32, 1, 'block', 'block', 0, '1', 30, NULL, 34, 2, '2019-04-15', '2019-05-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(33, 4, 'landing_page_item', 'landing_page_item', 0, NULL, 30, 'landingpageItem', 26, 1, '2019-04-15', '2019-05-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(34, 9, 'landing_page', 'landingpage', 1, NULL, 30, 'landingpage', 26, 1, '2019-04-15', '2019-04-28', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(35, 13, 'users', 'Quản lý User', 1, NULL, 30, NULL, 0, 2, '2019-05-01', '2019-09-21', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(36, 1, 'footer', 'Nội dung phần chân website', 1, '1', 30, NULL, 26, 2, '2019-05-01', '2019-05-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(39, 6, 'motel_room', 'Phòng cho thuê', 1, '0', 100, NULL, 0, 2, '2019-07-30', '2019-07-31', 1, 1, 1, 1, NULL, NULL, 1, 0, 0),
(40, 5, 'apartment', 'Căn hộ', 1, '0', 30, NULL, 0, 1, '2019-07-31', '2019-07-31', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(41, 7, 'customer', 'Khách hàng', 1, NULL, 30, NULL, 0, 1, '2019-07-31', '2019-08-02', 1, 1, 1, 1, NULL, NULL, 1, 0, 0),
(42, 8, 'von_dau_tu', 'Vốn đầu tư', 1, '0', 30, NULL, 0, 1, '2019-07-31', '2019-09-13', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(43, 4, 'status_investment', 'Trạng thái Vốn đầu tư', 1, '1', 30, NULL, 45, 2, '2019-07-31', '2019-07-31', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(44, 5, 'status_motel_room', 'Trạng thái phòng trọ', 1, '1', 30, NULL, 45, 1, '2019-07-31', '2019-07-31', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(45, 11, 'status', 'Trạng thái', 1, '1', 30, NULL, 0, 1, '2019-08-02', '2019-08-02', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(46, 3, 'status_customer', 'Trạng thái khách hàng', 1, '1', 30, NULL, 45, 1, '2019-08-02', '2019-08-02', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(47, 1, 'tien_phong', 'Tiền phòng', 1, '0', 30, NULL, 0, 1, '2019-08-02', '2019-09-06', 1, 1, 1, 1, NULL, NULL, 1, 1, 1),
(48, 9, 'so_dien', 'Số điện', 1, NULL, 30, NULL, 0, 1, '2019-08-02', '2019-10-12', 0, 0, 1, 1, NULL, NULL, 1, 0, 1),
(49, 4, 'hop_dong', 'Hợp đồng', 1, '0', 30, NULL, 0, 1, '2019-08-02', '2019-08-11', 0, 0, 1, 1, NULL, NULL, 1, 0, 1),
(50, 2, 'status_hop_dong', 'Trạng thái hợp đồng', 1, '1', 30, NULL, 45, 1, '2019-08-02', '2019-08-02', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(51, 1, 'status_tien_phong', 'Trạng thái tiền phòng', 1, '1', 30, NULL, 45, 1, '2019-08-09', '2019-08-09', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(54, 10, 'van_tay', 'Vân tay', 1, '0', 30, NULL, 0, 1, '2019-08-17', '2019-09-09', 0, 0, 1, 1, NULL, NULL, 1, 1, 1),
(55, 2, 'khoan_thu_khac', 'Khoản thu khác', 1, NULL, 30, NULL, 0, 1, '2019-08-20', '2019-09-13', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(56, 3, 'tien_chi_tieu', 'Tiền chi tiêu', 1, NULL, 30, NULL, 0, 1, '2019-08-20', '2019-09-13', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(57, 12, 'admin_config', 'admin_config', 1, '5', 30, NULL, 0, 1, '2019-09-01', '2019-09-01', 0, 0, 0, 1, NULL, NULL, 1, 0, 0),
(58, 0, 'thong_ke', 'Thống kê', 1, '0', 30, NULL, 0, 1, '2019-09-01', '2019-09-13', 0, 0, 1, 0, NULL, NULL, 0, 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_column`
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
  `class` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `column_table_link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sub_list` tinyint(2) DEFAULT 0,
  `sub_column_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `config_add_sub_table` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bg_in_list` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `add_column_in_list` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `column_name_map_to_comment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_show_total` tinyint(2) DEFAULT 0,
  `is_show_btn_auto_get_total` tinyint(3) DEFAULT NULL,
  `is_view_detail` tinyint(2) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_column`
--

INSERT INTO `table_column` (`id`, `table_id`, `display_name`, `name`, `type`, `value_default`, `is_null`, `max_length`, `edit`, `type_show`, `add2search`, `search_type`, `type_edit`, `show_in_list`, `require`, `sort_order`, `parent_id`, `created_at`, `updated_at`, `select_table_id`, `conditions`, `fast_edit`, `table_link`, `class`, `column_table_link`, `sub_list`, `sub_column_name`, `config_add_sub_table`, `bg_in_list`, `add_column_in_list`, `column_name_map_to_comment`, `is_show_total`, `is_show_btn_auto_get_total`, `is_view_detail`) VALUES
(4, 9, 'name', 'name', 'VARCHAR', '100', 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-02-11', '2019-02-18', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(7, 9, 'Image', 'image', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(8, 13, 'Name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(9, 13, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 13, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(10, 12, 'Tên Sản Phẩm', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-18', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(11, 12, 'Hình ảnh đại diên', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 3, 0, '2019-03-18', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(12, 12, 'Nội dung', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 5, 0, '2019-03-18', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(13, 12, 'Nội dung tóm tắt', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 6, 0, '2019-03-18', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(14, 14, 'title', 'title', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-19', '2019-03-19', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(15, 14, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 3, 0, '2019-03-19', '2019-03-19', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(16, 14, 'content', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 4, 0, '2019-03-19', '2019-03-19', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(18, 14, 'summary', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 1, 5, 0, '2019-03-19', '2019-03-27', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(19, 12, 'sort_order', 'sort_order', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 9, 0, '2019-03-19', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(20, 14, 'sort_order', 'sort_order', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 8, 0, '2019-03-20', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(21, 15, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(22, 15, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(24, 15, 'sort_order', 'sort_order', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(25, 16, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(26, 16, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 3, 0, '2019-03-30', '2019-04-29', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(27, 17, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(28, 17, 'describe', 'describe', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 3, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(29, 17, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 2, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(30, 17, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 4, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(31, 17, 'content', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(32, 18, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(33, 18, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 2, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(34, 19, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(36, 20, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(37, 20, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 1, 0, 3, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(38, 20, 'summary', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 4, 0, '2019-03-31', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(40, 21, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 2, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(41, 21, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 3, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(42, 21, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 1, 4, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(44, 21, 'content', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(45, 22, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(46, 22, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 2, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(47, 23, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(48, 23, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 2, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(49, 16, 'Chọn kiểu hiển thị', 'route_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 1, 2, 0, '2019-04-01', '2019-04-07', 24, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(50, 24, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(51, 24, 'route_name', 'route_name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(52, 25, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(53, 25, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(54, 25, 'content', 'content', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(55, 25, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(58, 20, 'Link xem thêm', 'link', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-04-06', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(59, 21, 'link', 'link', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 1, 1, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(60, 27, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(61, 27, 'address', 'address', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(62, 27, 'email', 'email', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(63, 27, 'logo', 'logo', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(67, 27, 'facebook', 'facebook', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(68, 27, 'youtube', 'youtube', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(69, 27, 'instagram', 'instagram', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(70, 27, 'phone', 'phone', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-04-06', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(72, 28, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-07', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(73, 28, 'phone', 'phone', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-07', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(74, 28, 'email', 'email', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-04-07', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(75, 28, 'address', 'address', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-07', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(76, 12, 'Hình ảnh SP', 'images', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'images', 0, 0, 4, 0, '2019-04-07', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(80, 12, 'chọn danh mục', 'category_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-07', '2019-05-04', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(81, 14, 'chọn danh mục', 'category_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-07', '2019-05-04', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(82, 29, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(83, 29, 'pdf', 'pdf', 'TEXT', NULL, 1, 255, 1, NULL, 0, 1, 'pdf', 0, 0, 3, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(84, 29, 'image', 'image', 'TEXT', NULL, 1, 255, 1, NULL, 0, 1, 'image_laravel', 0, 0, 4, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(85, 29, 'summary', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(86, 20, 'video', 'video', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'video', 0, 0, 0, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(87, 29, 'Chọn danh mục', 'category_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-08', '2019-04-08', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(88, 19, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 0, NULL, 1, 1, 'select', 0, 0, 0, 0, '2019-04-11', '2019-04-11', 19, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(89, 31, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(90, 31, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(91, 31, 'input_type', 'input_type', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'input', 0, 0, 3, 0, '2019-04-15', '2019-04-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(92, 31, 'block_type_id', 'block_type_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'select', 0, 0, 4, 0, '2019-04-15', '2019-04-15', 32, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(93, 32, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(94, 32, 'parent_id', 'parent_id', 'INT', NULL, 1, 255, 0, NULL, 0, 1, 'number', 0, 0, 3, 0, '2019-04-15', '2019-04-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(95, 32, 'image', 'image', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 2, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(96, 33, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(97, 33, 'parent_id', 'parent_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(98, 33, 'landing_page_id', 'landing_page_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-15', '2019-04-28', 34, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(100, 33, 'data', 'data', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 3, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(101, 34, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(102, 34, 'parent_id', 'parent_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(103, 34, 'image', 'image', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 0, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(104, 34, 'category_id', 'category_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'select', 0, 0, 0, 0, '2019-04-15', '2019-04-15', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(105, 34, 'blocks', 'blocks', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'block', 0, 0, 0, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(106, 35, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(107, 35, 'Mật khẩu (Bỏ trống nếu bạn không muốn thay đổi))', 'password', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'encryption', 0, 0, 4, 0, '2019-04-15', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(108, 35, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(109, 35, 'remember_token', 'remember_token', 'VARCHAR', NULL, 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-04-15', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(110, 35, 'Tên đăng nhập', 'username', 'VARCHAR', '', 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 3, 0, '2019-04-21', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(111, 35, 'Email', 'email', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 5, 0, '2019-04-21', '2019-04-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(112, 35, 'user_type', 'user_type', 'VARCHAR', '0', 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-04-21', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(122, 33, 'block_id', 'block_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-04-28', '2019-04-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(124, 31, 'input_name', 'input_name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-04-28', '2019-04-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(125, 16, 'Thứ tự sắp sếp', 'sort_order', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-04-29', '2019-04-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(126, 24, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'select', 0, 0, 0, 0, '2019-04-29', '2019-04-29', 24, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(127, 24, 'sort_order', 'sort_order', 'INT', NULL, 1, NULL, 0, NULL, 1, 1, 'number', 1, 0, 0, 0, '2019-04-29', '2019-04-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(132, 36, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(133, 36, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(134, 36, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(135, 36, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(136, 36, 'Liên kết (VD: http://abc.com/...)', 'link', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 3, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(137, 37, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(138, 37, 'NVKD', 'nvkd_id', 'INT', NULL, 1, 255, 1, NULL, 0, 1, 'select', 1, 0, 4, 0, '2019-05-04', '2019-05-25', 35, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(139, 37, 'Ngày gửi', 'ngay_gui', 'DATE', '0', 1, NULL, 1, NULL, 0, 1, 'date', 1, 0, 7, 0, '2019-05-04', '2019-05-25', 0, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(140, 37, 'Ngày về', 'ngay_ve', 'DATE', '0', 1, NULL, 1, NULL, 0, 1, 'date', 1, 0, 8, 0, '2019-05-04', '2019-05-25', 0, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(141, 16, '[SEO] Từ khóa', 'seo_keyword', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 0, 0, 4, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(142, 16, '[SEO] Mô tả', 'seo_description', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(143, 12, '[SEO] Từ khóa', 'seo_keyword', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 7, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(144, 12, '[SEO] Mô tả', 'seo_description', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 8, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(145, 14, '[SEO] Từ khóa', 'seo_keyword', 'TEXT', NULL, 1, NULL, 1, NULL, 1, 1, 'textarea', 1, 0, 6, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(146, 14, '[SEO] Mô tả', 'seo_description', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 7, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(147, 37, 'Tổng SK', 'total_sk', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 2, 0, '2019-05-04', '2019-05-25', 0, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(148, 37, 'Mã SP', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 3, 0, '2019-05-04', '2019-05-26', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(150, 37, 'Hàng hoá', 'hang_ve_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 5, 0, '2019-05-04', '2019-05-26', 0, NULL, 1, 38, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(151, 37, 'Nhân viên mua hàng', 'nvmh_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 6, 0, '2019-05-25', '2019-05-25', 35, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(152, 38, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(153, 38, 'Tên hàng', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-05-25', '2019-05-26', 0, NULL, 0, NULL, 'width02', NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(154, 38, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(155, 38, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(156, 38, 'Số kiện', 'so_kien', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-05-25', '2019-05-26', 0, NULL, 1, NULL, 'width01', NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(157, 38, 'Đóng gói', 'so_luong_dong_goi', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 4, 0, '2019-05-25', '2019-05-26', 0, NULL, 1, NULL, 'width01', NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(158, 38, 'Số lượng', 'so_luong', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 5, 0, '2019-05-25', '2019-05-26', 0, NULL, 1, NULL, 'width01', NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(159, 38, 'Hàng về', 'hang_ve_id', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'select', 0, 0, 0, 0, '2019-05-26', '2019-05-26', 37, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(160, 37, 'sort_order', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'number', 0, 0, 0, 0, '2019-05-26', '2019-05-26', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(161, 39, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-07-30', '2019-07-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(162, 39, 'Số phòng', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-07-30', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(163, 39, 'parent_id', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'select', 0, 0, 9, 0, '2019-07-30', '2019-07-31', 39, '{ \"parent_id\":\"0\"}', 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(164, 39, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 10, 0, '2019-07-30', '2019-07-30', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(166, 40, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(167, 40, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-07-31', '2019-07-31', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(168, 40, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(169, 40, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(170, 40, 'Địa chỉ', 'address', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 4, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(171, 40, 'Giá nhượng lại', 'gia_nhuong', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-07-31', '2019-07-31', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(173, 40, 'Note', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 5, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(174, 39, 'Căn hộ', 'apartment_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 3, 0, '2019-07-31', '2019-07-31', 40, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(175, 41, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(176, 41, 'Họ tên', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-07-31', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(177, 41, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 12, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(178, 41, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 13, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(179, 41, 'CMTND', 'cmtnd', 'VARCHAR', '0', 1, 255, 1, NULL, 0, 1, 'number', 0, 0, 8, 0, '2019-07-31', '2019-08-02', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(180, 41, 'Ngày cấp', 'ngay_cap', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'date', 0, 0, 7, 0, '2019-07-31', '2019-08-02', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(181, 41, 'Nơi cấp', 'noi_cap', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 9, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(182, 41, 'Địa chỉ', 'address', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 10, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(184, 41, 'Điện thoại', 'mobile', 'VARCHAR', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 6, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(185, 41, 'Email', 'email', 'TEXT', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 5, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(186, 42, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(187, 42, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-07-31', '2019-07-31', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(188, 42, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(189, 42, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(190, 42, 'TienLQ', 'tienlq', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-07-31', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL, 0),
(191, 42, 'AnhHT', 'anhht', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 4, 0, '2019-07-31', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL, 0),
(192, 42, 'Note', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 5, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(193, 43, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(194, 43, 'Tên trạng thái', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(195, 43, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(196, 43, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(197, 42, 'Trạng thái', 'status_investment_id', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 0, 0, '2019-07-31', '2019-08-17', 43, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(198, 44, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(199, 44, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(200, 44, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(201, 44, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(202, 39, 'Trạng thái', 'status_motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 6, 0, '2019-07-31', '2019-07-31', 44, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(204, 39, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 11, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(205, 45, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(206, 45, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(207, 45, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(208, 45, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(209, 46, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(210, 46, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(211, 46, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(212, 46, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(213, 41, 'Trạng thái', 'status_customer_id', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 4, 0, '2019-08-02', '2019-08-02', 46, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(214, 41, 'Phòng', 'motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 3, 0, '2019-08-02', '2019-08-02', 39, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(215, 47, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(216, 47, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 3, 0, '2019-08-02', '2019-09-14', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 1),
(217, 47, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 16, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(218, 47, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 17, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(219, 47, 'Phòng', 'motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 8, 0, '2019-08-02', '2019-09-03', 39, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(220, 48, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(221, 48, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-08-02', '2019-08-17', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(222, 48, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 8, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(223, 48, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 9, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(227, 49, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(228, 49, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-02', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(229, 49, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 12, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(230, 49, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 13, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(231, 49, 'Phòng', 'motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 6, 0, '2019-08-02', '2019-08-02', 39, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(232, 49, 'Giá thuê', 'gia_thue', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 7, 0, '2019-08-02', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL, 0),
(233, 49, 'Khách hàng', 'customer_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 3, 0, '2019-08-02', '2019-08-02', 41, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(236, 49, 'Ngày bắt đầu', 'start_date', 'DATE', NULL, 1, NULL, 1, NULL, 1, 1, 'date', 1, 0, 9, 0, '2019-08-02', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(237, 49, 'Ngày kết thúc', 'end_date', 'DATE', NULL, 1, NULL, 1, NULL, 1, 1, 'date', 1, 0, 10, 0, '2019-08-02', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(240, 50, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(241, 50, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(242, 50, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(243, 50, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(244, 49, 'Tiền đặt cọc', 'tien_dat_coc', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 8, 0, '2019-08-02', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL, 0),
(245, 48, 'Phòng', 'motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 3, 0, '2019-08-03', '2019-08-03', 39, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(246, 49, 'Số Người', 'so_nguoi', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 5, 0, '2019-08-03', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(247, 49, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 11, 0, '2019-08-03', '2019-08-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(248, 41, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 11, 0, '2019-08-03', '2019-08-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(249, 47, 'Tiền Điện', 'tien_dien', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 4, 0, '2019-08-09', '2019-09-06', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(250, 47, 'Tiền Nước', 'tien_nuoc', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 11, 0, '2019-08-09', '2019-09-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(251, 47, 'Tiền Phòng', 'tien_phong', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 6, 0, '2019-08-09', '2019-09-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(252, 47, 'Tiền vệ sinh', 'tien_wc', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 12, 0, '2019-08-09', '2019-09-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(253, 47, 'Tiền mạng', 'tien_mang', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 13, 0, '2019-08-09', '2019-09-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(254, 47, 'Tiền chiếu sáng', 'tien_chieu_sang', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 14, 0, '2019-08-09', '2019-09-04', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(255, 47, 'Tổng', 'total', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 7, 0, '2019-08-09', '2019-09-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL, 0),
(256, 51, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-09', '2019-08-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(257, 51, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-09', '2019-08-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(258, 51, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-08-09', '2019-08-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(259, 51, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-09', '2019-08-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(260, 47, 'Trạng thái', 'status_tien_phong_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 9, 0, '2019-08-09', '2019-08-20', 51, NULL, 1, NULL, 'color-white', NULL, 0, NULL, NULL, '1', NULL, NULL, 0, NULL, 0),
(261, 47, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 1, 0, 15, 0, '2019-08-10', '2019-09-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(262, 52, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(263, 52, 'Tiêu đề', 'name', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'number', 1, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(264, 52, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(265, 52, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(266, 53, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(267, 53, 'Năm', 'name', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'number', 1, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(268, 53, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(269, 53, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(270, 48, 'Tháng', 'week', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 2, 0, '2019-08-17', '2019-08-17', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(271, 48, 'Năm', 'year', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 6, 0, '2019-08-17', '2019-08-17', 53, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(272, 48, 'Số đầu', 'so_dau', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 4, 0, '2019-08-17', '2019-08-17', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(273, 48, 'Số cuối', 'so_cuoi', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 5, 0, '2019-08-17', '2019-08-17', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(274, 54, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(275, 54, 'Tên', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 2, 0, '2019-08-17', '2019-09-09', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(276, 54, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(277, 54, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(278, 54, 'ID', 'van_tay_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 3, 0, '2019-08-17', '2019-09-09', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(279, 55, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(280, 55, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(281, 55, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(282, 55, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(283, 55, 'Tiền thu về', 'money', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-08-20', '2019-08-20', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL, 0),
(284, 56, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(285, 56, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(286, 56, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(287, 56, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(288, 56, 'Tiền chi ra', 'money', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-08-20', '2019-08-20', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL, 0),
(289, 51, 'color', 'color', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'color', 0, 0, 3, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(290, 50, 'color', 'color', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'color', 0, 0, 0, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(293, 56, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 4, 0, '2019-08-22', '2019-08-22', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(294, 57, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(295, 57, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(296, 57, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(297, 57, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(298, 57, 'banner', 'banner', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 3, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(299, 58, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(300, 58, 'Tiêu đề', 'name', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-09-01', '2019-09-14', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 1),
(301, 58, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 9, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(302, 58, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 10, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(303, 58, 'Tổng chi', 'tong_chi', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 5, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(304, 58, 'Khoản thu khác', 'tong_thu', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 6, 0, '2019-09-01', '2019-09-13', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(305, 58, 'Tổng doanh thu tạm tính', 'total', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 7, 0, '2019-09-01', '2019-09-13', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0);
INSERT INTO `table_column` (`id`, `table_id`, `display_name`, `name`, `type`, `value_default`, `is_null`, `max_length`, `edit`, `type_show`, `add2search`, `search_type`, `type_edit`, `show_in_list`, `require`, `sort_order`, `parent_id`, `created_at`, `updated_at`, `select_table_id`, `conditions`, `fast_edit`, `table_link`, `class`, `column_table_link`, `sub_list`, `sub_column_name`, `config_add_sub_table`, `bg_in_list`, `add_column_in_list`, `column_name_map_to_comment`, `is_show_total`, `is_show_btn_auto_get_total`, `is_view_detail`) VALUES
(306, 47, 'Tháng', 'week', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 1, 0, '2019-09-01', '2019-09-06', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(307, 47, 'Năm', 'year', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(308, 49, 'Trạng thái', 'status_hop_dong_id', 'INT', '0', 1, 12, 1, NULL, 1, 1, 'select', 1, 0, 4, 0, '2019-09-02', '2019-09-02', 50, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(309, 47, 'Chi phí khác', 'other', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 10, 0, '2019-09-03', '2019-09-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', '{\r\n  \"0\":\"tien_nuoc\",\r\n  \"1\":\"tien_wc\",\r\n  \"2\":\"tien_mang\",\r\n  \"3\":\"tien_chieu_sang\"\r\n}', NULL, 0, NULL, 0),
(310, 58, 'Tiền phòng đã thu', 'tien_phong_da_thu', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-09-13', '2019-09-13', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(311, 58, 'Tiền phòng chưa thu', 'tien_phong_chua_thu', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 4, 0, '2019-09-13', '2019-09-13', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0),
(312, 58, 'Tổng vốn đầu tư', 'tong_von_dau_tu', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 8, 0, '2019-09-13', '2019-09-13', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thong_ke`
--

CREATE TABLE `thong_ke` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tong_chi` int(11) DEFAULT NULL,
  `tong_thu` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `tien_phong_da_thu` int(11) DEFAULT 0,
  `tien_phong_chua_thu` int(11) DEFAULT 0,
  `tong_von_dau_tu` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thong_ke`
--

INSERT INTO `thong_ke` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `tong_chi`, `tong_thu`, `total`, `tien_phong_da_thu`, `tien_phong_chua_thu`, `tong_von_dau_tu`) VALUES
(5, 'Thống kê dữ liệu ngày 13/09/2019 07:12:04', 0, 0, '2019-09-13 00:12:04', '2019-09-13 00:12:04', 109081418, 240000000, 244982582, 92456000, 21608000, 297125000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tien_chi_tieu`
--

CREATE TABLE `tien_chi_tieu` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `money` int(11) DEFAULT 0,
  `note` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tien_chi_tieu`
--

INSERT INTO `tien_chi_tieu` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `money`, `note`) VALUES
(1, '[174] Tiền điện tháng 8 nhà 274 (3F)', 0, 0, '2019-08-20 22:49:17', '2019-08-22 01:40:59', 1620000, NULL),
(2, '[174] Trả tiền coc phòng 403 (21/8/19)', 0, 0, '2019-08-22 01:28:34', '2019-08-22 02:38:09', 3052000, 'Cọc: -3.500.000\r\nĐiện: 58 số: 128.000\r\nNước: 200.000\r\nMạng: 100.000\r\nWC: 60.000\r\nChiếu sáng: 60.000'),
(3, '[174] Tiền điện tháng 8', 0, 0, '2019-08-22 01:38:12', '2019-08-22 01:40:40', 6823786, NULL),
(4, '[174] Thanh toán tiền internet tháng 8', 0, 0, '2019-08-22 01:40:23', '2019-08-22 01:40:23', 407000, NULL),
(5, '[174] Thanh toán tiền nước tháng 8', 0, 0, '2019-08-22 01:42:07', '2019-08-22 01:42:07', 2147604, NULL),
(6, 'Hỗ trợ Sơn', 0, 0, '2019-08-31 19:23:53', '2019-08-31 19:23:53', 50000000, NULL),
(7, 'Trả lại tiền cho Sơn', 0, 0, '2019-09-12 23:56:42', '2019-09-12 23:56:42', 30000000, 'trả lại 21tr + hỗ trợ thêm 9tr'),
(8, 'Thanh toán tiền điện 3F (174)', 0, 0, '2019-09-13 00:00:01', '2019-09-13 00:00:01', 6298372, NULL),
(9, 'Thanh toán tiền điện 1F (174)', 0, 0, '2019-09-13 00:00:44', '2019-09-13 00:00:44', 1914295, NULL),
(10, 'Thanh toán tiền nước tháng 9 (174)', 0, 0, '2019-09-13 00:01:11', '2019-09-13 00:01:11', 2198361, NULL),
(11, 'Tiền WC tháng 9', 0, 0, '2019-09-13 00:01:42', '2019-09-13 00:01:42', 300000, NULL),
(12, 'Tiền mạng internet 6 tháng (174)', 0, 0, '2019-09-13 00:03:34', '2019-09-13 00:03:34', 3000000, NULL),
(13, 'mua hai bộ vòi hoa sen cho phòng 102 và 203', 0, 0, '2019-09-13 00:07:10', '2019-09-13 00:07:10', 1200000, NULL),
(14, 'Đánh chìa khóa cho phòng 201 (3)', 0, 0, '2019-09-13 00:09:15', '2019-09-13 00:09:15', 60000, NULL),
(15, 'Đánh chìa khóa cho phòng 402 (3)', 0, 0, '2019-09-13 00:09:37', '2019-09-13 00:09:37', 60000, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tien_phong`
--

CREATE TABLE `tien_phong` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `motel_room_id` int(11) DEFAULT 0,
  `start_date` date DEFAULT NULL,
  `tien_dien` int(11) DEFAULT 0,
  `tien_nuoc` int(11) DEFAULT 0,
  `tien_phong` int(11) DEFAULT 0,
  `tien_wc` int(11) DEFAULT NULL,
  `tien_mang` int(11) DEFAULT 0,
  `tien_chieu_sang` int(11) DEFAULT 0,
  `total` int(11) DEFAULT NULL,
  `status_tien_phong_id` int(11) DEFAULT NULL,
  `note` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `week` int(11) DEFAULT 0,
  `year` int(11) DEFAULT 0,
  `other` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tien_phong`
--

INSERT INTO `tien_phong` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `motel_room_id`, `start_date`, `tien_dien`, `tien_nuoc`, `tien_phong`, `tien_wc`, `tien_mang`, `tien_chieu_sang`, `total`, `status_tien_phong_id`, `note`, `week`, `year`, `other`) VALUES
(1, 'Tháng 8 phòng 101/172', 0, 0, '2019-08-02 04:29:10', '2019-08-19 20:25:24', 13, NULL, 0, 50000, 1750000, 15000, 15000, 15000, 1850000, 1, 'tinh tien nửa tháng do hđ cũ ký từ ngày 15', 8, 2019, NULL),
(2, NULL, 0, 0, '2019-08-09 04:29:22', '2019-08-15 03:59:34', 12, NULL, 0, 0, 0, 0, 0, 0, 6400000, 1, NULL, 8, 2019, NULL),
(3, NULL, 0, 0, '2019-08-09 04:29:22', '2019-08-10 05:04:10', 11, NULL, 332000, 200000, 3000000, 60000, 100000, 60000, 3680000, 1, '3752000 - 7200 (thang  truoc) = 3680000', 8, 2019, NULL),
(4, NULL, 0, 0, '2019-08-09 04:29:25', '2019-08-09 04:58:08', 10, NULL, 996000, 300000, 3500000, 90000, 100000, 90000, 5656000, 1, NULL, 8, 2019, NULL),
(5, NULL, 0, 0, '2019-08-09 04:29:28', '2019-08-09 04:54:49', 9, NULL, 68000, 200000, 3000000, 60000, 100000, 60000, 3948000, 1, NULL, 8, 2019, NULL),
(6, NULL, 0, 0, '2019-08-09 04:29:29', '2019-08-19 20:25:19', 8, NULL, 0, 0, 0, 0, 0, 0, 4212000, 1, NULL, 8, 2019, NULL),
(7, NULL, 0, 0, '2019-08-09 04:29:29', '2019-08-09 04:54:55', 6, NULL, 0, 0, 0, 0, 0, 0, 1628000, 1, NULL, 8, 2019, NULL),
(8, NULL, 0, 0, '2019-08-09 04:29:30', '2019-08-09 04:55:02', 7, NULL, 0, 0, 0, 0, 0, 0, 2240000, 1, NULL, 8, 2019, NULL),
(9, NULL, 0, 0, '2019-08-09 04:29:31', '2019-08-09 04:55:07', 5, NULL, 500000, 300000, 3000000, 90000, 100000, 90000, 4230000, 1, NULL, 8, 2019, NULL),
(10, NULL, 0, 0, '2019-08-09 04:29:32', '2019-08-10 05:09:25', 4, NULL, 256000, 200000, 3300000, 60000, 100000, 60000, 3970000, 1, NULL, 8, 2019, NULL),
(11, NULL, 0, 0, '2019-08-09 04:29:36', '2019-08-10 05:07:00', 14, NULL, 1436000, 100000, 3000000, 30000, 100000, 30000, 4690000, 1, NULL, 8, 2019, NULL),
(12, NULL, 0, 0, '2019-08-09 04:29:37', '2019-08-09 04:43:25', 3, NULL, 0, 0, 0, 0, 0, 0, 4120000, 1, NULL, 8, 2019, NULL),
(13, NULL, 0, 0, '2019-08-09 04:29:38', '2019-08-19 20:25:10', 2, NULL, 100000, 100000, 3000000, 30000, 100000, 30000, 3410000, 1, NULL, 8, 2019, NULL),
(14, '001/174', 0, 0, '2019-08-16 19:19:42', '2019-08-16 19:20:51', 15, NULL, 0, 0, 0, 0, 0, 0, 5250000, 1, 'tiền cọc: 5.250.000\r\nTiền nhà tháng 8: 1.750.000', 8, 2019, NULL),
(155, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-09 03:56:07', 14, NULL, 1056000, 200000, 3000000, 60000, 100000, 60000, 4476000, 1, 'Số điện đầu: 3674, Số điện cuối: 3938, Tổng số điện xử dụng là: 264 Số', 9, 2019, NULL),
(156, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-02 22:00:32', 13, NULL, 40000, 200000, 3500000, 60000, 100000, 60000, 3960000, 2, 'Số điện đầu: 2231, Số điện cuối: 2241, Tổng số điện xử dụng là: 10 Số', 9, 2019, NULL),
(157, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-03 19:01:28', 12, NULL, 880000, 100000, 3200000, 30000, 100000, 30000, 4340000, 1, 'Số điện đầu: 3370, Số điện cuối: 3590, Tổng số điện xử dụng là: 220 Số', 9, 2019, NULL),
(158, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-03 19:05:27', 11, NULL, 560000, 200000, 3000000, 60000, 100000, 60000, 3980000, 1, 'Số điện đầu: 3154, Số điện cuối: 3294, Tổng số điện xử dụng là: 140 Số', 9, 2019, NULL),
(159, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-02 22:00:32', 10, NULL, 956000, 300000, 3500000, 90000, 100000, 90000, 5036000, 2, 'Số điện đầu: 4736, Số điện cuối: 4975, Tổng số điện xử dụng là: 239 Số', 9, 2019, NULL),
(160, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-03 18:56:47', 9, NULL, 480000, 200000, 3000000, 60000, 100000, 60000, 3900000, 1, 'Số điện đầu: 2077, Số điện cuối: 2197, Tổng số điện xử dụng là: 120 Số', 9, 2019, NULL),
(161, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-02 22:00:32', 8, NULL, 996000, 100000, 3000000, 30000, 100000, 30000, 4256000, 2, 'Số điện đầu: 3277, Số điện cuối: 3526, Tổng số điện xử dụng là: 249 Số', 9, 2019, NULL),
(162, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-05 19:16:05', 6, NULL, 716000, 200000, 3000000, 60000, 100000, 60000, 4136000, 1, 'Số điện đầu: 3829, Số điện cuối: 4008, Tổng số điện xử dụng là: 179 Số', 9, 2019, NULL),
(163, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-02 22:05:06', 7, NULL, 100000, 100000, 3200000, 30000, 100000, 30000, 3560000, 1, 'Số điện đầu: 2139, Số điện cuối: 2164, Tổng số điện xử dụng là: 25 Số', 9, 2019, NULL),
(164, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-12 23:02:26', 5, NULL, 300000, 300000, 3000000, 90000, 100000, 90000, 3880000, 1, 'Số điện đầu: 4361, Số điện cuối: 4741, Tổng số điện xử dụng là: 380 Số.\r\nDo lỗi công tơ nên chỉ tính tiền điện là 300.000', 9, 2019, NULL),
(165, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-02 22:04:48', 4, NULL, 268000, 200000, 3300000, 60000, 100000, 60000, 3988000, 1, 'Số điện đầu: 3058, Số điện cuối: 3125, Tổng số điện xử dụng là: 67 Số', 9, 2019, NULL),
(166, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-13 23:19:04', '2019-09-13 23:19:04', 3, NULL, 1056000, 200000, 3000000, 60000, 100000, 60000, 4476000, 2, 'Số điện đầu: 3674, Số điện cuối: 3938, Tổng số điện xử dụng là: 264 Số', 9, 2019, NULL),
(167, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-13 23:24:35', '2019-09-13 23:24:35', 2, NULL, 1236000, 400000, 3000000, 120000, 100000, 120000, 4976000, 2, 'Số điện đầu: 3908, Số điện cuối: 4217, Tổng số điện xử dụng là: 309 Số', 9, 2019, NULL),
(168, 'Tiền dịch vụ tháng 8 và tiền phòng tháng 9', 0, 0, '2019-09-02 22:00:32', '2019-09-05 19:13:54', 15, NULL, 992000, 200000, 3500000, 60000, 100000, 60000, 4912000, 1, 'Số điện đầu: 2396, Số điện cuối: 2644, Tổng số điện xử dụng là: 248 Số', 9, 2019, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `sort_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`, `username`, `user_type`, `sort_order`) VALUES
(1, 'tienlq', 'quangtienvkt@gmail.com', '$2y$10$qDSM1xhz.Tk7dgDP1vvIpO7oDFWK7tyqndVivchYpBEHoK62YyvCu', 'Xt09K20K7zUREE9GR84Rx5OzqxHNmzVBi8HqAOj6c1RVNeeXdX0fT6jhOl7W', '2019-01-30 02:49:15', '2019-01-30 02:49:15', 'tienlq', '1', 0),
(5, 'AnhHT', 'anhht@gmail.com', '$2y$10$7qyJAzC1hEZJP11TFH5GVujI2OvNU/KHyc9X7DBR9Xqf6/F3JOCHO', 'W8tYRAZC3RFQQISt18RRMfLguWvD1Bmn4AYnTRHazFU0I19DUFxjNPzSutf2', '2019-01-30 02:49:15', '2019-08-19 21:18:20', 'anhht', '1', 0),
(6, 'thuongn', 'quangtienvkt@gmail.com', '$2y$10$n/g74160FsOE8DiEter4m.f2Zer4sICG0.uJzwMnS7HTT2uidTXAe', 'CRiHKB9yEnYcmaQiiGhhhAFfaHRbkl0ASJX5mVPixOlVWWIhqvjdnp2LVg5u', '2019-09-20 19:36:48', '2019-09-20 19:36:48', 'thuongn', '1', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `van_tay`
--

CREATE TABLE `van_tay` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `van_tay_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `van_tay`
--

INSERT INTO `van_tay` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `van_tay_id`) VALUES
(1, 'Thảo 402/174', 0, 0, '2019-08-16 21:58:51', '2019-08-31 19:30:32', '0130'),
(2, 'Quynh 102', 0, 0, '2019-09-08 19:06:40', '2019-09-08 19:10:18', '1031'),
(3, 'Phương 103', 0, 0, '2019-09-08 19:07:13', '2019-09-08 19:10:01', '1030'),
(4, 'Phương 103', 0, 0, '2019-09-08 19:07:14', '2019-09-08 19:09:45', '1023'),
(5, 'Trâm 201', 0, 0, '2019-09-08 19:07:15', '2019-09-08 19:09:19', '2021'),
(6, 'Huệ 201', 0, 0, '2019-09-08 19:07:16', '2019-09-08 19:09:01', '1020'),
(7, 'Hạ 302', 0, 0, '2019-09-08 19:07:16', '2019-09-08 19:08:28', '1012'),
(8, 'Hà -302', 0, 0, '2019-09-08 19:07:17', '2019-09-08 19:08:18', '1011'),
(9, 'Dung 201', 0, 0, '2019-09-08 19:10:43', '2019-09-08 19:10:43', '1102'),
(10, 'Dung 201', 0, 0, '2019-09-08 19:10:56', '2019-09-08 19:10:56', '1103'),
(11, 'Mai 103', 0, 0, '2019-09-08 19:11:10', '2019-09-08 19:11:21', '1110'),
(12, 'Mai 103', 0, 0, '2019-09-08 19:11:39', '2019-09-08 19:11:39', '1111'),
(13, 'Nam - 303', 0, 0, '2019-09-08 19:12:05', '2019-09-08 19:12:05', '1112'),
(14, 'Nam - 303', 0, 0, '2019-09-08 19:12:49', '2019-09-08 19:12:49', '1120'),
(15, 'Nam - 303n', 0, 0, '2019-09-08 19:13:52', '2019-09-08 19:13:52', '1121'),
(16, 'Tiến 303', 0, 0, '2019-09-08 19:14:22', '2019-09-08 19:14:22', '1122'),
(17, 'Phương 401', 0, 0, '2019-09-08 19:14:45', '2019-09-08 19:14:45', '1123'),
(18, 'Thảo 402', 0, 0, '2019-09-08 19:15:01', '2019-09-08 19:15:01', '1130'),
(19, NULL, 0, 0, '2019-09-08 19:15:28', '2019-09-08 19:15:28', '2001'),
(20, NULL, 0, 0, '2019-09-08 19:15:33', '2019-09-08 19:15:33', '2002'),
(21, NULL, 0, 0, '2019-09-08 19:15:36', '2019-09-08 19:15:58', '2003'),
(22, NULL, 0, 0, '2019-09-08 19:16:14', '2019-09-08 19:16:14', '2010'),
(23, NULL, 0, 0, '2019-09-08 19:16:28', '2019-09-08 19:16:28', '2011'),
(24, NULL, 0, 0, '2019-09-08 19:16:33', '2019-09-08 19:16:33', '2012'),
(25, NULL, 0, 0, '2019-09-08 19:16:37', '2019-09-08 19:16:37', '2013'),
(26, NULL, 0, 0, '2019-09-08 19:16:45', '2019-09-08 19:16:45', '2020'),
(27, 'C.Ha WC', 0, 0, '2019-09-08 19:16:51', '2019-09-08 19:49:00', '2021'),
(28, NULL, 0, 0, '2019-09-08 19:16:54', '2019-09-08 19:16:54', '2022'),
(29, NULL, 0, 0, '2019-09-08 19:16:57', '2019-09-08 19:16:57', '2023'),
(30, NULL, 0, 0, '2019-09-08 19:17:10', '2019-09-08 19:17:10', '2030'),
(31, 'Yên 101', 0, 0, '2019-09-08 19:17:13', '2019-09-08 19:45:52', '2031'),
(32, NULL, 0, 0, '2019-09-08 19:17:16', '2019-09-08 19:17:16', '2032'),
(33, NULL, 0, 0, '2019-09-08 19:17:18', '2019-09-08 19:17:18', '2033'),
(34, 'Vy 101', 0, 0, '2019-09-08 19:17:27', '2019-09-08 19:48:07', '2100'),
(35, NULL, 0, 0, '2019-09-08 19:17:33', '2019-09-08 19:17:33', '2101'),
(36, NULL, 0, 0, '2019-09-08 19:17:36', '2019-09-08 19:17:36', '2102'),
(37, NULL, 0, 0, '2019-09-08 19:17:39', '2019-09-08 19:17:39', '2103'),
(38, NULL, 0, 0, '2019-09-08 19:17:51', '2019-09-08 19:17:51', '2110'),
(39, NULL, 0, 0, '2019-09-08 19:17:53', '2019-09-08 19:17:53', '2111'),
(40, NULL, 0, 0, '2019-09-08 19:17:56', '2019-09-08 19:17:56', '2112'),
(41, NULL, 0, 0, '2019-09-08 19:17:56', '2019-09-08 19:17:56', '2112'),
(42, NULL, 0, 0, '2019-09-08 19:17:59', '2019-09-08 19:18:12', '2120'),
(43, 'Kien 303', 0, 0, '2019-09-08 19:18:20', '2019-09-08 19:48:22', '2121'),
(44, NULL, 0, 0, '2019-09-08 19:18:22', '2019-09-08 19:18:22', '2122'),
(45, NULL, 0, 0, '2019-09-08 19:18:25', '2019-09-08 19:18:25', '2123'),
(46, NULL, 0, 0, '2019-09-08 19:18:34', '2019-09-08 19:18:39', '2130'),
(47, NULL, 0, 0, '2019-09-08 19:18:43', '2019-09-08 19:18:43', '2131'),
(48, NULL, 0, 0, '2019-09-08 19:18:46', '2019-09-08 19:18:46', '2132'),
(49, NULL, 0, 0, '2019-09-08 19:18:49', '2019-09-08 19:18:49', '2133'),
(50, NULL, 0, 0, '2019-09-08 19:39:29', '2019-09-08 19:39:29', '3001'),
(51, NULL, 0, 0, '2019-09-08 19:39:32', '2019-09-08 19:39:32', '3002'),
(52, NULL, 0, 0, '2019-09-08 19:39:34', '2019-09-08 19:39:34', '3003'),
(53, NULL, 0, 0, '2019-09-08 19:39:48', '2019-09-08 19:39:48', '3010'),
(54, NULL, 0, 0, '2019-09-08 19:39:50', '2019-09-08 19:39:50', '3011'),
(55, NULL, 0, 0, '2019-09-08 19:39:53', '2019-09-08 19:39:53', '3012'),
(56, NULL, 0, 0, '2019-09-08 19:39:55', '2019-09-08 19:39:55', '3013'),
(57, NULL, 0, 0, '2019-09-08 19:40:02', '2019-09-08 19:40:02', '3020'),
(58, NULL, 0, 0, '2019-09-08 19:40:06', '2019-09-08 19:40:06', '3021'),
(59, NULL, 0, 0, '2019-09-08 19:40:08', '2019-09-08 19:40:08', '3022'),
(60, NULL, 0, 0, '2019-09-08 19:40:12', '2019-09-08 19:40:12', '3023'),
(61, 'Nam (2) 303', 0, 0, '2019-09-08 19:40:21', '2019-09-08 19:47:43', '3030'),
(62, NULL, 0, 0, '2019-09-08 19:40:24', '2019-09-08 19:40:24', '3031'),
(63, NULL, 0, 0, '2019-09-08 19:40:26', '2019-09-08 19:40:26', '3032'),
(64, 'Nguyen 202/174', 0, 0, '2019-09-08 19:40:29', '2019-09-09 18:06:52', '3033'),
(65, NULL, 0, 0, '2019-09-08 19:40:42', '2019-09-08 19:40:42', '3100'),
(66, NULL, 0, 0, '2019-09-08 19:40:46', '2019-09-08 19:40:46', '3101'),
(67, NULL, 0, 0, '2019-09-08 19:40:48', '2019-09-08 19:40:48', '3102'),
(68, NULL, 0, 0, '2019-09-08 19:40:52', '2019-09-08 19:40:52', '3103'),
(69, NULL, 0, 0, '2019-09-08 19:41:14', '2019-09-08 19:41:14', '3110'),
(70, 'Vân Anh 501/174', 0, 0, '2019-09-08 19:41:17', '2019-09-10 04:35:33', '3111'),
(71, NULL, 0, 0, '2019-09-08 19:41:19', '2019-09-08 19:41:19', '3112'),
(72, 'Trường thợ điện', 0, 0, '2019-09-08 19:41:24', '2019-09-10 03:51:44', '3113'),
(73, NULL, 0, 0, '2019-09-08 19:42:50', '2019-09-08 19:42:50', '3132'),
(74, 'Yến 101', 0, 0, '2019-09-08 19:46:13', '2019-09-08 19:46:13', '1021'),
(75, 'Ánh 101', 0, 0, '2019-09-08 19:47:10', '2019-09-08 19:47:10', '1013'),
(76, 'Tiệp 203', 0, 0, '2019-09-08 19:49:26', '2019-09-08 19:49:26', '3121'),
(77, 'Bảo Trân 302', 0, 0, '2019-09-08 19:49:58', '2019-09-08 19:49:58', '3122'),
(78, 'Nam - 102', 0, 0, '2019-09-08 19:50:35', '2019-09-08 19:50:35', '3130'),
(79, 'Quang - 102', 0, 0, '2019-09-08 19:50:47', '2019-09-08 19:50:47', '3131'),
(80, 'Trường 102', 0, 0, '2019-09-08 19:50:57', '2019-09-08 19:50:57', '3132'),
(81, 'Hoa 001', 0, 0, '2019-09-08 19:51:23', '2019-09-08 19:51:23', '1131'),
(82, 'Hoa 001', 0, 0, '2019-09-08 19:51:42', '2019-09-08 19:51:42', '1132'),
(83, 'Phương 401', 0, 0, '2019-09-08 19:52:23', '2019-09-08 19:54:19', '0113'),
(84, 'Phương 401', 0, 0, '2019-09-08 19:52:36', '2019-09-08 19:54:15', '0123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `von_dau_tu`
--

CREATE TABLE `von_dau_tu` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tienlq` int(11) DEFAULT 0,
  `anhht` int(11) DEFAULT 0,
  `note` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `status_investment_id` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `von_dau_tu`
--

INSERT INTO `von_dau_tu` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `tienlq`, `anhht`, `note`, `status_investment_id`) VALUES
(1, 'Nhượng căn hộ 1A/174 Trần Duy Hưng', 0, 0, '2019-07-30 21:52:34', '2019-07-30 22:04:57', 105000000, 50000000, NULL, 2),
(2, 'Thuê Căn Hộ 1A/174 Trần Duy Hưng', 0, 0, '2019-07-30 21:54:13', '2019-08-16 20:14:10', 86700000, 12300000, NULL, 2),
(3, 'Mua phụ kiện cho tầng 1 ngày 27/07/2019', 0, 0, '2019-07-30 21:58:20', '2019-07-30 22:05:04', 60000, 145000, 'T.Anh: 2 bóng đèn tip (110k), 1 bóng tròn (30k), 1 bút thử điện (15k)\r\nTiến: 2 bóng đèn tip: 60k', 2),
(4, 'Sửa điều hòa phòng 402/217 ngày 27/07/2019', 0, 0, '2019-07-30 21:59:31', '2019-07-30 22:05:08', 0, 100000, NULL, 2),
(5, 'Sửa điện tầng 1 ngày 27/07/2019', 0, 0, '2019-07-30 22:00:25', '2019-07-30 22:05:12', 0, 600000, NULL, 2),
(6, 'Tiền sửa khóa vân tay tầng 1', 0, 0, '2019-08-02 21:16:02', '2019-08-02 21:16:02', 0, 1150000, NULL, 2),
(7, 'nước tẩy, xi măng, bay,...', 0, 0, '2019-08-02 21:17:32', '2019-08-09 04:09:08', 0, 100000, 'đồ để sửa lại tầng 1', 2),
(8, 'Sửa Camera', 0, 0, '2019-08-09 04:07:58', '2019-08-09 04:07:58', 1000000, 0, 'Sửa camera tầng 1: 2 cái\r\ntầng thượng: mua mới 1 cái', 2),
(9, 'Vệ sinh lại tầng 1', 0, 0, '2019-08-09 04:08:57', '2019-08-09 04:12:03', 1500000, 0, 'Vệ sinh tầng 1', 2),
(10, 'mua quạt thông gió cho tầng 301', 0, 0, '2019-08-09 04:13:01', '2019-08-09 04:13:01', 500000, 0, NULL, 2),
(11, 'Tiền phí mô giới', 0, 0, '2019-08-12 03:41:52', '2019-08-12 03:41:52', 0, 11000000, 'Phí cho bà Lý', 2),
(12, 'Tiền sang nhượng chuyển trước cho bà Lý hộ ông Phương', 0, 0, '2019-08-12 03:42:51', '2019-08-12 03:42:51', 0, 15000000, NULL, 2),
(13, 'Vệ sinh điều hòa', 0, 0, '2019-08-12 03:44:12', '2019-08-12 04:04:26', 2000000, 0, NULL, 2),
(14, 'Trả tiền sửa đh tầng 1', 0, 0, '2019-08-12 03:44:49', '2019-08-12 03:44:49', 0, 4200000, NULL, 2),
(15, 'Trả tiền dán giấy tầng 1', 0, 0, '2019-08-12 03:45:55', '2019-08-12 04:04:48', 200000, 1500000, 'Ok', 2),
(16, 'Nâng cấp khóa của chính tầng 1 (Tự động sập khi đóng)', 0, 0, '2019-08-12 04:06:06', '2019-08-12 04:06:06', 500000, 0, NULL, 2),
(17, 'Mua ga trải giường cho tầng 1', 0, 0, '2019-08-15 00:43:42', '2019-08-15 00:43:42', 250000, 0, NULL, 2),
(18, 'Mua 2 cái route wifi', 0, 0, '2019-08-15 00:44:07', '2019-08-15 00:44:07', 500000, 0, NULL, 2),
(19, 'Mua vòi nước cho bồn ở bếp (tầng 1)', 0, 0, '2019-08-16 19:17:37', '2019-08-16 19:17:37', 250000, 0, NULL, 2),
(20, 'Mua tủ cho tầng 1', 0, 0, '2019-08-16 19:17:58', '2019-08-16 19:17:58', 1400000, 0, NULL, 2),
(22, 'Tiến Anh thanh toán tiền sửa mạng (200k), Tiền sửa nhà vệ sinh (100k)', 0, 0, '2019-08-19 20:44:59', '2019-08-19 20:44:59', 0, 300000, 'Tiến Anh thanh toán tiền sửa mạng (200k), Tiền sửa nhà vệ sinh (100k)', 2),
(23, 'Sửa điều hòa phòng 101', 0, 0, '2019-08-22 21:17:41', '2019-08-22 21:17:41', 420000, 0, NULL, 2),
(24, 'Mua 10m dây mạng', 0, 0, '2019-08-31 19:24:26', '2019-08-31 19:24:26', 50000, 0, NULL, 2),
(25, 'Mua vòi hoa sen (có kèm dây) cho phòng 403', 0, 0, '2019-08-31 19:25:07', '2019-08-31 19:25:12', 150000, 0, NULL, 2),
(26, 'Mua cục xả nước ở bồn rửa mặt cho phòng 403', 0, 0, '2019-08-31 19:25:53', '2019-08-31 19:25:53', 250000, 0, NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `__route`
--

CREATE TABLE `__route` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `route_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `__route`
--

INSERT INTO `__route` (`id`, `sort_order`, `created_at`, `updated_at`, `name`, `route_name`, `parent_id`) VALUES
(1, 1, '2019-03-31 23:16:28', '2019-04-07 04:49:39', 'Hiển thị một bài viết', 'about', 0),
(2, 2, '2019-03-31 23:17:13', '2019-04-07 04:49:53', 'Hiển thị danh sách sản phẩm', 'product', 0),
(3, 3, '2019-03-31 23:19:43', '2019-04-07 04:50:16', 'Hiển thị  danh Sách Tin Tức', 'news', 0),
(4, 4, '2019-03-31 23:18:18', '2019-04-07 04:50:02', 'Hiển thị trang liên hệ', 'contact', 0),
(6, 7, '2019-04-22 01:19:00', '2019-04-22 01:19:00', 'Hiển thị Trang chủ', 'home', 0),
(7, 5, '2019-04-29 03:08:48', '2019-04-29 03:08:48', 'Dang sách landing page', 'listLandingPage', 0),
(8, 6, '2019-04-29 03:09:15', '2019-04-29 03:09:15', 'Một trang landing page đơn', 'singleLandingPage', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `admin_config`
--
ALTER TABLE `admin_config`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `apartment`
--
ALTER TABLE `apartment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `block`
--
ALTER TABLE `block`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `block_item`
--
ALTER TABLE `block_item`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `configweb`
--
ALTER TABLE `configweb`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hop_dong`
--
ALTER TABLE `hop_dong`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `khoan_thu_khac`
--
ALTER TABLE `khoan_thu_khac`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `landing_page`
--
ALTER TABLE `landing_page`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `landing_page_item`
--
ALTER TABLE `landing_page_item`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `motel_room`
--
ALTER TABLE `motel_room`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`(191));

--
-- Chỉ mục cho bảng `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Chỉ mục cho bảng `so_dien`
--
ALTER TABLE `so_dien`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `status_customer`
--
ALTER TABLE `status_customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `status_hop_dong`
--
ALTER TABLE `status_hop_dong`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `status_investment`
--
ALTER TABLE `status_investment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `status_motel_room`
--
ALTER TABLE `status_motel_room`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `status_tien_phong`
--
ALTER TABLE `status_tien_phong`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `table_column`
--
ALTER TABLE `table_column`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `thong_ke`
--
ALTER TABLE `thong_ke`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tien_chi_tieu`
--
ALTER TABLE `tien_chi_tieu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tien_phong`
--
ALTER TABLE `tien_phong`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `van_tay`
--
ALTER TABLE `van_tay`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `von_dau_tu`
--
ALTER TABLE `von_dau_tu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `__route`
--
ALTER TABLE `__route`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `about`
--
ALTER TABLE `about`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `admin_config`
--
ALTER TABLE `admin_config`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `apartment`
--
ALTER TABLE `apartment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `block`
--
ALTER TABLE `block`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `block_item`
--
ALTER TABLE `block_item`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `configweb`
--
ALTER TABLE `configweb`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `hop_dong`
--
ALTER TABLE `hop_dong`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `khoan_thu_khac`
--
ALTER TABLE `khoan_thu_khac`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `landing_page`
--
ALTER TABLE `landing_page`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `landing_page_item`
--
ALTER TABLE `landing_page_item`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `motel_room`
--
ALTER TABLE `motel_room`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `so_dien`
--
ALTER TABLE `so_dien`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `status`
--
ALTER TABLE `status`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `status_customer`
--
ALTER TABLE `status_customer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `status_hop_dong`
--
ALTER TABLE `status_hop_dong`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `status_investment`
--
ALTER TABLE `status_investment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `status_motel_room`
--
ALTER TABLE `status_motel_room`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `status_tien_phong`
--
ALTER TABLE `status_tien_phong`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT cho bảng `table_column`
--
ALTER TABLE `table_column`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=313;

--
-- AUTO_INCREMENT cho bảng `thong_ke`
--
ALTER TABLE `thong_ke`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `tien_chi_tieu`
--
ALTER TABLE `tien_chi_tieu`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `tien_phong`
--
ALTER TABLE `tien_phong`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `van_tay`
--
ALTER TABLE `van_tay`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT cho bảng `von_dau_tu`
--
ALTER TABLE `von_dau_tu`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `__route`
--
ALTER TABLE `__route`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
