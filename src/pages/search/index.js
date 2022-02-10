import { useState } from "react";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import CustomHead from "../../helpers/header/CustomHead";
import layoutStyle from "../../helpers/layout/layout.module.css";
import Recognition from "../../components/Recognition";
import style from "./search.module.css";
import axios from "axios";
import Link from "next/link";
import { BaseApi } from "../../utils/utils";
import CenterText from "../../components/Text/CenterText";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
const index = ({ blogData, serviceData, articleData }) => {
  const [isAll, setIsAll] = useState(true);
  const [isBlog, setIsBlog] = useState(false);
  const [isArticle, setIsArticle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("blog");
  const [loadMore, setLoadMore] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [allCount, setAllCount] = useState(
    blogData.data[0].documentsCount + serviceData.data[0].documentsCount
  );

  const [blogsCount, setBlogCount] = useState(blogData.data[0].documentsCount);
  const [articlesCount, setArticlesCount] = useState(
    serviceData.data[0].documentsCount
  );
  const [allData, setAllData] = useState([...blogData.data[0].foundBlogs]);

  const [blogsData, setBlogsData] = useState(blogData.data[0].foundBlogs);
  const [articlesData, setArticlesData] = useState(
    serviceData.data[0].foundServices
  );
  const [lastBlogId, setLastBlogId] = useState(blogData.data[0].lastBlogId);
  const [lastArticleId, setLastArticleId] = useState(
    serviceData.data[0].lastServiceId
  );
  // is next available
  const [isNextBlog, setIsNextBLog] = useState(
    blogData.data[0].isNextAvailable
  );

  const [nextService, setnextService] = useState(
    serviceData.data[0].isNextAvailable
  );

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
        setActiveMenu("blog");
        break;
    }
  };

  useEffect(() => {}, [activeMenu]);

  const LoadMoreData = async () => {
    setLoadMore(true);

    if (activeMenu === "service") {
      const response = await axios.get(
        `${BaseApi}/${activeMenu}/search/${searchText}id/${lastArticleId}/?limit=5`
      );

      const res = await response.data;
      setLastArticleId(res.data[0].lastServiceId);
      setnextService(res.data[0].isNextAvailable);
      const newServiceData = res.data[0].foundServices;
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
      setLastBlogId(res.data[0].lastBlogId);
      setIsNextBLog(res.data[0].isNextAvailable);
      setBlogsData((prev) => [...prev, ...res.data[0].foundBlogs]);
      setAllData((prev) => [...prev, ...res.data[0].foundBlogs]);
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
    setIsNextBLog(blogResponse.data.data[0].isNextAvailable);
    setnextService(serviceResponse.data.data[0].isNextAvailable);
    console.log(serviceResponse.data.data[0], blogResponse.data.data[0]);
    setAllCount(blogResponse.data.data[0].documentsCount);
    setBlogCount(blogResponse.data.data[0].documentsCount);
    setArticlesCount(serviceResponse.data.data[0].documentsCount);
    activeMenu === "blog"
      ? setAllData(blogResponse.data.data[0].foundBlogs)
      : setAllData(serviceResponse.data.data[0].foundServices);
    setLoadMore(false);
  };

  return (
    <>
      <CustomHead title="Search" />
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
            <i class="fas fa-search"></i>
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
                <Link
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
                </Link>
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

export default index;

export async function getServerSideProps() {
  const blogResponse = await axios.get(`${BaseApi}/blog/search/id?limit=5`);
  const blogData = await blogResponse.data;

  const serviceResponse = await axios.get(
    `${BaseApi}/service/search/id?limit=5`
  );
  const serviceData = await serviceResponse.data;

  //   const articleResponse = await axios.get(`${BaseApi}/service/search?limit=5`);
  //   const articleData = await articleResponse.data;

  return {
    props: {
      blogData,
      serviceData,
      articleData: serviceData,
    },
  };
}
