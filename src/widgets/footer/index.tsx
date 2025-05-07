import React from "react";
import { useNavigationOneLevel } from "widgets/header/lib";
import { FooterSocials } from "widgets/old/footer/ui";
import ArrowLinkIcon from "shared/icons/ArrowLink.icon";
import { NextLink } from "shared/ui/NextLink";
import css from "./footer.module.scss";

export const Footer: React.FC = () => {
    const navigation = [
        {
            name: "Alethia",
            links: [
                {
                    name: "About",
                    href: "https://taiko.xyz/alethia",
                },
                {
                    name: "Apps",
                    href: "https://taiko.xyz/ecosystem",
                },
                {
                    name: "Taiko Takeoff",
                    href: "https://takeoff.taiko.xyz/",
                },
                {
                    name: "Docs",
                    href: "https://docs.taiko.xyz/start-here/getting-started",
                },
                {
                    name: "Bridge",
                    href: "https://bridge.taiko.xyz/",
                },
                {
                    name: "Taikoscan.io",
                    href: "https://taikoscan.io/",
                    desc: "By Etherscan",
                },
                {
                    name: "Taikoexplorer.com",
                    href: "https://taikoexplorer.com/",
                    desc: "By Routescan",
                },
            ],
        },
        {
            name: "Gwyneth",
            links: [
                {
                    name: "About",
                    href: "https://taiko.xyz/gwyneth",
                },
                {
                    name: "Apps",
                    href: "https://taiko.xyz/gwyneth/apps",
                },
                {
                    name: "Docs",
                    href: "https://docs.taiko.xyz/start-here/getting-started",
                },
            ],
        },
        {
            name: "Governance",
            links: [
                {
                    name: "Learn",
                    href: "https://taiko.xyz/dao",
                },
                {
                    name: "DAO App",
                    href: "https://hekla.dao.taiko.xyz/",
                },
                {
                    name: "Docs",
                    href: "https://docs.taiko.xyz/start-here/getting-started",
                },
            ],
        },
        {
            name: "Learn",
            links: [
                {
                    name: "About",
                    href: "https://taiko.xyz/about",
                },
                {
                    name: "Blog",
                    href: "https://taiko.xyz/blog",
                },
                {
                    name: "Brand Kit",
                    href: "https://taiko.xyz/brand-assets",
                },
                {
                    name: "Careers",
                    href: "https://taiko.xyz/careers",
                },
                {
                    name: "Grants",
                    href: "https://taiko.xyz/grant-program",
                },
            ],
        },
        {
            name: "Engage",
            links: [
                {
                    name: "Trailblazer",
                    href: "https://trailblazers.taiko.xyz/",
                },
                {
                    name: "Snaefell NFT",
                    href: "https://snaefellnft.taiko.xyz/",
                },
                {
                    name: "Taikoons NFT",
                    href: "https://taikoons.taiko.xyz/",
                },
            ],
        },
    ];

    return (
        <footer className={css.footer} id="footer">
            <div className="container">
                <div className={css.footer_wrapper}>
                    <p className={css.footer_title}>
                        Join the taiko <b>community</b>
                    </p>
                    <FooterSocials />
                    <div className={css.footer_row}>
                        <p className={css.footer_copyright}>
                            &copy; {new Date().getFullYear()} Taiko Labs
                        </p>
                        <div className={css.footer_content}>
                            <p className={css.footer_content_title}>Taiko Labs</p>
                            <p className={css.footer_content_text}>
                                The most developer-friendly and secure Ethereum scaling solution.
                            </p>
                        </div>
                        <div className={css.footer_nav}>
                            <div className={css.footer_nav_inner}>
                                {navigation.map((group) => (
                                    <div className={css.footer_nav_group} key={group.name}>
                                        <p className={css.footer_nav_title}>{group.name}</p>
                                        <div className={css.footer_nav_list}>
                                            {group.links.map((link) => (
                                                <NextLink
                                                    className={css.footer_nav_link}
                                                    href={link.href}
                                                    target={
                                                        link.href?.startsWith("http")
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    key={link.name + link.href}
                                                >
                                                    <span className={css.footer_nav_link_left}>
                                                        <span className={css.footer_nav_link_name}>
                                                            {link.name}
                                                            {link.href?.startsWith("http") && (
                                                                <ArrowLinkIcon />
                                                            )}
                                                            {link.disabled && (
                                                                <span
                                                                    className={
                                                                        css.footer_nav_link_dsb
                                                                    }
                                                                >
                                                                    Coming soon
                                                                </span>
                                                            )}
                                                        </span>
                                                        {link.desc && (
                                                            <span
                                                                className={css.footer_nav_link_desc}
                                                            >
                                                                {link.desc}
                                                            </span>
                                                        )}
                                                    </span>
                                                </NextLink>
                                            ))}
                                            {/* {group.links.map((link) => (
                                                <React.Fragment key={link.name + link.href}>
                                                    {link.href ? (
                                                        <Link
                                                            className={css.footer_nav_link}
                                                            href={link.href}
                                                            target={
                                                                link.href.startsWith("http")
                                                                    ? "_blank"
                                                                    : undefined
                                                            }
                                                        >
                                                            <span
                                                                className={css.footer_nav_link_left}
                                                            >
                                                                <span
                                                                    className={
                                                                        css.footer_nav_link_name
                                                                    }
                                                                >
                                                                    {link.name}
                                                                    <ArrowLinkIcon />
                                                                </span>
                                                                {link.desc && (
                                                                    <span
                                                                        className={
                                                                            css.footer_nav_link_desc
                                                                        }
                                                                    >
                                                                        {link.desc}
                                                                    </span>
                                                                )}
                                                                {link.disabled && (
                                                                    <span
                                                                        className={
                                                                            css.footer_nav_link_dsb
                                                                        }
                                                                    >
                                                                        Coming soon
                                                                    </span>
                                                                )}
                                                            </span>
                                                        </Link>
                                                    ) : (
                                                        <a className={css.footer_nav_link}>
                                                            <span
                                                                className={css.footer_nav_link_name}
                                                            >
                                                                {link.name}
                                                            </span>
                                                            {link.disabled && (
                                                                <span
                                                                    className={
                                                                        css.footer_nav_link_dsb
                                                                    }
                                                                >
                                                                    Coming soon
                                                                </span>
                                                            )}
                                                        </a>
                                                    )}
                                                </React.Fragment>
                                            ))} */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
