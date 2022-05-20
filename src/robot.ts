import { CronJob } from 'cron';
import client from './twitterClient';
import ControllerPrefeituraResende from './controllers/ControllerPrefeituraResende';
const news = ControllerPrefeituraResende.getNews();

const robot = async () => {
	console.log('parou aqui1');

	if (!Array.isArray(news)) {
		return;
	}

	// realiza o tweet da noticia
};

const job = () => {
	new CronJob('* * * * *', () => {
		robot();
		console.log('teste');
	});
};

job();
