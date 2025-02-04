-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-02-2025 a las 18:13:21
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `novedades`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id-post` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_img` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id-post`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id-post`, `titulo`, `subtitulo`, `cuerpo`, `id_img`) VALUES
(1, 'Cómo el Análisis de Datos Impulsa la Toma de Decisiones Estratégicas', 'El análisis de datos se ha convertido en un pilar fundamental para la toma de decisiones empresariales. Con herramientas de Business Intelligence (BI) y modelos predictivos, las empresas pueden anticipar tendencias, optimizar recursos y mejorar la rentabilidad.', '📊 Ejemplo real:\r\nImagina que tienes un ecommerce y analizas los datos de compra de tus clientes. A través del análisis de patrones, descubres que los clientes compran más ciertos productos los viernes. Con esta información, puedes lanzar promociones estratégicas ese día para maximizar las ventas.\r\n\r\n🚀 Beneficios clave:\r\n✅ Optimización de recursos.\r\n✅ Reducción de costos operativos.\r\n✅ Predicción de tendencias del mercado.\r\n✅ Mejor experiencia del cliente.', 'bflfxmnicfsd8wx7j3ac'),
(2, 'La Importancia de la Visualización de Datos en la Era Digital', 'Hoy en día, el 90% de las empresas generan grandes volúmenes de datos, pero el reto está en interpretarlos de forma rápida y efectiva. La visualización de datos permite convertir información compleja en insights claros y accionables.', 'Un gerente de marketing analiza los clics en su sitio web y nota que la mayoría de los visitantes abandonan la página en cierto punto del proceso de compra. Con un dashboard de visualización de datos, puede identificar dónde está el problema y corregirlo.\r\n\r\n🚀 Herramientas populares de visualización:\r\n📌 Tableau\r\n📌 Power BI\r\n📌 Google Data Studio', 'b1zpvpxrmfakzotxmy3v'),
(5, 'Inteligencia Artificial y Analítica Avanzada: El Futuro del Negocio', 'La Inteligencia Artificial (IA) está revolucionando la forma en que las empresas manejan sus datos. Desde chatbots hasta modelos de predicción de ventas, la IA permite automatizar procesos y optimizar la toma de decisiones.', 'La Inteligencia Artificial (IA) está revolucionando la forma en que las empresas manejan sus datos. Desde chatbots hasta modelos de predicción de ventas, la IA permite automatizar procesos y optimizar la toma de decisiones.\r\n\r\n🤖 Ejemplo real:\r\nUna empresa de logística implementa IA para predecir retrasos en entregas analizando datos climáticos y de tráfico. Con esta información, pueden reprogramar rutas y mejorar la eficiencia.\r\n\r\n🚀 Casos de uso en la industria:\r\n✅ Personalización de recomendaciones en ecommerce (como Amazon y Netflix).\r\n✅ Detección de fraudes en transacciones bancarias.\r\n✅ Automatización de servicio al cliente con chatbots.', 'f9drttphec0dewmf0dg1'),
(6, 'Data Engineering: La Clave para una Estrategia de Datos Eficiente', 'Sin una buena infraestructura de datos, cualquier estrategia de análisis se vuelve ineficaz. La ingeniería de datos permite diseñar pipelines de datos, bases de datos eficientes y sistemas de integración que optimizan el flujo de información.', 'Un retailer con múltiples sucursales necesita consolidar datos de ventas, inventario y comportamiento del cliente en un solo sistema. Con un equipo de ingeniería de datos, logran integrar toda esta información en un Data Warehouse, permitiendo un análisis más ágil y preciso.\r\n\r\n🚀 Principales tecnologías utilizadas:\r\n✅ Snowflake\r\n✅ AWS Redshift\r\n✅ Apache Kafka\r\n✅ Google BigQuery', 'nodytxkpdfd4jlpakyiu'),
(9, 'Cómo Aumentar las Ventas con Análisis Predictivo', 'El análisis predictivo permite a las empresas anticiparse a las necesidades del cliente, optimizar campañas publicitarias y mejorar la rentabilidad.', 'Una tienda online usa modelos predictivos para identificar qué productos serán más demandados en la próxima temporada. Con esta información, ajustan su stock y campañas de marketing antes de que aumente la demanda.\r\n\r\n🚀 Aplicaciones clave:\r\n✅ Ecommerce: Predicción de compras futuras según el historial del cliente.\r\n✅ Banca: Detección de fraudes en tiempo real.\r\n✅ Salud: Predicción de enfermedades según patrones médicos.', 'vwdutnv4vhu1lbbz4qh2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `password`) VALUES
(1, 'matias', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
