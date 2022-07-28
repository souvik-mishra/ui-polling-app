<script>
    import Header from '../components/Header.svelte'
    import Footer from '../components/Footer.svelte'
    import CreatePollForm from '../components/CreatePollForm.svelte'
    import PollList from '../components/PollList.svelte'
    import Tabs from '../shared/Tabs.svelte'

    //tabs
    let items = ['Current Polls','Add New Poll'];
    let activeItem = 'Current Polls';
    const tabChange = e => activeItem = e.detail
    const handleAddPoll = e => {
        activeItem = 'Current Polls';
    }
    const handleVote = e => {
        
    }
</script>

<Header/>
<main>
    <Tabs {activeItem} {items} on:tabChange={tabChange} />
    {#if activeItem === 'Current Polls'}
       <PollList />
    {:else if activeItem === 'Add New Poll'}
        <CreatePollForm on:addPoll={handleAddPoll} />
    {/if}
</main>
<Footer/>

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
