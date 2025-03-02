import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import * as EventsScreen from "widgets/10-event-screens";
import { EventsApiEnum } from "widgets/10-event-screens/lib/types";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { eventApi } from "shared/lib/api";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./events.module.scss";

const Events: NextPage = () => {
    const { t } = useTranslation("events");

    return (
        <MainLayout title="Events – Taiko" description={t("text")} className={css.root}>
            <DefaultLayout>
                <div className={css.gap}>
                    <EventsScreen.Hero />
                    <EventsScreen.Events />
                </div>
            </DefaultLayout>
        </MainLayout>
    );
};

export default Events;

export const getServerSideProps: GetServerSideProps = withTranslation(async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [EventsApiEnum.ALL_EVENTS, ""],
        queryFn: () => eventApi.getAll(),
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
}, ["events"]);
