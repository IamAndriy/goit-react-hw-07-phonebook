import { createSelector } from "@reduxjs/toolkit";


const selectContacts = state => state.contacts.items;

const selectFilter = state => state.filter;

const selectIsLoading = state => state.contacts.isLoading;

const selectError = state => state.contacts.error;

const selectRelevantContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()));
    }
);


export { selectContacts, selectFilter, selectIsLoading, selectError, selectRelevantContacts }