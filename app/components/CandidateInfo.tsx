
export default function ProfileDetails() {
  return (
    <div className={'profile-details-container'}>
      <div className={'profile-details-grid'}>
        <div className={'profile-details-col'}>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Current Organization</span>
            <span className={'profile-details-value'}>World Bank Group</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Skills</span>
            <span className={'profile-details-value'}>HTML, CSS, Javascript</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Available From</span>
            <span className={'profile-details-value'}>Jul, 14, 2023</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Current Salary</span>
            <span className={'profile-details-value'}>$6000</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Notice Period</span>
            <span className={'profile-details-value'}>90 Days</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Full Address</span>
            <span className={'profile-details-value'}>9400 Ashton Rd, Philadelphia...</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Resume</span>
            <span className={'profile-details-value'}>Resume</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Total Experience</span>
            <span className={'profile-details-value'}>5 Years</span>
          </div>
        </div>
        <div className={'profile-details-col'}>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Summary</span>
            <span className={'profile-details-value'}>Current Organization</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Current Employment Status</span>
            <span className={'profile-details-value'}>Employed</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Date of Birth</span>
            <span className={'profile-details-value'}>15 June 1993</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Relevent Experience</span>
            <span className={'profile-details-value'}>7 Years</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Salary Expectation</span>
            <span className={'profile-details-value'}>$9000</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Status</span>
            <span className={'profile-details-value'}>Submitted to Client</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Salary Type</span>
            <span className={'profile-details-value'}>Annual</span>
          </div>
          <div className={'profile-details-row'}>
            <span className={'profile-details-label'}>Language Skills</span>
            <span className={'profile-details-value'}>English(Elementary proficiency)</span>
          </div>
        </div>
        <div className={'profile-details-col'}>
          {/* Add more fields or leave empty for spacing */}
        </div>
      </div>
    </div>
  );
}