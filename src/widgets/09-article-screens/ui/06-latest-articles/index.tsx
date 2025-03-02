import React from "react";
import { useTranslation } from "next-i18next";
import { useQuery } from "@tanstack/react-query";
import { ArticleApiEnum } from "widgets/09-article-screens/lib/types";
import { BlogSliderLayout } from "entities/article";
import { IBlogsResponse } from "shared/lib/types";
import css from "./latest-articles.module.scss";

export const LatestArticles: React.FC = () => {
    const { data } = useQuery<IBlogsResponse>({ queryKey: [ArticleApiEnum.LATEST_ARTICLES] });
    const { t } = useTranslation("article");

    return (
        <section className={css.articles}>
            <BlogSliderLayout title={t("latestArticles")} data={data?.results || []} />
        </section>
    );
};
