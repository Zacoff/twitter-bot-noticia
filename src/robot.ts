import { CronJob } from 'cron';
import client from './twitterClient';
import ControllerPrefeituraResende from './controllers/ControllerPrefeituraResende';
import { cleanStorage, storageNews } from './db/storage';

const robot = async () => {
	const news = await ControllerPrefeituraResende.getNews();

	if (!Array.isArray(news)) return;

	try {
		news.map((item) => {
			const tweetTeste = `${item.title}
			Postado em: ${item.date}
			Link da postagem: ${item.link}`;
			tweet(tweetTeste);

			storageNews.push(item.title);
		});
	} catch (error) {
		console.log(error.message);
	}
};

async function tweet(content: string) {
	await client.v2.tweet(content);
}

(() => {
	// every 6 hours
	new CronJob('6 * * *', () => {
		robot();
	});

	// every month
	new CronJob('* *', () => {
		cleanStorage()
	})
})();
