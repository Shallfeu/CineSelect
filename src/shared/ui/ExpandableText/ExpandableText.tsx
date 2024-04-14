import type { BoxProps } from '@chakra-ui/react';
import { Box, Button, Text } from '@chakra-ui/react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

interface Props extends BoxProps {
    children: React.ReactNode;
    noOfLines: number;
}

export const ExpandableText = forwardRef<HTMLDivElement, Props>(
    ({ children, noOfLines, ...rest }, ref) => {
        const [expandedCount, setExpandedCount] = useState<number | undefined>(
            noOfLines,
        );
        const [isClicked, setIsClicked] = useState(false);
        const isTextClamped = useRef<boolean>();

        const handleToggle = () => {
            setIsClicked(true);
            setExpandedCount(expandedCount ? undefined : noOfLines);
        };

        const inputRef = React.useRef<HTMLInputElement>(null);

        useEffect(() => {
            isTextClamped.current = (inputRef.current?.scrollHeight as number) >
                (inputRef.current?.clientHeight as number) || isClicked;
        }, [isTextClamped, isClicked]);

        return (
            <Box ref={ref} {...rest}>
                <Box ref={inputRef} noOfLines={expandedCount}>
                    {children}
                </Box>

                <Button
                    marginTop="16px"
                    display={isTextClamped ? 'block' : 'none'}
                    size="sm"
                    variant="outline"
                    colorScheme="yellow"
                    onClick={handleToggle}
                >
                    <Text>{!expandedCount ? 'Меньше...' : 'Больше...'}</Text>
                </Button>
            </Box>
        );
    },
);

ExpandableText.displayName = 'ExpandableText';
