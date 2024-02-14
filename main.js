const accessKey = "rOduq1WYVQGKZx5YJCJUMEthqfUjhqlYmhvximEoIks";

const searchForm = document.getElementById("search-form");
const searchText = document.getElementById("search-text");
const searchResult = document.getElementById("search-result");
const showMoreBtn= document.getElementById("showmore");

let keyWord = "";
let page = "";

async function searchImages(){
    keyWord = searchText.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;
    
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
});