<script>
    import agenda from './contactos.json';

    let contactos = agenda;

    $: contactos

    let contactName
    let contactEmail 


    const addContact = (name, email) => {
        const contact = {
            name,
            email
        }
        contactos.push(contact)
    };
    
</script>


<div class="container flex justify-center items-center mt-10 flex-col w-full">
    <div class="text-xl">
        {#each contactos as {name, email}}
             <h2>{name}</h2>
             <p>{email}</p>   
        {/each}
    </div>

    <input placeholder="Name" bind:value={contactName}>
    <input placeholder="Email" bind:value={contactEmail}>
    <button on:click={addContact({contactName}, {contactEmail}, console.log(contactos))}> Click</button>
    
</div>
