import { useState } from 'react';

export const useFilters = () => {
    const [activeFilters, setActiveFilters] = useState([]);

    const addFilter = (filter) => {
        if (!activeFilters.includes(filter)) {
            setActiveFilters([...activeFilters, filter]);
        }
    };

    const removeFilter = (filter) => {
        setActiveFilters(activeFilters.filter(f => f !== filter));
    };

    const clearFilters = () => {
        setActiveFilters([]);
    };

    return { activeFilters, addFilter, removeFilter, clearFilters };
};
