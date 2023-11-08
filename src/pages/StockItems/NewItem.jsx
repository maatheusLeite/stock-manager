import { Link } from "react-router-dom";
import ItemForm from "../../components/ItemForm";

export default function NewItem() {
    return (
        <>
            <div className="border-bottom border-light mb-5 py-3">
                <Link to='..' className=" p-3"> Todos os items </Link>
                <Link to='new' className="mx-5 p-3 border-bottom border-3 border-light"> Novo item </Link>
            </div>

            <ItemForm />
        </>
    )
}
