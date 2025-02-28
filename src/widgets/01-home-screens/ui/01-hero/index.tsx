import React from "react";
import css from "./hero.module.scss";

export const Hero: React.FC = () => {
    return (
        <section className={css.hero}>
            {/* Video Background */}
            <video className={css.hero_video} autoPlay loop muted playsInline>
                <source src="/img/herosection/heroBlobby.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Container */}
            <div className={css.container}>
                {/* Left Section - Hero Title */}
                <div className={css.hero_left}>
                    <h1>
                        <span>Based</span>
                        <span>Rollup</span>
                        <span>Summit</span>
                    </h1>
                </div>

                {/* Right Section - Small Text */}
                <div className={css.hero_right}>
                    <p>The First-Ever Summit Dedicated to Truly Decentralized Scaling Solutions.</p>
                </div>
            </div>
        </section>
    );
};
