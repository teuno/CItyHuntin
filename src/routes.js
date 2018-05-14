import MainMenu from '@/pages/MainMenu'
import NormalRoute from '@/pages/normalroute/NormalRoute'
import MoreRouteInfo from '@/pages/normalroute/MoreRouteInfo'
import SummaryOfRoute from '@/pages/normalroute/SummaryOfRoute'
import NormalRouteMap from '@/pages/normalroute/NormalRouteMap'
import TreasureHunt from '@/pages/treasurehunt/TreasureHunt'
import MoreTreasureHuntInfo from '@/pages/treasurehunt/MoreTreasureHuntInfo'
import Achievements from '@/pages/Achievements'
import Settings from '@/pages/settings/Settings'
import Profile from '@/pages/settings/Profile'
import Language from '@/pages/settings/Language'
import TermsAndConditions from '@/pages/settings/TermsAndConditions'


export const routes = [
  {
    path: "/",
    redirect: {
      name: "main"
    }
  },
  {name: 'main', path: '/', component: MainMenu},

  {name: 'treasurehunt', path: '/treasurehunt', component: TreasureHunt},
  {name: 'moretreasurehuntinfo', path: '/moretreasurehuntinfo', component: MoreTreasureHuntInfo},

  {name: 'normalroute', path: '/normalroute', component: NormalRoute},
  {name: 'morerouteinfo', path: '/morerouteinfo', component: MoreRouteInfo},
  {name: 'normalroutemap', path: '/normalroutemap', component: NormalRouteMap},
  {name: 'summaryofroute', path: '/summaryofroute', component: SummaryOfRoute},

  {name: 'achievements', path: '/achievements', component: Achievements},

  {name: 'settings', path: '/settings', component: Settings},
  {name: 'profile', path: '/profile', component: Profile},
  {name: 'language', path: '/language', component: Language},
  {name: 'termsAndConditions', path: '/termsAndConditions', component: TermsAndConditions},
];
