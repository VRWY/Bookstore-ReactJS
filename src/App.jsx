function App() {

  return (
    <>
      <div className="container">
        {/*Header*/}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div id="home" className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book-open fa-2xl" style={{color: "#6b96db"}}></i>
            <span className="ms-2 fs-4">BookStore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Regristrasi</button>
          </div>
        </header>

      {/* Hero */}
      <div id="home" className="container col-xxl-8 px-4 py-5">
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

      {/* Product List */}
      <section id="book" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller Book</h1>
            <p className="lead text-body-secondary">Daftar koleksi buku terlaris pilihan kami yang penuh inspirasi, ditulis oleh penulis-penulis terbaik. Temani harimu dengan bacaan berkualitas yang tak terlupakan.</p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">View</a>
              <a href="#" className="btn btn-secondary my-2">Other Book</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
              <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
              <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
              <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">Team Info</h1>
            <p className="col-lg-8 mx-auto lead">
            Sebelumnya perkenalkan nama saya Alvita Aqila Habsah, saya adalah mahasiswa Sistem Informasi di Universitas Trunojoyo Madura yang berpengalaman dalam pengembangan aplikasi sederhana
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="contact">
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

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Book</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 Alvita Aqila Habsah  Universitas Trunojoyo Madura</p>
        </footer>
      </div>

    </div>
    </>
  )
}

export default App
