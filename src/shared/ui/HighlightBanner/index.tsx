import css from "./highlight-banner.module.scss";

export const EventHighlightsBanner = ({ content }: { content: string }) => {
    const repeatCount = 10; // Adjust to ensure enough content for seamless scroll

    return (
        <div className={css.event_highlights_banner}>
            <div className={css.event_highlights_banner__content}>
                {Array.from({ length: repeatCount }).map((_, i) => (
                    <span key={i}>{content}</span>
                ))}
            </div>
        </div>
    );
};
