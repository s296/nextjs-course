import { useRouter } from "next/router";

function BlugPostPage() {
    const router = useRouter();
    console.log(">>>BlugPostPage<<<",router.query);
    
    return <div>
      <h1> BlugPostPAge</h1>
    </div>
}
  
export default BlugPostPage;