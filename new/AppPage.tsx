import { useRouter } from 'next/router';
import { appInfo } from "../../data";
import styles from "./AppPage.module.css";

interface AppInfo = {
  specs: string[];
  compatibility: string[];
  logo: string;
  title: string;
  description: string;
  appDemo: string;
}

const AppPage: React.FC<Props> = ({ appInfo.specs, appInfo.compatibility }) => {
  const { query } = useRouter();
  const { appId } = query;
  
  const app = appInfo[appId as keyof typeof appInfo];
  
  return (
    <main className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="" />
        </div>
        <div className={styles.seperatorLineA} />
        <div className={styles.navBarContainer}>
          <ul className={styles.navBar}>
            <li className={styles.home}><a href="/">Home</a></li>
            <div className={styles.seperatorLineB} />
            <li className={styles.apps}><a href="/Apps">Apps</a></li>
            <div className={styles.seperatorLineB} />
            <li className={styles.faqs}><a href="/FAQs">FAQs</a></li>
            <div className={styles.seperatorLineB} />
            <li className={styles.about}><a href="/About">About Us</a></li>
            <div className={styles.seperatorLineB} />
            <li className={styles.contact}><a href="/Contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.contentContainerA}>
        <div className={styles.appInfoContainer}>
          <div className={styles.appVerticalOri}>
            <div className={styles.appHorizontalOri}>
              <div className={styles.appVerticalOriB}>
                <div className={styles.appHorizontalOri}>
                  <img className={styles.appLogo} src={app.logo} />
                  <p className={styles.titleD}><strong>{app.title}</strong></p>
                </div>
                <p className={styles.appPageDesc}>{app.description}</p>
              </div>
              <div className={styles.appVerticalOriB}>
                <img className={styles.phonePropA1} src="">
                  <div className={styles.appDemoPhone}>
                    <img src={app.appDemo} />
                  </div>
                </img>
                <div className={styles.specs} dangerouslySetInnerHTML={{ __html: app.specs }} />
              </div>
              <div className={styles.appVerticalB}>
                <div className={styles.reviews}>
                  <p>Get started with {app.title} now.</p>
                </div>
                <div className={styles.compatibility} dangerouslySetIneerHTML={{ __html: app.compatibility }} />
                <div className={styles.downloads}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppPage;
