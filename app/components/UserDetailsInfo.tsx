
export default function UserDetailsInfo() {

  return (
    <div className="user-profile-content">
    <ul className="user-tabs">
        <li className="user-tab">All Details</li>
        <li className="user-tab active">Assigned Jobs</li>
        <li className="user-tab">Related Emails</li>
        <li className="user-tab">Candidate Questions</li>
        <li className="user-tab">Hotlists</li>
        <li className="user-tab">Related Deals</li>
        <li className="user-tab">Contact(s) Pitched</li>
     </ul>
      <div className="user-assigned">
        <span>
            Assigned Job to <span style={{color: "#1976d2"}}>William Sample</span>
        </span>
        <div className={'user-details-actions'}>
            <button className={'user-details-btn'}>Assign To Job</button>
            <button className={'user-details-btn secondary'}>View All Assigned Jobs</button>
        </div>
      </div>

      <div className="assigned-job-card">
        <div className="job-details">
            <div className="job-avatar">M</div>
            <div className="job-info">
                <span className="job-title">Senior Product Manager</span>
                <span className="job-company">Recruit CRM</span>
            </div>
        </div>
         <div className="job-meta">
            <span><i className="bx bx-user"></i> William Sample</span>
            <span><i className="bx bx-time"></i> Jul 10, 2023</span>
        </div>
            <span className="job-status">Assigned</span>
           <label className="job-toggle-switch">
               <input type="checkbox" className="job-toggle" checked readOnly />
               <span className="job-toggle-slider"></span>
            </label>
        </div>
    </div>
  );
}