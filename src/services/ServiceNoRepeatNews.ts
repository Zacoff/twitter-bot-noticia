import { storageNews } from '../db/storage';

interface NewsI {
	date: string;
	title: string;
	link: string;
}

export class ServiceNoRepeatNews {
	static verify(news: NewsI[]) {
		let verifyedNews: NewsI[] = [];
		news.map((obj) => {
			if (!storageNews.includes(obj.title)) {
				const regex = /.*(?=&nbsp)/gi;
				const validTitle = obj.title.match(regex);

				if (validTitle !== null) obj.title = validTitle[0];

				console.log(obj);
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
