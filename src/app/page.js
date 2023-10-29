import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title="Terpopuler" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime}/>
      </section>

      {/* anime terbaru */}
      <section>
        <Header title="Terbaru" linkTitle="Lihat Semua" linkHref="/new" />
        <AnimeList api={topAnime}/>
      </section>
    </>
  )
}

export default Page