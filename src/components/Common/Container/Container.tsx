import { cx } from "@utils/cx";
import { FC, ReactNode } from "react";

export const Container: FC<{
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
    size?: "xlarge" | "large" | "small";
}> = ({ children, className, noPadding, size = "large" }) => {
    return (
        <div className={cx("h-full flex w-full", !noPadding && "px-6")}>
            <div
                className={cx(
                    "w-full mx-auto",
                    size == "xlarge" && "max-w-6xl",
                    size == "large" && "max-w-4xl",
                    size == "small" && "max-w-md",

                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};
