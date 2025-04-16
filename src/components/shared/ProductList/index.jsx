import { useState } from "react";
import { Link } from "react-router";
import booksData from "../../../Utils/books"; // Asumsi ini array statis

export default function ProductList() {
  const [books, setBooks] = useState(booksData); // Bikin state lokal dari buku
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = () => {
    const id = books.length + 1; // Bisa pakai uuid juga
    setBooks([...books, { id, ...newBook }]);
    setNewBook({ title: "", author: "", year: "", description: "", image: "" });
  };

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller Book</h1>
            <p className="lead text-body-secondary">
              Daftar koleksi buku terlaris pilihan kami yang penuh inspirasi,
              ditulis oleh penulis-penulis terbaik. Temani harimu dengan bacaan
              berkualitas yang tak terlupakan.
            </p>
            <p>
              <Link to="#" className="btn btn-primary my-2 m-2">View</Link>
              <Link to="#" className="btn btn-secondary my-2">Other Book</Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div key={book.id} className="col">
                <div className="card shadow-sm h-100 w-100 d-flex flex-column">
                  <img className="card-img-top object-fit-cover" style={{ height: "550px", objectFit: "cover" }} src={book.image} alt={book.title} />
                  <div className="card-body">
                    <h5 className="card.title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <p>{book.author}</p>
                      </div>
                      <small className="text-body-secondary">{book.year}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      
      {/* Form Tambah Buku */}
      <div className="container mb-4">
        <h4>Tambah Buku Baru</h4>
        <div className="row g-2">
          <input type="text" className="form-control" name="title" placeholder="Judul Buku" value={newBook.title} onChange={handleChange} />
          <input type="text" className="form-control" name="author" placeholder="Penulis" value={newBook.author} onChange={handleChange} />
          <input type="number" className="form-control" name="year" placeholder="Tahun Terbit" value={newBook.year} onChange={handleChange} />
          <input type="text" className="form-control" name="description" placeholder="Deskripsi" value={newBook.description} onChange={handleChange} />
          <input type="text" className="form-control" name="image" placeholder="URL Gambar" value={newBook.image} onChange={handleChange} />
          <button className="btn btn-success mt-2" onClick={handleAddBook}>Tambah Buku</button>
        </div>
      </div>

    </>
  );
}
