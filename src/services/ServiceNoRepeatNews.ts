import { selectNew } from "../db/config";

interface NewsI {
    date: string,
	title: string,
	link: string,
	urlImage: string
}

export class ServiceNoRepeatNews {
    static verify(news : NewsI[]) {
        /*for (let i = 0; i < news.length; i++) {
            const alreadyPosted = selectNew(news[i].title, news[i].date);
            if(alreadyPosted.all.length) news.splice(i, 1);            
        }*/
        return true
    }
}