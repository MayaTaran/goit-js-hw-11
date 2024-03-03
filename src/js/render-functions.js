export function updateGallery(images) {
    // ваша реалізація функції тут
    getList.innerHTML = images.map(({ webformatURL, tags }) => {
        return `<li> <img src="${webformatURL}" alt="${tags}"></li>`;
    }).join('');
}



