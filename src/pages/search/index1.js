import { useEffect, useState } from "react";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import layoutStyle from "../../helpers/layout/layout.module.css";
import Recognition from "../../components/Recognition";
import style from "./search.module.css";
import axios from "axios";
import { BaseApi } from "../../utils/utils";
import CenterText from "../../components/Text/CenterText";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { Link } from "react-router-dom";

const Index = ({ blogData, serviceData, articleData }) => {
  console.log({ blogData, serviceData, articleData });
  const [isAll, setIsAll] = useState(true);
  const [isServices, setIsServices] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [isArticle, setIsArticle] = useState(false);

  const [loadMore, setLoadMore] = useState(false);

  //counting data
  console.log(blogData.data[0].countDocuments);
  const [allCOunt, setAllCount] = useState();
  const [servicesCount, setServicesCount] = useState(0);
  const [blogsCount, setBLogCount] = useState(0);
  const [articlesCount, setArticlesCount] = useState(0);

  // data
  const [allData, setAllData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);

  //last ids
  const [lastBlogId, setLastBlogId] = useState(null);

  // is next available
  const [isNextBlog, setIsNextBLog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // fetching bloglist
      const blogResponse = await axios.get(`${BaseApi}/blog/search?limit=5`);
      const blogData = await blogResponse.data;
      setIsNextBLog(blogData.data[0].isNextAvailable);
      setLastBlogId(blogData.data[0].lastBlogId);
      setBlogsData(blogData.data[0].foundBlogs);
      setAllData(...blogData.data[0].foundBlogs);
      setBLogCount(blogData.data[0].countDocuments);

      // fetching service Data
      const serviceResponse = await axios.get(
        `${BaseApi}/service/search?limit=5`
      );
      const serviceData = await serviceResponse.data;
      setServicesData(serviceData.data[0].foundServices);
      setServicesCount(serviceData.data[0].countDocuments);

      setAllCount(
        blogData.data[0].countDocuments + serviceData.data[0].countDocuments
      );

      const articleResponse = await axios.get(
        `${BaseApi}/service/search?limit=5`
      );
      const articleData = await articleResponse.data;
      setArticlesData(articleData);
    };
    fetchData();
  }, []);

  const setActive = (field) => {
    if (field == "services") {
      setIsServices(true);
      setIsBlog(false);
      setIsArticle(false);
      setIsAll(false);
    } else if (field == "blogs") {
      setIsServices(false);
      setIsBlog(true);
      setIsArticle(false);
      setIsAll(false);
    } else if (field == "articles") {
      setIsServices(false);
      setIsBlog(false);
      setIsArticle(true);
      setIsAll(false);
    } else {
      setIsServices(false);
      setIsBlog(false);
      setIsArticle(false);
      setIsAll(true);
    }
  };

  const LoadMoreData = async (id) => {
    if (isBlog) {
      setLoadMore(true);
      const response = await axios.get(
        `${BaseApi}/blog/search?limit=5&id=${id}`
      );
      const res = await response.data;
      setLastBlogId(res.data[0].lastBlogId);
      setIsNextBLog(res.data[0].isNextAvailable);
      const newBlogData = res.data[0].foundBlogs;
      var blogArray = [...blogsData];
      newBlogData.map((blogData) => {
        blogArray.push(blogData);
      });
      setBlogsData(blogArray);
      setLoadMore(false);
    }
  };

  return (
    <>
      <Banner>
        <p className={BannerStyle.BigHeading}>search</p>
        <p className={BannerStyle.midHeading}>search title goes here</p>
      </Banner>
      <div className={layoutStyle.RootDiv}>
        <div className={style.searchInputSection}>
          <input className={style.searchInput} placeholder="Search..." />
          <div className={style.searchButton}>
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div className={style.searchSections}>
          <div
            onClick={() => setActive("all")}
            className={isAll ? style.activeSearchElement : style.searchElement}
          >
            <p className={style.searchElementField}>
              All<span className={style.searchCount}>({allCOunt})</span>
            </p>
          </div>
          <div
            onClick={() => setActive("blogs")}
            className={isBlog ? style.activeSearchElement : style.searchElement}
          >
            <p className={style.searchElementField}>
              Blogs<span className={style.searchCount}>({blogsCount})</span>
            </p>
          </div>
          <div
            onClick={() => setActive("articles")}
            className={
              isArticle ? style.activeSearchElement : style.searchElement
            }
          >
            <p className={style.searchElementField}>
              Articles
              <span className={style.searchCount}>({articlesCount})</span>
            </p>
          </div>
        </div>

        <div className={style.searchData}>
          <div className={isAll ? style.aciveData : style.data}>
            {allData.map((data, index) => {
              return (
                <Link href={`/blog/${data._id}`} className={style.dataElement}>
                  <p className={style.dataHeading}>{data.heading}</p>
                  <p className={style.dataSubHeading}>{data.sub_heading}</p>
                  <p className={style.divider}></p>
                </Link>
              );
            })}
          </div>
          <div className={isServices ? style.aciveData : style.data}>
            {servicesData.map((data, index) => {
              return (
                <div className={style.dataElement}>
                  <p className={style.dataHeading}>{data.heading}</p>
                  <p className={style.dataSubHeading}>{data.subHeading}</p>
                </div>
              );
            })}
          </div>
          <div className={isBlog ? style.aciveData : style.data}>
            {blogsData.map((data, index) => {
              return (
                <Link href={`/blog/${data._id}`} className={style.dataElement}>
                  <p className={style.dataHeading}>{data.heading}</p>
                  <p className={style.dataSubHeading}>{data.sub_heading}</p>
                  <p className={style.divider}></p>
                </Link>
              );
            })}
            <div
              onClick={() => LoadMoreData(lastBlogId)}
              className={
                isNextBlog === false
                  ? style.hidden
                  : loadMore == true
                  ? style.hidden
                  : style.buttonContainer
              }
            >
              <SecondaryButton text="View More" dark />
            </div>
            <div
              className={
                loadMore == false ? style.hidden : style.buttonContainer
              }
            >
              <CenterText paragraphs="Loading..." />
            </div>
          </div>
          <div className={isArticle ? style.aciveData : style.data}>
            <div className={style.dataElement}>
              <p className={style.dataHeading}>articles</p>
              <p className={style.dataSubHeading}>
                testing subheading: We are committed to providing our customers
                with exceptional service while offering our employess the best
                training
              </p>
            </div>
            <div className={style.dataElement}>
              <p className={style.dataHeading}>Heading</p>
              <p className={style.dataSubHeading}>
                testing subheading: We are committed to providing our customers
                with exceptional service while offering our employess the best
                training
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
