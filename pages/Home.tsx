import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
          Master the <span className="text-blue-600">PPL Split</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A simple, effective, and scientifically backed routine designed to maximize muscle growth and recovery for beginners.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Push', desc: 'Chest, Shoulders, Triceps', color: 'bg-red-50 text-red-700', link: '/workout/push' },
          { title: 'Pull', desc: 'Back, Biceps, Rear Delts', color: 'bg-blue-50 text-blue-700', link: '/workout/pull' },
          { title: 'Legs', desc: 'Quads, Hamstrings, Glutes', color: 'bg-green-50 text-green-700', link: '/workout/legs' },
        ].map((item) => (
          <Link 
            key={item.title}
            to={item.link}
            className="group block p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 bg-white text-center"
          >
            <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${item.color}`}>
              Day {item.title === 'Push' ? '1 & 4' : item.title === 'Pull' ? '2 & 5' : '3 & 6'}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h2>
            <p className="text-gray-500 font-medium">{item.desc}</p>
          </Link>
        ))}
      </section>

      <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="md:flex items-start gap-8">
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Why PPL?</h3>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                        <p className="text-gray-300"><strong className="text-white">Optimal Frequency:</strong> Hit every muscle group twice a week.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                        <p className="text-gray-300"><strong className="text-white">Efficient Recovery:</strong> Muscles rest while others work.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                        <p className="text-gray-300"><strong className="text-white">Simplicity:</strong> Easy to remember structure.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;