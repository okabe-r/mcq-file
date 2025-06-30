
import React from 'react';
import { useState, useMemo } from 'react';
import { Question } from '../types';

interface ResultsDisplayProps {
    questions: Question[];
    userAnswers: (number | null)[];
    onRestart: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ questions, userAnswers, onRestart }) => {
    const [showAll, setShowAll] = useState(false);

    const { score, totalScorableQuestions } = useMemo(() => {
        let correct = 0;
        let scorable = 0;
        questions.forEach((question, index) => {
            if (question.type === 'mcq') {
                scorable++;
                const userAnswerIndex = userAnswers[index];
                if (userAnswerIndex !== null && question.choices?.[userAnswerIndex]?.text === question.correctAnswer) {
                    correct++;
                }
            }
        });
        return { score: correct, totalScorableQuestions: scorable };
    }, [questions, userAnswers]);

    const incorrectQuestions = useMemo(() => {
        return questions.map((q, i) => ({ ...q, userAnswerIndex: userAnswers[i], originalIndex: i }))
            .filter((q, i) => {
                if (q.type !== 'mcq') return false; // Exclude non-MCQs from incorrect list
                const userAnswerIndex = userAnswers[i];
                return userAnswerIndex === null || q.choices?.[userAnswerIndex]?.text !== q.correctAnswer;
            });
    }, [questions, userAnswers]);
    
    const allQuestionsWithAnswers = useMemo(() => {
        return questions.map((q, i) => ({ ...q, userAnswerIndex: userAnswers[i], originalIndex: i }));
    }, [questions, userAnswers]);


    const questionsToDisplay = showAll ? allQuestionsWithAnswers : incorrectQuestions;

    const scorePercentage = totalScorableQuestions > 0 ? Math.round((score / totalScorableQuestions) * 100) : 0;
    const scoreColor = scorePercentage >= 80 ? 'text-green-400' : scorePercentage >= 50 ? 'text-yellow-400' : 'text-red-400';

    return (
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 w-full animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">Quiz Results</h2>
                <p className="text-2xl mt-4">You scored</p>
                <p className={`text-6xl font-bold my-2 ${scoreColor}`}>{score} / {totalScorableQuestions}</p>
                <p className="text-xl text-slate-300">({scorePercentage}%)</p>
            </div>

            <div className="flex justify-center items-center space-x-4 mb-8">
                <button
                    onClick={onRestart}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
                >
                    Restart Quiz
                </button>
                 <button
                    onClick={() => setShowAll(prev => !prev)}
                    className="px-6 py-3 bg-slate-700 text-white font-bold rounded-lg shadow-md hover:bg-slate-600 transition-all duration-300"
                >
                    {showAll ? 'Show Incorrect Only' : 'Show All Questions'}
                </button>
            </div>
            
            <h3 className="text-2xl font-semibold text-center mb-6 border-b-2 border-slate-700 pb-3">{showAll ? 'Full Review' : 'Review Incorrect Answers'}</h3>
            
            <div className="space-y-6">
                {questionsToDisplay.map((q) => {
                    if (q.type === 'show-answer') {
                        return (
                            <div key={q.id} className="bg-slate-900/50 p-5 rounded-lg border-l-4 border-slate-700">
                                <p className="font-semibold text-slate-400 mb-2">Question {q.originalIndex + 1}</p>
                                <p className="text-lg text-slate-200 mb-4 whitespace-pre-wrap">{q.questionText}</p>
                                <div className="space-y-3">
                                    {q.subQuestions?.map((sq, i) => (
                                        <div key={i} className="bg-slate-800 p-3 rounded-md">
                                            <p className="text-slate-400 font-medium mb-1">{sq.question}</p>
                                            <p className="text-slate-200">{sq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    
                    const isCorrect = q.userAnswerIndex !== null && q.choices?.[q.userAnswerIndex]?.text === q.correctAnswer;
                    
                    return (
                        <div key={q.id} className="bg-slate-900/50 p-5 rounded-lg border-l-4 border-slate-700">
                             <p className="font-semibold text-slate-400 mb-2">Question {q.originalIndex + 1}</p>
                            <p className="text-lg text-slate-200 mb-4 whitespace-pre-wrap">{q.questionText}</p>
                             {q.image && (
                                <div className="mb-4 flex justify-center bg-slate-900 rounded-lg p-2">
                                    <img src={q.image} alt="Question-related visual" className="max-w-full md:max-w-md rounded-md" />
                                </div>
                            )}
                            <div className="space-y-2 text-sm">
                                {q.choices?.map((choice, choiceIndex) => {
                                    const isUserAnswer = q.userAnswerIndex === choiceIndex;
                                    const isCorrectAnswer = choice.text === q.correctAnswer;
                                    let style = "p-3 rounded-md border-2 border-transparent flex items-start";
                                    let icon = null;

                                    if (isCorrectAnswer) {
                                        style += " bg-green-500/10 border-green-500/30 text-green-300";
                                        icon = <span className="mr-2 text-green-400">✔</span>;
                                    }
                                    if (isUserAnswer && !isCorrect) {
                                        style += " bg-red-500/10 border-red-500/30 text-red-300";
                                        icon = <span className="mr-2 text-red-400">✖</span>;
                                    }

                                    return (
                                        <div key={choiceIndex} className={style}>
                                          {icon}
                                          <div className="flex-1">
                                            <span className="font-bold mr-2">{String.fromCharCode(65 + choiceIndex)}.</span>
                                            {choice.text}
                                          </div>
                                        </div>
                                    );
                                })}
                                 {q.userAnswerIndex === null && (
                                      <div className="p-3 rounded-md border-2 bg-yellow-500/10 border-yellow-500/30 text-yellow-300">
                                         <span className="mr-2 text-yellow-400">!</span> No answer selected. The correct answer is highlighted above.
                                      </div>
                                  )}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default ResultsDisplay;
