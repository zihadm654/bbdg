import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import styles from "./blog.module.css";
import CenterText from "../../components/Text/CenterText";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Recognition from "../../components/Recognition";
import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "../../utils/utils";
import { useLocation } from "react-router";
import Helmet from "react-helmet";
import Loader from "../../helpers/PrimaryLoading/PrimaryLoading";
function Index() {
  const { pathname } = useLocation();
  const [limit, setLimit] = useState(0);
  // const [limitBlogs, setLimitBlogs] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState();
  const [lastBlogId, setLastBlogId] = useState("");
  const [blogList, setBlogList] = useState([]);
  const [moreBlog, setMoreBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const fetchData = async () => {
      setLimit(5);
      // fetching first 5 blogs
      const blogRef = await axios.get(`${BaseApi}/blog/all?limit=5`);
      const limitData = await blogRef.data;
      const data = limitData.data;

      // all the limit blogs
      // setLimitBlogs(data);

      setLastBlogId(data[0].lastBlogId);
      setBlogList(data[0].foundBlogs);
      setIsNextAvailable(data[0].isNextAvailable);
    };
    fetchData();
  }, []);
  const LoadMoreData = async (id) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          // fetching more blog data after 5 blogs
          const getMoreBlog = await axios.get(
            `${BaseApi}/blog/all?limit=${limit}&id${lastBlogId}`
          );
          const res = await getMoreBlog;
          setMoreBlog(res.data);

          setLoadMore(true);
          setLastBlogId(moreBlog.data[0].lastBlogId);
          setIsNextAvailable(moreBlog.data[0].isNextAvailable);
          const newBlogData = moreBlog.data[0].foundBlogs;
          let blogArray = [...blogList];
          newBlogData.map((blogData) => {
            const blogLists = blogArray.push(blogData);
            return blogLists;
          });
          setBlogList(blogArray);
          setLoadMore(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  };
  LoadMoreData();

  return (
    <>
      {loading ? <Loader /> : null}
      <Helmet>
        <title>Blog | BBDG</title>
      </Helmet>
      <Banner>
        <p className={BannerStyle.smallHeading}>BLOG</p>
        <p className={BannerStyle.BigHeading}>BLOGS</p>
        <br />
        <p className={BannerStyle.midHeading}>
          {" "}
          OUR EXPERTS WILL SHARE KNOWLEDGE AND VIEWS, FROM TECHNOLOGY TO ONLINE
          MARKETING AND ANYTHING IN BETWEEN JOURNALISTS AND RESEARCHERS
        </p>
      </Banner>
      {blogList?.map((blog) => (
        <Recognition
          key={blog._id}
          headText={blog.heading}
          para={blog.sub_heading}
          redirectUrl={`${pathname}/${blog._id}`}
        />
      ))}
      <div
        onClick={() => LoadMoreData(lastBlogId)}
        className={
          isNextAvailable === false
            ? styles.hidden
            : loadMore === true
            ? styles.hidden
            : styles.buttonContainer
        }
      >
        <SecondaryButton text="View More" dark />
      </div>
      <div
        className={loadMore === false ? styles.buttonContainer : styles.hidden}
      >
        <CenterText paragraphs="Loading..." />
      </div>
    </>
  );
}

export default Index;
