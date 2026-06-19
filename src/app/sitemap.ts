import { MetadataRoute } from 'next';
import gameConfig from '@/data/game.config.json';
import tiers from '@/data/tier-list.json';

export const dynamic = 'force-static';

const config = gameConfig as { seo: { baseUrl: string }; routes: Array<{ path: string; priority: string }> };
const baseUrl = config.seo.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = config.routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === '/codes' || route.path === '/updates' ? 'daily' : 'weekly' as 'daily' | 'weekly',
    priority: parseFloat(route.priority),
  }));

  const itemRoutes = (tiers as Array<{ id: string; name: string }>).map((tier) => ({
    url: `${baseUrl}/tier-list/${tier.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...itemRoutes];
}
