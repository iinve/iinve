'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState, useMemo } from 'react';
import { getTemplateComponent } from 'utils/getTemplateComponent';

const DigitalWallRoot = ({ slug }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const supabase = useMemo(() => createClientComponentClient(), []);

  useEffect(() => {
    if (!slug) return;

    const fetchWall = async () => {
      try {
        const { data: digitalWall, error } = await supabase
          .from('digital_wall')
          .select('*')
          .eq('wall_slug', slug)
          .single(); // ✅ Ensure only one row is returned

        if (error) {
          console.error('Error fetching digital wall:', error);
          setData(null);
        } else {
          setData(digitalWall || null);
        }
      } catch (err) {
        console.error('Unexpected fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWall();
  }, [slug, supabase]);

  return getTemplateComponent(data, data?.template, isLoading);
};

export default DigitalWallRoot;
