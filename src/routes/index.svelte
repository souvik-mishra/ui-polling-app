<script>
    import Header from '../components/Header.svelte'
    import Footer from '../components/Footer.svelte'
    import CreatePollForm from '../components/CreatePollForm.svelte'
    import PollList from '../components/PollList.svelte'
    import Tabs from '../shared/Tabs.svelte'

    //tabs
    let items = ['Current Polls','Add New Poll'];
    let activeItem = 'Current Polls';
    let polls = [];
    const tabChange = e => activeItem = e.detail
    const handleAddPoll = e => {
        polls = [...polls,e.detail];
        activeItem = 'Current Polls';
    }
    const handleVote = e => {
        const { id, option } = e.detail;
        let copiedPolls = [...polls];
        let upvotedPolls = copiedPolls.find(poll => poll.id === id);

        if(option === 'a'){
            upvotedPolls.votesA++;
        }
        if(option === 'b'){
            upvotedPolls.votesB++;
        }

        polls = copiedPolls;
    }
</script>

<Header/>
<main>
    <Tabs {activeItem} {items} on:tabChange={tabChange} />
    {#if activeItem === 'Current Polls'}
       <PollList {polls} on:vote={handleVote} />
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
