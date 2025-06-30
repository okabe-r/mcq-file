
import React from 'react';
import { Question } from '../types';

interface QuestionDisplayProps {
    question: Question;
    userAnswer: number | null;
    onSelectAnswer: (choiceIndex: number) => void;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
    currentQuestionNumber: number;
    totalQuestions: number;
}

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;
    return (
        <div className="w-full bg-slate-700 rounded-full h-2.5 mb-6">
            <div
                className="bg-gradient-to-r from-teal-400 to-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
    question,
    userAnswer,
    onSelectAnswer,
    onNext,
    onPrev,
    isFirst,
    isLast,
    currentQuestionNumber,
    totalQuestions
}) => {
    const [visibleAnswers, setVisibleAnswers] = React.useState<Record<number, boolean>>({});

    React.useEffect(() => {
        setVisibleAnswers({});
    }, [question.id]);

    if (!question) {
        return <div className="text-center text-xl">Loading question...</div>;
    }

    return (
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 w-full animate-fade-in">
            <div className="flex justify-between items-baseline mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100">Question {currentQuestionNumber}</h2>
                 <span className="text-slate-400 font-medium">{currentQuestionNumber} / {totalQuestions}</span>
            </div>
             <ProgressBar current={currentQuestionNumber} total={totalQuestions} />
            <p className="text-lg text-slate-200 mb-6 whitespace-pre-wrap">{question.questionText}</p>

            {question.image && (
                <div className="mb-6 flex justify-center bg-slate-900 rounded-lg p-4">
                    <img src={question.image} alt="Question-related visual" className="max-w-full md:max-w-lg rounded-md" />
                </div>
            )}

            {question.type === 'mcq' && question.choices && (
                <div className="space-y-3">
                    {question.choices.map((choice, index) => {
                        const isSelected = userAnswer === index;
                        const baseStyle = "w-full text-left p-4 rounded-lg transition-colors duration-200 text-slate-200 border-2 border-slate-700";
                        const hoverStyle = "hover:bg-slate-700 hover:border-slate-600";
                        const selectedStyle = "bg-blue-600 border-blue-500 ring-2 ring-blue-400";

                        return (
                            <button
                                key={index}
                                onClick={() => onSelectAnswer(index)}
                                className={`${baseStyle} ${isSelected ? selectedStyle : hoverStyle}`}
                            >
                                <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                                {choice.text}
                            </button>
                        );
                    })}
                </div>
            )}

            {question.type === 'show-answer' && question.subQuestions && (
                <div className="space-y-4">
                    {question.subQuestions.map((sq, index) => (
                        <div key={index} className="bg-slate-900/50 p-4 rounded-lg">
                            <p className="text-slate-300 mb-3">{sq.question}</p>
                            {visibleAnswers[index] ? (
                                <p className="p-3 bg-green-500/10 text-green-300 rounded-md animate-fade-in">{sq.answer}</p>
                            ) : (
                                <button
                                    onClick={() => setVisibleAnswers(prev => ({ ...prev, [index]: true }))}
                                    className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-500 transition-colors"
                                >
                                    Show Answer
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
            
            <div className="mt-8 flex justify-between items-center">
                <button
                    onClick={onPrev}
                    disabled={isFirst}
                    className="px-6 py-3 bg-slate-700 text-white font-bold rounded-lg shadow-md hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-300"
                >
                    Previous
                </button>
                <button
                    onClick={onNext}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
                >
                    {isLast ? 'Finish Quiz' : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default QuestionDisplay;
