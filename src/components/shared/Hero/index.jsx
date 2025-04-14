export default function Hero(){
    return(
        <>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Selamat Datang di BookStore</h1>
                <p className="lead">Temukan koleksi buku terbaik dari berbagai genre, mulai dari fiksi, non-fiksi, hingga buku pendidikan. BookStore hadir untuk memenuhi kebutuhan bacaanmu dengan mudah dan cepat.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Jelajahi Buku</button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Hubungi Kami</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}