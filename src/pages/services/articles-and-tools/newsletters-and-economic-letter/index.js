import Banner from "../../../../helpers/Banner/Banner";
import BannerStyle from "../../../../helpers/Banner/Banner.module.css";
import CustomHead from "../../../../helpers/header/CustomHead";
import NewsLetterCard from "../../../../components/NewsLetterCard";
import { useState } from "react";
import axios from "axios";
import { BaseApi } from "../../../../utils/utils"
import styles from "./index.module.css"
import SecondaryButton from "../../../../components/Buttons/SecondaryButton";
import CenterText from "../../../../components/Text/CenterText";
const index = (props) => {
    const [limit, setLimit] = useState(2);
    const [loadMore, setLoadMore] = useState(false)
    const [isNextAvailable, setIsNextAvailable] = useState(props.res.data[0].isNextAvailable)
    const [lastNewsLetterId, setLastNewLetterId] = useState(props.res.data[0].lastNewsLetterId)
    const [newsLetterArray, setNewsLetterArray] = useState(props.res.data[0].foundNewsLetters)



    const LoadMoreData = async (id) => {
        setLoadMore(true)
        const response = await axios.get(`${BaseApi}/newsletterandeventletters/all?limit=${limit}&id=${lastNewsLetterId}`)
        const res = await response.data;
        setLastNewLetterId(res.data[0].lastNewsLetterId)
        setIsNextAvailable(res.data[0].isNextAvailable)
        const newData = res.data[0].foundNewsLetters;
        var LetterArray = [...newsLetterArray];
        newData.map(letterData => {
            LetterArray.push(letterData)
        })
        setNewsLetterArray(LetterArray)
        setLoadMore(false)
    }
    return (
        <>
            <CustomHead title="newsletters and economic letter" />
            <Banner>
                <p className={BannerStyle.smallHeading}>services <i className='fas fa-chevron-right'></i> articles and tools <i className='fas fa-chevron-right'></i> <span className={BannerStyle.lowOpacity}>newsletters and economic letter</span></p>
                <br />
                <p className={BannerStyle.BigHeading}>newsletters and economic letter</p>
                <br />
            </Banner>
            {newsLetterArray.map((data, index) => {
                return (
                    <NewsLetterCard heading={data.subject} subHeading={data.sub_heading} id={data._id} />
                )
            })}

            <div onClick={() => LoadMoreData(lastNewsLetterId)} className={isNextAvailable === false ? styles.hidden : loadMore == true ? styles.hidden : styles.buttonContainer}>
                <SecondaryButton text="Discover More" dark />
            </div>

            <div className={loadMore == false ? styles.hidden : styles.buttonContainer}>
                <CenterText paragraphs="Loading..." />
            </div>
        </>
    )
}


export default index;

export async function getStaticProps() {
    const response = await axios.get(`${BaseApi}/newsletterandeventletters/all`);
    const data = await response.data;

    return {
        props: {
            res: data,
        },
        revalidate: 10,
    };
}
