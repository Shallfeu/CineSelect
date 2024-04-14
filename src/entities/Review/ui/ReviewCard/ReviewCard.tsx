import { Card, CardBody, Heading } from '@chakra-ui/react';
import { ExpandableText } from 'shared/ui/ExpandableText/ExpandableText';

interface ReviewCardProps {
    author: string;
    review: string;
}

export const ReviewCard = (props: ReviewCardProps) => {
    const {
        author,
        review,
    } = props;

    return (
        <Card>
            <CardBody>
                <Heading size="md">
                    {author}
                </Heading>

                <ExpandableText marginTop="16px" noOfLines={7}>
                    {review}
                </ExpandableText>
            </CardBody>
        </Card>
    );
};