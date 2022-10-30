-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2022 at 07:41 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `adminName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `roomId` int(11) DEFAULT NULL,
  `arrival` datetime NOT NULL,
  `departure` datetime NOT NULL,
  `onCart` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `quantity`, `userId`, `roomId`, `arrival`, `departure`, `onCart`, `createdAt`, `updatedAt`) VALUES
(1, 3, 3, 4, '2022-07-01 10:23:32', '2022-07-01 10:23:32', 0, '2022-07-01 10:23:32', '2022-07-01 10:32:08'),
(2, 4, 3, 5, '2022-07-01 10:23:36', '2022-07-01 10:23:36', 0, '2022-07-01 10:23:36', '2022-07-01 10:32:04'),
(3, 1, 3, 2, '2022-07-01 10:26:21', '2022-07-01 10:26:21', 0, '2022-07-01 10:26:21', '2022-07-01 10:26:21'),
(4, 2, 3, 2, '2022-07-01 10:33:53', '2022-07-01 10:33:53', 0, '2022-07-01 10:33:53', '2022-07-01 10:33:56'),
(5, 3, 3, 4, '2022-07-01 10:33:59', '2022-07-01 10:33:59', 0, '2022-07-01 10:33:59', '2022-07-01 10:33:59'),
(6, 3, 3, 2, '2022-07-01 10:34:08', '2022-07-01 10:34:08', 0, '2022-07-01 10:34:08', '2022-07-01 10:34:08'),
(7, 1, 3, 5, '2022-07-01 10:36:14', '2022-07-01 10:36:14', 0, '2022-07-01 10:36:14', '2022-07-01 10:36:14'),
(8, 1, 3, 5, '2022-07-01 10:36:59', '2022-07-01 10:36:59', 0, '2022-07-01 10:36:59', '2022-07-01 10:36:59'),
(9, 4, 3, 5, '2022-07-01 10:42:21', '2022-07-01 10:42:21', 0, '2022-07-01 10:42:21', '2022-07-01 10:42:21'),
(10, 4, 3, 4, '2022-07-01 10:42:26', '2022-07-01 10:42:26', 0, '2022-07-01 10:42:26', '2022-07-01 10:42:26'),
(11, 1, 3, 4, '2022-07-01 12:00:48', '2022-07-01 12:00:48', 0, '2022-07-01 12:00:48', '2022-07-01 12:00:48'),
(12, 5, 3, 5, '2022-07-01 12:00:51', '2022-07-01 12:00:51', 0, '2022-07-01 12:00:51', '2022-07-01 12:00:51');

-- --------------------------------------------------------

--
-- Table structure for table `cartorder`
--

CREATE TABLE `cartorder` (
  `id` int(11) NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cartorder`
--

INSERT INTO `cartorder` (`id`, `cartId`, `orderId`, `createdAt`, `updatedAt`) VALUES
(1, 9, 10, '2022-07-01 10:42:33', '2022-07-01 10:42:33'),
(2, 10, 10, '2022-07-01 10:42:34', '2022-07-01 10:42:34'),
(3, 11, 11, '2022-07-01 12:00:54', '2022-07-01 12:00:54'),
(4, 12, 11, '2022-07-01 12:00:54', '2022-07-01 12:00:54'),
(5, 11, 12, '2022-07-01 12:04:28', '2022-07-01 12:04:28'),
(6, 12, 12, '2022-07-01 12:04:28', '2022-07-01 12:04:28');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `categoryName`, `createdAt`, `updatedAt`) VALUES
(1, 'Standard room', '2022-06-25 17:13:36', '2022-06-25 17:13:36'),
(3, 'Suite', '2022-06-25 17:13:36', '2022-06-25 17:13:36'),
(4, 'Deluxe room', '2022-06-25 17:13:36', '2022-06-25 17:13:36'),
(5, 'Economy', '2022-06-25 17:15:53', '2022-06-25 17:15:53');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `status` enum('pending','reject','success') NOT NULL DEFAULT 'pending',
  `adminAction` enum('cancel','accept','pending') DEFAULT 'pending',
  `total` float DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `code`, `date`, `status`, `adminAction`, `total`, `payment`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'u8jbo', '2022-07-01 10:23:40', 'pending', 'pending', 1732.5, 'cash', 3, '2022-07-01 10:23:40', '2022-07-01 10:23:40'),
(2, '4vly8', '2022-07-01 10:26:24', 'pending', 'pending', 420, 'cash', 3, '2022-07-01 10:26:24', '2022-07-01 10:26:24'),
(3, 'wssm8', '2022-07-01 10:30:17', 'pending', 'pending', 420, 'cash', 3, '2022-07-01 10:30:17', '2022-07-01 10:30:17'),
(4, 'sxya7', '2022-07-01 10:34:02', 'pending', 'pending', 1785, 'cash', 3, '2022-07-01 10:34:02', '2022-07-01 10:34:02'),
(5, 'ulapk', '2022-07-01 10:34:11', 'pending', 'pending', 1260, 'cash', 3, '2022-07-01 10:34:11', '2022-07-01 10:34:11'),
(6, 'qihpl', '2022-07-01 10:36:15', 'pending', 'pending', 367.5, 'cash', 3, '2022-07-01 10:36:15', '2022-07-01 10:36:15'),
(7, 'j3h6r', '2022-07-01 10:36:47', 'pending', 'pending', 367.5, 'cash', 3, '2022-07-01 10:36:47', '2022-07-01 10:36:47'),
(8, 'z8vs1', '2022-07-01 10:37:00', 'pending', 'pending', 367.5, 'cash', 3, '2022-07-01 10:37:00', '2022-07-01 10:37:00'),
(9, 'xnoh1', '2022-07-01 10:42:07', 'pending', 'pending', 367.5, 'cash', 3, '2022-07-01 10:42:07', '2022-07-01 10:42:07'),
(10, '2z3eh', '2022-07-01 10:42:33', 'pending', 'pending', 2730, 'cash', 3, '2022-07-01 10:42:33', '2022-07-01 10:42:33'),
(11, 'bbfnq', '2022-07-01 12:00:54', 'pending', 'pending', 1417.5, 'cash', 3, '2022-07-01 12:00:54', '2022-07-01 12:00:54'),
(12, '1ym7h', '2022-07-01 12:04:28', 'pending', 'pending', 1417.5, 'cash', 3, '2022-07-01 12:04:28', '2022-07-01 12:04:28');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `roomName` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `reserve` int(11) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `roomName`, `detail`, `description`, `price`, `reserve`, `hot`, `active`, `image`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(1, 'VIP Room', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 500, 10, 0, 1, 'room1.jpg', 4, '2022-06-25 22:29:15', '2022-06-25 22:29:15'),
(2, 'Royal Room', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 400, 10, 1, 1, 'room2.jpg', 1, '2022-06-25 22:29:15', '2022-06-25 22:29:15'),
(3, 'Luxury Room', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 700, 10, 0, 1, 'room3.jpg', 4, '2022-06-25 22:29:15', '2022-06-25 22:29:15'),
(4, 'Standard Room', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 300, 10, 1, 1, 'room4.jpg', 1, '2022-06-25 22:29:15', '2022-06-25 22:29:15'),
(5, 'Business Room', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 350, 10, 1, 1, 'room5.jpg', 5, '2022-06-25 22:29:15', '2022-06-25 22:29:15');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('1migration-create-category.js'),
('2migration-create-room.js'),
('3migration-create-user.js'),
('4migration-create-cart.js'),
('5migration-create-order.js'),
('6migration-create-cart-order.js'),
('7migration-create-admin.js');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` enum('pending','reject','success') NOT NULL DEFAULT 'pending',
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `userName`, `email`, `password`, `address`, `phone`, `status`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Huy', 'huy@gmail.com', '$2b$10$/rvDvlCxLZMRRusQoia5.eMTBQRjNYjA1kztStn1o4aEYjROfBVi2', '12 Hàm Nghi', '0923423120', 'pending', 'dai.jpg', '2022-06-14 15:53:01', '2022-06-16 16:32:37'),
(3, 'Đại', 'dai@gmail.com', '$2b$10$TXpis8pQymkKvpn2DzqBlujvf.1t35TpmAjsNSpYl/ZgdNvQ5vN96', '45 Lý Thái Tổ', '0912321312', 'pending', 'dai.jpg', '2022-06-14 17:07:28', '2022-06-14 18:01:53'),
(4, 'Đức', 'duc@gmail.com', '$2b$10$rDkZCSQhJxeZisraS1agHuwsVYihmn/ThH5Ik9QXp83.8wYaD7.Sq', '35 Nguyễn Văn Linh', '0346932432', 'pending', 'dai.jpg', '2022-06-14 17:07:33', '2022-06-14 18:01:59'),
(5, 'Chương', 'chuong@gmail.com', '$2b$10$cxqsW87VtgJkpIj.BwMYe.wV9TDPjZI2Uri/dvYhvC9YYSw6O1gbW', '56 Trần Duy Hưng', '0912321320', 'pending', 'dai.jpg', '2022-06-14 17:07:35', '2022-06-14 18:02:08'),
(6, 'Quảng', 'quang@gmail.com', '$2b$10$8HEwR/Tvpf6RzyF7Xr3UbevkwPTXqPUuN1aZLqJ0K4n3IwiSFgySG', '45 Nguyễn Huệ', '0912321323', 'pending', 'dai.jpg', '2022-06-14 17:07:38', '2022-06-14 18:07:58'),
(7, 'Nhân', 'nhan@gmail.com', '$2b$10$RlseDdsXuWqad5xcju4rPOfk240Ar.jE5C2SIPGRLzWaiMJCQzF4i', '67 Trần Hưng Đạo', '0912312312', 'pending', 'dai.jpg', '2022-06-14 17:10:46', '2022-06-15 21:01:17'),
(8, 'ada', 'asd@g.c', '$2b$10$1oapbUwvqwZ901rWfzM4IOZguF3PA92JnSrLLD3AsIFcoWPhPuyiW', '', '12', 'pending', 'dai.jpg', '2022-06-16 23:23:41', '2022-06-16 23:23:41'),
(9, 'asd', 'asdas@gmail.com', '$2b$10$F1hEWw7Y8NxOypWVRYF7bO5sttMaezTTLnw0ESHAOlDuucc7oFJiq', 'asd', 'dsa', 'pending', 'dai.jpg', '2022-06-18 20:20:10', '2022-06-18 20:20:10'),
(10, 'asd', 'a21sdas@gmail.com', '$2b$10$RH5ojqvswi6qutn.AFG6O./REu5IOOZHjnyVXeiXpT2E5g4FsUfkW', 'asdss', 'dsa', 'success', 'vip.jpg', '2022-06-18 20:48:23', '2022-06-18 21:14:06'),
(12, 'asd', 'zekromdb@gmail.com', '$2b$10$UTNMV78kqA9BjW/M.OAzfefAXVdMcKXvJVR2pEe15.NNleE//DrxW', 'asdss', 'dsa', 'pending', 'dai.jpg', '2022-06-18 21:16:09', '2022-06-18 21:16:09'),
(15, 'asd', 'sss@gmail.com', '$2b$10$FaLPVMd6QHeiOqxDyU8HlOho5RrAB9Wloo7tTe21UgUp7XPDTG3OS', 'asdss', 'dsa', 'pending', 'dai.jpg', '2022-06-18 21:19:13', '2022-06-18 21:19:13'),
(16, 'asd', 'sss@gmail.com', '$2b$10$lgkkZI2B2zhA4WAsDmipduANyeXl4V1myt8DKLyQ8WXZT.hHPoAfO', 'asdss', 'dsa', 'pending', 'dai.jpg', '2022-06-18 21:19:49', '2022-06-18 21:19:49'),
(17, 'asd', 'sss@gmail.com', '$2b$10$efNwrewKKQpbW3XJbbUJB.iD9s7O409jEUmBVglJkb0rBUEC093IS', 'asdss', 'dsa', 'pending', 'dai.jpg', '2022-06-18 21:21:02', '2022-06-18 21:21:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `roomId` (`roomId`);

--
-- Indexes for table `cartorder`
--
ALTER TABLE `cartorder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cartId` (`cartId`),
  ADD KEY `orderId` (`orderId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cartorder`
--
ALTER TABLE `cartorder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`roomId`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cartorder`
--
ALTER TABLE `cartorder`
  ADD CONSTRAINT `cartorder_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cartorder_ibfk_2` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
