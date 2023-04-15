-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2023 at 10:41 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_details`
--

CREATE TABLE `academic_details` (
  `C1` varchar(20) DEFAULT NULL,
  `C2` varchar(20) DEFAULT NULL,
  `C3` varchar(20) DEFAULT NULL,
  `C4` varchar(20) DEFAULT NULL,
  `aw1` varchar(100) DEFAULT NULL,
  `aw2` varchar(100) DEFAULT NULL,
  `aw3` varchar(100) DEFAULT NULL,
  `pap1` varchar(100) DEFAULT NULL,
  `pap2` varchar(100) DEFAULT NULL,
  `pap3` varchar(100) DEFAULT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `academic_details`
--

INSERT INTO `academic_details` (`C1`, `C2`, `C3`, `C4`, `aw1`, `aw2`, `aw3`, `pap1`, `pap2`, `pap3`, `email`) VALUES
('FLIS', 'FINTECH', 'BPM', 'UMC', '10 CGPA', 'Rank 1 in JEE Advanced 2021', 'Got scholarship for scoring 10 cgpa in 1st semester', 'IEEE Report Tower of Hanoi', 'IEEE Report count all permutations', 'IEEE Report Bubble Sort', 'iib2021007@iiita.ac.in'),
('Operating System', 'DBMS', 'OOM', '', 'Rank 4982 in JEE Mains 2021', 'Rank 0 in JEE Advanced 2021', 'Got scholarship for scoring 9 cgpa in 1st semester', 'IEEE Report Tower of Hanoi', 'IEEE Report count all permutations', '', 'iib2021038@iiita.ac.in'),
('Operating System', 'DBMS', 'Computer Networks', 'COA', 'Rank 1 in class 10th boards from school', 'Rank 671 in JEE Advanced 2021', 'kjsdfgakjfgkjgfu', 'Breast Cancer prediction accuracy increaser', 'IEEE Report count all permutations', '', 'iit2021142@iiita.ac.in'),
('Operating System', 'DBMS', 'Computer Networks', 'UMC', '9.99 CGPA', 'Rank 1 in JEE Advanced 2021', 'Olympiad Topper', 'IEEE', 'IEEE Report count all permutations', 'IEEE Report Bubble Sort', 'iit2021209@iiita.ac.in'),
('Operating System', 'DBMS', 'Computer Networks', 'Software Engineering', 'Rank 1 in class 10th boards from school', 'Rank 671 in JEE Advanced 2021', 'Got scholarship for scoring 9 cgpa in 1st semester', 'Breast Cancer prediction accuracy increaser', 'LOrem ipsumkgk', 'sakgkdkg', 'iit2021223@iiita.ac.in'),
(NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'iit2021261@iiita.ac.in'),
('DSA', 'DBMS', 'Computer Networks', 'Software Engineering', 'Rank 8031 in JEE Mains 2021', 'Rank 4326 in JEE Advanced 2021', '', '', '', '', 'iit2021505@iiita.ac.in');

-- --------------------------------------------------------

--
-- Table structure for table `admin_credentials`
--

CREATE TABLE `admin_credentials` (
  `UserName` varchar(20) NOT NULL,
  `email` varchar(25) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Securityq` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_credentials`
--

INSERT INTO `admin_credentials` (`UserName`, `email`, `Password`, `Securityq`) VALUES
('walia', 'walia@iiita.ac.in', 'PRATHAM', 'walia');

-- --------------------------------------------------------

--
-- Table structure for table `admin_panel`
--

CREATE TABLE `admin_panel` (
  `id` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `req_type` varchar(50) NOT NULL,
  `doc_link` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_panel`
--

INSERT INTO `admin_panel` (`id`, `email`, `req_type`, `doc_link`) VALUES
(12, 'iit2021223@iiita.ac.in', 'Edit academic details', 'https://drive.google.com/drive/folders/1R-f_ozAgC2GhMS4onINRWRFuTYbiYYvA'),
(13, 'iit2021223@iiita.ac.in', 'Edit non-academic details', 'https://drive.google.com/drive/folders/1R-f_ozAgC2GhMS4onINRWRFuTYbiYYvA'),
(17, 'iit2021505@iiita.ac.in', 'Edit non-academic details', 'https://drive.google.com/drive/folders/1R-f_ozAgC2GhMS4onINRWRFuTYbiYYvA'),
(23, 'iit2021209@iiita.ac.in', 'Edit non-academic details', 'https://drive.google.com/drive/folders/1R-f_ozAgC2GhMS4onINRWRFuTYbiYYvA');

-- --------------------------------------------------------

--
-- Table structure for table `non_academic_details`
--

CREATE TABLE `non_academic_details` (
  `email` varchar(30) NOT NULL,
  `p1` varchar(500) DEFAULT NULL,
  `p2` varchar(500) DEFAULT NULL,
  `p3` varchar(500) DEFAULT NULL,
  `p4` varchar(500) DEFAULT NULL,
  `cp1` varchar(100) DEFAULT NULL,
  `cp2` varchar(100) DEFAULT NULL,
  `cpa1` varchar(500) DEFAULT NULL,
  `cpa2` varchar(500) DEFAULT NULL,
  `cpa3` varchar(500) DEFAULT NULL,
  `ha1` varchar(500) DEFAULT NULL,
  `ha2` varchar(500) DEFAULT NULL,
  `cca1` varchar(500) DEFAULT NULL,
  `cca2` varchar(500) DEFAULT NULL,
  `cca3` varchar(500) DEFAULT NULL,
  `cca4` varchar(500) DEFAULT NULL,
  `cca5` varchar(500) DEFAULT NULL,
  `i1` varchar(500) DEFAULT NULL,
  `i2` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `non_academic_details`
--

INSERT INTO `non_academic_details` (`email`, `p1`, `p2`, `p3`, `p4`, `cp1`, `cp2`, `cpa1`, `cpa2`, `cpa3`, `ha1`, `ha2`, `cca1`, `cca2`, `cca3`, `cca4`, `cca5`, `i1`, `i2`) VALUES
('iib2021007@iiita.ac.in', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('iib2021038@iiita.ac.in', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('iit2021142@iiita.ac.in', 'Library Management System /Node Js / Complete / DBMS', 'BDA Lab/Node JS/ Ongoing/ SE', 'Plantopedia / NodeJs, MySQL, HTML, CSS, JS/ Coming Soon / SE', '', 'https://leetcode.com/rising_str6/', 'https://codeforces.com/profile/Rising_str6', 'Rank350', 'Global rank 350 on shubhcode', 'Created new programming language', 'Participated in Google Cloud India Hackathon in March 2023', '', 'Chess rating 1500 on Chess.com', 'Badminton', 'Anime', 'UX Designer', '', '', ''),
('iit2021209@iiita.ac.in', 'Portfolio Management System / NodeJs, MySQL, HTML, CSS, JS/ Work in Progress / SE', 'BDA Lab/Node JS/ Ongoing/ SE', 'Plantopedia / NodeJs, MySQL, HTML, CSS, JS/ Coming Soon / SE', 'Library Management System / NodeJs /DBMS', '', '', 'ICPC AIR 1', 'GSOC in First Year', 'Kaggle Winner', 'Participated in GSOC', 'Kickstart', 'Chess rating 1500 on Chess.com', 'Body Builder', 'Soikat defeated by Me - WWE  ', '', '', 'SKG@intern', 'GS@intern'),
('iit2021223@iiita.ac.in', 'Portfolio Management System / NodeJs, MySQL, HTML, CSS, JS/ Work in Progress / SE', 'Airline  Management System / Java, MySQL, JDBC/ Done / OOM', 'Plantopedia / NodeJs, MySQL, HTML, CSS, JS/ Coming Soon / SE', '', 'https://leetcode.com/rising_str6/', 'https://codeforces.com/profile/Rising_str6', ' Global Rank 235(out of 16009 participants) in Round 769(Div. 2) Codeforces', 'Global Rank 140(out of 10950 participants) in Round D, 2021 Kickstart', 'Global Rank 481 in Google Hashcode 2022', 'Participated in Google Cloud India Hackathon in March 2023', 'Participated in HINT 2k22 ', 'Interned with Crypso to spread awarness about crypto and blockchain', 'Worked with t4techmedia as a content writer on web-3 topics', '', '', '', '', ''),
('iit2021261@iiita.ac.in', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('iit2021505@iiita.ac.in', 'Portfolio Management System / NodeJs, MySQL, HTML, CSS, JS/ Work in Progress / SE', 'To Do List', 'digital clock', '', 'https://leetcode.com/rising_str6/', 'https://codeforces.com/profile/Rising_str6', ' Global Rank 235(out of 16009 participants) in Round 769(Div. 2) Codeforces', 'Global Rank 140(out of 10950 participants) in Round D, 2021 Kickstart', '', 'Participated in Google Cloud India Hackathon in March 2023', '', 'Interned with Crypso to spread awarness about crypto and blockchain', '', 'Silver medal in Asmita, Chess 2023', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `name` varchar(30) NOT NULL,
  `review` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`name`, `review`) VALUES
('Pratham Walia', 'Very useful site for students of IIITA'),
('Sk Sahil', 'very good experience'),
('Shubendra Gautam', 'Noice');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `one` varchar(20) DEFAULT NULL,
  `two` varchar(20) DEFAULT NULL,
  `three` varchar(20) DEFAULT NULL,
  `four` varchar(20) DEFAULT NULL,
  `five` varchar(20) DEFAULT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`one`, `two`, `three`, `four`, `five`, `email`) VALUES
('C++ 90', 'Java 60', 'NodeJS 50', 'SQL 100', 'Python 70', 'iib2021007@iiita.ac.in'),
(NULL, NULL, NULL, NULL, NULL, 'iib2021038@iiita.ac.in'),
(NULL, NULL, NULL, NULL, NULL, 'iit2021142@iiita.ac.in'),
('C++ 90', 'Java 60', 'NodeJS 75', 'SQL 85', 'Python 100', 'iit2021209@iiita.ac.in'),
(NULL, NULL, NULL, NULL, NULL, 'iit2021223@iiita.ac.in'),
('C++ 90', 'Java 60', 'NodeJS 75', 'SQL 85', '', 'iit2021261@iiita.ac.in'),
('C++ 90', 'HTML 60', 'Node Js 40', '', '', 'iit2021505@iiita.ac.in');

-- --------------------------------------------------------

--
-- Table structure for table `student_basic`
--

CREATE TABLE `student_basic` (
  `name` varchar(30) NOT NULL,
  `role` varchar(20) NOT NULL,
  `about_me` varchar(600) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `cur_sem` varchar(30) NOT NULL,
  `cur_cgpa` varchar(20) NOT NULL,
  `ten_marks` varchar(100) NOT NULL,
  `twelve_marks` varchar(100) NOT NULL,
  `linkedin` varchar(100) DEFAULT NULL,
  `twitter` varchar(100) DEFAULT NULL,
  `github` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_basic`
--

INSERT INTO `student_basic` (`name`, `role`, `about_me`, `phone`, `email`, `address`, `cur_sem`, `cur_cgpa`, `ten_marks`, `twelve_marks`, `linkedin`, `twitter`, `github`) VALUES
('Thakur Aman', 'Web Developer', 'I started programming almost an year ago. I have learnt a lot of skills in the mean time like C++, Java, JavaScript, HTML, CSS, NodeJS, MySQL. I have made some projects too while learning all these stuff.', '7634823662', 'iib2021007@iiita.ac.in', 'IIITA BH5, Jhalwa, Prayagraj-211015', '4th & IT-BI', '10', '92', '82', 'https://www.linkedin.com/in/shubhendra-gautam/', 'https://twitter.com/Maddogsquare', 'https://github.com/Risingstr6'),
('sk sahil', 'Web Developer', 'I started programming almost an year ago. I have learnt a lot of skills in the mean time like C++, Java, JavaScript, HTML, CSS, NodeJS, MySQL. I have made some projects too while learning all these stuff.', '9874435806', 'iib2021038@iiita.ac.in', 'IIITA BH5, Jhalwa, Prayagraj-211015', '4th & IT-BI', '8.06', '96.8', '97.25', 'https://www.linkedin.com/in/shubhendra-gautam/', 'https://twitter.com/Maddogsquare', 'https://github.com/Risingstr6'),
('Shubendra Gautam', 'Android Developer', 'I started programming almost an year ago. I have learnt a lot of skills in the mean time like C++, Java, JavaScript, HTML, CSS, NodeJS, MySQL. I have made some projects too while learning all these stuff.', '9911224444', 'iit2021142@iiita.ac.in', 'IIITA BH1, Jhalwa, Prayagraj-211015', '4th IT', '7.61', '95', '94', 'https://www.linkedin.com/in/shubhendra-gautam/', 'https://twitter.com/Maddogsquare', 'https://github.com/Risingstr6'),
('CHANDAN KUMAR', 'Data analyst', 'DATA SCIENTIST', '8789629375', 'iit2021209@iiita.ac.in', 'IIITA BH1, Jhalwa, Prayagraj-211015', '4', '9.99', '92.2', '88.8', 'https://www.linkedin.com/in/shubhendra-gautam/', 'https://twitter.com/Maddogsquare', 'https://github.com/chandan-56'),
('Sarthak', 'Web Developer', 'I started programming almost an year ago. I have learnt a lot of skills in the mean time like C++, Java, JavaScript, HTML, CSS, NodeJS, MySQL. I have made some projects too while learning all these stuff.', '06545636357', 'iit2021223@iiita.ac.in', 'IIITA BH5, Jhalwa, Prayagraj-211015', '4th & IT-BI', '10', '90', '97.25', 'hello', 'https://twitter.com/Maddogsquare', 'Risingstr6'),
('Saikat Sadhukhan', 'NodeJS Developer', 'I started programming almost an year ago. I have learnt a lot of skills in the mean time like C++, Java, JavaScript, HTML, CSS, NodeJS, MySQL. I have made some projects too while learning all these stuff.', '06291144327', 'iit2021261@iiita.ac.in', 'IIITA BH1, Jhalwa, Prayagraj-211015', '4th IT', '8.06', '96.8', '97.25', 'https://www.linkedin.com/in/shubhendra-gautam/', 'https://twitter.com/Maddogsquare', 'https://github.com/Risingstr6'),
('Rhythm jain', 'NodeJS Developer', 'I started programming almost an year ago. I have learnt a lot of skills in the mean time like C++, Java, JavaScript, HTML, CSS, NodeJS, MySQL. I have made some projects too while learning all these stuff.', '8447585164', 'iit2021505@iiita.ac.in', 'IIITA BH1, Jhalwa, Prayagraj-211015', '4th IT', '8.06', '96.8', '96.8', 'rhythm/linked/in', 'https://twitter.com/Maddogsquare', 'https://github.com/Risingstr6');

-- --------------------------------------------------------

--
-- Table structure for table `student_credentials`
--

CREATE TABLE `student_credentials` (
  `UserName` varchar(20) NOT NULL,
  `email` varchar(23) NOT NULL,
  `Password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_credentials`
--

INSERT INTO `student_credentials` (`UserName`, `email`, `Password`) VALUES
('Thakur Aman', 'iib2021007@iiita.ac.in', '$2a$08$NMUbvKajfhfX1CWava.YOeyAvoyEusHYOJ9/nM91x.61CVUvp.T1e'),
('Sk Sahil', 'iib2021038@iiita.ac.in', '$2a$08$kGT5j.ZALeQ0r0mFfEYCcuhA7k9qWMXRMqnE62XsPNO8HAKQjAbjS'),
('Shubendra', 'iit2021142@iiita.ac.in', '$2a$08$UCKYN47DbpQoiBs/s45LR.4v7m26HDnpTGtXrRkFf0MgGxFJLDX/C'),
('chandan', 'iit2021209@iiita.ac.in', '$2a$08$vndtlsEWwCEovNrJh5oFVu53ivZX7elzpwzv/41ayi1uSrn3r3pja'),
('Sarthak', 'iit2021223@iiita.ac.in', '$2a$08$ZDzYuockgYQgDORgjNZTOO95JNCY5F.gZSdXpaLQMkVG8j8dmhcq2'),
('Saikat', 'iit2021261@iiita.ac.in', '$2a$08$dxQG6lO2AnCb3ZQ.rd/XGuoNHTwOENhZyXHhEwTWWbaZsythULcsG'),
('rhythm', 'iit2021505@iiita.ac.in', '$2a$08$mKDyVM3DD6mGezQyMuIStuUL1TIUzEjagFoU74rJ/RXA9y.4.vdgm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_details`
--
ALTER TABLE `academic_details`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `admin_credentials`
--
ALTER TABLE `admin_credentials`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `admin_panel`
--
ALTER TABLE `admin_panel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `non_academic_details`
--
ALTER TABLE `non_academic_details`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `student_basic`
--
ALTER TABLE `student_basic`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `student_credentials`
--
ALTER TABLE `student_credentials`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_panel`
--
ALTER TABLE `admin_panel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `academic_details`
--
ALTER TABLE `academic_details`
  ADD CONSTRAINT `academic_details_ibfk_1` FOREIGN KEY (`email`) REFERENCES `student_credentials` (`email`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `admin_panel`
--
ALTER TABLE `admin_panel`
  ADD CONSTRAINT `admin_panel_ibfk_1` FOREIGN KEY (`email`) REFERENCES `student_credentials` (`email`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `non_academic_details`
--
ALTER TABLE `non_academic_details`
  ADD CONSTRAINT `non_academic_details_ibfk_1` FOREIGN KEY (`email`) REFERENCES `student_credentials` (`email`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`email`) REFERENCES `student_credentials` (`email`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `student_basic`
--
ALTER TABLE `student_basic`
  ADD CONSTRAINT `student_basic_ibfk_1` FOREIGN KEY (`email`) REFERENCES `student_credentials` (`email`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
