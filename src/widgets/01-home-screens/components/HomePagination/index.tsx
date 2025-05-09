import React from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";

const HomePagination: React.FC = () => {
    const [, setScrollProgress] = React.useState(0);

    const nav = React.useMemo(() => Object.values(HOME_PAG), []);

    const checkScrollProgress = () => {
        const elements: HTMLElement[] = [];
        nav.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                elements.push(section);
            }
        });
        let progress = 0;

        const currentScrollPosY = window.pageYOffset;
        const offset = window.innerHeight * 0.15;

        for (let i = elements.length - 1; i >= 0; i--) {
            const section = elements[i];
            const sectionPosY = section.getBoundingClientRect().top + window.pageYOffset;
            if (sectionPosY - offset <= currentScrollPosY) {
                progress = i;
                break;
            }
        }

        setScrollProgress(progress);
    };

    React.useEffect(() => {
        checkScrollProgress();
    }, []);

    React.useEffect(() => {
        window.addEventListener("scroll", checkScrollProgress);
        return () => window.removeEventListener("scroll", checkScrollProgress);
    });

    return <> </>;
};

export default HomePagination;
