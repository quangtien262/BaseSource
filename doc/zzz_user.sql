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
-- Table structure for table `zzz_user`
--

CREATE TABLE `zzz_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `groupID` int(11) DEFAULT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `userType` tinyint(3) UNSIGNED NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `firstName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `fullname` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  `avatar` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone` int(15) DEFAULT NULL,
  `skype` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `notifyPriceGridOption` int(8) DEFAULT 5 COMMENT 'Lưu lại số grid mà user đã chọn trên màn hinh notify Price',
  `changedHistoryIds` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `delFlg` varchar(2) COLLATE utf8_unicode_ci DEFAULT '0',
  `sort_order` int(11) DEFAULT 0,
  `ten_hang` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `zzz_user`
--

INSERT INTO `zzz_user` (`id`, `groupID`, `username`, `userType`, `password`, `firstName`, `lastName`, `fullname`, `name`, `avatar`, `birthday`, `phone`, `skype`, `email`, `address`, `remember_token`, `notifyPriceGridOption`, `changedHistoryIds`, `created_at`, `updated_at`, `delFlg`, `sort_order`, `ten_hang`) VALUES
(9, 1, 'admin1', 1, '$2y$10$fOBa2/JL4m512c0lzf702OrSKX2S639Zjyswqfh5h2clsHw0IAD42', 'admin1', '', 'admin', 'admin', NULL, NULL, 98765432, 'admin', 'admin@gmail.com', 'N/A', 'j4xDiocg1XRg21c42rE2OfSLZk8bn4RTIuuB2jZOk781AZQPjaLy4tIgwGlW', 10, '145,153,154,183,184,202,203,204,205,206,214,216,218,221,222,223,233,239,254,270,271,272,273,317,552,554,573,581,598,609,610,623,642,643,644,654,669,670,678,689,704,705,706,710,711,712,713,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,', '2017-02-13 04:18:23', '2019-06-12 07:46:51', '0', 0, 0),
(16, NULL, 'kd1', 2, '$2y$10$5j/lG0nqMxk6c/D518VkPuHRcEE46FxzfvfZQ7p5gCtCbvPu42KoO', '', '', 'kd1', 'kd1', NULL, '2018-07-23', 0, 'kd1', '', 'kd1 address', 'CAdxqjanCOncdLEevhD1cVs7zp9mACQNh6NgtRO4sYezTwKuGFxWCJyFFyt1', 9, '214,216,217,218,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,243,247,249,250,252,253,254,256,257,260,261,262,264,265,266,267,268,269,270,271,272,273,277,278,279,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,314,315,317,321,324,325,326,352,364,365,366,367,372,373,374,381,383,384,385,386,387,388,389,390,391,392,393,396,397,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,416,417,418,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,498,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,1,2,3,4,5,6,7,8,', '2018-06-19 16:29:55', '2019-06-02 01:13:15', '0', 0, 0),
(21, NULL, 'a1', 1, '$2y$10$oSvGlcjfdkajAnXE2SszUOd6/PVuQ4WFSd5dj4Qnoqjin396c9tmm', 'a1', 'a1', 'a1', 'a1', NULL, NULL, 0, 'a1', '', '', '2n299npG1rkA3luO5lptRPSSpWVMKpMsVd54Kjh0JQ642rqPTfZMFOFagMGE', 5, NULL, '2018-10-06 08:38:08', '2019-06-02 01:13:23', '1', 0, 0),
(22, NULL, 'm1', 3, '$2y$10$NvHIumx6AVa3uA77LSrwcucPkl2ydZD/zrXlvAU7Z9A0fEqc10ZWy', '', '', 'm1', 'm1', NULL, NULL, 0, 'm1', '', '', 'X4xYoTpfrOnfxboH79ZNlbeLs78UX781pJTH2vOlDfYc3YCiAZm8va3l59sv', 10, '209,210,211,212,213,214,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,254,270,271,272,273,274,275,276,277,278,279,280,281,282,283,291,309,312,317,322,326,332,339,357,358,360,361,364,365,366,370,371,375,376,377,378,379,380,383,384,385,387,388,389,394,395,396,397,402,404,405,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,498,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,534,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,1,2,3,4,5,6,7,8,', '2018-10-06 08:40:21', '2019-06-02 01:13:28', '0', 0, 0),
(36, NULL, 'k1', 2, '$2y$10$o4drU0ehbiCK7r3KHkBNDOOPFrMVaoOIXFFpoJQ6FIwK28xwnV6uu', '', '', 'k1', 'k1', NULL, NULL, 0, 'k1', '', '', 'QFrOKs5YMpzDKZYdKGnLQmOjaYBPwfEYryc3sU9oy2c20vxyxsxOf7IaokiV', 5, '573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,602,603,604,605,606,607,608,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,1,2,3,4,5,6,', '2019-03-15 18:59:46', '2019-06-02 01:13:33', '0', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zzz_user`
--
ALTER TABLE `zzz_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `zzz_user_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zzz_user`
--
ALTER TABLE `zzz_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
