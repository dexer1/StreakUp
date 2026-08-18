import { ChallengeDetail } from "@/components/challenges/challenge-detail";
export default async function ChallengeDetailPage({params}:{params:Promise<{id:string}>}){const {id}=await params;return <ChallengeDetail id={id}/>}
