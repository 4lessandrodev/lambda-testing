import * as cache from 'memory-cache';
const ONE_MINUTE = 1000 * 60;

const markCache = (data: string): string => {
	return data + ' from cache';
}

export const addToCache = (key: string): void => {
	const data = markCache(key);
	cache.put(key, data, ONE_MINUTE);
}

export const getCache = (key: string): string | undefined => {
	return cache.get(key);
}
