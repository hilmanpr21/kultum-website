document.querySelectorAll('.faqs-item').forEach((item, i) => {
    const trigger = item.querySelector('.plus.button');
    const answer = item.querySelector('.faqs-answer');
    if (!trigger || !answer) return;

    // accessibility for div-as-button
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-expanded', 'false');

    if (!answer.id) answer.id = `faq-answer-${i + 1}`;
    trigger.setAttribute('aria-controls', answer.id);

    const toggle = () => {
        const isOpen = item.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(isOpen));
    };

    trigger.addEventListener('click', toggle);
    trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    });
});