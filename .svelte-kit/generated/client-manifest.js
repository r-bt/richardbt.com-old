export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')];

			export const server_loads = [];

			export const dictionary = {
	"": [~2],
	"to-come-back-to": [16],
	"website": [17],
	"projects/final-project": [3],
	"projects/week1": [4],
	"projects/week10": [5],
	"projects/week11": [6],
	"projects/week12": [7],
	"projects/week2": [8],
	"projects/week3": [9],
	"projects/week4": [10],
	"projects/week5": [11],
	"projects/week6": [12],
	"projects/week7": [13],
	"projects/week8": [14],
	"projects/week9": [15]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};