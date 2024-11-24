// Fetch and display news items from JSON
fetch('./data/links.json')
    .then(response => response.json())
    .then(data => {
        const newsList = document.getElementById('news-list');
        data.forEach((item, index) => {
            if (index < 5) { // Only display the first 5 items initially
                const newsItem = document.createElement('div');
                newsItem.className = "flex items-center bg-white p-4 rounded-lg shadow-md";
                newsItem.innerHTML = `
                    <div class="text-xl font-semibold w-10">${index + 1}</div>
                    <div class="ml-4">
                        <h4 class="font-semibold"><a href="${item.url}" target="_blank">${item.title}</a></h4>
                        <p class="text-sm text-gray-500">${item.source} | ${item.date}</p>
                    </div>
                `;
                newsList.appendChild(newsItem);
            }
        });
    })
    .catch(error => console.error('Error fetching news:', error));
