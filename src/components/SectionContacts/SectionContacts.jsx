import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../../redux/operations";
import { selectIsLoading, selectError } from "../../redux/selectors";
import {Filter} from "../Filter/Filter";
import {ContactList} from "../ContactList/ContactList";
import css from "./SectionContacts.module.css";

export const SectionContacts = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(()=>{
        dispatch(getContacts());
    }, [dispatch]);


    return <section className={css.section}>

                <h2 className={css.title}>Contacts</h2>
                
                <Filter/>
                
                {isLoading && <b>Request in progress...</b>}

                {error && <b>Opps! Something went wrong! Try reloading the page!</b>}
                    
                {(!isLoading && !error) && <ContactList />}

            </section>
}