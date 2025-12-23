async function searchGeo() {
    const keyword = document.getElementById('keyword').value;
    const location = document.getElementById('location').value;
    const resDiv = document.getElementById('results');
    resDiv.innerHTML = 'Loading...';

    try {
        const response = await fetch(`https://YOUR-RENDER-URL.onrender.com/geo-keywords?query=${keyword}&location=${location}`);
        const data = await response.json();

        resDiv.innerHTML = '';
        if(data.results && data.results.length > 0) {
            data.results.forEach(place => {
                const div = document.createElement('div');
                div.textContent = place.name + ' - ' + place.formatted_address;
                resDiv.appendChild(div);
            });
        } else {
            resDiv.innerHTML = 'কোনো ফলাফল পাওয়া যায়নি।';
        }
    } catch (error) {
        resDiv.innerHTML = 'ডেটা আনার সময় সমস্যা হয়েছে।';
        console.error(error);
    }
}
