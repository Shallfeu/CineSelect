import { Card, CardBody, Skeleton } from '@chakra-ui/react';

export const ReviewCardSkeleton = () => {
    return (
        <Card>
            <CardBody>
                <Skeleton height="25px" width="60%" />

                <Skeleton marginTop="16px" height="150px" />

                <Skeleton marginTop="16px" height="40px" width="10%" />
            </CardBody>
        </Card>
    );
};