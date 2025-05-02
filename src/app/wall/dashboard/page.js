import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import DigitalWallDashboard from 'Components/DigitalWall/DigitalWallDashboard/DigitalWallDashboard';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies }); // ✅ Server-side with cookies
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/wall/login');
  }

  return <DigitalWallDashboard user={user} />;
}
