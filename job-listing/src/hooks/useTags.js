import { useState } from 'react';

export const useTags = () => {
    const [activeTags, setActiveTags] = useState([]);

    const addTag = (tag) => {
        if (!activeTags.includes(tag)) {
            setActiveTags([...activeTags, tag]);
        }
    };

    const removeTag = (tag) => {
        setActiveTags(activeTags.filter(t => t !== tag));
    };

    const clearTags = () => {
        setActiveTags([]);
    };

    return { activeTags, addTag, removeTag, clearTags };
};
