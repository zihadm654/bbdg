import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import CustomHead from "../../helpers/header/CustomHead";
import styles from "./blog.module.css";
import CenterText from "../../components/Text/CenterText";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Recognition from "../../components/Recognition";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {BaseApi} from "../../utils/utils"

function index(props) {
  const route = useRouter();
  const [limit, setLimit] = useState(5);
  const [loadMore, setLoadMore] = useState(false)
  const [isNextAvailable, setIsNextAvailable] = useState(props.res.data[0].isNextAvailable)
  const [lastBlogId, setLastBlogId] = useState(props.res.data[0].lastBlogId)
  const [blogListData, setBlogListData] = useState(props.res.data[0].foundBlogs);

  const LoadMoreData = async (id) => {
    setLoadMore(true)
    const response = await axios.get(`${BaseApi}/blog/all?limit=${limit}&id=${lastBlogId}`)
    const res = await response.data;
    setLastBlogId(res.data[0].lastBlogId)
    setIsNextAvailable(res.data[0].isNextAvailable)
    const newBlogData = res.data[0].foundBlogs;
    var blogArray = [...blogListData];
    newBlogData.map(blogData => {
      blogArray.push(blogData)
    })
    setBlogListData(blogArray)
    setLoadMore(false)
  }

  
  return (
    <>
      <CustomHead title="blogs" />
      <Banner>
        {/* <p className={BannerStyle.smallHeading}>BLOG</p> */}
        <p className={BannerStyle.BigHeading}>
          BLOGS
        </p>
        <br />
        <p className={BannerStyle.midHeading}>
          OUR EXPERTS WILL SHARE
          KNOWLEDGE AND VIEWS, FROM
          TECHNOLOGY TO ONLINE
          MARKETING AND ANYTHING
          IN BETWEEN
          JOURNALISTS AND RESEARCHERS
        </p>
      </Banner>
      {
        blogListData.map(blog =>
          <Recognition
            key={blog._id}
            headText={blog.heading}
            para={blog.sub_heading}
            redirectUrl={`${route.pathname}/${blog._id}`}
          />
        )
      }
      <div onClick={() => LoadMoreData(lastBlogId)} className={isNextAvailable === false ? styles.hidden : loadMore == true ? styles.hidden : styles.buttonContainer}>
        <SecondaryButton text="View More" dark />
      </div>
      <div className={loadMore == false ? styles.hidden : styles.buttonContainer}>
        <CenterText paragraphs="Loading..." />
      </div>

    </>
  );
}

export default index;

export async function getServerSideProps() {
  const response = await axios.get(`${BaseApi}/blog/all?limit=5`)
  const data = await response.data;

  return {
    props: {
      res: data
    }
  }

}