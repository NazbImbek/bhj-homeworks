const tabs = document.querySelectorAll('.tab');
const tab__content = document.querySelectorAll('.tab__content');

for (let tab of tabs) {
    tab.addEventListener('click', handle);
}

function handle(event) {

    for (let tab of tabs) {
        tab.className = 'tab';
    }

    event.target.className = 'tab tab_active';

    for (let content of tab__content) {
        content.className = 'tab__content';
    }

    const index = Array.from(tabs).indexOf(event.target);
    tab__content[index].className = 'tab__content tab__content_active';
}