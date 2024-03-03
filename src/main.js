// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const getForm = document.querySelector("form");
const KEY = '42649910-6a5238a097d86367028b0f975';
const BASE_URL = "https://pixabay.com/api/";
const PARAM = "image_type=photo&orientation=horizontal&safesearch=true";
let inputWord;
const getList = document.querySelector("ul#image-list");
const loader = document.querySelector('.loader');


getForm.addEventListener("submit", (event) => {
    event.preventDefault();
    inputWord = event.currentTarget.querySelector('input').value;

    const formattedInput = inputWord.split(' ').join('+');

    if (formattedInput.trim() !== '') {
        const LINK = `${BASE_URL}?key=${KEY}&q=${formattedInput}&${PARAM}`;
        loader.style.display = 'block';

        const serverPromise = new Promise((resolve, reject) => {
            fetch(LINK)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.hits.length === 0) {
                        iziToast.show({
                            title: '!',
                            message: 'Sorry, there are no images matching your search query. Please try again!',
                            color: "#EF4040",
                            messageColor: "#fff",
                            titleColor: "#fff",
                            position: 'topRight'
                        });
                        getList.innerHTML = '';
                        getForm.reset();
                    } else {
                        const images = data.hits;
                        console.log(images);

                        getList.innerHTML = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
                            return `<li class="card">
                                <a href="${largeImageURL}" data-caption="${tags}">
                                    <img class="card-image" src="${webformatURL}" alt="${tags}" />
                                    <ul class="discription-list">
                                        <li>
                                            <h3 class="disc-name">Likes</h3>
                                            <p class="disc-value">${likes}</p>
                                        </li>
                                        <li>
                                            <h3 class="disc-name">Views</h3>
                                            <p class="disc-value">${views}</p>
                                        </li>
                                        <li>
                                            <h3 class="disc-name">Comments</h3>
                                            <p class="disc-value">${comments}</p>
                                        </li>
                                        <li>
                                            <h3 class="disc-name">Downloads</h3>
                                            <p class="disc-value">${downloads}</p>
                                        </li>
                                    </ul>
                                </a>
                            </li>`;
                        }).join('');

                        const lightbox = new SimpleLightbox('.card a', {
                            captionsData: "title"
                        });
                        lightbox.refresh();
                        getForm.reset();
                    }
                })
                .catch(error => {
                    iziToast.show({
                        title: '!',
                        message: `Error ${error.message}`,
                        color: "#EF4040",
                        messageColor: "#fff",
                        titleColor: "#fff",
                        position: 'topRight'
                    });
                })
                .finally(() => {
                    loader.style.display = 'none';
                });
        });
    }
});
