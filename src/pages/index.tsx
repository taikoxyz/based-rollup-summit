import { useTranslation } from "react-i18next";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { withTranslation } from "app/providers/withTranslation";
import { Screens } from "widgets/01-home-screens";
import { WrapSVG } from "widgets/01-home-screens/components/WrapSVG";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { pagesApi } from "shared/lib/api/pages.api";
import { partialApi } from "shared/lib/api/partials.api";
import { MediaQuery } from "shared/ui/media-query";
import css from "./home.module.scss";
import { EventHighlightsBanner } from "shared/ui/HighlightBanner";

gsap.registerPlugin(ScrollTrigger);

const HomePagination = dynamic(() => import("widgets/01-home-screens/components/HomePagination"), {
    ssr: false,
});

function Home() {
    const { t } = useTranslation("home");

    return (
        <MainLayout
            className={clsx(css.root)}
            meta={{
                title: t("Based Rollup Summit - Taiko"),
                image: "/img/og-image.png",
                url: "https://brs.taiko.xyz/",
            }}
            title="Based Rollup Summit - Taiko"
        >
            <DefaultLayout>
                <MediaQuery query="(min-width: 991px)" children={<HomePagination />} />
                <Screens.Hero />
                <Screens.About />
                <Screens.Attend />
                <Screens.Speakers />
                <EventHighlightsBanner content={"WHY ATTEND?"} />
                <Screens.Schedule />
                <Screens.Media />
                <Screens.Future />
                <Screens.Subscribe />
            </DefaultLayout>
        </MainLayout>
    );
}

export default Home;

export const getServerSideProps: GetServerSideProps = withTranslation(
    // eslint-disable-next-line require-await
    async () => {
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery({
            queryKey: ["home-page"],
            queryFn: () => pagesApi.home(),
        });

        await queryClient.prefetchQuery({
            queryKey: ["navigation"],
            queryFn: () => partialApi.navigation(),
        });

        return {
            props: {
                dehydratedState: dehydrate(queryClient),
            },
        };
    },
    ["home"]
);
