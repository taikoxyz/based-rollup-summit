import React from "react";
import { HomeScreensEnum } from "widgets/old/01-home-screens/lib/types";
import css from "./blog.module.scss";

const Blog: React.FC = () => {
    return <section className={css.blog} id={HomeScreensEnum.BLOG}></section>;
};

export default Blog;
