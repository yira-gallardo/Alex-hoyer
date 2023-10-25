import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/img/gal-1.jpg",
    thumbnail: "/img/gal-1.jpg",
  },
  {
    original: "/img/gal-2.jpg",
    thumbnail: "/img/gal-2.jpg",
  },
  {
    original: "/img/gal-3.jpg",
    thumbnail: "/img/gal-3.jpg",
  },
  {
    original: "/img/gal-4.jpg",
    thumbnail: "/img/gal-4.jpg",
  },
  {
    original: "/img/gal-5.jpg",
    thumbnail: "/img/gal-5.jpg",
  },
  {
    original: "/img/gal-6.jpg",
    thumbnail: "/img/gal-6.jpg",
  },
  {
    original: "/img/gal-7.jpg",
    thumbnail: "/img/gal-7.jpg",
  },
  {
    original: "/img/gal-8.jpg",
    thumbnail: "/img/gal-8.jpg",
  },
  {
    original: "/img/gal-9.jpg",
    thumbnail: "/img/gal-9.jpg",
  },
  {
    original: "/img/gal-10.jpg",
    thumbnail: "/img/gal-10.jpg",
  },
  {
    original: "/img/gal-11.jpg",
    thumbnail: "/img/gal-11.jpg",
  },
  {
    original: "/img/gal-12.jpg",
    thumbnail: "/img/gal-12.jpg",
  },
  {
    original: "/img/gal-13.jpg",
    thumbnail: "/img/gal-13.jpg",
  },
  {
    original: "/img/gal-14.jpg",
    thumbnail: "/img/gal-14.jpg",
  },
  {
    original: "/img/gal-16.jpg",
    thumbnail: "/img/gal-16.jpg",
  },
  {
    original: "/img/gal-17.jpg",
    thumbnail: "/img/gal-17.jpg",
  },
  {
    original: "/img/gal-18.jpg",
    thumbnail: "/img/gal-18.jpg",
  },
  {
    original: "/img/gal-19.jpg",
    thumbnail: "/img/gal-19.jpg",
  },
  {
    original: "/img/gal-20.jpg",
    thumbnail: "/img/gal-20.jpg",
  },
  {
    original: "/img/gal-21.jpg",
    thumbnail: "/img/gal-21.jpg",
  },
  {
    original: "/img/gal-22.jpg",
    thumbnail: "/img/gal-22.jpg",
  },
  {
    original: "/img/gal-23.jpg",
    thumbnail: "/img/gal-23.jpg",
  },
  {
    original: "/img/gal-24.jpg",
    thumbnail: "/img/gal-24.jpg",
  },
  {
    original: "/img/gal-25.jpg",
    thumbnail: "/img/gal-25.jpg",
  },
];

export default function Gallery() {
  const [menuActive, setMenuActive] = useState(false); // Para activar menu mobile
  const [scrolled, setScrolled] = useState(false); // Para detectar scrolleo

  // Detectando scrolleo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 96);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funcion para saltar a la secciones
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuActive(false);
  };

  // Para activar/desactivar menu
  const menuShow = () => {
    setMenuActive(true);
  };
  const menuHide = () => {
    setMenuActive(false);
  };

  return (
    <>
      <Head>
        <title>Alex Hoyer</title>
        <meta
          name="description"
          content="Cruda, nuevo sencillo ya disponible en todas las plataformas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://www.alexhoyer.mx/img/meta.jpg"
        />
      </Head>
      <main className={styles.main}>
        <nav
          className={`${styles.navDesktop} ${
            scrolled && styles.navDesktopScrolled
          }`}
        >
          <div className="container">
            <div className={styles.flex}>
              <div className={styles.left}>
                <Link href="/">
                  <div className={styles.logo}>
                    <Image
                      src="/img/alex-hoyer.png"
                      alt="Alex Hoyer"
                      className={styles.logoImg}
                      width={1612}
                      height={213}
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className={styles.center}>
                <Link href="/" className={styles.link}>
                  TOUR
                </Link>
                <Link
                  href="https://alexhoyer.lnk.to/Cruda"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  MÚSICA
                </Link>
                <Link
                  href="/"
                  className={styles.link}
                  onClick={() => goToSection("contact")}
                >
                  CONTACTO
                </Link>
              </div>
              <div className={styles.right}>
                <div className={styles.socials}>
                  <div className={styles.social}>
                    <a
                      href="https://www.tiktok.com/@alexhoyer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.4rem"
                        height="1.4rem"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                      </svg>
                    </a>
                  </div>
                  <div className={styles.social}>
                    <a
                      href="https://www.instagram.com/alexhoyer_"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.4rem"
                        height="1.4rem"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </div>
                  <div className={styles.social}>
                    <a
                      href="https://www.facebook.com/OfficialHoyer/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.4rem"
                        height="1.4rem"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                  </div>
                  <div className={styles.social}>
                    <a
                      href="https://www.youtube.com/channel/UCPjWyWWxS2QvszZOLqlIzmw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.4rem"
                        height="1.4rem"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* MENU MOBILE */}
        {!menuActive && (
          <nav
            className={`${styles.navMobile} ${
              scrolled && styles.navMobileScrolled
            }`}
          >
            <div className={styles.left}>
              <Link href="/">
                <div className={styles.logo}>
                  <Image
                    src="/img/alex-hoyer.png"
                    alt="Alex Hoyer"
                    className={styles.logoImg}
                    width={1612}
                    height={213}
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className={styles.center}>
              <div className={styles.burger} onClick={menuShow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.socials}>
                <div className={styles.social}>
                  <a
                    href="https://www.tiktok.com/@alexhoyer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                    </svg>
                  </a>
                </div>
                <div className={styles.social}>
                  <a
                    href="https://www.instagram.com/alexhoyer_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
                <div className={styles.social}>
                  <a
                    href="https://www.facebook.com/OfficialHoyer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </div>
                <div className={styles.social}>
                  <a
                    href="https://www.youtube.com/channel/UCPjWyWWxS2QvszZOLqlIzmw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}
        {menuActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className={styles.menuMobile}>
              <div className={styles.close} onClick={menuHide}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <Link href="/" onClick={menuHide}>
                <div className={styles.logo}>
                  <Image
                    src="/img/alex-hoyer.png"
                    alt="Alex Hoyer"
                    className={styles.logoImg}
                    width={1612}
                    height={213}
                    priority
                  />
                </div>
              </Link>
              <Link href="/galeria" className={styles.link}>
                GALERÍA
              </Link>
              <div className={styles.link} onClick={() => goToSection("shows")}>
                TOUR
              </div>
              <div className={styles.link} onClick={() => goToSection("music")}>
                MÚSICA
              </div>
              <div
                className={styles.link}
                onClick={() => goToSection("contact")}
              >
                CONTACTO
              </div>
            </div>
          </motion.div>
        )}
        {/* ENDS MENU MOBILE */}
        <section className={styles.gallery}>
          <ImageGallery items={images} />
        </section>
      </main>
      <footer className={styles.footer}>
        Alex Hoyer 2023® Todos los derechos reservados
      </footer>
    </>
  );
}
