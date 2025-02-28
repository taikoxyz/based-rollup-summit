import React from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import clsx from "clsx";
import { NavHeader, useNavigationHeader } from "widgets/header/lib";
import ArrowDownIcon from "shared/icons/ArrowDown.icon";
import ArrowLinkIcon from "shared/icons/ArrowLink.icon";
import { NavLink } from "shared/lib/types/navigation.types";
import { executeOnReadyPage } from "shared/lib/utils/browser";
import { fileServerPath } from "shared/lib/utils/file-server-path";
import { loadImage } from "shared/lib/utils/loadImage";
import { loadVideo } from "shared/lib/utils/loadVideo";
import Accordion from "shared/ui/Accordion";
import Image from "shared/ui/image";
import css from "./header-navigation.module.scss";

interface Props {
    className?: string;
}

function RenderItem(link: NavLink) {
    const external = link.href?.startsWith("http");

    const content = (
        <>
            {link.name}
            {link.disabled && <span className={css.menu_content_comingSoon}>Coming soon</span>}
        </>
    );

    return (
        <React.Fragment key={link.name + link.href}>
            {link.children.length === 0 && (
                <Link
                    className={css.menu_content_link}
                    href={link.href || "#"}
                    target={external ? "_blank" : undefined}
                    prefetch={false}
                >
                    {content}
                </Link>
            )}
        </React.Fragment>
    );
}

export const HeaderNavigation: React.FC<Props> = ({ className }) => {
    const [navActive, setNavActive] = React.useState<NavHeader | null>(null);
    const [active, setActive] = React.useState(false);
    const navigation = [
        {
            id: 1,
            name: "About",
            rank: 0,
            createdAt: "2025-02-05T16:52:03.933Z",
            updatedAt: "2025-02-26T16:36:55.421Z",
            publishedAt: "2025-02-05T16:52:10.864Z",
            media: {
                url: "",
                alternativeText: "",
            },
            links: [],
        },
        {
            id: 2,
            name: "Speakers",
            rank: 1,
            createdAt: "",
            updatedAt: "",
            publishedAt: "",
            media: {
                url: "",
                alternativeText: "",
            },
            links: [],
        },
    ];

    return (
        <div className={clsx(css.nav, navActive && css._active, className)}>
            {navigation.map((item) => (
                <button
                    className={clsx(css.nav_item, item.name === navActive?.name && css._active)}
                    key={item.name}
                >
                    {item.name}
                </button>
            ))}

            <div className={css.menu}>
                <div className={css.menu_content}>
                    {(navActive?.links || []).map((column, id) => (
                        <div className={css.menu_content_column} key={id}>
                            {column.map((link) => (
                                <RenderItem {...link} key={link.name + link.href} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
