import dotenv from 'dotenv';
import path from 'path';

dotenv.config({});

let showStacktrace = true;

if ('SHOW_STACKTRACE' in process.env) {
	showStacktrace = process.env.SHOW_STACKTRACE;
}

const prodApiBaseUrl = 'http://191.252.201.155:2000/';
const devApiBaseUrl = 'http://localhost:2000/';

const config = {
	env: process.env.NODE_ENV || 'development',
	server: {
		host: process.env.HOST || '0.0.0.0',
		port: process.env.PORT || 2000
	},
	mongoUrl: 'mongodb://localhost:27017/foodDelivery',
	jwtSecret: process.env.JWT_SECRET || 'sdfsdfsdf',
	uploadDir: path.join(__dirname, '../upload'),
	showStacktrace,
	baseUrl: process.env.NODE_ENV === 'production' ? prodApiBaseUrl : devApiBaseUrl
};

export default config;
