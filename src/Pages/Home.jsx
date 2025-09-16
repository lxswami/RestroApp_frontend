import React from 'react'
import TopBanner from '../Components/HomePage/TopBanner'
import FlavourMenu from '../Components/HomePage/FlavourMenu'
import OwnerMsgSection from '../Components/HomePage/OwnerMsgSection'
import ClientFeedSection from '../Components/HomePage/ClientFeedSection'

export default function Home() {
    return (
        <div>
            <TopBanner />
            <FlavourMenu />
            <OwnerMsgSection />
            <ClientFeedSection />
        </div>
    )
}
