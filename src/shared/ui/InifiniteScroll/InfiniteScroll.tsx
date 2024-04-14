import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './InfiniteScroll.module.scss';

interface InfiniteScrollProps {
    className?: string;
    children: ReactNode;
    onScrollEnd: () => void;
}

export const InfiniteScroll = (props: InfiniteScrollProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll(
        {
            triggerRef,
            wrapperRef,
            callback: onScrollEnd,
        });

    return (
        <div
            ref={wrapperRef}
            className={className}
        >
            {children}
            <div className={cls.trigger} ref={triggerRef} />
        </div>
    );
};
