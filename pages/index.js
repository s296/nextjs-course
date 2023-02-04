import Link from "next/link";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();
  function onClick(){
    // router.push("/portfolio/4");
    router.replace("/portfolio/4");
    // router.push({
    //   pathname : "/portfolio/[projectid]",
    //   query : {projectid:2,id:3}
    // })
  }

  return <div>
    <h1> HomePAge</h1>
    <ul>
      <li>
        <Link href="/portfolio/1"> Portfolio </Link>
      </li>
      <li>
        <Link href={{
          pathname : "/portfolio/[projectid]",
          query : {projectid:2,id:3}
        }}> Portfolio </Link>
      </li>
    </ul>
    <button onClick={onClick}> click me</button>
  </div>
}

export default HomePage;