import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../src/lib/supabase'
import { AuthContext } from './auth'
import type { AuthValue } from './auth'

export function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let active = true

        // Restores the session on page load, and finishes the OAuth redirect (?code=...)
        supabase.auth
            .getSession()
            .then(({ data }: { data: { session: Session | null } }) => {
                if (!active) return
                setSession(data.session)
                setLoading(false)
            })
            .catch(() => {
                if (!active) return
                setLoading(false)
            })

        // Fires on login, logout, and token refresh
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event: string, next: Session | null) => {
            if (!active) return
            setSession(next)
            setLoading(false)
        })

        return () => {
            active = false
            subscription.unsubscribe()
        }
    }, [])

    const value: AuthValue = {
        user: session?.user ?? null,
        session,
        loading,
        signOut: async () => {
            await supabase.auth.signOut()
        },
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}