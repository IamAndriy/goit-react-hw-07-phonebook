import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";
import css from './ContactItem.module.css';
import PropTypes from "prop-types";

export const ContactItem = ({id, name, number }) => {

    const dispatch = useDispatch();
    
    const onDelContact = () => { 
        dispatch(deleteContact(id));
        toast(`The contact < ${name} , ${number} > was deleted from the book`, {closeButton: false, 
                                                                                ariaLabel: 'The contact was deleted from the book', 
                                                                                className: `${css.delSuccess}`});
    }

    return  <li className={css["contact-li"]} id={id}>

                <div className={css["contact-div"]}>
                    <p className={css["contact-name"]}>{name}</p>
                    <p className={css["contact-number"]}>{number}</p>
                </div>

                <button className={css["contact-del-btn"]} type="button" onClick={onDelContact}>
                    <IoIosClose className={css["contact-del-icon"]}/> 
                </button>

            </li>
}

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}