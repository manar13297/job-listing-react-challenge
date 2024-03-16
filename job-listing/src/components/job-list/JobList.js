import {JobCard} from "./job-card/JobCard";
import './JobList.css'
export function JobList({ jobs, addTag, activeTags }) {
    const isContainActiveTag = (job) => {
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

        for (let tag of activeTags) {
            if (!jobTags.includes(tag)) {
                return false;
            }

        }
        return true;
    };

    const filteredJobs = jobs.filter(isContainActiveTag);

    return (
        <div className="job-listing">
            {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} onTagClick={addTag} />
            ))}
        </div>
    );
}
