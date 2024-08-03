import { auth } from "@/auth"

const SettingsPage = async () => {
  const session = await auth()
  return (
    <div>
      <h1 className="text-3xl font-bold">{JSON.stringify(session)}</h1>
    </div>
  )
}

export default SettingsPage
