<script>
    import { addContact, agenda } from './store';

    let contactos = "";

    const addTo = () => {
        addContact(cN, cE);
        
        console.log(contactos, cN, cE)
    }

    let cN;
    let cE;

    // class User {
    //     constructor (name, email) {
    //         this.name = name;
    //         this.email = email;
    //     }
    // }
    // const addContact = function(n, e) {
    //     agenda.push(new User(n, e))
    //     console.log(agenda)
    // };
    
</script>


<div class="container flex justify-center items-center mt-10 flex-col w-full">
    <div class="text-xl">
        {#each $agenda as {name, email}}
             <h2>{name}</h2>
             <p>{email}</p>   
        {/each}
    </div>


    <form on:submit|preventDefault={addTo}>
        <input placeholder="Name" bind:value={cN}>
        <input placeholder="Email" bind:value={cE}>
        <button type="submit">
            Agregar
        </button>
    </form>

    
</div>
