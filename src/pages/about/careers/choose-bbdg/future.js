import Head from "next/head";
import Image from "next/image";
import CustomHead from "../../../../helpers/header/CustomHead";
import LayoutCSS from "../../../../helpers/layout/layout.module.css";
import Banner from "../../../../helpers/Banner/Banner";
import BannerStyle from "../../../../helpers/Banner/Banner.module.css";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import style from "./future.module.css";
import Text from "../../../../components/Text/Text";


export default function Home() {
  return (
    <div>
      <main>
        <CustomHead />
        <Banner>
          <p className={BannerStyle.smallHeading}>ABOUT US &#62; CAREERS ABOUT US  <span className={BannerStyle.lowOpacity}> &#62; CAREERS &#62; CHOOSE BBDG - A BANK FOR FUTURE ENTREPRENEURS </span>      </p>

          <p className={BannerStyle.BigHeading}>A BANK FOR <br></br>

FUTURE<br></br>
ENTREPRENEURS </p>
          <p className={BannerStyle.midHeading}><br></br>Lorem ipsum dolor sit amet      </p>
        </Banner>
        < Text

          paragraphs={
            [
              {
                para: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
              },
              {
                para: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ',
              },
              {
                para: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC ',
              },
              {
                para: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
              },
              {
                para: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
              }
            ]
          }

        />
      </main>
    </div>
  );
}
