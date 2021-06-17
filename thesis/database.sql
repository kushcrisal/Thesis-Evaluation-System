-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2020 at 03:24 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thesis`
--
CREATE DATABASE IF NOT EXISTS `thesis` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `thesis`;

-- --------------------------------------------------------

--
-- Table structure for table `date`
--

CREATE TABLE `date` (
  `Dateid` int(10) NOT NULL,
  `Year` int(10) NOT NULL,
  `Month` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `date`
--

INSERT INTO `date` (`Dateid`, `Year`, `Month`) VALUES
(24, 2073, 'Chaitra');

-- --------------------------------------------------------

--
-- Table structure for table `externalteachertable`
--

CREATE TABLE `externalteachertable` (
  `ext_Id` int(10) NOT NULL,
  `ext_Name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `externalteachertable`
--

INSERT INTO `externalteachertable` (`ext_Id`, `ext_Name`) VALUES
(4, 'Roshan Regmi'),
(5, 'Om Bikram Thapa'),
(6, 'Krishna Prasad Bhandari');

-- --------------------------------------------------------

--
-- Table structure for table `finalmarks`
--

CREATE TABLE `finalmarks` (
  `id` int(11) NOT NULL,
  `mid_supervisor` float NOT NULL,
  `mid_external` float NOT NULL,
  `mid_committee` float NOT NULL,
  `final_supervisor` float NOT NULL,
  `final_external` float NOT NULL,
  `final_committee` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `finalmarks`
--

INSERT INTO `finalmarks` (`id`, `mid_supervisor`, `mid_external`, `mid_committee`, `final_supervisor`, `final_external`, `final_committee`) VALUES
(24, 0, 10, 7.96, 4, 8, 14),
(30, 18, 8, 5.6, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `final_committee_marks`
--

CREATE TABLE `final_committee_marks` (
  `final_com_marksid` int(11) NOT NULL,
  `Teacherid` int(10) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Quality_of_presentation` int(10) DEFAULT NULL,
  `ProblemFormulation_identification_conceptualization` int(10) DEFAULT NULL,
  `Methodology_Approach` int(10) DEFAULT NULL,
  `Literature_review` int(10) DEFAULT NULL,
  `Understanding_of_thesiswork_and_relatedtheory` int(10) DEFAULT NULL,
  `AnsweringQuestions` int(10) DEFAULT NULL,
  `Completeness_of_thesis_work` int(10) DEFAULT NULL,
  `Planning_of_organization_of_thesiswork` int(10) DEFAULT NULL,
  `Originality_of_research_Scholars_contribution` int(10) DEFAULT NULL,
  `Conclusions_Suggestions_Recommendation` int(10) DEFAULT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `final_committee_marks`
--

INSERT INTO `final_committee_marks` (`final_com_marksid`, `Teacherid`, `id`, `Quality_of_presentation`, `ProblemFormulation_identification_conceptualization`, `Methodology_Approach`, `Literature_review`, `Understanding_of_thesiswork_and_relatedtheory`, `AnsweringQuestions`, `Completeness_of_thesis_work`, `Planning_of_organization_of_thesiswork`, `Originality_of_research_Scholars_contribution`, `Conclusions_Suggestions_Recommendation`, `total`) VALUES
(2, 137, 24, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 70);

--
-- Triggers `final_committee_marks`
--
DELIMITER $$
CREATE TRIGGER `c1` AFTER UPDATE ON `final_committee_marks` FOR EACH ROW UPDATE `finalmarks` set `final_committee`=(SELECT (final_committee/marksdensity.total*AVG(final_committee_marks.total)) FROM `marksdensity`,final_committee_marks where final_committee_marks.id=new.id) WHERE id=new.id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `c2` AFTER DELETE ON `final_committee_marks` FOR EACH ROW UPDATE `finalmarks` set `final_committee`=(SELECT (final_committee/marksdensity.total*AVG(final_committee_marks.total)) FROM `marksdensity`,final_committee_marks where final_committee_marks.id=old.id) WHERE id=old.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `final_external_marks`
--

CREATE TABLE `final_external_marks` (
  `final_Ext_marksid` int(11) NOT NULL,
  `ext_Id` int(10) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Standard_of_technicallanguage_expression_format` int(10) DEFAULT NULL,
  `ProblemFormulation_researchIden_formulation_Research_topic` int(10) DEFAULT NULL,
  `Selection_of_researchMethodology` int(10) DEFAULT NULL,
  `Quality_of_dataProcess_resultInterpretation` int(10) DEFAULT NULL,
  `Matching_Finding_with_objectives` int(10) DEFAULT NULL,
  `LogicReasoning_Conclusions_interpretation` int(10) DEFAULT NULL,
  `Quality_of_abstract` int(10) DEFAULT NULL,
  `Originality_of_research` int(10) DEFAULT NULL,
  `Scope_of_research` int(10) DEFAULT NULL,
  `Answer_to_examinerQuestion` int(10) DEFAULT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `final_external_marks`
--

INSERT INTO `final_external_marks` (`final_Ext_marksid`, `ext_Id`, `id`, `Standard_of_technicallanguage_expression_format`, `ProblemFormulation_researchIden_formulation_Research_topic`, `Selection_of_researchMethodology`, `Quality_of_dataProcess_resultInterpretation`, `Matching_Finding_with_objectives`, `LogicReasoning_Conclusions_interpretation`, `Quality_of_abstract`, `Originality_of_research`, `Scope_of_research`, `Answer_to_examinerQuestion`, `total`) VALUES
(24, 5, 24, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 40);

--
-- Triggers `final_external_marks`
--
DELIMITER $$
CREATE TRIGGER `c12` AFTER DELETE ON `final_external_marks` FOR EACH ROW UPDATE `finalmarks` set `final_external`=(SELECT (final_external/marksdensity.total*final_external_marks.total) FROM `marksdensity`,final_external_marks where final_external_marks.id=old.id) WHERE id=old.id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `c13` AFTER UPDATE ON `final_external_marks` FOR EACH ROW UPDATE `finalmarks` set `final_external`=(SELECT (final_external/marksdensity.total*final_external_marks.total) FROM `marksdensity`,final_external_marks where final_external_marks.id=new.id) WHERE id=new.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `final_supervisor_marks`
--

CREATE TABLE `final_supervisor_marks` (
  `final_Sup_marksid` int(11) NOT NULL,
  `Teacherid` int(10) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Regularity_of_works` int(10) DEFAULT NULL,
  `Understanding_of_thesiswork_and_relatedtheory` int(10) DEFAULT NULL,
  `StudentEffort_and_performance` int(10) DEFAULT NULL,
  `Organization_of_study` int(10) DEFAULT NULL,
  `TimelyCompletion_of_ThesisWork` int(10) DEFAULT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `final_supervisor_marks`
--

INSERT INTO `final_supervisor_marks` (`final_Sup_marksid`, `Teacherid`, `id`, `Regularity_of_works`, `Understanding_of_thesiswork_and_relatedtheory`, `StudentEffort_and_performance`, `Organization_of_study`, `TimelyCompletion_of_ThesisWork`, `total`) VALUES
(24, 136, 24, 4, 4, 4, 4, 4, 20);

--
-- Triggers `final_supervisor_marks`
--
DELIMITER $$
CREATE TRIGGER `c7` AFTER UPDATE ON `final_supervisor_marks` FOR EACH ROW UPDATE `finalmarks` set `final_supervisor`=(SELECT (final_supervisor/marksdensity.total*final_supervisor_marks.total) FROM `marksdensity`,final_supervisor_marks where final_supervisor_marks.id=new.id) WHERE id=new.id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `c8` AFTER DELETE ON `final_supervisor_marks` FOR EACH ROW UPDATE `finalmarks` set `final_supervisor`=(SELECT (final_supervisor/marksdensity.total*final_supervisor_marks.total) FROM `marksdensity`,final_supervisor_marks where final_supervisor_marks.id=old.id)
WHERE id=old.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `marksdensity`
--

CREATE TABLE `marksdensity` (
  `id` int(11) NOT NULL,
  `mid_supervisor` int(11) NOT NULL,
  `mid_external` int(11) NOT NULL,
  `mid_committee` int(11) NOT NULL,
  `final_supervisor` int(11) NOT NULL,
  `final_external` int(11) NOT NULL,
  `final_committee` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marksdensity`
--

INSERT INTO `marksdensity` (`id`, `mid_supervisor`, `mid_external`, `mid_committee`, `final_supervisor`, `final_external`, `final_committee`, `total`) VALUES
(1, 20, 10, 10, 20, 20, 20, 100);

-- --------------------------------------------------------

--
-- Table structure for table `mid_committee_marks`
--

CREATE TABLE `mid_committee_marks` (
  `mid_com_marksid` int(11) NOT NULL,
  `Teacherid` int(10) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Quality_of_presentation` int(10) DEFAULT NULL,
  `ProblemFormulation_identification_conceptualization` int(10) DEFAULT NULL,
  `Methodology_Approach` int(10) DEFAULT NULL,
  `Literature_review` int(10) DEFAULT NULL,
  `Understanding_of_thesiswork_and_relatedtheory` int(10) DEFAULT NULL,
  `AnsweringQuestions` int(10) DEFAULT NULL,
  `Completeness_of_thesis_work` int(10) DEFAULT NULL,
  `Planning_of_organization_of_thesiswork` int(10) DEFAULT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mid_committee_marks`
--

INSERT INTO `mid_committee_marks` (`mid_com_marksid`, `Teacherid`, `id`, `Quality_of_presentation`, `ProblemFormulation_identification_conceptualization`, `Methodology_Approach`, `Literature_review`, `Understanding_of_thesiswork_and_relatedtheory`, `AnsweringQuestions`, `Completeness_of_thesis_work`, `Planning_of_organization_of_thesiswork`, `total`) VALUES
(6, 139, 24, 7, 14, 8, 8, 8, 8, 16, 7, 76),
(7, 140, 24, 6, 13, 7, 6, 7, 7, 14, 8, 68),
(8, 138, 24, 8, 16, 8, 8, 8, 8, 16, 8, 80),
(9, 141, 24, 9, 18, 8, 10, 10, 8, 18, 8, 89),
(10, 142, 24, 8, 18, 9, 9, 8, 7, 17, 9, 85),
(11, 137, 30, 8, 16, 8, 8, 8, 8, 8, 8, 72),
(12, 139, 30, 5, 5, 5, 5, 5, 5, 5, 5, 40);

--
-- Triggers `mid_committee_marks`
--
DELIMITER $$
CREATE TRIGGER `calculate` AFTER UPDATE ON `mid_committee_marks` FOR EACH ROW UPDATE `finalmarks` set `mid_committee`=(SELECT (mid_committee/marksdensity.total*AVG(mid_committee_marks.total)) FROM `marksdensity`,mid_committee_marks where mid_committee_marks.id=new.id) WHERE id=new.id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `calculatemarks` AFTER DELETE ON `mid_committee_marks` FOR EACH ROW UPDATE `finalmarks` set `mid_committee`=(SELECT (mid_committee/marksdensity.total*AVG(mid_committee_marks.total)) FROM `marksdensity`,mid_committee_marks where mid_committee_marks.id=old.id) WHERE id=old.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `mid_external_marks`
--

CREATE TABLE `mid_external_marks` (
  `mid_Ext_marksid` int(11) NOT NULL,
  `ext_Id` int(10) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Quality_of_Presentation` int(10) DEFAULT NULL,
  `Problem_Formulation_identification_conceptualization` int(10) DEFAULT NULL,
  `Methodology_Approach` int(10) DEFAULT NULL,
  `Literature_review` int(10) DEFAULT NULL,
  `Understanding_of_thesis_work_and_related_theory` int(10) DEFAULT NULL,
  `Answering_to_questions` int(10) DEFAULT NULL,
  `Completeness_of_thesis_work` int(10) DEFAULT NULL,
  `Planning_of_organization_of_thesis_work` int(10) DEFAULT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mid_external_marks`
--

INSERT INTO `mid_external_marks` (`mid_Ext_marksid`, `ext_Id`, `id`, `Quality_of_Presentation`, `Problem_Formulation_identification_conceptualization`, `Methodology_Approach`, `Literature_review`, `Understanding_of_thesis_work_and_related_theory`, `Answering_to_questions`, `Completeness_of_thesis_work`, `Planning_of_organization_of_thesis_work`, `total`) VALUES
(24, 4, 24, 7, 16, 7, 7, 7, 6, 7, 6, 63),
(30, 5, 30, 8, 16, 8, 8, 8, 8, 16, 8, 80);

--
-- Triggers `mid_external_marks`
--
DELIMITER $$
CREATE TRIGGER `c10` AFTER UPDATE ON `mid_external_marks` FOR EACH ROW UPDATE `finalmarks` set `mid_external`=(SELECT (mid_external/marksdensity.total*mid_external_marks.total) FROM `marksdensity`,mid_external_marks where mid_external_marks.id=new.id) WHERE id=new.id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `c11` AFTER DELETE ON `mid_external_marks` FOR EACH ROW UPDATE `finalmarks` set `mid_external`=(SELECT (mid_external/marksdensity.total*mid_external_marks.total) FROM `marksdensity`,mid_external_marks where mid_external_marks.id=old.id) WHERE id=old.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `mid_supervisor_marks`
--

CREATE TABLE `mid_supervisor_marks` (
  `mid_Sup_marksid` int(11) NOT NULL,
  `Teacherid` int(10) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Regularity_of_works` int(10) DEFAULT NULL,
  `Degree_of_Completeness_of_thesis` int(10) DEFAULT NULL,
  `Understanding_of_thesiswork_and_relatedtheory` int(10) DEFAULT NULL,
  `StudentEffort_and_performance` int(10) DEFAULT NULL,
  `Organization_of_study` int(10) DEFAULT NULL,
  `total` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mid_supervisor_marks`
--

INSERT INTO `mid_supervisor_marks` (`mid_Sup_marksid`, `Teacherid`, `id`, `Regularity_of_works`, `Degree_of_Completeness_of_thesis`, `Understanding_of_thesiswork_and_relatedtheory`, `StudentEffort_and_performance`, `Organization_of_study`, `total`) VALUES
(24, 136, 24, 15, 17, 16, 16, 17, 81),
(30, 136, 30, 18, 18, 18, 18, 18, 90);

--
-- Triggers `mid_supervisor_marks`
--
DELIMITER $$
CREATE TRIGGER `c5` AFTER DELETE ON `mid_supervisor_marks` FOR EACH ROW UPDATE `finalmarks` set `mid_supervisor`=(SELECT (mid_supervisor/marksdensity.total*mid_supervisor_marks.total) FROM `marksdensity`,mid_supervisor_marks where mid_supervisor_marks.id=old.id) WHERE id=old.id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `c6` AFTER UPDATE ON `mid_supervisor_marks` FOR EACH ROW UPDATE `finalmarks` set `mid_supervisor`=(SELECT (mid_supervisor/marksdensity.total*mid_supervisor_marks.total) FROM `marksdensity`,mid_supervisor_marks where mid_supervisor_marks.id=new.id) WHERE id=new.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `studentinfo`
--

CREATE TABLE `studentinfo` (
  `id` int(11) NOT NULL,
  `Firstname` varchar(30) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  `Roll` varchar(30) NOT NULL,
  `Thesis` varchar(50) NOT NULL,
  `Dateid` int(10) NOT NULL,
  `Teacherid` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studentinfo`
--

INSERT INTO `studentinfo` (`id`, `Firstname`, `Lastname`, `Roll`, `Thesis`, `Dateid`, `Teacherid`) VALUES
(24, 'Nitesh', 'Karna', '071/MSCS/658', 'not-mentioned', 24, NULL),
(30, 'Kushal', 'Shrestha', '074bct519', 'bio-technology', 24, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `teacher_table`
--

CREATE TABLE `teacher_table` (
  `Teacherid` int(10) NOT NULL,
  `teachername` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher_table`
--

INSERT INTO `teacher_table` (`Teacherid`, `teachername`) VALUES
(136, 'Dr. Aman Shakya'),
(137, 'Dr. Basanta Joshi'),
(138, 'Prof. Dr. Shashidhar Ram Joshi'),
(139, 'Prof. Dr. Subarna Shakya'),
(140, 'Dr. Dibakar Raj Pant'),
(141, 'Baburam Dawadi'),
(142, 'Dr. Sanjeeb Prasad Panday'),
(143, 'Dr. N B Adhikari');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `date`
--
ALTER TABLE `date`
  ADD PRIMARY KEY (`Dateid`);

--
-- Indexes for table `externalteachertable`
--
ALTER TABLE `externalteachertable`
  ADD PRIMARY KEY (`ext_Id`);

--
-- Indexes for table `finalmarks`
--
ALTER TABLE `finalmarks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `final_committee_marks`
--
ALTER TABLE `final_committee_marks`
  ADD PRIMARY KEY (`final_com_marksid`),
  ADD KEY `Teacherid` (`Teacherid`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `final_external_marks`
--
ALTER TABLE `final_external_marks`
  ADD PRIMARY KEY (`final_Ext_marksid`),
  ADD KEY `ext_Id` (`ext_Id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `final_supervisor_marks`
--
ALTER TABLE `final_supervisor_marks`
  ADD PRIMARY KEY (`final_Sup_marksid`),
  ADD KEY `Teacherid` (`Teacherid`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `marksdensity`
--
ALTER TABLE `marksdensity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mid_committee_marks`
--
ALTER TABLE `mid_committee_marks`
  ADD PRIMARY KEY (`mid_com_marksid`),
  ADD KEY `Teacherid` (`Teacherid`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `mid_external_marks`
--
ALTER TABLE `mid_external_marks`
  ADD PRIMARY KEY (`mid_Ext_marksid`),
  ADD KEY `ext_Id` (`ext_Id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `mid_supervisor_marks`
--
ALTER TABLE `mid_supervisor_marks`
  ADD PRIMARY KEY (`mid_Sup_marksid`),
  ADD KEY `Teacherid` (`Teacherid`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `studentinfo`
--
ALTER TABLE `studentinfo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Dateid` (`Dateid`),
  ADD KEY `Teacherid` (`Teacherid`);

--
-- Indexes for table `teacher_table`
--
ALTER TABLE `teacher_table`
  ADD PRIMARY KEY (`Teacherid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `date`
--
ALTER TABLE `date`
  MODIFY `Dateid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `externalteachertable`
--
ALTER TABLE `externalteachertable`
  MODIFY `ext_Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `finalmarks`
--
ALTER TABLE `finalmarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `final_committee_marks`
--
ALTER TABLE `final_committee_marks`
  MODIFY `final_com_marksid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `final_external_marks`
--
ALTER TABLE `final_external_marks`
  MODIFY `final_Ext_marksid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `final_supervisor_marks`
--
ALTER TABLE `final_supervisor_marks`
  MODIFY `final_Sup_marksid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `marksdensity`
--
ALTER TABLE `marksdensity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mid_committee_marks`
--
ALTER TABLE `mid_committee_marks`
  MODIFY `mid_com_marksid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `mid_external_marks`
--
ALTER TABLE `mid_external_marks`
  MODIFY `mid_Ext_marksid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `studentinfo`
--
ALTER TABLE `studentinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `teacher_table`
--
ALTER TABLE `teacher_table`
  MODIFY `Teacherid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `finalmarks`
--
ALTER TABLE `finalmarks`
  ADD CONSTRAINT `finalmarks_ibfk_1` FOREIGN KEY (`id`) REFERENCES `studentinfo` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `final_committee_marks`
--
ALTER TABLE `final_committee_marks`
  ADD CONSTRAINT `final_committee_marks_ibfk_1` FOREIGN KEY (`Teacherid`) REFERENCES `teacher_table` (`Teacherid`),
  ADD CONSTRAINT `final_committee_marks_ibfk_2` FOREIGN KEY (`id`) REFERENCES `studentinfo` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `final_external_marks`
--
ALTER TABLE `final_external_marks`
  ADD CONSTRAINT `final_external_marks_ibfk_1` FOREIGN KEY (`ext_Id`) REFERENCES `externalteachertable` (`ext_Id`),
  ADD CONSTRAINT `final_external_marks_ibfk_2` FOREIGN KEY (`id`) REFERENCES `studentinfo` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `final_supervisor_marks`
--
ALTER TABLE `final_supervisor_marks`
  ADD CONSTRAINT `final_supervisor_marks_ibfk_1` FOREIGN KEY (`Teacherid`) REFERENCES `teacher_table` (`Teacherid`),
  ADD CONSTRAINT `final_supervisor_marks_ibfk_2` FOREIGN KEY (`id`) REFERENCES `studentinfo` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `mid_committee_marks`
--
ALTER TABLE `mid_committee_marks`
  ADD CONSTRAINT `mid_committee_marks_ibfk_1` FOREIGN KEY (`Teacherid`) REFERENCES `teacher_table` (`Teacherid`),
  ADD CONSTRAINT `mid_committee_marks_ibfk_2` FOREIGN KEY (`id`) REFERENCES `studentinfo` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `mid_external_marks`
--
ALTER TABLE `mid_external_marks`
  ADD CONSTRAINT `mid_external_marks_ibfk_1` FOREIGN KEY (`ext_Id`) REFERENCES `externalteachertable` (`ext_Id`),
  ADD CONSTRAINT `mid_external_marks_ibfk_2` FOREIGN KEY (`id`) REFERENCES `studentinfo` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `mid_supervisor_marks`
--
ALTER TABLE `mid_supervisor_marks`
  ADD CONSTRAINT `mid_supervisor_marks_ibfk_1` FOREIGN KEY (`Teacherid`) REFERENCES `teacher_table` (`Teacherid`),
  ADD CONSTRAINT `mid_supervisor_marks_ibfk_2` FOREIGN KEY (`id`) REFERENCES `studentinfo` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `studentinfo`
--
ALTER TABLE `studentinfo`
  ADD CONSTRAINT `studentinfo_ibfk_1` FOREIGN KEY (`Dateid`) REFERENCES `date` (`Dateid`),
  ADD CONSTRAINT `studentinfo_ibfk_2` FOREIGN KEY (`Teacherid`) REFERENCES `teacher_table` (`Teacherid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
