import { Studio } from './studio';

export  interface StudioSchema {
    isLoading: boolean;
    error?: string;
    data?: Studio[];
}
