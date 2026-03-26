// utils/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
    const cookieStore = await cookies()

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("환경 변수 NEXT_PUBLIC_SUPABASE_URL와 NEXT_PUBLIC_SUPABASE_ANON_KEY가 설정되지 않았습니다.");
    }

    return createServerClient(
        supabaseUrl,
        supabaseAnonKey,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // 서버 컴포넌트에서 쿠키를 수정하려고 할 때 발생하는 에러를 무시한다.
                        // 미들웨어에서 처리하도록 설계하는 것이 일반적
                    }
                },
            },
        }
    )
}