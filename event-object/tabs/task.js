const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('tab_active'));
        tab.classList.add('tab_active');
        tabsContent.forEach((content, j) => {
            content.classList.remove('tab__content_active');
            if (i === j) {
                content.classList.add('tab__content_active');
            }
        })
    })
})
