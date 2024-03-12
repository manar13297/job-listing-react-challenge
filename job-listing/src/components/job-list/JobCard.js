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
                    <div className="job-info">
                        <div>{job.postedAt}</div> &middot;
                        <div>{job.contract}</div>&middot;
                        <div>{job.location}</div>
                    </div>
                </div>
            </div>
            <hr className="mobile-only"/>

            <div className="right-content">
                {[job.role, job.level,...job.languages, ...job.tools].map((tag,index) => (
                    <div key={index} className="job-tag" onClick={() => onTagClick(tag)}>{tag}</div>
                ))}
            </div>
        </div>
    );
}
