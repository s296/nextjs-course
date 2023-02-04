import { useRouter } from "next/router";

function PortfolioProjectPage() {
    const router =  useRouter();
    console.log("router",router.pathname,router.query)

    return <div>
      <h1> Portfolio project page {router.query.projectid}</h1>
    </div>
  }
  
  export default PortfolioProjectPage;