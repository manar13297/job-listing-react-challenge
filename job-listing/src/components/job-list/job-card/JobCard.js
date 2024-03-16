import './JobCard.css'
export function JobCard({ job , onTagClick}) {
    return (
        <div className="job-card">
            <div className="left-content">
                <img src={job.logo} alt={job.company} />

                <div className="company-details">
                    <div className="company-name">
                        <span>{job.company}</span>
                        {job.new && <span className="etiquette">NEW!</span>}
                        {job.featured && <span className="etiquette etiquette-featured">FEATURED</span>}
                    </div>
                    <div className="position">{job.position}</div>
                    <div >
                        <span className="job-info">{job.postedAt}</span>
                        <span className="job-info"> &middot;</span>
                        <span className="job-info">{job.contract}</span>
                        <span className="job-info">&middot;</span>
                        <span className="job-info">{job.location}</span>
                    </div>
                </div>
            </div>
            <hr className="mobile-only"/>

            <div className="right-content">
                {[job.role, job.level,...job.languages, ...job.tools].map((tag) => (
                    <span key={job.id} className="job-tag" onClick={() => onTagClick(tag)}>{tag}</span>
                ))}
            </div>
        </div>
    );
}
