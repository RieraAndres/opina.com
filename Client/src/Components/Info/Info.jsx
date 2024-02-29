import styles from "../Info/Info.module.css";

function Info() {
  return (
    <>
      <div className={styles.flyer}>
        <p>UN PUENTE A LA SOLUCION</p>
      </div>
      <div className={styles.welcome}>
        <p>¡Bienvenidos a nuestra página web dedicada al bien común y al progreso de nuestra comunidad! Somos un equipo comprometido con la búsqueda constante de mejoras civiles y generales que beneficien a todos. Nuestra misión es impulsar proyectos basados en las necesidades reales de las personas, a través de encuestas cuidadosamente diseñadas que nos permiten conocer las voces y opiniones de nuestra comunidad. Creemos en la transparencia, la participación activa y el trabajo colaborativo como pilares fundamentales para alcanzar un futuro mejor para todos. ¡Únete a nosotros en esta emocionante travesía hacia el progreso común!</p>
      </div>
      <div className={styles.mision}>
        <p className={styles.Title}>Misión</p>
        <p className={styles.misionText}>
          En nuestra página web, nos comprometemos a ser catalizadores del cambio positivo, promoviendo la participación activa de la comunidad en la identificación y solución de problemas que afectan a nuestra sociedad. A través de encuestas inclusivas y análisis rigurosos, buscamos entender las necesidades y aspiraciones de las personas para desarrollar proyectos con impacto tangible en áreas clave como la infraestructura, la educación, la salud y el medio ambiente. Nos guía el firme propósito de trabajar en colaboración con todos los sectores de la sociedad para construir un futuro más justo, equitativo y próspero para las generaciones presentes y futuras.
        </p>
      </div>
      <div className={styles.Valores}>
        <div className={styles.titleContainer}>
          <p className={styles.Title}>Valores</p>
        </div>
        <p className={styles.subtitle}>Transparencia:</p>
        <p className={styles.valoresText}>Nos comprometemos a actuar con honestidad y claridad en todas nuestras interacciones, manteniendo informada a la comunidad sobre nuestros procesos y decisiones.</p>
        <p className={styles.subtitle}>Inclusión:</p>
        <p className={styles.valoresText}>Valoramos y respetamos la diversidad de opiniones, experiencias y perspectivas, buscando siempre la participación activa de todos los miembros de la comunidad, sin importar su origen, género, orientación, o cualquier otra característica.</p>
        <p className={styles.subtitle}>Colaboración:</p>
        <p className={styles.valoresText}>Creemos en el poder del trabajo en equipo y la cooperación para lograr resultados significativos. Fomentamos alianzas estratégicas con organizaciones y líderes comunitarios para maximizar el impacto de nuestras acciones.</p>
        <p className={styles.subtitle}>Empatía:</p>
        <p className={styles.valoresText}>Nos ponemos en el lugar de los demás, comprendiendo sus necesidades, preocupaciones y aspiraciones. Guiamos nuestras acciones con compasión y empatía hacia aquellos que más lo necesitan.</p>
        <p className={styles.subtitle}>Responsabilidad:</p>
        <p className={styles.valoresText}>Asumimos la responsabilidad de nuestras acciones y decisiones, velando por el bienestar de la comunidad y el uso adecuado de los recursos disponibles. Nos comprometemos a rendir cuentas ante nuestra comunidad y a aprender de nuestros errores para mejorar continuamente.</p>
        <p className={styles.subtitle}>Innovación:</p>
        <p className={styles.valoresText}>Buscamos constantemente nuevas formas de abordar los desafíos sociales, fomentando la creatividad, la experimentación y el pensamiento crítico en la búsqueda de soluciones efectivas y sostenibles.</p>
      </div>
    </>
  );
}

export default Info;
