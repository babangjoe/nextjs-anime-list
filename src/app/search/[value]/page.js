import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ( {params} ) => {
  const { value } = params

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${value}`)
  const searchAnime = await response.json()

  return (
    <>
      {/* hasil pencarian */}
      <section>
        <Header title={`Hasil pencarian untuk ${value}`} />
        <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page