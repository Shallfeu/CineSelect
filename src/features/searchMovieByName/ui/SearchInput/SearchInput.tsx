import { useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input/Input';
import { getSearch } from '../../model/selectors/getSearch/getSearch';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { searchMovieActions } from '../../model/slice/searchMovie';
import cls from './SearchInput.module.scss';
import { getSearchResults } from '../../model/selectors/getSearchResults/getSearchResults';
import { getSearchIsLoading } from '../../model/selectors/getSearchIsLoading/getSearchIsLoading';
import { getSearchError } from '../../model/selectors/getSearchError/getSearchError';
import { searchMovieByName } from 'features/searchMovieByName/model/services/searchMovieByName/searchMovieByName';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useCallback, useEffect, useState } from 'react';
import {
    Button, Flex, InputGroup,
    Modal,
    ModalContent,
    ModalOverlay,
} from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { SearchResultItem } from 'features/searchMovieByName/ui/SearchResultItem/SearchResultItem';
import { Loader } from 'shared/ui/Loader/Loader';
import { SearchService, SuggestionItem } from 'shared/lib/searchService/searchService';
import parse from 'html-react-parser';
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick/useOutsideClick';

export const SearchInput = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [searchSuggests, setSearchSuggests] = useState<SuggestionItem[]>([]);

    const suggestionsRef = useOutsideClick(() => setIsOpen(false));

    const search = useSelector(getSearch);
    const searchResults = useSelector(getSearchResults);
    const isLoading = useSelector(getSearchIsLoading);
    const error = useSelector(getSearchError);

    const debouncedGetSearchSuggestions = useDebounce(() => {
        setSearchSuggests(SearchService.getFormattedSuggestions(search, cls.substr));
        setIsOpen(true);
    }, 1000);

    const getSearchSuggestions = useCallback(() => {
        debouncedGetSearchSuggestions();
    }, [debouncedGetSearchSuggestions]);

    useEffect(() => {
        if (search && !isSelected) {
            getSearchSuggestions();
        }
        // eslint-disable-next-line
    }, [search]);

    const focusHandler = () => {
        setIsOpen(true);
    };

    const openModalHandler = () => {
        setIsModalOpen(true);
    };

    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const fetchData = () => {
        dispatch(searchMovieByName());
        setIsOpen(false);
    };

    const changeSearchHandler = (value: string) => {
        dispatch(searchMovieActions.setSearch(value));
        setIsSelected(false);
    };

    const selectSearchHandler = (value: string) => {
        changeSearchHandler(value);
        setIsOpen(false);
        setIsSelected(true);
    };

    const navigateToDetailsPageHandler = (id: number) => {
        navigate(`${RoutePath.movie_details}${id}`);
        setIsOpen(false);
        setIsModalOpen(false);
    };

    if (error) {
        return <>{error}</>;
    }

    return (
        <>
            <Button colorScheme="yellow" variant="ghost" onClick={openModalHandler}>
                <SearchIcon />
            </Button>

            <Modal isOpen={isModalOpen} onClose={() => {
            }}>
                <ModalOverlay background="rgba(0, 0, 0, 0.8)" />

                <Button
                    zIndex="10000"
                    position="absolute"
                    top="20px"
                    left="50%"
                    colorScheme="yellow"
                    variant="outline"
                    w="fit-content"
                    onClick={closeModalHandler}
                >
                    <CloseIcon />
                </Button>

                <ModalContent marginTop="100px">
                    <div ref={suggestionsRef}>
                        <InputGroup>
                            <Input
                                placeholder="Введите название фильма"
                                onFocus={focusHandler}
                                value={search}
                                onChangeValue={changeSearchHandler}
                            />

                            <Button
                                colorScheme="purple"
                                variant="solid"
                                onClick={fetchData}
                            >
                                <SearchIcon />
                            </Button>
                        </InputGroup>

                        {
                            (isOpen && !!search.length && !!searchSuggests.length) && (
                                <div className={cls.searchSuggests}>
                                    {searchSuggests.map(item => (
                                        <div
                                            key={item.timestamp}
                                            className={cls.suggestion}
                                            onClick={() => selectSearchHandler(item.value)}
                                        >
                                            {parse(item.query)}
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>

                    {(searchResults || isLoading) && (
                        <div className={cls.popover}>
                            {searchResults?.map(({ id, name, year, poster, rating }) => (
                                <SearchResultItem
                                    key={id}
                                    rating={rating.imdb}
                                    name={name}
                                    year={year}
                                    poster={poster.url}
                                    onClickCard={() => navigateToDetailsPageHandler(id)}
                                />
                            ))}

                            {isLoading && (
                                <Flex
                                    w="full"
                                    h="full"
                                    justify="center"
                                    align="center"
                                >
                                    <Loader />
                                </Flex>
                            )}
                        </div>
                    )}
                </ModalContent>
            </Modal>

        </>
    );
};