import { redis } from './dataProvider/redis';

const set = async <T>(key: string, fetcher: () => T, expires: number) => {
  const value = await fetcher()
  console.log(`stored value for ${key}`)
  await redis.set(key, JSON.stringify(value), 'EX', expires)
  return value
}

const get = async (key: string) => {
  const value = await redis.get(key)
  return value ? JSON.parse(value) : null
}

const fetch = async <T>(key: string, fetcher: () => T, expires: number) => {
  const storedValue = await get(key)
  if (storedValue) {
    console.log(`found the value for ${key}`)
    return storedValue
  }
  return await set(key, fetcher, expires)
};

export default { fetch, set, get }