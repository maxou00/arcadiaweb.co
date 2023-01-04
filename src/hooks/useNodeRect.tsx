import { useRef, useEffect, RefObject, useState } from "react";

export function useNodeRect(seedRef?: RefObject<HTMLElement>) {
    const ref = useRef<HTMLElement>();
    const [domRect, setDomRect] = useState<DOMRectReadOnly>();
    const [client, setClient] = useState<DOMRect>();

    useEffect(() => {
        let current = seedRef?.current;
        if (current) {
            ref.current = current;
        }

        if (ref.current) {
            let { current } = ref;
            let observer = new ResizeObserver(([rootEntry]) => {
                let rect = rootEntry.contentRect;
                if(rect){
                    setDomRect({
                        x: rect.x,
                        y: rect.y,
                        top: rect.top,
                        left: rect.left,
                        right: rect.right,
                        bottom: rect.bottom,
                        width: rect.width,
                        height: rect.height,
                        toJSON: rect.toJSON
                    });
                    setClient(rootEntry.target.getBoundingClientRect())
                }
            });
            observer.observe(current);
            return () => observer.unobserve(current)
        }
    }, [seedRef]);

    return {
        ref,
        ...domRect,
        client
    }
}