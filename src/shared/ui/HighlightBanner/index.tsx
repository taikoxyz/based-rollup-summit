import Marquee from "react-fast-marquee";
import css from "./highlight-banner.module.scss";

export const EventHighlightsBanner = ({ content }: { content: string }) => {
    return (
        <div className={css.event_highlights_banner}>
            <Marquee>
                {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className={css.banner_item}>
                        {content}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};
