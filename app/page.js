import HomeHeader from '@/components/homeHeader'
import Logo from '@/components/logo'
import Search from '@/components/search'

export default function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <Logo width={325} height={110} />
      <Search />
    </div>
  )
}
