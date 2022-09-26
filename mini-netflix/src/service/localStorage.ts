export function getID (key: string): number {
  return Number(localStorage.getItem(key))
}

export function getData (key: string): [] {
  return JSON.parse(localStorage.getItem(key) || '[]')
}

export function setData (key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data))
}

export function removeData (key: string): void {
  localStorage.removeItem(key)
}