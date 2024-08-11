document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.button-group button').forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            document.querySelectorAll('.button-group button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');
            const targetContent = document.querySelector(`#${this.dataset.target}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
})