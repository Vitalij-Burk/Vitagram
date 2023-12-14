import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount()
  const navigate = useNavigate()
  const { user } = useUserContext()

  useEffect(() => {
    if (isSuccess) navigate(0)
  }, [isSuccess])

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/assets/icons/messenger.png" alt="logo" width={28} />
          <h2 className="h3-bold md:h2-bold">Vitagram</h2>
        </Link>

        <div className="flex gap-4">
          <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut()}>
            <img src="assets/icons/logout.png" width={30} height={30} alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img src={user.imageUrl || '/assets/icons/user.png'} alt="profile" className="h-8 w-8 rounded-full" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Topbar