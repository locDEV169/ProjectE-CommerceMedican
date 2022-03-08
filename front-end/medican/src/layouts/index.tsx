import { default as React, ReactNode } from 'react'
import FooterLayout from './footer'
import HeaderLayout from './header'
import './style.scss'

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div style={{ position: 'relative', minHeight: '100%', top: '0' }}>
            <div id='sticky-layout'>
                <HeaderLayout />
                <div className='stripe'>
                        {children}
                </div>
            </div>
            <FooterLayout />
        </div>
    )
}
