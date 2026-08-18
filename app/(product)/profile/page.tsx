import { ProfileView } from "@/components/profile/profile-view"; import { currentUser } from "@/data/mock-data"; export default function ProfilePage(){return <ProfileView user={currentUser} own/>}
