
import React from 'react';

interface WelcomeScreenProps {
    onStart: () => void;
    totalQuestions: number;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, totalQuestions }) => {
    return (
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center flex flex-col items-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 mb-4">
                Medical Knowledge Challenge
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl">
                Test your expertise with {totalQuestions} questions covering critical medical scenarios. Questions will be presented in a random order. Good luck!
            </p>
            <button
                onClick={onStart}
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
                Start Quiz
            </button>
        </div>
    );
};
