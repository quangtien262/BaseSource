-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th9 02, 2019 lúc 12:06 AM
-- Phiên bản máy phục vụ: 8.0.12
-- Phiên bản PHP: 7.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tienanh`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `about`
--

CREATE TABLE `about` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `summary` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin_config`
--

CREATE TABLE `admin_config` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `banner` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `address` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `gia_nhuong` int(11) DEFAULT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `image` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `input_type` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `block_type_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `input_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
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
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `route_id` int(11) DEFAULT '0',
  `seo_keyword` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `seo_description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `youtube` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
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
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cmtnd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `ngay_cap` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `noi_cap` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `address` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `mobile` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `email` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `status_customer_id` int(11) DEFAULT '0',
  `motel_room_id` int(11) DEFAULT '0',
  `note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
(11, 'Vũ Minh Hải - 402/174', 0, 0, '2019-08-02 18:30:16', '2019-08-02 18:30:21', NULL, NULL, NULL, NULL, NULL, NULL, 1, 12, NULL),
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `link` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `motel_room_id` int(11) DEFAULT '0',
  `gia_thue` int(11) DEFAULT '0',
  `customer_id` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `tien_dat_coc` int(11) DEFAULT '0',
  `so_nguoi` int(11) DEFAULT '0',
  `note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hop_dong`
--

INSERT INTO `hop_dong` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `motel_room_id`, `gia_thue`, `customer_id`, `start_date`, `end_date`, `tien_dat_coc`, `so_nguoi`, `note`) VALUES
(1, '501/174', 0, 0, '2019-08-01 19:20:02', '2019-08-02 21:18:05', 14, 3000000, 3, '2019-08-01', '2019-10-31', 3000000, 0, NULL),
(2, '403/174', 0, 0, '2019-08-03 05:58:19', '2019-08-02 21:18:01', 13, 3500000, 13, '2019-08-01', '2019-10-31', 3500000, 2, NULL),
(3, '402/174', 0, 0, '2019-08-03 05:59:54', '2019-08-02 21:17:57', 12, 3200000, 11, '2019-08-01', '2019-10-31', 3200000, 1, NULL),
(4, '401/174', 0, 0, '2019-08-03 05:59:57', '2019-08-02 21:17:55', 11, 3000000, 9, '2019-08-01', '2019-10-31', 3000000, 2, NULL),
(5, '303/174', 0, 0, '2019-08-03 05:59:58', '2019-08-02 21:17:53', 10, 3500000, 5, '2019-08-01', '2019-10-31', 3500000, 3, NULL),
(6, '302/174', 0, 0, '2019-08-03 05:59:59', '2019-08-03 01:14:32', 9, 3000000, 14, '2019-08-01', '2019-10-31', 3000000, 3, NULL),
(7, '301/174', 0, 0, '2019-08-02 18:00:00', '2019-08-03 01:13:17', 8, 3000000, 4, '2019-08-01', '2019-10-31', 3000000, 3, NULL),
(8, '203/174', 0, 0, '2019-08-02 18:00:04', '2019-08-16 19:29:12', 6, 3000000, 10, '2019-08-01', '2019-01-31', 3000000, 2, NULL),
(9, '202/174', 0, 0, '2019-08-02 18:00:05', '2019-08-02 21:17:38', 7, 3200000, 6, '2019-08-01', '2019-10-31', 3200000, 1, NULL),
(10, '201/174', 0, 0, '2019-08-02 18:00:37', '2019-08-03 01:10:16', 5, 3000000, 8, '2019-08-01', '2019-10-31', 3000000, 3, NULL),
(11, '103/174', 0, 0, '2019-08-02 18:00:39', '2019-08-16 19:45:23', 4, 3500000, 2, '2019-08-01', '2019-10-31', 3500000, 2, NULL),
(12, '102/174', 0, 0, '2019-08-02 18:05:00', '2019-08-03 01:09:13', 3, 3000000, 12, '2019-08-01', '2019-10-31', 3000000, 2, NULL),
(13, '101/174', 0, 0, '2019-08-02 18:05:01', '2019-08-16 19:34:36', 2, 3000000, 3, '2019-08-01', '2019-10-31', 3000000, 2, NULL),
(14, '001/174', 0, 0, '2019-08-16 19:33:58', '2019-08-16 19:34:25', 15, 3500000, 16, '2019-08-16', '2019-11-30', 3500000, 2, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `investment`
--

CREATE TABLE `investment` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tienlq` int(11) DEFAULT '0',
  `anhht` int(11) DEFAULT '0',
  `note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `status_investment_id` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `investment`
--

INSERT INTO `investment` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `tienlq`, `anhht`, `note`, `status_investment_id`) VALUES
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
-- Cấu trúc bảng cho bảng `landing_page`
--

CREATE TABLE `landing_page` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `image` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `category_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `blocks` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
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
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `landing_page_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `data` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `block_id` int(11) DEFAULT '0'
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
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
-- Cấu trúc bảng cho bảng `money_collected`
--

CREATE TABLE `money_collected` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `money` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `money_collected`
--

INSERT INTO `money_collected` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `money`) VALUES
(1, 'Sơn trả nợ nhượng 174 lần 1', 0, 0, '2019-08-19 20:14:27', '2019-08-20 20:33:16', 40000000),
(2, 'Sơn trả nợ nhượng 174 lần 2', 0, 0, '2019-08-19 20:16:19', '2019-08-20 20:33:20', 40000000),
(3, 'Sơn trả nhượng', 0, 0, '2019-08-28 03:24:45', '2019-08-28 03:24:45', 50000000),
(4, 'Sơn trả nhượng 28.08.2019', 0, 0, '2019-08-28 03:25:00', '2019-08-28 03:25:00', 110000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `money_spent`
--

CREATE TABLE `money_spent` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `money` int(11) DEFAULT '0',
  `note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `money_spent`
--

INSERT INTO `money_spent` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `money`, `note`) VALUES
(1, '[174] Tiền điện tháng 8 nhà 274 (3F)', 0, 0, '2019-08-20 22:49:17', '2019-08-22 01:40:59', 1620000, NULL),
(2, '[174] Trả tiền coc phòng 403 (21/8/19)', 0, 0, '2019-08-22 01:28:34', '2019-08-22 02:38:09', 3052000, 'Cọc: -3.500.000\r\nĐiện: 58 số: 128.000\r\nNước: 200.000\r\nMạng: 100.000\r\nWC: 60.000\r\nChiếu sáng: 60.000'),
(3, '[174] Tiền điện tháng 8', 0, 0, '2019-08-22 01:38:12', '2019-08-22 01:40:40', 6823786, NULL),
(4, '[174] Thanh toán tiền internet tháng 8', 0, 0, '2019-08-22 01:40:23', '2019-08-22 01:40:23', 407000, NULL),
(5, '[174] Thanh toán tiền nước tháng 8', 0, 0, '2019-08-22 01:42:07', '2019-08-22 01:42:07', 2147604, NULL),
(6, 'Hỗ trợ Sơn', 0, 0, '2019-08-31 19:23:53', '2019-08-31 19:23:53', 50000000, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `motel_room`
--

CREATE TABLE `motel_room` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `apartment_id` int(11) DEFAULT NULL,
  `status_motel_room_id` int(11) DEFAULT '0',
  `note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `summary` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `category_id` int(11) DEFAULT NULL,
  `seo_keyword` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `seo_description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `summary` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `sort_order` int(11) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `category_id` int(11) DEFAULT NULL,
  `seo_keyword` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `seo_description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci
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
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(1, 2),
(2, 2),
(3, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `so_dien`
--

CREATE TABLE `so_dien` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `motel_room_id` int(11) DEFAULT '0',
  `week` int(11) DEFAULT '0',
  `year` int(11) DEFAULT NULL,
  `so_dau` int(11) DEFAULT '0',
  `so_cuoi` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `so_dien`
--

INSERT INTO `so_dien` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `motel_room_id`, `week`, `year`, `so_dau`, `so_cuoi`) VALUES
(1, '', 0, 0, '2019-08-02 18:51:31', '2019-08-31 19:55:04', 15, 8, 2019, 2396, 2644),
(2, '', 0, 0, '2019-08-02 18:51:34', '2019-08-16 21:15:24', 2, 8, 2019, 3908, 0),
(3, '', 0, 0, '2019-08-02 18:51:38', '2019-08-16 21:15:17', 3, 8, 2019, 2697, 0),
(4, '', 0, 0, '2019-08-02 18:51:42', '2019-08-16 21:15:09', 4, 8, 2019, 3058, 0),
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status_customer`
--

CREATE TABLE `status_customer` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
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
  `sort_order` int(11) DEFAULT '0',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_edit` int(11) DEFAULT '0',
  `type_show` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'BASIC, DRAG_DROP',
  `count_item_of_page` int(11) DEFAULT '30',
  `model_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `form_data_type` int(11) DEFAULT '1',
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `import` int(11) DEFAULT NULL,
  `export` int(11) DEFAULT NULL,
  `have_delete` int(11) DEFAULT '0',
  `have_add_new` int(11) DEFAULT '0',
  `table_tab` int(11) DEFAULT '0',
  `table_tab_map_column` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `is_show_btn_edit` tinyint(2) DEFAULT '0',
  `is_edit_express` int(11) DEFAULT '0',
  `is_add_express` int(11) DEFAULT '0'
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
(35, 13, 'users', 'Quản lý User', 1, NULL, 30, NULL, 0, 2, '2019-05-01', '2019-08-02', 0, 0, 1, 0, NULL, NULL, 1, 0, 0),
(36, 1, 'footer', 'Nội dung phần chân website', 1, '1', 30, NULL, 26, 2, '2019-05-01', '2019-05-01', NULL, NULL, 0, 0, 0, NULL, 0, 0, 0),
(39, 6, 'motel_room', 'Phòng cho thuê', 1, '0', 100, NULL, 0, 2, '2019-07-30', '2019-07-31', 1, 1, 1, 1, NULL, NULL, 1, 0, 0),
(40, 5, 'apartment', 'Căn hộ', 1, '0', 30, NULL, 0, 1, '2019-07-31', '2019-07-31', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(41, 7, 'customer', 'Khách hàng', 1, NULL, 30, NULL, 0, 1, '2019-07-31', '2019-08-02', 1, 1, 1, 1, NULL, NULL, 1, 0, 0),
(42, 8, 'investment', 'Vốn đầu tư', 1, '0', 30, NULL, 0, 1, '2019-07-31', '2019-08-12', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(43, 4, 'status_investment', 'Trạng thái Vốn đầu tư', 1, '1', 30, NULL, 45, 2, '2019-07-31', '2019-07-31', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(44, 5, 'status_motel_room', 'Trạng thái phòng trọ', 1, '1', 30, NULL, 45, 1, '2019-07-31', '2019-07-31', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(45, 11, 'status', 'Trạng thái', 1, '1', 30, NULL, 0, 1, '2019-08-02', '2019-08-02', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(46, 3, 'status_customer', 'Trạng thái khách hàng', 1, '1', 30, NULL, 45, 1, '2019-08-02', '2019-08-02', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(47, 1, 'tien_phong', 'Tiền phòng', 1, '0', 30, NULL, 0, 1, '2019-08-02', '2019-08-12', 1, 1, 1, 1, NULL, NULL, 1, 0, 0),
(48, 9, 'so_dien', 'Số điện', 1, NULL, 30, NULL, 0, 1, '2019-08-02', '2019-08-03', 1, 1, 1, 1, NULL, NULL, 1, 0, 1),
(49, 4, 'hop_dong', 'Hợp đồng', 1, '0', 30, NULL, 0, 1, '2019-08-02', '2019-08-11', 0, 0, 1, 1, NULL, NULL, 1, 0, 1),
(50, 2, 'status_hop_dong', 'Trạng thái hợp đồng', 1, '1', 30, NULL, 45, 1, '2019-08-02', '2019-08-02', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(51, 1, 'status_tien_phong', 'Trạng thái tiền phòng', 1, '1', 30, NULL, 45, 1, '2019-08-09', '2019-08-09', 0, 0, 0, 0, NULL, NULL, 0, 0, 0),
(54, 10, 'van_tay', 'Vân tay', 1, '0', 30, NULL, 0, 1, '2019-08-17', '2019-08-17', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(55, 2, 'money_collected', 'Khoản thu khác', 1, NULL, 30, NULL, 0, 1, '2019-08-20', '2019-08-20', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(56, 3, 'money_spent', 'Tiền chi tiêu', 1, NULL, 30, NULL, 0, 1, '2019-08-20', '2019-08-20', 0, 0, 1, 1, NULL, NULL, 1, 0, 0),
(57, 12, 'admin_config', 'admin_config', 1, '5', 30, NULL, 0, 1, '2019-09-01', '2019-09-01', 0, 0, 0, 1, NULL, NULL, 1, 0, 0),
(58, 0, 'total', 'Thống kê', 1, '0', 30, NULL, 0, 1, '2019-09-01', '2019-09-01', 0, 0, 0, 1, NULL, NULL, 1, 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_column`
--

CREATE TABLE `table_column` (
  `id` int(11) NOT NULL,
  `table_id` int(11) DEFAULT NULL,
  `display_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `value_default` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_null` tinyint(2) DEFAULT '1',
  `max_length` int(11) DEFAULT NULL,
  `edit` tinyint(1) DEFAULT '1',
  `type_show` int(11) DEFAULT NULL,
  `add2search` int(11) DEFAULT NULL,
  `search_type` int(11) DEFAULT '1',
  `type_edit` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `show_in_list` tinyint(4) DEFAULT '0',
  `require` int(11) DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT '0',
  `parent_id` int(11) DEFAULT '0',
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `select_table_id` int(11) DEFAULT NULL,
  `conditions` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `fast_edit` int(2) DEFAULT '0',
  `table_link` int(11) DEFAULT '0',
  `class` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `column_table_link` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `sub_list` tinyint(2) DEFAULT '0',
  `sub_column_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `config_add_sub_table` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `bg_in_list` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `add_column_in_list` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `column_name_map_to_comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_show_total` tinyint(2) DEFAULT '0',
  `is_show_btn_auto_get_total` tinyint(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_column`
--

INSERT INTO `table_column` (`id`, `table_id`, `display_name`, `name`, `type`, `value_default`, `is_null`, `max_length`, `edit`, `type_show`, `add2search`, `search_type`, `type_edit`, `show_in_list`, `require`, `sort_order`, `parent_id`, `created_at`, `updated_at`, `select_table_id`, `conditions`, `fast_edit`, `table_link`, `class`, `column_table_link`, `sub_list`, `sub_column_name`, `config_add_sub_table`, `bg_in_list`, `add_column_in_list`, `column_name_map_to_comment`, `is_show_total`, `is_show_btn_auto_get_total`) VALUES
(4, 9, 'name', 'name', 'VARCHAR', '100', 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-02-11', '2019-02-18', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(7, 9, 'Image', 'image', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(8, 13, 'Name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(9, 13, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 0, 0, '2019-02-21', '2019-02-21', 13, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(10, 12, 'Tên Sản Phẩm', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-18', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(11, 12, 'Hình ảnh đại diên', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 3, 0, '2019-03-18', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(12, 12, 'Nội dung', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 5, 0, '2019-03-18', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(13, 12, 'Nội dung tóm tắt', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 6, 0, '2019-03-18', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(14, 14, 'title', 'title', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-19', '2019-03-19', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(15, 14, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 3, 0, '2019-03-19', '2019-03-19', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(16, 14, 'content', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 4, 0, '2019-03-19', '2019-03-19', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(18, 14, 'summary', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 1, 5, 0, '2019-03-19', '2019-03-27', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(19, 12, 'sort_order', 'sort_order', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 9, 0, '2019-03-19', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(20, 14, 'sort_order', 'sort_order', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 8, 0, '2019-03-20', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(21, 15, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(22, 15, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(24, 15, 'sort_order', 'sort_order', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(25, 16, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(26, 16, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 3, 0, '2019-03-30', '2019-04-29', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(27, 17, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(28, 17, 'describe', 'describe', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 3, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(29, 17, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 2, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(30, 17, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 4, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(31, 17, 'content', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-03-30', '2019-03-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(32, 18, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(33, 18, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 2, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(34, 19, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(36, 20, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(37, 20, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 1, 0, 3, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(38, 20, 'summary', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 4, 0, '2019-03-31', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(40, 21, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 2, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(41, 21, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 3, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(42, 21, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 1, 4, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(44, 21, 'content', 'content', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-03-31', '2019-03-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(45, 22, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(46, 22, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 2, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(47, 23, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(48, 23, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'image_laravel', 1, 0, 2, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(49, 16, 'Chọn kiểu hiển thị', 'route_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 1, 2, 0, '2019-04-01', '2019-04-07', 24, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(50, 24, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(51, 24, 'route_name', 'route_name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-01', '2019-04-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(52, 25, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(53, 25, 'summary', 'summary', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(54, 25, 'content', 'content', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(55, 25, 'image', 'image', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(58, 20, 'Link xem thêm', 'link', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-04-06', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(59, 21, 'link', 'link', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 1, 1, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(60, 27, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(61, 27, 'address', 'address', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(62, 27, 'email', 'email', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(63, 27, 'logo', 'logo', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(67, 27, 'facebook', 'facebook', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(68, 27, 'youtube', 'youtube', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(69, 27, 'instagram', 'instagram', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 1, 0, 0, '2019-04-06', '2019-04-06', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(70, 27, 'phone', 'phone', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-04-06', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(72, 28, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-07', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(73, 28, 'phone', 'phone', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-07', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(74, 28, 'email', 'email', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-04-07', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(75, 28, 'address', 'address', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 0, 0, '2019-04-07', '2019-04-07', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(76, 12, 'Hình ảnh SP', 'images', 'LONGTEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'images', 0, 0, 4, 0, '2019-04-07', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(80, 12, 'chọn danh mục', 'category_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-07', '2019-05-04', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(81, 14, 'chọn danh mục', 'category_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-07', '2019-05-04', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(82, 29, 'name', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 1, 1, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(83, 29, 'pdf', 'pdf', 'TEXT', NULL, 1, 255, 1, NULL, 0, 1, 'pdf', 0, 0, 3, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(84, 29, 'image', 'image', 'TEXT', NULL, 1, 255, 1, NULL, 0, 1, 'image_laravel', 0, 0, 4, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(85, 29, 'summary', 'summary', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'summoner', 0, 0, 5, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(86, 20, 'video', 'video', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'video', 0, 0, 0, 0, '2019-04-08', '2019-04-08', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(87, 29, 'Chọn danh mục', 'category_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-08', '2019-04-08', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(88, 19, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 0, NULL, 1, 1, 'select', 0, 0, 0, 0, '2019-04-11', '2019-04-11', 19, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(89, 31, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(90, 31, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(91, 31, 'input_type', 'input_type', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'input', 0, 0, 3, 0, '2019-04-15', '2019-04-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(92, 31, 'block_type_id', 'block_type_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'select', 0, 0, 4, 0, '2019-04-15', '2019-04-15', 32, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(93, 32, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(94, 32, 'parent_id', 'parent_id', 'INT', NULL, 1, 255, 0, NULL, 0, 1, 'number', 0, 0, 3, 0, '2019-04-15', '2019-04-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(95, 32, 'image', 'image', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 2, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(96, 33, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(97, 33, 'parent_id', 'parent_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(98, 33, 'landing_page_id', 'landing_page_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'select', 0, 0, 2, 0, '2019-04-15', '2019-04-28', 34, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(100, 33, 'data', 'data', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 3, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(101, 34, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 0, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(102, 34, 'parent_id', 'parent_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(103, 34, 'image', 'image', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 0, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(104, 34, 'category_id', 'category_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'select', 0, 0, 0, 0, '2019-04-15', '2019-04-15', 16, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(105, 34, 'blocks', 'blocks', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'block', 0, 0, 0, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(106, 35, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(107, 35, 'Mật khẩu (Bỏ trống nếu bạn không muốn thay đổi))', 'password', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'encryption', 0, 0, 4, 0, '2019-04-15', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(108, 35, 'name', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-04-15', '2019-04-15', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(109, 35, 'remember_token', 'remember_token', 'VARCHAR', NULL, 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-04-15', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(110, 35, 'Tên đăng nhập', 'username', 'VARCHAR', '', 1, 255, 1, NULL, 1, 1, 'text', 1, 0, 3, 0, '2019-04-21', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(111, 35, 'Email', 'email', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 5, 0, '2019-04-21', '2019-04-21', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(112, 35, 'user_type', 'user_type', 'VARCHAR', '0', 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-04-21', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(122, 33, 'block_id', 'block_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-04-28', '2019-04-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(124, 31, 'input_name', 'input_name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-04-28', '2019-04-28', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(125, 16, 'Thứ tự sắp sếp', 'sort_order', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-04-29', '2019-04-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(126, 24, 'parent_id', 'parent_id', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'select', 0, 0, 0, 0, '2019-04-29', '2019-04-29', 24, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(127, 24, 'sort_order', 'sort_order', 'INT', NULL, 1, NULL, 0, NULL, 1, 1, 'number', 1, 0, 0, 0, '2019-04-29', '2019-04-29', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(132, 36, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(133, 36, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(134, 36, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(135, 36, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(136, 36, 'Liên kết (VD: http://abc.com/...)', 'link', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 3, 0, '2019-05-01', '2019-05-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(137, 37, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(138, 37, 'NVKD', 'nvkd_id', 'INT', NULL, 1, 255, 1, NULL, 0, 1, 'select', 1, 0, 4, 0, '2019-05-04', '2019-05-25', 35, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(139, 37, 'Ngày gửi', 'ngay_gui', 'DATE', '0', 1, NULL, 1, NULL, 0, 1, 'date', 1, 0, 7, 0, '2019-05-04', '2019-05-25', 0, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(140, 37, 'Ngày về', 'ngay_ve', 'DATE', '0', 1, NULL, 1, NULL, 0, 1, 'date', 1, 0, 8, 0, '2019-05-04', '2019-05-25', 0, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(141, 16, '[SEO] Từ khóa', 'seo_keyword', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 0, 0, 4, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(142, 16, '[SEO] Mô tả', 'seo_description', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(143, 12, '[SEO] Từ khóa', 'seo_keyword', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 7, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(144, 12, '[SEO] Mô tả', 'seo_description', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 8, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(145, 14, '[SEO] Từ khóa', 'seo_keyword', 'TEXT', NULL, 1, NULL, 1, NULL, 1, 1, 'textarea', 1, 0, 6, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(146, 14, '[SEO] Mô tả', 'seo_description', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 7, 0, '2019-05-04', '2019-05-04', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(147, 37, 'Tổng SK', 'total_sk', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 2, 0, '2019-05-04', '2019-05-25', 0, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(148, 37, 'Mã SP', 'name', 'VARCHAR', NULL, 1, NULL, 1, NULL, 1, 1, 'text', 1, 0, 3, 0, '2019-05-04', '2019-05-26', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(150, 37, 'Hàng hoá', 'hang_ve_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 5, 0, '2019-05-04', '2019-05-26', 0, NULL, 1, 38, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(151, 37, 'Nhân viên mua hàng', 'nvmh_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 6, 0, '2019-05-25', '2019-05-25', 35, NULL, 1, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(152, 38, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(153, 38, 'Tên hàng', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-05-25', '2019-05-26', 0, NULL, 0, NULL, 'width02', NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(154, 38, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(155, 38, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-05-25', '2019-05-25', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(156, 38, 'Số kiện', 'so_kien', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-05-25', '2019-05-26', 0, NULL, 1, NULL, 'width01', NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(157, 38, 'Đóng gói', 'so_luong_dong_goi', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 4, 0, '2019-05-25', '2019-05-26', 0, NULL, 1, NULL, 'width01', NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(158, 38, 'Số lượng', 'so_luong', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 5, 0, '2019-05-25', '2019-05-26', 0, NULL, 1, NULL, 'width01', NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(159, 38, 'Hàng về', 'hang_ve_id', 'INT', NULL, 1, NULL, 0, NULL, 0, 1, 'select', 0, 0, 0, 0, '2019-05-26', '2019-05-26', 37, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(160, 37, 'sort_order', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'number', 0, 0, 0, 0, '2019-05-26', '2019-05-26', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(161, 39, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-07-30', '2019-07-30', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(162, 39, 'Số phòng', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-07-30', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(163, 39, 'parent_id', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'select', 0, 0, 9, 0, '2019-07-30', '2019-07-31', 39, '{ \"parent_id\":\"0\"}', 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(164, 39, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 0, 0, 10, 0, '2019-07-30', '2019-07-30', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(166, 40, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(167, 40, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-07-31', '2019-07-31', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(168, 40, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(169, 40, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(170, 40, 'Địa chỉ', 'address', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 4, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(171, 40, 'Giá nhượng lại', 'gia_nhuong', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-07-31', '2019-07-31', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(173, 40, 'Note', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 5, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(174, 39, 'Căn hộ', 'apartment_id', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'select', 0, 0, 3, 0, '2019-07-31', '2019-07-31', 40, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(175, 41, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(176, 41, 'Họ tên', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-07-31', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(177, 41, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 12, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(178, 41, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 13, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(179, 41, 'CMTND', 'cmtnd', 'VARCHAR', '0', 1, 255, 1, NULL, 0, 1, 'number', 0, 0, 8, 0, '2019-07-31', '2019-08-02', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(180, 41, 'Ngày cấp', 'ngay_cap', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'date', 0, 0, 7, 0, '2019-07-31', '2019-08-02', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(181, 41, 'Nơi cấp', 'noi_cap', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 9, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(182, 41, 'Địa chỉ', 'address', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 10, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(184, 41, 'Điện thoại', 'mobile', 'VARCHAR', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 6, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(185, 41, 'Email', 'email', 'TEXT', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 5, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(186, 42, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(187, 42, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-07-31', '2019-07-31', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(188, 42, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(189, 42, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(190, 42, 'TienLQ', 'tienlq', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-07-31', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL),
(191, 42, 'AnhHT', 'anhht', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 4, 0, '2019-07-31', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL),
(192, 42, 'Note', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 5, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(193, 43, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(194, 43, 'Tên trạng thái', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(195, 43, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(196, 43, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(197, 42, 'Trạng thái', 'status_investment_id', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 0, 0, '2019-07-31', '2019-08-17', 43, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(198, 44, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(199, 44, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(200, 44, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(201, 44, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-07-31', '2019-07-31', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(202, 39, 'Trạng thái', 'status_motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 6, 0, '2019-07-31', '2019-07-31', 44, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(204, 39, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 11, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(205, 45, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(206, 45, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(207, 45, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(208, 45, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(209, 46, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(210, 46, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(211, 46, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(212, 46, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(213, 41, 'Trạng thái', 'status_customer_id', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 4, 0, '2019-08-02', '2019-08-02', 46, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(214, 41, 'Phòng', 'motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 3, 0, '2019-08-02', '2019-08-02', 39, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(215, 47, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(216, 47, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 0, 0, 2, 0, '2019-08-02', '2019-08-09', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(217, 47, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 13, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(218, 47, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 14, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(219, 47, 'Phòng', 'motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'select', 1, 0, 3, 0, '2019-08-02', '2019-08-02', 39, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(220, 48, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(221, 48, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-08-02', '2019-08-17', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(222, 48, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 8, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(223, 48, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 9, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(227, 49, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(228, 49, 'Tiêu đề', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-02', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(229, 49, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 11, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(230, 49, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 12, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(231, 49, 'Phòng', 'motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 5, 0, '2019-08-02', '2019-08-02', 39, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(232, 49, 'Giá thuê', 'gia_thue', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 6, 0, '2019-08-02', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL),
(233, 49, 'Khách hàng', 'customer_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 3, 0, '2019-08-02', '2019-08-02', 41, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(236, 49, 'Ngày bắt đầu', 'start_date', 'DATE', NULL, 1, NULL, 1, NULL, 1, 1, 'date', 1, 0, 8, 0, '2019-08-02', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(237, 49, 'Ngày kết thúc', 'end_date', 'DATE', NULL, 1, NULL, 1, NULL, 1, 1, 'date', 1, 0, 9, 0, '2019-08-02', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(240, 50, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(241, 50, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(242, 50, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(243, 50, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-02', '2019-08-02', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(244, 49, 'Tiền đặt cọc', 'tien_dat_coc', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 7, 0, '2019-08-02', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL),
(245, 48, 'Phòng', 'motel_room_id', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 3, 0, '2019-08-03', '2019-08-03', 39, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(246, 49, 'Số Người', 'so_nguoi', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 4, 0, '2019-08-03', '2019-08-03', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(247, 49, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 10, 0, '2019-08-03', '2019-08-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(248, 41, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 11, 0, '2019-08-03', '2019-08-03', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(249, 47, 'Tiền Điện', 'tien_dien', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 6, 0, '2019-08-09', '2019-08-09', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(250, 47, 'Tiền Nước', 'tien_nuoc', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 7, 0, '2019-08-09', '2019-08-09', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(251, 47, 'Tiền Phòng', 'tien_phong', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 11, 0, '2019-08-09', '2019-08-09', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(252, 47, 'Tiền vệ sinh', 'tien_wc', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 8, 0, '2019-08-09', '2019-08-09', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(253, 47, 'Tiền mạng', 'tien_mang', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 9, 0, '2019-08-09', '2019-08-09', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(254, 47, 'Tiền điện chung', 'tien_dien_chung', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 10, 0, '2019-08-09', '2019-08-09', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(255, 47, 'Tổng', 'total', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 5, 0, '2019-08-09', '2019-08-11', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL),
(256, 51, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-09', '2019-08-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(257, 51, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-09', '2019-08-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(258, 51, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-08-09', '2019-08-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(259, 51, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-09', '2019-08-09', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(260, 47, 'Trạng thái', 'status_tien_phong_id', 'INT', NULL, 1, NULL, 1, NULL, 1, 1, 'select', 1, 0, 4, 0, '2019-08-09', '2019-08-20', 51, NULL, 1, NULL, 'color-white', NULL, 0, NULL, NULL, '1', NULL, NULL, 0, NULL),
(261, 47, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 12, 0, '2019-08-10', '2019-08-17', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(262, 52, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(263, 52, 'Tiêu đề', 'name', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'number', 1, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(264, 52, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(265, 52, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(266, 53, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(267, 53, 'Năm', 'name', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'number', 1, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(268, 53, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(269, 53, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(270, 48, 'Tháng', 'week', 'INT', '0', 1, NULL, 1, NULL, 1, 1, 'number', 1, 0, 2, 0, '2019-08-17', '2019-08-17', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(271, 48, 'Năm', 'year', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 6, 0, '2019-08-17', '2019-08-17', 53, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(272, 48, 'Số đầu', 'so_dau', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 4, 0, '2019-08-17', '2019-08-17', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(273, 48, 'Số cuối', 'so_cuoi', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 5, 0, '2019-08-17', '2019-08-17', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(274, 54, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(275, 54, 'Tên', 'name', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(276, 54, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(277, 54, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-17', '2019-08-17', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(278, 54, 'ID', 'van_tay_id', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 3, 0, '2019-08-17', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(279, 55, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(280, 55, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(281, 55, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(282, 55, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(283, 55, 'Tiền thu về', 'money', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-08-20', '2019-08-20', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL),
(284, 56, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(285, 56, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(286, 56, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(287, 56, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(288, 56, 'Tiền chi ra', 'money', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-08-20', '2019-08-20', 0, NULL, 1, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 1, NULL),
(289, 51, 'color', 'color', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'color', 0, 0, 3, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(290, 50, 'color', 'color', 'VARCHAR', NULL, 1, 255, 1, NULL, 0, 1, 'color', 0, 0, 0, 0, '2019-08-20', '2019-08-20', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(293, 56, 'Ghi chú', 'note', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'textarea', 0, 0, 4, 0, '2019-08-22', '2019-08-22', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(294, 57, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(295, 57, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(296, 57, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 4, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(297, 57, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 5, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(298, 57, 'banner', 'banner', 'TEXT', NULL, 1, NULL, 1, NULL, 0, 1, 'image_laravel', 0, 0, 3, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(299, 58, 'ID', 'id', 'INT', '', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 1, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(300, 58, 'Tiêu đề', 'name', 'VARCHAR', '', 1, 255, 1, NULL, 0, 1, 'text', 1, 0, 2, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(301, 58, 'Danh mục cha', 'parent_id', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 6, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(302, 58, 'Thứ tự sắp sếp', 'sort_order', 'INT', '0', 1, NULL, 0, NULL, 0, 1, 'text', 0, 0, 7, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(303, 58, 'Tổng chi', 'tong_chi', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 3, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(304, 58, 'Tổng thu', 'tong_thu', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 4, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(305, 58, 'Tổng', 'total', 'INT', NULL, 1, NULL, 1, NULL, 0, 1, 'number', 1, 0, 5, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(306, 47, 'Tháng', 'week', 'INT', '0', 1, NULL, 1, NULL, 0, 1, 'text', 1, 0, 0, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL),
(307, 47, 'Năm', 'year', 'INT', '0', 1, 12, 1, NULL, 0, 1, 'text', 0, 0, 0, 0, '2019-09-01', '2019-09-01', 0, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, '0', NULL, NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tien_phong`
--

CREATE TABLE `tien_phong` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `motel_room_id` int(11) DEFAULT '0',
  `start_date` date DEFAULT NULL,
  `tien_dien` int(11) DEFAULT '0',
  `tien_nuoc` int(11) DEFAULT '0',
  `tien_phong` int(11) DEFAULT '0',
  `tien_wc` int(11) DEFAULT NULL,
  `tien_mang` int(11) DEFAULT '0',
  `tien_dien_chung` int(11) DEFAULT '0',
  `total` int(11) DEFAULT NULL,
  `status_tien_phong_id` int(11) DEFAULT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `week` int(11) DEFAULT '0',
  `year` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tien_phong`
--

INSERT INTO `tien_phong` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `motel_room_id`, `start_date`, `tien_dien`, `tien_nuoc`, `tien_phong`, `tien_wc`, `tien_mang`, `tien_dien_chung`, `total`, `status_tien_phong_id`, `note`, `week`, `year`) VALUES
(1, 'Tháng 8 phòng 101/172', 0, 0, '2019-08-02 04:29:10', '2019-08-19 20:25:24', 13, NULL, 0, 50000, 1750000, 15000, 15000, 15000, 1850000, 1, 'tinh tien nửa tháng do hđ cũ ký từ ngày 15', 8, 2019),
(2, NULL, 0, 0, '2019-08-09 04:29:22', '2019-08-15 03:59:34', 12, NULL, 0, 0, 0, 0, 0, 0, 6400000, 1, NULL, 8, 2019),
(3, NULL, 0, 0, '2019-08-09 04:29:22', '2019-08-10 05:04:10', 11, NULL, 332000, 200000, 3000000, 60000, 100000, 60000, 3680000, 1, '3752000 - 7200 (thang  truoc) = 3680000', 8, 2019),
(4, NULL, 0, 0, '2019-08-09 04:29:25', '2019-08-09 04:58:08', 10, NULL, 996000, 300000, 3500000, 90000, 100000, 90000, 5656000, 1, NULL, 8, 2019),
(5, NULL, 0, 0, '2019-08-09 04:29:28', '2019-08-09 04:54:49', 9, NULL, 68000, 200000, 3000000, 60000, 100000, 60000, 3948000, 1, NULL, 8, 2019),
(6, NULL, 0, 0, '2019-08-09 04:29:29', '2019-08-19 20:25:19', 8, NULL, 0, 0, 0, 0, 0, 0, 4212000, 1, NULL, 8, 2019),
(7, NULL, 0, 0, '2019-08-09 04:29:29', '2019-08-09 04:54:55', 6, NULL, 0, 0, 0, 0, 0, 0, 1628000, 1, NULL, 8, 2019),
(8, NULL, 0, 0, '2019-08-09 04:29:30', '2019-08-09 04:55:02', 7, NULL, 0, 0, 0, 0, 0, 0, 2240000, 1, NULL, 8, 2019),
(9, NULL, 0, 0, '2019-08-09 04:29:31', '2019-08-09 04:55:07', 5, NULL, 500000, 300000, 3000000, 90000, 100000, 90000, 4230000, 1, NULL, 8, 2019),
(10, NULL, 0, 0, '2019-08-09 04:29:32', '2019-08-10 05:09:25', 4, NULL, 256000, 200000, 3300000, 60000, 100000, 60000, 3970000, 1, NULL, 8, 2019),
(11, NULL, 0, 0, '2019-08-09 04:29:36', '2019-08-10 05:07:00', 14, NULL, 1436000, 100000, 3000000, 30000, 100000, 30000, 4690000, 1, NULL, 8, 2019),
(12, NULL, 0, 0, '2019-08-09 04:29:37', '2019-08-09 04:43:25', 3, NULL, 0, 0, 0, 0, 0, 0, 4120000, 1, NULL, 8, 2019),
(13, NULL, 0, 0, '2019-08-09 04:29:38', '2019-08-19 20:25:10', 2, NULL, 100000, 100000, 3000000, 30000, 100000, 30000, 3410000, 1, NULL, 8, 2019),
(14, '001/174', 0, 0, '2019-08-16 19:19:42', '2019-08-16 19:20:51', 15, NULL, 0, 0, 0, 0, 0, 0, 5250000, 1, 'tiền cọc: 5.250.000\r\nTiền nhà tháng 8: 1.750.000', 8, 2019);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `total`
--

CREATE TABLE `total` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tong_chi` int(11) DEFAULT NULL,
  `tong_thu` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `sort_order` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`, `username`, `user_type`, `sort_order`) VALUES
(1, 'tienlq', 'quangtienvkt@gmail.com', '$2y$10$qDSM1xhz.Tk7dgDP1vvIpO7oDFWK7tyqndVivchYpBEHoK62YyvCu', 'SfQBILj1odJeAmWIMsCTrAlAoYN45V5w8F05AKbdaPCHw8ZdkneD3PkkJmzo', '2019-01-30 02:49:15', '2019-01-30 02:49:15', 'tienlq', '1', 0),
(5, 'AnhHT', 'anhht@gmail.com', '$2y$10$7qyJAzC1hEZJP11TFH5GVujI2OvNU/KHyc9X7DBR9Xqf6/F3JOCHO', 'Na51w8Jve2dp1tqNNhYJhFfTrM1wqDLoRH0KVgR0KW6ItnmXiGGnVk3oBLu5', '2019-01-30 02:49:15', '2019-08-19 21:18:20', 'anhht', '1', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `van_tay`
--

CREATE TABLE `van_tay` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `van_tay_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `van_tay`
--

INSERT INTO `van_tay` (`id`, `name`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `van_tay_id`) VALUES
(1, 'Thảo 402/174', 0, 0, '2019-08-16 21:58:51', '2019-08-31 19:30:32', '0130');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `__route`
--

CREATE TABLE `__route` (
  `id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `route_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0'
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
-- Chỉ mục cho bảng `investment`
--
ALTER TABLE `investment`
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
-- Chỉ mục cho bảng `money_collected`
--
ALTER TABLE `money_collected`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `money_spent`
--
ALTER TABLE `money_spent`
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
-- Chỉ mục cho bảng `tien_phong`
--
ALTER TABLE `tien_phong`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `total`
--
ALTER TABLE `total`
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
-- AUTO_INCREMENT cho bảng `investment`
--
ALTER TABLE `investment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
-- AUTO_INCREMENT cho bảng `money_collected`
--
ALTER TABLE `money_collected`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `money_spent`
--
ALTER TABLE `money_spent`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=308;

--
-- AUTO_INCREMENT cho bảng `tien_phong`
--
ALTER TABLE `tien_phong`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `total`
--
ALTER TABLE `total`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `van_tay`
--
ALTER TABLE `van_tay`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `__route`
--
ALTER TABLE `__route`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
