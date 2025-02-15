import { SectionContactForm } from "../SectionContactForm/SectionContactForm";
import { SectionContacts } from "../SectionContacts/SectionContacts";
import { ToastContainer } from "react-toastify";
import css from "./App.module.css";

export const App = () => {

    return  <div className={css.container}>
            
                <h1 className={css["title-h1"]}>Phonebook</h1>

                <div className={css["book-container"]}>

                    <ToastContainer autoClose={3000} theme="light"/>

                    <SectionContactForm className={css.section} />
                    
                    <SectionContacts className={css.section} />

                </div>

            </div>
            
}

