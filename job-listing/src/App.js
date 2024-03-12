import './App.css';
import jobs from './data/data.json';
import {JobList} from "./components/job-list/JobList";
import {FilterBar} from "./components/filter-bar/FilterBar";
import {useFilters} from "./hooks/useFilters";
function App() {
  const { activeFilters, addFilter, removeFilter, clearFilters } = useFilters();

  return (
    <>
      <header >
        <img src='./images/bg-header-desktop.svg' alt=""/>
      </header>

      <div className="main-container">
        {activeFilters.length > 0 && (
            <FilterBar filters={activeFilters} removeFilter={removeFilter} clearFilters={clearFilters} />
        )}
        <JobList jobs={jobs} addFilter={addFilter} activeFilters={activeFilters}/>
      </div>
    </>
  );
}

export default App;
