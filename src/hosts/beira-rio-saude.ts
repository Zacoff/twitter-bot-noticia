import * as puppeteer from 'puppeteer';

export const beiraRioSaude = async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	await page.goto('http://jornalbeirario.com.br/portal/?cat=18', {
		waitUntil: 'load',
		timeout: 50000,
	});

	const postsInformation = await page.evaluate(() => {
		const titleSelector = document.querySelectorAll('.entry-title > a');
		const textSelector = document.querySelectorAll('.entry-content > p');
		const imageSelector = document.querySelectorAll(
			'.featured-image > a > img'
		);

		let posts = [];
		for (let i = 0; i < titleSelector.length; i++) {
			posts.push({
				titulo: titleSelector[i].innerHTML,
				texto: textSelector[i].innerHTML,
				urlImagem: imageSelector[i].getAttribute('src'),
			});
		}
		return Object.assign({}, posts); // convertendo para objeto
	});

	await browser.close();

	console.log(postsInformation);
};
