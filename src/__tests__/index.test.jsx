import { beforeEach, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from '../components/Task.jsx';
import 'mutationobserver-shim';
import fs from 'fs';
import path from 'path';
import { addDays, format } from 'date-fns';

const date = new Date();
const taskObj = {
  id: 1,
  title: 'Projeyi baştan sona oku',
  description:
    'Bugün öğrendiklerimizden hangilerini projede kullanabiliriz, hangi kısımları mevcut bilgimizle yapabiliriz?',
  people: ['Ömer', 'emre'],
  deadline: format(addDays(date, 2), 'yyyy-MM-dd'),
  status: 'yapıldı',
};

const task = fs
  .readFileSync(path.resolve(__dirname, '../components/Task.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

const tailwindConfig = fs
  .readFileSync(path.resolve(__dirname, '../../tailwind.config.js'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

const indexCss = fs
  .readFileSync(path.resolve(__dirname, '../index.css'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

beforeEach(() => {
  render(<Task taskObj={taskObj} onComplete={() => {}} />);
});

test('1.1 .task classındaki padding için doğru tailwindcss classı kullanılmış', async () => {
  const div = document.querySelector('div>div');
  expect(div).toHaveClass('p-6');
});

test('1.2 .task classındaki background için doğru tailwindcss classı kullanılmış', async () => {
  const div = document.querySelector('div>div');
  expect(div).toHaveClass('bg-white ');
});

test('1.3 .task classındaki border-radius için doğru tailwindcss classı kullanılmış', async () => {
  const div = document.querySelector('div>div');
  expect(div).toHaveClass('rounded-md');
});

test('1.4 .task classındaki line-height için doğru tailwindcss classı kullanılmış', async () => {
  const div = document.querySelector('div>div');
  expect(div).toHaveClass('leading-normal');
});

test('1.5 .task classındaki margin-top için doğru tailwindcss classı kullanılmış', async () => {
  const div = document.querySelector('div>div');
  expect(div).toHaveClass('mt-4');
});

test('1.6 .task classındaki box-shadow için doğru tailwindcss classı arbitrary değer olarak kullanılmış. Açıklamalardaki ipucuna dikkat.', async () => {
  const div = document.querySelector('div>div');
  expect(div).toHaveClass('shadow-[0_4px_5px_0_rgb(0 0 0 / 10%)]');
});

test('2.1 h3 deki font-size için doğru tailwindcss classı kullanılmış. ', async () => {
  const div = document.querySelector('div>div>h3');
  expect(div).toHaveClass('text-lg');
});

test('2.2 h3 deki color için doğru tailwindcss classı arbitrary değer olarak kullanılmış. ', async () => {
  const div = document.querySelector('div>div>h3');
  expect(div).toHaveClass('text-[#c8781a]');
});

test('3.1 p deki padding için doğru tailwindcss classları kullanılmış. ', async () => {
  const div = document.querySelector('div>div>p');
  expect(div).toHaveClass('pt-2');
  expect(div).toHaveClass('pb-3');
});

test('3.2 p deki font-size için doğru tailwindcss classı kullanılmış. ', async () => {
  const div = document.querySelector('div>div>p');
  expect(div).toHaveClass('text-sm');
});

test('3.3 p deki color için doğru tailwindcss classı arbitrary değer olarak kullanılmış.', async () => {
  const div = document.querySelector('div>div>p');
  expect(div).toHaveClass('text-[#444]');
});

test('4.1 buttondaki display için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelector('div>div>button');
  expect(div).toHaveClass('block');
});

test('4.2 buttondaki padding için doğru tailwindcss classları kullanılmış.', async () => {
  const div = document.querySelector('div>div>button');
  expect(div).toHaveClass('py-2');
  expect(div).toHaveClass('px-3');
});

test('4.3 buttondaki margin-left için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelector('div>div>button');
  expect(div).toHaveClass('ml-auto');
});

test('4.4 buttondaki background-color için doğru tailwindcss classı arbitrary değer olarak kullanılmış.', async () => {
  const div = document.querySelector('div>div>button');
  expect(div).toHaveClass('bg-[#fecc91]');
});

test('4.5 buttondaki box-shadow için doğru tailwindcss classı arbitrary değer olarak kullanılmış.', async () => {
  const div = document.querySelector('div>div>button');
  expect(div).toHaveClass('shadow-[0_4px_5px_0_rgb(0 0 0 / 5%)]');
});

test('4.6 buttondaki border-radius için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelector('div>div>button');
  expect(div).toHaveClass('rounded-sm');
});

test('4.7 buttondaki border için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelector('div>div>button');
  expect(div).toHaveClass('border-0');
});

test('4.8 buttondaki cursor için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelector('div>div>button');
  expect(div).toHaveClass('cursor-pointer');
});

test('5.1 pill classında display için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[1]).toHaveClass('inline-block');
});

test('5.2 pill classında padding için doğru tailwindcss classları kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[1]).toHaveClass('py-1.5');
  expect(div[1]).toHaveClass('px-3');
});

test('5.3 pill classında font-size için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[1]).toHaveClass('text-sm');
});

test('5.4 pill classında border için doğru tailwindcss classları kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[1]).toHaveClass('border-solid');
  expect(div[1]).toHaveClass('border-2');
  expect(div[1]).toHaveClass('border-[#ccc]');
});

test('5.5 pill classında marginler için doğru tailwindcss classları kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[1]).toHaveClass('mr-1');
  expect(div[1]).toHaveClass('mb-1.5');
});

test('5.6 pill classında border-radius için doğru tailwindcss classı arbitrary değer olarak kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[1]).toHaveClass('rounded-[30px]');
});

test('6.1 deadline classında font-size için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelector('div>div>div');
  expect(div).toHaveClass('text-xs');
});

test('6.2 deadline classında padding-top için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelector('div>div>div');
  expect(div).toHaveClass('pt-1');
});

test('7.1 deadline classındaki spanda padding için doğru tailwindcss classları kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[0]).toHaveClass('py-1');
  expect(div[0]).toHaveClass('px-2');
});

test('7.2 deadline classındaki spanda border-radius için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[0]).toHaveClass('rounded-sm');
});

test('7.3 deadline classındaki spanda display için doğru tailwindcss classı kullanılmış.', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[0]).toHaveClass('inline-block');
});

test('8 config dosyasında normal ve urgent renkleri themede tanımlanmış', async () => {
  expect(tailwindConfig).toMatch(/normal/i);
  expect(tailwindConfig).toMatch(/urgent/i);
  expect(tailwindConfig).not.toMatch(/content:[]/i);
});

test('9.1 index.css dosyasında tailwind directiveleri eklenmiş', async () => {
  expect(indexCss).toMatch(/@tailwindbase/i);
  expect(indexCss).toMatch(/@tailwindcomponents/i);
  expect(indexCss).toMatch(/@tailwindutilities/i);
});

test('9.2 index.css dosyasında reset.css silinmiş.', async () => {
  expect(indexCss).not.toMatch(/reset.css/i);
});

test('9.3 Task.jsx dosyasında task.css silinmiş.', async () => {
  expect(task).not.toMatch(/task.css/i);
});

test('10.1 date-fns kütüphanesindeki formatDistanceToNow ve  differenceInDays metodları kullanılmış', async () => {
  expect(task).toMatch(/date-fns/i);
  expect(task).toMatch(/differenceInDays/i);
  expect(task).toMatch(/formatDistanceToNow/i);
  expect(task).toMatch(/locale/i);
});

test('10.2 date-fns kütüphanesindeki formatDistanceToNow ile 1 gün kaldı gibi metinler doğru yazdırılıyor', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[0]).toHaveTextContent('1 gün sonra');
});

test('10.3 date-fns kütüphanesindeki differenceInDays ile taskin deadlineına kalan gün hesaplanarak doğru class ekleniyor', async () => {
  const div = document.querySelectorAll('div>div>span');
  expect(div[0]).toHaveClass('bg-urgent');
});
