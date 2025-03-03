import React from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./topics.module.scss";

export const Topics: React.FC = () => {
    const tags = [
        { text: "Based Rollups", emoji: "🔥" },
        { text: "Booster Rollups", emoji: "🚀" },
        { text: "Interoperability", emoji: "🔗" },
        { text: "Synchronous Composability", emoji: "🔄" },
        { text: "Ecosystem", emoji: "🌐" },
        { text: "Preconfirmations", emoji: "⚡" },
        { text: "AI Integration", emoji: "💻" },
        { text: "zkEVMs", emoji: "🔒" },
    ];

    return (
        <section className={css.topics} id={HOME_PAG.TOPICS}>
            <div className={css.topics_wrapper}>
                <h2 className={css.topics_label}>TECHNICAL TOPICS COVERED?</h2>
                <div className={css.tagsContainer}>
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className={css.tag}
                            style={{
                                backgroundColor: index % 2 === 0 ? "#ff6fc8" : "#ffc6e9",
                            }}
                        >
                            <span>{tag.emoji}</span> {tag.text}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
