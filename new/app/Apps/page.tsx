import Link from 'next/link';
import styles from "./Apps.module.css";
import "./globals.css";

const Apps = () => {
  
  return (

    <main className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/image_fx_%20(26)%20(1).jpg" />
        </div>
        <div className={styles.seperatorLineA} />
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
      <div className={styles.contentContainerA}>
        <div className={styles.introDesignContainer}>
          <div className={styles.introDesign}>
            <img className={styles.bubble1} src="https://assets.onecompiler.app/42xjnjtme/43a2raeww/oie_oie_trim_image%20(3).png" />
            <img className={styles.bubble2} src="https://assets.onecompiler.app/42xjnjtme/43a2raeww/oie_oie_trim_image%20(4).png" />
            <img className={styles.bubble3} src="https://assets.onecompiler.app/42xjnjtme/43a2raeww/oie_oie_trim_image.png" />
            <img className={styles.bubble4} src="https://assets.onecompiler.app/42xjnjtme/43a2raeww/oie_oie_trim_image%20(1).png" />
            <img className={styles.bubble5} src="https://assets.onecompiler.app/42xjnjtme/43a2raeww/oie_oie_trim_image%20(2).png" />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <p className={styles.title1}>App</p>
          <div className={styles.decorationBar} />
          <p className={styles.title2}>Collection</p>
        </div>
        <div className={styles.appGrid}>
          <Link href="/BrotheriPrint"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439pczt69/460x0w.webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Brother iPrint</p>
              <p className={styles.shortDesc}>Print from any app with Brother printers (TD, QL, MW, RJ, PT, PJ) using WiFi, Bluetooth, Direct WiFi, or MFi, with fast setup and remembered settings. The app allows you to print PDFs and images, test Brother printers, and view settings even without a connected printer. It offers advantages over AirPrint, including advanced print settings, faster printing, and support for Bluetooth and MFi.</p>
            </div>
          </div></Link>
          <Link href="/PartyPhoto"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439q86pzx/460x0w%20(12).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>PartyPhoto</p>
              <p className={styles.shortDesc}>PartyPhoto is a zero-setup app with 150 free templates, lifetime use for a one-time fee, and support for printing, saving, and sharing on iPhone and iPad. It offers high-resolution templates for any event, customizable photo booth layouts, and compatibility with various printers, including the Brother VC-500W. With instant start, admin controls, and an intuitive workflow, PartyPhoto makes capturing and printing event memories effortless and fun.</p>
            </div>
          </div></Link>
          <Link href="/Lilliputian"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439q5vcmx/460x0w%20(10).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Lilliputian</p>
              <p className={styles.shortDesc}>Lilliputian POS is a fast, user-friendly point-of-sale solution designed for small businesses, offering seamless order placement, flexible payment options, and multi-store support. With universal compatibility, an intuitive kiosk interface, and innovative menu management, it ensures efficient operations and a streamlined customer experience. Featuring advanced transaction tracking, extensive printer support, and intelligent kiosk protection, this powerful app helps businesses stay competitive while maintaining security and ease of use.</p>
            </div>
          </div></Link>
          <Link href="/NB202"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439q3pyh8/460x0w%20(7).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>NB202</p>
              <p className={styles.shortDesc}>NB202 is a powerful name badge printing app that enables instant, professional, and customizable badge creation for any event, supporting AirPrint and Brother label printers. It streamlines event management with kiosk mode, bulk registration, and integrations with platforms like Eventbrite and Meetup while adding fun features like raffles and QR codes. Whether for casual gatherings or formal corporate events, NB202 ensures efficiency, creativity, and professionalism in just a few taps.</p>
            </div>
          </div></Link>
          <Link href="/ContractPlus"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(1).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Contract Plus</p>
              <p className={styles.shortDesc}>Contract Plus streamlines contract management with 55 customizable templates, secure sharing, and printing support for various paper sizes and AirPrint-compatible printers. Users can easily edit, duplicate, and add templates while benefiting from a powerful search function and guided data entry. While Contract Plus simplifies contract creation, legal consultation is recommended to ensure compliance with applicable laws.</p>
            </div>
          </div></Link>
          <Link href="/QuickNameBadge"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439q7mbmy/460x0w%20(11).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Quick Name Badge</p>
              <p className={styles.shortDesc}>Quick Name Badge is an easy-to-use app for printing customizable name badges with Brother printers, offering 11 badge styles and support for both batch processing and waterproof labels. Compatible with various Brother label and thermal printers, it allows users to print badges in red and black, with options to print from 1 to 99 copies. The app also supports P-touch tapes for durable, high-quality labels and is working on adding support for additional languages in the next release.</p>
            </div>
          </div></Link>
          <Link href="/EchoMind"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439prepcx/460x0w%20(3).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>EchoMind</p>
              <p className={styles.shortDesc}>EchoMind is an engaging app that combines a classic card game with brain-teasing challenges, perfect for players of all ages. With 10 levels of increasing difficulty, it tests your poker skills and offers a unique twist by revealing a foreign language word after each round. The app is both entertaining and mentally stimulating, making it a fun way to sharpen your cognitive abilities while learning a bit of math and probability.</p>
            </div>
          </div></Link>
          <Link href="/MightyWords"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439q2vtq8/460x0w%20(6).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>MightyWords</p>
              <p className={styles.shortDesc}>MightyWords is an app that transforms your thoughts, sayings, and quotes into visually stunning art, perfect for sharing on posters, apparel, and more. With customizable fonts, dynamic color options, and emoji integration, you can create eye-catching designs in any language, and export them as high-quality PNG files. You also have the option to print your creations using AirPrint-enabled or Brother printers, making it easy to bring your words to life.</p>
            </div>
          </div></Link>
          <Link href="/FingerCraft"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439q6r4xe/1286x0w%20(2).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Finger Craft</p>
              <p className={styles.shortDesc}>Finger Craft is a minimalist drawing app that lets you create personalized greeting cards and artwork, with the ability to securely save and easily share your designs. It supports AirPrint and Brother printers for direct printing, offering a variety of customizable options like pen colors, sizes, and clear canvas features. The app provides a simple, ad-free experience with full ownership of your designs, perfect for sending unique greetings and creating labels, stickers, and more.</p>
            </div>
          </div></Link>
          <Link href="/Prestidigitation"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439pyvbdh/460x0w%20(5).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Prestidigitation</p>
              <p className={styles.shortDesc}>This app lets you create over 18,000 unique gimmick cards for dazzling magic tricks, making it ideal for magicians, illusionists, and card enthusiasts. With an easy-to-use interface, you can seamlessly generate and print your cards using Brother label printers, and apply them to enhance your tricks. Featuring 13 mixing methods and a wide range of design options, it offers endless possibilities for crafting impressive illusions and adding flair to your performances</p>
            </div>
          </div></Link>
          <Link href="/StockGenie"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439q5b8nr/460x0w%20(9).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Stock Genie</p>
              <p className={styles.shortDesc}>Stock Genie is a privacy-focused app that allows you to securely create, customize, and manage multiple inventory and asset databases. It features powerful query functions, customizable fields, and easy sharing and printing options, ensuring smooth data handling. Whether you are managing inventory, assets, or properties, Stock Genie offers a versatile and secure solution for your data management needs.</p>
            </div>
          </div></Link>
          <Link href="/OneTapVoiceMemoAI"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439q49c64/460x0w%20(8).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>One Tap Voice Memo AI</p>
              <p className={styles.shortDesc}>One Tap Voice Memo AI is a simple, AI-powered app that allows you to record, transcribe, edit, and share voice memos with ease. With just one tap, you can record, transcribe, and edit your memos, customize the interface, and share your content effortlessly. The app ensures complete privacy, with all data stored securely on your device and no hidden fees or personal information collection.</p>
            </div>
          </div></Link>
          <Link href="/QuickBanner"><div className={styles.appBlock}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439pyvbdh/460x0w%20(4).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Quick Banner</p>
              <p className={styles.shortDesc}>Create banners easily with your Brother QL, RJ, TD, and PT thermal printers, ranging from 1 to 4 inches wide and up to 100 feet long. Simply select your printer, choose the paper size, and print or save your design with a tap. This app works seamlessly with Brother printers and allows you to print longer banners in Landscape orientation or use the NO CUT option for continuous printing.</p>
            </div>
          </div></Link>
          <Link href="/Chinese5000"><div className={`${styles.appBlock} ${styles.extra}`}>
            <div className={styles.togetherA}>
              <div className={styles.demoContainer}>
                <img className={styles.appDemoPhoneA} src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(2).webp" />
              </div>
              <div className={styles.propContainer}>
                <img className={styles.phonePropA1} src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" />
              </div>
            </div>
            <div className={styles.vertical}>
              <p className={styles.titleB}>Chinese 5000</p>
              <p className={styles.shortDesc}>Chinese 5000 offers an engaging way to master 5,400 Chinese characters and create over 380,000 words, with features like daily recitation, calligraphy practice, and puzzles. The app helps you progress from simple to complex characters, supporting learning through games, listening, and character combination. You can also print your progress with Brother printers and share your knowledge with others.</p>
            </div>
          </div></Link>
          <div className={styles.spacer} />
          <div className={styles.spacer} />
        </div>
        <div className={styles.spacer} />
      </div>
    </main>
  );
};

export default Apps;
