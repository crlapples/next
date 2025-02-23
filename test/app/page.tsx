'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "/next/Home.module.css";
import "/next/globals.css";

const Home = () => {
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    const currentHash = window.location.hash;
    setHash(currentHash);
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        (element as HTMLElement).focus();
        window.scrollTo({ top: (element as HTMLElement).offsetTop, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/image_fx_%20(26)%20(1).jpg" />
        </div>
        <div className={styles.seperatorLineA} />
        <div className={styles.navBarContainer}>
          <ul className={styles.navBar} id="navBar">
            <li className={styles.home}><Link href="/">Home</Link></li>
            <div className={styles.seperatorLineB} />
            <li className={styles.apps}><Link href="/Apps">Apps</Link></li>
            <div className={styles.seperatorLineB} />
            <li className={styles.faqs}><Link href="/FAQs">FAQs</Link></li>
            <div className={styles.seperatorLineB} />
            <li className={styles.about}><Link href="/About">About Us</Link></li>
            <div className={styles.seperatorLineB} />
            <li className={styles.contact}><Link href="/Contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.welcomeContainer}>
        <img className={styles.welcome} src="https://assets.onecompiler.app/42xjnjtme/439pczt69/oie_8NhfbS34S3Ft.png" />
      </div>
      <div className={styles.recommendedAppsContainer}>
        <div className={styles.recommendedApps}>
          <Link href="/Apps/name"><div className={styles.app2}>
            <img className={styles.imageBackground} src="https://assets.onecompiler.app/42xjnjtme/439pczt69/image_fx_%20(21).jpg" />
            <div className={styles.horizontalOriA}>
              <div className={styles.verticalOriB}>
                <p className={styles.titleA}>Chinese 5000</p>
                <div className={styles.galleryA}>
                  <img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(2).webp" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(17).webp" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(18).webp" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(19).webp" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(20).webp" />
                </div>
              </div>
              <div className={styles.togetherB}>
                <div className={styles.appDemoPhoneB}><img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(2).webp" /></div>
                <div className={styles.phoneAContainerB}><img className={styles.phonePropA} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" /></div>
              </div>
              <p className={styles.descA}>Chinese 5000 teaches 5,400 characters to form 380,000 words. It includes 52 cards for progressive learning. Users can practice calligraphy, play puzzles, and recite daily. Features include a Speak button, zoom, and AirPrint. Designed in the U.S., it supports traditional characters.</p>
            </div>
          </div></Link>
          <Link href="/Apps/name"><div className={styles.app2}>
            <img className={styles.imageBackground} src="https://assets.onecompiler.app/42xjnjtme/439pczt69/image_fx_%20(20).jpg" />
            <div className={styles.horizontalOriB}>
              <div className={styles.togetherB}>
                <div className={styles.appDemoPhoneB}><img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(1).webp" /></div>
                <div className={styles.phoneAContainerB}><img className={styles.phonePropA2} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" /></div>
              </div>
              <div className={styles.verticalOriB}>
                <p className={styles.titleB}>Contract Plus</p>
                <div className={styles.galleryB}>
                  <img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(1).webp" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(13).webp" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(14).webp" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(15).webp" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(16).webp" />
                </div>
              </div>
              <p className={styles.descB}>Contract Plus simplifies contract management with editable templates, secure sharing, and printing. Users can quickly customize, print, and share contracts. It includes 55 templates, AirPrint support, and secure access. The interface allows easy editing, search, and data entry. Legal consultation is recommended for compliance.</p>
            </div>
          </div></Link>
          <Link href="/Apps/name"><div className={styles.app3}>
            <p className={styles.descC}>Print from any app using Brother printers (TD, QL, MW, RJ, PT, PJ) with WiFi, Bluetooth, Direct WiFi, and MFi. Fast setup, remembers settings, and offers advanced options. View printer settings even without a connected Brother printer. Setup takes under 10 seconds, and printing is just one tap. Offers more features than AirPrint, including halftone control, media selection, and Bluetooth support.</p>
            <div className={styles.togetherC}>
              <div className={styles.appDemoPhoneC}><img src="https://assets.onecompiler.app/42xjnjtme/439pczt69/460x0w.webp" /></div>
              <div className={styles.phoneAContainerC}><img className={styles.phonePropA3} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" /></div>
            </div>
            <div className={styles.togetherD}>
              <div className={styles.appDemoTabletA}><img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/1286x0w.webp" /></div>
              <div className={styles.tabletAContainerA}><img className={styles.tabletPropA3} src="https://assets.onecompiler.app/42xjnjtme/439scc4f6/imageedit_7_6960719309.png" /></div>
            </div>
            <img className={styles.app3Img} src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/1286x0w%20(1).webp" />
          </div></Link>
          <div className={styles.returnTopContainer}>
            <Link href="#navBar"><p>Return to top</p></Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
