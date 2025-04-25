type IBlocksToText = (data: any) => string[];

export const getArticleText: IBlocksToText = (data) => {
    const content: string[] = [];

    for (const item of data) {
        if (item.type === "paragraph") {
            for (const child of item.children) {
                if (child.type === "text") {
                    content.push(child.text);
                }
            }
        }
    }

    return content;
};
