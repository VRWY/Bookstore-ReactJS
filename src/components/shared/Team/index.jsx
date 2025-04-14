export default function Team(){
    return(
        <>
        <div className="container px-4 py-5">
            <h2 className="pb-2 border-bottom">Team</h2>

            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis">Alvita Aqila Habsah</h2>
                <p className="text-body-secondary">Saya adalah mahasiswa Sistem Informasi di Universitas Trunojoyo Madura yang berpengalaman dalam pengembangan aplikasi sederhana.</p>
            </div>

            <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                <div className="col d-flex flex-column gap-2">
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Pemrograman Java</h4>
                    <p className="text-body-secondary">Project Kasir Toko Roti</p>
                </div>

                <div className="col d-flex flex-column gap-2">
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Python</h4>
                    <p className="text-body-secondary">Project Pintu Tol</p>
                </div>

                <div className="col d-flex flex-column gap-2">
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Pemrograman Web</h4>
                    <p className="text-body-secondary">Forecasting</p>
                </div>

                <div className="col d-flex flex-column gap-2">
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Database</h4>
                    <p className="text-body-secondary">Kurir JNT</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}