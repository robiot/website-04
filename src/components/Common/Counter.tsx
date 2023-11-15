import { animate, useInView } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";

export const Counter: FC<{ from: number; to: number }> = ({ from, to }) => {
    const nodeReference = useRef<HTMLSpanElement>(null);

    const isInView = useInView(nodeReference);

    const [hasRun, setHasRun] = useState(false);

    useEffect(() => {
        if (!isInView || hasRun) return;

        const node = nodeReference.current;

        animate(from, to, {
            duration: 1,
            onUpdate(value) {
                node!.textContent = value.toFixed(0);
            },
        });

        setHasRun(true);
    }, [from, to, isInView, hasRun]);

    return <span ref={nodeReference}>0</span>;
};
