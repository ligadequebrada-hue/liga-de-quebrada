'use server';

import { supabaseAdmin } from '@/lib/supabase-admin';

export async function getSiteConfig() {
  const { data, error } = await supabaseAdmin
    .from('site_config')
    .select('id, value');

  if (error) throw new Error(error.message);

  const config: Record<string, string> = {};
  for (const row of data || []) {
    config[row.id] = row.value;
  }
  return config;
}

export async function updateSiteConfig(entries: { id: string; value: string }[]) {
  for (const entry of entries) {
    const { error } = await supabaseAdmin
      .from('site_config')
      .upsert(
        { id: entry.id, value: entry.value, updated_at: new Date().toISOString() },
        { onConflict: 'id' }
      );
    if (error) throw new Error(error.message);
  }
  return { success: true };
}
