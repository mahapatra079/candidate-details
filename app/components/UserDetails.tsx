
export default function UserDetails() {
  return (
    <div className={'user-details-container'}>
      <div className='user-main'>
        <div className='user-avatar-id'>
          <i className="bx bx-user"></i>
        </div>
        <div className={'user-info-det'}>
          <div className='user-name-row'>
            <span className='user-name'>William</span>
            <div className='user-socials'>
              <i className="bx bxl-facebook"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-linkedin"></i>
              <i className="bx bx-globe"></i>
            </div>
          </div>
          <div className='user-title-row'>
            <span className={'user-title'}>Senior Product Manager</span>
            <span className={'user-location'}>United States</span>
            <span className={'user-city'}>Dallas</span>
          </div>
        </div>
      </div>
      <div className='user-actions'>
        <button className={'contact-linked-btn'}>Contact Linked</button>
        <button className={'star-btn'}>
          <i className="bx bx-star"></i>
        </button>
        <button className={'star-btn'}>
          <i className="bx bx-edit"></i>
        </button>
        <button className={'star-btn'}>
          <i className="bx bx-dots-vertical-rounded"></i>
        </button>
      </div>
    </div>
  );
}