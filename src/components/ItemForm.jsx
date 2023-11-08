import SaveButton from "./SaveButton"

export default function ItemForm() {
    return (
        <div className="container">
            <form>
                <div className="row gap-3 mb-2">
                    <div className="col">
                        <label htmlFor="name" className="mb-2"> Nome </label>
                        <input className="bg-dark p-2 rounded border-0" type="text" id="name" name="name" />
                    </div>

                    <div className="col">
                        <label htmlFor="qtd" className="mb-2"> Quantidade </label>
                        <input className="bg-dark p-2 rounded border-0" type="number" id="qtd" name="qtd" value={0} />
                    </div>

                    <div className="col">
                        <label htmlFor="price" className="mb-2"> Preço </label>
                        <input className="bg-dark p-2 rounded border-0" type="number" id="price" name="price" value={0} />
                    </div>

                    <div className="col">
                        <label htmlFor="category" className="mb-2"> Categoria </label>
                        <select
                            className="form-select bg-dark p-2 rounded border-0"
                            aria-label="Default select example"
                            id="category"
                            name="category"
                        >
                            <option selected> Selecione uma categoria... </option>
                            <option value="1"> One </option>
                            <option value="2"> Two </option>
                            <option value="3"> Three </option>
                        </select>
                    </div>
                </div>


                <label htmlFor="description" className="mb-2 mt-3 ms-1"> Descrição </label>
                <div className="row m-1 mb-3">
                    <textarea className="textarea bg-dark rounded border-0 col-12 p-2" id="description" name="description" />
                </div>

                <SaveButton />
            </form>
        </div>
    )
}
