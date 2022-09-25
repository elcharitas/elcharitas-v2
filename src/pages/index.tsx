import { FC } from "react";
import { IPage } from "src/types";
import { HeroContent } from "src/sections";

const Page: FC<IPage> = () => {
    return (
        <>
            <HeroContent />
        </>
    );
};

Page.displayName = "Welcome";

export default Page;
