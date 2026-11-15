import { mkdir, copyFile } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
for (const [source, destination] of [
  ['orchids.html', 'index.html'],
  ['orchids.html', 'orchids.html'],
  ['index.html', 'lilies.html'],
  ['bouquet.js', 'bouquet.js'],
]) {
  await copyFile(source, `dist/${destination}`);
}
console.log('Static website built in dist/');
