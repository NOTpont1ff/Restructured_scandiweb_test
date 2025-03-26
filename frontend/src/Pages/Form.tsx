import { useRef } from "react";
import { submitFilm } from "../Services/fimService";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const URLRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // ✅ Prevents form reload

    if (
      !nameRef.current?.value ||
      !priceRef.current?.value ||
      !categoryRef.current?.value ||
      !URLRef.current?.value
    ) {
      console.log("One or more inputs are empty");
      return;
    }

    await submitFilm({
      name: nameRef.current.value,
      price: priceRef.current.value, // ✅ Convert price to number
      category: categoryRef.current.value,
      URL: URLRef.current.value,
    });

    // ✅ Reset input fields properly
    nameRef.current.value = "";
    priceRef.current.value = "";
    categoryRef.current.value = "";
    URLRef.current.value = "";
  };

  return (
    <section className="showcase padding">
      <section className="nes-container with-title">
        <h3 className="title">Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input ref={nameRef} type="text" className="nes-input" />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input ref={priceRef} type="number" className="nes-input" />
          </div>
          <div className="mb-3">
            <label className="form-label">URL of an image</label>
            <input ref={URLRef} type="text" className="nes-input" />
          </div>
          <div>
            <label className="form-label">Category</label>
            <select className="nes-input" ref={categoryRef}>
              <option value="">Select category</option>
              <option value="Adventure">Adventure</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <p></p>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default Form;
