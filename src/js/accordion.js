document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 6V22" stroke="#00FFFF" stroke-width="1.6" />
  <path d="M22 14L6 14" stroke="#00FFFF" stroke-width="1.6" />
</svg>`;

        const minusIcon = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 14L6 14" stroke="#00FFFF" stroke-width="1.6" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});