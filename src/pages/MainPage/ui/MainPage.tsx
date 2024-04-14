import React from 'react';
import { Page } from 'widgets/Page';
import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import cls from './MainPage.module.scss';

const MainPage = () => {
    return (
        <Page>
            <Box textAlign="center" py={10} px={6}>
                <StarIcon boxSize="50px" color="goldenrod" />

                <Heading as="h2" size="xl" mt={6} mb={2}>
                    Привет, команда <span className={cls.gradient}>AvitoTech</span>!
                </Heading>

                <Text fontSize={22} color={'gray.500'}>
                    Если вы это видите, значит, мой проект благополучно запустился, чему я несказанно рад.
                    С технической сторонной проекта вы уже ознакомились в README,
                    а сейчас я расскажу о самом проекте.
                </Text>

                <Divider margin="16px 0" />

                <Text fontSize={22} color={'gray.500'}>
                    Проект состоит из 5 страниц, не считая вспомогательных NotFound, Forbidden.
                    Сейчас вы на главной, но еще есть &quot;Фильмы&quot;,
                    &quot;Случайный фильм&quot;, &quot;Админка&quot; и &quot;Детальная по фильму&quot;.
                    Все имеют говорящие названия.
                </Text>

                <Text marginTop="32px" fontSize={22} color={'gray.500'}>
                    Если вы запустили проект вместе с json-server-ом, тогда вам удастся авторизоваться.
                </Text>

                <Text marginTop="32px" fontSize={22} color={'gray.500'}>
                    Если вы попытаетесь попасть на /admin неавторизованным, получите ForbiddenPage,
                    а если же на /random_movie, то вас перенаправит на главную (должно бы на страницу авторизации,
                    но она не предусмотрена на проекте). Я реализовал ролевой доступ вдобавок к авторизации,
                    теперь у пользователей есть права и каждый видит свой контент.
                </Text>

                <Text marginTop="32px" fontSize={22} color={'gray.500'}>
                    В остальном проект интуитивно понятный, нет смысла описывать подробнее.
                    Все пункты, которые были описаны в задании, я постарался выполнить, хоть и делал
                    некоторые в первый раз. Надеюсь, ничего не отвалится в самый ответственный момент &#128579;
                </Text>

                <Text marginTop="32px" fontSize={22} color={'gray.500'}>
                    Спасибо за уделенное время и удачного дня вам! &#128512;
                </Text>
            </Box>
        </Page>
    );
};

export default MainPage;