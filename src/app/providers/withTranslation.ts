import { GetServerSideProps } from "next";
import { GetServerSidePropsContext, PreviewData } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

export const withTranslation = (callback: GetServerSideProps, locales?: string[]) => {
    return async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
        const result = (await callback(context)) as any;

        if (!result.redirect) {
            const defaultLocales = ["common", "header", "footer"];

            const translation = await serverSideTranslations(context.locale as any, [
                ...new Set(defaultLocales.concat(locales || [])),
            ]);

            result.props = {
                ...result.props,
                ...translation,
            };
        }

        return result;
    };
};
