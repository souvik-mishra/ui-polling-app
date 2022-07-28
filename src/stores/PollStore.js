import { writable } from 'svelte/store';

const PollStore = writable([{
    id:1,
    question:'Who\'s the hottest girl in the world?',
    answerA: 'Desi Girl',
    answerB: 'Firangi Girl',
    votesA: 47,
    votesB: 23
}]);

export default PollStore;