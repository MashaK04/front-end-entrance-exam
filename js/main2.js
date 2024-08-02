// script.js
document.addEventListener('DOMContentLoaded', () => {
    const editableElements = document.querySelectorAll('.editable');

    editableElements.forEach(el => {
        el.addEventListener('input', () => {
            localStorage.setItem(el.innerText, el.innerText);
        });

        // Restore saved data if available
        const savedText = localStorage.getItem(el.innerText);
        if (savedText) {
            el.innerText = savedText;
        }

        // Add ripple effect on click
        el.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = ${e.clientX - el.offsetLeft}px;
            ripple.style.top = ${e.clientY - el.offsetTop}px;
            el.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    document.getElementById('downloadBtn').addEventListener('click', () => {
        downloadPDF();
    });
});

// Функция для скачивания PDF
function downloadPDF() {
    const element = document.getElementById('resume');

    html2pdf().from(element).save('resume.pdf'); // Используйте html2pdf.js библиотеку
}