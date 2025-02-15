import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectContacts } from "../../redux/selectors";
import { toast } from "react-toastify";
import css from "./SectionContactForm.module.css";

export const SectionContactForm = () => {

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const onSubmitHandle = (e) => {

        e.preventDefault();

        const form = e.target;
        const name = form.elements.name.value;
        const phone = form.elements.number.value;

        if (contacts.some(contact => contact.name === name)){
            toast(`The contact <${name}> is elready existing!`, {closeButton: false, 
                                                                 ariaLabel: 'The contact is elready existing', 
                                                                 className: `${css.error}`});
        } else {
            dispatch(addContact({name, phone}));
            toast(`The contact <${name} , ${phone}> was added to the book`, { closeButton: false, 
                                                                               ariaLabel: 'The contact was added to the book', 
                                                                               className: `${css.success}`});
        }

        form.reset();
    }

    return  <section className={css.section}>

                <h2 className={css["visually-hidden"]}>Form for adding new contacts</h2>

                <form className={css.form} onSubmit={onSubmitHandle} >

                    <label className={css.label} aria-label="Person name input">Name
                        <input  className={css.name}
                                id="name" 
                                type="text" 
                                name="name" 
                                required 
                                autoComplete="off" 
                                placeholder="Name Sername"
                                pattern="^([a-zA-Z][ ]*){2,50}$"
                        />
                        <p className={css.massage}>Name must be 2-50 chars long and contain only latin letters and whitespaces</p>
                    </label>

                    <label className={css.label} aria-label="Phone number input">Phone
                        <input  className={css.number}
                                id="number"
                                type="tel"
                                name="number"
                                required
                                autoComplete="off"
                                placeholder="xxx xxx xx xx"
                                pattern="^([0-9][ ]*){8,20}$"
                        />
                        <p className={css.massage}>Phone number must be 8-20 chars long and contain only digits and whitespaces</p>
                    </label>

                    <button className={css.btn} type="submit" aria-label="Add contact">Add contact</button>

                </form>

            </section>
                
}
