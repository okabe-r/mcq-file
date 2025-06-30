
import React, { useState, useCallback, useEffect } from 'react';
import { ALL_QUESTIONS } from './data/questions';
import { Question } from './types';
import QuestionDisplay from './components/QuestionDisplay';
import ResultsDisplay from './components/ResultsDisplay';

const shuffleQuestions = () => [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);

export default function App() {
    const [questions, setQuestions] = useState<Question[]>(() => shuffleQuestions());
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizState, setQuizState] = useState<'active' | 'finished'>('active');

    useEffect(() => {
        setUserAnswers(new Array(questions.length).fill(null));
    }, [questions]);

    const shuffleAndStart = useCallback(() => {
        const shuffled = shuffleQuestions();
        setQuestions(shuffled);
        setCurrentQuestionIndex(0);
        setQuizState('active');
    }, []);

    const handleSelectAnswer = (choiceIndex: number) => {
        setUserAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentQuestionIndex] = choiceIndex;
            return newAnswers;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setQuizState('finished');
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const renderContent = () => {
        switch (quizState) {
            case 'active':
                if (userAnswers.length === 0) {
                    return <div className="text-center text-xl">Setting up your quiz...</div>;
                }
                return (
                    <QuestionDisplay
                        question={questions[currentQuestionIndex]}
                        userAnswer={userAnswers[currentQuestionIndex]}
                        onSelectAnswer={handleSelectAnswer}
                        onNext={handleNextQuestion}
                        onPrev={handlePrevQuestion}
                        isFirst={currentQuestionIndex === 0}
                        isLast={currentQuestionIndex === questions.length - 1}
                        currentQuestionNumber={currentQuestionIndex + 1}
                        totalQuestions={questions.length}
                    />
                );
            case 'finished':
                return (
                    <ResultsDisplay
                        questions={questions}
                        userAnswers={userAnswers}
                        onRestart={shuffleAndStart}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-slate-100 font-sans">
            <div className="w-full max-w-4xl mx-auto">
                {renderContent()}
            </div>
        </main>
    );
};
