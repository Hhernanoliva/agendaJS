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


<div class="container flex justify-center items-center flex-col w-full ">
    <div class="text-xl py-10">
        {#each $agenda as {name, email}}
            <div class="p-5 rounded-lg shadow-lg text-center ">
                <h2 class="pb-1"><span class="font-semibold uppercase">{name}</span></h2>
                <p>Email: <span class="font-semibold">{email}</span></p>
            </div>
        {/each}
    </div>


    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form on:submit|preventDefault={addTo}>
            <div class="form-group mb-6">
                <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Nombre</label>
                <input bind:value={cN}  type="text" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                    placeholder="Nombre">
            </div>
          <div class="form-group mb-6">
            <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Email address</label>
            <input bind:value={cE} class="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Escriba el Email">
          </div>
         
          <button type="submit" class="
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Agregar</button>
        </form>
      </div>
    
</div>
