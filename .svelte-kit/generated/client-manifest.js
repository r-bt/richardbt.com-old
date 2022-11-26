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
	() => import('./nodes/14')];

			export const server_loads = [];

			export const dictionary = {
	"": [2],
	"final-project": [3],
	"to-come-back-to": [4],
	"website": [5],
	"week1": [6],
	"week2": [7],
	"week3": [8],
	"week4": [9],
	"week5": [10],
	"week6": [11],
	"week7": [12],
	"week8": [13],
	"week9": [14]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};