import {Filter} from "../Filter/Filter";
import {ContactList} from "../ContactList/ContactList";
import css from "./SectionContacts.module.css";

export const SectionContacts = () => {

    return <section className={css.section}>

                <h2 className={css.title}>Contacts</h2>
                
                <Filter/>

                <ContactList/>

            </section>
}