import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        {
          linkHref && linkTitle 
          ?
          <Link href={linkHref} className="underline transition-all md:text-xl text-md hover:text-green-500">
            {linkTitle}
          </Link>
          : null
        }
        
      </div>
  )
}

export default Header