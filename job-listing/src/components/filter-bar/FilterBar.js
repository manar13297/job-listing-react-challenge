import './FilterBar.css'
export function FilterBar({ tags, removeTags, clearTags }) {

    return (
        <div className="filter-container">
            {tags.map((tag) => (
                <div key={tag} className="job-tag" >
                    {tag} <span onClick={() => removeTags(tag)}>X</span>
                </div>
            ))}
            <span onClick={clearTags}>Clear</span>
        </div>
    );
}