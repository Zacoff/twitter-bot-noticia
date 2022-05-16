import { storage } from '../db/storage';

interface NewsI {
	date: string;
	title: string;
	link: string;
	urlImage: string;
}

export class ServiceNoRepeatNews {
	static verify(news: NewsI[]) {
		let verifyedNews: NewsI[] = [];

		news.map((obj) => {
			if (!storage.includes(obj.title)) {
				verifyedNews.push(obj);
			}
			return;
		});

		if (verifyedNews.length === 0) {
			return 'Nao ha noticias novas...';
		}

		return verifyedNews;
	}
}
