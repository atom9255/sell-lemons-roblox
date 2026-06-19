'use client';

import { useState, useMemo } from 'react';
import resetSystems from '@/data/calculator-evolution.json';

export default function CalculatorPage() {
  const [netWorth, setNetWorth] = useState('');
  const [investorBonus, setInvestorBonus] = useState('');
  const [currentInvestors, setCurrentInvestors] = useState('');
  const [activeTab, setActiveTab] = useState<'calculator' | 'info'>('calculator');

  const result = useMemo(() => {
    const nw = parseFloat(netWorth) || 0;
    const bonus = parseFloat(investorBonus) || 0;
    const investors = parseFloat(currentInvestors) || 0;

    if (nw === 0 && bonus === 0) return null;

    const evolutionTrigger = 77e24; // 77 Sextillion
    const voidTrigger = 500e15; // 500 Quadrillion investors

    let recommendation = '';
    let reason = '';

    if (bonus >= 350) {
      recommendation = 'Evolve NOW';
      reason = 'You\'ve hit the 350% sweet spot for your first Evolution (Rebirth). Waiting longer wastes time.';
    } else if (bonus >= 200) {
      recommendation = 'Almost ready for Evolution';
      reason = '200%+ is acceptable, but 350%+ is the community sweet spot. Keep farming!';
    } else if (bonus > 0) {
      recommendation = 'Keep farming';
      reason = `At ${bonus.toFixed(1)}%, it\'s too early to evolve. Wait for at least 200%.`;
    } else if (investors >= 500e15) {
      recommendation = 'Unlock Void Evolution';
      reason = 'You have 500+ Quadrillion investors! The Purple Portal is open for a 42× multiplier.';
    } else if (investors > 0) {
      recommendation = 'Keep collecting investors';
      reason = `At ${(investors / 1e15).toFixed(1)} Quadrillion, you need ${(500 - investors / 1e15).toFixed(1)}× more for Void Evolution.`;
    } else {
      recommendation = 'Focus on net worth first';
      reason = 'Reach $77 Sextillion to unlock Evolution (Rebirth).';
    }

    return { recommendation, reason };
  }, [netWorth, investorBonus, currentInvestors]);

  const tierColors: Record<string, string> = {
    S: 'bg-red-500/20 text-red-400 border-red-500/40',
    A: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
    B: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
    C: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    D: 'bg-gray-500/20 text-gray-400 border-gray-500/40',
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          🧮 Evolution Calculator
        </h1>
        <p className="text-gray-500">
          Plan your resets and calculate the optimal time to evolve, void evolve, or ascend.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('calculator')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm ${
            activeTab === 'calculator' ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
          }`}
        >
          Calculator
        </button>
        <button
          onClick={() => setActiveTab('info')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm ${
            activeTab === 'info' ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
          }`}
        >
          Reset Systems Info
        </button>
      </div>

      {activeTab === 'calculator' && (
        <>
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="card">
              <label className="block text-sm font-bold mb-2">Net Worth ($)</label>
              <input
                type="text"
                placeholder="e.g. 77000000000000000000000000"
                value={netWorth}
                onChange={(e) => setNetWorth(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm"
              />
              <p className="text-xs text-gray-400 mt-1">For Evolution trigger: $77 Sextillion</p>
            </div>
            <div className="card">
              <label className="block text-sm font-bold mb-2">Pending Investor Bonus (%)</label>
              <input
                type="number"
                placeholder="e.g. 350"
                value={investorBonus}
                onChange={(e) => setInvestorBonus(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm"
              />
              <p className="text-xs text-gray-400 mt-1">Sweet spot: 350%+</p>
            </div>
            <div className="card">
              <label className="block text-sm font-bold mb-2">Total Investors</label>
              <input
                type="text"
                placeholder="e.g. 500000000000000"
                value={currentInvestors}
                onChange={(e) => setCurrentInvestors(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm"
              />
              <p className="text-xs text-gray-400 mt-1">For Void Evolution: 500 Quadrillion</p>
            </div>
          </div>

          {/* Result */}
          {result && (
            <div className="card mb-8 border-2 border-amber-400">
              <h2 className="text-xl font-bold mb-2">📊 Recommendation: {result.recommendation}</h2>
              <p className="text-gray-600 dark:text-gray-400">{result.reason}</p>
            </div>
          )}

          {/* Quick Reference */}
          <div className="card">
            <h3 className="font-bold mb-4">Quick Reference — Reset Thresholds</h3>
            <div className="space-y-3">
              {resetSystems.map((sys) => (
                <div key={sys.id} className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                    {sys.id === 'evolution' ? '1' : sys.id === 'void-evolution' ? '2' : '3'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{sys.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-mono">{sys.multiplier}</span>
                    </div>
                    <p className="text-sm text-gray-500">Trigger: {sys.trigger}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reward: {sys.reward}</p>
                    {sys.note && <p className="text-xs text-gray-400 mt-1">💡 {sys.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'info' && (
        <div className="space-y-6">
          {resetSystems.map((sys) => (
            <div key={sys.id} className="card">
              <h3 className="text-xl font-bold mb-3">{sys.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Trigger</p>
                  <p className="font-mono text-sm">{sys.trigger}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Multiplier</p>
                  <p className="font-mono text-sm text-amber-600 font-bold">{sys.multiplier}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500">Reward</p>
                  <p>{sys.reward}</p>
                </div>
                {sys.resets && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">Resets</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {sys.resets.map((r) => (
                        <span key={r} className="tag tag-red">{r}</span>
                      ))}
                    </div>
                  </div>
                )}
                {sys.fruitTiers && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">Fruit Tiers</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {sys.fruitTiers.map((t) => (
                        <span key={t} className="tag tag-green">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
                {sys.note && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-amber-600">💡 {sys.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
