export function FilterBar({ tags, removeTags, clearTags }) {

    return (
        <div className="filter-container">
            {tags.map((tag, index) => (
                <div key={index} className="job-tag">
                    {tag} <span onClick={() => removeTags(tag)}>X</span>
                </div>
            ))}
            <span onClick={clearTags}>Clear</span>
        </div>
    );
}