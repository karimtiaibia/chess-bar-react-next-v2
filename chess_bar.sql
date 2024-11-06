-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 06 nov. 2024 à 20:25
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `chess_bar`
--

-- --------------------------------------------------------

--
-- Structure de la table `bar`
--

CREATE TABLE `bar` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `zipcode` int(5) NOT NULL,
  `city` varchar(150) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `logo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `bar`
--

INSERT INTO `bar` (`id`, `name`, `adress`, `zipcode`, `city`, `phone_number`, `register_date`, `logo`) VALUES
(1, 'la tencha', 'quai st michel', 33000, 'bordeaux', '0951778669', '2023-11-29 16:47:03', 'tencha-logo.jpg'),
(2, 'ambrosia', 'porte caillau', 33000, 'bordeaux', '0556012653', '2023-11-29 18:11:12', 'ambrosia-logo.png');

-- --------------------------------------------------------

--
-- Structure de la table `ranking`
--

CREATE TABLE `ranking` (
  `id` int(50) NOT NULL,
  `score` int(20) NOT NULL,
  `id_user` int(50) NOT NULL,
  `id_tournament` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tournament`
--

CREATE TABLE `tournament` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `description` text NOT NULL,
  `nb_places_disponibles` int(5) NOT NULL DEFAULT 6,
  `end_of_season` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `id_bar` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_rank` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tournament`
--

INSERT INTO `tournament` (`id`, `date`, `description`, `nb_places_disponibles`, `end_of_season`, `id_bar`, `id_user`, `id_rank`) VALUES
(1, '2023-12-15', 'ceci est une description pour le tournoi n°1 à la tencha', 6, '2023-12-13 14:08:51.859284', 1, NULL, 0),
(2, '2023-12-16', 'ceci est une description pour le tournoi à l\'ambrosia', 6, '2023-12-13 14:08:51.859284', 2, NULL, 0),
(4, '2023-12-15', 'ceci est une description pour le tournoi n°2 à la tencha', 6, '2023-12-13 14:08:51.859284', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(200) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `city` varchar(100) DEFAULT NULL,
  `zipcode` int(10) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT 0,
  `bar` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `pseudo`, `city`, `zipcode`, `admin`, `bar`) VALUES
(20, 'karim.tiaibia@gmail.com', '$2b$10$PLC3PkapKFpgkz6v2v9RTOJ3PKi22XM8mCv.iLbYHDMtXdXIWmeOy', 'Karim', 'Bordeaux', 33000, 1, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `bar`
--
ALTER TABLE `bar`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ranking`
--
ALTER TABLE `ranking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_tournament` (`id_tournament`);

--
-- Index pour la table `tournament`
--
ALTER TABLE `tournament`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_rank` (`id_rank`),
  ADD KEY `id_bar` (`id_bar`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `pseudo` (`pseudo`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `bar`
--
ALTER TABLE `bar`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `ranking`
--
ALTER TABLE `ranking`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ranking`
--
ALTER TABLE `ranking`
  ADD CONSTRAINT `ranking_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ranking_ibfk_2` FOREIGN KEY (`id_tournament`) REFERENCES `tournament` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `tournament`
--
ALTER TABLE `tournament`
  ADD CONSTRAINT `tournament_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tournament_ibfk_4` FOREIGN KEY (`id_bar`) REFERENCES `bar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
