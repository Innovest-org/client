import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCommunityById } from '../../../../../Api/Endpoints/CommunityEndpoints';

const CommunityProfile = () => {
  const { community_id } = useParams();
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    const fetchCommunityDetails = async () => {
      try {
        const response = await getCommunityById(community_id);
        setCommunity(response.data);
      } catch (error) {
        console.error('Error fetching community details:', error);
      }
    };

    fetchCommunityDetails();
  }, [community_id]);

  if (!community) {
    return <div>Loading community details...</div>;
  }

  return (
    <div>
      <h1>{community.community_name}</h1>
      <p>{community.description}</p>
      <img src={community.image_url} alt={community.community_name} />
    </div>
  );
};

export default CommunityProfile;
