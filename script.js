
/**
 * Loop through each FAQ item and set up the toggle functionality for the answer.`
 * This script adds click and keyboard event listeners to the trigger element (the plus button) to toggle the visibility of the answer. It also manages ARIA attributes for accessibility.
 */

// Select all FAQ items and iterate over them
document.querySelectorAll('.faqs-item').forEach((item, i) => {
    // Select the trigger (the plus button) 
    const trigger = item.querySelector('.plus.button');
    // Select the answer element
    const answer = item.querySelector('.faqs-answer');

    // If either the trigger or answer is missing, skip this item
    if (!trigger || !answer) return;

    // accessibility for div to act like button for screen readers and keyboard users
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-expanded', 'false');         // Initially, the answer is hidden, so aria-expanded is set to false. To track the state of the answer (open or closed) 
    trigger.setAttribute('aria-controls', answer.id);

    // Adds/removes .is-open on the FAQ item that styled using CSS
    const toggle = () => {
        const isOpen = item.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(isOpen));
    };

    // Add click event listener to the trigger to toggle the answer
    trigger.addEventListener('click', toggle);
    trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    });
});


const burger = document.querySelector('.navbar-burger');
const navContainer = document.querySelector('.navbar-container');

if (burger && navContainer) {
    burger.addEventListener('click', () => {
        const isOpen = burger.classList.toggle('is-open');
        navContainer.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', String(isOpen));
    });

    // close menu when a nav link is clicked
    navContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('is-open');
            navContainer.classList.remove('is-open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });
}