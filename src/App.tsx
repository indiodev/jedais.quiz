import type { ReactElement } from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { Button } from './components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from './components/ui/card';
import { Label } from './components/ui/label';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { QUESTION_LIST } from './data';
export function App(): ReactElement {
	const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [selected, setSelected] = useState('');

	return (
		<section className="h-screen w-screen overflow-hidden bg-slate-900 flex items-center justify-center flex-col relative">
			<main className="max-w-[40rem] w-full flex flex-col  gap-6">
				<div className="flex flex-col gap-2 items-center justify-center">
					<img
						src="/logo.png"
						width={60}
						height={60}
					/>
					<span className="text-slate-500 font-bold italic text-lg">
						Jedais Tec
					</span>
				</div>

				<div className="flex flex-row justify-between items-center">
					<h1 className="text-slate-100 text-xl">Quiz de Excel</h1>
					<span className="text-slate-900 font-bold text-xl w-8 h-8 flex items-center justify-center bg-lime-400 rounded-full">
						{currentIndexQuestion + 1}
					</span>
				</div>

				<Card className="w-full border-0 flex-1 rounded-md">
					<CardHeader className="bg-slate-800 text-slate-200">
						<CardTitle>
							{QUESTION_LIST[currentIndexQuestion].question}
						</CardTitle>
					</CardHeader>
					<CardContent className="bg-slate-700 text-slate-200">
						<form className="p-6 flex flex-1 flex-col gap-8">
							{QUESTION_LIST[currentIndexQuestion].code && (
								<ReactMarkdown remarkPlugins={[gfm]}>
									{QUESTION_LIST[currentIndexQuestion].code}
								</ReactMarkdown>
							)}

							<RadioGroup>
								{QUESTION_LIST[currentIndexQuestion].options.map((item) => (
									<div
										className="flex items-center space-x-2 text-sm"
										key={item}
									>
										<RadioGroupItem
											value={item}
											id={item}
											onClick={() => {
												setSelected(item);
											}}
											className="accent-lime-400"
										/>
										<Label htmlFor={item}>{item}</Label>
									</div>
								))}
							</RadioGroup>
						</form>
					</CardContent>
					<CardFooter className="flex flex-1 bg-slate-700">
						<Button
							onClick={() => {
								if (QUESTION_LIST[currentIndexQuestion].answer !== selected) {
									alert('ERRADO, TENTE DE NOVO!');
									return;
								}

								if (currentIndexQuestion === QUESTION_LIST.length - 1) {
									alert('PARABÉNS, VOCÊ VENCEU!');
									setCorrect((state) => state + 1);
									setSelected('');
									return;
								}

								alert('PARABÉNS, VAMOS PRA PRÓXIMA!');
								if (currentIndexQuestion < QUESTION_LIST.length) {
									setCurrentIndexQuestion((state) => state + 1);
									setCorrect((state) => state + 1);
									setSelected('');
								}
							}}
							className="w-full bg-emerald-400 text-slate-950 hover:bg-emerald-500 uppercase"
						>
							Responder
						</Button>
					</CardFooter>
				</Card>
			</main>

			<footer className="flex justify-center w-full bg-lime-400 text-black absolute bottom-0 left-0 p-4">
				<span>
					<strong>Acertos:</strong> {correct} de {QUESTION_LIST.length}
				</span>
			</footer>
		</section>
	);
}
