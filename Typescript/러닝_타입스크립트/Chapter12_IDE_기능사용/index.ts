import { data } from './data';

console.log(data.massage);

export function log(...data: unknown[]) {
  console.log(data);
}

log(['aa']);
export {};
