import dotenv from 'dotenv';
import { TwitterApi } from 'twitter-api-v2';

dotenv.config();

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			CONSUMER_KEY: string;
			CONSUMER_SECRET: string;
			ACCESS_TOKEN: string;
			ACCESS_TOKEN_SECRET: string;
		}
	}
}

const client = new TwitterApi({
	appKey: process.env.CONSUMER_KEY,
	appSecret: process.env.CONSUMER_SECRET,
	accessToken: process.env.ACCESS_TOKEN,
	accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

const rwClient = client.readWrite;
export default rwClient;