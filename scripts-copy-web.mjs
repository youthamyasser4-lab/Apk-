import { cp, mkdir } from 'node:fs/promises';
await mkdir('www', { recursive: true });
console.log('Using the original working index.html in www/.');
