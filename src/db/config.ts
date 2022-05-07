import Database from 'better-sqlite3';
const db = new Database('collected-news.db', {verbose: console.log});

const insert = db.prepare('INSERT INTO collected-news (title, date) VALUES (@title, @date)');

export const insertNews = db.transaction((collectedNews) => {
  for (const news of collectedNews) insert.run(news);
});

/* exemplo de chamada da funcao insertNews: 

insertNews([
    {title: 'nome-da-noticia', date: '00/00/00'}
])

*/

export const selectNew = (title: string, date: string) => {
    return db.prepare(`SELECT * FROM collected-news WHERE title LIKE ${title} and date like ${date}`)
}

