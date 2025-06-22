// types/route.ts
export type PageParams<T extends string = string> = {
    params: {
        slug: T[];
    };
};
