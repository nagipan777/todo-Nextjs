import { userQueryUser } from "../hooks/userQueryUser"
import { Loader } from "@mantine/core"

export const UserInfo = () => {
    const { data: user, status } = userQueryUser()
    if (status === 'loading') return <Loader />
    return <p>{user?.email}</p>
}
