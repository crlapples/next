import { appInfo } from "./data";
import styles from "./AppPage.module.css";

interface AppInfo {
  specs: string[];
  compatibility: string[];
  logo: string;
  title: string;
  description: string;
  appDemo: string;
  googleLink: string;
  appleLink: string;
}

export function generateStaticParams() {

  return Object.keys(appInfo).map((appId) => ({
    appId,
  }));
}

const AppPageStatic = ({ params }) => {
  const { appId } = params;
  const app = appInfo[appId as keyof typeof appInfo];

  if (!app) {
    return <div>App not found</div>;
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={"https://assets.onecompiler.app/42xjnjtme/439pfatvu/image_fx_%20(26)%20(1).jpg"} />
        </div>
        <div className={styles.seperatorLineA} />
        <ul className={styles.navBar}>
          <a href="/"><li className={styles.home}>Home</li></a>
          <div className={styles.seperatorLineB} />
          <a href="/Apps"><li className={styles.apps}>Apps</li></a>
          <div className={styles.seperatorLineB} />
          <a href="/FAQs"><li className={styles.faqs}>FAQs</li></a>
          <div className={styles.seperatorLineB} />
          <a href="/About"><li className={styles.about}>About Us</li></a>
          <div className={styles.seperatorLineB} />
          <a href="/Contact"><li className={styles.contact}>Contact Us</li></a>
        </ul>
      </div>
      <div className={styles.contentContainerA}>
        <div className={styles.appInfoContainer}>
          <div className={styles.appVerticalOri}>
            <div className={styles.appHorizontalOri}>
              <div className={styles.appVerticalOriB}>
                <div className={styles.appHorizontalOriB}>
                  <img className={styles.appLogo} src={app.logo} />
                  <p className={styles.titleD}><strong>{app.title}</strong></p>
                </div>
                <p className={styles.appPageDesc}>{app.description}</p>
              </div>
              <div className={styles.appVerticalOriB}>
                <div className={styles.togetherA}>
                  <div className={styles.demoContainer}>
                    <img className={styles.appDemoPhoneA} src={app.appDemo} />
                  </div>
                  <div className={styles.propContainer}>
                    <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
                  </div>
                </div>
              </div>
              <div className={styles.appVerticalOriC}>
                <div className={styles.compatibility} dangerouslySetInnerHTML={{ __html: app.compatibility }} />
                <div className={styles.specs} dangerouslySetInnerHTML={{ __html: app.specs }} />
                <div className={styles.reviews}>
                  <p>Get started with {app.title} now.</p>
                </div>
                <div className={styles.downloads}>
                  {app.googleLink === "null" ? (
                    <div></div>
                  ) : (
                    <a href={app.googleLink}><img className={styles.google} src="/google.png" /></a>
                  )}
                  <a href={app.appleLink}><img className={styles.apple} src="/appleWhite.svg" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppPageStatic;
