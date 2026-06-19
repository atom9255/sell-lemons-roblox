import gameConfig from '@/data/game.config.json';

export interface GameConfig {
  game: {
    name: string;
    robloxId: string;
    developer: string;
    genre: string;
    currentVersion: string;
    lastUpdated: string;
    releaseDate: string;
    rating: string;
    platforms: string[];
  };
  stats: {
    visits: string;
    favorites: string;
    likes: string;
    offlineEarning: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
  };
  routes: Array<{ path: string; title: string; priority: string }>;
  calculator: {
    type: string;
    dataFile: string;
  };
  tiers: {
    incomeSources: string[];
    resetSystems: Array<{
      name: string;
      trigger: string;
      reward: string;
      note?: string;
      fruitTiers?: string[];
      resets?: string[];
    }>;
    powers: Array<{
      name: string;
      description: string;
      cost?: string;
      source?: string;
      lostOnAscension?: boolean;
      restrictions?: string[];
    }>;
    secrets: Array<{
      name: string;
      location: string;
      unlock: string;
      reward: string;
      harvestInterval?: string;
    }>;
    managerPriority: string[];
  };
}

export function getGameConfig(): GameConfig {
  return gameConfig as GameConfig;
}

export function getCurrentMonthYear(): string {
  const now = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[now.getMonth()]} ${now.getFullYear()}`;
}

export function getLastUpdated(): string {
  return gameConfig.game.lastUpdated;
}
