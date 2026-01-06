export const _query = (selector: any) => document.querySelector(selector)
export const query = (selector: string): any[] => [...document.querySelectorAll(selector)]
