import { writable } from 'svelte/store';

//AGENDA
export const agenda = writable([]);

//AGREGAR CONTACTO A LA AGENDA
export const addContact = (name, email) => {
    agenda.update((cur) => {
        const newContact = [... cur, {name, email}];
        return newContact;
    });
}
