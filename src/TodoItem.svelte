<script>
    import { face, fly } from 'svelte/transition';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function remove() {
        dispatch('remove', { id });
    }

    function toggleStatus() {
        let newStatus = !complete;
        dispatch('toggle', { id, newStatus });
    }

    export let id;
    export let text;
    export let complete;
</script>

<style>
    .complete {
        text-decoration: line-through;
        color: green;
    }
</style>

<li in:fly="{{ x: 900, duration: 500 }}">
    
    <span class:complete>
        { text }
    </span>

    {#if complete}
        <span class="complete">{ text }</span>
        <button on:click={toggleStatus}>Complete</button>
    {:else}
        <span>{ text }</span>
        <button on:click={toggleStatus}>Remove</button>
    {/if}

    <button on:click={remove}>Remove</button>
</li>