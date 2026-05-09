import { Injectable } from '@nestjs/common';

@Injectable()
export class KnnService {
  private cosineSimilarity(
    a: Record<string, number>,
    b: Record<string, number>,
  ): number {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    let dot = 0;
    let normA = 0;
    let normB = 0;

    keys.forEach((k) => {
      const va = a[k] ?? 0;
      const vb = b[k] ?? 0;
      dot += va * vb;
      normA += va * va;
      normB += vb * vb;
    });

    if (normA === 0 || normB === 0) return 0;
    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  getScoredCandidates(
    allRatings: Record<string, Record<string, number>>,
    currentUserId: string,
    currentUserRatings: Record<string, number>,
    candidateMealIds: string[],
    k = 5,
  ): { mealId: string; score: number }[] {
    // Step 1: compute similarity to all other users
    const similarities: { userId: string; sim: number }[] = [];

    for (const [uid, ratings] of Object.entries(allRatings)) {
      if (uid === currentUserId) continue;
      if (Object.keys(ratings).length < 3) continue;
      const sim = this.cosineSimilarity(currentUserRatings, ratings);
      if (sim > 0) similarities.push({ userId: uid, sim });
    }

    // Step 2: pick top K neighbors
    similarities.sort((a, b) => b.sim - a.sim);
    const neighbors = similarities.slice(0, k);

    // Cold start: no neighbors → neutral score
    if (neighbors.length === 0) {
      return candidateMealIds.map((mealId) => ({ mealId, score: 3 }));
    }

    // Step 3: weighted average neighbor rating per candidate
    const scores: { mealId: string; score: number }[] = [];

    for (const mealId of candidateMealIds) {
      if (currentUserRatings[mealId] !== undefined) continue;

      let weightedSum = 0;
      let weightTotal = 0;

      neighbors.forEach(({ userId, sim }) => {
        const neighborRating = allRatings[userId][mealId];
        if (neighborRating !== undefined) {
          weightedSum += sim * neighborRating;
          weightTotal += sim;
        }
      });

      const score = weightTotal > 0 ? weightedSum / weightTotal : 3;
      scores.push({ mealId, score });
    }

    scores.sort((a, b) => b.score - a.score);
    return scores;
  }
}
