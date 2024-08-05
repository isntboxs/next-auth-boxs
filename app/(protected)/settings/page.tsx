import { auth, signOut } from "@/auth"

const SettingsPage = async () => {
  const session = await auth()
  return (
    <div>
      <h1 className="text-3xl font-bold">{JSON.stringify(session)}</h1>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  )
}

export default SettingsPage
