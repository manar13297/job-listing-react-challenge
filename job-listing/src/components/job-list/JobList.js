import {JobCard} from "./JobCard";

export function JobList({ jobs, addFilter, activeFilters }) {
    const jobMatchesFilters = (job) => {
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

        for (let filter of activeFilters) {
            if (!jobTags.includes(filter)) {
                return false;
            }

        }
        return true;
    };

    const filteredJobs = jobs.filter(jobMatchesFilters);

    return (
        <div className="job-listing">
            {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} onTagClick={addFilter} />
            ))}
        </div>
    );
}
