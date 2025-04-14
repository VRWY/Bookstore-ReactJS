export default function Contact(){
    return(
        <>
        <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content rounded-3 shadow">
              <div className="modal-body p-4 ">
                <h1 className="text-center">Contact</h1>
                <ul>
                  <li>
                    <h6><i className="fa fa-map-marker"></i> Address</h6>
                    <p>Jl. Rambutan Rapiah 7B/26, Surabaya, Jawa Timur</p>
                  </li>
                  <li>
                    <h6><i className="fa fa-phone"></i> Phone</h6>
                    <p>
                      <span>088-776-554-123</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}