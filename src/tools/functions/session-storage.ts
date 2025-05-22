export function setSessionStorage<T>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage<T>(key: string) {
    const item = sessionStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : undefined;
}

export function removeSessionStorage(key: string) {
    sessionStorage.removeItem(key);
}
