// utils/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("환경 변수 NEXT_PUBLIC_SUPABASE_URL와 NEXT_PUBLIC_SUPABASE_ANON_KEY가 설정되지 않았습니다.");
    }
    return createBrowserClient(supabaseUrl, supabaseAnonKey);
}