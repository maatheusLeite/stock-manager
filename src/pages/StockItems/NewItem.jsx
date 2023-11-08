import { Link } from "react-router-dom";
import SaveButton from "../../components/SaveButton";

export default function NewItem() {
    return (
        <>
            <div className="border-bottom border-light mb-5 py-3">
                <Link to='..' className=" p-3"> Todos os items </Link>
                <Link to='new' className="mx-5 p-3 border-bottom border-3 border-light"> Novo item </Link>
            </div>

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
                            <input className="bg-dark p-2 rounded border-0" id="category" name="category" />
                        </div>
                    </div>


                    <div className="row m-1 mb-3">
                        <label htmlFor="description" className="mb-2 mt-3 row"> Descrição </label>
                        <textarea className="textarea bg-dark rounded border-0 row p-2" id="description" name="description"/>
                    </div>

                    <SaveButton />
                </form>

            </div>
        </>
    )
}
