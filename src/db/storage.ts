interface NewsI {
	date: string;
	title: string;
	link: string;
	urlImage: string;
}

let storageNews: NewsI[] = [];
export const storage = JSON.stringify(storageNews);

export const cleanStorage = () => {
    storageNews = [];
}