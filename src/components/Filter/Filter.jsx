import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import {ImSearch} from 'react-icons/im';
import css from "./Filter.module.css";

export const Filter = () => {

    const dispatch = useDispatch();
        
    const onChangeFilter = ({target}) => { dispatch(setFilter(target.value)) }

    return  <label className={css["filter-label"]}>

                <input  className={css["filter-input"]} 
                        type="text"
                        id="filter"
                        name="filter"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        autoComplete = "off"
                        required
                        onChange={onChangeFilter}
                />

                <ImSearch className={css.icon}/>

            </label>
}