import infoResendeSaude from '../hosts/SearchPrefeituraResende';
import { ServiceNoRepeatNews } from '../services/ServiceNoRepeatNews';

export default class ControllerPrefeituraResende {
	static async getNews() {
		const info = await infoResendeSaude();
		const verifyedNews = ServiceNoRepeatNews.verify(info);

		return verifyedNews;
	}
}
