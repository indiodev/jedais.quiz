export const QUESTION_LIST = [
	{
		question: 'Qual é a fórmula para somar os valores das células A1, B1 e C1?',
		answer: '=A1 + B1 + C1',
		options: [
			'=A1 + B1 + C1',
			'=A1 - B1 + C1',
			'=A1 * B1 * C1',
			'=A1 / B1 + C1',
		],
		code: `
	|    | A  | B   | C  |
	| 1  | 10 | 15  | 20 | 
	| 2  | 12 | 20  | 20 |
	| 3  | 12 | 20  | 20 |
`,
	},
	{
		question: 'Como você multiplicaria os valores das células A2 e B2?',
		answer: '=A2 * B2',
		options: ['=MUL(A2, B2)', '=A2 * B2', '=SOMA(A2:B2)', '=A2 - B2'],
		code: `
	|    | A  | B   | C  |
	| 1  | 10 | 15  | 20 | 
	| 2  | 12 | 20  | 20 |
	| 3  | 12 | 20  | 20 |
`,
	},
	{
		question:
			'Qual fórmula você usaria para dividir o valor da célula B3 pelo valor da célula A3?',
		answer: '=B3/A3',
		options: ['=B3/A3', '=DI(B3,A3)', '=B3-A3', '=A3*B3'],
		code: `
	|    | A  | B   | C  |
	| 1  | 10 | 15  | 20 | 
	| 2  | 12 | 20  | 20 |
	| 3  | 12 | 20  | 20 |
`,
	},

	{
		question:
			'Como você dividiria o valor da célula C2 pelo valor da célula B2?',
		answer: '=C2/B2',
		options: ['=C2/B2', '=DI(C2,B2)', '=C2*B2', '=B2-C2'],
		code: `
	|    | A  | B   | C  |
	| 1  | 10 | 15  | 20 | 
	| 2  | 12 | 20  | 20 |
	| 3  | 12 | 20  | 20 |
`,
	},
	{
		question: 'Qual é a fórmula para somar os valores das células A3 e B3?',
		answer: '=A3 + B3',
		options: ['=SOM(A3, B3)', '=A3 + B3', '=A3 - B3', '=MULT(A3, B3)'],
		code: `
	|    | A  | B   | C  |
	| 1  | 10 | 15  | 20 | 
	| 2  | 12 | 20  | 20 |
	| 3  | 12 | 20  | 20 |
`,
	},
	{
		question: 'Como você multiplicaria os valores das células B1 e C1?',
		answer: '=B1 * C1',
		options: ['=MUL(B1, C1)', '=B1 * C1', '=SOMA(B1:C1)', '=B1 - C1'],
		code: `
	|    | A  | B   | C  |
	| 1  | 10 | 15  | 20 | 
	| 2  | 12 | 20  | 20 |
	| 3  | 12 | 20  | 20 |
`,
	},
	{
		question:
			'Qual fórmula você usaria para dividir o valor da célula A2 pelo valor da célula A1?',
		answer: '=A2 / A1',
		options: ['=A2 / A1', '=DI(A2, A1)', '=A2 - A1', '=A1 / A2'],
		code: `
	|    | A  | B   | C  |
	| 1  | 10 | 15  | 20 | 
	| 2  | 12 | 20  | 20 |
	| 3  | 12 | 20  | 20 |
`,
	},
	{
		question: 'Como você somaria os valores das células A1 e B2?',
		answer: '=A1 + B2',
		options: ['=A1 + B2', '=SOM(A1, B2)', '=A1 - B2', '=SOM(A1:B2)'],
		code: `
	|    | A  | B   | C  |
	| 1  | 10 | 15  | 20 | 
	| 2  | 12 | 20  | 20 |
	| 3  | 12 | 20  | 20 |
`,
	},
];
