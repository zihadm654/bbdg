import Banner from "../helpers/Banner/Banner"
import LayoutStyle from "../helpers/layout/layout.module.css"
import Markdown from 'markdown-to-jsx';
import BannerStyle from "../helpers/Banner/Banner.module.css";
const temp = () => {
    
  const Content = `<p><strong>BBGD special Growth Driver program - Making entrepreneurship development our priority in the testing times</strong></p>
  <p><strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>is not merely committed to the well-being of the businesses but also the health of the entrepreneurs. With covid-19, all businesses are going through tough times. These unprecedented and unsettling times are taking a toll on the health of the entrepreneurs.</p>
  <p>The pandemic has exerted pressure on entrepreneurs and as a result, a large number of small and medium enterprises see a rise in stress, anxiousness and hopelessness. We hope that all the tips and resources offered by us can help to reduce the stress on you and your family.</p>
  <p>If you need any help then you can contact your project manager at <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG)</strong> and they will bring the best solution for your problems and guide you through each step of the way.<strong>&nbsp;</strong></p>
  <p><strong>It is the time to talk about your health and wellness</strong></p>
  <p>Numerous researches have proven that entrepreneurs are dealing with stress, fatigue and uncertainties.</p>
  <p>Our experts will deliver you practical advice and help you to get time for yourself. You can also talk about ways to handle stress and overcome burnout. At the same time, it is important to ensure that you -</p>
  <ul>
  <li>Ensure that your stress is productive and motivational instead of being damaging.</li>
  <li>It is important to adopt a healthy lifestyle and seek new ways to overcome the crisis</li>
  <li>If left untreated or unchecked then these levels can have long term consequences.</li>
  <li>Learn steps to harmonize your personal and professional life.</li>
  <li>It is crucial to attain relaxation and promote a stress-free lifestyle.</li>
  <li>It is crucial to set realistic goals for yourself and then work to attain them.<strong>&nbsp;</strong></li>
  </ul>
  <p><strong>A healthy work environment can work wonders for you and your team</strong></p>
  <p>It is important to maintain a psychologically healthy and safe work environment for yourself and your team. This becomes crucial during hard times like now. A tiring work environment can create issues and lead to major issues. This helps you to overcome disruptive issues.</p>
  <p>Happiness doesn't just happen and you need to have a positive outlook and the same can help you to boost the overall environment of your business. This will help you to stay upbeat in these tough times.</p>
  <p><strong>Strengthen the well-being with the new routine</strong></p>
  <p>As a leader of your business, it is important to maintain your good health and invest in the well-being of your employees. Since, the challenges posed by the pandemic have been tiring, having a new routine helps to overcome the major problems. Choosing the <strong>Bajaj Global Business Development &amp; Consultancy Group (BBDG) </strong>can help you to overcome the uncertainties and deliver the best results.</p>
  <p>We will help you to organize your days and make sure that you have the right advice and guidance to bring in a positive impact. The payoff of this will help you to alleviate stress and overcome the strain of new business and streamline to give a better experience and financial outcomes.</p>
  <p><strong>&nbsp;</strong></p>
  <p>&nbsp;</p>
  `;
    return (
        <>
            <Banner>

            </Banner>

            <Markdown className={LayoutStyle.markDownStyle}>{Content}</Markdown>
        </>
    )
}

export default temp;