'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { getTemplateComponent } from 'utils/getTemplateComponent';

const DigitalWallRoot = ({ slug }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClientComponentClient()

  console.log(slug,'==slug')
  useEffect(() => {
    async function fetchWall() {
      if (!slug) return;
      try {
        const { data: digitalWall } = await supabase.from('digital_wall').select('*').eq('wall_slug', slug )
        console.log(digitalWall, '==digitalWall')
        setData(...digitalWall);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWall();
  }, [slug]);

console.log(data, '==data')

  return getTemplateComponent(data, data?.template, isLoading)
}

export default DigitalWallRoot