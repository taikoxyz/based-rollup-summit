import React from "react";
import { SideNav } from "../07.01-side-nav";
import { Heading, useArticle } from "widgets/09-article-screens/lib";
import { RichText } from "shared/components/rich-text";
import { MediaQuery } from "shared/ui/media-query";
import css from "./content.module.scss";

export const Content: React.FC = () => {
    const { content } = useArticle();

    return (
        <section className={css.content}>
            <MediaQuery
                query="(max-width: 1124px)"
                children={
                    <div className={css.nav}>
                        <SideNav />
                    </div>
                }
            />
            <RichText
                className={css.text}
                content={content}
                blocks={{
                    link: ({ children, url }: any) => (
                        <a href={url} target="_blank">
                            {children}
                        </a>
                    ),
                    heading: Heading,
                }}
            />
        </section>
    );
};
