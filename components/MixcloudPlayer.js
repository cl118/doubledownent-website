import React from 'react';
import ReactPlayer from 'react-player';

const MixcloudPlayer = ({ mixcloudUrl }) => {
  return (
    <div>
      <ReactPlayer url={mixcloudUrl} controls />
    </div>
  );
};

export default MixcloudPlayer;
