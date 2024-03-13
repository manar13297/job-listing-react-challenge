import './App.css';
import jobs from './data/data.json';
import {JobList} from "./components/job-list/JobList";
import {FilterBar} from "./components/filter-bar/FilterBar";
import {useTags} from "./hooks/useTags";
function App() {

    const { activeTags, addTag, removeTag, clearTags } = useTags();

  return (
    <>
      <header >
        <img src='./images/bg-header-desktop.svg' alt=""/>
      </header>

      <div className="main-container">
        {activeTags.length > 0 && (
            <FilterBar tags={activeTags} removeTags={removeTag} clearTags={clearTags} />
        )}
        <JobList jobs={jobs} addTag={addTag} activeTags={activeTags}/>
      </div>
    </>
  );
}

export default App;
