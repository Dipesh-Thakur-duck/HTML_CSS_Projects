import {videoInfo} from "./video_info.js";

let html = "";

videoInfo.forEach(video=>{
  html += `
    <div class="video-container">
      <div class="thumbnail-videolength-container">
        <img src="${video.thumbnail}" class="thumbnail-pic">
        <span class="video-length">${video.videoLength}</span>
      </div>
      
      <div class="video-info-container">
        <div class="channelpic-channeltooltip-container">
          <img src="${video.channelPic}" class="channel-pic">
          <div class="channel-tooltip">
            <img src="${video.channelPic}" class="channel-tooltip-pic">
            <div class="channel-tooltip-data-container">
              <span class="channel-tooltip-name">
                ${video.channelName}
              </span>
              <span class="channel-tooltip-subscribers">${video.subscribers}</span>
            </div>
          </div>
        </div>
        
        <div class="video-info">
          <p class="video-title">${video.videoTitle}</p>
          <div class="video-stats">
            <p class="channel-name">${video.channelName}</p>
            <div class="stats">
              <span class="views">${video.views}</span> &middot; <span class="age">${video.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});
const container = document.querySelector('.video-grid');
container.innerHTML = html;