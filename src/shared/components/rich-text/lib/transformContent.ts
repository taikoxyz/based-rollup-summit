
export const transformContent = (content: any) => {
    const data = JSON.parse(JSON.stringify(content)) as any;

    for (const item of data) {
        if (item.type === "paragraph") {
            for (const child of item.children) {
                if (child.type === "link") {
                    child.url = child.url.includes("mailto:")
                        ? child.url.replace(/^(https?):\/\//, "")
                        : child.url;
                }
            }
        }
    }

    return data;
};
