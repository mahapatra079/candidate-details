
export default function UserNotes() {
  return (
    <>
    <div className="note-tabs">
    <div className="note-tab active">All</div>
    <div className="note-tab">Notes & Calls</div>
    <div className="note-tab">Tasks</div>
    <div className="note-tab">Meeting</div>
    <div className="note-tab">Files</div>
    </div>
    <div className="note-card">
    <div className="note-card-header">
        <span className="note-type"><i className="bx bx-edit"></i>Note</span>
        <span className="note-status">To Do</span>
    </div>
    <div className="note-card-content">
        Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.
    </div>
    <a className="note-association" href="#">1 Association(s)</a>
    <div className="note-card-footer">
        <span><i className="bx bx-user"></i> John Doe</span>
        <span><i className="bx bx-time"></i> Jul 12, 2023, 11:54 am</span>
    </div>
    </div>
</>
  )
}
