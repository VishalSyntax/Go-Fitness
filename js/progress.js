document.addEventListener('DOMContentLoaded', function() {
            const progressForm = document.getElementById('progress-form');
            const progressHistory = document.getElementById('progress-history');

            // Load existing progress from localStorage
            let progressData = JSON.parse(localStorage.getItem('progressData')) || [];

            function renderProgress() {
                progressHistory.innerHTML = '';
                progressData.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.date}</td>
                        <td>${item.weight}</td>
                        <td>${item.workout}</td>
                    `;
                    progressHistory.appendChild(row);
                });
            }

            progressForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const newEntry = {
                    date: document.getElementById('progress-date').value,
                    weight: document.getElementById('progress-weight').value,
                    workout: document.getElementById('progress-workout').value
                };
                progressData.push(newEntry);
                localStorage.setItem('progressData', JSON.stringify(progressData));
                renderProgress();
                alert('Progress logged successfully!');
                progressForm.reset();
            });

            renderProgress();
        });
         
          