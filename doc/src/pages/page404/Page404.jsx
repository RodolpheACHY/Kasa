import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./page404.module.scss";

const Page404 = () => {
  return (
    <div className={styles.page404}>
      {/* Passe la prop noMargin */}
      <Header noMargin={true} />

      <main className={styles.page404__content}>
        {/* Message principal 404 */}
        <h1 className={styles.page404__title}>404</h1>

        {/* Texte explicatif */}
        <p className={styles.page404__message}>
          Oups ! La page que vous demandez n&apos;existe pas.
        </p>

        {/* Lien vers l'accueil */}
        <Link to="/" className={styles.page404__link}>
          Retourner sur la page d’accueil
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default Page404;