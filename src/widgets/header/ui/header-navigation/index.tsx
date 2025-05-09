import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import clsx from "clsx";
import { NavHeader } from "widgets/header/lib";
import { NavLink } from "shared/lib/types/navigation.types";
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
    const [navActive] = React.useState<NavHeader | null>(null);

    const navigation = [
        {
            id: 1,
            name: "About",
            href: "about",
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
            href: "speakers",
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
                <ScrollLink
                    key={item.id}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className={css.nav_item}
                >
                    {item.name}
                </ScrollLink>
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
