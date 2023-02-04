import { useRouter } from "next/router";

function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(">>>nested<<<",router,router.query);
    return <div>
      <h1> SelectedClientProjectPage</h1>
    </div>
  }
  
  export default SelectedClientProjectPage;