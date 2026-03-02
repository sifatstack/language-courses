/**
 * SM-2 Spaced Repetition Algorithm
 * Based on SuperMemo SM-2 by Piotr Wozniak
 */
window.SM2 = {
  defaultState() {
    return { easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: null, lastReview: null };
  },

  /**
   * @param {Object} card - { easeFactor, interval, repetitions }
   * @param {number} quality - 0=blackout, 1=again, 3=hard, 4=good, 5=easy
   * @returns {Object} Updated card state with nextReview date string
   */
  calculate(card, quality) {
    let ef = card.easeFactor || 2.5;
    let interval = card.interval || 0;
    let reps = card.repetitions || 0;

    if (quality < 3) {
      reps = 0;
      interval = 1;
    } else {
      reps += 1;
      if (reps === 1) interval = 1;
      else if (reps === 2) interval = 6;
      else interval = Math.round(interval * ef);
    }

    ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (ef < 1.3) ef = 1.3;

    const now = new Date();
    const next = new Date(now);
    next.setDate(next.getDate() + interval);

    return {
      easeFactor: Math.round(ef * 100) / 100,
      interval: interval,
      repetitions: reps,
      nextReview: next.toISOString().split('T')[0],
      lastReview: now.toISOString().split('T')[0]
    };
  },

  isDue(cardState) {
    if (!cardState || !cardState.nextReview) return true;
    const today = new Date().toISOString().split('T')[0];
    return cardState.nextReview <= today;
  }
};
