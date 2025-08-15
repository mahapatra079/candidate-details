
export default function UserID() {
  return (
    <div className="user-header">
        <div className="breadcrumb-section">
          <div className="breadcrumb">
            <a href="#" className="breadcrumb-link">Candidates</a>
            <i className="bx bx-chevron-right"></i>
            <span className="current-user">
              William
              <span className="user-id">ID - 231</span>
            </span>
          </div>
        </div>
             <div>
                <button>
                Request Profile Update
                </button>
                <button>
                    Previoues
                </button>
                <button>
                    Next
                </button>
            </div>
    </div>
  )
}
