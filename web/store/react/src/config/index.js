const prodApiBaseUrl = 'https://191.252.201.155/';
const devApiBaseUrl = 'http://localhost:2000/';

const config = {
	apiBaseUrl:
		process.env.NODE_ENV === 'production' ? prodApiBaseUrl : devApiBaseUrl
};

export default config;
