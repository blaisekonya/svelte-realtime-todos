<script>
    import TodoItem from "./TodoItem.svelte";
    import { db } from "./firebase.js";
    import { collectionData } from "rxfire/firestore";
    import { startWith } from "rxjs/operators";

    export let uid;

    let text = 'some task';

    const query = db.collection('todos').where('uid', '==', uid).orderBy('createdAt', 'desc');

    const todos = collectionData(query, 'id').pipe(startWith([]));

    function add() {
        db.collection('todos').add({ text, uid, complete: false, createdAt: new Date() });
        text = '';
    }

    function updateStatus(event) {
        console.log(event);
        const { id, newStatus } = event.detail;
        db.collection('todos').doc(id).update({ complete: newStatus });
    }

    function remove(event) {
        console.log(event);
        const { id } = event.detail;
        db.collection('todos').doc(id).delete();
    }
</script>

<style>
    input { display: block;}
</style>

<ul>
    {#each $todos as todo}

        <TodoItem {...todo} on:toggle={updateStatus} on:remove={remove} />
         
    {/each}
</ul>

<input bind:value={text} />

<hr>

<p>Your task: <strong>{ text }</strong></p>

<button on:click={add}>Add Task</button>