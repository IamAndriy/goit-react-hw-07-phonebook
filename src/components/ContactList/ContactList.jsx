import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { getFilter } from "../../redux/selectors";
import { ContactItem } from "../ContactItem/ContactItem";
import { nanoid } from "nanoid";
import css from "./ContactList.module.css";

export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    const getVisibleContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()));
    }

    const visibleContacts = getVisibleContacts();

    return  <> 
            { (visibleContacts.length > 0) 
                ?   <ul className={css["contact-list"]}>
                        { visibleContacts.map( ({id, name, number}) => < ContactItem key={nanoid()} id={id} name={name} number={number}/> ) }
                    </ul>
                :   (filter.trim())
                        ? <p className={css.massage}>There are no contacts you are looking for</p>
                        : <p className={css.massage}>There are no contacts in the phone book yet</p>
            }
            </>
}

