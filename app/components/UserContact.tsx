
export default function UserContact() {
  return (
    <div className={'contact-row'}>
      <div className="crm-d-flex">
        <div className={'contact-item emai'}>
          <i className="bx bx-envelope"></i>
          <a href="mailto:william@gmail.com">william@gmail.com</a>
        </div>
        <div className={'contact-item phone'}>
          <i className="bx bx-phone"></i>
          <a href="tel:+919021232326">+91 9021232326</a>
        </div>
      </div>
      <div className="crm-d-flex">
        <div className={'contact-item name'}>
          <i className="bx bx-user"></i>
          William
        </div>
        <div className={'contact-item time'}>
          <i className="bx bx-time"></i>
          Jul 14, 2023, 4:04 pm
        </div>
      </div>
    </div>
  );
}