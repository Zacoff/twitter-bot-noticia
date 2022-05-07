import puppeteer from 'puppeteer';
interface INews {
	date: string,
	title: string,
	link: string,
	urlImage: string
}

const info = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto('https://resende.rj.gov.br/noticias?q=saude&de=&ate=');

	const postsInformation = await page.evaluate(() => {
		const dateSelector = document.querySelectorAll('.mini-news-wrapper > a > .info > .date');
		const titleSelector = document.querySelectorAll('.mini-news-wrapper > a > .info > .title');
		const imageSelector = document.querySelectorAll('.mini-news-wrapper > a > .image > img');
		const linkSelector = document.querySelectorAll('.mini-news-wrapper > a');
		let posts: INews[] = [];
		for (let i = 0; i < 5; i++)
			posts.push({
				date: dateSelector[i].innerHTML,
				title: titleSelector[i].innerHTML,
				link: linkSelector[i].getAttribute('href'),
				urlImage: imageSelector[i].getAttribute('src')
			});
		return Object.assign({}, posts);
	});

	await browser.close();

	return postsInformation;
};

export default info
