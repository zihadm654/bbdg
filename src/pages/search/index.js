import { useEffect, useState } from "react";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import layoutStyle from "../../helpers/layout/layout.module.css";
// import Recognition from "../../components/Recognition";
import style from "./search.module.css";
import axios from "axios";
import { BaseApi } from "../../utils/utils";
// import CenterText from "../../components/Text/CenterText";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { Spinner } from "react-bootstrap";
import Helmet from "react-helmet";

const Index = () => {
  const [isAll, setIsAll] = useState(true);
  const [isBlog, setIsBlog] = useState(false);
  const [isArticle, setIsArticle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("blog");
  const [loadMore, setLoadMore] = useState(false);
  const [searchText, setSearchText] = useState("");

  //blogs + articles count
  const [allCount, setAllCount] = useState(0);
  //counts

  const [blogsCount, setBlogCount] = useState(0);
  const [articlesCount, setArticlesCount] = useState(0);
  //data
  const [blogsData, setBlogsData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);
  // last id
  const [lastBlogId, setLastBlogId] = useState(null);
  const [lastArticleId, setLastArticleId] = useState(null);

  // is next available
  const [isNextBlog, setIsNextBlog] = useState(null);
  const [nextService, setNextService] = useState(null);
  const [allData, setAllData] = useState([...blogsData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetching blog data
        const blogRes = await axios.get(`${BaseApi}/blog/search/id?limit=5`);
        const blogData = await blogRes.data;
        const blogs = await blogData.data[0];

        // fetching service data
        const serviceRes = await axios.get(
          `${BaseApi}/service/search/id?limit=5`
        );
        const serviceData = await serviceRes.data;
        const services = await serviceData.data[0];

        // all counts of different data
        setAllCount(services.documentsCount + blogs.documentsCount);

        setBlogCount(blogs.documentsCount);
        setBlogsData(blogs.foundBlogs);
        setLastBlogId(blogs.lastBlogId);
        setIsNextBlog(blogs.isNextAvailable);

        setArticlesCount(services.documentsCount);
        setArticlesData(services.foundServices);
        setLastArticleId(services.lastArticleId);
        setNextService(services.isNextAvailable);
      } catch (error) {
        console.log(error);
      }
      //   const articleResponse = await axios.get(`${BaseApi}/service/search?limit=5`);
      //   const articleData = await articleResponse.data;
    };
    fetchData();
  }, []);

  const LoadMoreData = async () => {
    setLoadMore(true);

    if (activeMenu === "service") {
      const response = await axios.get(
        `${BaseApi}/${activeMenu}/search/${searchText}id/${lastArticleId}/?limit=5`
      );
      const res = await response.data;
      const data = res.data[0];

      setLastArticleId(data.lastServiceId);
      setNextService(data.isNextAvailable);

      const newServiceData = data.foundServices;
      var dummyArray = articlesData;
      dummyArray = dummyArray.concat(newServiceData);
      setArticlesData(dummyArray);
      setAllData(dummyArray);
      setLoadMore(false);
    } else if (activeMenu === "blog") {
      const response = await axios.get(
        `${BaseApi}/${activeMenu}/search/${searchText}id/${lastBlogId}/?limit=5`
      );
      const res = await response.data;
      const data = await res.data[0];
      setLastBlogId(data.lastBlogId);
      setIsNextBlog(data.isNextAvailable);
      setBlogsData((prev) => [...prev, ...data.foundBlogs]);
      setAllData((prev) => [...prev, ...data.foundBlogs]);
      setLoadMore(false);
    }
  };

  const searchTextHandler = async () => {
    setLoadMore(true);
    const blogResponse = await axios.get(
      `${BaseApi}/blog/search/${searchText}id?limit=5`
    );
    const serviceResponse = await axios.get(
      `${BaseApi}/service/search/${searchText}id?limit=5`
    );
    setBlogsData(blogResponse.data.data[0].foundBlogs);
    setArticlesData(serviceResponse.data.data[0].foundServices);
    setIsNextBlog(blogResponse.data.data[0].isNextAvailable);
    setNextService(serviceResponse.data.data[0].isNextAvailable);
    setAllCount(blogResponse.data.data[0].documentsCount);
    setBlogCount(blogResponse.data.data[0].documentsCount);
    setArticlesCount(serviceResponse.data.data[0].documentsCount);
    activeMenu === "blog"
      ? setAllData(blogResponse.data.data[0].foundBlogs)
      : setAllData(serviceResponse.data.data[0].foundServices);
    setLoadMore(false);
  };

  const setActive = (field) => {
    setIsBlog(false);
    setIsArticle(false);
    setIsAll(false);
    switch (field) {
      case "articles":
        setIsArticle(true);
        setAllData(articlesData);
        setActiveMenu("service");
        break;
      case "blogs":
        setIsBlog(true);
        setAllData(blogsData);
        setActiveMenu("blog");
        break;
      case "all":
        setIsAll(true);
        setAllData(blogsData);
        setActiveMenu("all");
        break;
      default:
        setIsBlog(true);
        setAllData(blogsData);
        setActiveMenu("all");
    }
  };

  return (
    <>
      <Helmet>
        <title>Search | BBDG</title>
      </Helmet>
      <Banner>
        <p className={BannerStyle.BigHeading}>search</p>
        <p className={BannerStyle.midHeading}>search title goes here</p>
      </Banner>
      <div className={layoutStyle.RootDiv}>
        <div className={style.searchInputSection}>
          <input
            onChange={(e) => setSearchText(e.target.value + "/")}
            className={style.searchInput}
            placeholder="Search..."
          />
          <div
            onClick={(e) => {
              e.preventDefault();
              searchTextHandler();
            }}
            className={style.searchButton}
          >
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className={style.searchSections}>
          <div
            onClick={() => setActive("all")}
            className={isAll ? style.activeSearchElement : style.searchElement}
          >
            <p className={style.searchElementField}>
              All<span className={style.searchCount}>({allCount})</span>
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
          {/* <div className={isAll ? style.aciveData : style.data}> */}
          {loadMore ? (
            <div
              style={{
                height: "20vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spinner animation="grow" />
            </div>
          ) : allData.length > 0 ? (
            allData.map((data, index) => {
              return (
                <a
                  key={index}
                  href={
                    data.perma_link
                      ? "" + data.perma_link + ""
                      : "/blog/" + data._id
                  }
                >
                  <div className={style.dataElement}>
                    <p className={style.dataHeading}>{data.heading}</p>
                    <p className={style.dataSubHeading}>
                      {activeMenu === "service"
                        ? data.subHeading
                        : data.sub_heading}
                    </p>
                    <p className={style.divider}></p>
                  </div>
                </a>
              );
            })
          ) : (
            <div className={style.noContent}>
              <p>No content found!</p>
            </div>
          )}

          {!loadMore && (
            <div
              onClick={() => LoadMoreData()}
              className={
                (activeMenu === "blog" && isNextBlog) ||
                (activeMenu === "service" && nextService)
                  ? style.buttonContainer
                  : style.hidden
              }
            >
              <SecondaryButton text="Load More" dark />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Index;
