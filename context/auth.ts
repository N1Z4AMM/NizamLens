import { createContext, useContext } from 'react'
import type { Session, User } from '@supabase/supabase-js'

export type AuthValue = {
    user: User | null
    session: Session | null
    loading: boolean
    signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthValue | undefined>(undefined)

export function useAuth() {
    const ctx = useContext(AuthContext)

    if (!ctx) {
        throw new Error('useAuth must be used inside <AuthProvider>')
    }

    return ctx
}