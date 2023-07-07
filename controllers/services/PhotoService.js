export default class PhotoService {

	getImages() {
        return fetch('..\\assets\\jsons\\photos.js').then(res => res.json())
                .then(d => d.data);
        }
}