import React from "react";
import { useTranslation } from "next-i18next";
import { useQuery } from "@tanstack/react-query";
import { HomeApiKeys, HomeScreensEnum } from "widgets/old/01-home-screens/lib/types";
import { IBlogsResponse } from "shared/lib/types";
import css from "./blog.module.scss";

const Blog: React.FC = () => {
    const { data } = useQuery<IBlogsResponse>({ queryKey: [HomeApiKeys.BLOG] });
    const { t } = useTranslation("home");

    return (
        <section className={css.blog} id={HomeScreensEnum.BLOG}>
        </section>
    );
};

export default Blog;
